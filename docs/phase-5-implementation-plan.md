# Phase 5 Implementation Plan: Public Workflows, Email Notifications, Integrations & End-to-End Testing

**Project:** Sathiyavani Charitable Trust  
**Author:** Senior Full-Stack Engineer, Backend Integration Specialist & Application Security Engineer  
**Date:** October 2026  
**Document Status:** Approved Architecture Plan for Phase 5  

---

## 1. Pre-Implementation Review & Existing Architecture Findings

### 1.1 Existing System Capabilities (Phases 1–4)
* **Frontend:** Next.js 14 App Router, TypeScript, Tailwind CSS, 21 canonical public routes, mobile drawer navigation, responsive across 360px–1440px.
* **Database & RLS:** Supabase PostgreSQL migrations in `supabase/migrations/20261018000001_initial_schema.sql` with tables for `admin_profiles`, `programs`, `stories`, `events`, `impact_metrics`, `inquiries`, `media_assets`, and `audit_logs`. Dual-mode data repository in `src/lib/db/client.ts`.
* **Administrative Suite:** Protected `/admin/*` routes with session cookies, RBAC enforcement (`super_admin`, `content_admin`, `enquiry_manager`), and multi-stage impact metric governance.
* **Initial Ingestion Prototype:** General contact form on `/contact` with honeypot bot defense, saving records into the database with tracking IDs (e.g., `ST-INQ-917971`).

### 1.2 Incomplete Functionality Addressed in Phase 5
1. **Volunteer Application Workflow (`/volunteer`):** Currently displays coordinator contact buttons only; requires dedicated interactive form connected to the enquiry engine (`inquiry_type: 'volunteer'`).
2. **Sponsorship Workflow (`/sponsor`):** Needs interactive digital pledge enquiry form (`inquiry_type: 'sponsorship'`) with tier selections and privacy consent.
3. **Partnership Workflow (`/partnerships`):** Needs structured corporate CSR proposal form (`inquiry_type: 'partnership'`) with organization details.
4. **Email Notification Engine (`src/lib/email/service.ts`):** Needs a resilient transactional email provider abstraction supporting Resend / SMTP with safe simulated fallback (outbox queue) when API keys are not supplied.
5. **Abuse & Spam Protection:** Sliding-window IP rate limiting, duplicate submission prevention (idempotency hashes), and Unicode / Tamil language sanitization.
6. **Future Donation Prerequisites Document:** Authoring `docs/future-donation-integration.md` explaining statutory 80G / 12A prerequisites, provider selection criteria (Razorpay/Cashfree), webhook HMAC signatures, and reconciliation.
7. **End-to-End Automated Testing:** Automated test suite covering Journeys A–G.

---

## 2. Public Workflows Architecture

### 2.1 Workflow Ingestion Pipeline
```
[ Visitor Submits Form ] (Contact, Volunteer, Sponsor, Partner)
          │
          ▼
[ Client Validation ] (Required fields, phone format, email, consent checkbox)
          │
          ▼
[ Rate Limiting & Honeypot ] (Drop spam bots silently; limit requests per IP/hour)
          │
          ▼
[ Server-Side Validation ] (Sanitize Unicode/Tamil strings, enforce length limits)
          │
          ▼
[ Idempotency Check ] (Prevent duplicate submissions within 5-minute window)
          │
          ▼
[ Database Persistence ] (Save to `inquiries` table with status 'new' and payload)
          │
          ├──────────────────────────────────────────┐
          ▼                                          ▼
[ Admin Notification ]                     [ Visitor Acknowledgement ]
(Category, Tracking ID, Dashboard Link)    (Tracking ID, Next steps note)
          │                                          │
          └──────────────────────────────────────────┘
                                 │
                                 ▼
         [ Success Screen Displayed with Real Tracking ID ]
```

---

## 3. Email Notification Reliability & Outbox Architecture

1. **Provider Abstraction (`src/lib/email/service.ts`):**
   * Checks for `RESEND_API_KEY` or `SMTP_HOST` in environment.
   * If present: Dispatches live transactional emails.
   * If missing (local dev / offline test): Enqueues notification payload in an in-memory / diagnostic notification log (`status: 'simulated'`), recording exact email headers and body without failing the form submission.
2. **Administrator Alert:**
   * Recipient: `notifications@sathiyavanitrust.org` (or configured `ADMIN_NOTIFICATION_EMAIL`).
   * Content: Inquiry category, timestamp, submitter name, phone/email, tracking ID, link to `/admin/enquiries`.
3. **Visitor Acknowledgement:**
   * Sent only if the visitor supplied a valid email address.
   * Content: Acknowledgement receipt with tracking reference, trust coordinator hours, zero false promises of automatic volunteer onboarding or tax deductions.

---

## 4. Spam, Abuse & Security Controls

* **Honeypot Trap:** Hidden field (`website_bot_check`). If filled, request is acknowledged with a dummy ID without polluting the coordinator inbox.
* **Rate Limiter:** In-memory sliding window limiter allowing maximum 5 submissions per IP per 10 minutes.
* **Idempotency Hash:** SHA-256 hash of `phone + email + message + type`. If identical submission arrives within 120 seconds, returns existing tracking ID without duplicating records.
* **Unicode & Tamil Text Support:** Fully preserves and safely renders Tamil text (`தமிழ்`) without SQL injection or sanitization corruption.

---

## 5. Implementation Sequence

* **Batch 1: Transactional Email & Notification Outbox Service**
  * Create `src/lib/email/service.ts` with notification outbox and resilient fallback.
  * Create `src/lib/security/rate-limiter.ts` with sliding-window protection.
* **Batch 2: Public Form Components & Actions**
  * Extend `src/app/actions/inquiry.ts` with unified validation, rate limiting, and email dispatch.
  * Build `<VolunteerApplicationForm />` and embed in `src/app/volunteer/page.tsx`.
  * Build `<SponsorshipInquiryForm />` and embed in `src/app/sponsor/page.tsx`.
  * Build `<PartnershipInquiryForm />` and embed in `src/app/partnerships/page.tsx`.
  * Upgrade `<ContactInquiryForm />` on `src/app/contact/page.tsx`.
* **Batch 3: Admin Dashboard Enhancements**
  * Enhance `/admin/enquiries` with filter tabs for all 4 enquiry categories and notification status indicators.
* **Batch 4: Donation Integration Architectural Specification**
  * Author `docs/future-donation-integration.md` explaining prerequisites and Razorpay compliance.
* **Batch 5: Automated Testing & Verification**
  * Create `tests/phase5.test.mjs` covering Journeys A–G.
  * Run build, typecheck, lint, and browser subagent verification.
  * Update documentation and deliver comprehensive Phase 5 report.
