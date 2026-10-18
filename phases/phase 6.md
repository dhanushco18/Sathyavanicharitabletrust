# PHASE 6: PRODUCTION READINESS, SECURITY AUDIT, SEO, PERFORMANCE & DEPLOYMENT

You are acting as a senior software architect, DevSecOps engineer, performance engineer, accessibility specialist, SEO engineer, and release manager.

## PROJECT DETAILS

Project: Sathiyavani Charitable Trust  
Reference website: https://sathiyavanitrust.netlify.app/  
Development environment: Google Antigravity  
Phase: 6 — Production Readiness and Deployment Verification

Phases 1–5 should contain the project plan, design system, public-facing pages, database, secure administrator dashboard, content management, public forms, email notifications, and integration tests.

Your responsibility is to audit the complete application, fix verified issues, improve performance and discoverability, and prepare a reliable production release.

## CRITICAL INSTRUCTIONS

Before changing anything:

1. Inspect the complete repository and current Git status.
2. Read the implementation reports and documentation from Phases 1–5.
3. Identify the actual framework, dependencies, hosting platform, database, authentication provider, storage, email service, and deployment configuration.
4. Review all public routes, administrator routes, API endpoints, database migrations, security policies, forms, and tests.
5. Establish a baseline for build status, test results, performance, accessibility, SEO, and security.
6. Create or update `docs/phase-6-production-readiness-plan.md`.

Preserve the existing application architecture and approved design system.

Do not rebuild the website, migrate frameworks, replace working services, delete production data, or introduce unnecessary infrastructure.

Do not assume that Vercel, Netlify, Supabase, or any third-party service is configured until you verify the existing project configuration.

**Do not deploy to production, change DNS, modify production database records, or send real emails without explicit authorization.**

---

## 1. COMPLETE APPLICATION AUDIT

Inspect the complete website and its backend.

Audit:

- Homepage and navigation.
- About, Founder, Mission, and Vision pages.
- Education and child development pages.
- Community outreach, festivals, and environmental initiatives.
- Programs and their detail pages.
- Impact, stories, and events.
- Get Involved, Volunteer, Sponsorship, and Partnerships.
- Contact page and enquiry workflows.
- Privacy Policy and Terms pages.
- Admin login, protected dashboard, and role permissions.
- Content creation, editing, publication, and archival.
- Impact metric approval workflow.
- Media uploads and storage permissions.
- Email notifications and failure handling.
- Database migrations, RLS policies, and API authorization.
- Mobile layouts and accessibility.
- Deployment and environment configuration.

Use the actual route list from the repository rather than assuming every route above exists.

Identify broken links, inconsistent content, duplicate components, missing metadata, incomplete features, runtime errors, and security risks.

Produce a prioritized audit report with severity, evidence, recommended fix, and verification method.

Fix high-priority defects before cosmetic improvements.

---

## 2. PRODUCTION SECURITY AUDIT

Perform a defensive security review of the application and its dependencies.

### Authentication and authorization

Verify:

- All administrator pages and protected API routes require appropriate authorization.
- Server-side role checks are enforced.
- Public visitors cannot read or modify private enquiries.
- Draft, archived, and unapproved content cannot be accessed through public endpoints.
- Impact metrics are publicly visible only after the required approval and publication steps.
- Administrator provisioning is controlled.
- Session expiration and logout behave correctly.
- Password recovery and authentication errors do not expose sensitive information.

### Database and storage

Verify:

- RLS policies are enabled and correct for relevant Supabase tables, if Supabase is used.
- Privileged keys are never exposed in browser bundles.
- Public and private storage access is correctly separated.
- Uploaded files have appropriate type and size restrictions.
- Database migrations are version-controlled.
- Queries use safe parameterization or supported ORM methods.
- Destructive actions have suitable safeguards.

### Web application security

Check for:

