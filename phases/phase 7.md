# PHASE 7: ANALYTICS, IMPACT REPORTING, MULTILINGUAL READINESS & LONG-TERM MAINTENANCE

You are acting as a senior full-stack engineer, product analytics specialist, accessibility engineer, data privacy reviewer, and software maintenance architect.

## PROJECT DETAILS

Project: Sathiyavani Charitable Trust  
Reference website: https://sathiyavanitrust.netlify.app/  
Development environment: Google Antigravity  
Phase: 7 — Analytics, Impact Reporting, Localization, and Maintainability

Phases 1–6 should contain the existing website, public pages, admin dashboard, database, content management, enquiry workflows, security audit, SEO, performance improvements, and deployment documentation.

Your task is to add carefully selected operational features that help the trust understand website usage, report verified charitable impact, support Tamil and English content where approved, and maintain the application over time.

## NON-NEGOTIABLE RULES

Before implementing anything:

1. Inspect the existing repository and Git status.
2. Read the documentation and implementation reports from Phases 1–6.
3. Identify which requested capabilities already exist.
4. Inspect the existing database, administrator roles, analytics configuration, localization strategy, deployment platform, and testing framework.
5. Create `docs/phase-7-implementation-plan.md`.
6. Reuse existing components, database structures, permissions, and integrations wherever possible.

Do not rebuild the application.

Do not duplicate Phase 4 impact metrics, Phase 5 enquiry workflows, or Phase 6 security and deployment features.

Do not add unnecessary paid services, introduce unapproved third-party data sharing, or collect personal information merely to improve analytics.

Do not deploy changes to production without explicit authorization.

---

## 1. PRIVACY-CONSCIOUS WEBSITE ANALYTICS

Implement a suitable analytics solution only after reviewing the existing architecture and privacy requirements.

Prefer a privacy-conscious, lightweight approach that provides useful aggregate information without unnecessary tracking.

Possible solutions include an existing analytics provider or a self-hosted alternative, if appropriate for the deployment.

### Measure useful events

Where appropriate, measure:

- Page views.
- Visits to program pages.
- Clicks on volunteer calls to action.
- Clicks on sponsorship and partnership calls to action.
- Contact-page visits.
- Successful form submissions as aggregate events.
- Navigation between major public sections.
- Relevant external-link clicks.

Do not send form messages, names, email addresses, phone numbers, enquiry contents, authentication tokens, or private dashboard information to analytics services.

Do not put personal information in analytics URLs, event properties, or query strings.

Avoid invasive fingerprinting and unnecessary cross-site tracking.

### Consent and privacy

Review applicable privacy requirements and the trust's approved privacy policy.

If a tracking technology requires consent, implement the appropriate consent flow before activating it.

Respect the visitor's choices and applicable browser privacy signals where supported.

Do not add an intrusive cookie banner for technologies that genuinely do not require one. Determine the appropriate approach from the actual technology and applicable requirements.

Document the selected provider, events measured, retention settings, data sharing, and any required configuration.

### Analytics dashboard

If aggregate analytics can be retrieved securely, create an administrator-only dashboard section showing meaningful metrics such as:

- Visits over time.
- Most-viewed public pages.
- Program-page engagement.
- Volunteer call-to-action engagement.
- Contact and sponsorship enquiry conversion counts.
- Device category, only where legitimately available.

Show only metrics supported by real data.

Clearly distinguish visits, unique visitors, form submissions, and successful conversions. Define the reporting period and measurement methodology.

If no analytics provider is configured or data is unavailable, show a useful setup state rather than fabricated charts or zero-valued statistics that could be mistaken for actual measurements.

Protect analytics credentials and private reports.

---

## 2. VERIFIED CHARITABLE IMPACT REPORTING

Extend the existing Phase 4 impact metrics and approval workflow instead of creating a separate system.

### Impact reporting capabilities

Allow authorized administrators to prepare reporting periods such as monthly, quarterly, and annual summaries.

Support approved categories where applicable:

- Education support.
- Child development.
- Community welfare.
- Festival initiatives.
- Environmental activities.
- Volunteer participation.

For each reported metric, retain:

- Metric definition.
- Reporting period.
- Verified value.
- Unit.
- Calculation method.
- Supporting evidence or source.
- Responsible reviewer.
- Approval status.
- Publication date.

Only approved and published data may appear in public impact reports.

### Reporting features

Where supported by the existing database, implement:

- Date-range filters.
- Category filters.
- Comparison between reporting periods.
- Approved annual summaries.
- Downloadable reports for authorized administrators.
- Public impact summaries using approved figures.
- A documented distinction between cumulative and period-specific figures.

