# Reference Website Audit: sathiyavanitrust.netlify.app

**Audit Date:** October 2026  
**Reference URL:** [https://sathiyavanitrust.netlify.app/](https://sathiyavanitrust.netlify.app/)  
**Auditor:** Principal UX/UI Designer & Web Architect  

---

## 1. Executive Findings & Global Observations

### 1.1 Structural Deficiencies
1. **Slide-Deck / Sequential Pagination vs. True Site Architecture:**
   Except for the Homepage and `/education`, secondary pages lack a global header navigation menu. Instead, users are forced into a linear "Previous Page" / "Next Page" loop:
   `Home` → `About` → `Founder` → `Education` → `Child Development` → `Community Outreach` → `Festivals` → `Environment` → `Mission` → `Vision` → `Get Involved`.
   If a visitor lands directly on `/festivals`, they cannot directly jump to `/founder` or view contact info without traversing multiple sequential steps.
2. **Complete Absence of Real Photography:**
   Across all 10 pages, not a single real photograph of an activity, volunteer, child, tuition center, or festival distribution is displayed. The brand file `logo.png` is reused across every hero background (at 8% opacity) and header/footer.
3. **Missing Legal & Trust Compliance Information:**
   - No Trust Registration Number (e.g., Book 4 registration details, Darpan NGO ID).
   - No 12A / 80G Tax Exemption status disclosures.
   - No physical registered office address or PIN code.
   - No official email address (e.g., `@sathiyavanitrust.org`).
   - No Board of Trustees / Governing Body list (only Mr. Raghu N. is named).
   - No audited balance sheets or annual financial statements.
4. **Brand Name Discrepancy:**
   The official vector logo badge text reads **"Sathyavani Charitable Trust"** (without 'i'), whereas the domain, page titles, and body copy use **"Sathiyavani Charitable Trust"** (with 'i').

---

## 2. Page-by-Page Audit Matrix

### Page 1: Homepage (`/`)
- **Page Title:** `Sathiyavani Charitable Trust`
- **Primary Objective:** General organization overview and call to explore the mission.
- **Hero & Content:** "Empowering Lives Through Education, Care and Community Support. From a small roadside initiative to transforming hundreds of lives..."
- **CTA:** Button "Explore Our Mission" linking to `/mission` (bypassing `/about` and `/founder`).
- **Programs Displayed:** 4 cards: Free Education, Child Development, Community Outreach, Environment (Festival Support is omitted here).
- **Impact Counters:**
  - Raw HTML displays `0` for all 4 metrics:
    - `data-target="1500"`: Beneficiaries
    - `data-target="1000"`: Diwali Gifts
    - `data-target="500"`: Students Supported
    - `data-target="5"`: Years of Service
  - *Observation:* Users with JavaScript disabled, slow networks, or search engine crawlers see "0 Beneficiaries".
- **Footer & Contacts:** Phone `9841454501`, floating WhatsApp bubble.
- **Critical Issues:** No address, no social links, no registration proof, no search metadata.

---

### Page 2: About Us (`/about`)
- **Page Title:** `About Us - Sathiyavani Charitable Trust`
- **Primary Objective:** Organizational identity, purpose, and founding history.
- **Content Highlights:** Stated: "Founded officially in 2023, the trust has been actively serving society since 2020 by helping children who lack access to quality educational opportunities."
- **CTA:** "Read Founder's Story →" linking to `/founder`. Back link: "← Back Home".
- **Identified Contradictions:**
  - Date conflict: Claims service began in 2020, yet Community Outreach claims Diwali beneficiaries started in 2019 (20 beneficiaries).
  - No details on legal entity formation, bylaws, or trustees.

---

### Page 3: Founder Story (`/founder`)
- **Page Title:** `Founder Story | Sathiyavani Charitable Trust`
- **Identified Individual:** Mr. Raghu N., Founder & President.
- **Narrative:** Began during COVID-19 pandemic teaching children studying on roadside platforms.
- **Milestones Listed:**
  1. Roadside Platform
  2. Temple Premises
  3. Home-Based Learning
  4. Library Learning Center (states local police authorities provided dedicated space under a library).
- **Quote:** *"No child should be denied education due to financial hardship."*
- **Verification Need:** The arrangement with the local police department and library space requires formal documentation or background context before publicizing as an institutional partnership.

---

### Page 4: Our Core Program (`/education`)
- **Page Title:** `Our Core Program | Sathiyavani Charitable Trust`
- **Pillars:** Free Tuition Classes, School Fee Support, Learning Environment.
- **Audience:** Beneficiaries, donors, volunteers.
- **Shortcomings:** Does not specify the location of the tuition centers, operating hours, subjects taught, age groups, syllabus (State Board / CBSE), or enrollment criteria.

---

### Page 5: Holistic Child Development (`/child-development`)
- **Page Title:** `Holistic Child Development | Sathiyavani Charitable Trust`
- **Pillars:** Birthday Celebrations, Sports & Activities, Extracurricular Engagement.
- **Highlight:** "Many children we support have never celebrated their birthdays. We make their special day memorable..."
- **Shortcomings:** Lacks photos, schedules, or impact metrics.

---

### Page 6: Community Outreach (`/community-outreach`)
- **Page Title:** `Community Outreach | Sathiyavani Charitable Trust`
- **Pillars:** Single-Parent Families, Differently-Abled Individuals, Tribal Communities.
- **Diwali Gift Initiative Beneficiary Table:**
  | Year | Published Beneficiary Count | Status / Verification Note |
  | :--- | :--- | :--- |
  | **2019** | 20 | Unverified self-report; conflicts with "active since 2020" on About page. |
  | **2020** | 65 | Unverified self-report. |
  | **2021** | 200 | Unverified self-report. |
  | **2022** | 450 | Unverified self-report. |
  | **2023** | 750 | Unverified self-report. |
  | **2024** | 1,000 | Unverified self-report. |
  | **2025** | 1,500 | Projected or unconfirmed figure. |
- **Critical Risk:** Publishing projected or unverified future figures (1,500 in 2025) as completed beneficiary numbers damages institutional credibility with CSR auditors.

---

### Page 7: Festivals & Celebrations (`/festivals`)
- **Page Title:** `Festivals & Celebrations | Sathiyavani Charitable Trust`
- **Pillars:** Diwali Joy Distribution, Cultural Celebrations, Community Bonding.
- **Assessment:** Largely duplicates information present in Community Outreach. Needs consolidation into a unified "Community & Welfare Initiatives" section.

---

### Page 8: Environmental Initiatives (`/environment`)
- **Page Title:** `Environmental Initiatives | Sathiyavani Charitable Trust`
- **Pillars:** Biodiversity Awareness, Tree Plantations, Community Clean-ups.
- **Institutional Claim:** "In collaboration with Exnora Organization..."
- **Verification Need:** Confirm the current status, memorandum, or nature of partnership with Exnora Organization.

---

### Page 9: Our Mission (`/mission`) & Page 10: Our Vision (`/vision`)
- **Assessment:** Standalone thin pages containing 2-3 brief paragraphs each. 
- **Recommendation:** Merge Mission and Vision into the core "About Us" and "Strategic Plan" sections to eliminate unnecessary clicks and linear pagination traps.

---

### Page 11: Get Involved (`/get-involved`)
- **Pillars:** Sponsor a Child, Support Community Initiatives, Partner With Us.
- **Contact Displayed:** Phone `9841454501`, WhatsApp direct link.
- **Missing Elements:**
  - Interactive web inquiry forms (volunteer signup, sponsor interest, CSR inquiry).
  - Bank Account details (IFSC, Account Number, Branch).
  - UPI ID / QR code.
  - Tax exemption eligibility (80G).

---

## 3. Verified vs. Unverified Claims Registry

| Claim / Metric | Location Found | Verification Status | Action Required |
| :--- | :--- | :--- | :--- |
| **Founding Year: 2023** | `/about` | Unverified | Request copy of Registered Trust Deed. |
| **Activity Inception: 2020** | `/about` | Unverified | Verify operational timeline. |
| **Diwali Beneficiaries (2019-2025)** | `/community-outreach` | Unverified / Inconsistent | Obtain distribution registers, receipts, or audit records. |
| **Police Library Space** | `/founder` | Unverified | Confirm official permissions / address. |
| **Exnora Partnership** | `/environment` | Unverified | Confirm mutual affiliation status. |
| **500 Students Supported** | Homepage Counter | Unverified | Verify student roster data. |
| **Spelling: Sathyavani vs. Sathiyavani** | Logo Artwork vs. Domain | Confirmed Discrepancy | Obtain legal entity name confirmation from Trust Deed. |

---

## 4. Remediation Strategy for the Redesign
1. **Universal Navigation:** Implement a fixed, accessible, responsive header with clear dropdowns (About, Programs, Impact, Get Involved, Contact).
2. **Consolidated Architecture:** Reduce thin sequential pages into high-value, comprehensive content hubs.
3. **Transparency Hub:** Dedicated "Governance & Transparency" section containing registration numbers, annual reports, and contact info.
4. **Structured Inquiry Forms:** Replace raw phone numbers with categorized web forms that validate input and notify the administration.
