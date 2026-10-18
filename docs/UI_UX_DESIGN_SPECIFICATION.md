# UI/UX Design Specification & Visual System

**Project:** Sathiyavani Charitable Trust Website  
**Date:** October 2026  
**Auditor:** Senior UI/UX Designer & Accessibility Specialist  

---

## 1. Brand Identity & Design Principles

### 1.1 Brand Personality
The visual and emotional identity of Sathiyavani Charitable Trust is grounded in **Dignity, Grassroots Authenticity, Warmth, and Institutional Transparency**. It avoids the two common traps of nonprofit websites:
1. *Poverty exploitation:* Never uses degrading imagery or pity-driven design.
2. *Sterile corporate veneer:* Avoids looking like a generic corporate brochure; maintains the human warmth of a community movement born on a roadside platform.

### 1.2 Core Design Principles
- **Human Dignity:** Beneficiaries are depicted as active participants in their growth, never passive subjects.
- **Visual Evidence Over Exaggeration:** Clean data tables, documented milestones, and genuine photography replace inflated marketing rhetoric.
- **Extreme Readability & High Contrast:** Minimum 4.5:1 contrast for normal text and 3:1 for large text across light and dark surfaces, compliant with WCAG 2.2 AA.
- **Generous Whitespace & Calm Visual Rhythm:** Content is chunked logically with sufficient breathing room (80px–120px desktop section gaps) to prevent cognitive fatigue.
- **Predictable & Respectful Motion:** Animations are strictly functional (fade-in on scroll, smooth tab switching); full support for `prefers-reduced-motion: reduce`.

---

## 2. Color System & Semantic Tokens

The color palette is derived directly from the extracted brand emblem (`public/assets/brand/logo.png`), pairing warm organic earth tones with steady, institutional blues.

```
       [ Terracotta Rust ]      [ Golden Amber ]       [ Deep Trust Navy ]
            #B84A39                 #D9822B                 #0F4C81
       (Passion & Action)       (Growth & Learning)    (Integrity & Security)

       [ Ocean Cyan Teal ]      [ Warm Canvas Off-White ]  [ Slate Charcoal Body ]
            #0F766E                 #FDFBF7                 #1E293B
     (Community & Nature)       (Welcoming Background)       (Crisp Typography)
```

### Color Palette Tokens

| Semantic Role | Hex Value | TailWind Token | Usage & Context |
| :--- | :--- | :--- | :--- |
| **Brand Primary (Navy)** | `#0F4C81` | `brand-navy` | Main headers, navigation background, formal callout containers, authoritative titles. |
| **Brand Accent (Amber)** | `#D9822B` | `brand-amber` | Highlights, active indicators, badges, primary CTA button hover states. |
| **Brand Secondary (Terracotta)** | `#B84A39` | `brand-terracotta`| Key emotional accents, urgency tags, primary CTA buttons (high visibility). |
| **Brand Nature (Teal)** | `#0F766E` | `brand-teal` | Environmental initiatives, child development cards, success states. |
| **Surface Base (Light)** | `#FDFBF7` | `brand-warm-canvas` | Warm off-white background preventing harsh screen glare. |
| **Surface Card** | `#FFFFFF` | `white` | High-contrast elevated cards with subtle ambient shadows. |
| **Text Primary** | `#0F172A` | `slate-900` | Headings, subheadings, key metrics (contrast ratio 14.8:1 against white). |
| **Text Muted** | `#475569` | `slate-600` | Body copy, explanatory descriptions, metadata (contrast ratio 6.2:1 against white). |
| **Border Neutral** | `#E2E8F0` | `slate-200` | Hairline dividers, subtle card boundaries. |
| **Focus Ring (Accessible)** | `#2563EB` | `blue-600` | High-visibility 3px solid focus ring with 2px offset for keyboard navigation. |

---

## 3. Typography Hierarchy

