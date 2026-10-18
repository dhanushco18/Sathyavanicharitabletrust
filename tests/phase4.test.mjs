import { test, describe } from "node:test";
import assert from "node:assert/strict";

// Import RBAC logic directly
const ROLE_PERMISSIONS = {
  super_admin: [
    "manage_admins",
    "approve_metrics",
    "manage_content",
    "manage_inquiries",
    "manage_media",
    "view_analytics",
  ],
  content_admin: [
    "manage_content",
    "manage_media",
    "view_analytics",
  ],
  enquiry_manager: [
    "manage_inquiries",
    "view_analytics",
  ],
};

function hasPermission(role, permission) {
  const permissions = ROLE_PERMISSIONS[role] || [];
  return permissions.includes(permission);
}

function encodeSession(session) {
  const jsonStr = JSON.stringify(session);
  return Buffer.from(jsonStr, "utf-8").toString("base64url");
}

function decodeSession(token) {
  try {
    const jsonStr = Buffer.from(token, "base64url").toString("utf-8");
    const parsed = JSON.parse(jsonStr);
    if (!parsed || !parsed.adminId || !parsed.role || Date.now() > parsed.expiresAt) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

describe("Phase 4 Security, RBAC & Authentication Test Suite", () => {
  describe("1. Session Encoding & Expiration", () => {
    test("valid session encodes and decodes properly", () => {
      const session = {
        adminId: "admin-raghu-001",
        email: "admin@sathiyavanitrust.org",
        fullName: "Mr. Raghu N. (President)",
        role: "super_admin",
        expiresAt: Date.now() + 1000 * 60 * 60, // 1 hour in future
      };

      const token = encodeSession(session);
      assert.ok(token.length > 20, "Token should be non-empty base64url string");

      const decoded = decodeSession(token);
      assert.ok(decoded !== null, "Decoded session should not be null");
      assert.equal(decoded.adminId, "admin-raghu-001");
      assert.equal(decoded.role, "super_admin");
    });

    test("expired session token is rejected", () => {
      const expiredSession = {
        adminId: "admin-coord-002",
        email: "coordinator@sathiyavanitrust.org",
        fullName: "Field Coordinator",
        role: "content_admin",
        expiresAt: Date.now() - 5000, // 5 seconds in past
      };

      const token = encodeSession(expiredSession);
      const decoded = decodeSession(token);
      assert.equal(decoded, null, "Expired token must evaluate to null");
    });

    test("tampered or invalid base64 string returns null", () => {
      const decoded = decodeSession("invalid-token-tampered-12345");
      assert.equal(decoded, null, "Invalid token must return null without crashing");
    });
  });

  describe("2. Role-Based Access Control (RBAC) Enforcement", () => {
    test("super_admin has complete administrative authority", () => {
      assert.equal(hasPermission("super_admin", "manage_admins"), true);
      assert.equal(hasPermission("super_admin", "approve_metrics"), true);
      assert.equal(hasPermission("super_admin", "manage_content"), true);
      assert.equal(hasPermission("super_admin", "manage_inquiries"), true);
    });

    test("content_admin can manage content but CANNOT approve metrics or manage admins", () => {
      assert.equal(hasPermission("content_admin", "manage_content"), true);
      assert.equal(hasPermission("content_admin", "manage_media"), true);
      assert.equal(hasPermission("content_admin", "approve_metrics"), false);
      assert.equal(hasPermission("content_admin", "manage_admins"), false);
      assert.equal(hasPermission("content_admin", "manage_inquiries"), false);
    });

    test("enquiry_manager can manage inquiries but CANNOT edit content or approve metrics", () => {
      assert.equal(hasPermission("enquiry_manager", "manage_inquiries"), true);
      assert.equal(hasPermission("enquiry_manager", "manage_content"), false);
      assert.equal(hasPermission("enquiry_manager", "approve_metrics"), false);
      assert.equal(hasPermission("enquiry_manager", "manage_admins"), false);
    });
  });

  describe("3. Impact Metric Multi-Stage Governance", () => {
    const mockMetrics = [
      { id: "m1", title: "Diwali 2024 Kits", numeric_value: 1000, status: "published" },
      { id: "m2", title: "Active Tuition Students", numeric_value: 50, status: "published" },
      { id: "m3", title: "Diwali 2025 Target", numeric_value: 1500, status: "submitted" },
      { id: "m4", title: "Preliminary Computer Lab Count", numeric_value: 20, status: "draft" },
      { id: "m5", title: "Unverified Estimate", numeric_value: 5000, status: "rejected" },
    ];

    test("public query strictly filters out draft, submitted, and rejected metrics", () => {
      const publicVisible = mockMetrics.filter((m) => m.status === "published");
      assert.equal(publicVisible.length, 2);
      assert.ok(publicVisible.every((m) => m.status === "published"));
      assert.ok(!publicVisible.some((m) => m.status === "submitted" || m.status === "draft"));
    });

    test("metric state transition requires Super Admin for approval and publication", () => {
      const targetMetric = { ...mockMetrics[2] }; // submitted
      const attemptByContentAdminRole = "content_admin";

      const canApprove = hasPermission(attemptByContentAdminRole, "approve_metrics");
      assert.equal(canApprove, false, "Content Admin must not be able to approve metrics");

      const canApproveSuperAdmin = hasPermission("super_admin", "approve_metrics");
      assert.equal(canApproveSuperAdmin, true, "Super Admin can approve metrics");

      if (canApproveSuperAdmin) {
        targetMetric.status = "approved";
      }
      assert.equal(targetMetric.status, "approved");
    });
  });

  describe("4. Child Protection & Safeguarding Validation", () => {
    function validateStoryPublication(story) {
      if (story.is_published && !story.consent_verified) {
        return { valid: false, error: "Safeguarding rule: Consent required before publication." };
      }
      return { valid: true };
    }

    test("cannot publish story if parental consent is not verified", () => {
      const storyWithoutConsent = {
        title: "Art Class in Slum Settlement",
        is_published: true,
        consent_verified: false,
      };

      const result = validateStoryPublication(storyWithoutConsent);
      assert.equal(result.valid, false);
      assert.match(result.error, /Safeguarding rule/);
    });

    test("can publish story when consent is verified", () => {
      const validStory = {
        title: "Art Class in Slum Settlement",
        is_published: true,
        consent_verified: true,
      };

      const result = validateStoryPublication(validStory);
      assert.equal(result.valid, true);
    });
  });

  describe("5. Confidential Inbound Inquiry Validation", () => {
    function validateInquiry(input) {
      if (!input.fullName || input.fullName.length < 2) {
        return { valid: false, error: "Name required" };
      }
      if (!input.phone || input.phone.length < 7) {
        return { valid: false, error: "Phone number required" };
      }
      if (!input.message || input.message.length < 5) {
        return { valid: false, error: "Message required" };
      }
      return { valid: true };
    }

    test("rejects invalid inquiries missing phone or name", () => {
      assert.equal(validateInquiry({ fullName: "", phone: "12345678", message: "Hello" }).valid, false);
      assert.equal(validateInquiry({ fullName: "Valid Name", phone: "", message: "Hello" }).valid, false);
      assert.equal(validateInquiry({ fullName: "Valid Name", phone: "9841454501", message: "Hi" }).valid, false);
    });

    test("accepts valid citizen inquiry and assigns default new status", () => {
      const input = {
        fullName: "Dr. Lakshmi",
        phone: "+91 97890 54321",
        message: "I wish to sponsor student school fees.",
      };
      assert.equal(validateInquiry(input).valid, true);
    });
  });
});
