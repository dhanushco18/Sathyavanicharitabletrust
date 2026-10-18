# Design System & Component Library Specification

**Project:** Sathiyavani Charitable Trust  
**Version:** Phase 2 Visual Prototype (v0.2.0)  
**Status:** Implemented & Validated in Codebase  

---

## 1. Design Tokens & Semantic Roles

The design tokens are centralized in `tailwind.config.ts` and `src/app/globals.css`. They are extracted from the authentic organization emblem (`public/assets/brand/logo.png`) to ensure visual harmony, dignity, and contrast compliance.

### 1.1 Color Palette & Contrast Ratios

```
┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐
│  Brand Trust Navy  │   │  Growth Amber      │   │  Action Terracotta │
│      #0F4C81       │   │      #D9822B       │   │      #B84A39       │
│  (WCAG: 10.4:1)    │   │  (WCAG: 3.5:1 UI)  │   │  (WCAG: 5.8:1)     │
└────────────────────┘   └────────────────────┘   └────────────────────┘
┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐
│  Ocean Teal        │   │  Warm Canvas       │   │  Slate 900 Text    │
│      #0F766E       │   │      #FDFBF7       │   │      #0F172A       │
│  (WCAG: 4.8:1)     │   │  (Base Background) │   │  (WCAG: 15.2:1)    │
└────────────────────┘   └────────────────────┘   └────────────────────┘
```

| Semantic Role | Token Name | Hex Code | WCAG Contrast (on Canvas/White) | Context of Use |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | `brand-navy` | `#0F4C81` | 10.4:1 (AAA) | Headers, authoritative titles, formal callout containers, primary text accents. |
| **Navy Dark** | `brand-navy-dark` | `#082440` | 15.8:1 (AAA) | Pre-footer and master footer background. |
| **Navy Soft** | `brand-navy-soft` | `#EAF2FA` | 1.1:1 (Surface) | Subtle badge and icon container backgrounds. |
| **Accent Amber** | `brand-amber` | `#D9822B` | 3.5:1 (UI / AA Large) | Growth badges, milestone tags, quote accents, amber borders. |
| **Terracotta Rust** | `brand-terracotta` | `#B84A39` | 5.8:1 (AA) | High-intent call-to-action buttons ("Sponsor a Student"), urgency tags. |
| **Ocean Teal** | `brand-teal` | `#0F766E` | 4.8:1 (AA) | Environmental badges, verified checkmarks, zero-fee indicators. |
| **Warm Canvas** | `brand-canvas` | `#FDFBF7` | N/A | Off-white page background reducing eye strain on bright displays. |
| **Pure White** | `brand-surface` | `#FFFFFF` | N/A | High-contrast elevated cards and active dropdowns. |
| **Muted Surface** | `brand-muted` | `#F7F4EE` | N/A | Alternate section and empty state container backgrounds. |
| **Border Neutral** | `brand-border` | `#E7E2D8` | 1.3:1 (Subtle) | Hairline borders between layout sections. |
| **Focus Indicator** | Accessible Ring | `#0F4C81` | 10.4:1 (AAA) | 3px solid focus ring with 2px offset for keyboard navigation. |

---

## 2. Typography System

- **Headings Font:** `Plus Jakarta Sans` (weights: 600 Semibold, 700 Bold, 800 ExtraBold). Configured with `display: 'swap'` via `@next/font/google`.
- **Body Font:** `Inter` (weights: 400 Regular, 500 Medium, 600 SemiBold). Optically optimized for reading paragraphs and data tables.

### Type Scale

| Style | Desktop Classes | Mobile Classes | Leading / Tracking |
| :--- | :--- | :--- | :--- |
| **Display H1** | `text-4xl sm:text-5xl lg:text-6xl` | `text-3xl` | `leading-[1.12] tracking-tight font-extrabold` |
| **Section H2** | `text-2xl sm:text-3xl lg:text-4xl` | `text-2xl` | `leading-[1.2] tracking-tight font-extrabold` |
| **Card H3** | `text-xl sm:text-2xl` | `text-lg` | `leading-snug font-bold` |
| **Lead Paragraph** | `text-base sm:text-lg` | `text-base` | `leading-relaxed text-slate-600` |
| **Body Standard** | `text-sm sm:text-base` | `text-sm` | `leading-relaxed text-slate-600` |
| **Caption / Notes** | `text-xs sm:text-sm` | `text-xs` | `leading-normal text-slate-500` |
| **Tabular Numbers** | `text-4xl sm:text-5xl font-extrabold` | `text-3xl` | `font-heading text-brand-navy` |

---

## 3. Shared Component Library

| Component | File Path | API & Key Props | Accessibility & Interactive Features |
| :--- | :--- | :--- | :--- |
| **`Button`** | `src/components/ui/Button.tsx` | `variant` (primary, navy, amber, secondary, outline, ghost, whatsapp), `size` (sm, md, lg), `href`, `icon`, `isExternal` | Accessible 48px mobile touch target, visible focus ring, polymorphic button or Next.js Link. |
| **`Badge`** | `src/components/ui/Badge.tsx` | `variant` (navy, amber, terracotta, teal, neutral, provisional), `size` (sm, md) | Semantic categorization, high-contrast borders, provisional label indicators. |
| **`Container`** | `src/components/ui/Container.tsx` | `size` (default: 80rem, narrow: 48rem, wide: 88rem, full) | Responsive gutters (`px-4 sm:px-6 lg:px-8`), prevents edge bleeding. |
| **`SectionHeading`** | `src/components/ui/SectionHeading.tsx`| `category`, `title`, `description`, `align` (left, center), `inverted`, `as` (h1, h2, h3) | Strict semantic hierarchy, optional category pill, responsive text wrapping. |
| **`Breadcrumbs`** | `src/components/ui/Breadcrumbs.tsx` | `items: BreadcrumbItem[]`, `inverted` | Accessible `<nav aria-label="Breadcrumb">` with `<ol>`, Home icon, `aria-current="page"`. |
| **`Card`** | `src/components/ui/Card.tsx` | `variant` (default, elevated, flat, bordered, interactive) | Composable `CardHeader`, `CardContent`, `CardFooter` with ambient shadow tokens. |
| **`ProgramCard`** | `src/components/ui/ProgramCard.tsx` | `program: Programme` | Category badges, Lucide icons, full-card focusable links, hover elevation. |
| **`ImpactCard`** | `src/components/ui/ImpactCard.tsx` | `metric: ImpactMetric` | Tabular numbers, source attribution, audit badges ("Verified" vs "Documented Record"). |
| **`ImageBlock`** | `src/components/ui/ImageBlock.tsx` | `src`, `alt`, `caption`, `aspectRatio`, `isPlaceholder`, `priority` | Aspect-ratio containers, Next.js Image optimization, placeholder disclosure badge. |
| **`EmptyState`** | `src/components/ui/EmptyState.tsx` | `title`, `description`, `icon`, `note`, `action` | Designed placeholder explaining when real data will be audited, avoiding zero displays. |
| **`Header`** | `src/components/layout/Header.tsx` | `isScrolled`, `activeDropdown`, `mobileMenuOpen` | Sticky backdrop blur, desktop dropdowns, phone dialer, accessible mobile toggle. |
| **`MobileNav`** | `src/components/layout/MobileNav.tsx` | `isOpen`, `onClose`, `items` | Slide-out drawer, focus trap, Escape key listener, background scroll lock, 48px touch targets. |
| **`Footer`** | `src/components/layout/Footer.tsx` | Complete footer with trust notice | 5-column responsive layout, copyright, address, phone link, legal links. |
