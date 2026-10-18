# PHASE 3 MASTER PROMPT — COMPLETE PUBLIC WEBSITE IMPLEMENTATION
## Project: Sathiyavani Charitable Trust

### YOUR ROLE

Act as a Principal Frontend Architect, Senior Next.js Engineer, Product Designer, Accessibility Specialist, SEO Engineer and QA Engineer.

Your responsibility is to transform the approved Phase 2 prototype into a complete, consistent, production-quality public website for Sathiyavani Charitable Trust.

You must preserve the approved design system, visual identity, architecture and reusable components.

Do not create a new application. Do not rebuild the homepage unnecessarily. Extend the existing codebase in a controlled manner.

---

# 1. REQUIRED PRE-IMPLEMENTATION REVIEW

Before writing code:

1. Read the Phase 1 documentation.
2. Inspect the completed Phase 2 implementation.
3. Review the existing route structure and reusable components.
4. Identify which pages and components already exist.
5. Inspect the current build, TypeScript and lint status.
6. Identify incomplete functionality and known defects.
7. Create a file-level implementation plan.
8. Create a Git checkpoint where Git is available.

Use the actual repository structure and filenames rather than assuming that earlier recommendations were implemented exactly as written.

Preserve working functionality and avoid unnecessary dependencies.

If Phase 2 has unresolved build-blocking defects, resolve them before extending the application.

---

# 2. PHASE 3 OBJECTIVE

Implement every approved public-facing route in the Phase 1 sitemap that is not already complete.

The website must provide:

- Consistent design across all pages.
- Responsive desktop, tablet and mobile layouts.
- Meaningful and accurate content.
- Working navigation and calls to action.
- Clear user journeys.
- Reusable content and layout components.
- Accessible interactions.
- SEO-ready page structure.
- Useful loading, empty and error states.
- A clear separation between implemented features and features scheduled for later phases.

This phase focuses on the public frontend and its navigation.

Do not implement the complete database, protected administration system or production donation checkout in this phase unless those capabilities are already implemented and approved.

---

# 3. ROUTES TO IMPLEMENT

Use the approved Phase 1 sitemap as the source of truth.

The following is the proposed route inventory. Adapt it to the actual approved architecture.

## Core organisation pages

- /
- /about
- /founder
- /mission
- /vision

## Programme overview and details

- /programs
- /programs/education
- /programs/child-development
- /programs/community-outreach
- /programs/festival-support
- /programs/environment

If Phase 1 approved retaining the existing legacy route names, such as /education or /community-outreach, preserve those routes or provide appropriate redirects. Avoid duplicate pages that compete for the same content.

## Impact and editorial content

- /impact
- /stories
- /events

If individual story or event detail pages are included in the approved scope, use a consistent route pattern and reusable templates.

## Get-involved pages

- /get-involved
- /volunteer
- /sponsor
- /partnerships
- /contact

## Legal and information pages

- /privacy
- /terms

Implement only routes that are approved and have sufficient content or a clearly defined content requirement.

Do not create empty pages merely to make every URL exist.

---

# 4. SHARED LAYOUT AND NAVIGATION

Use the approved Phase 2 header and footer throughout the public website.

Implement:

- Consistent desktop navigation.
- Accessible mobile navigation.
- Appropriate active navigation states.
- Dropdowns only where they improve usability.
- Clear keyboard interaction.
- Appropriate focus management.
- Working internal links.
- A consistent footer.
- Breadcrumbs where useful.
- A useful not-found page.
- A consistent page-title and introduction pattern.

Verify that every navigation item leads to the correct destination.

Do not use placeholder links such as href="#" for actions that are expected to work.

If an external social profile has not been confirmed, do not invent its URL.

---

# 5. ABOUT THE TRUST PAGE

Build a complete organisation overview containing:

- Organisation introduction.
- Mission and purpose.
- Social problems the trust seeks to address.
- Programme overview.
- Organisational history.
- Approach to community engagement.
- Links to relevant programmes.
- A meaningful get-involved action.

Use verified information from the existing website and the approved Phase 1 content audit.

Distinguish between the beginning of the informal initiative and the formal establishment of the trust if those dates differ.

Do not invent a registered address, registration number, trustee list, awards or legal status.

---

# 6. FOUNDER STORY PAGE

Create an editorial-style page for Mr. Raghu N.

Include:

