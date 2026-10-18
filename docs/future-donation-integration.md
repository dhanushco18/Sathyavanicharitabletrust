# Future Donation Integration Specification & Compliance Roadmap
**Organization:** Sathiyavani Charitable Trust (Reg. No. 2023, Chennai, Tamil Nadu)  
**Document Code:** ST-DOC-PAY-2026-V1  
**Status:** Architecture Blueprint & Strict Regulatory Governance (NO LIVE GATEWAY ACTIVE)  
**Governing Principle:** Zero Simulated Checkout • Zero Fabricated Banking Data • Complete Regulatory Diligence  

---

## 1. Executive Summary & Prohibition of Premature Gateways

In accordance with Phase 5 engineering guidelines, **no live payment gateway is active on the website during this phase**. Furthermore, the trust platform strictly prohibits:
- Simulating fake payment checkouts, simulated credit card swipes, or fabricated UPI success modals.
- Publishing unverified UPI IDs, personal savings bank accounts, or unauthorized QR codes.
- Claiming section 80G income tax deductibility without a valid, legally verified Form 10AC/10AD order from the Director of Income Tax (Exemptions).

This document serves as the formal engineering prerequisite and architecture specification when trust trustees authorize online donation capabilities.

---

## 2. Mandatory Legal, Banking & Regulatory Prerequisites

Before a single line of payment integration code or merchant onboarding can proceed, the trust must establish and archive the following verified documentation:

| Prerequisite | Authority / Jurisdiction | Requirement Details | Status |
| :--- | :--- | :--- | :--- |
| **Trust Deed & Registration** | Sub-Registrar Office, Chennai, Tamil Nadu | Registered Public Charitable Trust Deed under Indian Trusts Act, 1882 / State Trust Rules. | Completed (2023) |
| **PAN & TAN Card** | Income Tax Department, India | Permanent Account Number (Entity status: AOP / Trust) in the name of *Sathiyavani Charitable Trust*. | Verified Required |
| **Dedicated Trust Bank Account** | Scheduled Commercial Bank (e.g. SBI, HDFC, ICICI, Canara Bank) | Current Account exclusively titled in the exact legal name of the Trust. Personal accounts of trustees/founders are strictly disallowed. | In Progress |
| **12A / 12AB Registration** | Income Tax Dept (Exemptions) | Formal order granting tax exemption for trust income under Section 12AB. | Pending Filing |
| **80G Registration Approval** | Income Tax Dept (Exemptions) | Valid 80G Certificate with Unique Registration Number (URN). Enables donor tax exemption certificates (Form 10BE). | Pending Filing |
| **MCA CSR-1 Registration** | Ministry of Corporate Affairs, India | Mandatory registration for receiving corporate CSR funds under Section 135 of the Companies Act. | In Progress |
| **FCRA Prior Permission / Registration** | Ministry of Home Affairs (MHA), India | **Strict Requirement:** Foreign currencies or non-Indian cards CANNOT be accepted without MHA FCRA clearance. All initial gateways must restrict payments exclusively to domestic Indian INR. | Restricted to Domestic INR |

---

## 3. Recommended Payment Gateway Providers & Selection Criteria

For an Indian non-profit organization, the following merchant aggregators offer dedicated NGO compliance programs:

### 3.1. Provider Evaluation
1. **Razorpay NGO Suite / Razorpay Route:**
   - *Strengths:* Native support for Indian UPI (Google Pay, PhonePe, Paytm, BHIM), Netbanking (60+ banks), Rupay cards, and automated 80G receipt dispatch via webhooks.
   - *Security:* PCI-DSS Level 1 compliant, webhook HMAC-SHA256 signature verification, idempotent capture.
   - *NGO Discount:* Standard MDR fees often discounted for verified non-profits.

2. **Cashfree Payments:**
   - *Strengths:* High reliability on instant UPI intents, recurring standing instructions (e-Mandate / UPI Autopay) for monthly child educational sponsorships.
   - *Security:* Cryptographic webhook signatures, developer-friendly test environment.

### 3.2. Mandatory Gateway Configuration Controls
- **Domestic Currency Only (`INR`):** Hardcode currency to Indian Rupee (`currency: "INR"`). Explicitly disable international card acceptance until FCRA approval is secured.
- **Mandatory Donor PAN for Contributions > ₹2,000:** In accordance with Income Tax guidelines for non-profit record-keeping and Form 10BE filing.
- **Mandatory KYC Verification:** Trust must undergo full video KYC, corporate address verification, and board resolution submission.

---

## 4. Secure End-to-End Payment Architecture

```
[ Visitor / Donor ]
       |
       | 1. Selects Sponsorship Intent & Enters Details (Name, Phone, Email, PAN)
       v
[ Next.js Server Action / API ]
       |
       | 2. Validates Donor Input & Computes Cryptographic Order Payload
       v
[ Payment Gateway API (e.g. Razorpay / Cashfree) ]
       |
       | 3. Returns Secure order_id (Server-to-Server authenticated)
       v
[ Client Checkout Modal (Hosted / SDK) ]
       |
       | 4. Donor Authorizes Payment via UPI / Netbanking / RuPay
       v
[ Gateway Payment Engine ]
       |
       | 5. Direct Bank Settlement & Asynchronous Webhook Dispatch
       v
[ Webhook Endpoint: /api/webhooks/donations ]
       |
       +---> 6. Cryptographic HMAC Signature Verification (CRITICAL)
       +---> 7. Check Webhook Idempotency (Prevent double credit)
       +---> 8. Record in Immutable Ledger (`donations` table)
       +---> 9. Trigger Automated Form 10BE Receipt & Email Acknowledgement
```

---

## 5. Webhook Security & Idempotency Specifications

Payment status must **never** be trusted solely from client-side redirect URLs or browser callbacks.

### 5.1. HMAC-SHA256 Signature Verification
```typescript
// Pseudocode for Secure Webhook Authentication
import crypto from "crypto";

export async function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  webhookSecret: string
): Promise<boolean> {
  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  // Constant-time comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(signatureHeader),
    Buffer.from(expectedSignature)
  );
}
```

### 5.2. Webhook Idempotency & Transaction Ledger
- Every gateway webhook carries a unique transaction identifier (e.g. `pay_29P9q58...`).
- The database schema must maintain a unique constraint on `gateway_payment_id`.
- If an event is received multiple times due to gateway retries, the webhook handler must return HTTP 200 without executing duplicate balance accounting or sending duplicate receipts.

---

## 6. Financial Reconciliation & Donor Reporting

When activated, the admin dashboard must provide:
1. **Real-time Settlement Ledger:** Matching gateway transaction IDs with bank statement credits.
2. **Failed & Disputed Transaction Log:** Tracking chargebacks, network timeouts, and bank reversals.
3. **Automated Annual Form 10BE Generation:** Consolidating donor PAN, donation amount, date, and mode for direct filing with the Income Tax e-filing portal (annually before May 31).
4. **Refund Policy:** Clearly stated policy on website for mistaken duplicate transactions, processed within 7 business days through the original payment instrument.

---

## 7. Immediate Phase 5 Interim Status

Until all legal and operational checkpoints in Section 2 are fulfilled:
1. **Public Website:** Provides transparency on current trust initiatives through the Sponsorship page (`/sponsor`) and Corporate Partnerships page (`/partnerships`).
2. **Inquiry-Driven Support:** Donors and sponsors register their pledge through secure inquiry forms. Trust coordinators follow up individually with official trust documentation and verified institutional account details.
3. **No Financial Risk:** Absolute elimination of chargeback risks, regulatory penalties, or consumer confusion.