- Cross-site scripting.
- Injection vulnerabilities.
- Broken access control.
- CSRF risks where applicable.
- Unsafe redirects.
- Insecure file uploads.
- Sensitive information exposed in API responses.
- Leaked environment variables.
- Inadequate request validation.
- Rate-limiting gaps.
- Dependency vulnerabilities.
- Excessive production error details.
- Missing or unsafe security headers.

Apply appropriate protections without breaking legitimate user workflows.

Do not perform destructive tests against production systems. Use a local or staging environment.

Do not claim the application is completely secure. Document the scope of the audit, tests performed, remaining risks, and any issues that require a qualified security professional.

---

## 3. PERFORMANCE OPTIMIZATION

Improve actual performance bottlenecks while preserving the existing design.

### Frontend

Inspect and optimize:

- JavaScript bundle size.
- Unnecessary client-side rendering.
- Large dependencies.
- Image dimensions and formats.
- Responsive image delivery.
- Lazy loading for below-the-fold media.
- Font loading.
- Layout shifts.
- Unnecessary API requests.
- Duplicate data fetching.
- Excessive animations.
- Large page components.
- Caching and revalidation.

Use server rendering, static rendering, or client rendering according to the existing framework and actual page requirements.

Do not move every component to the client unnecessarily.

Do not lazy-load critical above-the-fold content in a way that harms the initial experience.

### Backend and database

Inspect:

- Slow database queries.
- Missing indexes on frequently queried fields.
- N+1 query patterns.
- Unnecessary repeated API requests.
- Unbounded collection queries.
- Pagination.
- Caching opportunities.
- Connection and timeout handling.

Add indexes only when supported by query patterns and database analysis.

Do not expose private data through caching or shared cached responses.

### Performance targets

Use the following Core Web Vitals as target thresholds at the 75th percentile when representative field data becomes available:

- Largest Contentful Paint (LCP): 2.5 seconds or less.
- Interaction to Next Paint (INP): 200 milliseconds or less.
- Cumulative Layout Shift (CLS): 0.1 or less.

Use Lighthouse or an equivalent tool for repeatable lab measurements. Distinguish lab results from real-user field data.

Do not claim that field targets have been achieved when field data is unavailable.

Record baseline and post-optimization results, test conditions, affected routes, and remaining bottlenecks.

---

## 4. SEARCH ENGINE OPTIMIZATION

Implement and verify technical SEO across the public website.

### Metadata

Ensure each indexable public page has appropriate:

- Unique page title.
- Meta description.
- Canonical URL.
- Open Graph title, description, and image where appropriate.
- Social sharing metadata.
- Correct language and document metadata.

Use approved trust information and page content.

Do not invent official registrations, awards, certifications, partnerships, financial details, or impact claims.

### Sitemap and crawling

Implement or verify:

- `robots.txt`.
- XML sitemap.
- Correct canonical URLs.
- Appropriate indexability directives.
- Correct handling of trailing slashes and redirects.
- Meaningful HTTP status codes.
- Custom 404 page.
- Appropriate 500/error states.

Include only canonical, indexable public pages in the sitemap.

Exclude administrator pages, authentication pages, private enquiry routes, API endpoints, and other non-public content.

Do not rely on `robots.txt` to secure private routes. Enforce access control on the server.

Ensure preview and staging deployments cannot accidentally be indexed as the primary production website.

### Structured data

Add structured data only where accurate and appropriate, using supported schema types such as Organization or NGO where applicable.

Use only verified organization details and public contact information approved by the trust.

Do not invent postal addresses, opening hours, tax status, ratings, reviews, registration numbers, or social media profiles.

Validate structured data with an appropriate testing tool.

### Content quality

Review page headings, internal links, image alt text, duplicate metadata, broken links, and empty pages.

Keep the content accessible and understandable. Do not add keyword stuffing or fabricated testimonials.

Do not promise search rankings or a particular search indexing timeline.

---

## 5. ACCESSIBILITY AUDIT

Target WCAG 2.2 Level AA for the website, while clearly documenting any remaining gaps.

