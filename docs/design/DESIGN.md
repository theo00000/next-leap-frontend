# Next Leap — Frontend Design Specification

- Project: STACK 2026
- Version: 0.1
- Status: Derived Draft — Pending Design Approval
- Date: 2026-11-28
- Design owner: Project Leader; implementation owner: Frontend Engineer

## 1. References and authority

This is a derived implementation guide, not the original Stitch DESIGN.md or approved brand guidelines. Sources: `../prd/PRD-01-login-operation.md` through `../prd/PRD-05-frontend-next-leap.md`, all v2.0 draft; primarily PRD-05 §§4–12. Figma: https://www.figma.com/design/HOunyZ78Rk2wdy3w0aLMub/Stack-2026?node-id=0-1 . Frame IDs below are from the previous handoff inventory; pixel-level inspection is pending.

**Specified** means documented in the draft PRD, not final approval. **Proposed** means an implementation recommendation. **TBD** means unresolved. PRD governs behavior; Figma governs visual composition subject to approved PRD decisions. Report conflicts to the Project Leader. Do not invent API fields, product rules, or brand assets. PRD-00 and official brand guidelines are missing.

## 2. Design principles (Specified)

- Mobile first; keep deadlines visible without extra clicks.
- Honest personalization: explain which profile parameters support a match.
- Never present closed or unpublished opportunities as available.
- Indonesian copy with “kamu”; established terms such as Top Picks and early bird are acceptable.
- Light theme only. Preserve clarity over decoration.

## 3. Color system

Specified values from PRD-05 §12; semantic CSS names are Proposed and align with the frontend token plan.

| CSS token | Hex | Usage |
|---|---|---|
| `--primary` | #FFA500 | Primary CTA, active chips, headline accent |
| `--primary-foreground` | #101828 | Text on orange |
| `--primary-shadow` | #B36D00 | Primary button offset shadow (V4 pending) |
| `--secondary` | #0057FF | Competition label, logo, secondary button (V3 pending) |
| `--secondary-foreground` | #FFFFFF | Text on blue |
| `--aqua` | #00B5D8 | Upskilling label; dark text |
| `--background`, `--surface` | #FFFFFF | Page and card |
| `--surface-hero` | #F8FBFF | Hero |
| `--border` | #EBF2FF | Card border, hero grid |
| `--input-border` | #E2E8F0 | Input border |
| `--foreground` | #101828 | Main text |
| `--muted-foreground` | #555555 | Metadata, closed pill background |
| `--danger` | #FB2C36 | Deadline pill, error accent |
| `--match-surface` | #FFEFD7 | Match explanation |
| `--focus-ring` | #0057FF | Keyboard outline |

Headline uses dark text with one orange keyword; paragraphs remain unaccented. Orange and aqua surfaces use dark text. Accessibility exceptions require review (see §9). Do not introduce gradients or additional brand colors without evidence.

## 4. Typography (Specified in draft; V1 TBD)

| Role | Font | Size | Weight |
|---|---|---|---|
| Hero | Space Grotesk | 64px desktop / 36px mobile | 700 |
| Section | Space Grotesk | 36px desktop / 28px mobile | 700 |
| Card title | Space Grotesk | 22–24px | 600 |
| Body | Plus Jakarta Sans | 20px; card 16px | 400 |
| Eyebrow | Plus Jakarta Sans | 12–13px uppercase | 600–700 |
| Button | Plus Jakarta Sans | 16px | 700 |
| Badge | Plus Jakarta Sans | 12–13px | 600 |

Google Fonts for the above pair; Chillax/Synonym via Fontshare if approved instead. Proposed: map `--font-heading` and `--font-sans` to loaded fonts, use existing Geist only as temporary fallback. Line heights and letter spacing TBD; avoid claiming exact Figma values.

## 5. Spacing, layout and responsive behavior

Specified: base spacing 8px; mobile margin 16px, tablet 32px, desktop 64px; maximum width 1280px. Radius: primary button 12px, secondary/input 8px, card/modal 16px, poster 12px, pills fully rounded. No card shadow. Floating filters and modals only: `0 8px 24px -4px rgba(16,24,40,0.08)`.

