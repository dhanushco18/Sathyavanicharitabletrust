# PHASE 2 MASTER PROMPT — UI/UX DESIGN SYSTEM & VISUAL PROTOTYPE
## Project: Sathiyavani Charitable Trust

### ROLE

Act as a Principal Product Designer, Senior UI/UX Architect, Design Systems Engineer, Accessibility Specialist and Senior Frontend Developer.

Your task is to transform the approved Phase 1 project blueprint into a distinctive, polished, high-quality visual experience for Sathiyavani Charitable Trust.

The website must communicate trust, compassion, dignity, transparency and measurable social impact.

Do not create a generic NGO template. Design a purposeful digital experience that feels professionally art-directed, thoughtfully structured and easy to use.

---

# 1. READ PHASE 1 DOCUMENTATION FIRST

Before modifying the code, inspect and read the relevant Phase 1 documents, including:

- PROJECT_AUDIT.md
- REFERENCE_WEBSITE_AUDIT.md
- USER_PERSONAS_AND_JOURNEYS.md
- SITEMAP_AND_PAGE_SPECIFICATIONS.md
- UI_UX_DESIGN_SPECIFICATION.md
- FUNCTIONAL_REQUIREMENTS.md
- TECHNICAL_ARCHITECTURE.md
- DATABASE_AND_PERMISSIONS.md
- SECURITY_AND_PRIVACY_PLAN.md
- SEO_ACCESSIBILITY_PERFORMANCE_PLAN.md
- TESTING_AND_DEPLOYMENT_PLAN.md
- IMPLEMENTATION_ROADMAP.md
- OPEN_QUESTIONS_AND_RISKS.md

Use the actual filenames and locations found in the repository if they differ.

Extract the approved design decisions, brand requirements, technical constraints, page structure and unresolved questions.

Do not blindly overwrite Phase 1 decisions.

If a major design decision conflicts with the requirements, explain the conflict and propose a resolution before making a substantial change.

If Phase 1 was not completed, stop and explain what is missing rather than inventing approved decisions.

---

# 2. PHASE 2 OBJECTIVE

Create and validate a reusable design system and implement an initial, production-quality visual prototype consisting of:

1. The homepage.
2. One representative programme detail page, preferably Education.
3. The shared header and navigation.
4. The shared footer.
5. The shared UI component library.
6. Responsive mobile and desktop layouts.
7. Reusable visual patterns for the remaining page types.

Do not implement every public page in this phase.

Do not build the full administration dashboard or payment integration.

The goal is to approve the visual language, layout patterns, interaction principles and code structure before scaling the design across the entire website.

---

# 3. DESIGN DIRECTION

Create a refined, human-centred, editorial-style nonprofit website.

The experience should feel:

- Authentic rather than artificial.
- Warm without being overly decorative.
- Professional without feeling corporate or cold.
- Emotionally engaging without manipulative storytelling.
- Modern without unnecessary visual effects.
- Trustworthy without making unsupported claims.
- Accessible and comfortable to use on mobile devices.

Use clear typography, generous whitespace, strong photography, meaningful section hierarchy, restrained colour and purposeful interaction.

Avoid:

- Generic AI-generated landing page patterns.
- Excessive gradients.
- Random decorative blobs.
- Excessive glassmorphism.
- Too many floating cards.
- Overloaded navigation.
- Excessive animation.
- Repetitive section layouts.
- Fake testimonials.
- Fabricated impact figures.
- Stock photographs presented as actual trust activities.
- Large paragraphs that make the website difficult to scan.
- Buttons that look interactive but do nothing.

Every design decision must serve usability, clarity or the organisation's identity.

---

# 4. BRAND AND VISUAL IDENTITY

Inspect existing logos, assets, colour choices and typography before defining the final system.

Create a documented visual identity with:

## Colour tokens

Define semantic tokens for:

- Primary brand colour.
- Secondary brand colour.
- Accent colour.
- Main page background.
- Alternate section background.
- Main text.
- Secondary text.
- Borders.
- Interactive states.
- Success.
- Warning.
- Error.
- Focus indicators.

