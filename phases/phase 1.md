# PHASE 1 MASTER PROMPT — DISCOVERY, RESEARCH & PROJECT ARCHITECTURE
## Project: Sathiyavani Charitable Trust Website

### YOUR ROLE

Act as a Principal Software Architect, Senior UI/UX Designer, Nonprofit Digital Strategist, Full-Stack Engineering Lead, Accessibility Specialist and QA Architect.

Your responsibility in this phase is to investigate, plan and establish a clear technical and design foundation for a premium, production-ready website for Sathiyavani Charitable Trust.

Think like a professional product team building a long-term digital platform, not a developer creating a quick demo.

**IMPORTANT: PHASE 1 IS A DISCOVERY AND PLANNING PHASE. Do not implement the complete website yet.**

---

## 1. PROJECT BACKGROUND

Existing website:
https://sathiyavanitrust.netlify.app/

Organisation: Sathiyavani Charitable Trust

Founder identified on the existing website: Mr. Raghu N.

The existing website describes the following activities:

1. Free education and tuition support.
2. School-fee assistance and student development.
3. Child development, sports, arts and celebrations.
4. Community welfare and assistance for vulnerable communities.
5. Festival support, including the Diwali Gift Initiative.
6. Environmental awareness and tree-planting activities.
7. Volunteer engagement and institutional partnerships.

The current website is a reference for discovery, not an unquestionable source of truth.

Known inconsistency requiring investigation:

The existing homepage displays zero for four impact counters, while the Community Outreach page publishes the following Diwali beneficiary figures:

- 2019: 20
- 2020: 65
- 2021: 200
- 2022: 450
- 2023: 750
- 2024: 1,000
- 2025: 1,500

These figures have not been independently verified. Do not treat them as confirmed organisational records.

The final website must prioritise accuracy, dignity, transparency, usability and professional design.

---

## 2. PRIMARY OBJECTIVE OF PHASE 1

Before writing significant application code, understand the project and produce a complete implementation blueprint covering:

- Existing project and repository audit.
- Existing website content audit.
- User research assumptions and user journeys.
- Information architecture and sitemap.
- UI/UX direction and design system.
- Technical architecture and stack selection.
- Database and content model.
- Functional requirements.
- Administrator requirements.
- Security and privacy requirements.
- SEO and accessibility requirements.
- Testing and deployment strategy.
- Risks, dependencies and unresolved questions.
- Phase-by-phase implementation plan.
- Definition of done and acceptance criteria.

Every decision must have a clear reason.

Avoid unnecessary complexity. Design a solution suitable for an NGO that needs a credible public website and manageable day-to-day administration.

---

## 3. STEP ONE — INSPECT THE EXISTING PROJECT

Start by inspecting the actual workspace.

Determine:

- Whether the repository is empty or contains an existing application.
- Which framework and language are currently being used.
- The existing directory and component structure.
- The installed dependencies and package manager.
- The current routing system.
- Existing reusable components.
- Existing images, logos, fonts and other assets.
- Current backend and database integrations, if any.
- Environment configuration and deployment setup.
- Existing tests, lint rules and build scripts.
- Any known technical debt or incomplete features.

Do not assume that the project uses Next.js or that it needs to be rebuilt.

If working code already exists, preserve it unless a replacement is technically justified.

Do not expose secrets while inspecting configuration files. Never print API keys, passwords, tokens or private environment values in the report.

### Deliverable

Produce a repository audit containing:

1. Current technology stack.
2. Existing architecture.
3. Reusable assets and components.
4. Current functionality.
5. Missing functionality.
6. Technical risks.
7. Recommended changes and their justification.

If the workspace is empty, recommend a clean initial structure without generating the entire application.

---

## 4. STEP TWO — INVESTIGATE THE REFERENCE WEBSITE

Open and inspect the existing website:

https://sathiyavanitrust.netlify.app/

Use the available browser tools to review every accessible page and link.

Inspect these routes where available:

- /
- /about
- /founder
- /mission
- /vision
- /education
- /child-development
- /community-outreach
- /festivals
- /environment
- /get-involved

Discover additional routes through the navigation and internal links.

For every accessible page, record:

- Page title and purpose.
- Main heading and supporting content.
- Calls to action.
- Navigation links.
- Images and visible media.
- Impact claims and statistics.
- Contact details.
- Missing information.
- Content duplication.
- Broken or confusing journeys.
- Opportunities for better presentation.

Inspect desktop and mobile layouts where browser capabilities permit.

Do not claim to have tested mobile responsiveness if you have only inspected a desktop viewport.

Do not invent content for pages that fail to load.

If the website cannot be inspected fully, record the limitation and continue with the available evidence.

### Content accuracy requirements

