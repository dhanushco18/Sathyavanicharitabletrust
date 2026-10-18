# Dual-Language Localization Guide: English & Tamil (தமிழ்)
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-I18N-2026-V1  
**Classification:** Localization Architecture & Linguistic Standard  

---

## 1. Scope & Linguistic Principles

To serve community members, parents, and local volunteers in Tamil Nadu while maintaining international donor access, the platform implements **dual-language readiness** for English (`en`) and Tamil (`ta`).

1. **Human Quality Standard:** No sensitive legal notices, child safeguarding terms, or founder biographies may be auto-translated using unverified machine translation APIs.
2. **Tamil Typography:** Rendered using standard Unicode and cross-platform native font fallbacks (`Mukta Malar`, `Latha`, `Vijaya`, `system-ui`).
3. **Accessibility:**
   - Active language changes update `document.documentElement.lang`.
   - The `<LanguageSwitcher />` component uses accessible ARIA pressed attributes (`aria-pressed="true"`) and clear focus indicators.

---

## 2. Dictionary Structure (`src/lib/i18n/translations.ts`)

All user-interface strings are maintained in a centralized, type-safe dictionary:

```typescript
export interface Translations {
  brandName: string;
  brandTagline: string;
  registeredNotice: string;
  navAbout: string;
  navPrograms: string;
  navImpact: string;
  navStories: string;
  navGetInvolved: string;
  navContact: string;
  actionSponsor: string;
  actionVolunteer: string;
  // ...
}
```

---

## 3. Persistent Preference & Fallback Rules

- **Client Preference:** Stored in browser `localStorage.getItem("sathiya_pref_lang")`.
- **Default Fallback:** When no preference is recorded or a key is missing, the system gracefully defaults to English (`en`).
- **Syncing Event:** Dispatches `sathiya_language_changed` on `window` allowing reactive UI elements to update seamlessly without a full page reload.