Audit:

- Semantic HTML.
- Heading hierarchy.
- Keyboard navigation.
- Visible focus indicators.
- Color contrast.
- Accessible form labels.
- Error identification and announcements.
- Screen-reader names for controls.
- Mobile menu behavior.
- Dialog focus management.
- Alternative text for meaningful images.
- Decorative image handling.
- Reduced-motion preferences.
- Touch target usability.
- Authentication accessibility.
- Dashboard tables and status messages.

Fix verified accessibility issues in shared components first, then recheck affected routes.

Use automated accessibility tools alongside manual keyboard testing. Automated tests alone are not sufficient to establish WCAG conformance.

Do not remove useful visual content merely to pass automated checks.

---

## 6. MOBILE AND CROSS-BROWSER QUALITY

Test representative pages at mobile, tablet, and desktop sizes.

Verify:

- No horizontal overflow.
- Navigation works on small screens.
- Forms remain usable on touch devices.
- Text remains readable.
- Images scale correctly.
- Buttons and controls have usable touch targets.
- Dashboard tables remain usable on narrow screens.
- Loading and error states do not break layouts.
- Tamil and English text render correctly where used.

Use Playwright or the existing end-to-end testing framework.

Test the browsers supported by the existing project requirements. Clearly state which browsers and devices were actually tested.

---

## 7. CONTENT AND TRUST INFORMATION VERIFICATION

Review the public website for factual consistency.

Check:

- Trust name and branding.
- Founder information.
- Organization history.
- Program descriptions.
- Contact information.
- Volunteer and sponsorship instructions.
- Impact statistics.
- Photographs and testimonials.
- Privacy statements.
- Calls to action.

Do not silently rewrite sensitive organizational facts.

Treat historical beneficiary figures and other unverified claims as pending confirmation until the trust approves them and their supporting evidence.

Remove fabricated placeholders from public-facing pages. If a claim cannot be verified, flag it for approval or omit it from publication.

Check that children’s photographs and personal stories have the required authorization before publication.

Use meaningful empty states rather than invented impact metrics.

Document every factual issue that requires confirmation from the trust.

---

## 8. DATABASE BACKUP AND RECOVERY READINESS

Review the current database and storage backup arrangements.

Document:

- Available backup mechanism.
- Backup frequency, where configured.
- Retention period, where configured.
- Recovery procedure.
- Database migration rollback or forward-fix strategy.
- Media recovery considerations.
- Access restrictions for backups.
- Recovery responsibilities.
- Any limits of the current hosting or database plan.

If a suitable development environment is available, validate the recovery procedure using non-production data.

Do not create unnecessary copies of sensitive personal information.

Do not claim that backups exist, are current, or are recoverable unless verified.

Do not run destructive recovery tests on production.

---

## 9. LOGGING, MONITORING, AND ERROR HANDLING

Inspect existing operational monitoring.

Where supported by the current architecture, configure or document:

- Application error tracking.
- Server error logs.
- Deployment failure visibility.
- Database error visibility.
- Email notification failure visibility.
- Basic uptime monitoring.
- Rate-limit and abuse events.
- Relevant service health checks.

Requirements:

- Never log passwords, API keys, authentication tokens, or unnecessary personal data.
- Avoid exposing stack traces to public visitors.
- Provide meaningful user-facing errors.
- Keep diagnostic details in appropriately protected server logs.
- Document how administrators can identify and respond to failures.

Do not add expensive monitoring services without evaluating whether they are necessary and available.

---

## 10. DEPLOYMENT READINESS

Identify the actual deployment platform from the existing project configuration.

Prepare a deployment checklist covering:

- Required environment variables.
- Production build.
- Database migration procedure.
- Authentication redirect URLs.
- Email provider configuration.
- Storage permissions.
- Domain and HTTPS requirements.
- Canonical domain configuration.
- Security headers.
- Error pages.
- Health checks.
- Backup readiness.
- Rollback or recovery strategy.