Explicitly identify:

- The homepage impact-counter inconsistency.
- The difference between the initiative's stated start date and the trust's stated founding date.
- The absence of independent verification for published beneficiary counts.
- Any missing registration, governance, financial or transparency information.
- Any partnership claims that need confirmation.
- Any old copyright dates or potentially outdated event details.

Do not infer that missing information means the organisation is illegitimate.

### Deliverable

Create a page-by-page reference website audit with evidence, observations, recommended changes and unresolved questions.

---

## 5. STEP THREE — IDENTIFY THE USERS

Define the main user groups and their goals.

At minimum, consider:

### A. Public visitors
Want to understand the organisation, its mission, programmes and activities.

### B. Individual donors
Want to know what the organisation does, how contributions are used and how to obtain appropriate acknowledgements.

### C. Corporate and institutional partners
Need reliable organisational information, project proposals, measurable outcomes and relevant supporting documentation.

### D. Volunteers
Want to understand available opportunities and submit an enquiry easily.

### E. Parents, students and community members
Need clear information about relevant programmes and how to contact the organisation.

### F. Organisation administrators
Need to update content, manage events, review enquiries and publish approved impact data without editing source code.

For each user group, define:

- Primary goals.
- Main concerns.
- Required information.
- Expected actions.
- Potential barriers.
- Ideal user journey.
- Relevant accessibility and privacy considerations.

These are initial product assumptions, not verified findings from user interviews.

Identify where actual stakeholder feedback would improve the design.

### Deliverable

Produce a user persona summary, prioritised user needs and user-journey diagrams.

---

## 6. STEP FOUR — CREATE THE INFORMATION ARCHITECTURE

Propose a clean, understandable sitemap.

Evaluate the following initial structure:

Public website:

- Home
- About the Trust
- Founder Story
- Mission and Vision
- Our Programmes
  - Education
  - Child Development
  - Community Outreach
  - Festival Support
  - Environment
- Our Impact
- Stories and Updates
- Events and Activities
- Get Involved
  - Volunteer
  - Sponsor a Student
  - Support a Programme
  - Corporate and Institutional Partnerships
- Contact
- Privacy Policy
- Terms of Use

Administrator area, if justified:

- Admin Login
- Dashboard
- Page and Content Management
- Programme Management
- Stories and Events
- Media Library
- Impact Data and Approval
- Enquiry Management
- Settings

Treat this as a proposal, not a mandatory list.

Combine or remove pages when doing so improves usability. Avoid empty pages and unnecessary navigation items.

For each final route, specify:

- Page objective.
- Target audience.
- Required sections.
- Main call to action.
- Data dependencies.
- Content dependencies.
- SEO purpose.
- Acceptance criteria.

Design a navigation hierarchy that works on mobile and desktop.

### Deliverable

Produce the final sitemap and a page specification table.

---

## 7. STEP FIVE — DEFINE THE UI/UX DESIGN DIRECTION

The design must be distinctive, emotionally meaningful, credible and professional.

Avoid a generic NGO template.

The website should combine human-centred storytelling with transparency and clear evidence of work.

### Design principles

- Human dignity.
- Clarity over decoration.
- Strong visual hierarchy.
- Generous whitespace.
- Authentic photography.
- Consistent typography.
- Restrained animation.
- Accessible contrast.
- Simple navigation.
- Mobile-first layouts.
- Clear and meaningful calls to action.

### Investigate and propose

1. Brand personality.
2. Colour palette and semantic colours.
3. Typography system.
4. Heading and body text scales.
5. Layout grid and container widths.
6. Spacing system.
7. Buttons, forms and links.
8. Cards and programme layouts.
9. Image ratios and treatments.
10. Header and footer design.
11. Mobile navigation.
12. Empty, loading, error and success states.
13. Animation and reduced-motion rules.
14. Accessibility and focus states.

Do not assume that existing brand colours are mandatory. Inspect available logos and branding assets before recommending a palette.

Use authentic organisational photographs where available and authorised.

If real images are unavailable, plan for clearly replaceable, appropriately licensed placeholder imagery.

Never portray a stock photograph as a verified image of the trust's activities.

### Homepage design blueprint

Propose a homepage containing:

1. Header and primary navigation.
2. Mission-driven hero section.
3. Concise introduction to the organisation.
4. Programme cards.
5. Approved impact statistics.
6. Founder story.
7. Authentic activity highlights.
8. Community stories or reports.
9. Ways to get involved.
10. Transparency and organisational information.
11. Footer with verified contact details.

Explain the order of these sections and why it supports the user's journey.

Do not implement the full homepage in this phase.

### Deliverable

Create a written design specification and low-fidelity wireframe descriptions for the homepage, one programme page, impact page, get-involved page and admin dashboard.