- Founder introduction.
- Verified biographical information.
- The documented early education initiative.
- A timeline of milestones where dates are supported.
- Approved photographs.
- Links to the trust's programmes.
- A relevant call to action.

Use respectful storytelling without exaggerated claims.

If photographs or milestones are missing, provide a documented content requirement rather than fabricating details.

---

# 7. MISSION AND VISION PAGES

Create concise, readable pages explaining the trust's stated mission and vision.

Each page must:

- Use approved wording or clearly marked copy awaiting approval.
- Explain the purpose in plain language.
- Link to relevant programmes.
- Use consistent visual hierarchy.
- Avoid unsupported promises.
- Avoid duplicating the entire About page.

If combining these pages would produce a clearer user experience, follow the approved Phase 1 sitemap and document the reason.

---

# 8. PROGRAMMES OVERVIEW

Create a central programmes page introducing:

1. Education.
2. Child Development.
3. Community Outreach.
4. Festival Support.
5. Environmental Initiatives.

Use the approved Phase 2 programme-card design.

Each card must include:

- A clear programme name.
- A concise description.
- Appropriate imagery.
- A meaningful link.
- Consistent layout and spacing.

Do not use invented impact numbers or fabricated programme claims.

---

# 9. INDIVIDUAL PROGRAMME PAGES

Implement the following programme pages using reusable templates.

## A. Education

Describe the trust's education-related activities, including tuition support and school-fee assistance where confirmed.

Explain the programme's purpose, intended participants and approach.

Do not invent class schedules, eligibility rules, student counts or educational outcomes.

## B. Child Development

Present confirmed activities relating to sports, arts, celebrations and child development.

Use authorised photographs and clearly explain the actual activities.

Do not publish identifiable children's information without appropriate consent.

## C. Community Outreach

Explain the community support initiatives described by the organisation.

Use careful language when describing assistance for vulnerable communities.

Include verified project information, dates and locations only when available.

## D. Festival Support

Explain the festival support initiative and its intended purpose.

If the Diwali Gift Initiative is featured, use the published annual figures only with an explicit approval workflow or clearly mark them as awaiting verification.

Do not silently replace the homepage's zero counters with the published historical numbers.

Do not imply that 2026 beneficiary totals are known before supporting records have been provided.

## E. Environmental Initiatives

Describe confirmed environmental awareness, clean-up, tree-planting or biodiversity activities.

Any partnership reference must be supported by approved organisational information.

Do not present an unverified partnership as independently established.

### Reusable template requirements

Every programme page should support:

- Breadcrumbs.
- Page hero.
- Programme introduction.
- Purpose and approach.
- Relevant activities.
- Approved media.
- Verified outcomes or an honest empty state.
- Related stories or events.
- Relevant call to action.
- Footer.

Allow programme-specific content to vary naturally.

Do not force identical sections onto every page when they do not apply.

---

# 10. IMPACT PAGE

Build a dedicated impact page that prioritises evidence and transparency.

Support:

- Metric categories.
- Reporting periods.
- Definitions of metrics.
- Approved values.
- Supporting reports or evidence links where available.
- Last-updated information.
- Clear explanations of unavailable data.

Important rules:

- Do not invent beneficiary counts.
- Do not present unverified figures as confirmed.
- Do not equate the number of gift packages with unique beneficiaries.
- Do not aggregate annual totals without a valid counting method.
- Do not create fake counters or animated numbers.
- Do not display zero when the actual value is simply unknown.

If verified metrics are unavailable, present an appropriate explanation and a route to published reports or contact information.

The page must remain visually complete without fabricated statistics.

---

# 11. STORIES AND UPDATES

Build a reusable stories page for verified activities and organisational updates.

Include:

- Clear page introduction.
- Consistent story cards.
- Appropriate image treatment.
- Title and summary.
- Publication date where verified.
- Category or programme association where useful.
- Read-more navigation.
- Pagination or load-more behaviour only when justified.

If story details are available as static content at this stage, use a maintainable content structure that can later be connected to the database.

Do not introduce a fake search function or fake filtering controls.

If there are no approved stories, display a polished empty state instead of invented articles.

---

# 12. EVENTS PAGE

Create an events listing and, where approved, event-detail pages.

Support:

- Event title.
- Event date.
- Location when confirmed.
- Event description.
- Approved photographs.
- Status such as upcoming or completed, derived from valid event dates.
- Relevant programme links.
- Appropriate calls to action.

