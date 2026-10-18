import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";

describe("Phase 6: Production Readiness, Security, SEO & Operational Audit Test Suite", () => {
  describe("1. Security Headers & Server Hardening Verification", () => {
    test("next.config.mjs enforces strict security headers and disables poweredByHeader", async () => {
      const configPath = path.resolve(process.cwd(), "next.config.mjs");
      assert.ok(fs.existsSync(configPath), "next.config.mjs must exist");

      const fileContent = fs.readFileSync(configPath, "utf-8");

      assert.ok(
        fileContent.includes("poweredByHeader: false"),
        "poweredByHeader must be explicitly set to false to prevent technology reconnaissance"
      );

      assert.ok(
        fileContent.includes("X-Frame-Options") && fileContent.includes("DENY"),
        "X-Frame-Options must be set to DENY to prevent clickjacking"
      );

      assert.ok(
        fileContent.includes("X-Content-Type-Options") && fileContent.includes("nosniff"),
        "X-Content-Type-Options must be set to nosniff to prevent MIME confusion"
      );

      assert.ok(
        fileContent.includes("Strict-Transport-Security"),
        "Strict-Transport-Security (HSTS) header must be configured"
      );

      assert.ok(
        fileContent.includes("Content-Security-Policy"),
        "Content-Security-Policy header must be configured"
      );

      assert.ok(
        fileContent.includes("Permissions-Policy"),
        "Permissions-Policy must restrict high-risk hardware APIs"
      );
    });

    test("netlify.toml contains production security headers, node 20, and nextjs plugin", () => {
      const netlifyPath = path.resolve(process.cwd(), "netlify.toml");
      assert.ok(fs.existsSync(netlifyPath), "netlify.toml must exist");

      const tomlContent = fs.readFileSync(netlifyPath, "utf-8");

      assert.ok(
        tomlContent.includes("@netlify/plugin-nextjs"),
        "Netlify Next.js runtime plugin must be declared"
      );
      assert.ok(
        tomlContent.includes('NODE_VERSION = "20"'),
        "Node version must be pinned to LTS 20"
      );
      assert.ok(
        tomlContent.includes("X-Frame-Options"),
        "Netlify headers must enforce X-Frame-Options"
      );
    });
  });

  describe("2. Technical SEO & Schema.org Structured Data Verification", () => {
    test("root layout embeds valid Schema.org NGO JSON-LD graph with verified trust details", () => {
      const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");
      assert.ok(fs.existsSync(layoutPath), "src/app/layout.tsx must exist");

      const layoutContent = fs.readFileSync(layoutPath, "utf-8");

      assert.ok(
        layoutContent.includes('application/ld+json'),
        "Layout must include ld+json script tag"
      );
      assert.ok(
        layoutContent.includes('"@type": "NGO"'),
        "Schema.org type must be NGO"
      );
      assert.ok(
        layoutContent.includes("SITE_CONFIG.name") || layoutContent.includes("Sathiyavani Charitable Trust"),
        "Entity name must match official trust name"
      );
      assert.ok(
        layoutContent.includes("SITE_CONFIG.founderName") || layoutContent.includes("Mr. Raghu N."),
        "Founder name must be Mr. Raghu N."
      );
      assert.ok(
        layoutContent.includes("Chennai"),
        "Location must specify Chennai"
      );
    });

    test("robots.ts allows public indexing while strictly disallowing /admin/ and /api/", () => {
      const robotsPath = path.resolve(process.cwd(), "src/app/robots.ts");
      assert.ok(fs.existsSync(robotsPath), "src/app/robots.ts must exist");

      const robotsContent = fs.readFileSync(robotsPath, "utf-8");

      assert.ok(robotsContent.includes('disallow: ["/admin/", "/api/"]'));
      assert.ok(robotsContent.includes("sitemap.xml"));
    });

    test("sitemap.ts covers all 21 canonical public routes and strictly excludes admin paths", () => {
      const sitemapPath = path.resolve(process.cwd(), "src/app/sitemap.ts");
      assert.ok(fs.existsSync(sitemapPath), "src/app/sitemap.ts must exist");

      const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

      const requiredRoutes = [
        '""',
        '"/about"',
        '"/founder"',
        '"/mission"',
        '"/vision"',
        '"/programs"',
        '"/programs/education"',
        '"/programs/child-development"',
        '"/programs/community-outreach"',
        '"/programs/festival-support"',
        '"/programs/environment"',
        '"/impact"',
        '"/stories"',
        '"/events"',
        '"/get-involved"',
        '"/volunteer"',
        '"/sponsor"',
        '"/partnerships"',
        '"/contact"',
        '"/privacy"',
        '"/terms"',
      ];

      for (const route of requiredRoutes) {
        assert.ok(
          sitemapContent.includes(route),
          `Sitemap must include canonical public route ${route}`
        );
      }

      assert.ok(
        !sitemapContent.includes('"/admin"'),
        "Sitemap must NEVER include admin routes"
      );
    });
  });

  describe("3. Operational Monitoring & Health Endpoint Verification", () => {
    test("health check route exists and exposes structured diagnostic telemetry", () => {
      const healthPath = path.resolve(process.cwd(), "src/app/api/health/route.ts");
      assert.ok(fs.existsSync(healthPath), "src/app/api/health/route.ts must exist");

      const healthContent = fs.readFileSync(healthPath, "utf-8");

      assert.ok(healthContent.includes('"healthy"'), "Health route must declare healthy status");
      assert.ok(healthContent.includes("uptimeSeconds"), "Health route must report uptime");
      assert.ok(healthContent.includes("dataRepository"), "Health route must test data repository");
      assert.ok(healthContent.includes("no-store"), "Health route must disable client caching");
    });

    test("accessible global error boundary error.tsx exists and prevents raw crash exposure", () => {
      const errorPath = path.resolve(process.cwd(), "src/app/error.tsx");
      assert.ok(fs.existsSync(errorPath), "src/app/error.tsx must exist");

      const errorContent = fs.readFileSync(errorPath, "utf-8");

      assert.ok(errorContent.includes('"use client"'), "Error boundary must be a client component");
      assert.ok(errorContent.includes("reset"), "Error boundary must provide reset trigger");
      assert.ok(errorContent.includes("+91 98414 54501"), "Error boundary must display urgent contact");
    });
  });

  describe("4. Secret Isolation & Zero PII Exposure", () => {
    test("public constants file contains zero secrets or sensitive keys", () => {
      const constantsPath = path.resolve(process.cwd(), "src/lib/constants.ts");
      const content = fs.readFileSync(constantsPath, "utf-8");

      assert.ok(!content.includes("service_role"));
      assert.ok(!content.includes("SECRET"));
      assert.ok(!content.includes("PASSWORD"));
      assert.ok(!content.includes("API_KEY"));
    });

    test(".env.example contains only safe placeholders and no real secrets", () => {
      const envPath = path.resolve(process.cwd(), ".env.example");
      const content = fs.readFileSync(envPath, "utf-8");

      assert.ok(content.includes("your-supabase-service-role-key-here"));
      assert.ok(content.includes("re_your_api_key_here"));
      assert.ok(!content.includes("eyJhbGciOi")); // No real JWT tokens
    });
  });
});
