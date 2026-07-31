---
type: page
route: /
source: src/imports/Home2/index.tsx
chrome: SiteHeader hub
description: Hub landing page — hero, three-pillar cards, Tax Labs entry
tags: [page, hub, landing]
---

# Home (`/`)

## Source

`src/imports/Home2/index.tsx` — Figma export, hub home layout.

## Chrome

`<SiteHeader variant="hub" activeSection="home" onNavigate={navigate} />`

## Section anatomy

| Section | Pattern | Surface |
|---------|---------|---------|
| **Hero** | Full-bleed image, dark gradient scrim, yellow display title, white subcopy, yellow CTA pill | Dark |
| **Three-pillar cards** | Three-column grid: yellow title bar, image + line icon overlay, gray body | Neutral/Light |
| **Tax Labs entry** | Card linking to `/phased` | Light |

## Key visual patterns

- **Hero:** Full-bleed Getty stock image → dark gradient scrim → centered `confidentBlack` card with `EYDisplay` title and yellow CTA
- **Pillar cards:** Three-column grid, each card has a yellow top-bar, thumbnail with Lucide stroke icon overlay, body copy in `gray01`
- **Navigation:** All CTAs use `navigate('/phased')` for the Tax Labs entry

## Related

- [[Pages/PhasedEngagement]] — primary destination from this page
- [[Components/SiteHeader]] — hub variant
- [[Patterns/SurfaceRhythm]]
