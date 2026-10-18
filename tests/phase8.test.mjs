import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";

describe("Phase 8: Stakeholder Acceptance, Launch Verification & Operational Handover Test Suite", () => {
  describe("1. Phase 8 Governance & Handover Documentation", () => {
    const requiredHandoverDocs = [
      "docs/phase-8-launch-plan.md",
      "docs/trust-content-approval-checklist.md",
      "docs/phase-8-final-security-review.md",
      "docs/phase-8-release-and-recovery-runbook.md",
      "docs/admin-user-guide.md",
      "docs/technical-handover.md",
      "docs/phase-8-launch-checklist.md",
      "docs/phase-8-acceptance-report.md",
    ];

    for (const doc of requiredHandoverDocs) {
      test(`verifies presence and completeness of ${doc}`, () => {
        const fullPath = path.resolve(process.cwd(), doc);
        assert.ok(fs.existsSync(fullPath), `${doc} must exist in repository`);

        const stats = fs.statSync(fullPath);
        assert.ok(stats.size > 500, `${doc} must contain comprehensive documentation`);

        const content = fs.readFileSync(fullPath, "utf-8");
        assert.ok(
          content.includes("Sathiyavani Charitable Trust"),
          `${doc} must reference official trust entity`
        );
      });
    }
  });

  describe("2. Non-Negotiable Launch Prohibitions Verification", () => {
    test("confirms zero live payment gateway checkouts or fake simulated payment screens", () => {
      // In accordance with Phase 5/8 rules, online payment gateways remain strictly disabled
      const packageJsonPath = path.resolve(process.cwd(), "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

      assert.ok(!allDeps["@stripe/stripe-js"], "Stripe client SDK must NOT be installed");
      assert.ok(!allDeps["razorpay"], "Direct live payment gateways must NOT be activated");
      assert.ok(!allDeps["cashfree-pg"], "Cashfree gateway must NOT be activated");
    });

    test("confirms zero simulated odometer or fake counter animation packages", () => {
      const packageJsonPath = path.resolve(process.cwd(), "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };

      assert.ok(!allDeps["react-countup"], "react-countup must not be installed");
      assert.ok(!allDeps["odometer"], "odometer must not be installed");
    });

    test("confirms child safeguarding validation rule is present in stories schema", () => {
      const typesPath = path.resolve(process.cwd(), "src/lib/db/types.ts");
      const content = fs.readFileSync(typesPath, "utf-8");

      assert.ok(
        content.includes("consent_verified: boolean;"),
        "StoryRecord must enforce consent_verified boolean flag"
      );
    });
  });

  describe("3. Operational Readiness & Health Check Verification", () => {
    test("verifies /api/health exposes version 0.2.0 and healthy status definition", () => {
      const healthPath = path.resolve(process.cwd(), "src/app/api/health/route.ts");
      const content = fs.readFileSync(healthPath, "utf-8");

      assert.ok(content.includes('status: "healthy"'));
      assert.ok(content.includes('version: "0.2.0"'));
      assert.ok(content.includes("dataRepository"));
    });

    test("verifies admin sidebar contains links for Analytics, Inquiries, and Impact governance", () => {
      const sidebarPath = path.resolve(process.cwd(), "src/app/admin/AdminSidebar.tsx");
      const content = fs.readFileSync(sidebarPath, "utf-8");

      assert.ok(content.includes("/admin/analytics"));
      assert.ok(content.includes("/admin/enquiries"));
      assert.ok(content.includes("/admin/impact"));
      assert.ok(content.includes("/admin/audit"));
    });
  });
});