Never add together overlapping reporting periods unless the calculation method supports it.

Never interpret website traffic, enquiries, volunteers who expressed interest, or social media engagement as completed charitable impact.

Do not fabricate beneficiary counts, financial figures, or outcome claims.

### Evidence and review

Support evidence references or protected attachments where the existing architecture allows them.

Restrict evidence access according to administrator permissions.

Do not expose private beneficiary information, financial documents, or confidential records in public reports.

If data is incomplete, clearly identify the gap and request review rather than generating a misleading total.

---

## 3. TAMIL AND ENGLISH LOCALIZATION READINESS

Inspect the current website to determine whether multilingual support already exists.

If Tamil and English are appropriate and approved by the trust, implement a maintainable localization architecture.

### Requirements

- Support English and Tamil content for approved public pages.
- Add an accessible language selector.
- Preserve the selected language during navigation where practical.
- Use appropriate HTML language attributes.
- Use correct Tamil-compatible fonts and Unicode text.
- Ensure Tamil content renders correctly on mobile devices.
- Translate navigation, form labels, validation messages, error messages, buttons, and other interface strings.
- Support translated metadata and page titles.
- Use clear URL conventions that fit the existing routing architecture.
- Provide an appropriate fallback when a translation is unavailable.

Do not machine-translate and automatically publish the trust's mission, founder story, legal notices, beneficiary stories, financial claims, or sensitive organizational statements without human review.

Do not silently substitute English text for an unavailable Tamil translation without making the fallback behavior clear.

Keep translated content linked to its corresponding original content where possible.

Ensure that publishing one language does not accidentally publish an unapproved translation in another language.

### Translation workflow

If practical, allow content administrators to identify:

- Source language.
- Translation status.
- Reviewer.
- Approval status.
- Publication status.

Reuse the existing content management architecture.

If localization requires a major architectural change, document the proposed approach and obtain approval before performing a disruptive migration.

---

## 4. ADMINISTRATOR OPERATIONS AND CONTENT GOVERNANCE

Improve the existing dashboard for sustainable long-term use.

Add only capabilities that are missing.

Where appropriate, provide:

- Content review queues.
- Drafts awaiting approval.
- Expiring or past events.
- Unresolved enquiries.
- Failed notification indicators.
- Impact metrics awaiting verification.
- Translation review status.
- Recent security-relevant administrative activity.
- Content last-updated timestamps.

Make sure each item is based on real database records.

### Permissions

Respect existing role-based access control.

Only authorized users should manage roles, approve impact claims, view private evidence, or access sensitive enquiries.

Use server-side authorization for privileged operations.

Do not expose sensitive administrator activity or personal information to public visitors.

Do not create unrestricted administrator registration.

---

## 5. ACCESSIBLE CONTENT AND STORY MANAGEMENT

Improve the quality and sustainability of published content.

Where appropriate, provide content administrators with guidance or validation for:

- Meaningful image alternative text.
- Page titles and descriptions.
- Heading structure.
- Clear calls to action.
- Readable paragraphs.
- Valid internal links.
- Translation completeness.
- Publication status.
- Image size and file format.

Do not block legitimate publishing solely because an optional field is absent unless the field is genuinely required.

Do not publish testimonials, identifiable beneficiary stories, or children's photographs without appropriate authorization.

Provide clear preview and publication status indicators.

Preserve the existing website's visual identity and responsive design.

---

## 6. RELIABLE MAINTENANCE AND DEPENDENCY MANAGEMENT

Prepare the application for continued maintenance.

Inspect the existing dependencies and identify:

- Unsupported packages.
- Known security vulnerabilities.
- Unnecessary dependencies.
- Outdated packages with a clear maintenance risk.
- Deprecated framework APIs.
- Unused code.
- Fragile configuration.
- Missing tests around critical workflows.

Do not indiscriminately upgrade every dependency to the latest version.

For each proposed major upgrade, evaluate compatibility, migration requirements, and regression risks.

Apply security fixes where appropriate and run the relevant tests afterward.

Document the project's supported runtime versions, package manager, build commands, test commands, and deployment procedure.

### Maintenance documentation

Create or update:

- `docs/maintenance-guide.md`
- `docs/incident-response-guide.md`
- `docs/backup-and-recovery.md`
- `docs/environment-configuration.md`
- `docs/analytics-and-privacy.md`
- `docs/impact-reporting-methodology.md`
- `docs/localization-guide.md`, if multilingual support is implemented

Document which steps are automated and which require a human administrator.

