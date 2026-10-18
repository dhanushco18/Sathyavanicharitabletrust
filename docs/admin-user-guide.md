# Sathiyavani Charitable Trust — Administrator User Guide & Operations Manual
**Audience:** Trust Coordinators, Content Managers, Enquiry Officers, and Managing Trustees  
**Document Code:** ST-DOC-P8-ADMIN-GUIDE-2026-V1  
**Classification:** Operational Governance Manual  

---

## 1. Getting Started & Secure Sign-In

1. **Accessing the Portal:**
   - Open your browser and navigate to: `https://sathiyavanitrust.netlify.app/admin/login`
2. **Authenticating:**
   - Enter your authorized administrative email (e.g. `admin@sathiyavanitrust.org` or your assigned account).
   - Enter your secure administrative password.
   - Click **Access Admin Dashboard**.
3. **Session Security & Sign-Out:**
   - When finished, click **Sign Out** in the top navigation bar or sidebar.
   - Never leave your browser unattended on public or shared computers.
   - Sessions expire automatically for security.

---

## 2. Managing Inbound Community Inquiries (`/admin/enquiries`)

The Trust receives inquiries through four public channels:
1. General Community Contact (`/contact`)
2. Volunteer Applications (`/volunteer`)
3. Student Sponsorship Pledges (`/sponsor`)
4. Corporate CSR Proposals (`/partnerships`)

### How to Review & Update Inquiries:
1. In the sidebar, click **Inquiries** (`/admin/enquiries`).
2. Filter records by status (`New`, `In Progress`, `Responded`, `Resolved`, `Spam`) or category.
3. Click any inquiry card to open the **Detail Modal**.
4. Review the citizen's contact details, reference tracking token (e.g. `ST-VOL-XXXXXX`), and workflow specifications (such as volunteer availability or sponsorship tiers).
5. Update the **Workflow Status**:
   - `In Progress`: Contact has been initiated via phone or WhatsApp.
   - `Responded`: Official information or application forms provided.
   - `Resolved`: Volunteer enrolled, sponsorship finalized, or question answered.
6. Record **Internal Coordinator Notes** (e.g. "Spoke with volunteer; scheduled orientation Saturday 10 AM").
7. Click **Save Status Update**.

> [!CAUTION]
> **Citizen Privacy Protection:** These records contain personal phone numbers and family situations. Never share or forward citizen inquiries outside authorized trust coordinators.

---

## 3. Impact Metrics Multi-Stage Governance (`/admin/impact`)

Sathiyavani Charitable Trust operates on a **zero-fabrication standard**. All public numbers must follow the 4-stage lifecycle:

```
[Draft]  -->  [Submitted]  -->  [Approved]  -->  [Published]
                       ^               ^
                       |               |
              Requires Evidence    Requires Super Admin
```

### Proposing a New Metric:
1. Navigate to **Impact Metrics** (`/admin/impact`).
2. Click **Propose New Metric**.
3. Fill in:
   - Metric Title (e.g. "Free Evening Tuition Students")
   - Numeric Value & Suffix (e.g. `120` `+`)
   - Measurement Unit (e.g. `Students`)
   - Reporting Period (e.g. `2024–2025`)
   - Methodology (e.g. "Monthly classroom attendance roll")
   - Verification Source (e.g. "Library Center Attendance Register")
4. Click **Create Impact Metric**. The record enters `draft` status.

### Review & Super Admin Publication:
- Transition the metric from `draft` &rarr; `submitted`.
- Only the **Super Admin** (Managing Trustee / President) can click **Approve** and **Publish to Website**.
- Once published, the metric appears automatically on the public `/impact` page.

### Exporting Audit Reports:
- Click **Export Report** at the top of `/admin/impact` to download a verified JSON snapshot for corporate CSR audits or trustee review.

---

## 4. Managing Stories, Events & Media Safeguarding

1. **Child Protection & Safeguarding (`/admin/stories`):**
   - Stories regarding student beneficiaries require parental consent on file (`consent_verified = true`).
   - The platform strictly prevents publishing any student story without verified guardian consent.
2. **Media Library (`/admin/media`):**
   - Upload photographs of community initiatives.
   - Ensure meaningful alternative text (alt text) is entered for every uploaded image to maintain accessibility.
3. **Programs (`/admin/programs`):**
   - Update descriptions, schedules, or locations for the trust's 5 core pillars.
   - Content changes can be saved as `draft` or `published` immediately if you hold the Content Admin role.

---

## 5. Website Usage & Analytics (`/admin/analytics`)

- Navigate to **Analytics & Usage** (`/admin/analytics`).
- Review 30-day aggregate page views, estimated visitor sessions, top visited pages, and action conversion channels.
- Remember: our platform uses **zero-cookie, first-party telemetry** that respects citizen privacy.

---

## 6. Reporting Technical Problems

If you notice an unexpected error, broken form, or security concern:
1. Take a screenshot showing the issue and the URL bar.
2. Note the incident reference token if displayed on an error screen.
3. Email the technical team at `admin@sathiyavanitrust.org` or contact Mr. Raghu N. (+91 98414 54501).
