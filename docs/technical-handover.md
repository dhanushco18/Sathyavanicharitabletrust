# Sathiyavani Charitable Trust — Technical Architecture & Handover Manual
**Audience:** Incoming Lead Engineers, DevOps Architects, and Technical Administrators  
**Document Code:** ST-DOC-P8-HANDOVER-2026-V1  
**Project Repository:** `sathiyavanitrust`  
**Hosting Target:** Netlify Edge + Supabase Cloud PostgreSQL  

---

## 1. Application Architecture & Technology Stack

The platform is engineered as a high-performance, accessible, and secure digital platform built on modern web standards:

| Layer | Technology | Rationale & Configuration |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Hybrid static prerendering (SSG) for 21 public pages; dynamic SSR for administrative routes. |
| **Language** | TypeScript (v5.6, Strict) | Complete end-to-end type safety across database types, server actions, and UI components. |
| **Styling** | Tailwind CSS + Custom Design Tokens | Tailored color palette: Navy (`#0F243A`), Terracotta (`#C85A32`), Amber (`#E89A3C`), Teal (`#1D7A72`). |
| **Database** | PostgreSQL via Supabase / Dual-Mode | 9 relational tables; Row Level Security (RLS) policies on all tables; in-memory fallback for local offline evaluation. |
| **Authentication** | Cryptographic Session Cookies + RBAC | Encrypted `sathiya_admin_session` cookie; role-based access control (`super_admin`, `content_admin`, `enquiry_manager`). |
| **Security** | HTTP CSP, HSTS, Rate Limiting, Honeypot | Strict CSP in `next.config.mjs`, sliding-window rate limiter, SHA-256 duplicate submission deduplication. |
| **Transactional Email** | Resend API Abstraction | Dual-mode: Cloud delivery when configured; simulated outbox queue during local development. |
| **Analytics** | First-Party In-Memory Telemetry | Zero-cookie, privacy-preserving aggregate metrics complying with the DPDP Act. |
| **Localization** | Dual-Language Dictionary (EN / TA) | Human-reviewed English and Tamil (`தமிழ்`) dictionary with accessible `<LanguageSwitcher />`. |

---

## 2. Repository Directory Structure

```
sathiyavanitrust/
├── .env.example                     # Environment template with safe placeholders
├── netlify.toml                     # Netlify build settings, Node 20 runtime, edge headers
├── next.config.mjs                  # Security headers, CSP, HSTS, redirects, images
├── package.json                     # Scripts: dev, build, start, lint, typecheck, test
├── docs/                            # Comprehensive engineering and operational runbooks
│   ├── phase-1 through 8 reports    # Implementation milestones and audit trails
│   ├── admin-user-guide.md          # Coordinator operational manual
│   ├── technical-handover.md        # This architectural document
│   ├── maintenance-guide.md         # Operational maintenance instructions
│   ├── incident-response-guide.md   # Emergency response runbook
│   └── backup-and-recovery.md       # Backup restoration runbooks
├── src/
│   ├── app/                         # Next.js 14 App Router routes (37 total)
│   │   ├── (public content pages)   # /, /about, /founder, /mission, /vision, /programs/*
│   │   ├── (workflows)              # /contact, /volunteer, /sponsor, /partnerships
│   │   ├── (legal)                  # /privacy, /terms
│   │   ├── admin/                   # /admin, /admin/programs, /impact, /enquiries, /analytics...
│   │   ├── api/health/              # /api/health (System diagnostic telemetry)
│   │   ├── error.tsx                # Accessible global error boundary
│   │   ├── layout.tsx               # Root layout, fonts, Schema.org JSON-LD graph
│   │   ├── robots.ts & sitemap.ts   # Dynamic crawling directives
│   ├── components/
│   │   ├── forms/                   # Public inquiry forms (Contact, Volunteer, Sponsor, Partner)
│   │   ├── layout/                  # Header, Footer, MobileNav, LanguageSwitcher
│   │   └── ui/                      # Button, Card, Badge, Container, Breadcrumbs
│   ├── lib/
│   │   ├── auth/                    # RBAC definitions & session encoding
│   │   ├── db/                      # Supabase client, local repository, types
│   │   ├── email/                   # Resend email provider & diagnostic outbox
│   │   ├── security/                # IP rate limiter & idempotency deduplicator
│   │   ├── analytics/               # First-party privacy analytics engine
│   │   └── i18n/                    # English & Tamil localization dictionary
├── supabase/migrations/             # Version-controlled SQL migration scripts
└── tests/                           # Native Node.js test suites (Phases 4, 5, 6, 7, 8)
```

---

## 3. Database Schema & Migration Protocol

The relational schema is maintained in `supabase/migrations/20261018000001_initial_schema.sql`.

### Table Inventory:
1. `admin_profiles`: Trustee accounts, email, role (`super_admin`, `content_admin`, `enquiry_manager`).
2. `programs`: Descriptions, schedules, and locations for the 5 trust pillars.
3. `page_content`: Dynamic CMS sections for homepage and secondary pages.
4. `stories`: Student updates; enforces `consent_verified = true` before public display.
5. `events`: Documented distributions, upcoming drives, and photo galleries.
6. `impact_metrics`: Documented figures governed by the 4-stage lifecycle (`draft` &rarr; `published`).
7. `inquiries`: Inbound citizen communications; protected by strict RLS (public write-only, admin read-only).
8. `media_assets`: Media uploads with alt text and consent verification flags.
9. `audit_logs`: Immutable security ledger tracking all administrative actions.

---

## 4. Environment Variables Register

Copy `.env.example` to `.env.local` for local execution. Configure these variables in the Netlify site settings dashboard:

```bash
# Public Client Variables
NEXT_PUBLIC_SITE_URL=https://sathiyavanitrust.netlify.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key

# Server Secrets (Privileged — Never expose with NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
ADMIN_DEV_PASSWORD=your-secure-admin-password
ADMIN_SESSION_SECRET=your-random-32-char-session-secret
RESEND_API_KEY=re_your_api_key

# Operational Routing
ADMIN_NOTIFICATION_EMAIL=admin@sathiyavanitrust.org
SENDER_EMAIL=notifications@sathiyavanitrust.org
RATE_LIMIT_MAX_SUBMISSIONS=5
RATE_LIMIT_WINDOW_MINUTES=10
```

---

## 5. Maintenance, Troubleshooting & Health Diagnostics

1. **Uptime & Health Endpoint:**
   - Execute: `curl -s https://sathiyavanitrust.netlify.app/api/health | jq`
   - Expect HTTP 200 with `"status": "healthy"`.
2. **Executing Automated Tests:**
   ```bash
   npm test               # Run all 43+ automated tests
   npm run typecheck      # Verify TypeScript types
   npm run lint           # Run Next.js linter
   npm run build          # Validate production build
   ```
3. **Emergency Rollback:**
   - Netlify Dashboard > **Deploys** > Select prior commit > **Publish deploy** (completes in < 15 seconds).
