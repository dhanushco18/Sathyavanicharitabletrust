# Functional Requirements Specification & Traceability Matrix

**Project:** Sathiyavani Charitable Trust Website  
**Date:** October 2026  
**Document Status:** Baseline Specifications for Engineering & QA  

---

## 1. Classification Taxonomy

Features are classified according to the standard MoSCoW prioritization model:
- **P0: Required for Launch (Must Have):** Critical path features without which the site cannot be published.
- **P1: Recommended for Launch (Should Have):** High-value features that significantly enhance credibility and operations.
- **P2: Future Enhancement (Could Have):** Post-launch iterations (e.g., online payment gateways, multilingual toggles).
- **P3: Not Required / Out of Scope (Won't Have in Phase 1-5):** Over-engineered features with no current organizational justification (e.g., custom mobile app, complex donor accounting software).

---

## 2. Comprehensive Requirements Matrix

| ID | Feature Name | Priority | Feature Description | Expected System Behaviour | Verification & Testing Method | Dependencies |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-01** | Responsive Public Shell | **P0** | Global navigation header, announcement bar, mobile slide-out drawer, accessible footer. | Header remains sticky or accessible; mobile drawer opens smoothly with trap focus; all touch targets ≥48px. | Playwright responsive viewport suite (320px, 375px, 768px, 1280px); axe-core accessibility scan. | Design tokens, icons. |
| **FR-02** | Program Showcase Hub & Details | **P0** | Program catalog and dedicated subpages (Education, Child Dev, Welfare, Festivals, Environment). | Server-rendered pages with rich metadata, curriculum info, schedules, and contextual CTAs. | Automated 200 OK HTTP assertion; schema validation on breadcrumbs. | Approved program copy. |
| **FR-03** | Verified Impact Metric Engine | **P0** | Dynamic or pre-rendered display of verified beneficiary metrics with draft/published state enforcement. | Only metrics with `status = 'published'` and `verified = true` display publicly; crawler fallback values render immediately without JS. | Unit tests on metric query filters; Playwright disabling JS to confirm non-zero figures. | Supabase schema / DB access. |
| **FR-04** | Volunteer Inquiry Form | **P0** | Interactive volunteer application collecting contact, skills, availability, and preferred center. | Validates email/phone via server actions; prevents spam via Honeypot + Rate Limiter; stores in DB; displays tracking ID. | Form fuzzing (invalid phones, SQL injection, script tags); DB insertion validation. | Supabase DB, Server Actions. |
| **FR-05** | Student Sponsorship Inquiry Form | **P0** | Pledge form for individuals to sponsor school fees, kits, or monthly educational expenses. | Collects donor contact and pledge tier; triggers admin email/WhatsApp notification; sends confirmation to donor. | End-to-end form completion in Playwright; inspection of database record. | Notification webhook / SMTP. |
| **FR-06** | Corporate CSR Inquiry Form | **P0** | Formal proposal request form for corporate partners, collecting company name, CSR scope, and budget. | Strict validation; stores record; generates downloadable corporate summary PDF link. | End-to-end submission test; verify correct schema fields in DB. | Server Actions. |
| **FR-07** | General Contact & Center Locator | **P0** | Interactive contact page with verified phone, WhatsApp quick tether, center address, and inquiry form. | One-tap phone calling and WhatsApp deeplink; form submits general questions to admin inbox. | Mobile browser user agent test; link target verification. | Trust verified address. |
| **FR-08** | Protected Admin Authentication | **P0** | Secure login for trust administrators to access inquiry logs and content controls. | Email/password or magic link via Supabase Auth; enforces brute-force lockout; JWT session with HTTP-only cookies. | Automated penetration test against `/admin` without credentials; session expiration check. | Supabase Auth. |
| **FR-09** | Inquiry Triage Dashboard | **P0** | Admin dashboard interface to view, filter, sort, and status-tag volunteer, sponsor, and CSR submissions. | Admins can mark inquiries as 'New', 'In-Progress', 'Contacted', or 'Archived'; export filtered records to CSV. | Admin E2E test verifying state transition updates the DB. | FR-08, DB schema. |
| **FR-10** | Impact Metric Publishing Workflow | **P0** | Multi-step approval for publishing or updating public-facing numbers (Draft → Reviewed → Published). | Unpublished numbers are inaccessible to anonymous API clients; historical log maintained for auditability. | Direct REST query test as unauthenticated user verifying 401/empty set. | Supabase RLS policies. |
| **FR-11** | Stories & Case Studies Publishing | **P1** | Lightweight CMS for publishing photo essays and milestones. | Rich text editor (Markdown), image attachment with required alt text, publish date scheduling. | E2E create/edit/delete story flow; verify slug generation and image loading. | Supabase Storage. |
| **FR-12** | Secure Media Library | **P1** | Admin uploader for center and distribution photos with automatic WebP conversion and resizing. | Client-side compression before upload; file type whitelist (`image/jpeg`, `image/png`, `image/webp`); max size 5MB. | Upload invalid file types (e.g. `.exe`, `.svg` with scripts); verify rejection. | Supabase Storage bucket. |
| **FR-13** | Automated Email / Discord Notifications | **P1** | Real-time alerts to trust coordinators when a high-priority CSR or sponsorship inquiry arrives. | Asynchronous webhook fires via Resend / SendGrid / Telegram / WhatsApp Business API upon form insertion. | Mock webhook test; verify zero dropped submissions on webhook failure. | External notification service. |
| **FR-14** | Client-Side Search & Tag Filtering | **P1** | Filter stories and programs by tag (e.g., 'Education', 'Diwali', 'Environment'). | Instant filtering with URL query state synchronization (`?category=education`); keyboard accessible. | Playwright filter interaction; URL parameter persistence assertion. | Server Components / Suspense. |
| **FR-15** | Direct Payment Gateway (Razorpay / UPI) | **P2** | Real-time online monetary donations with instant 80G tax receipt generation. | *Deferred to Phase 5+ upon receipt of 80G certificate, trust merchant account, and FCRA determination.* | Simulated gateway test mode before production release. | Trust Merchant Bank Account & 80G. |
| **FR-16** | Bilingual Language Switcher (EN / TA) | **P2** | Seamless toggle between English and Tamil for core pages and forms. | Static route prefixing (`/ta/about`); preserves active page state. | Translation coverage scan; i18n routing tests. | Translated Tamil copy. |

---

## 3. Strict Acceptance Criteria for Core Modules

### 3.1 Form Submission Standard
A form submission is accepted as "Done" only when:
1. All client-side inputs pass validation before submission.
2. Server-side validation (Zod schema) independently rejects malformed or malicious payloads.
3. Hidden honeypot fields silently discard bot spam.
4. Database insertion succeeds with a unique UUID and timestamp.
5. A user-friendly, high-contrast confirmation message appears with an inquiry tracking reference number.
6. The user receives clear next steps (e.g., "A trust coordinator will call you within 24–48 hours").

### 3.2 Metric Publication Standard
An impact metric is accepted as "Published" only when:
1. The numeric value is entered alongside its date of measurement, location, and supporting documentation note.
2. The record is approved by an authenticated administrator.
3. The public view immediately reflects the approved count without displaying intermediate "0" states during hydration.
4. An audit log captures the user ID, timestamp, and previous value.
