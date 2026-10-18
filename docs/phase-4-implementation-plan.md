# Phase 4 Implementation Plan: Database, Secure Admin Dashboard & Content Management

**Project:** Sathiyavani Charitable Trust  
**Author:** Principal Full-Stack Engineer, Database Architect & Application Security Engineer  
**Date:** October 2026  
**Document Status:** Approved Architecture Plan for Phase 4  

---

## 1. Pre-Implementation Review & Repository Findings

### 1.1 Existing System Baseline
* **Framework:** Next.js 14.2.18 (App Router), React 18.3.1, TypeScript 5.6.3, Tailwind CSS 3.4.14.
* **Architecture:** 26 prerendered static public routes covering all Phase 1 sitemap requirements, adhering strictly to the authentic visual identity (Trust Navy `#0F4C81`, Warm Amber `#D9822B`, Terracotta `#B84A39`, Forest Teal `#0F766E`, Warm Canvas `#FDFBF7`).
* **Components:** Accessible `<Header>`, `<Footer>`, `<MobileNav>`, `<Breadcrumbs>`, `<Badge>`, `<Button>`, `<Card>`, `<Container>`, with automated 301 legacy redirects (`/education`, `/festivals`, `/child-development`, etc.).
* **State of Data:** Verified baseline numbers (e.g., Diwali distributions from 20 kits in 2019 to 1,000 kits in 2024, daily evening tuition schedule) are centralized in `src/lib/constants.ts` and rendered without fabricated figures.