Proposed: Tailwind default breakpoints md=768px and lg=1024px as initial implementation thresholds; 1/2/3 card columns where content fits. Stack operation form and preview on narrow screens; retain both actions. Use responsive navigation preserving access to all items. Test 320, 375, 768, 1024, 1280 and 1440px. Exact grid, navigation collapse, max-width interpretation and mobile designs require approval. No page-level horizontal overflow; tables and filter strips may scroll locally.

## 6. Shared components

| Component | Specification |
|---|---|
| Primary button | Orange/dark text; 12px radius; `0 4px 0 0 #B36D00`; pressed moves down 4px and removes shadow (V4 pending) |
| Secondary button | White, 2px blue border, blue text, 8px radius; offset shadow color TBD (V3/V4) |
| Input | 48px high, 8px radius, 1px #E2E8F0 border; focused 2px orange border; error below with warning icon |
| Badge | Fully rounded; category colors below; text conveys status |
| Modal | 16px radius, floating shadow; proposed focus management and Escape handling |
| OpportunityCard | White, 1px #EBF2FF border, 16px radius and padding; no shadow |

### OpportunityCard (PRD-05 §§6–7)

- Poster: fixed aspect ratio TBD (V5); provisional 4:5 based on PRD-02–04 upload requirements, not a final card ratio. Placeholder when missing.
- Top-left category pill: Lomba blue/white, Beasiswa orange/dark, Upskilling aqua/dark.
- Top-right deadline pill: “Sisa X Hari” when fewer than 7 days remain, red/white per PRD; closed uses gray and “Sudah Tutup”. Exact normal deadline placement TBD; keep deadline visible.
- Title at most two lines; organizer in secondary text; bookmark always visible, at least 40px target.
- Show applicable price, struck-through regular price and early bird discount; zero cost is “Gratis”. Never fabricate pricing or apply price to unrelated fields.
- Top Picks only: match explanation on #FFEFD7, dark text, icon and actual profile parameters. L1 unresolved.
- Preview in Operation uses the same card presentation as student pages. Proposed: shared component with typed view model; preview tolerates incomplete fields and has no live student actions. Do not publish draft data.

## 7. Screen specifications and Figma references

Base URL: https://www.figma.com/design/HOunyZ78Rk2wdy3w0aLMub/Stack-2026 ; append `?node-id=` with the hyphenated ID. IDs are prior handoff references, not freshly verified visual measurements.

| Screen | Node | Requirements |
|---|---|---|
| Jelajahi | 1-1369 | PRD-05 §5.4: hero, login CTA, latest mixed opportunities, category links |
| Top Picks | 1-860 | §5.3: greeting, profile summary/completion, filters, personalized cards, saved opportunities |
| Login Mahasiswa | 1-1706 | §5.1: Google/Apple, legal links, back to Jelajahi |
| Onboarding | 1-1815 | §5.2: academic data, interests, opportunity types, progress, save/skip actions; CV scope pending |
| Login Operation | 1-1298 | PRD-01: username/email, password visibility, remember me, generic error, student login link; reset flow outside v1 |
| Input Lomba | 1-318 | PRD-02: category form, draft/publish, live preview |
| Input Beasiswa | 1-620 | PRD-03: scholarship form; add opening date missing in design |
| Input Upskilling | 1-2 | PRD-04: event form; add event date and conditional location/link |
| Dashboard Operation | 1-3463 | PRD-05 §8.1: 30-day metrics, queue, priority list; engagement conditional on tracking |
| Kelola Data Peluang | 1-2465 | §8.3: summary, search, filters, sort, selection, actions, export |
| Audit Trail | 1-2109 | §8.4: time, operator, action, entity, summary; S1 pending |
| Detail Log Perubahan | 1-2939 | §8.4: before/after values |

Additional PRD screens without separate frames identified in prior inventory: category listings, opportunity detail, saved opportunities, profile. Request designs or approve proposed layouts before visual sign-off.

Student header: logo left, four navigation items center (Jelajahi or Top Picks, Competition, Scholarship, Upskilling), guest Masuk/Daftar right or authenticated avatar menu (Profil, Peluang tersimpan, Keluar). Operation navigation: Dashboard, Input Peluang, Kelola Data Peluang, Audit Trail (scope pending); no Master Operation or account management menus.

Category filters: Competition — subcategory/theme/deadline; Scholarship — type/deadline; Upskilling — type/format/competency/date/deadline. Combine filters without full reload; mobile sticky horizontal strip, active chip dark/white or orange outline (choice TBD). Default nearest deadline; closed hidden by default.

