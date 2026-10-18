# Project & Repository Audit: Sathiyavani Charitable Trust

**Date:** October 2026  
**Auditor:** Principal Software Architect & QA Lead  
**Repository Location:** `c:\Users\User\Documents\CMZB\sathiyavanitrust`  
**Target Organization:** Sathiyavani Charitable Trust (Reference: [https://sathiyavanitrust.netlify.app/](https://sathiyavanitrust.netlify.app/))

---

## 1. Executive Summary

A thorough audit of the local development workspace and environment was conducted. Prior to this discovery phase, the local repository directory was completely empty with no initialised version control (`.git`), configuration files, dependencies, or source code. 

The live reference implementation hosted at Netlify consists of basic static HTML pages with inline styling, linear slide-deck-style pagination, no content management backend, and no verification or database layers.

This document details the current state, runtime environment, technical inventory, identified technical risks, and technical recommendations for Phase 2 and beyond.

---

## 2. Environment & System Inventory

| Environment Factor | Inspected Value | Status & Assessment |
| :--- | :--- | :--- |
| **Operating System** | Windows 10/11 (PowerShell environment) | Supported; requires cross-platform script definitions (POSIX & Windows compatible). |
| **Node.js Runtime** | `v24.21.0` (LTS/Current modern Node) | Fully compatible with modern tooling, Next.js 14/15, Vite, and modern package managers. |
| **Package Manager** | `npm v11.19.0` | High-performance npm capable of handling workspace packages, lockfiles, and modern npx scripts. |
| **Git Version Control** | Git installed, repository not yet initialised (`.git` missing) | Initialisation with a robust `.gitignore` is required before development commences. |
| **Existing Codebase** | 0 files (directory was completely clean/empty) | Greenfield implementation; zero legacy code debt in repository. |
| **Saved Brand Assets** | Downloaded `logo.png` (188 KB) & `favicon.ico` (15 KB) to `public/assets/brand/` | Authentic high-resolution logo preserved for brand token extraction. |

---

## 3. Technology Stack Evaluation

### 3.1 Existing Reference Site Tech Stack
An inspection of the live reference site ([https://sathiyavanitrust.netlify.app/](https://sathiyavanitrust.netlify.app/)) reveals:
- **Architecture:** Static multi-page HTML (`index.html`, `about.html`, `founder.html`, etc.) served directly via Netlify.
- **Styling:** Embedded `<style>` blocks in each HTML document with hardcoded CSS variables, repeated Google Fonts link (`Poppins`), and raw pixel paddings.
- **JavaScript:** Minimal vanilla script for a basic scroll-reveal class toggle and a simplistic text counter ticker on the homepage.
- **State & Data Management:** None. All copy, beneficiary numbers, and phone numbers are hardcoded directly into HTML tags.
- **Backend & APIs:** None. Form inputs do not exist; contact relies solely on an external `wa.me` WhatsApp link.
- **Security & Headers:** Default Netlify static hosting headers; no Content Security Policy (CSP), no robots.txt, no sitemap.xml.

### 3.2 Evaluation Against Long-Term Nonprofit Needs
The legacy approach has critical shortcomings:
1. **Zero Content Self-Service:** Any typo, new annual Diwali count, or news update requires editing raw HTML and redeploying.
2. **Fragile Navigation Model:** Subpages use linear "Previous Page" / "Next Page" links rather than a standard accessible navbar, stranding visitors.
3. **No Form Ingestion:** Inquiries cannot be tracked, triaged, or audited.
4. **Zero Verification:** Beneficiary figures and financial transparency cannot be verified or managed through draft/review/publish workflows.

---

## 4. Reusable Assets & Artifacts

1. **Brand Emblem (`public/assets/brand/logo.png`):**
   - **Visual Elements:** Central golden-amber book with sprouting grain/shoot; outer circle of eight stylized human figures joining hands in teal/cyan/navy blue.
   - **Extracted Color Codes:**
     - Primary Terracotta / Rust: `#B84A39`
     - Golden Amber / Growth: `#D9822B`
     - Deep Trust Navy: `#0F4C81`
     - Ocean / Cyan Teal: `#0F766E` / `#11998E`
     - Soft Cream / Background: `#F8FAFC`
   - **Spelling Observation:** The logo artwork spells the name as **"Sathyavani"** (without 'i'), while the reference domain is **"sathiyavanitrust"** (with 'i'). This requires stakeholder confirmation.
2. **Favicon (`public/favicon.ico`):**
   - High-resolution favicon matching the brand emblem.

---

## 5. Technical Debt & Identified Risks

1. **No Data Persistence:** Form inquiries sent via email/WhatsApp can get lost; no central CRM or lead table.
2. **Missing Security Controls:** Without a proper backend, rate limiting, CSRF protection, and server-side validation cannot be enforced.
3. **Unvalidated Claims:** Discrepancies between homepage counter values and subpage outreach statistics expose the trust to credibility risks.
4. **Single Point of Contact:** All communications route to a single mobile number (`9841454501`) without institutional logging or backup contact info.

---

## 6. Architecture & Framework Recommendation

| Component | Recommendation | Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router, React 19/18, TypeScript)** | Superior SEO (Server Components), static generation for public pages, dynamic server actions for forms, API routes for webhooks. |
| **Styling** | **Tailwind CSS + Headless UI / Lucide Icons** | Design token adherence, accessible interactive primitives, zero runtime overhead, mobile-first responsiveness. |
| **Backend & Database** | **Supabase (PostgreSQL + RLS + Auth + Storage)** | Managed Postgres with Row Level Security, instant secure authentication for trust admins, media bucket for activity photos, zero server maintenance. |
| **Hosting & CI/CD** | **Netlify (or Vercel)** | Existing domain already runs on Netlify; seamless Git continuous integration, edge functions, instant rollback capability. |
| **Testing** | **Vitest + Playwright** | Fast unit tests for formatters and validations; cross-browser E2E testing for desktop and mobile viewports. |

---

## 7. Immediate Next Steps for Phase 1
- Establish clear architectural documentation and data contracts.
- Define a strict separation between public read-only content and protected administrative actions.
- Await client sign-off before executing repository scaffolding and dependencies installation.