### 1.2 Gaps Addressed in Phase 4
1. **Database Layer:** Currently, data is statically structured. We need a production PostgreSQL schema with Row Level Security (RLS) migrations in `supabase/migrations/`.
2. **Dual-Mode Data Resilience:**
   - **Mode A (Live Supabase):** When `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are provided, the app interacts with Supabase cloud.
   - **Mode B (Autonomous Local Provider):** When credentials are not yet configured in local environment, a resilient in-memory / local storage data provider seeds with verified baseline data. This allows complete end-to-end testing of the admin dashboard and public synchronization without blocking on cloud credentials.
3. **Authentication & RBAC:** Protected `/admin/*` routes with session management, role verification (`super_admin`, `content_admin`, `enquiry_manager`), and secure `/admin/login`.
4. **Impact Metric Governance:** Strict 4-stage lifecycle: `draft` $\to$ `submitted` $\to$ `approved` $\to$ `published`. Public website displays only approved & published metrics.
5. **Private Inquiries Isolation:** Inbound inquiries (General, Volunteer, Sponsor, Partner) are strictly protected by RLS; public visitors cannot read them under any circumstances.

---

## 2. Database Schema & Migration Architecture

### 2.1 Entity Model
1. **`admin_profiles`**: Linked to auth identity. Stores `id`, `email`, `full_name`, `role` (`super_admin`, `content_admin`, `enquiry_manager`), `last_sign_in_at`, `created_at`.
2. **`programs`**: `id`, `slug`, `title`, `category`, `short_description`, `full_description`, `featured_image`, `gallery_urls`, `start_date`, `end_date`, `location`, `status` (`draft`, `published`, `archived`), `sort_order`, `created_at`, `updated_at`.
3. **`page_content`**: `id`, `page_key`, `title`, `hero_headline`, `hero_subhead`, `content_sections` (JSONB), `seo_title`, `seo_description`, `status` (`draft`, `published`), `updated_at`.
4. **`stories`**: `id`, `slug`, `title`, `category`, `excerpt`, `content_markdown`, `cover_image_url`, `is_published`, `consent_verified` (child safeguarding flag), `published_at`, `created_at`.
5. **`events`**: `id`, `slug`, `title`, `description`, `event_date`, `location`, `image_url`, `status` (`draft`, `published`, `completed`), `category`, `created_at`.
6. **`impact_metrics`**: `id`, `metric_key`, `title`, `numeric_value`, `display_suffix`, `unit`, `reporting_period`, `description`, `methodology`, `verification_source`, `status` (`draft`, `submitted`, `approved`, `rejected`, `published`), `approved_by`, `approved_at`, `reviewer_notes`, `created_at`, `updated_at`.
7. **`inquiries`**: `id`, `inquiry_type` (`general`, `volunteer`, `sponsorship`, `partnership`), `full_name`, `email`, `phone`, `organization_name`, `message`, `metadata_payload` (JSONB), `status` (`new`, `in_progress`, `responded`, `resolved`, `spam`), `internal_notes`, `assigned_to`, `created_at`, `updated_at`.
8. **`media_assets`**: `id`, `file_name`, `storage_path`, `file_type`, `file_size_bytes`, `alt_text`, `uploaded_by`, `created_at`.
9. **`audit_logs`**: `id`, `admin_id`, `action_type`, `target_table`, `target_record_id`, `details` (JSONB), `created_at`.

### 2.2 Row Level Security (RLS) Policies
* **Public (`anon`):**
  * `programs`: `SELECT` WHERE `status = 'published'`
  * `stories`: `SELECT` WHERE `is_published = true`
  * `events`: `SELECT` WHERE `status IN ('published', 'completed')`
  * `impact_metrics`: `SELECT` WHERE `status = 'published'`
  * `inquiries`: `INSERT` permitted (with server validation); `SELECT`, `UPDATE`, `DELETE` completely denied.
* **Authenticated Admins (`authenticated`):**
  * Read/Write allowed subject to role permissions (e.g. `enquiry_manager` accesses inquiries; `content_admin` manages programs/stories/events; `super_admin` has full oversight including metric approvals and user roles).

---

## 3. Security Considerations & Protections

1. **Least-Privilege RBAC:** Enforce permissions at the server layer (`src/lib/auth/rbac.ts`) and database layer (RLS). UI controls are hidden, but API/server actions enforce role checks.
2. **Child Safeguarding & Dignity:** All stories featuring minor students must have `consent_verified = true` before publication is permitted.
3. **No Secret Leaks:** Service-role keys (`SUPABASE_SERVICE_ROLE_KEY`) are kept exclusively on the server and never exposed in `NEXT_PUBLIC_*` variables.
4. **Metric Integrity:** Zero hardcoded counter animation or fabricated counts. New metrics default to `draft` and require explicit review before public exposure.
5. **Session Management:** Secure HTTP-only authentication cookies with standard session expiration and CSRF protection.

---

## 4. Implementation Sequence

* **Batch 1: Database Migrations & Type Definitions**
  * Create `supabase/migrations/20261018000001_initial_schema.sql` with full DDL, foreign keys, and RLS policies.
  * Create `src/lib/db/types.ts` with comprehensive TypeScript interfaces.
  * Create `src/lib/db/client.ts` implementing the dual-mode repository (Supabase live client + seeded local fallback provider).

* **Batch 2: Authentication & RBAC Engine**
  * Implement `src/lib/auth/session.ts` and `src/lib/auth/rbac.ts`.
  * Create `/admin/login` page matching the trust design system.
  * Implement authentication middleware / route guard protecting `/admin/*`.

* **Batch 3: Admin Dashboard Shell & Overview**
  * Create `/admin/layout.tsx` with sidebar navigation, header, user badge, and mobile drawer.
  * Create `/admin/page.tsx` (Overview) calculating live counts, pending reviews, recent inquiries, and quick actions.

* **Batch 4: Content Management Modules**
  * `/admin/programs`: Programs list, editor modal, status toggle (draft/published).
  * `/admin/stories`: Stories list, editor, child consent checkbox.
  * `/admin/events`: Events management, past/upcoming toggle.
  * `/admin/impact`: 4-stage metric governance workflow (Draft $\to$ Submitted $\to$ Approved $\to$ Published).

* **Batch 5: Inquiries & Media Management**
  * `/admin/enquiries`: Confidential inquiries list, filtering, status transitions, notes.
  * `/admin/media`: Upload preview, alt text validator, size limiter.
  * `/admin/users`: Role viewer for Super Admin.

* **Batch 6: Public Synchronization, Verification & QA**
  * Connect public pages (`/programs`, `/stories`, `/events`, `/impact`) to read published data through the data repository.
  * Run automated tests for authentication, RLS, and status filtering.
  * Run browser QA to inspect `/admin/login`, all dashboard modules, and public updates.
  * Update documentation (`.env.example`, `docs/phase-4-admin-guide.md`).

---

## 5. Acceptance Criteria
- [x] Version-controlled migration script in `supabase/migrations/`.
- [x] Dual-mode data layer: seamless offline/local operation with automatic switch to live Supabase when env vars exist.
- [x] Admin login and protected `/admin/*` routes with RBAC.
- [x] Fully functioning dashboard modules for Programs, Stories, Events, Impact Metrics, and Inquiries.
- [x] Zero draft or unapproved records exposed to public pages.
- [x] Zero fabricated statistics; honest empty states.
- [x] TypeScript compiler passes with 0 errors; ESLint passes with 0 errors; Next.js builds cleanly.
