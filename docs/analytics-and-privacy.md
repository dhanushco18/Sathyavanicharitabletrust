# Privacy-Conscious First-Party Analytics Specification
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-ANALYTICS-2026-V1  
**Classification:** Operational Privacy Architecture  
**Governing Principle:** Zero Invasive Fingerprinting • Zero Third-Party Advertising Pixels • Zero PII Capture  

---

## 1. Ethical Foundation & Privacy by Architecture

In full compliance with Indian Digital Personal Data Protection (DPDP) Act, 2023, and global privacy standards, the Sathiyavani Charitable Trust platform operates a **100% first-party, privacy-preserving analytics system**.

The platform explicitly rejects:
- Third-party tracking scripts (e.g. Google Analytics, Meta Pixel, Hotjar).
- Cross-site cookies, third-party advertising cookies, and tracking IDs.
- Canvas fingerprinting, audio fingerprinting, or device hardware hashing.
- Capturing citizen names, phone numbers, email addresses, inquiry messages, or authentication tokens into analytical logs.

---

## 2. Event Taxonomy & Data Collection Boundaries

| Event Type | Trigger Condition | Data Collected | Forbidden Data |
| :--- | :--- | :--- | :--- |
| `page_view` | Initial page load or client-side navigation | Sanitized URL path (e.g. `/programs/education`), generic device category (`desktop`, `mobile`, `tablet`), UTC timestamp | Query string tokens, user ID, client IP, referring private URLs |
| `cta_click` | Interaction with primary engagement triggers | Target action (`volunteer`, `sponsor`, `partner`, `contact`), page path | Visitor identity, personal details |
| `form_submission` | Successful server-action submission | Aggregate category count (`general`, `volunteer`, `sponsorship`, `partnership`), status flag | Citizen name, mobile number, email, inquiry content, tracking reference |

---

## 3. Storage, Aggregation & Retention SLA

1. **Storage Topology:**
   - Raw analytical events are stored exclusively in volatile, bounded memory buffers (maximum 10,000 entries) or first-party database tables with an automatic **90-day rolling time-to-live (TTL)**.
2. **Access Control:**
   - Analytical summaries are strictly restricted to authenticated administrators possessing the `view_analytics` RBAC permission (`super_admin`, `content_admin`, `enquiry_manager`).
   - Anonymous visitors have zero read access.
3. **Data Protection Officer Contact:**
   - For inquiries regarding platform privacy, contact the trust administrative secretary at `admin@sathiyavanitrust.org`.
