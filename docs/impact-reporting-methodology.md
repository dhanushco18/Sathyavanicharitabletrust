# Verified Charitable Impact Reporting Methodology
**Organization:** Sathiyavani Charitable Trust (Reg. No. 2023, Chennai, Tamil Nadu)  
**Document Code:** ST-DOC-P7-IMPACT-2026-V1  
**Classification:** Impact Governance & Anti-Fabrication Standard  

---

## 1. Core Principles of Impact Verification

Sathiyavani Charitable Trust operates on a **zero-fabrication** standard. We uphold that a grassroots trust's credibility relies on complete truthfulness.

1. **No Simulated Counters:** The website never runs animated CSS counters or odometer scripts that tick upward artificially.
2. **Multi-Stage Approval Pipeline:** Every number published on the website must pass a strict 4-stage lifecycle:
   - `draft`: Created by program coordinator.
   - `submitted`: Submitted for formal review with supporting register links.
   - `approved`: Validated by senior coordinator or trustee.
   - `published`: Formally authorized by the Super Admin (Managing Trustee / President Mr. Raghu N.).
3. **Physical Source Registers:** Every reported count is mapped to an immutable physical paper or digital sign-off register maintained at the Library Learning Center facility in Chennai.

---

## 2. Double-Counting Prevention Across Reporting Periods

| Initiative Pillar | Measurement Unit | Primary Reporting Period | Double-Counting Safeguard |
| :--- | :--- | :--- | :--- |
| **Free Evening Tuition** | Active Enrolled Students | Academic Year (e.g. 2024–2025) | A student enrolled across multiple months is counted **once** per academic year, not once per month. |
| **Diwali Joy Clothing & Kit Drive** | Direct Beneficiaries | Annual Point-in-Time Event (October/November) | Counted strictly per physical kit distributed at the annual drive. Never added to regular tuition enrollment. |
| **School Fee Sponsorship** | Fee Disbursements | Academic Year | Counted by verified school receipt transactions, audited against bank records. |
| **Tree Sapling Plantations** | Saplings Planted & Surviving | Calendar Year | Recorded in partnership with Exnora register. Survival rate audited at 6 months. |

---

## 3. Data Export & Regulatory Audit Readiness

- **Export Formats:** Authorized trustees and compliance auditors can export all approved metrics in structured JSON format directly from `/admin/impact`.
- **Audit Trails:** Every status transition automatically records an entry in `audit_logs` capturing the administrator ID, prior state, new state, reviewer notes, and timestamp.
