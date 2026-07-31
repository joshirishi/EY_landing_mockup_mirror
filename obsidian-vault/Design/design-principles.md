---
type: reference
source-file: src/DESIGN.md
last-updated: 2026-07-30T00:00:00Z
tags: [design, principles, ey-brand, do-dont]
---

# EY Design Principles

Source: `src/DESIGN.md` §1 and §10

## Core Principles

| Principle | What it means |
|-----------|---------------|
| **EY brand, not generic AI** | Confident Black, Off Black, Off White, EY Yellow markers, EYInterstate type, Spectrum gradients — not purple/violet "AI SaaS" palettes |
| **Token-first styling** | Colors, spacing, type from `tokens.ts` / `theme.css` — no invented hex in components |
| **Kit before one-offs** | Use `EYButton`, `EYCard`, `EYTypography`, `SiteHeader`, `ModuleHeader` — not ad-hoc styled divs |
| **Full-bleed backgrounds, railed content** | Section backgrounds span viewport; text and cards sit in the shared content rail |
| **Dark/Neutral/Light surface rhythm** | Learning modules alternate surfaces — see Surface Rhythm below |
| **Yellow is a marker** | EY Yellow marks active nav, eyebrows on dark, tab underlines, progress chips — never large fills |
| **Line icons only** | Lucide React stroke icons. No emoji as UI icons |
| **Accessible focus** | Yellow `2px` focus rings on interactive chrome |

## Surface Rhythm (Dark → Neutral → Light)

| Tone | Background | Heading | Body | Eyebrow |
|------|------------|---------|------|---------|
| `dark` | `confidentBlack` | `onDark` | `gray02` | `yellow` |
| `neutral` | `offWhite` | `confidentBlack` | `gray01` | `eyebrowGold` |
| `light` | `white` | `confidentBlack` | `gray01` | `eyebrowGold` |

CSS classes: `.surface-dark`, `.surface-neutral`, `.surface-light`

## EY Yellow Rules

**Only use `#FFE600` for:**
- Active nav underline / tab indicator
- Eyebrows and pills on dark backgrounds
- Progress "you are here" chip
- Vertical accent bars and small markers
- Primary CTA on dark (`EYWhatsNext` button — sanctioned exception)
- Footer column headings

**Never use EY Yellow for:**
- Body text on white/off-white
- Large decorative section fills
- Solid primary buttons on light backgrounds

## Spectrum Gradients

Use for hero top rules, footer accent lines, frame strokes, category color coding — **not** full-page backgrounds.

## Do's and Don'ts Checklist

Before shipping UI:

- [ ] No hardcoded hex/rgba except in `tokens.ts` / `theme.css`
- [ ] No Tailwind color utilities (`bg-blue-*`, `text-gray-*`, `text-[#…]`)
- [ ] Text uses `fonts.*` + `typeScale` or EYTypography components
- [ ] Font weights are **300 / 400 / 700** only
- [ ] Spacing from `spacing.*` or established kit patterns
- [ ] Content uses `contentRailStyle` / `var(--ey-content-width)` — no ad-hoc `maxWidth: 1200`
- [ ] Section backgrounds full-bleed; content railed
- [ ] EY Yellow is marker/accent only
- [ ] Icons are Lucide line strokes — never emoji
- [ ] Dark module sections use `colors.onDark*` / `--ey-on-dark*` hierarchy
- [ ] In-page sections set `scrollMarginTop: SUBNAV_SCROLL_OFFSET` when using ModuleHeader tabs
- [ ] Prefer existing kit components over new one-off patterns

See [[Design/design-system]] for token values and component props.
