# Information Architecture, Sitemap & Page Specifications

**Project:** Sathiyavani Charitable Trust  
**Date:** October 2026  
**Document Status:** Architectural Proposal for Phase 2 Implementation  

---

## 1. Information Architecture Principles

1. **Elimination of Linear Traps:** Replace the sequential slide-deck pagination with an industry-standard, globally consistent hierarchical navigation bar (Desktop multi-level header + Accessible Mobile Drawer).
2. **Consolidation of Thin Pages:** Instead of having 2-paragraph standalone pages for `/mission` and `/vision`, merge them as dedicated, beautifully structured sections within an authoritative `/about` hub, while maintaining 301 redirects for legacy URLs.
3. **Structured Inquiries:** Transition from unstructured WhatsApp messages to purpose-built, accessible web forms with distinct workflows for Donors, Volunteers, and Corporate Partners.
4. **Separation of Public vs. Admin Concerns:** Clear logical and architectural separation between public statically-generated pages and the authenticated `/admin` portal.

---

## 2. Proposed Complete Sitemap

```
sathiyavanitrust.org/
├── / (Home)
├── /about (About the Trust, History, Governance & Team)
│   ├── /about/founder (Founder's Story & The Journey)
│   └── /about/transparency (Legal Registrations, 80G/12A, Annual Reports)
├── /programs (Program Overview Hub)
│   ├── /programs/education (Free Tuition & School Fee Assistance)
│   ├── /programs/child-development (Sports, Arts & Birthday Celebrations)
│   ├── /programs/community-welfare (Outreach to Single Parents, Tribal & Disabled Communities)
│   ├── /programs/festivals (Diwali Joy & Cultural Inclusivity)
│   └── /programs/environment (Biodiversity & Clean-up Drives with Exnora)
├── /impact (Verified Beneficiary Data, Growth Metrics & Evidence)
├── /stories (Authentic Case Studies, Updates & Milestones)
├── /get-involved (Engagement Hub)
│   ├── /get-involved/volunteer (Volunteer Registration Form)
│   ├── /get-involved/sponsor (Student & Program Sponsorship Inquiry)
│   └── /get-involved/partnerships (Corporate CSR & Institutional Collaboration)
├── /contact (Physical Address, Center Location, Phone & Interactive Map)
├── /privacy-policy (Child Safeguarding & Personal Data Protection)
├── /terms-of-use (Website & Donation Terms)
└── /admin (Protected Management Dashboard)
    ├── /admin/login (Multi-Factor / Secure Email Auth)
    ├── /admin/dashboard (System Health & Recent Submissions Overview)
    ├── /admin/inquiries (Volunteer, Sponsorship & CSR Triage)
    ├── /admin/impact (Impact Metric Draft, Review & Publication Workflow)
    ├── /admin/programs (Program Details & Content Editor)
    ├── /admin/stories (Case Study Publishing & Media Association)
    └── /admin/media (Secure Media Library & Image Asset Management)
```

---

## 3. Detailed Page Specifications Matrix