Do not invent event dates, venues, registration links, partner names or attendance totals.

Past events must be represented accurately.

If an event is still being planned, clearly distinguish it from a confirmed event.

---

# 13. GET INVOLVED PAGE

Create a central page that helps visitors choose how to contribute.

Provide clear pathways for:

- Volunteering.
- Sponsoring a student.
- Supporting a programme.
- Corporate or institutional partnerships.
- General enquiries.

Explain the purpose of each option concisely.

Use meaningful links to the relevant dedicated pages.

Avoid overwhelming visitors with too many competing calls to action.

Do not present a donation checkout as available if payment processing has not been implemented.

---

# 14. VOLUNTEER PAGE

Create a dedicated volunteer information page.

Include:

- The purpose of volunteering.
- Confirmed or proposed volunteering categories.
- What interested volunteers can expect.
- How to enquire or express interest.
- A clear contact route.

If the backend form is scheduled for Phase 5, provide a clearly documented integration point and use an existing verified contact route as a temporary alternative.

Do not display a fake submission-success message.

Do not invent a volunteer application process that the organisation has not approved.

---

# 15. SPONSORSHIP PAGE

Create a page explaining the student sponsorship or programme-support process.

Include:

- The purpose of sponsorship.
- How enquiries are handled.
- What information the trust can provide to interested sponsors.
- Appropriate transparency information.
- A clear enquiry action.

Do not invent sponsorship amounts, student profiles, eligibility criteria, payment details or tax-deductibility claims.

Do not expose private information about children.

Where the process is awaiting organisational approval, clearly document the missing requirements.

---

# 16. PARTNERSHIPS PAGE

Create a professional page for corporate, institutional and community partnerships.

Include:

- Potential partnership areas.
- How organisations can express interest.
- What information is available about the trust.
- A route to request a project brief or supporting documents.
- A clear enquiry action.

Do not claim that the organisation qualifies for CSR funding unless its eligibility has been verified.

Do not invent corporate partners, sponsorship history, certifications or endorsements.

Keep the page credible and suitable for formal enquiries.

---

# 17. CONTACT PAGE

Create a straightforward contact page with:

- Approved organisation contact details.
- A clear explanation of the types of enquiries accepted.
- Relevant links to programmes and support options.
- An accessible contact form only if its submission workflow is implemented.
- Appropriate error and success states.

The existing website publishes the phone number 9841454501. Confirm that the organisation approves continued publication before treating it as a final production contact detail.

Do not invent email addresses, postal addresses, social links or map coordinates.

Do not create a nonfunctional form.

If form persistence belongs to Phase 4 or Phase 5, clearly document the required integration and provide an appropriate alternative contact route.

---

# 18. PRIVACY AND TERMS PAGES

Create page structures for the privacy notice and terms of use based on the actual planned functionality.

Do not make unsupported legal-compliance claims.

The privacy notice must eventually describe the actual information collected, why it is collected, how it is used, relevant providers and the applicable contact or rights process.

The terms page must reflect the real use of the website.

Mark any content requiring organisational or legal review.

Do not claim that placeholder legal text is ready for publication.

---

# 19. CONTENT ARCHITECTURE

Use the most maintainable approach supported by the approved Phase 1 architecture.

For static content, use a clear content structure with typed data and reusable components.

If the project already has a CMS or database integration, preserve and reuse it where appropriate.

Avoid:

- Duplicating page content across multiple files.
- Creating one enormous component for the entire site.
- Hardcoding impact numbers in multiple components.
- Using inconsistent naming conventions.
- Scattering URLs throughout the application.
- Repeating the same generic description on every page.

Where appropriate, prepare reusable data structures for:

- Programmes.
- Stories.
- Events.
- Navigation.
- Approved impact metrics.
- Contact information.

Keep provisional content separate from approved public content.

Do not introduce an unnecessary database or CMS merely to complete the frontend.

---

# 20. DESIGN CONSISTENCY

Use the approved Phase 2 design system for every page.

Preserve:

- Colour tokens.
- Typography.
- Spacing.
- Grid.
- Buttons.
- Cards.
- Header.
- Footer.
- Responsive breakpoints.
- Focus styles.
- Motion preferences.
- Image treatments.

Do not introduce a different visual language for each route.

If a page requires a new component, design it to fit the established system and document the change.

Prioritise consistency without making every page visually identical.

---

# 21. RESPONSIVE BEHAVIOUR

Test representative widths:

