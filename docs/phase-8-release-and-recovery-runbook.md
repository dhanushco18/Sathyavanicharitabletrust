# Production Release & Disaster Recovery Runbook
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P8-RELEASE-2026-V1  
**Target Platform:** Netlify Cloud + Supabase PostgreSQL  
**Governing Rule:** Never Deploy Without Explicit Authorization • Zero-Downtime Rollbacks Only  

---

## 1. Pre-Release Verification Protocol

Execute the following verification sequence prior to triggering any production release:

1. **Confirm Release Candidate Git Baseline:**
   - Verify branch: `phase-8-acceptance-and-handover`.
   - Ensure working tree is clean (`git status` returns zero unstaged modifications).
   - Record exact commit hash.
2. **Execute Full Local / Staging Quality Pipeline:**
   ```bash
   npm test               # Must report 43/43 tests passing
   npm run typecheck      # Must complete with 0 errors
   npm run lint           # Must complete with 0 errors/warnings
   npm run build          # Must compile all 37 routes successfully
   ```
3. **Database Pre-Migration Safeguards:**
   - Review any new SQL migration scripts. Confirm only additive schema changes are present (e.g. `CREATE TABLE IF NOT EXISTS`, `ADD COLUMN IF NOT EXISTS`).
   - Run manual PostgreSQL dump:
     ```bash
     pg_dump -h db.your-project.supabase.co -U postgres -d postgres --clean -F p -f pre_release_backup.sql
     ```

---

## 2. Production Deployment Execution Steps

1. **Verify Netlify Environment Secrets:**
   - In Netlify Dashboard: **Site configuration > Environment variables**, confirm:
     - `NEXT_PUBLIC_SITE_URL` = `https://sathiyavanitrust.netlify.app`
     - `ADMIN_SESSION_SECRET` = (32+ character cryptographic string)
     - `ADMIN_DEV_PASSWORD` = (Strong administrative secret)
2. **Merge & Tag Release Candidate:**
   ```bash
   git tag -a v1.0.0-rc1 -m "Production Release Candidate v1.0.0"
   git push origin main --tags
   ```
3. **Trigger Production Build:**
   - Netlify automatically builds via `@netlify/plugin-nextjs`.
   - Monitor build logs in Netlify Dashboard for exit code 0.

---

## 3. Post-Deployment Smoke Test Protocol

Within 10 minutes of live deployment, execute the following smoke tests:

1. **Live Health Check:**
   ```bash
   curl -s -i https://sathiyavanitrust.netlify.app/api/health
   ```
   *Expected Output:* HTTP 200, `"status": "healthy"`, `"database": { "status": "connected" }`.
2. **Security Headers Inspection:**
   ```bash
   curl -s -I https://sathiyavanitrust.netlify.app/
   ```
   *Expected Output:* Confirm presence of `Content-Security-Policy`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, and absence of `X-Powered-By`.
3. **Inbound Public Form Verification:**
   - Submit a test inquiry on `https://sathiyavanitrust.netlify.app/contact`.
   - Verify generation of reference token: `ST-GEN-XXXXXX`.
4. **Administrative Login Verification:**
   - Navigate to `https://sathiyavanitrust.netlify.app/admin/login`.
   - Authenticate with valid administrator credentials.
   - Verify that the newly submitted test inquiry is visible in `/admin/enquiries`.

---

## 4. Emergency Rollback & Recovery Runbook

If a critical defect, rendering failure, or runtime crash occurs post-deployment:

### Step 1: Instant Netlify Zero-Downtime Rollback
1. Open the **Netlify Dashboard > Deploys**.
2. Locate the previous verified stable production deploy.
3. Click **Publish deploy**. Netlify routes 100% of global traffic back to the prior build in under 15 seconds.

### Step 2: Database Restoration (If Schema Mutation Occurred)
- If the failed release included breaking database mutations, restore the pre-release backup:
  ```bash
  psql -h db.your-project.supabase.co -U postgres -d postgres -f pre_release_backup.sql
  ```

### Step 3: Incident Post-Mortem & Trustee Notification
- File an incident report following [`docs/incident-response-guide.md`](file:///c:/Users/User/Documents/CMZB/sathiyavanitrust/docs/incident-response-guide.md).
- Notify Mr. Raghu N. (President) regarding status and remediation timeline.
