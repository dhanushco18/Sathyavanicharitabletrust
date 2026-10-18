# PHASE 4 MASTER PROMPT — DATABASE, SECURE ADMIN DASHBOARD & CONTENT MANAGEMENT

## Project: Sathiyavani Charitable Trust

### YOUR ROLE

Act as a Principal Backend Architect, Senior Next.js Engineer, PostgreSQL Database Engineer, Supabase Security Specialist, Application Security Engineer and QA Engineer.

Your task is to implement the real backend and administration system for the existing Sathiyavani Charitable Trust website.

Build a secure, maintainable content management platform that enables authorised staff to manage public website content, review enquiries and approve impact data without editing application source code.

The result must be a working application, not a dashboard mockup.

---

# 1. MANDATORY PRE-IMPLEMENTATION REVIEW

Before changing code:

1. Read the approved Phase 1 documentation.
2. Inspect the completed Phase 2 and Phase 3 implementations.
3. Inspect the actual framework, dependencies, routes and component structure.
4. Determine whether Supabase or another backend already exists.
5. Inspect the existing database schema and migrations if available.
6. Review the current authentication implementation.
7. Identify existing forms, content structures and data dependencies.
8. Run the existing build, type checks and tests.
9. Create a safe Git checkpoint where available.
10. Produce a short implementation plan before major changes.

Use the actual repository structure. Do not assume every earlier recommendation was implemented exactly as written.

Preserve working functionality.

Do not replace an existing database or authentication system without demonstrating why the change is necessary.

Do not expose secrets, passwords, tokens or private environment values in logs or reports.

If required credentials are missing, implement the code and documented configuration safely, then identify which integration tests must wait for credentials.

---

# 2. PHASE 4 OBJECTIVE

Implement these core capabilities:

- Secure administrator authentication.
- Protected admin routes.
- Role-based access where justified.
- Admin dashboard with meaningful summaries.
- Programme management.
- Website content management.
- Stories and event management.
- Approved media management.
- Impact metric review and approval.
- Volunteer enquiry management.
- Sponsorship enquiry management.
- Partnership enquiry management.
- General contact enquiry management.
- Database persistence.
- Appropriate validation and error handling.
- Secure database permissions.
- Auditable administrative actions where appropriate.

All administration features must connect to actual data.

Do not create buttons that only change the interface without performing their advertised operation.

---

# 3. RECOMMENDED TECHNICAL APPROACH

If consistent with the approved architecture, use:

- Next.js App Router.
- TypeScript.
- Supabase PostgreSQL.
- Supabase Auth.
- Supabase Storage.
- Server-side data access and validation.
- Database migrations.
- Row-level security policies.

Use existing libraries where appropriate.

Do not introduce unnecessary dependencies.

If the repository already has a suitable backend, evaluate whether it should be retained.

Keep public-facing content separate from private administrative data.

Do not place database service-role credentials in browser-accessible code.

Never bypass database security by exposing privileged keys to the frontend.

---

# 4. DATABASE DESIGN

Inspect the current schema before proposing new tables.

Create only the tables required by the agreed functionality.

Potential entities include:

## A. Administrator profiles

Fields may include:

- User ID linked to the authentication identity.
- Display name.
- Approved role.
- Active or disabled status where needed.
- Creation timestamp.
- Updated timestamp.

Roles may include:

- Super administrator.
- Content administrator.
- Enquiry manager.

Use only as many roles as the organisation needs.

Do not allow visitors to create their own administrator accounts.

Do not allow an ordinary administrator to promote themselves to a privileged role.

## B. Programmes

Support:

- Programme ID.
- Title.
- Slug.
- Short description.
- Full content.
- Cover image reference.
- Publication status.
- Sort order.
- Created timestamp.
- Updated timestamp.
- Published timestamp where appropriate.

Validate slugs and prevent accidental duplicates.

## C. Pages and content sections

Where editable pages are required, support:

- Page identifier.
- Title.
- Slug.
- Approved content structure.
- SEO title.
- Meta description.
- Draft or published status.
- Updated timestamp.
- Publisher identity where appropriate.

Do not introduce an unnecessarily complex page builder.

Prefer structured, validated content that fits the existing design system.

## D. Stories

Support:

- Title.
- Slug.
- Summary.
- Content.
- Cover media.
- Publication date.
- Draft or published status.
- Associated programme where appropriate.
- Author or editor reference where needed.

## E. Events

Support:

- Title.
- Slug.
- Description.
- Start date and time where known.
- End date and time where applicable.
- Location where confirmed.
- Cover media.
- Publication status.
- Related programme.
- Created and updated timestamps.

Use an appropriate timezone strategy. Do not silently interpret dates in UTC when the intended event time is local.

## F. Impact metrics

Support:

- Metric ID.
- Metric name.
- Numeric or appropriately typed value.
- Unit.
- Reporting period.
- Metric definition.
- Evidence reference.
- Draft, review, approved or rejected status.
- Reviewer identity.
- Review timestamp.
- Public publication status.
- Created and updated timestamps.

Do not treat approval status as a cosmetic field.

A public query must never return a draft, rejected or unapproved metric.

Prevent duplicate or conflicting metrics for the same defined reporting period where the business rules require uniqueness.

## G. Enquiries

Use a shared structure where appropriate, or separate tables when different privacy and workflow requirements justify them.

Support the appropriate fields for:

- General enquiries.
- Volunteer enquiries.
- Sponsorship enquiries.
- Partnership enquiries.

Potential common fields:

- Submission ID.
- Enquiry category.
- Name.
- Contact details.
- Message.
- Submission timestamp.
- Status.
- Assigned administrator where required.
- Administrative notes where appropriate.
- Updated timestamp.

Collect only necessary information.

Do not collect sensitive information about children unless a justified, approved process requires it.

## H. Media assets

Support:

- Media identifier.
- Storage path.
- Display name.
- File type.
- File size.
- Alternative text.
- Caption.
- Publication or approval status where needed.
- Uploading administrator.
- Creation timestamp.

Do not expose private documents or unpublished photographs through publicly accessible storage.

## I. Audit records

Where justified, record significant administrative actions such as:

- Publishing content.
- Approving an impact metric.
- Changing administrator roles.
- Changing critical settings.
- Deleting or archiving important records.

Avoid logging passwords, access tokens or unnecessary personal information.

---

# 5. DATABASE MIGRATIONS

Implement schema changes using version-controlled database migrations.

Requirements:

- Use explicit constraints.
- Define appropriate foreign keys.
- Add indexes for common query patterns.
- Use appropriate timestamp fields.
- Define deletion and archival behaviour.
- Avoid destructive changes without a migration plan.
- Document how a fresh environment can be configured.
- Document how an existing database can be upgraded safely.

Never silently reset a production database.

Never drop existing tables simply to make a migration easier.

If a destructive migration is unavoidable, explain the impact and require approval before executing it against production.

---

# 6. AUTHENTICATION AND AUTHORISATION

Implement secure administrator authentication using the approved authentication provider.

For Supabase Auth:

- Use the recommended supported authentication flow.
- Protect administrative sessions appropriately.
- Verify user identity server-side.
- Verify the user's role server-side.
- Protect every sensitive server action and data-access operation.
- Do not rely on hiding dashboard links in the UI.
- Do not rely solely on client-side route guards.
- Use appropriate session and cookie handling for the framework.

Unauthorised users must not be able to read or modify private records by calling endpoints directly.

Disabled or revoked administrators must lose access according to the implemented session and permission policy.

Do not implement public administrator registration.

Create a documented, secure initial administrator-provisioning process.

Do not hardcode a default admin email or password.

Do not place privileged credentials in source code.

If account recovery is implemented, use the authentication provider's supported recovery mechanism.

---

# 7. DATABASE ROW-LEVEL SECURITY

If using Supabase, implement and test Row Level Security for every relevant table.

Use a default-deny approach for sensitive data.

Define explicit access policies.

At minimum:

- Public visitors may read only published public content.
- Public visitors must not read private enquiries.
- Public visitors must not read administrator profiles or roles.
- Only authorised administrators may create or modify content.
- Only authorised reviewers may approve impact metrics.
- Role changes must require appropriate privileged authority.
- Unpublished content must not be returned by public queries.
- Storage permissions must match the visibility of the associated assets.

Avoid broad policies that allow any authenticated user to access everything.

Do not use a service-role key in the frontend to work around permission problems.

Test access using distinct public, unauthorised and authorised sessions.

Document the policies and test results.

---

# 8. ADMIN DASHBOARD

Build a professional, responsive dashboard consistent with the public website's design system.

Suggested navigation:

- Overview.
- Programmes.
- Pages.
- Stories.
- Events.
- Impact.
- Media.
- Enquiries.
- Settings.