| Route | Objective | Target Audience | Required Key Sections | Primary CTA | Data Dependencies | Content Dependencies | SEO Purpose | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`/` (Home)** | Introduce mission, validate legitimacy, channel users to action. | General public, prospective donors, partners. | 1. Hero with vision tagline & quick CTAs.<br>2. Trust overview & emblem meaning.<br>3. Core program grid.<br>4. Verified impact counter.<br>5. Founder spotlight snippet.<br>6. Community story card.<br>7. Transparency banner.<br>8. Ways to help CTA banner. | "Explore Programs" & "Get Involved" | Approved published metrics, featured story, program list. | High-res center photos, verified cumulative beneficiary numbers. | Primary organic ranking for "Sathiyavani Charitable Trust Chennai". | Core Web Vitals LCP < 2.0s; 100% responsive; zero layout shift. |
| **`/about`** | Establish trust, institutional roots, and values. | Donors, corporate evaluators, volunteers. | 1. Who We Are.<br>2. Mission & Vision Statements.<br>3. Guiding Principles.<br>4. Leadership & Trustees.<br>5. Milestone Timeline (2020 to present). | "View Founder Story" & "See Legal Filings" | Static content + board list. | Verified founding history and trustee bios. | Keyword authority on NGO background, values, and location. | Clear semantic headings, accessible timeline component. |
| **`/about/founder`** | Humanize the grassroots journey of Mr. Raghu N. | Individual donors, media, volunteers. | 1. Founder Bio & Photo.<br>2. Origin: COVID Roadside platform.<br>3. Progression: Temple, Home, Police Library space.<br>4. Personal Philosophy & Vision. | "Join Our Mission" | Static content. | Authentic high-res portrait of founder and early center archive photos. | Founder authority, biographical search queries. | High emotional resonance without sensationalism; dignified tone. |
| **`/about/transparency`** | Provide ironclad proof of compliance and governance. | CSR committees, major donors, auditors. | 1. Trust Deed Registration Info.<br>2. 12A & 80G Tax Exemption Certificates.<br>3. NGO Darpan / PAN details.<br>4. Downloadable Annual Reports & Balance Sheets.<br>5. Child Safeguarding Policy summary. | "Download Annual Report (PDF)" | Static legal documents & verified registrations. | Official government certificate PDFs and financial disclosures. | Institutional credibility, CSR compliance ranking. | All downloads secure, checksummed, and clearly labeled. |
| **`/programs/education`** | Detail after-school tuition and fee support. | Donors, prospective student families, volunteers. | 1. Program Overview.<br>2. Tuition Center Schedules & Curricula.<br>3. Student Fee Sponsorship Model.<br>4. Academic Mentorship.<br>5. Sponsor Inquiry Card. | "Sponsor a Student's Education" | Active program stats, sponsorship tiers. | Center location, subjects, grade levels covered. | Targeted ranking for free tuition and child education NGO Chennai. | Clear breakdown of sponsorship costs; working inquiry form link. |
| **`/programs/child-development`** | Showcase holistic development beyond academics. | Volunteers, arts/sports mentors, donors. | 1. Birthday Celebration Initiative.<br>2. Sports & Physical Well-being.<br>3. Arts, Cultural & Talent Exploration.<br>4. Photo gallery with consent. | "Volunteer for Weekend Activities" | Activity galleries. | Activity descriptions and photo releases. | Holistic child development and sports empowerment NGO queries. | Dignified imagery of children; alt text present on all photos. |
| **`/programs/community-welfare`** | Detail support for single mothers, tribal & disabled communities. | Community leaders, social welfare donors. | 1. Single-Parent Family Assistance.<br>2. Support for Differently-Abled Individuals.<br>3. Tribal Outreach Initiatives.<br>4. Case Study Highlights. | "Support Community Welfare" | Program initiatives list. | Verified outreach summaries. | Community outreach and tribal assistance Tamil Nadu. | Clear articulation of community-led partnerships. |
| **`/programs/festivals`** | Clarify the annual Diwali Joy Initiative and history. | Festive donors, local businesses. | 1. Diwali Gift Distribution Story.<br>2. Verified Annual Distribution Table.<br>3. What a Gift Kit Contains.<br>4. How to Contribute. | "Contribute to Festival Joy" | Historical verified distribution records. | Exact gift kit contents (sweets, clothes, stationery). | Festive charity, Diwali donation NGO Chennai. | Explicitly distinguishes past verified counts from upcoming targets. |
| **`/programs/environment`** | Explain biodiversity and clean-up activities. | Environmental groups, CSR leads, youth volunteers. | 1. Tree Planting & Urban Greening.<br>2. Biodiversity Workshops.<br>3. Partnership with Exnora Organization.<br>4. Student Nature Ambassador program. | "Join the Next Green Drive" | Event schedule. | Joint statement/proof of collaboration with Exnora. | Environmental NGO Chennai, tree planting Exnora collaboration. | Clear environmental metrics (number of saplings, clean-ups). |
| **`/impact`** | Provide transparent, verifiable evidence of outcomes. | CSR leads, grantmakers, donors. | 1. Executive Impact Dashboard.<br>2. Year-by-Year Verified Beneficiary Chart.<br>3. Education Progression Metrics.<br>4. Geographic Reach Map.<br>5. Verification Methodology Statement. | "Partner With Us" | Approved metrics table (Supabase). | Verified historical data validated by trustees. | Transparency, social audit, NGO impact Chennai. | Interactive accessible data tables with CSV download option. |
| **`/get-involved/volunteer`**| Recruit, screen, and onboard volunteers. | Students, professionals, retirees. | 1. Volunteer Roles (Teaching, Events, Tech).<br>2. Time Commitment & Requirements.<br>3. Volunteer Testimonials.<br>4. Interactive Volunteer Registration Form. | "Submit Volunteer Application" | Server Action for form submission. | Clear role descriptions, code of conduct preview. | Volunteer opportunities Chennai, NGO teaching volunteering. | Instant client-side validation; server rate-limiting; toast confirmation. |
| **`/get-involved/sponsor`** | Convert interested donors into regular student sponsors. | High-intent donors. | 1. Sponsorship Tiers (Fee, Books, Uniform).<br>2. How Sponsorship Works.<br>3. Donor Communication & Updates.<br>4. Interactive Sponsorship Pledge Form. | "Pledge Sponsorship" | Server Action for pledge registration. | Cost breakdowns vetted by trust administration. | Sponsor a child Chennai, student education sponsorship. | Clear tax receipt disclaimer; secure submission; direct contact trigger. |
| **`/get-involved/partnerships`**| Engage corporate CSR teams and institutions. | Corporate CSR committees, foundations. | 1. CSR Focus Alignment.<br>2. Compliance Credentials (CSR-1, 80G).<br>3. Project Proposal Modules.<br>4. Corporate Partnership Inquiry Form. | "Request CSR Proposal" | Server Action for corporate inquiries. | Official trust profile PDF, formal CSR contact person. | Corporate CSR partnership Tamil Nadu education. | Dedicated corporate form with company name, budget range, and timeline. |
| **`/contact`** | Direct access to trust leadership and locations. | Beneficiaries, donors, volunteers, general public. | 1. Center Address & Landmark.<br>2. Office Hours & Visiting Protocol.<br>3. Phone & WhatsApp Links.<br>4. Interactive Map.<br>5. General Inquiry Form. | "Send Message" / "Call Us" | Server Action for general contact. | Confirmed physical premises and official contact email. | Contact Sathiyavani Charitable Trust. | Accessible interactive map fallback; one-tap dialing on mobile. |
| **`/admin/*`** | Secure administrative management suite. | Mr. Raghu N. & authorized coordinators. | Login, Inquiries review, Content management, Impact approval, Media storage. | "Publish Changes" | Supabase Auth, PostgreSQL RLS. | Role-based admin access credentials. | `noindex, nofollow` robots directive. | Strict 2FA/auth enforcement; zero data leakage to public client. |

---

## 4. Navigation Architecture & Responsive Hierarchy

### Desktop Navigation Structure
- **Left:** Brand Logo (Emblem + "Sathiyavani Charitable Trust")
- **Center:**
  - **About ▾** (Our Story, Founder's Journey, Governance & Transparency)
  - **Programs ▾** (Free Education, Child Development, Community Welfare, Festival Joy, Environment)
  - **Impact** (Direct link)
  - **Get Involved ▾** (Volunteer, Sponsor a Student, Corporate Partnerships)
  - **Contact** (Direct link)
- **Right CTA:** Primary Button `[Sponsor a Student]` + Direct WhatsApp Quick-Tether

### Mobile Navigation Structure (< 768px)
- **Header Bar:** Brand Logo + Direct Tap-to-Call + Hamburger Button
- **Slide-out Drawer:**
  - High-contrast, keyboard-accessible accordion menu with 48px minimum touch targets.
  - Dedicated "Direct Support" sticky footer with instant WhatsApp and Phone dialing.
  - Full screen reader ARIA attributes (`aria-expanded`, `aria-controls`, `role="navigation"`).
