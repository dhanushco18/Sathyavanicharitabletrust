# Application Maintenance & Engineering Runbook
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-MAINT-2026-V1  
**Target Architecture:** Next.js 14 App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL, Netlify  

---

## 1. System Requirements & Runtime Environment

- **Node.js:** Version `20.x` LTS (enforced in `netlify.toml`).
- **Package Manager:** `npm` (v10+).
- **TypeScript:** Strict type checking (`tsc --noEmit`).
- **Database:** Supabase managed PostgreSQL (PostGIS / RLS enabled) or local dual-mode seeded repository.

---

## 2. Standard Operating Commands

| Action | Command | Purpose |
| :--- | :--- | :--- |
| **Local Development** | `npm run dev` | Starts local Next.js dev server on `http://localhost:3000` |
| **Type Check** | `npm run typecheck` | Validates TypeScript types across the entire repository |
| **Linting** | `npm run lint` | Runs ESLint with Next.js rules |
| **Automated Tests** | `npm test` | Executes native Node.js test suites (Phase 4, 5, 6, 7) |
| **Production Build** | `npm run build` | Compiles optimized static assets and server bundles |
| **Production Start** | `npm run start` | Serves compiled production build locally |

---

## 3. Dependency Management & Security Upgrades

1. **Vulnerability Auditing:**
   - Run `npm audit` monthly to identify high or critical security alerts.
2. **Selective Upgrades:**
   - Minor and patch upgrades (`npm update`) are permitted after running the test suite.
   - Major framework upgrades (e.g. Next.js 15) require a dedicated spike branch and regression testing.
3. **Prohibited Packages:**
   - Do NOT install heavy client-side analytics libraries, bloated CSS frameworks, or unsecured third-party widgets.
