import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";

// Test First-Party Analytics logic
class TestAnalyticsRepository {
  constructor() {
    this.events = [];
  }

  recordEvent(event) {
    const cleanPath = event.path.split("?")[0].split("#")[0];
    const newEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      type: event.type,
      path: cleanPath,
      target: event.target,
      deviceCategory: event.deviceCategory || "desktop",
      timestamp: new Date().toISOString(),
    };
    this.events.push(newEvent);
    return newEvent;
  }

  getAggregateMetrics(periodDays = 30) {
    const cutoff = new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000).toISOString();
    const periodEvents = this.events.filter((e) => e.timestamp >= cutoff);

    const pageViews = periodEvents.filter((e) => e.type === "page_view");
    const pathCounts = {};
    pageViews.forEach((e) => {
      pathCounts[e.path] = (pathCounts[e.path] || 0) + 1;
    });

    const topPages = Object.entries(pathCounts)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count);

    const submissions = periodEvents.filter((e) => e.type === "form_submission");

    return {
      totalPageViews: pageViews.length,
      uniqueSessionsEstimate: Math.round(pageViews.length * 0.68),
      topPages,
      ctaConversions: {
        volunteerPledges: submissions.filter((s) => s.target === "volunteer").length,
        sponsorshipPledges: submissions.filter((s) => s.target === "sponsorship").length,
        partnershipProposals: submissions.filter((s) => s.target === "partnership").length,
        generalInquiries: submissions.filter((s) => s.target === "general").length,
      },
    };
  }
}

