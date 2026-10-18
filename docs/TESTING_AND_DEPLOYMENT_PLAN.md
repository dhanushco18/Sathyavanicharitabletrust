# Testing, Quality Assurance & Deployment Strategy

**Project:** Sathiyavani Charitable Trust  
**Date:** October 2026  
**Document Status:** QA & Release Architecture Blueprint  

---

## 1. Testing Pyramid & Verification Framework

To guarantee institutional reliability, every release will be verified through a multi-tiered testing pipeline:

```
               / \
              /   \
             / E2E \       Playwright End-to-End Tests
            / Browser\     (User journeys, form submissions, mobile)
           /-----------\
          / Integration \   Server Actions, Supabase RLS tests,
         /   & Auth      \  Validation schema tests (Zod)
        /-----------------\
       /    Unit Tests     \ Vitest (Formatters, calculation helpers,
      / & Static Analysis   \ tsc typecheck, ESLint, Axe accessibility)
     /-----------------------\
```

---

## 2. Test Execution Matrix

| Test Layer | Tools Used | Scope & Target Coverage | Pass Criteria |
| :--- | :--- | :--- | :--- |
| **Static Analysis** | TypeScript (`tsc --noEmit`), ESLint | Entire codebase (`src/**/*`). | 0 TypeScript errors, 0 ESLint warnings, 0 unused imports. |
| **Accessibility (Automated)** | Playwright + `@axe-core/playwright` | All public routes (`/`, `/about`, `/programs/**`, `/contact`, `/get-involved/**`). | 0 WCAG 2.2 Level AA violations. |
| **Unit Testing** | Vitest | Validation schemas (`validations/*.ts`), date/currency utilities, honeypot filters. | 100% logic branch coverage on input sanitization. |
| **Integration Testing** | Vitest + Supabase Local Emulator | Server Actions, database insert mutations, RLS permission policies. | Unauthorized read attempts return empty array / 401. |
| **End-to-End (E2E)** | Playwright (Chromium, Firefox, Mobile Safari WebKit) | 1. Volunteer Form Submission Flow.<br>2. Sponsorship Pledge Flow.<br>3. Admin Login & Metric Approval Flow.<br>4. Navigation Drawer & Focus Trap Flow. | All user journeys complete with confirmed tracking IDs; responsive snapshots match across viewports. |
| **Performance Testing**| Lighthouse CI | Homepage, Programs Hub, Impact Page. | Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100. |

---

## 3. Form Submission & Security Test Cases

### 3.1 Automated Test Suite Specifications (Playwright)
1. **TC-FORM-01: Valid Submission (Happy Path):**
   - Fill valid name, valid 10-digit Indian mobile number (`+91 98414 54501`), valid message.
   - Assert: Submit button shows loading spinner → success alert appears with reference ID → database record created.
2. **TC-FORM-02: Malicious Input & XSS Fuzzing:**
   - Attempt `<script>alert('xss')</script>` in name and message fields.
   - Assert: Server Action escapes input; script is rendered inertly as raw text.
3. **TC-FORM-03: Bot Honeypot Rejection:**
   - Script populates hidden field `website_url_check`.
   - Assert: Submission returns 200 OK to the bot (preventing detection) but drops record without writing to database.
4. **TC-FORM-04: Rate Limiter Enforcement:**
   - Submit 6 consecutive requests from the same simulated IP within 60 seconds.
   - Assert: 6th request receives HTTP 429 "Too Many Requests" with clear retry-after announcement.

---

## 4. Deployment Architecture & Strategy

### 4.1 Environments & Staging Isolation
- **Local Development:** `localhost:3000` connected to Supabase Local Docker or Dev Project.
- **Staging / Preview Environment:** Deployed automatically on every GitHub Pull Request via Netlify Deploy Previews (`deploy-preview-*.sathiyavanitrust.netlify.app`). Used for stakeholder review and automated Playwright runs.
- **Production Environment:** `sathiyavanitrust.netlify.app` (and custom domain `sathiyavanitrust.org` upon DNS delegation). Triggered strictly by merges into the protected `main` branch.

### 4.2 Database Migration Protocol
1. Schema changes are authored as version-controlled SQL files in `supabase/migrations/`.
2. Migrations are tested locally and on the staging database.
3. Production migration is executed during scheduled maintenance windows with immediate automated health checks.

### 4.3 Rollback & Disaster Recovery
- **Instant Frontend Rollback:** Netlify Atomic Deployments allow 1-click instantaneous rollback to any previous commit hash.
- **Database Backups:** Daily automated backups in Supabase with Point-in-Time Recovery (PITR) enabled.

---

## 5. Production Release Checklist

Before public DNS switchover, all items must be explicitly signed off:
- [ ] TypeScript check clean (`npm run typecheck`).
- [ ] Unit & E2E tests pass (`npm run test && npm run test:e2e`).
- [ ] Environment variables configured in Netlify dashboard.
- [ ] Supabase Row Level Security (RLS) policies verified active.
- [ ] SSL certificate active and HSTS headers enabled.
- [ ] Custom 404 and Error boundary pages tested.
- [ ] Verified Trust Registration and 80G numbers inserted into footer and transparency page.
- [ ] Emergency contact phone number verified functional.