Detail: breadcrumb/back, poster and status, title/organizer/verified badge, applicable price and summary, qualification check (guest login prompt), timeline, applicable information tabs, mobile fixed action bar (white at 80% opacity with blur; blur strength TBD). Keep content clear of fixed bar. Saved items use PRD labels Siap daftar, Kurang dokumen, Kurang kriteria, Tenggat dekat; precedence/unknown state TBD.

Operation forms: category selection controls fields; use relevant PRD field tables, not inferred Figma placeholders. Poster JPG/PNG 4:5 recommended 1080×1350; 5MB limit proposed in PRD-02 and repeated in PRD-03/04; show ratio status. Draft may be incomplete; publish validates required fields. Review workflow R4 TBD. Delete requires confirmation; hide is reversible. Never simulate verified publication as real.

## 8. Interaction states (Proposed unless specified)

- Buttons: default, hover, keyboard focus, pressed, disabled, pending; prevent duplicate submission. Keep labels readable and layout stable.
- Forms: default, focus, filled, invalid, disabled; persistent labels, inline errors associated with fields; preserve values on failure.
- Lists: loading, empty, no filter matches, error/retry, success. Never substitute fake counts for loading or unavailable data.
- Bookmark: saved/unsaved/pending/error; accessible name and state. Guest action follows approved auth flow.
- Show verification only from verified data. Remove unsupported “No. 1”, “200+”, SIAK-NG verification, or unsubstantiated discounts. No live-sync claim without capability.

## 9. Accessibility

Specified: touch targets >=40px, preferably 48px; keyboard outline 2px blue with 2px offset; dark text on orange/aqua. Proposed QA: WCAG AA contrast (4.5:1 normal text, 3:1 large text); test orange eyebrow on white, red/white deadline pill and red error text, and pale input borders. These combinations may fail applicable contrast thresholds; do not silently change brand colors. Request approved darker text/background variants where needed. Use semantic headings, explicit labels, alt text for meaningful images, keyboard-operable controls, focus management, status announcements, reduced-motion support. Do not rely on color alone.

## 10. Implementation guidance (Proposed)

- Tailwind v4 semantic tokens in `src/app/globals.css` via `@theme inline`; no repeated hex values in feature components.
- Root layout handles language (`id`), metadata and fonts; separate student and operation layouts.
- Shared primitives in `src/components/ui`; domain card in `src/features/opportunities`; API infrastructure in `src/lib/api`.
- Use Server Components by default; client components for interactive controls. No new dependencies without justification. Backend owns authorization, matching and publication truth.
- Read AGENTS.md and local Next.js documentation before coding. Implement small increments, verify tests/lint/build/typecheck and inspect visual states against the corresponding Figma frame.
- Mock fixtures must be labeled and separated from real API data. Do not claim pixel-perfect fidelity without screenshots and comparison.

## 11. Open decisions and blockers

| Item | Status / required decision |
|---|---|
| PRD-00 / original DESIGN.md / brand guidelines | Missing; reconcile when available |
| V1 | Font pair |
| V3/V4 | Secondary button treatment and offset shadow |
| V5 | Card poster ratio |
| L1 | Match explanation discrepancy |
| R4 / S1 / S3–S5 | Review workflow, audit scope, category definitions |
| Navigation | Top Picks/Jelajahi routing, saved navigation, Tier 1 Priority |
| Mobile | Missing separate visual references; breakpoints/grid proposed |
| Assets | Approved logo, favicon, icons and posters pending inspection |
| Accessibility | Contrast variants and final component states |
| API | Auth, matching, publication and status contracts pending |
| CV | Consent and v1 scope pending; automated analysis outside v1 |

## 12. Design acceptance checklist

- [ ] Project Leader reviews this derived draft and resolves relevant TBDs.
- [ ] Tokens and fonts match approved references.
- [ ] Shared card and operation preview match for equivalent data.
- [ ] Deadlines, closed status, pricing and verified badges reflect real data.
- [ ] Guest/student/operation navigation matches access requirements.
- [ ] Loading, empty, error, pending and success states verified.
- [ ] Responsive and keyboard checks completed; contrast issues resolved.
- [ ] Visual comparison against actual Figma frames completed.
- [ ] `npm run test`, `npm run lint`, `npm run build`, `npm run typecheck`, `git diff --check` pass.

No production code or original PRD is modified by this document.