- 360px.
- 390px.
- 768px.
- 1024px.
- 1440px.

Verify:

- Header and mobile navigation.
- Hero layout.
- Page headings.
- Programme cards.
- Story and event cards.
- Image cropping.
- Text wrapping.
- Section spacing.
- Buttons and touch targets.
- Footer layout.
- Horizontal overflow.

Inspect actual browser output rather than relying solely on source-code review.

---

# 22. SEO AND ACCESSIBILITY

For each public page:

- Add a unique and descriptive title.
- Add an appropriate meta description.
- Use semantic HTML.
- Maintain a logical heading hierarchy.
- Add descriptive alternative text where appropriate.
- Ensure links have meaningful labels.
- Ensure keyboard navigation works.
- Maintain accessible focus states.
- Respect reduced-motion preferences.
- Add canonical URLs where appropriate.
- Provide relevant Open Graph metadata.
- Ensure the sitemap and robots configuration match the final public routes.

Do not expose unpublished or private admin routes through the public sitemap.

Do not accidentally block public pages from indexing in production.

Do not claim accessibility compliance or SEO performance without testing.

---

# 23. ERROR STATES AND NAVIGATION QUALITY

Implement:

- A useful not-found page.
- Clear internal navigation.
- Appropriate breadcrumbs.
- Meaningful empty states.
- Graceful handling of missing images.
- Clear unavailable-content messaging.
- Consistent page loading behaviour.

If a route is removed or renamed, provide an appropriate redirect where justified.

Do not create links to routes that do not exist.

Do not leave temporary development URLs in production-facing content.

---

# 24. TESTING REQUIREMENTS

After implementation:

1. Run the production build.
2. Run TypeScript checks.
3. Run linting.
4. Run the existing automated tests.
5. Visit every implemented route in a browser.
6. Click every visible navigation link.
7. Test every call to action.
8. Test mobile navigation.
9. Test responsive layouts.
10. Inspect console and network errors.
11. Check for missing images and broken links.
12. Verify metadata.
13. Check that unverified statistics are not published as facts.
14. Verify that forms do not pretend to submit successfully when no submission system exists.
15. Confirm that the Phase 2 homepage and education page still work as expected.

Fix confirmed defects and rerun relevant checks.

If a check cannot be performed, report the limitation.

Do not fabricate test results.

---

# 25. IMPLEMENTATION ORDER

Execute the work in manageable batches:

Batch 1: Shared layout, navigation, route consistency and not-found page.

Batch 2: About, Founder, Mission and Vision pages.

Batch 3: Programmes overview and remaining programme detail pages.

Batch 4: Impact, Stories and Events pages.

Batch 5: Get Involved, Volunteer, Sponsor, Partnerships and Contact pages.

Batch 6: Privacy and Terms page structures.

Batch 7: Cross-route consistency, SEO, accessibility and responsive testing.

After each batch, run relevant checks before moving to the next.

Do not attempt to generate and validate all pages in one uncontrolled operation.

---

# 26. PHASE 3 DEFINITION OF DONE

Phase 3 is complete only when:

- Every approved public route has been implemented.
- Existing Phase 2 pages remain functional.
- All navigation links point to valid destinations.
- All pages use the approved design system.
- Responsive layouts have been inspected.
- Content is accurate or clearly marked as requiring approval.
- No invented impact statistics or organisational claims are published.
- No fake testimonials or partnerships exist.
- Forms and calls to action behave honestly.
- SEO metadata has been added to public pages.
- Accessibility and error states have been reviewed.
- The application builds successfully, or any blocker is documented.
- Relevant automated and browser checks have been executed.
- Remaining backend dependencies are documented for subsequent phases.

---

# 27. FINAL EXECUTION INSTRUCTION

Begin by inspecting the approved Phase 1 documents and current Phase 2 code.

Implement the complete approved public website by extending the existing application.

Use the browser to verify the actual rendered pages.

Do not rebuild the application from scratch.

Do not implement production payments or the complete admin system in this phase.

Do not invent organisational facts.

At the end, provide:

1. All public routes implemented.
2. Files created or modified.
3. Reusable components added.
4. Navigation and interaction results.
5. Responsive viewport results.
6. Build, lint, type and test results.
7. Known defects.
8. Missing content and organisational approvals.
9. Backend features still pending.
10. Readiness assessment for Phase 4.

Stop after Phase 3 and wait for approval before proceeding.