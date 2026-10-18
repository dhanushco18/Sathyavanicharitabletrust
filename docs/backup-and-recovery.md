# Database Backup, Disaster Recovery & Data Restoration Policy
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-BACKUP-2026-V1  
**Target RTO:** < 1 Hour • **Target RPO:** < 24 Hours  

---

## 1. Backup Strategy Overview

The platform uses a layered backup model combining automated cloud-managed snapshots with manual schema dumps prior to administrative changes.

1. **Automated Daily Snapshots (Supabase Cloud):**
   - Executed daily at 00:00 UTC.
   - Retained for 7 continuous days with Point-in-Time Recovery (PITR) support.
2. **Pre-Migration Manual Dump (`pg_dump`):**
   - Mandatory prior to running any SQL migration script:
     ```bash
     pg_dump -h db.your-project.supabase.co -U postgres -d postgres --clean -F p -f backup_pre_migration.sql
     ```
3. **Local Dual-Mode Fallback:**
   - The application codebase contains seeded local repositories (`src/lib/db/client.ts`), enabling instant failover for evaluation and testing without relying on cloud availability.

---

## 2. Restoration & Recovery Procedure

1. **Restoring from Manual SQL Dump:**
   ```bash
   psql -h db.your-project.supabase.co -U postgres -d postgres -f backup_pre_migration.sql
   ```
2. **Restoring Media Assets:**
   - Media metadata is preserved in the `media_assets` table.
   - Binary image files are stored in the `trust-media` Supabase Storage bucket, replicated across resilient cloud availability zones.
3. **Verification After Restore:**
   - Execute `/api/health` and verify HTTP 200 with `"database": { "status": "connected" }`.
   - Log in to `/admin` and confirm inquiry and metric record counts match pre-incident figures.
