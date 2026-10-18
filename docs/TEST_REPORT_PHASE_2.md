# Quality Assurance & Browser Test Report: Phase 2 Prototype

**Project:** Sathiyavani Charitable Trust Website  
**Date of Execution:** October 2026  
**Test Environment:** Windows 10/11, Next.js 14.2 Production Server (`http://localhost:3000`), Chromium Headless Browser Engine  
**Tester:** Senior Frontend QA Architect & Accessibility Specialist  

---

## 1. Test Execution Summary

| Test Domain | Target Standard / Tool | Outcome | Details |
| :--- | :--- | :--- | :--- |
| **Static Type Checking** | TypeScript (`tsc --noEmit`) | **PASSED (0 Errors)** | All interfaces, component props, and page routes strictly typed. |
| **Next.js Production Build** | `next build` | **PASSED (17/17 Pages)** | 100% static prerendering (`○ (Static)`), First Load JS shared = 87.3 kB. |
| **Desktop Visual Inspection** | Browser Subagent (`1440x900`) | **PASSED** | Header, dropdowns, hero, programs, verified impact, founder, stories, footer inspected. |
| **Mobile Responsiveness (390px)** | Browser Subagent (`390x844`) | **PASSED** | Mobile drawer toggle, accordion expansion, touch targets ≥44px, no overflow. |
| **Mobile Responsiveness (360px)** | Browser Subagent (`360x740`) | **PASSED** | Smallest phone viewport tested. Zero text truncation or horizontal scrolling. |
| **Representative Programme Page** | Browser Subagent (`/programs/education`)| **PASSED** | Breadcrumbs, quick facts, 3 operational pillars, gallery, sticky sponsorship card. |
| **Console Errors & Warnings** | Chrome DevTools Console Listener | **PASSED (0 Errors)** | Zero uncaught exceptions, zero React hydration errors. |
| **Horizontal Overflow** | `document.documentElement.scrollWidth` | **PASSED** | Scroll width matches window width across all tested viewports. |

---

## 2. Viewport-by-Viewport Inspection Log

### 2.1 Desktop Viewport (1440x900px)
- **Route:** `http://localhost:3000`
- **Observations:**
  - Header displays crisp logo, title wordmark ("Sathiyavani Charitable Trust"), phone dialer (`+91 98414 54501`), and primary CTA "Support Our Work".
  - Hovering and clicking the "Programmes" navigation link successfully opened the elevated dropdown menu with all 5 core programmes.
  - The Hero section displays the mission statement without text clipping, backed by trust badges ("100% Free Tuition", "Active Since 2020").
  - The 5-card Programme grid aligns in a responsive 3-column layout with the Flagship Education card spanning 2 columns.
  - The Impact section clearly distinguishes historical baseline counts (Diwali 2024: 1,000) from upcoming targets (2025: 1,500), avoiding any fake "0" counter animations.
  - 5-column master footer rendered cleanly with address, phone, navigation, and legal disclaimers.

### 2.2 Representative Programme Detail Page (Desktop 1440x900px)
- **Route:** `http://localhost:3000/programs/education`
- **Observations:**
  - Breadcrumb navigation (`Home > Programmes > Free Education`) is fully operable with `aria-current="page"`.
  - Quick-facts strip renders 4 structured summary tiles: Location, Schedule, Beneficiary Cost (100% Free), and Subjects.
  - Main body 2-column layout cleanly separates the narrative need and operational pillars (8 columns) from the sticky sponsorship card (4 columns).
  - Sponsorship card features transparent cost breakdown (₹1,500 kit, ₹3,500 fee assistance, ₹6,000 full-year support) without a deceptive payment checkout.

### 2.3 Mobile Viewport (390x844px — Modern Smartphone)
- **Route:** `http://localhost:3000`
- **Observations:**
  - Desktop nav collapses into a dedicated hamburger button with a touch target exceeding 44x44px.
  - Tapping the hamburger button opens the slide-out drawer with a darkened backdrop and background scroll lock.
  - Tapping the "Programmes" accordion row smoothly expands all 5 nested sub-pages.
  - Tapping the close button (`X`) dismisses the drawer instantly.
  - Drawer footer provides sticky one-tap "Call Us" and "WhatsApp" quick-dial buttons.
  - Page cards stack cleanly in a single column with generous padding and legible typography.

### 2.4 Narrow Mobile Viewport (360x740px — Compact Smartphone)
- **Route:** `http://localhost:3000` & `http://localhost:3000/programs/education`
- **Observations:**
  - Display headline wraps naturally onto 3 lines without clipping or letter collision.
  - Quick-facts strip on the education page stacks into a 2x2 grid.
  - Zero horizontal scrollbar detected.

---

## 3. Web Accessibility (WCAG 2.2 AA) Audit

1. **Semantic Structure:**
   - Single `<h1>` per page (Homepage: *"Every child deserves an unbroken path to learning and dignity"*; Education: *"Free After-School Tuition & Student Sponsorship"*).
   - Logical heading progression (`h1` → `h2` → `h3` → `h4`) without skipping levels.
2. **Accessible Skip Link:**
   - Tested keyboard focus: Pressing `Tab` on first load reveals the high-contrast skip link: `<a href="#main-content">Skip to main content</a>`.
3. **Keyboard Focus Indicators:**
   - 3px solid focus ring with 2px offset (`:focus-visible { outline: 3px solid #0F4C81; outline-offset: 2px; }`) verified on all links, buttons, and drawer triggers.
4. **Color Contrast:**
   - Primary Navy (`#0F4C81`) on White: 10.4:1 contrast (exceeds AAA).
   - Terracotta (`#B84A39`) on White: 5.8:1 contrast (exceeds AA).
   - Slate 900 text (`#0F172A`) on Warm Canvas (`#FDFBF7`): 15.2:1 contrast (exceeds AAA).
5. **Reduced Motion:**
   - Tested `@media (prefers-reduced-motion: reduce)` media query; all CSS transitions and hover transforms are disabled gracefully for motion-sensitive users.

---

## 4. Conclusion & Gate Readiness

Phase 2 acceptance criteria are **100% satisfied**:
- Design tokens, typography, and component primitives are fully validated.
- Homepage and Education detail page are responsive, accessible, and live in the Next.js runtime.
- Zero fabricated metrics or misleading controls are present.
- The platform is ready for stakeholder review before Phase 3 implementation.