Do not claim that a backup, alert, or scheduled maintenance process is operational until it has been verified.

---

## 7. MONITORING AND OPERATIONAL ALERTS

Review existing monitoring and error reporting from Phase 6.

Where useful, add low-maintenance alerts for:

- Repeated application failures.
- Failed email notifications.
- Database connectivity issues.
- Unusual submission abuse.
- Failed scheduled tasks, if scheduled tasks exist.
- Critical service unavailability.

Use the existing infrastructure where possible.

Avoid excessive notifications and alerts that expose sensitive data.

Do not create unnecessary background jobs or infrastructure just to support a dashboard counter.

Document alert recipients, triggering conditions, setup requirements, and expected response actions.

Test the failure and recovery behavior in a non-production environment.

---

## 8. PERFORMANCE AND COST CONTROL

Review the cost and performance impact of every new feature.

Requirements:

- Avoid unnecessary client-side analytics scripts.
- Avoid repeated database queries for dashboard metrics.
- Use appropriate caching for public aggregate data.
- Avoid caching private or role-dependent responses in shared caches.
- Optimize report queries for realistic dataset sizes.
- Paginate large collections.
- Limit analytics retention and data collection to legitimate requirements.
- Avoid introducing paid services without documenting their expected purpose and cost.

Do not create infrastructure that the trust cannot reasonably maintain.

---

## 9. TESTING REQUIREMENTS

Use the project's existing test framework.

### Analytics

Verify that:

- Events are recorded only when appropriately configured.
- Personal information is not transmitted to analytics.
- Consent choices are respected where required.
- Private dashboard activity is not exposed publicly.
- Missing provider configuration produces a useful setup state.

### Impact reporting

Verify that:

- Only approved data is published.
- Reporting periods are calculated correctly.
- Overlapping periods are not accidentally double-counted.
- Missing evidence is handled honestly.
- Private evidence remains protected.
- Exported reports contain only authorized information.

### Localization

If implemented, verify that:

- Both languages display correctly.
- Language switching works.
- URLs and metadata are correct.
- Missing translations are handled predictably.
- Form validation and error messages are translated.
- Unapproved translations cannot be published accidentally.

### Access control

Verify that:

- Public visitors cannot access private reports.
- Unauthorized administrators cannot approve metrics or change roles.
- Private enquiries and evidence remain protected.
- All privileged operations enforce server-side authorization.

### General quality

Run:

- Production build.
- TypeScript checks, where applicable.
- Linting.
- Relevant unit and integration tests.
- End-to-end tests.
- Accessibility checks.
- Performance checks for changed routes.

Report actual results and identify any blocked tests.

---

## 10. IMPLEMENTATION ORDER

Work in small, verifiable stages:

1. Audit the existing Phase 1–6 implementation.
2. Identify duplicate functionality and missing operational capabilities.
3. Write the Phase 7 implementation plan.
4. Implement privacy-conscious analytics if approved and appropriately configured.
5. Extend the existing impact reporting workflow.
6. Implement Tamil and English localization if approved and feasible.
7. Improve administrator operational summaries.
8. Improve content governance and maintenance documentation.
9. Review monitoring and cost implications.
10. Add and run automated tests.
11. Document setup requirements and remaining limitations.
12. Produce a Phase 7 completion report.

If a feature requires unavailable credentials, human approval, or significant architectural changes, document the dependency instead of pretending it is complete.

Do not implement every optional feature at the expense of security or maintainability.

---

## 11. DEFINITION OF DONE

Phase 7 is complete when:

- Existing public pages and admin functionality continue to work.
- New analytics use real data and appropriate privacy controls.
- Impact reporting uses the existing approval system and verified data.
- Public reports cannot expose private evidence.
- Localization is implemented and tested if included in the approved scope.
- Administrator operational summaries use actual data.
- Maintenance and recovery documentation is updated.
- New dependencies and operational costs are documented.
- Build, lint, and relevant automated tests have actual recorded results.
- Remaining issues and configuration requirements are clearly identified.
- No unapproved production deployment or external data sharing has occurred.

## FINAL REPORT

Create or update `docs/phase-7-implementation-report.md`.

Report:

1. Features implemented.
2. Existing features reused.
3. Analytics provider and events configured, if applicable.
4. Impact reporting capabilities and evidence requirements.
5. Localization status and languages supported.
6. Security and privacy controls.
7. Maintenance documentation added.
8. Tests executed and their actual results.
9. New services, dependencies, and cost implications.
10. Unresolved issues and required human approvals.

Stop after Phase 7 and wait for my approval before proceeding.