Choose colours appropriate for a charitable organisation and ensure that text and controls meet WCAG 2.2 AA contrast requirements.

Do not use colour alone to convey important meaning.

## Typography

Define:

- Display typography.
- Page title typography.
- Section heading typography.
- Body text.
- Supporting text.
- Labels.
- Button text.
- Caption styles.

Choose readable fonts with appropriate language support, reliable loading behaviour and suitable fallbacks.

Use a consistent type scale and responsive font sizing.

## Spacing and layout

Establish:

- A consistent spacing scale.
- Content container widths.
- Responsive page gutters.
- Grid behaviour.
- Section spacing.
- Card spacing.
- Image ratios.
- Border radius.
- Shadow tokens.

Document the design tokens in a maintainable file using the conventions of the existing stack.

Do not scatter arbitrary colour and spacing values throughout the codebase.

---

# 5. SHARED COMPONENT SYSTEM

Build reusable, accessible components for:

- Site header.
- Desktop navigation.
- Mobile navigation.
- Primary and secondary buttons.
- Text links.
- Page headings.
- Breadcrumbs.
- Programme cards.
- Story cards.
- Event cards.
- Impact metric cards.
- Image and caption blocks.
- Call-to-action sections.
- Form field styles.
- Badges.
- Dividers.
- Footer.
- Loading states.
- Empty states.
- Error messages.
- Success messages.

Each component must have a clear purpose and consistent behaviour.

Use existing accessible component libraries if already installed and appropriate.

Do not install additional dependencies without a reason.

Avoid creating overly generic components that become difficult to maintain.

Keep component APIs simple and type-safe.

---

# 6. HOMEPAGE VISUAL BLUEPRINT

Implement the homepage in the following order, adjusting it only when the approved Phase 1 specification justifies a better sequence.

## Section A — Header

Create a clean, responsive header containing:

- Approved organisation logo or a carefully styled wordmark.
- Primary navigation.
- Programmes navigation.
- About and impact links.
- Contact access.
- A prominent Support Our Work action.

Requirements:

- Clear visual hierarchy.
- Accessible dropdown behaviour if dropdowns are used.
- Functional mobile navigation.
- Visible keyboard focus.
- Appropriate sticky behaviour only if it improves usability.
- No layout shift when menus open.

Use the actual organisation name accurately.

## Section B — Hero

Create a visually distinctive hero with:

- A meaningful mission-led headline.
- A short supporting statement.
- One primary action: Explore Our Work.
- One secondary action: Get Involved.
- Authentic, approved photography where available.

The headline must communicate the mission without unsupported superlatives.

Use an intentional layout rather than a generic centred-text template.

Ensure the hero remains clear on narrow screens.

Use appropriate image overlays only when required for readability.

Do not invent beneficiary counts, achievements or emotional testimonials.

If suitable photographs are missing, create a replaceable image slot and document the required asset.

## Section C — Introduction

Explain what the trust does, who its programmes serve and why the work matters.

Use concise copy, clear hierarchy and a link to About the Trust.

Do not reproduce long sections of text directly from the existing website without checking their accuracy and suitability.

## Section D — Programmes

Design a consistent card system for:

- Education.
- Child Development.
- Community Outreach.
- Festival Support.
- Environmental Initiatives.

Each card should include:

- A suitable image or illustration.
- Programme title.
- Concise, meaningful description.
- Clear link to the programme.

Use imagery that matches the programme.

Do not imply that placeholder images depict actual trust events.

Ensure cards have consistent alignment, sensible text lengths and comfortable touch targets.

## Section E — Impact

Create a visually compelling but evidence-conscious impact section.

Do not display invented metrics.

Do not hardcode unverified beneficiary totals.

Use approved values only if the Phase 1 evidence and approval requirements are satisfied.

If data is unavailable, render an honest, designed empty state or an explanatory introduction to the impact-reporting approach.

Do not display zero merely because data is missing.

Do not fabricate counters or animate numbers towards unsupported values.

## Section F — Founder Story

Introduce Mr. Raghu N. using verified and approved biographical information.

Use a balanced editorial layout with appropriate photography if available.

Provide a clear route to the full story.

