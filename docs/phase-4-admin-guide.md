# Phase 4 Admin Dashboard, Database & Setup Guide

**Project:** Sathiyavani Charitable Trust  
**Target Environment:** Next.js 14 App Router + Supabase PostgreSQL  
**Document Status:** Complete Operational Manual for Phase 4  

---

## 1. Overview & Dual-Mode Architecture

Phase 4 introduces a resilient, dual-mode data and administrative layer:
1. **Live Supabase Mode:** When `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are provided in `.env.local`, the platform talks directly to Supabase cloud (PostgreSQL, Supabase Auth, Supabase Storage).
2. **Local Autonomous Mode:** When cloud keys are not yet configured, the system seamlessly operates on a verified local repository pre-seeded with authentic baseline data from Phase 3. This allows immediate local evaluation, administrative testing, and public route validation without blocking on external cloud credentials.

---

## 2. Database Setup & Migration Instructions

All database migrations are version-controlled in `supabase/migrations/`:
* `supabase/migrations/20261018000001_initial_schema.sql`: Contains tables (`admin_profiles`, `programs`, `page_content`, `stories`, `events`, `impact_metrics`, `inquiries`, `media_assets`, `audit_logs`), indexes, and comprehensive Row Level Security (RLS) policies.

### Applying Migrations via Supabase CLI
```bash
# 1. Install Supabase CLI if not already installed
npm install -g supabase

# 2. Login to your Supabase account
supabase login

# 3. Link your project
supabase link --project-ref your-project-id

# 4. Push migrations to production database
supabase db push
```

### Applying Migrations via Supabase Web Dashboard
1. Navigate to your project on [https://supabase.com/dashboard](https://supabase.com/dashboard).
2. Click on **SQL Editor** in the left menu.
3. Open `supabase/migrations/20261018000001_initial_schema.sql`, copy all contents, paste into the query window, and click **Run**.

---

## 3. Initial Administrator Provisioning

**Strict Security Rule:** Public administrator registration is permanently disabled.

To provision the first Super Administrator in a live Supabase environment:
1. Create the user in **Supabase Auth** $\to$ **Users** $\to$ **Add User** (e.g. `admin@sathiyavanitrust.org`).
2. In the **SQL Editor**, insert the profile record:
```sql
INSERT INTO public.admin_profiles (id, email, full_name, role)
VALUES (
  'PASTE-AUTH-USER-UUID-HERE',
  'admin@sathiyavanitrust.org',
  'Mr. Raghu N. (President)',
  'super_admin'
);
```

### Local Evaluation Accounts
For immediate testing in local autonomous mode, the repository is pre-configured with:
* **Super Admin (Trustee):** `admin@sathiyavanitrust.org`
* **Content & Programs Lead:** `coordinator@sathiyavanitrust.org`
* **Inquiries Desk:** `inquiries@sathiyavanitrust.org`
* **Evaluation Password:** `TrustAdmin#2026`

---

## 4. Role-Based Access Control (RBAC) Matrix

| Module / Action | Super Admin | Content Admin | Enquiry Manager | Public / Anonymous |
| :--- | :---: | :---: | :---: | :---: |
| **View Dashboard Overview** | Yes | Yes | Yes | Denied (Redirect to login) |
| **Manage Programs (Create/Edit)** | Yes | Yes | Denied | Denied |
| **Propose Impact Metric** | Yes | Yes | Denied | Denied |
| **Approve / Publish Impact Metric** | **Yes** | Denied | Denied | Denied |
| **View Published Metrics** | Yes | Yes | Yes | **Yes (Only Published)** |
| **Manage Stories & Child Consent** | Yes | Yes | Denied | Denied |
| **View Published Stories** | Yes | Yes | Yes | **Yes (Consent Required)** |
| **View Confidential Inquiries** | Yes | Denied | **Yes** | **Denied (401/Denied)** |
| **Submit Public Inquiry** | Yes | Yes | Yes | **Yes (INSERT Only)** |
| **Manage Administrators & Roles** | **Yes** | Denied | Denied | Denied |
| **View Immutable Audit Logs** | **Yes** | Denied | Denied | Denied |

---

## 5. Media & Child Safeguarding Policy

1. **Child Protection Consent:** Any story or event involving children requires checking the mandatory parental consent certification before the system permits publication.
2. **Media Uploads:**
   * File type whitelist: `image/webp`, `image/jpeg`, `image/png`.
   * Size limit: Maximum 5MB ($5,120\text{ KB}$).
   * Accessible Alt Text: Mandatory for every image asset.

---

## 6. How to Test the Admin Dashboard Locally

1. Start the server:
   ```bash
   npm run dev
   # or
   npx next start -p 3000
   ```
2. Navigate to `http://localhost:3000/admin`.
3. Notice that the server automatically redirects you to `http://localhost:3000/admin/login?from=%2Fadmin`.
4. Enter the credentials:
   * **Email:** `admin@sathiyavanitrust.org`
   * **Password:** `TrustAdmin#2026`
5. Click **Sign In to Dashboard**.
6. You will arrive at the overview showing live counts:
   * **Programs:** Navigate to `/admin/programs`, click **Create New Program** or edit an existing one.
   * **Impact Metrics:** Navigate to `/admin/impact`, review the 4-stage governance workflow (`draft` $\to$ `submitted` $\to$ `approved` $\to$ `published`).
   * **Stories:** Navigate to `/admin/stories`, notice that unchecking parental consent prevents publication.
   * **Inquiries:** Navigate to `/admin/enquiries` to see confidential submissions. Visit the public `/contact` page, submit a test message, and watch it appear in `/admin/enquiries`!
   * **Sign Out:** Click **Sign Out** in the top header to destroy the session cookie and return to login.

---

## 7. Troubleshooting Common Issues

* **Redirect Loop on `/admin`:** Ensure your browser accepts the `sathiya_admin_session` cookie (SameSite: Lax).
* **Missing Environment Variables:** If connecting to Supabase cloud, verify both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are present in `.env.local` without trailing slashes.
* **Database Connection Timeout:** Verify your database network access allows connections from your IP or Netlify's deployment IPs.
