# Technical Architecture & Systems Engineering Plan

**Project:** Sathiyavani Charitable Trust  
**Date:** October 2026  
**Document Status:** Technical Architecture Blueprint  

---

## 1. Architectural Philosophy & Stack Justification

The technical architecture is designed to fulfill four primary criteria for a growing nonprofit organization:
1. **Zero Ongoing Infrastructure Cost:** Leverage generous free tiers of modern cloud platforms (Netlify, Supabase, Vercel) so operating costs remain ₹0/month.
2. **Superior Performance & SEO:** Pre-render public content as static HTML with high Core Web Vitals to maximize search discovery for donors and partners.
3. **Ironclad Security by Default:** Public users interact strictly with pre-rendered pages or rate-limited server endpoints; database tables are protected by Row Level Security (RLS).
4. **Low Maintenance Burden:** Avoid complex custom servers, Docker containers, or fragile microservices. Use managed, robust, TypeScript-enforced tools.

---

## 2. Technology Stack Selection & Trade-Off Analysis

| Layer | Selected Technology | Alternative Considered | Justification & Trade-Off Analysis |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js 14/15 (App Router, React 19/18, TypeScript)** | Vite SPA / Astro / Plain HTML | **Next.js wins** for its unified server components (fast SEO), built-in Server Actions for forms (no separate Express API server needed), and seamless Netlify adapter. Vite SPA fails on initial crawlers and metadata; Astro lacks built-in admin auth dynamic ecosystem. |
| **Styling** | **Tailwind CSS v3/v4** | Vanilla CSS / CSS Modules | **Tailwind wins** for standardized design token consistency, mobile-first utility classes, zero runtime bundle overhead, and rapid responsive prototyping. |
| **Database** | **Supabase (Managed PostgreSQL)** | Firebase / MongoDB / SQLite | **Supabase wins** with true relational data modeling, strong SQL foreign keys for audit trails, native Row Level Security (RLS), and zero cold starts compared to custom containers. |
| **Authentication**| **Supabase Auth (JWT + Cookie)** | NextAuth (Auth.js) / Firebase Auth | **Supabase Auth wins** due to direct integration with Postgres RLS policies, native email/magic link support, and zero maintenance. |
| **Media Storage** | **Supabase Storage** | AWS S3 / Cloudinary | **Supabase Storage wins** by keeping auth, database, and asset buckets in a single unified dashboard, reducing developer cognitive load. |
| **Validation** | **Zod** | Yup / Joi | **Zod wins** with TypeScript first-class type inference, lightweight footprint, and seamless integration with React Hook Form and Server Actions. |
| **Testing** | **Vitest + Playwright** | Jest + Cypress | **Vitest** provides instant Vite-native unit testing; **Playwright** provides robust, headless multi-browser (Chromium, Firefox, WebKit) mobile emulation. |
| **Hosting** | **Netlify (with Git CI/CD)** | Vercel / AWS Amplify | **Netlify wins** because the trust already owns and operates `sathiyavanitrust.netlify.app`. Continuing on Netlify avoids DNS migration overhead while unlocking modern Next.js runtime features. |

---

## 3. High-Level Architecture Diagram

```
[ Public Visitors & Mobile Users ]           [ Trust Administrators ]
                 │                                      │
                 ▼                                      ▼
       [ CDN Edge Layer (Netlify) ]              [ Protected /admin ]
                 │                                      │
                 ├──────────────────────────────┐       │ (Supabase Auth Session)
                 ▼                              ▼       ▼
       ┌───────────────────┐          ┌──────────────────────────┐
       │ Static Generation │          │ Dynamic Server Actions   │
       │ (SSG / ISR Pages) │          │ (Zod Validation, Rate    │
       │                   │          │  Limiting & Honeypot)    │
       └───────────────────┘          └─────────────┬────────────┘
                 │                                  │
                 │ Public Read (CDN Cached)         │ Authenticated Write/Read
                 ▼                                  ▼
    ┌──────────────────────────────────────────────────────────────┐
    │                 Supabase Cloud Services                      │
    │  ┌─────────────────────────┐    ┌─────────────────────────┐  │
    │  │ PostgreSQL + RLS        │    │ Storage Buckets         │  │
    │  │ - Approved Impact Stats │    │ - Center Photos (WebP)  │  │
    │  │ - Programs & Stories    │    │ - Annual Reports (PDF)  │  │
    │  │ - Private Inquiries     │    └─────────────────────────┘  │
    │  └─────────────────────────┘                                 │
    └──────────────────────────────────────────────────────────────┘
```