If design tools are available, prepare wireframes only after the written structure is clear.

---

## 8. STEP SIX — DEFINE FUNCTIONAL REQUIREMENTS

Create a functional requirements matrix.

Investigate these features:

- Responsive public pages.
- Programmes and programme details.
- Stories and news.
- Events and activity galleries.
- Impact statistics.
- Volunteer enquiries.
- Sponsorship enquiries.
- Corporate partnership enquiries.
- General contact forms.
- Protected administrator login.
- Content publishing and editing.
- Media management.
- Impact metric approval.
- Form submission storage.
- Appropriate notifications.
- Search and filtering where necessary.
- Error handling and confirmation states.

Classify each feature as:

- Required for launch.
- Recommended for launch.
- Future enhancement.
- Not required.

For every required feature, define the expected behaviour and how it will be tested.

A button is not functional merely because it is clickable.

A form is not complete merely because it displays a success message.

A metric is not ready for publication merely because it exists in a database.

### Deliverable

Produce a prioritised feature matrix with acceptance criteria and dependencies.

---

## 9. STEP SEVEN — PLAN THE TECHNICAL ARCHITECTURE

Evaluate the existing stack first.

If a new application is justified, evaluate this proposed stack:

- Next.js with App Router.
- TypeScript.
- Tailwind CSS.
- Accessible reusable UI components.
- Supabase PostgreSQL.
- Supabase Auth for protected administration.
- Supabase Storage for approved media.
- Server-side validation.
- Playwright for end-to-end testing.
- Appropriate unit and component testing.

Consider Netlify or Vercel for hosting after checking the final framework and deployment requirements.

Do not choose a technology simply because it is popular.

Compare the alternatives against:

- Maintainability.
- Development speed.
- Security.
- Operating cost.
- Deployment complexity.
- Database requirements.
- Content-management needs.
- Future scalability.
- The team's ability to maintain the system.

Identify which features can remain static and which require a database.

Avoid microservices, unnecessary state-management libraries, excessive dependencies and complex infrastructure without a justified need.

### Deliverable

Produce an architecture diagram and explain the responsibility of each major component.

Include the proposed directory structure, rendering strategy, data-access boundaries and deployment approach.

---

## 10. STEP EIGHT — DESIGN THE DATA MODEL

If a database is required, propose a minimal relational schema.

Potential entities:

- Administrator profiles and roles.
- Programmes.
- Published content.
- Stories.
- Events.
- Media assets.
- Impact metrics.
- Volunteer enquiries.
- Sponsorship enquiries.
- Partnership enquiries.
- General enquiries.
- Audit events where justified.

For every proposed entity, identify:

- Purpose.
- Required fields.
- Optional fields.
- Relationships.
- Validation constraints.
- Publication status.
- Privacy classification.
- Retention considerations.
- Who can create, read, update or delete the records.

Define how impact figures move from draft to reviewed to approved to published.

Public visitors must never be able to access private enquiries or administrator records.

Use least-privilege database policies and server-side authorisation.

Do not design the schema around unconfirmed business rules. Mark assumptions explicitly.

### Deliverable

Produce a proposed ER diagram, data dictionary, permission matrix and list of unresolved data decisions.

Do not create the production database yet.

---

## 11. STEP NINE — SECURITY, PRIVACY AND SAFEGUARDING

Prepare a security and privacy checklist appropriate for an NGO.

Evaluate:

- Administrator authentication.
- Role-based authorisation.
- Database access controls.
- Row-level security.
- Server-side form validation.
- Spam prevention.
- Rate limiting.
- Secure file uploads.
- Secret management.
- Error logging.
- Dependency maintenance.
- Personal-data minimisation.
- Child safeguarding.
- Consent for photographs and stories.
- Privacy notice requirements.
- Data-retention policies.
- Backup and recovery.

Do not collect unnecessary sensitive information about children or vulnerable beneficiaries.

Do not expose private beneficiary records through public APIs.

Do not assume that a charitable organisation automatically qualifies for tax exemptions or CSR funding.

Do not enable real donations until the legal beneficiary, payment provider, applicable requirements and transaction workflow have been confirmed.

### Deliverable

Produce a threat model, privacy considerations, security controls and launch-blocking risks.

---

## 12. STEP TEN — SEO, PERFORMANCE AND ACCESSIBILITY PLAN

Define an implementation and testing plan for:

### SEO
- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- XML sitemap.
- Robots directives.
- Open Graph metadata.
- Semantic heading structure.
- Descriptive internal links.
- Appropriate structured data.
- Search Console setup.

### Performance
- Responsive image optimisation.
- Font loading.
- Appropriate caching.
- Avoiding unnecessary client-side JavaScript.
- Core Web Vitals measurements.
- Performance checks on mobile.