Avoid exaggerated claims or unverified achievements.

## Section G — Stories and Activities

Design a reusable visual pattern for activity updates and community stories.

Support meaningful titles, dates and captions when verified.

Use appropriate image ratios and consistent spacing.

Do not create fake stories or fake publication dates to fill the design.

If no real content exists, show a clearly identified empty state.

## Section H — Get Involved

Create a clear set of actions for:

- Volunteering.
- Sponsoring a student.
- Supporting a programme.
- Corporate and institutional partnerships.

Make the choices understandable without overwhelming visitors.

Do not introduce a real donation checkout in this phase.

## Section I — Trust and Transparency

Create a restrained section that can later display verified organisational details and available reports.

Do not invent registration numbers, tax approvals, audited results or partnership credentials.

If supporting documents are unavailable, design the component so it can be populated after verification.

## Section J — Footer

Include:

- Organisation name.
- Approved short description.
- Primary navigation links.
- Programme links.
- Get-involved links.
- Verified contact details where approved.
- Privacy and terms links when those pages exist.
- Social links only when their destinations have been confirmed.

Avoid a crowded footer.

---

# 7. REPRESENTATIVE PROGRAMME PAGE — EDUCATION

Implement one complete representative programme page using the same design system.

Use this page to establish the template for other programmes.

Recommended sections:

1. Breadcrumb navigation.
2. Programme hero.
3. Concise introduction.
4. The educational need addressed.
5. Who the programme serves.
6. How the programme operates.
7. Authentic activity gallery where available.
8. Approved outcomes or an honest data-unavailable state.
9. Related activities and reports.
10. Relevant get-involved action.
11. Footer.

Do not invent eligibility rules, teaching schedules, programme locations, costs, student counts or outcomes.

Use content that has been verified or clearly label provisional copy for review.

The layout should be adaptable to other programmes without forcing every programme into identical content.

---

# 8. RESPONSIVE DESIGN REQUIREMENTS

Implement and inspect the layouts at representative viewport widths:

- 360px.
- 390px.
- 768px.
- 1024px.
- 1440px.

Test the actual rendered application.

Check:

- Header behaviour.
- Mobile navigation.
- Heading wrapping.
- Image cropping.
- Card stacking.
- Section spacing.
- Text readability.
- Button sizing.
- Horizontal overflow.
- Footer stacking.
- Touch-target usability.

Do not merely rely on CSS breakpoints without browser verification.

The mobile experience must be intentionally designed, not treated as a reduced desktop version.

---

# 9. INTERACTION DESIGN

Implement the interactions required for the prototype:

- Navigation links.
- Mobile menu open and close.
- Dropdowns, if used.
- Button and link hover states.
- Keyboard focus states.
- Appropriate active navigation state.
- Accessible motion and transitions.
- Image presentation behaviour where useful.

Use animation sparingly.

Respect the user's reduced-motion preference.

Avoid unnecessary scroll-triggered effects, heavy parallax and animation that delays access to content.

Every visible control must have a meaningful action.

Do not implement fake form submission or fake donation confirmation.

If a feature belongs to a later phase, clearly indicate that it is not yet implemented rather than pretending it works.

---

# 10. ACCESSIBILITY REQUIREMENTS

Target WCAG 2.2 AA.

Implement:

- Semantic HTML.
- Logical heading hierarchy.
- Accessible navigation.
- Keyboard-operable menus.
- Visible focus indicators.
- Adequate colour contrast.
- Descriptive link labels.
- Appropriate image alternative text.
- Reduced-motion support.
- Accessible button states.
- Readable line lengths.
- Responsive text sizing.
- Proper labels for any prototype form fields.

Do not add redundant ARIA attributes when native HTML semantics already provide the required behaviour.

Run available accessibility checks and manually inspect important interactions.

Report the checks actually performed.

---

# 11. IMPLEMENTATION RULES

Before writing code:

1. Confirm the Phase 1 plan has been reviewed.
2. Inspect the existing component and styling conventions.
3. Identify which files need to be created or modified.
4. Create a Git checkpoint or safe backup where available.
5. Define a short implementation sequence.