---

## 4. Rendering Strategy & Data Boundaries

| Route Family | Rendering Mode | Cache / Revalidation | Security & Access Boundary |
| :--- | :--- | :--- | :--- |
| **`/`, `/about/**`, `/programs/**`** | **Static Site Generation (SSG)** | Revalidate via ISR (1 hour) or on-demand on publish | Publicly readable. Zero database credentials exposed to client. |
| **`/impact`, `/stories`** | **Incremental Static Regeneration (ISR)** | Revalidates upon admin publish webhook | Publicly readable. Queries only records with `is_published = true`. |
| **Form Submissions (`/get-involved/**`, `/contact`)** | **Server Actions (POST)** | No cache; atomic mutation | Rate-limited (Upstash / In-Memory token bucket); sanitized with Zod; writes to private inquiry tables. |
| **`/admin/**`** | **Client-Side SPA with Server Auth Guard** | Dynamic / Private (`no-store`) | Protected by Supabase JWT session cookie; server redirects unauthorized users to `/admin/login`. |

---

## 5. Directory & File System Architecture

```
sathiyavanitrust/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Lint, Typecheck, Test, and Build workflow
├── docs/                          # Architecture & Discovery Blueprint (Phase 1)
├── public/
│   ├── assets/
│   │   ├── brand/
│   │   │   └── logo.png           # Authentic downloaded logo
│   │   └── placeholder/           # Licensed temporary placeholders
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── (public)/              # Public Layout Route Group
│   │   │   ├── layout.tsx         # Global Public Header, Footer, Toast Provider
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── about/
│   │   │   ├── programs/
│   │   │   ├── impact/
│   │   │   ├── stories/
│   │   │   ├── get-involved/
│   │   │   ├── contact/
│   │   │   └── legal/
│   │   ├── admin/                 # Protected Administration Area
│   │   │   ├── layout.tsx         # Admin Sidebar, Session Guard, Breadcrumbs
│   │   │   ├── login/
│   │   │   ├── dashboard/
│   │   │   ├── inquiries/
│   │   │   ├── impact/
│   │   │   └── media/
│   │   ├── api/                   # Webhook & Health Endpoints
│   │   └── global-error.tsx       # Custom Error Boundaries
│   ├── components/
│   │   ├── ui/                    # Atom primitives (Button, Card, Input, Modal, Table)
│   │   ├── layout/                # Header, Footer, MobileDrawer, AdminSidebar
│   │   ├── sections/              # Hero, ImpactCounter, ProgramGrid, FounderSpotlight
│   │   └── forms/                 # VolunteerForm, SponsorForm, CSRForm, ContactForm
│   ├── lib/
│   │   ├── supabase/              # Supabase Client, Server, and Admin instances
│   │   ├── validations/           # Zod Schemas for forms and data models
│   │   ├── utils/                 # Formatting (currency, date), class merger (`cn`)
│   │   └── constants/             # Navigation items, contact details, site config
│   ├── styles/
│   │   └── globals.css            # Tailwind directives, font definitions, focus styles
│   └── types/
│       ├── database.ts            # Generated Supabase TypeScript definitions
│       └── index.ts               # Domain interfaces (Program, Story, Inquiry, Metric)
├── tests/
│   ├── unit/                      # Vitest validation & helper tests
│   └── e2e/                       # Playwright journeys (desktop, mobile, forms, admin)
├── .env.example                   # Documentation of required environment keys
├── next.config.mjs                # Security headers, image domains, rewrites
├── tailwind.config.ts             # Custom color palette tokens and typography
├── tsconfig.json                  # Strict TypeScript configuration
└── package.json
```

---

## 6. Continuous Deployment & Pipeline Design

1. **Local Pre-commit:** Format with Prettier, check types with `tsc --noEmit`, run Vitest unit tests.
2. **Pull Request CI (GitHub Actions):**
   - TypeScript compile check.
   - ESLint lint rules check.
   - Unit tests pass (100% core validation coverage).
   - Playwright E2E smoke tests against ephemeral preview.
3. **Production Deployment (Netlify):**
   - Automatically triggers on push to `main`.
   - Generates production static assets.
   - Atomic deploys with instant rollback capability.
