# Bookshop by the Sea — Website Design Specification

> Reference: [Pressed Books & Coffee](https://www.pressedbooksandcoffee.com/)  
> Purpose: a responsive first website concept inspired by the reference site's visual rhythm and layout, without reproducing its brand assets or content.

## 1. Design direction

### Concept

**A quiet neighborhood bookshop by the sea.** The page should feel spacious, calm, and welcoming: large editorial photography, restrained typography, deep navy surfaces, and generous breathing room. Books, coffee, people, and the coastal setting are the visual focus.

### Keywords

- warm, local, literary
- coastal but not nautical-themed
- editorial photography
- calm contrast and generous whitespace
- simple, squared UI rather than rounded app-style UI

### Reference-site characteristics

The reference currently uses:

- a compact brand/navigation header and a separate mobile-order CTA
- a full-width photographic hero with a centered white logo/title and short statement
- alternating image-and-copy sections
- large, centered section headings
- a multi-item menu gallery
- event cards with image, date, venue, and CTA
- large photographic CTAs for book ordering and private events
- long-form inquiry forms and a newsletter footer
- a dark navy-and-white palette and lightweight geometric sans-serif typography

For this project, preserve that hierarchy and pacing while replacing all identity, copy, images, and details with Bookshop by the Sea material.

## 2. Page structure

```text
Announcement bar
Header / global navigation
Hero image + centered brand statement
Introduction / story
Visit information + supporting photo
Featured books or café menu gallery
Upcoming events
Two editorial CTA panels
Newsletter signup
Footer
```

### 2.1 Announcement bar

- One short operational message only: opening update, event notice, or shipping information.
- Desktop height: 36–40px. Mobile height: content-driven, minimum 40px.
- Deep navy background with white 12–13px text.
- Text centered; link is underlined and keyboard-focusable.

### 2.2 Header

- Desktop: logo left, navigation centered/right, primary CTA at far right.
- Suggested navigation: `About`, `Books`, `Coffee`, `Events`, `Visit`.
- Primary CTA: `Shop books` or `Order coffee`.
- Header height: 80–92px; max inner width: 1200px.
- Background: white. Use a 1px bottom rule instead of a shadow.
- Mobile: 64–72px, logo left and menu icon right. Primary links open in a full-width drawer.
- Sticky behavior is optional for the first implementation; if used, keep the announcement bar non-sticky.

### 2.3 Hero

- Full-bleed environmental photograph of the shop, shelves, or sea-facing interior.
- Desktop height: `min(78vh, 820px)`, minimum 600px.
- Mobile height: 68–74svh, minimum 520px.
- Apply a navy overlay at 28–38% to ensure readable white text.
- Content centered both horizontally and vertically:
  - small eyebrow: location or category
  - logo/wordmark or H1
  - one-sentence value statement, maximum two lines
  - optional single outline CTA
- Desktop H1: 56–72px. Mobile H1: 38–46px.

### 2.4 Introduction

- Desktop: two-column 5:7 layout, vertically centered.
- Left: heading and short body copy, with one text link or outlined button.
- Right: one large 3:2 photograph, or two staggered photographs if suitable assets exist.
- Section width: 1120–1200px. Vertical padding: 112–144px.
- Mobile: single column; image follows copy. Vertical padding: 72–88px.
- Keep body copy to 3–4 short paragraphs; max text width 52ch.

### 2.5 Visit section

- Full-width navy section with white content.
- Desktop: image and information in equal columns. Reverse the introduction section's image position to create rhythm.
- Show address, contact information, and hours as distinct groups.
- Use an oversized heading (`Visit us`) and a small outlined `Get directions` CTA.
- Mobile: image first, then information; avoid putting body text over the image.

### 2.6 Featured collection

- Heading centered with a short supporting sentence.
- Desktop grid: 3 columns; tablet: 2; mobile: horizontal snap carousel or 1 column.
- Card image ratio: 4:5 for books, 1:1 for menu items. Do not mix ratios within one grid.
- Card content: title, short descriptor/author, optional price, one text link.
- Cards have no drop shadow. Separation comes from image, whitespace, and a subtle rule.
- Section CTA appears above the grid on desktop and below it on mobile.

### 2.7 Upcoming events

- Off-white background to distinguish it from the featured collection.
- Desktop: 2 event cards side by side. Mobile: stacked cards.
- Each card contains a 16:10 image, date eyebrow, title, location, and `View event` CTA.
- Date and action should remain visible even when the description is omitted.
- Entire card may be clickable, but keep a visible text link for accessibility.

### 2.8 Editorial CTAs

- Two large photographic panels: e.g. `Order books` and `Host an event`.
- Desktop: side by side, each at least 440px tall. Mobile: stacked, each 360–420px tall.
- Use a consistent dark overlay and centered white copy.
- Limit each panel to one heading, one sentence, and one CTA.

### 2.9 Newsletter and footer

- Newsletter: navy background, centered heading, one-line supporting copy, email field, and submit button.
- Desktop form is inline and no wider than 640px; mobile form stacks.
- Footer: logo, address/hours, compact navigation, Instagram link, and legal line.
- Do not repeat long blocks of information already shown above; use concise summaries.

## 3. Visual system

### 3.1 Color

The reference site's embedded theme exposes deep blue values including `#0D2130` and `#0E2E47`, pale blue-gray `#9DB1BF`, and white. Use the following implementation palette:

| Token | Value | Usage |
|---|---:|---|
| `--color-ink` | `#0D2130` | primary text, dark sections, overlays |
| `--color-ink-2` | `#0E2E47` | hover/secondary dark surface |
| `--color-sea` | `#58758C` | subdued accent, small labels |
| `--color-mist` | `#D1D9DC` | borders and quiet separators |
| `--color-paper` | `#F5F3EE` | warm alternate section background |
| `--color-white` | `#FFFFFF` | base surface and inverse text |
| `--color-text-muted` | `#596368` | secondary body copy on light surfaces |

- Keep navy and white dominant; the sea blue is an accent, not a large background.
- Minimum text contrast: WCAG AA. Never place text directly on a busy image without an overlay.
- Do not use gradients, except an optional subtle image legibility overlay.

### 3.2 Typography

The reference uses Futura/DIN/Avenir-style lightweight sans-serif faces. For an accessible web implementation:

- Display and UI: `Futura`, `Avenir Next`, `Montserrat`, sans-serif.
- Body: `Avenir Next`, `Helvetica Neue`, Arial, sans-serif.
- If a Korean typeface is required, use `Pretendard` first and match the same weights.
- Keep weights mostly 300–500; reserve 600–700 for buttons and critical headings.

| Style | Desktop | Mobile | Line height |
|---|---:|---:|---:|
| Hero title | 64px | 42px | 1.05 |
| Section title | 48–56px | 34–40px | 1.1 |
| Card title | 22–24px | 20–22px | 1.25 |
| Lead copy | 18–20px | 17–18px | 1.65 |
| Body | 16px | 16px | 1.65–1.75 |
| Label/nav | 13–14px | 14px | 1.4 |

- Use sentence case rather than all caps for headings.
- Eyebrows may use uppercase with `0.12em` tracking.
- Keep paragraph measure between 45ch and 65ch.

### 3.3 Spacing and grid

- Base unit: 8px.
- Content max width: 1200px.
- Wide editorial max width: 1440px.
- Desktop gutters: 48–64px; tablet: 32px; mobile: 20px.
- Section spacing: 120px desktop, 88px tablet, 72px mobile.
- Grid: 12 columns desktop, 8 tablet, 4 mobile; 24–32px gaps.
- Avoid more than three cards per row to preserve the reference's spacious rhythm.

### 3.4 Shape, borders, and elevation

- Border radius: `0–2px`; photography may use no radius.
- Border: 1px solid `--color-mist`.
- Buttons and form controls are rectangular, 48–52px high.
- Avoid card shadows. Header may use a 1px border when sticky.
- Focus ring: 2px solid `--color-sea` with 2px offset.

### 3.5 Buttons

- Primary: navy fill, white text; hover uses `--color-ink-2`.
- Inverse: transparent, 1px white border, white text; hover becomes white with navy text.
- Text link: navy text with a persistent or hover underline.
- Horizontal padding: 24–30px. Minimum touch target: 44×44px.
- Transition: color/background/border, 180–240ms ease.

### 3.6 Photography

- Prefer natural light, warm wood, tactile paper, coffee preparation, and candid human moments.
- Add one or two coastal cues through light, horizon color, windows, or texture; avoid shells, anchors, and overt maritime motifs.
- Use muted, cohesive color grading with moderate contrast and natural skin tones.
- Avoid stock imagery with staged laptop/coffee compositions.
- Provide purposeful `alt` text; decorative images use empty alt text.

## 4. Responsive behavior

### Breakpoints

```css
/* Mobile-first */
@media (min-width: 768px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* wide desktop */ }
```

### Mobile rules (0–767px)

- Convert all split sections to a single column.
- Preserve meaningful reading order: heading/copy before supporting imagery, except Visit where image may lead.
- Replace full navigation with a menu drawer.
- Use 20px page gutters and 72px section spacing.
- Keep important CTAs full width only when adjacent controls would become cramped.
- Avoid text-over-image outside the hero and editorial CTA panels.
- Horizontal card carousel is acceptable only for the featured collection; events should stack.

### Tablet rules (768–1023px)

- Use 32px gutters and 88px section spacing.
- Keep split layouts only when each column remains at least 320px wide.
- Featured cards use two columns.
- Header may retain desktop navigation only if every link fits without wrapping.

### Desktop rules (1024px+)

- Use full navigation and two-column editorial sections.
- Constrain content to 1200px while allowing hero and dark bands to be full bleed.
- Use 3-column featured grids and 2-column event grids.
- Image crops should use `object-fit: cover` with intentional focal points.

## 5. Interaction and motion

- Motion should be quiet: 180–300ms fades and slight image scale (`1` to `1.02`) on hover.
- Do not animate every section on scroll in the first version.
- Respect `prefers-reduced-motion` by removing nonessential transforms.
- Menu drawer traps focus, closes with Escape, and returns focus to the trigger.
- Forms show labels above fields; placeholder text never replaces a label.
- Validation messages appear directly below their field and are announced to assistive technology.

## 6. Content constraints for the first draft

- One clear H1 only.
- Hero statement: maximum 120 characters.
- Introduction: maximum 350 characters per language.
- Featured collection: 3–6 items.
- Upcoming events: 2–4 events.
- Use one primary CTA per section.
- Real business details should replace placeholders before launch.

## 7. Implementation acceptance criteria

- Layout remains usable at 320px, 768px, 1024px, and 1440px widths.
- No horizontal overflow at any target width.
- Navigation is keyboard accessible on desktop and mobile.
- All text over photography meets AA contrast through overlay/crop adjustments.
- Images reserve their aspect ratio to prevent layout shift.
- Headings follow a logical H1 → H2 → H3 order.
- Buttons and links have visible hover and focus states.
- The first screen communicates the place, offering, and primary action within five seconds.

## 8. Deliberate differences from the reference

- Use a shorter homepage and move long private-event/local-author forms to dedicated pages or dialogs.
- Avoid repeating hours and contact blocks in multiple sections.
- Replace platform-specific visual artifacts with a consistent token-based system.
- Keep the reference's editorial pacing and navy/white mood, but use original brand assets, copy, imagery, and coastal character.