During implementation:

- Preserve the existing stack unless a justified change is approved.
- Use TypeScript correctly if the project uses TypeScript.
- Keep components reusable.
- Keep page-specific logic separate from shared presentation components.
- Avoid unnecessary dependencies.
- Avoid duplicating large blocks of markup.
- Use the project's existing package manager.
- Do not overwrite environment configuration.
- Do not commit secrets.
- Do not create a second application inside the existing application.
- Do not implement the entire remaining sitemap.

Create only the homepage, one representative programme page and their necessary shared components.

---

# 12. IMAGE AND ASSET REQUIREMENTS

Inspect the available image assets before sourcing or generating new ones.

Prioritise:

1. Approved photographs from the organisation.
2. Existing authorised brand assets.
3. Appropriately licensed contextual imagery.
4. Clearly replaceable placeholders.

Maintain consistent image ratios and cropping.

Provide useful alternative text for meaningful images and empty alternative text for purely decorative images.

Optimise image sizes and avoid unnecessary full-resolution assets.

Do not use unlicensed photographs.

Do not claim that generated or stock images depict real beneficiaries or trust events.

Create an asset inventory and list the authentic photographs or logos still required from the organisation.

---

# 13. PERFORMANCE REQUIREMENTS

Use the rendering and image-loading strategy appropriate for the chosen framework.

Avoid:

- Unnecessary client-side JavaScript.
- Excessive animation libraries.
- Unoptimised large images.
- Layout shifts.
- Unnecessary network requests.
- Duplicate font downloads.
- Excessive component dependencies.

Measure performance using available tools.

Target good Core Web Vitals, but do not claim scores that have not been measured.

---

# 14. VALIDATION AND ACCEPTANCE TESTS

After implementation:

1. Run the project using the existing development workflow.
2. Run the build and type checks where available.
3. Run linting.
4. Open the homepage in the browser.
5. Open the education programme page.
6. Inspect all target viewport widths.
7. Test every navigation item.
8. Test the mobile menu using mouse and keyboard.
9. Inspect image loading and alternative text.
10. Check for console errors and broken assets.
11. Check for horizontal overflow.
12. Run the available accessibility checks.
13. Verify that no unapproved impact figures are displayed.
14. Verify that no visible control pretends to provide functionality that does not exist.

Fix confirmed issues and rerun the relevant checks.

If a test cannot be performed, explain why.

---

# 15. PHASE 2 DELIVERABLES

Produce:

1. A documented design system.
2. Reusable UI components.
3. A responsive homepage.
4. A responsive education programme page.
5. Shared header and footer.
6. A responsive behaviour specification.
7. An asset inventory and missing-assets list.
8. Updated project documentation describing the implemented components.
9. A list of design decisions and outstanding questions.
10. A test report with actual results.

Keep the code aligned with the approved Phase 1 architecture.

---

# 16. DEFINITION OF DONE

Phase 2 is complete only when:

- The design system is consistent.
- The homepage is visually polished.
- The education page demonstrates a reusable programme template.
- Desktop and mobile layouts have been inspected.
- Navigation and implemented interactions work.
- Accessibility considerations are implemented and checked.
- No unverified impact statistics are presented as facts.
- The project builds successfully, or any existing build blocker is explicitly documented.
- Relevant automated checks have been run.
- The remaining pages can be implemented using the approved design patterns without redesigning the entire system.

A visually attractive screenshot alone is not sufficient.

The result must be a working, maintainable frontend prototype.

---

# 17. EXECUTION INSTRUCTION

Begin by reading the Phase 1 documentation and inspecting the existing code.

Then implement Phase 2 in small, reviewable steps.

Use the browser to inspect the real output, not just the source code.

Do not proceed to the full public website, backend administration, donation processing or production deployment.

At the end, report:

- What was implemented.
- Which files were created or changed.
- What the homepage and programme page now contain.
- Which viewport sizes were tested.
- Which checks passed or failed.
- Which authentic assets are still required.
- What remains incomplete.
- Whether Phase 2 is ready for review.

Stop after Phase 2 and wait for approval before proceeding to Phase 3.