### Accessibility
- WCAG 2.2 AA as the target.
- Keyboard navigation.
- Visible focus indicators.
- Accessible form labels.
- Error announcements.
- Colour contrast.
- Screen-reader compatibility.
- Descriptive image alternative text.
- Reduced-motion support.
- Responsive text and touch targets.

Do not claim compliance or performance scores without testing the implementation.

### Deliverable

Produce measurable quality targets and a testing checklist.

---

## 13. STEP ELEVEN — TESTING AND DEPLOYMENT STRATEGY

Define how the future implementation will be tested.

Include:

- Build and TypeScript checks.
- Linting.
- Unit tests.
- Component tests.
- End-to-end browser tests.
- Responsive testing.
- Accessibility checks.
- Form submission testing.
- Authentication and authorisation testing.
- Database permission testing.
- Link validation.
- SEO validation.
- Performance measurement.
- Production smoke tests.

Plan the deployment process, environment configuration, database migrations, backups, rollback strategy and post-deployment verification.

Do not deploy to production or modify an existing live deployment during Phase 1.

### Deliverable

Produce a release checklist, test matrix and deployment plan.

---

## 14. STEP TWELVE — PROJECT PLAN AND PRIORITISATION

Divide implementation into the following proposed phases:

Phase 1: Discovery and planning.

Phase 2: Design system and representative page prototypes.

Phase 3: Public website implementation.

Phase 4: Database and administration.

Phase 5: Forms and integrations.

Phase 6: Quality assurance and remediation.

Phase 7: Deployment preparation and launch.

For each future phase, define:

- Objective.
- Tasks.
- Dependencies.
- Expected deliverables.
- Acceptance criteria.
- Testing requirements.
- Risks.
- Completion conditions.

Prioritise the minimum trustworthy and functional launch over unnecessary features.

Identify which tasks can proceed immediately and which require decisions or materials from the trust.

### Deliverable

Produce a milestone-based implementation roadmap and a list of required approvals.

---

## 15. REQUIRED PHASE 1 OUTPUTS

Before declaring Phase 1 complete, produce these documents in a clearly organised project documentation directory, if creating documentation files is safe and appropriate:

1. PROJECT_AUDIT.md
2. REFERENCE_WEBSITE_AUDIT.md
3. USER_PERSONAS_AND_JOURNEYS.md
4. SITEMAP_AND_PAGE_SPECIFICATIONS.md
5. UI_UX_DESIGN_SPECIFICATION.md
6. FUNCTIONAL_REQUIREMENTS.md
7. TECHNICAL_ARCHITECTURE.md
8. DATABASE_AND_PERMISSIONS.md
9. SECURITY_AND_PRIVACY_PLAN.md
10. SEO_ACCESSIBILITY_PERFORMANCE_PLAN.md
11. TESTING_AND_DEPLOYMENT_PLAN.md
12. IMPLEMENTATION_ROADMAP.md
13. OPEN_QUESTIONS_AND_RISKS.md

Keep these documents concise enough to be maintainable but detailed enough to guide implementation.

Avoid duplicating the same information across multiple documents.

If the repository is already structured around another documentation convention, preserve that convention and explain the mapping.

---

## 16. QUALITY STANDARD FOR PHASE 1

Phase 1 is complete only when:

- The existing project has been inspected.
- The accessible reference pages have been reviewed.
- Evidence and assumptions are clearly separated.
- The sitemap is defined.
- Main user journeys are documented.
- The UI/UX direction is documented.
- The technical architecture is justified.
- Functional requirements are prioritised.
- Data models and access controls are proposed.
- Security and privacy risks are identified.
- SEO, accessibility and performance targets are defined.
- Testing and deployment approaches are documented.
- Unresolved organisational questions are listed.
- Future phases have explicit acceptance criteria.

Do not report completion merely because the documents exist. Check that they contain useful, project-specific information.

---

## 17. FINAL EXECUTION INSTRUCTIONS

Begin immediately with repository inspection and reference-site discovery.

Use the available browser and project tools to gather evidence rather than guessing.

If a page, file, service or test is inaccessible, record the limitation instead of inventing a result.

Do not perform destructive changes.

Do not build the entire website in Phase 1.

Do not implement production payment processing.

Do not publish unverified impact figures.

Do not modify live deployment settings.

At the end, provide a concise executive report containing:

1. What was inspected.
2. What was verified.
3. What remains unknown.
4. The proposed architecture.
5. The proposed design direction.
6. The highest-priority risks.
7. The decisions requiring approval.
8. The documents created.
9. The recommended next steps.

**Stop after Phase 1. Wait for approval before starting Phase 2.**