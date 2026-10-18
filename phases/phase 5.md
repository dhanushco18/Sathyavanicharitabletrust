# PHASE 5: PUBLIC WORKFLOWS, EMAIL NOTIFICATIONS, INTEGRATIONS & END-TO-END TESTING

You are acting as a senior full-stack engineer, backend integration specialist, application security engineer, and QA automation engineer.

## PROJECT CONTEXT

Project: Sathiyavani Charitable Trust  
Existing reference website: https://sathiyavanitrust.netlify.app/  
Development environment: Google Antigravity  
Current phase: Phase 5

Phases 1–4 should already contain the project architecture, design system, public pages, database, authentication, administrator dashboard, and enquiry management.

Your responsibility is to connect these existing components into reliable end-to-end workflows for real visitors and authorized administrators.

## CRITICAL RULES

Before changing code:

1. Inspect the entire repository.
2. Read the Phase 1–4 planning documents and implementation reports.
3. Inspect the existing database schema, migrations, authentication, enquiry modules, public forms, environment variables, and deployment configuration.
4. Identify which workflows already work and which are incomplete.
5. Create or update `docs/phase-5-implementation-plan.md`.
6. Preserve the existing architecture, design system, public routes, database schema, and working functionality.

Do not rebuild the website from scratch.

Do not create duplicate enquiry tables, duplicate authentication systems, or parallel notification systems when suitable Phase 4 implementations already exist.

Use the actual project stack and existing database services. Do not assume that a provider is configured merely because a package is installed.

---

## 1. PUBLIC CONTACT FORM

Implement and verify the existing Contact page form.

Fields should include only the information necessary to respond:

- Full name
- Email address
- Phone number, optional unless genuinely required
- Enquiry category
- Message
- Privacy notice and consent checkbox where appropriate

Requirements:

- Accessible labels and helpful validation messages.
- Client-side validation for usability.
- Independent server-side validation for security.
- Correct email and phone validation without unnecessarily rejecting valid formats.
- Reasonable message-length limits.
- Safe handling of Unicode and Tamil-language text.
- Spam and automated-submission protection.
- Loading, success, and failure states.
- Prevention of accidental repeated submissions.
- Persistent storage through the existing Phase 4 enquiry service.
- Clear confirmation only after the backend confirms that the enquiry was saved.

Never display a success message when persistence fails.

Do not expose database errors, stack traces, internal IDs, or secrets to visitors.

## 2. VOLUNTEER APPLICATION WORKFLOW

Connect the Volunteer page to the existing enquiry management system.

Collect only necessary information, such as:

- Name
- Email
- Phone number, if required for follow-up
- Area of interest
- Availability
- Relevant skills or experience, optional
- Short message
- Consent to be contacted

Allow the trust to configure the available volunteer interest categories through existing content management where practical.

Requirements:

- Validate submissions on the server.
- Store applications using the existing enquiry architecture.
- Clearly identify the enquiry type as volunteer interest.
- Provide a reference number only if the application can generate one reliably.
- Notify authorized trust administrators when configured.
- Display the application's actual submission status.
- Allow authorized administrators to review and update the application status through the existing dashboard.

Do not imply that submitting a form automatically makes someone an approved volunteer.

Do not collect identity documents, financial details, or sensitive information unless a separately approved requirement makes them necessary.

## 3. SPONSORSHIP AND PARTNERSHIP WORKFLOWS

Connect the existing Sponsorship and Partnerships pages to the Phase 4 enquiry system.

### Sponsorship enquiry

Include suitable fields such as:

- Name
- Organization, optional
- Email
- Phone, optional
- Area of interest
- Proposed support type
- Message

### Partnership enquiry

Include suitable fields such as:

- Contact name
- Organization
- Email
- Phone, optional
- Partnership category
- Proposal or message

Requirements for both workflows:

- Reuse shared form components and server-side validation.
- Store submissions securely.
- Assign the correct enquiry category.
- Prevent unauthorized access to submitted information.
- Support enquiry status management in the existing dashboard.
- Provide clear visitor-facing confirmation and error states.
- Notify authorized recipients only when email delivery is configured and verified.

Do not invent sponsorship packages, tax benefits, donation eligibility, official partnerships, or promises that have not been approved by the trust.

## 4. EMAIL NOTIFICATIONS

Integrate a suitable transactional email provider only if the project has a configured provider and valid credentials.

If none exists, implement a provider abstraction and document the exact configuration required. Do not claim that emails are working until delivery has been tested.

### Administrator notification

For a successfully persisted enquiry, send a notification to the configured trust administrator or authorized recipient.