- **Headings Font:** `Plus Jakarta Sans` or `Outfit` (Modern, humanistic geometric sans-serif that communicates warmth, optimism, and contemporary professionalism).
- **Body & Data Font:** `Inter` (Standard for high legibility, robust optical metrics, excellent tabular numeral support for impact statistics).

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Line Height | Weight | Tailwind Equivalent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | 3.5rem (56px) | 2.25rem (36px) | 1.15 | 800 (Bold) | `text-4xl md:text-6xl font-extrabold tracking-tight` |
| **Page H2** | 2.25rem (36px) | 1.75rem (28px) | 1.25 | 700 (Bold) | `text-2xl md:text-4xl font-bold tracking-tight` |
| **Section H3** | 1.5rem (24px) | 1.25rem (20px) | 1.35 | 600 (Semibold) | `text-xl md:text-2xl font-semibold` |
| **Card H4** | 1.25rem (20px) | 1.125rem (18px)| 1.4 | 600 (Semibold) | `text-lg md:text-xl font-semibold` |
| **Lead Paragraph** | 1.125rem (18px)| 1.0rem (16px) | 1.65 | 400 (Regular) | `text-base md:text-lg text-slate-600` |
| **Body Standard** | 1.0rem (16px) | 0.9375rem (15px)| 1.6 | 400 (Regular) | `text-sm md:text-base text-slate-600` |
| **Caption / Fine Print**| 0.8125rem (13px)| 0.75rem (12px) | 1.5 | 500 (Medium) | `text-xs text-slate-500` |
| **Tabular Numbers** | 2.75rem (44px) | 2.0rem (32px) | 1.0 | 700 (Bold) | `font-mono text-3xl md:text-5xl font-bold` |

---

## 4. Layout Grid, Spacing & Container Widths

- **Max Container Width:** `1280px` (`max-w-7xl` centered with `mx-auto px-4 sm:px-6 lg:px-8`).
- **Reading Container Width (Articles / Stories):** `768px` (`max-w-3xl`) for optimal line length (60–75 characters per line).
- **Responsive Breakpoints:**
  - `sm`: 640px (Large phones landscape)
  - `md`: 768px (Tablets portrait; mobile drawer threshold)
  - `lg`: 1024px (Laptops / Small desktops)
  - `xl`: 1280px (Standard desktops)
  - `2xl`: 1536px (Large monitors)
- **Spacing Scale:** Standard 4px-based grid (e.g., 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px).

---

## 5. Component Style Guide

### 5.1 Buttons & Interactive Elements
- **Primary Action (e.g., "Sponsor a Student"):**
  - Solid fill in Terracotta `#B84A39`, bold text in white, 10px rounded corners (`rounded-xl`), 14px 28px padding. Hover: `#A03C2D` with subtle shadow (`shadow-md shadow-brand-terracotta/20`).
- **Secondary Action (e.g., "Explore Programs"):**
  - White background, Deep Navy `#0F4C81` border (1.5px) and text. Hover: light navy wash (`bg-brand-navy/5`).
- **Touch Target Requirement:** All mobile interactive items must be at least `48px x 48px` tappable area.

### 5.2 Cards & Program Layouts
- **Card Anatomy:** White elevated surface (`bg-white`), subtle 1px border (`border-slate-100`), smooth curved corners (`rounded-2xl`), gentle ambient shadow (`shadow-sm hover:shadow-xl transition-all duration-300`).
- **Image Ratios:**
  - Program Cards: `16:10` aspect ratio with object-cover.
  - Story Spotlights: `4:3` aspect ratio.
  - Founder / Leadership Portraits: `1:1` circular or `4:5` portrait crop.

### 5.3 Form Design & Validation States
- **Floating / Inset Labels:** Crisp slate-700 label, clear placeholder text, explicit required asterisks `*`.
- **States:**
  - *Default:* Border `slate-300`, background `white`.
  - *Focus:* 2px border `brand-navy`, subtle glow.
  - *Error:* Border `red-600`, immediate ARIA description `aria-invalid="true" aria-describedby="err-email"`, error icon with explanatory text.
  - *Success / Confirmed:* Light green banner with confirmation tracking ID and WhatsApp fallback.

---

## 6. Homepage Layout Blueprint & Narrative Architecture

