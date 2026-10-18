# Sathiyavani Charitable Trust — Web Platform

[![Phase 1: Architecture Blueprint](https://img.shields.io/badge/Phase%201-Discovery%20%26%20Architecture%20Complete-success)](./docs/IMPLEMENTATION_ROADMAP.md)
[![Phase 2: Visual Prototype](https://img.shields.io/badge/Phase%202-Design%20System%20%26%20Prototype%20Validated-blue)](./docs/DESIGN_SYSTEM.md)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(17%2F17%20Static)-brightgreen)](./docs/TEST_REPORT_PHASE_2.md)
[![Target Organization](https://img.shields.io/badge/Nonprofit-Sathiyavani%20Charitable%20Trust-blue)](https://sathiyavanitrust.netlify.app/)

This repository contains the production codebase and architectural blueprints for **Sathiyavani Charitable Trust** (Chennai, India).

---

## 🎨 Phase 2 Visual Prototype Overview

The Phase 2 visual prototype establishes the complete design language, responsive layout templates, and shared UI component library:
- **Homepage (`/`):** Full 10-section narrative flow (Hero, Introduction, 5 Programmes, Verified Impact, Founder Story, Field Reports, Get Involved, Governance & Transparency, Master Footer).
- **Representative Programme Page (`/programs/education`):** Complete detail template with breadcrumbs, quick facts, operational pillars, activity showcase, and sticky sponsorship pledge card.
- **Accessible Navigation:** Universal sticky header with desktop dropdowns, phone dialer, and an accessible mobile slide-out drawer (focus trap, ARIA dialog, quick contact buttons).
- **Design Tokens:** Authentic color system extracted from the brand emblem (Trust Navy, Golden Amber, Terracotta Rust, Ocean Teal, Warm Canvas).
- **Evidence-Conscious Reporting:** Zero fabricated counters or fake "0" displays. Transparent provenance tags for verified historical benchmarks.

---

## 📚 Project Documentation

### Design & Testing (Phase 2)
- **[Design System & Component Library (`docs/DESIGN_SYSTEM.md`)](./docs/DESIGN_SYSTEM.md)** — Tokens, typography, component APIs.
- **[Asset Inventory & Needs (`docs/ASSET_INVENTORY_AND_NEEDS.md`)](./docs/ASSET_INVENTORY_AND_NEEDS.md)** — Sourced assets and required photographs.
- **[QA & Browser Test Report (`docs/TEST_REPORT_PHASE_2.md`)](./docs/TEST_REPORT_PHASE_2.md)** — Inspection log across 1440px, 390px, and 360px viewports.

### Architectural Blueprint (Phase 1)
- [1. Project & Repository Audit](./docs/PROJECT_AUDIT.md)
- [2. Reference Website Audit](./docs/REFERENCE_WEBSITE_AUDIT.md)
- [3. User Personas & Journeys](./docs/USER_PERSONAS_AND_JOURNEYS.md)
- [4. Sitemap & Page Specifications](./docs/SITEMAP_AND_PAGE_SPECIFICATIONS.md)
- [5. UI/UX Design Specification](./docs/UI_UX_DESIGN_SPECIFICATION.md)
- [6. Functional Requirements](./docs/FUNCTIONAL_REQUIREMENTS.md)
- [7. Technical Architecture](./docs/TECHNICAL_ARCHITECTURE.md)
- [8. Database Schema & Permissions](./docs/DATABASE_AND_PERMISSIONS.md)
- [9. Security, Privacy & Safeguarding](./docs/SECURITY_AND_PRIVACY_PLAN.md)
- [10. SEO, Accessibility & Performance](./docs/SEO_ACCESSIBILITY_PERFORMANCE_PLAN.md)
- [11. Testing & Deployment Plan](./docs/TESTING_AND_DEPLOYMENT_PLAN.md)
- [12. Implementation Roadmap](./docs/IMPLEMENTATION_ROADMAP.md)
- [13. Open Questions & Risks](./docs/OPEN_QUESTIONS_AND_RISKS.md)

---

## 💻 Running the Application Locally

```bash
# Install dependencies
npm install

# Run static typecheck
npm run typecheck

# Build optimized production bundle (17 static routes)
npm run build

# Start local production server on http://localhost:3000
npm run start
```
