# Phase 6: Production Deployment Checklist & Operational Runbook
**Organization:** Sathiyavani Charitable Trust  
**Target Environment:** Netlify Cloud Hosting (`https://sathiyavanitrust.netlify.app/`)  
**Document Code:** ST-DOC-P6-DEPLOY-2026-V1  
**Lead Roles:** DevSecOps Engineer, Release Manager & System Architect  

---

## 1. Pre-Deployment Configuration Checklist

### 1.1. Environment Variables Register
Verify that the following variables are configured in the Netlify site settings dashboard (**Site configuration > Environment variables**):

| Variable Name | Environment | Description / Example Placeholder | Secret? |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | All | Canonical URL: `https://sathiyavanitrust.netlify.app` | No |
| `NEXT_PUBLIC_SUPABASE_URL` | Production | Live Supabase project URL (e.g. `https://xyz.supabase.co`) | No |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production | Public anon key for client-side queries | No |
| `SUPABASE_SERVICE_ROLE_KEY` | Production | Privileged backend secret for administrative migrations & workers | **YES** |
| `ADMIN_DEV_PASSWORD` | Local/Staging | Fallback password for offline development evaluation | **YES** |
| `ADMIN_SESSION_SECRET` | Production | Random 32+ character cryptographic secret for session encoding | **YES** |
| `RESEND_API_KEY` | Production | Transactional email provider API key (`re_...`) | **YES** |
| `ADMIN_NOTIFICATION_EMAIL` | Production | Recipient address for trust admin alerts (`admin@sathiyavanitrust.org`) | No |
| `SENDER_EMAIL` | Production | Verified sender address (`notifications@sathiyavanitrust.org`) | No |
| `RATE_LIMIT_MAX_SUBMISSIONS` | Production | Max form submissions per IP per window (Default: `5`) | No |
| `RATE_LIMIT_WINDOW_MINUTES` | Production | Sliding rate limit duration in minutes (Default: `10`) | No |

---

## 2. Database Migration & Provisioning Runbook

1. **Supabase PostgreSQL Schema Setup:**
   - Execute SQL migration located at `supabase/migrations/20261018000001_initial_schema.sql` via the Supabase SQL Editor.
   - Confirm creation of 9 tables: `admin_profiles`, `programs`, `page_content`, `stories`, `events`, `impact_metrics`, `inquiries`, `media_assets`, and `audit_logs`.
2. **Verify Row Level Security (RLS):**
   - Confirm RLS is enabled on all tables:
     ```sql
     SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';
     ```
   - Confirm anonymous read access on `inquiries` evaluates to `FALSE`.
3. **Storage Bucket Provisioning:**
   - Create public storage bucket: `trust-media`.
   - Apply read-only policy for anonymous visitors; upload/delete policy restricted to authenticated admin roles.
4. **Initial Administrator Provisioning:**
   - Insert primary trustee credentials into `admin_profiles`:
     ```sql
     INSERT INTO admin_profiles (id, email, full_name, role)
     VALUES (auth.uid(), 'admin@sathiyavanitrust.org', 'Mr. Raghu N. (President)', 'super_admin');
     ```

---

## 3. Netlify Hosting & Build Settings

- **Build Command:** `npm run build`
- **Publish Directory:** `.next`
- **Node.js Runtime:** `20.x` (enforced in `netlify.toml`)
- **Plugin:** `@netlify/plugin-nextjs`
- **HTTPS & SSL Certificate:** Automatic Let's Encrypt SSL provisioned by Netlify.
- **Custom Domain & DNS (Pending Trust Board Approval):**
  - Apex domain `sathiyavanitrust.org` points via ALIAS / ANAME to Netlify apex load balancer.
  - Subdomain `www.sathiyavanitrust.org` CNAME points to `sathiyavanitrust.netlify.app`.

---

## 4. Disaster Recovery, Backup & Rollback Protocol

### 4.1. Database Backup Cadence
- **Automated Daily Backups:** Handled via Supabase managed PostgreSQL daily snapshots with 7-day retention.
- **Manual Point-in-Time Dump (`pg_dump`):**
  - Run prior to executing any schema migration:
    ```bash
    pg_dump -h db.xyz.supabase.co -U postgres -d postgres --clean -F p -f backup_pre_release.sql
    ```
- **Disaster Recovery Target:** Recovery Time Objective (RTO) < 1 hour; Recovery Point Objective (RPO) < 24 hours.

### 4.2. Instant Release Rollback
- If a critical defect or runtime regression occurs post-deployment:
  1. Open Netlify Dashboard > **Deploys**.
  2. Select the previous stable production release.
  3. Click **Publish deploy** for instantaneous zero-downtime rollback.
  4. Restore the pre-release database snapshot if any data mutation occurred.

---

## 5. Post-Deployment Verification & Smoke Tests

Immediately following deployment, run the automated health check and smoke test:
1. **Health Check:** `curl -s https://sathiyavanitrust.netlify.app/api/health | jq`
   - Expect HTTP 200 with `"status": "healthy"`.
2. **Robots Check:** `curl -s https://sathiyavanitrust.netlify.app/robots.txt`
   - Expect `Disallow: /admin/` and `Disallow: /api/`.
3. **Sitemap Check:** `curl -s https://sathiyavanitrust.netlify.app/sitemap.xml`
   - Expect valid XML schema with 21 public URLs.
4. **Security Headers Verification:**
   - Verify presence of `Content-Security-Policy`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, and absence of `X-Powered-By`.
5. **Form Submission Smoke Test:**
   - Submit a test inquiry on `/contact` and confirm receipt of tracking reference `ST-GEN-XXXXXX`.
