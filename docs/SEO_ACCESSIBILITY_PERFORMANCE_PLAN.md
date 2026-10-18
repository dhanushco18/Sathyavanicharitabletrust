# SEO, Accessibility & Performance Engineering Plan

**Project:** Sathiyavani Charitable Trust Website  
**Date:** October 2026  
**Document Status:** Technical Compliance Specification  

---

## 1. Search Engine Optimization (SEO) Architecture

### 1.1 Metadata & Indexing Strategy
Every route will generate unique, descriptive metadata utilizing Next.js `generateMetadata`:
- **Title Syntax:** `{Page Title} | Sathiyavani Charitable Trust, Chennai`
- **Meta Descriptions:** 140–160 characters summarizing the page's factual offerings, incorporating high-intent keywords (e.g., *free child education Chennai, NGO tuition center, Diwali gift initiative*).
- **Canonical URLs:** Strict self-referential canonical tags to prevent duplicate indexing across query parameters.
- **Robots.txt & Sitemap:**
  - Automated `sitemap.xml` generated at build time covering all public routes and dynamic story slugs.
  - `robots.txt` allowing public indexing while disallowing `/admin/*`, `/api/*`, and preview endpoints.

### 1.2 Open Graph & Social Sharing
- Dynamic Open Graph (OG) and Twitter card generation.
- Dedicated 1200x630px social preview image (`/public/assets/brand/og-image.jpg`) featuring the emblem, mission statement, and verified registration badge.

### 1.3 Schema.org Structured Data (JSON-LD)
Pages will inject structured JSON-LD schemas:
1. **NGO / NonProfit Organization Schema (Homepage):**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "NGO",
     "name": "Sathiyavani Charitable Trust",
     "alternateName": "Sathyavani Charitable Trust",
     "url": "https://sathiyavanitrust.org",
     "logo": "https://sathiyavanitrust.org/assets/brand/logo.png",
     "founder": {
       "@type": "Person",
       "name": "Mr. Raghu N."
     },
     "foundingDate": "2023",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Chennai",
       "addressRegion": "Tamil Nadu",
       "addressCountry": "IN"
     },
     "contactPoint": {
       "@type": "ContactPoint",
       "telephone": "+91-9841454501",
       "contactType": "Customer Support"
     }
   }
   ```
2. **BreadcrumbList Schema:** On all sub-routes to enrich Google SERP breadcrumbs.

---

## 2. Web Accessibility Plan (WCAG 2.2 AA Compliance)

### 2.1 Measurable Accessibility Targets
- **Standard:** Strict conformance with **WCAG 2.2 Level AA**.
- **Automated Axe-Core Score:** 0 violations across all public routes.
- **Target Audience Considerations:** Ensures full accessibility for screen-reader users, keyboard-only operators, and low-vision individuals.

### 2.2 Key Accessibility Controls

| Area | Implementation Requirement | Verification Checklist |
| :--- | :--- | :--- |
| **Keyboard Navigation** | Logical tab order (`tabindex="0"`); visible skip-to-content link (`<a href="#main-content">Skip to Main Content</a>`). | Verified by navigating entire site using only `Tab`, `Shift+Tab`, `Enter`, and `Space`. |
| **Focus Rings** | High-visibility focus indicator: `outline: 3px solid #2563EB; outline-offset: 2px;` on all interactive buttons, inputs, and links. | Never suppressed via `outline: none` without an explicit accessible custom replacement. |
| **Color Contrast** | Minimum 4.5:1 for normal body text; minimum 3:1 for large display text and interactive UI borders. | Checked via Colour Contrast Analyser (CCA) and browser dev tools. |
| **Touch Targets** | Mobile buttons, links, and form controls must have a minimum bounding box of `48px x 48px`. | Validated on touch device emulators. |
| **Form Accessibility** | Explicit `<label for="...">` linking; descriptive error text with `aria-describedby`; `aria-invalid="true"` on validation failures. | Screen-reader test: NVDA/VoiceOver announces errors upon failed submit. |
| **Image Alt Text** | All meaningful images contain concise, objective descriptions (e.g., *"Students engaged in math practice at the tuition center"*). Decorative graphics use `alt=""` and `aria-hidden="true"`. | Verified: zero unlabelled `<img>` tags. |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` disables all non-essential CSS transforms, smooth scroll, and auto-scrolling carousels. | Toggled OS reduced motion setting; assertions verify instant state transitions. |

---

## 3. High-Performance Engineering & Core Web Vitals

### 3.1 Core Web Vitals Performance Targets (Mobile 4G Baseline)

| Metric | Target SLA | Strategy for Achievement |
| :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | **< 2.0s** | Pre-load hero image; priority loading on above-the-fold assets; static HTML generation. |
| **Cumulative Layout Shift (CLS)** | **< 0.05** | Explicit `width` and `height` aspect-ratio containers on all images, icons, and hero sections. |
| **Interaction to Next Paint (INP)** | **< 150ms** | Minimal client-side JavaScript; avoid heavy third-party tracking scripts; use native React 19 transitions. |
| **First Contentful Paint (FCP)** | **< 1.0s** | Edge caching on Netlify CDN; self-hosted Google Fonts via `next/font`. |

### 3.2 Optimization Protocols
1. **Next.js Image Optimization:** Auto-formats uploaded media into AVIF and WebP with responsive `srcset` breakpoints (640w, 750w, 1080w, 1200w).
2. **Font Optimization:** Zero Google Fonts render blocking. Use `@next/font/google` with `display: 'swap'` and `subsets: ['latin']`.
3. **Zero Hydration Clutter:** Server Components render static text and cards directly to HTML without shipping React component runtime code to the browser for read-only sections.

---

## 4. Quality Assurance & Auditing Checklist

- [ ] **Google Lighthouse Audit:** Scores ≥ 95 on Performance, Accessibility, Best Practices, and SEO.
- [ ] **Axe DevTools Automated Scan:** Zero critical or serious issues.
- [ ] **Cross-Browser Verification:** Pixel-perfect rendering and interaction across Chrome, Safari, Firefox, Edge, and iOS/Android WebViews.
- [ ] **Broken Link Scan:** Zero 404 responses across all internal navigation and external links.
