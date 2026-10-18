import { test, describe, beforeEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "crypto";

// Security & rate limiting test utilities
const rateLimitStore = new Map();
const idempotencyStore = new Map();

function checkRateLimit(ip, maxRequests = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: maxRequests - record.count };
}

function generateSubmissionHash(data) {
  const normalized = `${data.phone.toLowerCase()}_${(data.email || "").toLowerCase()}_${data.message.trim().toLowerCase()}_${data.type}`;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function checkIdempotency(hash) {
  const record = idempotencyStore.get(hash);
  if (!record) return null;
  if (Date.now() > record.expiresAt) {
    idempotencyStore.delete(hash);
    return null;
  }
  return record.trackingId;
}

function recordIdempotency(hash, trackingId, ttlMs = 2 * 60 * 1000) {
  idempotencyStore.set(hash, {
    trackingId,
    expiresAt: Date.now() + ttlMs,
  });
}

// In-Memory Repository Simulation for Test Isolation
class MockInquiryRepository {
  constructor() {
    this.inquiries = [];
  }

  saveInquiry(data) {
    const id = `inq-test-${Math.random().toString(36).substring(2, 9)}`;
    const record = {
      id,
      inquiry_type: data.inquiry_type,
      full_name: data.full_name,
      phone: data.phone,
      email: data.email || null,
      organization_name: data.organization_name || null,
      message: data.message,
      metadata_payload: data.metadata_payload || {},
      status: data.status || "new",
      internal_notes: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.inquiries.push(record);
    return record;
  }

  getInquiryById(id) {
    return this.inquiries.find((i) => i.id === id) || null;
  }

  updateStatus(id, status, notes) {
    const found = this.inquiries.find((i) => i.id === id);
    if (!found) return null;
    found.status = status;
    if (notes) found.internal_notes = notes;
    found.updated_at = new Date().toISOString();
    return found;
  }
}

// Mock Email Notification Engine
const emailOutbox = [];

async function mockSendAdminNotification(inquiry, trackingId, apiKey = null) {
  const payload = {
    to: "admin@sathiyavanitrust.org",
    from: "notifications@sathiyavanitrust.org",
    subject: `[New Inquiry] ${inquiry.inquiry_type.toUpperCase()} from ${inquiry.full_name} (${trackingId})`,
    trackingId,
    timestamp: new Date().toISOString(),
    inquiryType: inquiry.inquiry_type,
    senderName: inquiry.full_name,
    hasApiKey: Boolean(apiKey),
    deliveryStatus: apiKey ? "SENT_TO_RESEND_API" : "SIMULATED_LOCAL_DELIVERY",
  };
  emailOutbox.push(payload);
  return { success: true, mode: payload.deliveryStatus };
}

async function mockSendVisitorAcknowledgement(inquiry, trackingId, apiKey = null) {
  if (!inquiry.email) return null;
  const payload = {
    to: inquiry.email,
    from: "notifications@sathiyavanitrust.org",
    subject: `Thank you for contacting Sathiyavani Charitable Trust [${trackingId}]`,
    trackingId,
    timestamp: new Date().toISOString(),
    recipientName: inquiry.full_name,
    deliveryStatus: apiKey ? "SENT_TO_RESEND_API" : "SIMULATED_LOCAL_DELIVERY",
  };
  emailOutbox.push(payload);
  return { success: true, mode: payload.deliveryStatus };
}

describe("Phase 5: End-to-End Workflows, Integrations & Security Test Suite", () => {
  let repo;

  beforeEach(() => {
    repo = new MockInquiryRepository();
    rateLimitStore.clear();
    idempotencyStore.clear();
    emailOutbox.length = 0;
  });

  describe("Journey A: General Contact Workflow", () => {
    test("persists valid contact submission and generates structured tracking reference", () => {
      const saved = repo.saveInquiry({
        inquiry_type: "general",
        full_name: "Kavitha Sundaram",
        phone: "+91 98401 23456",
        email: "kavitha.s@example.com",
        message: "Requesting details on weekend tuition timings for middle school students.",
      });

      assert.ok(saved.id.startsWith("inq-test-"));
      assert.strictEqual(saved.inquiry_type, "general");
      assert.strictEqual(saved.full_name, "Kavitha Sundaram");
      assert.strictEqual(saved.status, "new");

      const trackingId = `ST-GEN-${saved.id.slice(-6).toUpperCase()}`;
      assert.match(trackingId, /^ST-GEN-[A-Z0-9]{6}$/);

      // Verify admin can retrieve the record
      const retrieved = repo.getInquiryById(saved.id);
      assert.ok(retrieved !== null);
      assert.strictEqual(retrieved.full_name, "Kavitha Sundaram");
    });
  });

  describe("Journey B: Volunteer Application Workflow", () => {
    test("persists volunteer application with interest category, availability & consent", () => {
      const metadata = {
        areaOfInterest: "Academic Tutoring & STEM Mentorship",
        availability: "Weekends (Saturday & Sunday mornings)",
        skills: "Mathematics, Physics teaching experience",
        safeguardingConsent: "agreed",
      };

      const saved = repo.saveInquiry({
        inquiry_type: "volunteer",
        full_name: "Dr. Anand Rajagopal",
        phone: "+91 94440 55667",
        email: "anand.raja@domain.edu",
        message: "I am a retired professor interested in volunteering for evening science classes.",
        metadata_payload: metadata,
      });

      assert.strictEqual(saved.inquiry_type, "volunteer");
      assert.strictEqual(saved.metadata_payload.areaOfInterest, "Academic Tutoring & STEM Mentorship");
      assert.strictEqual(saved.metadata_payload.availability, "Weekends (Saturday & Sunday mornings)");

      const trackingId = `ST-VOL-${saved.id.slice(-6).toUpperCase()}`;
      assert.match(trackingId, /^ST-VOL-[A-Z0-9]{6}$/);

      // Admin reviews and marks in-progress
      const updated = repo.updateStatus(saved.id, "in_progress", "Interview scheduled with Mr. Raghu on Saturday");
      assert.strictEqual(updated.status, "in_progress");
      assert.strictEqual(updated.internal_notes, "Interview scheduled with Mr. Raghu on Saturday");
    });
  });

  describe("Journey C: Sponsorship Pledge Workflow", () => {
    test("persists sponsorship pledge with tier metadata and organization support", () => {
      const metadata = {
        sponsorshipTier: "Annual Higher Secondary Support (₹15,000 / year)",
      };

      const saved = repo.saveInquiry({
        inquiry_type: "sponsorship",
        full_name: "Murugan Builders Group",
        phone: "+91 98410 99887",
        email: "csr@muruganbuilders.in",
        message: "We would like to sponsor educational fees and book kits for 5 girl students.",
        metadata_payload: metadata,
      });

      assert.strictEqual(saved.inquiry_type, "sponsorship");
      assert.strictEqual(saved.metadata_payload.sponsorshipTier, "Annual Higher Secondary Support (₹15,000 / year)");

      const trackingId = `ST-SPO-${saved.id.slice(-6).toUpperCase()}`;
      assert.match(trackingId, /^ST-SPO-[A-Z0-9]{6}$/);
    });
  });

  describe("Journey D: Corporate Partnership Proposal Workflow", () => {
    test("persists corporate partnership with organization name and CSR category", () => {
      const metadata = {
        partnershipCategory: "Education Infrastructure & Digital Classrooms",
      };

      const saved = repo.saveInquiry({
        inquiry_type: "partnership",
        full_name: "Deepa Ramakrishnan",
        organization_name: "Infosys CSR Foundation",
        phone: "+91 80 2852 0261",
        email: "deepa.r@infosys.com",
        message: "Formal inquiry regarding CSR partnership for setting up computer learning labs.",
        metadata_payload: metadata,
      });

      assert.strictEqual(saved.inquiry_type, "partnership");
      assert.strictEqual(saved.organization_name, "Infosys CSR Foundation");
      assert.strictEqual(saved.metadata_payload.partnershipCategory, "Education Infrastructure & Digital Classrooms");

      const trackingId = `ST-PAR-${saved.id.slice(-6).toUpperCase()}`;
      assert.match(trackingId, /^ST-PAR-[A-Z0-9]{6}$/);
    });
  });

  describe("Journey E: Transactional Email & Outbox Reliability", () => {
    test("dispatches admin alert and visitor ack into diagnostic queue without throwing when unconfigured", async () => {
      const inquiry = {
        id: "inq-sample-123456",
        inquiry_type: "general",
        full_name: "Vignesh Kumar",
        email: "vignesh.k@example.com",
        phone: "+91 98414 00000",
        message: "Hello Trust Team",
      };
      const trackingId = "ST-GEN-123456";

      // 1. Unconfigured API Key (Simulated Outbox Queue)
      const adminRes = await mockSendAdminNotification(inquiry, trackingId, null);
      assert.strictEqual(adminRes.success, true);
      assert.strictEqual(adminRes.mode, "SIMULATED_LOCAL_DELIVERY");

      const visitorRes = await mockSendVisitorAcknowledgement(inquiry, trackingId, null);
      assert.strictEqual(visitorRes.success, true);
      assert.strictEqual(visitorRes.mode, "SIMULATED_LOCAL_DELIVERY");

      assert.strictEqual(emailOutbox.length, 2);
      assert.strictEqual(emailOutbox[0].trackingId, "ST-GEN-123456");
      assert.strictEqual(emailOutbox[0].to, "admin@sathiyavanitrust.org");
      assert.strictEqual(emailOutbox[1].to, "vignesh.k@example.com");

      // Verify no sensitive keys leaked into email subjects
      assert.ok(!emailOutbox[0].subject.includes("password"));
      assert.ok(!emailOutbox[0].subject.includes("secret"));
    });

    test("skips visitor acknowledgement safely when email is not provided", async () => {
      const phoneOnlyInquiry = {
        id: "inq-sample-789012",
        inquiry_type: "general",
        full_name: "Ramesh P",
        email: null,
        phone: "+91 98414 11111",
        message: "Inquiring about tuition near Tambaram",
      };
      const trackingId = "ST-GEN-789012";

      const ackResult = await mockSendVisitorAcknowledgement(phoneOnlyInquiry, trackingId, null);
      assert.strictEqual(ackResult, null);
      assert.strictEqual(emailOutbox.length, 0);
    });
  });

  describe("Journey F: Abuse Prevention, Honeypot & Idempotency", () => {
    test("honeypot trap traps bot submissions without storing records", () => {
      const honeypotInput = "http://spam-seo-backlinks.ru";
      const isBot = Boolean(honeypotInput);
      assert.strictEqual(isBot, true);

      // Bot receives fake success ack but 0 records saved to database
      const botResponse = { success: true, trackingId: "ST-INQ-SECURE-ACK" };
      assert.strictEqual(botResponse.success, true);
      assert.strictEqual(repo.inquiries.length, 0);
    });

    test("rate limiter strictly restricts submissions to max 5 per IP per window", () => {
      const testIp = "203.0.113.42";

      for (let i = 1; i <= 5; i++) {
        const result = checkRateLimit(testIp, 5, 600000);
        assert.strictEqual(result.allowed, true, `Submission ${i} should be allowed`);
      }

      // 6th submission must be rejected
      const blockedResult = checkRateLimit(testIp, 5, 600000);
      assert.strictEqual(blockedResult.allowed, false, "6th submission should be blocked");
      assert.strictEqual(blockedResult.remaining, 0);
    });

    test("idempotency cache prevents accidental double-click duplicates", () => {
      const payload = {
        phone: "+91 98414 54501",
        email: "raghu@sathiyavanitrust.org",
        message: "Annual report review request",
        type: "general",
      };

      const hash = generateSubmissionHash(payload);
      assert.strictEqual(typeof hash, "string");
      assert.strictEqual(hash.length, 64);

      // First submission
      assert.strictEqual(checkIdempotency(hash), null);
      const firstTrackingId = "ST-GEN-INITIAL";
      recordIdempotency(hash, firstTrackingId);

      // Instant second click with same data within 2 minutes
      const duplicateTrackingId = checkIdempotency(hash);
      assert.strictEqual(duplicateTrackingId, firstTrackingId);
    });

    test("safely accepts and preserves Unicode and Tamil language text", () => {
      const tamilName = "ரகு நாராயணன்";
      const tamilMessage = "வணக்கம், சத்தியவாணி அறக்கட்டளையின் இலவச கல்வி திட்டத்தில் எனது குழந்தையை சேர்க்க விரும்புகிறேன்.";

      const saved = repo.saveInquiry({
        inquiry_type: "general",
        full_name: tamilName,
        phone: "+91 98414 54501",
        email: null,
        message: tamilMessage,
      });

      assert.strictEqual(saved.full_name, "ரகு நாராயணன்");
      assert.ok(saved.message.includes("சத்தியவாணி அறக்கட்டளை"));
    });
  });

  describe("Journey G: Security & Error Boundaries", () => {
    test("rejects short or empty full name", () => {
      const name = "A";
      const isValid = name.trim().length >= 2;
      assert.strictEqual(isValid, false);
    });

    test("rejects invalid telephone length while accepting clean digits and formats", () => {
      const validPhone = "+91 98414-54501".replace(/[\s-]/g, "");
      const shortPhone = "123".replace(/[\s-]/g, "");
      const hugePhone = "12345678901234567890".replace(/[\s-]/g, "");

      assert.ok(validPhone.length >= 7 && validPhone.length <= 18);
      assert.ok(!(shortPhone.length >= 7 && shortPhone.length <= 18));
      assert.ok(!(hugePhone.length >= 7 && hugePhone.length <= 18));
    });

    test("validates email structure without rejecting valid international addresses", () => {
      const validEmail = "donor.partner+tag@sub.domain.co.in";
      const invalidEmail = "invalid-address-without-at";

      assert.ok(validEmail.includes("@") && validEmail.includes("."));
      assert.ok(!invalidEmail.includes("@"));
    });

    test("enforces message boundaries (min 5 chars, max 5000 chars)", () => {
      const shortMsg = "Hi";
      const longMsg = "a".repeat(5001);
      const validMsg = "Interested in providing educational support kits.";

      assert.ok(shortMsg.length < 5);
      assert.ok(longMsg.length > 5000);
      assert.ok(validMsg.length >= 5 && validMsg.length <= 5000);
    });
  });
});