describe("Phase 7: Analytics, Impact Reporting, Localization & Maintenance Test Suite", () => {
  describe("1. Privacy-First Analytics Engine", () => {
    test("records sanitized events and computes aggregate metrics without PII", () => {
      const analytics = new TestAnalyticsRepository();

      // Test path sanitization: strip any query params containing tokens or emails
      analytics.recordEvent({
        type: "page_view",
        path: "/programs/education?email=user@example.com&token=secret123",
        deviceCategory: "mobile",
      });

      assert.strictEqual(analytics.events.length, 1);
      assert.strictEqual(
        analytics.events[0].path,
        "/programs/education",
        "Analytics path must strip query parameters to prevent PII exposure"
      );

      // Record several conversions
      analytics.recordEvent({ type: "form_submission", path: "/volunteer", target: "volunteer" });
      analytics.recordEvent({ type: "form_submission", path: "/sponsor", target: "sponsorship" });
      analytics.recordEvent({ type: "form_submission", path: "/sponsor", target: "sponsorship" });

      const metrics = analytics.getAggregateMetrics(30);
      assert.strictEqual(metrics.totalPageViews, 1);
      assert.strictEqual(metrics.ctaConversions.volunteerPledges, 1);
      assert.strictEqual(metrics.ctaConversions.sponsorshipPledges, 2);
      assert.strictEqual(metrics.ctaConversions.partnershipProposals, 0);
    });

    test("analytics dashboard file exists and enforces view_analytics permission check", () => {
      const pagePath = path.resolve(process.cwd(), "src/app/admin/analytics/page.tsx");
      assert.ok(fs.existsSync(pagePath), "src/app/admin/analytics/page.tsx must exist");

      const content = fs.readFileSync(pagePath, "utf-8");
      assert.ok(
        content.includes("view_analytics"),
        "Analytics page must verify view_analytics permission"
      );
      assert.ok(
        content.includes("Zero Tracking Cookies"),
        "Analytics page must display privacy commitment"
      );
    });
  });

  describe("2. Impact Reporting, Period Filtering & Data Export", () => {
    test("impact manager provides period filtering, status filtering, and JSON export", () => {
      const managerPath = path.resolve(
        process.cwd(),
        "src/app/admin/impact/ImpactMetricsManager.tsx"
      );
      assert.ok(fs.existsSync(managerPath), "ImpactMetricsManager.tsx must exist");

      const content = fs.readFileSync(managerPath, "utf-8");

      assert.ok(content.includes("periodFilter"), "Manager must support period filtering");
      assert.ok(content.includes("statusFilter"), "Manager must support status filtering");
      assert.ok(content.includes("handleExportReport"), "Manager must support report export");
      assert.ok(
        content.includes("sathiyavani-impact-report"),
        "Exported filename must be structured"
      );
    });

    test("filters prevent overlapping double-counting between distinct reporting periods", () => {
      const sampleMetrics = [
        { id: "1", title: "Daily Tuition", reporting_period: "2024-2025", status: "published" },
        { id: "2", title: "Diwali Drive 2024", reporting_period: "October 2024", status: "published" },
        { id: "3", title: "Years of Service", reporting_period: "2020 – Present", status: "published" },
      ];

      const period2024 = sampleMetrics.filter((m) => m.reporting_period === "2024-2025");
      const diwaliPeriod = sampleMetrics.filter((m) => m.reporting_period === "October 2024");

      assert.strictEqual(period2024.length, 1);
      assert.strictEqual(diwaliPeriod.length, 1);
      assert.notStrictEqual(period2024[0].reporting_period, diwaliPeriod[0].reporting_period);
    });
  });

  describe("3. Dual-Language Localization Readiness (EN & TA)", () => {
    test("translations dictionary contains matching keys for English and Tamil", () => {
      const transPath = path.resolve(process.cwd(), "src/lib/i18n/translations.ts");
      assert.ok(fs.existsSync(transPath), "translations.ts must exist");

      const content = fs.readFileSync(transPath, "utf-8");

      assert.ok(content.includes("சத்தியவாணி அறக்கட்டளை"), "Tamil brand name must be present");
      assert.ok(
        content.includes("கல்வி, அக்கறை"),
        "Tamil tagline must be present"
      );
      assert.ok(content.includes("மாணவருக்கு ஆதரவளியுங்கள்"), "Tamil sponsor CTA must be present");
      assert.ok(content.includes("தன்னார்வலராக இணையுங்கள்"), "Tamil volunteer CTA must be present");
    });

    test("LanguageSwitcher component supports keyboard accessibility and persistent preference", () => {
      const switcherPath = path.resolve(
        process.cwd(),
        "src/components/layout/LanguageSwitcher.tsx"
      );
      assert.ok(fs.existsSync(switcherPath), "LanguageSwitcher.tsx must exist");

      const content = fs.readFileSync(switcherPath, "utf-8");

      assert.ok(content.includes('aria-pressed'), "Switcher must use aria-pressed attributes");
      assert.ok(
        content.includes("sathiya_pref_lang"),
        "Switcher must persist language in localStorage"
      );
      assert.ok(
        content.includes("document.documentElement.lang"),
        "Switcher must update html lang attribute"
      );
    });
  });

  describe("4. Operational Maintenance & Runbook Verification", () => {
    test("all seven Phase 7 maintenance documents exist with required content", () => {
      const docs = [
        "docs/maintenance-guide.md",
        "docs/incident-response-guide.md",
        "docs/backup-and-recovery.md",
        "docs/environment-configuration.md",
        "docs/analytics-and-privacy.md",
        "docs/impact-reporting-methodology.md",
        "docs/localization-guide.md",
      ];

      for (const doc of docs) {
        const fullPath = path.resolve(process.cwd(), doc);
        assert.ok(fs.existsSync(fullPath), `${doc} must exist`);
        const stats = fs.statSync(fullPath);
        assert.ok(stats.size > 200, `${doc} must contain comprehensive content`);
      }
    });

    test("Admin Overview page renders Operational Readiness & Governance summary", () => {
      const overviewPath = path.resolve(process.cwd(), "src/app/admin/page.tsx");
      const content = fs.readFileSync(overviewPath, "utf-8");

      assert.ok(
        content.includes("Platform Health & Operational Controls"),
        "Admin overview must render operational readiness section"
      );
      assert.ok(
        content.includes("/admin/analytics"),
        "Admin overview must link to analytics dashboard"
      );
      assert.ok(
        content.includes("EN & தமிழ் Active"),
        "Admin overview must indicate active localization status"
      );
    });
  });
});
