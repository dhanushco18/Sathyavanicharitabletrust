# Environment Configuration & Key Management Protocol
**Organization:** Sathiyavani Charitable Trust  
**Document Code:** ST-DOC-P7-ENV-2026-V1  
**Security Classification:** Strict Secret Governance  

---

## 1. Environment Topology

The application supports three operational tiers:

1. **Local Development / Evaluation:**
   - Evaluated using seeded local memory repositories when `NEXT_PUBLIC_SUPABASE_URL` is unconfigured.
   - Transactional emails route to diagnostic outbox queue.
2. **Staging / Preview:**
   - Netlify Deploy Previews pointing to a staging Supabase project instance.
3. **Production:**
   - Live Netlify deployment (`https://sathiyavanitrust.netlify.app/`) with encrypted environment variables.

---

## 2. Environment Variables Specification

```bash
# Public Client Variables (Safe for browser bundle)
NEXT_PUBLIC_SITE_URL=https://sathiyavanitrust.netlify.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key

# Privileged Server Secrets (NEVER prefix with NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_DEV_PASSWORD=your-secure-dev-password
ADMIN_SESSION_SECRET=your-random-32-char-secret
RESEND_API_KEY=re_your_api_key

# Notification & Security Routing
ADMIN_NOTIFICATION_EMAIL=admin@sathiyavanitrust.org
SENDER_EMAIL=notifications@sathiyavanitrust.org
RATE_LIMIT_MAX_SUBMISSIONS=5
RATE_LIMIT_WINDOW_MINUTES=10
```