Only show sections the current administrator is authorised to use.

## Dashboard overview

Show meaningful summaries derived from actual data, such as:

- Published programmes.
- Draft content awaiting review.
- Published stories.
- Upcoming events.
- Impact metrics awaiting approval.
- New enquiries.

Use clear status labels and links to the relevant records.

Do not show fake statistics.

If the database is empty, display a useful onboarding state with appropriate actions.

## Dashboard UX requirements

- Responsive sidebar or navigation.
- Clear active navigation.
- Page titles and breadcrumbs.
- Search and filtering where useful.
- Pagination for larger datasets.
- Loading states.
- Empty states.
- Error states.
- Success confirmations.
- Confirmation for destructive actions.
- Accessible keyboard navigation.
- Visible focus indicators.

Avoid cluttered dashboards, excessive charts and decorative metrics that do not help administrators make decisions.

---

# 9. CONTENT MANAGEMENT WORKFLOW

Implement create, read, update and delete operations where justified for:

- Programmes.
- Pages.
- Stories.
- Events.
- Approved media references.

Support:

- Create new record.
- Save draft.
- Edit existing record.
- Preview content where practical.
- Publish.
- Unpublish.
- Archive or delete where appropriate.
- Validate input.
- Show meaningful error messages.
- Confirm successful persistence.

Separate saving from publishing where necessary.

Do not publish content simply because it has been saved.

Do not return success before the database operation has actually succeeded.

Use safe deletion practices and protect records referenced by other entities.

---

# 10. IMPACT APPROVAL WORKFLOW

This is a high-priority feature.

The existing website has inconsistent impact information. Do not automatically promote its historical figures to approved production metrics.

Implement a workflow such as:

Draft → Review → Approved → Published

Allow rejection or return for correction.

For each metric, an authorised reviewer should be able to inspect:

- Metric definition.
- Reporting period.
- Proposed value.
- Supporting evidence.
- Any limitations in the underlying data.

Only approved and published metrics may appear on the public website.

When a metric is updated, retain the appropriate review history.

Prevent ordinary content editors from bypassing approval controls.

Provide an honest public empty state if no approved metrics are available.

Do not infer that the number of gifts distributed equals the number of unique beneficiaries.

Do not invent evidence documents.

---

# 11. ENQUIRY MANAGEMENT

Build working administrative screens for enquiries.

Administrators should be able to:

- View authorised enquiries.
- Filter by category.
- Search relevant fields.
- Review submission details.
- Change workflow status.
- Assign an enquiry where needed.
- Add appropriate internal notes.
- Mark an enquiry as resolved.

Protect personal information.

Internal notes must never appear in public API responses.

Avoid exposing unnecessary contact details in logs.

Use pagination and appropriate query limits.

If notifications are added, do not expose recipient addresses or secret credentials in browser code.

Email notifications must not be represented as successfully sent unless the configured provider confirms success.

---

# 12. MEDIA MANAGEMENT

If the approved architecture uses Supabase Storage, configure the necessary storage buckets and access policies.

Support appropriate media types and size limits.

Validate uploads server-side.

Do not trust a filename or browser-supplied content type alone.

Use safe storage paths and appropriate file access permissions.

Ensure that:

- Approved public photographs can be displayed by the public website.
- Unpublished or private media remain protected.
- Alternative text can be maintained.
- Upload failures produce meaningful errors.
- Deletion does not unexpectedly break published pages.

Do not upload real beneficiary photographs without appropriate permission.

Do not make every storage bucket public by default.

---

# 13. CONNECT THE PUBLIC WEBSITE TO REAL CONTENT

Replace duplicated hardcoded content with database-backed data where the approved architecture requires it.

The public website should retrieve:

- Published programmes.
- Published stories.
- Published events.
- Approved and published impact metrics.
- Approved public content.

Keep the existing Phase 2 and Phase 3 design.

The database must not dictate a redesign of the public pages.

Use sensible caching and revalidation where appropriate.

Ensure that publication changes become visible according to a documented and tested update strategy.

Avoid unnecessary database requests on every component render.

Handle missing data gracefully.

Do not return draft records from public endpoints.

---

# 14. VALIDATION AND ERROR HANDLING

Validate inputs on the server, even if the frontend also validates them.

Use appropriate validation for:

- Required fields.
- Maximum lengths.
- Slugs.
- Dates.
- File uploads.
- Numeric values.
- Email formats where applicable.
- Workflow transitions.
- Role assignments.