Update `.env.example` with safe placeholders only.

Never commit secrets or production credentials.

If the project is deployed on Netlify, verify the compatibility of the actual framework and build configuration. If it is deployed on Vercel or another supported platform, follow that platform's requirements instead of assuming a host.

Check whether the current deployment is suitable for the application's server-side features. Do not move platforms unless there is a clear technical reason and the change is explicitly approved.

### Staging verification

If a staging environment is available:

1. Deploy the current release candidate to staging.
2. Apply approved migrations safely.
3. Verify authentication and role permissions.
4. Test public forms and email integration.
5. Check public content and publication workflows.
6. Run smoke tests and security checks.
7. Record actual results and any blocking defects.

Do not deploy to production or change DNS without my explicit approval.

---

## 11. TESTING AND RELEASE GATES

Run the project's actual checks and record the output.

### Required checks

- Production build.
- TypeScript checks, where applicable.
- Linting.
- Unit tests.
- Integration tests.
- End-to-end tests.
- Accessibility checks.
- SEO validation.
- Link and route checks.
- Security and dependency checks.
- Lighthouse or equivalent performance tests.
- Mobile responsive checks.

Do not report a check as passing if it was not executed.

Distinguish between:

- Passed.
- Failed.
- Blocked by missing configuration.
- Not tested.

### Release blockers

Do not recommend production release while any unresolved critical issue remains, including:

- Unauthorized access to private data.
- Exposed secrets.
- Broken authentication.
- Destructive database migration risks.
- Failed core public forms.
- Incorrect publication permissions.
- Broken production build.
- Critical security vulnerabilities without an approved mitigation.

Provide a prioritized remediation plan for unresolved blockers.

---

## 12. IMPLEMENTATION ORDER

Work in the following sequence:

1. Inspect the repository and Phase 1–5 reports.
2. Establish baseline build, test, security, SEO, accessibility, and performance results.
3. Audit all routes and workflows.
4. Fix critical security and data privacy issues.
5. Fix broken public functionality.
6. Optimize performance.
7. Improve SEO and structured data.
8. Fix accessibility issues.
9. Verify mobile and browser behavior.
10. Review factual content and publication safety.
11. Document backup and monitoring readiness.
12. Prepare deployment and rollback instructions.
13. Execute the final test suite.
14. Produce the release readiness report.

Make small, testable changes. Re-run relevant tests after fixes.

Do not introduce unrelated features or begin Phase 7.

---

## 13. DEFINITION OF DONE

Phase 6 is complete when:

- The existing application has been audited.
- Critical security findings are resolved or clearly treated as release blockers.
- Public pages and forms pass their relevant functional tests.
- Performance has been measured and documented.
- SEO metadata, sitemap, and crawling behavior have been verified.
- Accessibility has been audited and high-priority defects addressed.
- Mobile responsiveness has been checked.
- Unverified public claims have been flagged or removed from publication.
- Database backup and recovery arrangements are documented accurately.
- Environment configuration and deployment instructions are complete.
- Build, lint, type-check, and test results are recorded.
- Outstanding issues and limitations are listed.
- Production release readiness is classified as Ready, Ready with documented non-blocking issues, or Not Ready.

## FINAL REPORT

Create or update:

- `docs/phase-6-production-readiness-plan.md`
- `docs/phase-6-audit-report.md`
- `docs/phase-6-deployment-checklist.md`
- `docs/phase-6-test-results.md`

At completion, report:

1. Security issues found and resolved.
2. Performance baseline and final measurements.
3. SEO and accessibility findings.
4. Routes and workflows tested.
5. Build, lint, and automated test results.
6. Backup, monitoring, and recovery status.
7. Environment configuration still required.
8. Remaining release blockers.
9. Recommended next steps.
10. Whether production deployment is genuinely ready.

Do not claim successful deployment if no deployment occurred.

Do not deploy to production without explicit approval.

Stop after Phase 6 and wait for my approval before proceeding.