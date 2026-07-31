---
type: reference
source-file: src/DESIGN.md
last-updated: 2026-07-30T00:00:00Z
tags: [design, tokens, components, ey-brand]
---

# EY Design System — Token Reference

Source: `src/DESIGN.md` (canonical) + `src/design-kit/tokens.ts`

> Read `src/DESIGN.md` before writing any UI code.

## Primary Palette (`colors.*`)

| Token | Hex | Role |
|-------|-----|------|
| `yellow` | `#FFE600` | Brand marker / accent only — never body text on white |
| `confidentBlack` | `#1A1A24` | Dark module base / primary text on light |
| `offBlack` | `#2E2E38` | Elevated cards on dark |
| `offWhite` | `#F6F6FA` | Neutral surface / card backgrounds |
| `white` | `#FFFFFF` | Light surface |
| `gray01` | — | Secondary text on light |
| `gray02` | — | Borders |
| `eyebrowGold` | — | Eyebrow labels on light backgrounds |

## Spectrum / Frame Accents

Used for pipeline diagrams, element cards, gradient borders, comparison accents.

`frameOrange · frameRed · frameMagenta · framePurple · frameLime · frameGreen · frameTeal · frameBlue`

Yellow always anchors the start. Helper: `spectrumCss(1–7)` in `tokens.ts`.

## Dark Module Surfaces

| Token | Role |
|-------|------|
| `eyBgBody` / `confidentBlack` | Page base on dark modules |
| `eyBgCard` / `offBlack` | Elevated cards on dark |
| `onDark` / `onDarkMuted` / `onDarkSubtle` | Text hierarchy on dark |
| `surfaceOnDark` / `borderOnDark` | Inner panels and dividers |
| `yellowAlpha10` / `yellowAlpha12` | Soft yellow tints on dark |

## M365 App Colors (CSS only)

`--ey-app-word · --ey-app-excel · --ey-app-ppt · --ey-app-outlook · --ey-app-copilot`

## Typography

Font: **EYInterstate only** — weights **300 / 400 / 700** (never 500 or 600).

| Role | Size | Weight | Component |
|------|------|--------|-----------|
| Display | 64px | 700 | `<EYDisplay>` |
| H1 | 40px | 700 | `<EYHeading level={1}>` |
| H2 | 32px | 700 | `<EYHeading level={2}>` |
| H3 | 20px | 700 | `<EYHeading level={3}>` |
| Subheading | 19px | 400 | `<EYSubheading>` |
| Body | 16px | 300 | `<EYBody>` |
| CTA text | 16px | 700 | `<EYCTA>` |
| Label/eyebrow | 13px | 700 | `<EYEyebrow>` |
| Caption | 12px | 300 | `<EYCaption>` |

## Layout Tokens

| Token | Value | Notes |
|-------|-------|-------|
| `layout.contentWidth` | `min(90%, 1440px)` | Change once in `tokens.ts`; syncs to `--ey-content-width` |
| `spacing.sectionPadding` | `72px` + inline pad | Vertical + sides |
| `spacing.sectionPaddingY` | `72px` | Vertical only |
| `spacing.cardPadding` | `18px` | Card interiors |
| `spacing.navHeight` | `60px` | Navbar reference |

## Component Catalog Quick Reference

| Component | Import | Purpose |
|-----------|--------|---------|
| `EYLogo` | `@/design-kit` | Brand mark — stacked/horizontal/mark-only variants |
| `EYButton` | `@/design-kit` | CTAs — primary/secondary/text; never yellow-filled on light |
| `EYCard` | `@/design-kit` | Insight cards with spectrum frame |
| `EYFrame` | `@/design-kit` | L-shaped signature brand frames |
| `EYTypography` | `@/design-kit` | All type components |
| `SiteHeader` | `@/design-kit` | Hub/learning variant top chrome |
| `ModuleHeader` | `@/design-kit` | Breadcrumb + Learn/Apply tabs |
| `EYWhatsNext` | `@/design-kit` | End-of-module CTA |
| `EYNavbar` | `@/design-kit` | Alternate global nav |
| `EYFooter` | `@/design-kit` | Yellow column headings, spectrum accent line |

See [[Design/design-principles]] for usage rules.