Handle database failures, authentication errors and permission denials safely.

Do not expose raw database errors, stack traces or internal infrastructure details to public users.

Provide useful messages without revealing sensitive implementation information.

Prevent accidental duplicate submissions where appropriate.

Use transactions or other consistency mechanisms for operations that modify related records.

---

# 15. SECURITY TESTING

Test the actual access boundaries.

At minimum, verify:

1. A logged-out visitor cannot access protected admin pages.
2. A logged-out visitor cannot call sensitive administrative endpoints.
3. An ordinary authenticated visitor cannot access administrator records.
4. A content administrator cannot perform actions reserved for a super administrator.
5. A content administrator cannot bypass impact approval.
6. Public queries return only approved published content.
7. Private enquiries are not publicly accessible.
8. Internal notes are not included in public responses.
9. A user cannot promote themselves by changing client-side data.
10. Storage permissions prevent unauthorised access to private media.
11. Invalid data is rejected server-side.
12. Revoked access is enforced according to the session policy.

Do not mark a security test as passed unless it was actually executed.

---

# 16. ENVIRONMENT AND CONFIGURATION

Document the required environment variables.

Provide a safe example configuration file containing placeholder values only.

Explain:

- Which variables are public.
- Which variables must remain server-only.
- How to configure local development.
- How to apply migrations.
- How to provision the initial administrator.
- How to configure storage.
- How to configure the production environment.

Never commit actual secrets.

Never expose a service-role key through a public environment variable.

If external credentials are missing, implement the appropriate integration points and report the missing setup requirements.

---

# 17. TESTING REQUIREMENTS

After implementation:

- Run the application build.
- Run TypeScript checks.
- Run linting.
- Run unit tests where applicable.
- Run existing end-to-end tests.
- Test administrator login and logout.
- Test protected route access.
- Test CRUD operations.
- Test draft and publication workflows.
- Test impact approval.
- Test enquiry status changes.
- Test media upload permissions.
- Test database policies with different user roles.
- Test public content rendering.
- Inspect browser console and network errors.
- Verify responsive dashboard layouts.
- Confirm Phase 3 public pages remain functional.

Use a local or staging environment for integration tests.

Do not run destructive tests against production records.

Do not claim success if credentials, migrations or integrations prevented a test from running.

Fix confirmed defects and rerun the affected checks.

---

# 18. IMPLEMENTATION ORDER

Execute the work in controlled batches.

Batch 1: Database review, schema design and migrations.

Batch 2: Authentication, administrator provisioning and access controls.

Batch 3: Dashboard shell, navigation and overview.

Batch 4: Programme, page, story and event management.

Batch 5: Impact metric approval and publication workflow.

Batch 6: Enquiry management.

Batch 7: Media management and secure storage policies.

Batch 8: Connect the public website to approved database content.

Batch 9: Security testing, regression testing and documentation.

After each batch, validate the implementation before proceeding.

Do not generate the entire backend and dashboard in one uncontrolled operation.

---

# 19. PHASE 4 DEFINITION OF DONE

Phase 4 is complete only when:

- The database schema is documented and version-controlled.
- Migrations can be applied safely.
- Administrator authentication works.
- Sensitive routes and operations are protected server-side.
- Role permissions are enforced.
- Database access policies have been tested.
- Dashboard data comes from actual database records.
- Content-management operations persist correctly.
- Drafts are separated from published content.
- Impact metrics require appropriate approval.
- Enquiries are stored and protected.
- Media access follows the intended privacy model.
- Public pages only retrieve approved public content.
- Empty, loading, error and success states work.
- The build and relevant automated tests pass, or blockers are documented.
- Deployment configuration is documented.
- No production secrets are exposed.
- No fake dashboard data is presented as actual organisational data.

---

# 20. FINAL EXECUTION INSTRUCTION

Start by inspecting the existing repository and Phase 1–3 documentation.

Implement Phase 4 as an extension of the existing application.

Do not rebuild the public website.

Do not enable real donation payments in this phase.

Do not fabricate organisational records or impact data.

Do not modify production databases or live deployment settings without explicit approval.

At completion, report:

1. Database tables and migrations created.
2. Authentication and roles implemented.
3. Admin modules completed.
4. Public content integrations completed.
5. Security policies implemented.
6. Tests actually executed and their results.
7. Known limitations and outstanding configuration.
8. Whether the application is ready for Phase 5.

Stop after Phase 4 and wait for approval before proceeding.