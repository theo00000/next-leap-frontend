]633;E;{   git show HEAD:AGENTS.md\x3b   printf '\\n'\x3b   cat AGENTS.md\x3b } > AGENTS.tmp && mv AGENTS.tmp AGENTS.md;649f01e2-7f78-46b3-9642-39c96b3a9405]633;C<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Next Leap — Frontend Engineering Guidelines

## 1. Project Context

Next Leap is a student opportunity discovery platform developed
for the STACK 2026 hackathon.

The frontend and backend are maintained in separate repositories
and deployed independently.

## 2. Team Ownership

- Project Leader: product requirements, UI/UX, and design.
- Backend Engineer: APIs, database, and business logic.
- Frontend Engineer: UI implementation, interaction, API
  integration, accessibility, testing, and deployment.

Do not invent product requirements or modify approved designs
without coordination.

## 3. Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- npm

Use existing dependencies before introducing new libraries.
Explain the reasoning and trade-offs of additional dependencies.

## 4. Architecture

- Use feature-based modular architecture.
- Keep route composition inside src/app.
- Place shared UI components inside src/components.
- Place domain-specific modules inside src/features.
- Place shared utilities and API infrastructure inside src/lib.
- Prefer Server Components by default.
- Use Client Components when browser APIs, state, or event
  handlers are required.
- Keep authoritative business logic in backend services.

Do not introduce unnecessary abstractions or premature
optimization.

## 5. API Integration

- Follow the API contract agreed with the backend engineer.
- Do not invent undocumented endpoints or response fields.
- Separate API communication from presentation components.
- Handle loading, empty, error, and success states.
- Keep credentials and secrets out of client-side code.
- Clearly distinguish mock data from real API responses.
- Do not bypass backend authentication or authorization.

## 6. UI Implementation

- Treat the approved Figma design as the visual reference.
- Use reusable components and agreed design tokens.
- Ensure responsive layouts.
- Prefer semantic HTML.
- Support keyboard navigation and visible focus states.
- Maintain accessible labels and sufficient color contrast.
- Avoid hardcoded values when an agreed design token exists.

## 7. Code Quality

- Maintain TypeScript strict mode.
- Avoid explicit any unless justified.
- Use descriptive names.
- Prefer small, focused modules.
- Remove unused imports and dead code.
- Use relative imports for nearby modules.
- Use the @/ alias for cross-directory imports.

## 8. Development Workflow

For each implementation increment:

1. Review requirements and relevant existing files.
2. Explain the proposed changes and trade-offs.
3. Define acceptance criteria.
4. Implement the smallest meaningful change.
5. Run relevant quality checks.
6. Report results, limitations, and remaining risks.

Do not modify unrelated files.

## 9. Git Conventions

Use short-lived branches and Conventional Commits.

Branch prefixes:
- feat/
- fix/
- chore/
- refactor/
- test/
- docs/

Do not commit secrets, environment credentials,
or generated build artifacts.

## 10. Definition of Done

An implementation is considered complete when:

- Acceptance criteria are satisfied.
- Relevant functional behavior is verified.
- ESLint passes.
- TypeScript checks pass.
- Production build passes.
- Relevant responsive and accessibility checks pass.
- No unrelated changes are introduced.


## 11. Product Requirements and Design References

### Reference Documents

- Product requirements: `docs/prd/`
- Frontend requirements:
  `docs/prd/PRD-05-frontend-next-leap.md`
- Design specification: `docs/design/DESIGN.md`
- Figma:
  https://www.figma.com/design/HOunyZ78Rk2wdy3w0aLMub/Stack-2026

### Source of Truth

- PRDs define functional requirements and business rules.
- Figma defines visual design and layout.
- DESIGN.md defines frontend design implementation standards.
- API contracts define frontend-backend communication.
- AGENTS.md defines engineering conventions.

Report conflicts between these references before making
decisions that affect product behavior or approved designs.

### Implementation Rules

Before implementing a feature:

1. Read PRD-05 and the relevant feature-specific PRD.
2. Read DESIGN.md.
3. Inspect the corresponding Figma frame.
4. Inspect existing components and implementation.
5. Identify acceptance criteria and unresolved decisions.

During implementation:

- Use semantic design tokens from globals.css.
- Reuse shared UI primitives and existing components.
- Reuse OpportunityCard across student pages and operation previews.
- Follow mobile-first and accessibility requirements.
- Implement relevant loading, empty, error, and success states.
- Do not invent undocumented requirements or API contracts.
- Treat Proposed and TBD decisions as provisional.
- Do not introduce unsupported claims or fabricated metrics.
- Do not modify product requirements or approved designs
  without authorization from the Project Leader.

If a required reference is unavailable, report the limitation
and proceed only with clearly supported requirements.


## 12. Testing and Verification

Use the existing Vitest and React Testing Library infrastructure.

- Test user-visible behavior rather than implementation details.
- Prefer accessible queries such as getByRole and getByLabelText.
- Test critical form validation and interaction states.
- Cover relevant loading, empty, error, and success states.
- Test shared components and pure utility functions.
- Keep tests deterministic and independent.
- Do not access production APIs from automated unit tests.
- Clearly identify mock data and fixtures.

Run the relevant verification commands:

- npm run test
- npm run lint
- npm run typecheck
- npm run build
- git diff --check

Do not claim that a check passed unless it was actually executed
successfully.