The notification should contain only the information needed to respond. Avoid unnecessary sensitive details.

Include:

- Enquiry category
- Submission time
- Visitor's name
- A secure dashboard link to review the enquiry, if supported

Do not put private enquiry details into a publicly accessible URL.

### Visitor acknowledgement

Send a short acknowledgement after successful persistence and only when the visitor has provided a valid contact address.

The acknowledgement should:

- Confirm that the enquiry was received.
- Explain that the trust will review it.
- Avoid promising an unverified response time.
- Avoid claiming acceptance of a volunteer or sponsorship application.
- Avoid exposing internal administrator details.

### Email reliability

Implement appropriate error handling:

- Record the notification state.
- Distinguish pending, sent, and failed notifications.
- Log minimal diagnostic information without secrets or full sensitive messages.
- Prevent duplicate emails during retries.
- Use idempotent processing or an equivalent reliable mechanism.
- Retry transient failures only under a documented policy.
- Ensure email failures do not silently erase an already saved enquiry.

If practical for the existing architecture, use a notification queue or transactional outbox. Do not introduce unnecessary infrastructure for a small deployment if a simpler reliable solution is sufficient.

Never claim an email was delivered merely because an API request was initiated. Report the provider's actual available delivery status.

## 5. SPAM PROTECTION AND ABUSE PREVENTION

Protect all public submission endpoints.

Implement suitable controls based on the current architecture:

- Server-side rate limiting.
- Honeypot fields or equivalent low-friction spam detection.
- Request size limits.
- Input validation.
- Safe error responses.
- Duplicate-submission protection.
- Appropriate abuse monitoring.

If stronger CAPTCHA or challenge protection is necessary, select a suitable provider and document the required site keys and server-side verification secrets.

Do not expose secret verification keys in browser code.

Do not block legitimate users unnecessarily. Ensure that accessibility and mobile usability are preserved.

Where supported, use request identifiers or idempotency keys to prevent repeated processing.

Apply CSRF protection where relevant to the authentication and request architecture.

Do not treat client-side validation as a security boundary.

## 6. ADMIN DASHBOARD INTEGRATION

Reuse the Phase 4 enquiry management module.

Verify that administrators with appropriate permissions can:

- View incoming enquiries.
- Filter by enquiry category.
- Search and paginate records.
- Update statuses.
- Assign enquiries where supported.
- Record follow-up notes without unnecessarily duplicating personal information.
- Identify notification failures.
- Retry failed notifications if a secure retry mechanism is implemented.
- Distinguish volunteer, sponsorship, partnership, and general contact enquiries.

Apply role-based access control and server-side authorization to all actions.

Do not allow public users to read enquiries, access dashboard data, or change enquiry status.

Avoid adding dashboard features that Phase 4 already implements correctly.

## 7. PRIVACY AND DATA HANDLING

Review the privacy notice and the information collected by all public forms.

Requirements:

- Collect only necessary information.
- Explain the purpose of data collection.
- Explain how visitors can contact the trust regarding their submitted information.
- Do not claim legal compliance or certifications that have not been verified.
- Do not send submitted data to unrelated third-party services.
- Avoid logging personal messages, authentication tokens, or unnecessary contact details.
- Use HTTPS in deployed environments.
- Apply suitable retention and deletion practices based on the trust's approved policy.
- Keep administrator access restricted.
- Avoid collecting children's personal information through general public forms.

If the current Privacy Policy contains unverified claims, flag them for trust approval rather than presenting them as established facts.

## 8. OPTIONAL DONATION PREPARATION — NO LIVE PAYMENTS

Do not activate a live payment gateway during this phase.

First verify the trust's legal and operational requirements, eligible receiving bank account, applicable tax and regulatory conditions, payment-provider eligibility, and explicit authorization from the trust.

Until those prerequisites are confirmed:

- Do not collect card or bank credentials.
- Do not invent UPI IDs, bank account details, QR codes, tax exemptions, or registration numbers.
- Do not show fake payment success screens.
- Do not create a simulated donation transaction that could be mistaken for a real payment.
- Do not claim that a contribution is tax-deductible unless the claim has been verified.

If requested by the existing project scope, prepare a technical document at `docs/future-donation-integration.md` describing the prerequisites, provider selection criteria, payment verification, webhook security, refund handling, reconciliation, and testing requirements.

The public website may display an approved support-us information page or sponsorship enquiry form without processing payments.

## 9. FRONTEND QUALITY AND ACCESSIBILITY

Maintain the design system from Phase 2 and the approved pages from Phase 3.

All forms must:

- Work on desktop, tablet, and mobile.
- Support keyboard navigation.
- Use clear labels and accessible error announcements.
- Preserve user-entered values when appropriate after recoverable errors.
- Prevent accidental double submission.
- Show clear progress indicators.
- Display confirmation only after successful server-side processing.
- Remain visually consistent with the rest of the website.
- Avoid unnecessary animations or intrusive pop-ups.

Verify the header, footer, navigation, contact details, and calls to action across the public routes.

Do not invent contact information or alter the trust's approved identity details without confirmation.

## 10. END-TO-END TESTING

Use the existing test framework. If Playwright is already available, extend the current test suite rather than creating an unrelated testing setup.

Test these complete journeys:

### Journey A: General contact

Visitor opens Contact → enters valid details → submits → enquiry is persisted → confirmation is shown → authorized administrator can view the enquiry.

### Journey B: Volunteer application

Visitor opens Volunteer → submits application → application is persisted under the correct category → administrator can review and update its status.

### Journey C: Sponsorship

Visitor submits a sponsorship enquiry → backend persists it → administrator can access it using appropriate permissions.

### Journey D: Partnership

Visitor submits a partnership proposal → backend persists it → administrator can review it.

### Journey E: Email notifications

Verify configured administrator notifications and visitor acknowledgements in a safe test environment. Test missing credentials, provider errors, retries, and duplicate-submission scenarios.

### Journey F: Security

Verify that:

- Unauthenticated visitors cannot access private enquiries.
- Unauthorized administrators cannot perform restricted actions.
- Invalid requests are rejected.
- Spam controls operate as expected.
- Repeated submissions do not produce duplicate records or emails where idempotency is required.
- Private information does not leak through logs or error messages.
- Production secrets are not included in client-side bundles.

### Journey G: Failure handling

Test database failure, email provider failure, invalid fields, rate-limit responses, network interruption, and expired sessions.

The visitor must receive a truthful status. A failed email must not cause an already saved enquiry to be reported as lost.

Run:

- Production build
- TypeScript checks, where applicable
- Linting
- Relevant unit and integration tests
- End-to-end tests
- Security and dependency checks where available

Report actual results. Do not invent passing test results.

## 11. DEPLOYMENT AND ENVIRONMENT CONFIGURATION

Inspect the actual deployment platform and existing environment configuration.

Update `.env.example` with placeholder names only.

Document:

- Required environment variables.
- Email provider setup.
- Sender-domain verification where required.
- Administrator recipient configuration.
- Rate-limit configuration.
- Local testing instructions.
- Staging deployment procedure.
- Production deployment prerequisites.
- Database migration procedure.
- Troubleshooting instructions.

Never commit actual API keys or secrets.

Use a staging or development environment for integration tests. Do not send unintended real emails to the public or modify production data without approval.

## 12. IMPLEMENTATION SEQUENCE

Complete this work in controlled stages:

1. Inspect Phase 1–4 documentation and the repository.
2. Audit existing forms and enquiry functionality.
3. Finalize the Phase 5 implementation plan.
4. Connect and verify the general contact form.
5. Connect and verify the volunteer form.
6. Connect and verify sponsorship and partnership forms.
7. Configure email notifications where credentials are available.
8. Implement spam protection and duplicate-submission safeguards.
9. Verify dashboard integration and permissions.
10. Review privacy and data handling.
11. Execute end-to-end and failure-path tests.
12. Update documentation and provide an implementation report.

Verify each stage before proceeding.

## 13. DEFINITION OF DONE

Phase 5 is complete when:

- All in-scope public forms are connected to the existing backend.
- Server-side validation is implemented.
- Valid enquiries persist correctly.
- Duplicate submissions are handled appropriately.
- User-facing confirmation reflects actual processing results.
- Administrator access remains protected.
- Email notifications work when configured and tested.
- Notification failures are recorded and handled truthfully.
- Spam protections are implemented and tested.
- Public pages remain responsive and accessible.
- Privacy and security concerns are addressed or explicitly documented.
- Automated tests have actual recorded results.
- Build and lint results are documented.
- Missing external credentials and unresolved limitations are clearly listed.

## FINAL INSTRUCTION

Start by auditing the existing Phase 1–4 implementation. Extend working functionality rather than duplicating it.

Do not start Phase 6.

After implementation, provide a report containing:

1. Public workflows completed.
2. Backend and dashboard integrations completed.
3. Email provider configuration and actual test results.
4. Spam protection and security measures.
5. End-to-end test results.
6. Build, lint, and type-check results.
7. Required environment variables.
8. Features blocked by missing credentials or approvals.
9. Steps for me to test each workflow locally and on staging.

Stop after Phase 5 and wait for my approval before proceeding.