# Milestone-Based Implementation Roadmap

**Project:** Sathiyavani Charitable Trust Website  
**Date:** October 2026  
**Document Status:** Phased Delivery Schedule & Governance Framework  

---

## 1. Roadmap Overview & Timeline Phasing

To deliver maximum value without compromising security or design quality, development is partitioned into seven distinct, sequential phases:

```
[ Phase 1: Discovery & Architecture ] ───▶ (CURRENT PHASE - Complete)
                 │
                 ▼
[ Phase 2: Design System & Core Prototypes ] ───▶ (Next upon sign-off)
                 │
                 ▼
[ Phase 3: Public Website Implementation ]
                 │
                 ▼
[ Phase 4: Database & Administration Suite ]
                 │
                 ▼
[ Phase 5: Forms, Inquiries & Notifications ]
                 │
                 ▼
[ Phase 6: Full-Stack QA, Accessibility & Security Audit ]
                 │
                 ▼
[ Phase 7: Staging Verification, Netlify Cutover & Launch ]
```

---

## 2. Phase-by-Phase Execution Plan

### Phase 1: Discovery, Research & Project Architecture (Current Phase)
- **Objective:** Deep audit of workspace, environment, reference website, stakeholder needs, and creation of technical blueprints.
- **Tasks Completed:**
  - Workspace and system inspection.
  - Comprehensive 10-page audit of `sathiyavanitrust.netlify.app`.
  - Brand token extraction from authentic vector logo.
  - Production of 13 architectural blueprints.
- **Deliverables:** Complete documentation suite in `docs/`.
- **Completion Condition:** Stakeholder approval of architectural proposals before code scaffolding.

---

### Phase 2: Design System & Representative Page Prototypes
- **Objective:** Scaffold modern Next.js project with Tailwind CSS design tokens and develop interactive UI prototypes.
- **Tasks:**
  - Initialise Next.js 14/15 TypeScript application with strict ESLint and Tailwind CSS.
  - Configure font loading (`Outfit` / `Plus Jakarta Sans` + `Inter`).
  - Build foundational atom UI library (Buttons, Badges, Cards, Focus Rings, Drawer).
  - Construct low-fidelity interactive prototypes of the Homepage and one Program page.
- **Dependencies:** Sign-off on Phase 1 color palette and typography.
- **Deliverables:** Running local prototype with responsive navbar and hero section.
- **Testing:** Viewport responsiveness tests (375px mobile to 1440px desktop).

---

### Phase 3: Public Website Implementation
- **Objective:** Implement all public-facing informational pages and layout components.
- **Tasks:**
  - Build universal header with desktop dropdowns and accessible mobile drawer.
  - Implement `/about`, `/about/founder`, and `/about/transparency`.
  - Implement all 5 program subpages (`/programs/education`, `/programs/child-development`, `/programs/community-welfare`, `/programs/festivals`, `/programs/environment`).
  - Implement `/impact` dashboard with verified beneficiary tables.
  - Implement `/contact` with interactive map and one-tap dialing.
  - Add SEO Open Graph metadata, canonicals, and Schema.org JSON-LD.
- **Dependencies:** Final verified copy from trust leadership.
- **Deliverables:** Complete public site navigable in development mode.
- **Testing:** Playwright routing and broken link crawler.

---

### Phase 4: Database & Administration Suite
- **Objective:** Establish the Supabase PostgreSQL data layer, Row Level Security (RLS), and the protected `/admin` portal.
- **Tasks:**
  - Execute database migrations for tables (`admin_profiles`, `programs`, `impact_metrics`, `inquiries`, `audit_logs`).
  - Configure Supabase Auth for trust administrators.
  - Develop admin dashboard UI with metric draft/review/publish controls.
  - Implement media library with Supabase Storage.
- **Dependencies:** Supabase project provisioning and API keys.
- **Deliverables:** Operational admin area with secure authentication.
- **Testing:** RLS security tests asserting anonymous users cannot read private records.

---

### Phase 5: Forms, Inquiries & Notifications
- **Objective:** Replace manual WhatsApp dependency with structured, spam-resistant web forms.
- **Tasks:**
  - Implement Server Actions for Volunteer, Sponsorship, Corporate CSR, and General forms.
  - Integrate Zod schema validation and honeypot bot trap.
  - Configure rate limiting on form endpoints.
  - Set up asynchronous notification webhook (Email / WhatsApp alert to trust coordinator).
- **Dependencies:** Notification provider credentials (e.g. Resend / WhatsApp Business).
- **Deliverables:** Fully functioning interactive forms with database logging.
- **Testing:** Automated form fuzzing and malicious payload rejection tests.

---

### Phase 6: Full-Stack QA, Accessibility & Remediation
- **Objective:** Rigorous audit of performance, security, and accessibility compliance.
- **Tasks:**
  - Run full Playwright test suite across Chromium, Firefox, and WebKit mobile viewports.
  - Execute automated Axe accessibility scans (remediate any WCAG 2.2 AA flags).
  - Conduct Lighthouse CI audits across all core routes.
  - Perform cross-browser UI verification and screen-reader tests.
- **Dependencies:** Completed Phases 3, 4, and 5.
- **Deliverables:** QA sign-off report with zero critical or serious defects.
- **Testing:** 100% test pass rate across unit, integration, and E2E suites.

---

### Phase 7: Deployment Preparation & Launch
- **Objective:** Deploy production application to Netlify and execute public cutover.
- **Tasks:**
  - Configure Netlify build pipeline, caching rules, and security headers.
  - Conduct staging smoke testing on Netlify Preview URL.
  - Verify official trust registration credentials on live page.
  - Execute DNS cutover for custom domain.
  - Post-deployment verification and handover training documentation for administrators.
- **Dependencies:** Client sign-off and production domain credentials.
- **Deliverables:** Live production website at `sathiyavanitrust.netlify.app` / custom domain.

---

## 3. Dependency & Approval Gate Matrix

| Task Category | Can Proceed Immediately? | Requires External Approval / Decision | Responsible Party |
| :--- | :--- | :--- | :--- |
| **Phase 2 Scaffolding (Next.js & Tailwind setup)** | ✅ Yes | Architecture approval (this Phase 1 review) | Development Team |
| **Component Library Creation** | ✅ Yes | Design token alignment | UI/UX Lead |
| **Public Page Layouts & Wireframes** | ✅ Yes | Visual styling feedback | Design & Dev Team |
| **Official Trust Registration Publication** | ⏳ Blocked | Copy of Registered Trust Deed & Darpan ID | Trust Board (Mr. Raghu N.) |
| **80G / 12A Tax Exemption Disclosures** | ⏳ Blocked | Formal Order from Income Tax Department | Trust Board |
| **Diwali Beneficiary Historical Validation** | ⏳ Blocked | Physical distribution registers or signed memo | Trust Board |
| **Police Library Partnership Text** | ⏳ Blocked | Formal confirmation of facility usage terms | Trust Board |
| **Exnora Collaboration Confirmation** | ⏳ Blocked | Confirmation of active joint programs | Trust Board |
