# Security & Operational Incident Response Guide
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-INCIDENT-2026-V1  
**Severity Levels:** P1 (Critical Outage / Breach) • P2 (Major Degradation) • P3 (Minor Defect)  

---

## 1. Incident Severity Definitions

- **P1 (Critical):**
  - Website completely unreachable (HTTP 500 / 503).
  - Suspected unauthorized disclosure of private citizen inquiries or child data.
  - Compromise of administrative login credentials.
- **P2 (Major):**
  - Public inquiry forms failing intermittently.
  - Transactional email dispatch failures.
  - Core styling or responsive layout broken on mobile devices.
- **P3 (Minor):**
  - Typographical error in published program text.
  - Minor visual alignment issue on non-critical screens.

---

## 2. Immediate Containment & Mitigation Procedures

### 2.1. P1: Suspected Credential Compromise
1. **Rotate Administrative Passwords & Session Secrets:**
   - Immediately update `ADMIN_SESSION_SECRET` in Netlify site settings. This instantly invalidates all active admin cookies across all devices.
   - Rotate database passwords in the Supabase Cloud dashboard.
2. **Review Audit Logs:**
   - Navigate to `/admin/audit` to inspect all actions executed within the last 72 hours.
   - Identify unauthorized role mutations or metric status overrides.

### 2.2. P1: Production Regression After Deploy
1. **Execute Zero-Downtime Rollback:**
   - Open Netlify Dashboard > **Deploys**.
   - Select the last verified green deploy commit.
   - Click **Publish deploy**. The platform restores the prior release in under 15 seconds.

---

## 3. Communication & Escalation Matrix

- **Primary Incident Coordinator:** Lead Developer / System Architect (`admin@sathiyavanitrust.org`).
- **Trust Leadership Notification:** Mr. Raghu N. (President) via telephone (+91 98414 54501).
