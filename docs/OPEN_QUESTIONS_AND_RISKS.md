# Open Questions, Unresolved Inconsistencies & Risk Register

**Project:** Sathiyavani Charitable Trust Website  
**Date:** October 2026  
**Document Status:** Action Items Requiring Trust Leadership Input  

---

## 1. Critical Inconsistencies Identified During Discovery

The following table catalogs factual discrepancies discovered during our comparative inspection of the live reference website ([https://sathiyavanitrust.netlify.app/](https://sathiyavanitrust.netlify.app/)) and brand assets:

| Discrepancy Item | Source Location A | Source Location B | Nature of Conflict | Recommended Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Spelling** | Vector Logo Emblem (`logo.png`): reads **"Sathyavani"** (without 'i') | Domain (`sathiyavanitrust`) & Page Headings: reads **"Sathiyavani"** (with 'i') | Conflicting spelling creates confusion on official search engines and legal filings. | Request copy of registered Trust Deed to establish exact legal spelling for domain and brand typography. |
| **Founding & Service Inception Date** | `/about`: "Founded officially in 2023, actively serving society since 2020" | `/community-outreach`: Diwali table lists "2019: 20 beneficiaries" | Claims service began in 2020, but claims beneficiaries in 2019. | Clarify if 2019 was an informal personal initiative by Mr. Raghu prior to formal trust formation. Frame as *"Informal community outreach initiated in 2019; Trust formally registered in 2023"*. |
| **Beneficiary Metrics Inconsistency** | Homepage impact counter: `data-target="1500"` (or `0` on static load) | `/community-outreach`: lists 1,500 beneficiaries under the year **2025** | The year 2025 figure appears to be a forward projection or target rather than a completed distribution. | Strictly distinguish completed historical distributions (e.g. 2019–2024: 1,000) from upcoming targets (e.g. "2025 Target: 1,500"). |
| **Partnership with Exnora** | `/environment`: "In collaboration with Exnora Organization..." | No contact, MoU reference, or logo of Exnora displayed | Unsubstantiated partnership claims risk legal or reputational challenge if not authorized. | Obtain written confirmation, contact liaison, or formal collaboration statement from Exnora. |
| **Police Library Premises** | `/founder`: "Local police authorities recognized his service and provided space under a library" | No specific police station, library name, or formal location address | Lacks sufficient specificity for visitors or donors seeking to visit the center. | Specify the exact landmark (e.g., *"Tuition Center operating at [Library Name], under community initiative supported by [Locality] Police"*). |

---

## 2. Institutional & Legal Information Checklist

The new website architecture requires the following authoritative records before public launch:

- [ ] **Official Registered Trust Deed Number:** (e.g., Registered with Sub-Registrar Office, Chennai).
- [ ] **NGO Darpan Unique ID:** (Required for government and CSR grants in India).
- [ ] **Permanent Account Number (PAN):** Registered in the name of the Trust.
- [ ] **12A Registration Number & Date:** (Income Tax exemption for the trust itself).
- [ ] **80G Registration Number & Expiry/Perpetual Order:** (Enables individual donors to claim 50% tax deductions).
- [ ] **CSR-1 Registration Number:** (Ministry of Corporate Affairs registration mandatory for corporate CSR funds).
- [ ] **Registered Office Address & PIN Code:** Physical location for legal notices.
- [ ] **Tuition Center Operating Address & Visiting Hours:** Exact premises where students attend classes.
- [ ] **Names and Designations of Trustees:** Board of Trustees (President, Managing Trustee, Secretary, Treasurer).
- [ ] **Official Trust Bank Account Details:** (Account Name, Account Number, Bank, Branch, IFSC Code) for direct RTGS/NEFT/IMPS pledges.

---

## 3. High-Priority Risk Register

| Risk ID | Risk Description | Severity | Probability | Impact on Project | Recommended Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RISK-01** | **Reputational Damage from Unverified Metrics** | **High** | **High** | CSR partners and donors may dismiss the organization as untrustworthy if published statistics cannot be substantiated. | Enforce metric governance workflow: never publish numbers without a documented verification source or register reference. |
| **RISK-02** | **Child Safeguarding & Privacy Violations** | **Critical** | **Medium** | Publishing minor children's identifiable photos or distress narratives violates DPDP Act 2023 and child protection standards. | Enforce strict consent forms; prohibit full names; display children only in empowering, dignified learning activities. |
| **RISK-03** | **Premature Payment Processing Liability** | **High** | **Low** | Setting up online payment gateways without complete 80G documentation or merchant KYC leads to frozen funds or compliance penalties. | Restrict Phase 1–4 to offline pledges and direct bank transfers; defer automated online gateways to Phase 5. |
| **RISK-04** | **Lack of Authentic Photography** | **Medium** | **High** | Continued reliance on placeholders or stock photos reduces authenticity and user trust. | Organize a dedicated weekend photo shoot at the tuition center with proper parental consent to capture genuine high-resolution imagery. |
| **RISK-05** | **Single Point of Operational Failure** | **Medium** | **Medium** | All communications currently route to a single mobile phone (`9841454501`). If unanswered, inquiries are lost. | Implement structured web form routing to multiple trust coordinators via email and shared dashboard. |

---

## 4. Key Decisions Requiring Immediate Stakeholder Approval

1. **Brand Name Canonical Spelling:**  
   Should the primary website and logo use **"Sathiyavani Charitable Trust"** or **"Sathyavani Charitable Trust"**?
2. **Phase 2 Implementation Go-Ahead:**  
   Approval to scaffold the Next.js TypeScript project, establish Tailwind design tokens, and build representative page prototypes.
3. **Tuition Center Photography Authorization:**  
   Permission to coordinate the collection of authentic, consented photographs of the tuition center, students, and activities.
4. **Transparency Section Inclusions:**  
   Which governance documents (Trust Deed, 80G, Darpan certificate) does the board wish to make publicly downloadable?