The homepage is organized as a deliberate persuasive journey that builds credibility before asking for financial commitment:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Accessible Navigation Bar (Logo, Links, CTA)     │
├─────────────────────────────────────────────────────────────┤
│ 2. Mission-Driven Hero Section (Tagline, Value, Quick CTAs)  │
├─────────────────────────────────────────────────────────────┤
│ 3. Grassroots Foundation Banner (Roadside to Community)      │
├─────────────────────────────────────────────────────────────┤
│ 4. Four Core Program Pillars (Education, Child Dev, Welfare)│
├─────────────────────────────────────────────────────────────┤
│ 5. Verified Impact Metric Bar (Cumulative Beneficiaries)    │
├─────────────────────────────────────────────────────────────┤
│ 6. The Founder's Journey (Mr. Raghu N. Spotlight)           │
├─────────────────────────────────────────────────────────────┤
│ 7. Authentic Community Story / Recent Milestone              │
├─────────────────────────────────────────────────────────────┤
│ 8. Institutional Transparency & Compliance Disclosures      │
├─────────────────────────────────────────────────────────────┤
│ 9. High-Conversion Engagement Hub (Volunteer, Sponsor, CSR) │
├─────────────────────────────────────────────────────────────┤
│ 10. Comprehensive Footer (Address, Phone, WhatsApp, Legal)   │
└─────────────────────────────────────────────────────────────┘
```

### Rationale for Section Ordering
1. **Hero + Grassroots Banner:** Immediately clarifies who the trust is and its authentic origin story (addressing cynicism).
2. **Programs:** Demonstrates tangible, practical work on the ground.
3. **Verified Metrics:** Provides quantitative validation right after programmatic claims.
4. **Founder Spotlight & Story:** Humanizes the initiative with leadership accountability.
5. **Transparency & Disclosures:** Offers corporate partners and donors legal safety (registration, 80G status).
6. **Ways to Help:** Directs emotionally connected and logically persuaded visitors to act.

---

## 7. Low-Fidelity Wireframe Descriptions

### 7.1 Homepage Wireframe Description
- **Hero:** Left 60% text column: Over-title pill "Empowering Children in Chennai Since 2020", Large H1 "Every Child Deserves an Unbroken Path to Learning", 2-line description, Dual CTA group [Sponsor a Student] (Primary) [Explore Free Tuition] (Secondary). Right 40% column: High-fidelity photo carousel with real tuition center students learning.
- **Impact Counter:** Full-width dark navy strip with 4 metric columns (Each: large bold white number, subtle amber divider, clear muted label).
- **Programs Grid:** 4-column responsive grid (1 col mobile, 2 col tablet, 4 col desktop). Each card has a top photo, category badge, concise paragraph, and text link "Learn more →".

### 7.2 Program Page Wireframe (`/programs/education`)
- **Breadcrumb:** Home / Programs / Free Education
- **Header:** Full-width hero banner with badge "Flagship Program", H1 "Free After-School Tuition & School Fee Assistance", quick facts box (Center Timings, Age Groups, Location).
- **Main Body (2 columns):**
  - Left (65%): Detailed narrative, Curriculum breakdown (Math, Science, English, State Board prep), Student progress tracking, Mentorship model.
  - Right (35% Sticky): "Sponsorship Box" card showing breakdown of ₹500/month or ₹6,000/year; Direct form trigger [Sponsor This Program].

### 7.3 Impact & Evidence Page Wireframe (`/impact`)
- **Header:** H1 "Verified Impact & Social Accountability", intro on verification methods.
- **Metrics Dashboard:** 4 key KPI cards with trend indicators.
- **Diwali Distribution Historical Graph/Table:** Responsive interactive comparison showing 2019 (20) to 2024 (1,000), clearly labeling past verified records vs. future goals.
- **Social Audit Download Section:** Download links for Annual Summaries (PDF).

### 7.4 Get Involved / Volunteer Page Wireframe (`/get-involved/volunteer`)
- **Header:** H1 "Share Your Knowledge, Transform a Future", volunteer testimonial carousel.
- **Volunteer Roles:** 3 role cards (Academic Tutor, Weekend Activity Lead, Administrative/Tech Mentor).
- **Interactive Form:** Two-step clean form (Step 1: Contact & Availability, Step 2: Skills & Preferred Center Location), Submit button with instant validation.

### 7.5 Admin Dashboard Wireframe (`/admin/dashboard`)
- **Header:** Admin Bar with organization logo, user profile badge, "Sign Out" button.
- **Top Metric Cards:** New Inquiries (Volunteer / Sponsor / General), Published Stories, Active Impact Metrics count.
- **Recent Inquiries Table:** Columns (Date, Category, Name, Contact, Status badge: New / Contacted / Resolved, Action: View Details).
- **Quick Actions Bar:** [Add Story], [Update Impact Metric], [Export Contacts to CSV].
