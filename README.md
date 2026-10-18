# Sathiyavani Charitable Trust — Web Platform Architecture

[![Phase 1: Discovery & Planning Complete](https://img.shields.io/badge/Phase%201-Discovery%20%26%20Planning%20Complete-success)](./docs/IMPLEMENTATION_ROADMAP.md)
[![Target Organization](https://img.shields.io/badge/Nonprofit-Sathiyavani%20Charitable%20Trust-blue)](https://sathiyavanitrust.netlify.app/)
[![Target Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Supabase-informational)](./docs/TECHNICAL_ARCHITECTURE.md)

This repository contains the comprehensive technical architecture, design system specifications, and production implementation plan for the digital platform of **Sathiyavani Charitable Trust** (Chennai, India).

---

## 📚 Phase 1 Architecture & Discovery Documentation Suite

The complete technical and product blueprint for this platform is organized in [`docs/`](./docs/):

| Document | Purpose & Summary |
| :--- | :--- |
| **[1. Project & Repository Audit](./docs/PROJECT_AUDIT.md)** | Technical environment audit, existing assets, dependencies, and framework evaluation. |
| **[2. Reference Website Audit](./docs/REFERENCE_WEBSITE_AUDIT.md)** | Comprehensive page-by-page audit of `sathiyavanitrust.netlify.app`, identifying inconsistencies, missing data, and UX bottlenecks. |
| **[3. User Personas & Journeys](./docs/USER_PERSONAS_AND_JOURNEYS.md)** | Six core stakeholder personas (Donors, CSR Partners, Volunteers, Beneficiaries, Admins) and interaction journeys. |
| **[4. Sitemap & Page Specifications](./docs/SITEMAP_AND_PAGE_SPECIFICATIONS.md)** | Complete proposed information architecture, route taxonomy, and page-by-page functional acceptance criteria. |
| **[5. UI/UX Design Specification](./docs/UI_UX_DESIGN_SPECIFICATION.md)** | Brand tokens, color palette derived from authentic emblem, typography system, component styling, and low-fidelity wireframes. |
| **[6. Functional Requirements](./docs/FUNCTIONAL_REQUIREMENTS.md)** | Prioritized requirements matrix (P0–P3), acceptance criteria, and verification test specifications. |
| **[7. Technical Architecture](./docs/TECHNICAL_ARCHITECTURE.md)** | Systems architecture, Next.js App Router, Supabase integration, rendering strategies, directory structure, and deployment pipeline. |
| **[8. Database Schema & Permissions](./docs/DATABASE_AND_PERMISSIONS.md)** | Relational PostgreSQL schema, ER diagram, data dictionary, Row Level Security (RLS) policies, and metric approval workflows. |
| **[9. Security, Privacy & Safeguarding](./docs/SECURITY_AND_PRIVACY_PLAN.md)** | DPDP Act 2023 compliance, child safeguarding policies, photo consent protocols, rate limiting, and threat modeling. |
| **[10. SEO, Accessibility & Performance](./docs/SEO_ACCESSIBILITY_PERFORMANCE_PLAN.md)** | WCAG 2.2 Level AA accessibility compliance, JSON-LD Schema.org structured data, and Core Web Vitals optimization targets. |
| **[11. Testing & Deployment Plan](./docs/TESTING_AND_DEPLOYMENT_PLAN.md)** | Test pyramid (Vitest, Playwright E2E, Axe accessibility), CI/CD pipeline, and production release checklist. |
| **[12. Implementation Roadmap](./docs/IMPLEMENTATION_ROADMAP.md)** | Milestone schedule spanning Phases 1 through 7 with explicit dependencies and sign-off conditions. |
| **[13. Open Questions & Risks](./docs/OPEN_QUESTIONS_AND_RISKS.md)** | Catalog of factual discrepancies, legal registration checklist, and decision items requiring trust board input. |

---

## 🎨 Brand Assets Preserved

Authentic brand assets extracted from the reference site have been downloaded and verified in [`public/assets/brand/`](./public/assets/brand/):
- **Official Emblem:** `public/assets/brand/logo.png`
- **Favicon:** `public/favicon.ico`

---

## 🚀 Recommended Next Step: Phase 2

Upon stakeholder approval of this Phase 1 Architecture Blueprint, Phase 2 will commence with:
1. Scaffolding the Next.js 14/15 TypeScript application with Tailwind CSS tokens.
2. Building the accessible component design system (Navigation Header, Mobile Drawer, Cards, Badges).
3. Developing interactive prototypes for the Homepage, Education Program page, and Impact Dashboard.
