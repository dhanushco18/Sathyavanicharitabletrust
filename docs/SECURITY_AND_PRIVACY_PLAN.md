# Security, Privacy & Child Safeguarding Plan

**Project:** Sathiyavani Charitable Trust  
**Date:** October 2026  
**Document Status:** Compliance, Governance & Safeguarding Blueprint  

---

## 1. Threat Model & Risk Assessment

| Threat Vector | Potential Impact | Severity | Mitigation & Technical Countermeasure |
| :--- | :--- | :--- | :--- |
| **Exposure of Child/Beneficiary PII** | Severe privacy violation; statutory breach of India's Digital Personal Data Protection Act (DPDP Act 2023) and POCSO guidelines. | **Critical** | Zero child identity records stored in public database; full names, home locations, and sensitive vulnerabilities are never published. |
| **Spam / Bot Form Flooding** | Database exhaustion; spam filling admin email inbox; denial of service. | **High** | Dual-layer protection: Invisible honeypot field (`website_url_check`) + IP-based rate limiting on Server Actions (max 5 submissions per hour per IP). |
| **Credential Stuffing against `/admin`** | Unauthorized access to donor/volunteer phone numbers and inquiry data. | **High** | Supabase Auth rate limiting; mandatory multi-factor authentication (MFA) or magic link OTPs; automatic lockout after 5 consecutive failed attempts. |
| **Public API Data Scraping** | Competitors or telemarketers harvesting volunteer or sponsor contact details. | **High** | Inquiries table is write-only for the service role; anonymous users have zero `SELECT` rights via Row Level Security (RLS). |
| **Cross-Site Scripting (XSS)** | Injection of malicious scripts via contact form or story rich-text editor. | **Medium** | Server-side sanitization using Zod; React's native string escaping; strict Content Security Policy (CSP) headers. |
| **Premature Payment Collection** | Legal liabilities under Income Tax Act & FCRA regulations; financial disputes. | **Critical** | Complete prohibition of real online payment gateways in Phases 1-4 until 80G, merchant KYC, and trust bank accounts are formally approved. |

---

## 2. Child Safeguarding & Ethical Media Guidelines

As an organization working directly with underprivileged children, single-parent families, and tribal communities, Sathiyavani Charitable Trust must uphold the highest standards of dignity and legal compliance:

### 2.1 Photographic & Storytelling Consent Policy
1. **Explicit Parental Consent:** No photograph of any minor may be published without a physical or digital signed consent form from their legal guardian on file.
2. **Dignity & Non-Exploitation Standard:**
   - Photos must showcase children engaged in active learning, sports, arts, or joyful celebrations.
   - Pity-inducing, distress-focused, or intrusive photographs (e.g., crying children, unclad children, unkempt environments) are strictly forbidden.
3. **Identity Protection:**
   - Never pair a child's full name with their photograph. Use first names only or generic pseudonyms (e.g., "Karthik, Grade 5").
   - Never publish a child's home address, specific neighborhood landmark, or family financial debt numbers.
4. **Right to Erasure:** If a parent or guardian requests removal of a photograph, the trust must permanently delete the asset from Supabase Storage and invalidate the CDN cache within 48 hours.

---

## 3. Privacy & Data Minimisation (DPDP Act India 2023 Compliance)

In compliance with the **Digital Personal Data Protection Act (DPDP Act 2023)**:
- **Data Minimisation:** Forms collect only the minimum information required to respond (Name, Mobile Number, City, Message). We deliberately do not request Aadhaar numbers, PAN cards, or caste/community identifiers from public visitors.
- **Purpose Limitation:** Contact details submitted via volunteer or sponsor forms must never be shared, sold, or used for third-party commercial advertising.
- **Clear Privacy Notice:** Every form includes a visible, unambiguous consent checkbox with a direct link to `/privacy-policy`.
- **Data Retention:** Inquiry records marked as "Archived" or "Closed" will be systematically purged or anonymized after 24 months.

---

## 4. Technical Security Controls Checklist

### 4.1 Secrets & Environment Isolation
- All sensitive credentials (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, admin tokens) reside strictly in `.env.local` or Netlify Environment Variables.
- No secrets are ever committed to Git (`.gitignore` enforces exclusions).
- Public components only access environment variables prefixed with `NEXT_PUBLIC_`.

### 4.2 HTTP Security Headers
Netlify and Next.js configuration will enforce strict defense-in-depth headers:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.supabase.co; connect-src 'self' https://*.supabase.co; frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### 4.3 Media Upload Hardening
- Allowed MIME types: `image/jpeg`, `image/png`, `image/webp`, `application/pdf`.
- File size capped at 5MB per upload.
- Stripping of EXIF location metadata upon client-side processing before storage to prevent geolocation leakage of tuition centers or children's homes.

---

## 5. Launch-Blocking Security & Legal Risks

The following items are defined as **Launch Blockers**; the website will not go live if any of these conditions are unmet:
1. 🛑 **Unconfirmed Trust Registration Number:** Publishing claims of official trust status without citing the registered Trust Deed number or Darpan ID.
2. 🛑 **Unsubstantiated Tax Exemption Claims:** Claiming "All donations are 80G tax-exempt" if the formal 80G order from the Income Tax Department is pending.
3. 🛑 **Active Gateway Without KYC:** Activating Razorpay/Stripe before the trust's commercial current account is verified.
4. 🛑 **Unchecked Beneficiary Claims:** Displaying the 1,500 beneficiary figure on the homepage without clear audit annotations.
