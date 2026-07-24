# EY India AI Tax Hub — Design Reference
> **Always read this before writing any UI code.**  
> Full spec: `EY-India-AI-Tax-Hub-Design-System.md` · DS Version: Motif DS 4.17

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Page heading (h1) | EYInterstate | 700 | 32px |
| Section heading (h2) | EYInterstate | 700 | 28px |
| Card heading (h3) | EYInterstate | 700 | 22px |
| Body text | EYInterstate | 300 | 16px |
| Labels / buttons / nav | EYInterstate | 400 | 14px |
| Micro labels / timestamps | EYInterstate | 400 | 12px |
| Eyebrow / uppercase tags | EYInterstate | 700 | 10–11px + letter-spacing |

**Only 3 weights are allowed:** `300` (light), `400` (regular), `700` (bold).  
Never use `500`, `600`, or arbitrary weights.

Font files live in `src/assets/Fonts/` and are loaded via `@font-face` in `src/styles/motif-ds.css`.

---

## Core Colour Tokens

Always use `var(--token)` — never raw hex in style props or Tailwind colour utilities.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `#F9F9FA` | Page canvas (light) · `#2E2E38` (dark) |
| `--foreground` | `#2E2E38` | Primary text, primary button bg |
| `--muted-foreground` | `#656579` | Secondary text, disabled, icons |
| `--card` | `#FFFFFF` | Cards, modals, drawers |
| `--border` | `#E6E6E9` | Card outlines, dividers |
| `--border-header` | `#C3C3CB` | Card header separator (darker) |
| `--accent` | `#0F69AE` | Links, focus rings, interactive |
| `--ey-yellow` | `#FFE600` | Brand marker (see rules below) |
| `--destructive-foreground` | `#C70117` | Error text |
| `--elevation-sm` | (shadow) | Cards, dropdowns |

### EY Yellow Rules
`#FFE600` is **only** for:
- Vertical accent bars on `PageHeader` / section headers (3px wide)
- Active tab underline indicator
- `info-alt` badge background
- CTA primary buttons on dark backgrounds

**Never** use it for body text, card backgrounds, or decorative fills.

---

## Brand Accents (per section / agent)

| Agent / Section | Accent Colour | Hex |
|-----------------|--------------|-----|
| Research Assistant | EY Blue | `#0F69AE` |
| Data Assistant | EY Purple | `#6B2D8B` |
| Assessment Assistant | EY Teal | `#007A73` |
| Leaderboard / People | EY Gold | `#B8960C` |
| Resources | EY Teal | `#007A73` |
| Help | EY Blue | `#0F69AE` |

---

## Page Layout Pattern

Every inner page follows:

```
[Dark hero banner — 260px]
  • background: rgba(46,46,56,0.82) solid overlay on top of themed bg image
  • EY Yellow eyebrow pill + white h1 + 3px accent bar at bottom
  • No fading/gradient edges — hard clean bottom

[Content section — background: #F5F5F5]
  • White (#FFFFFF) cards with 1px #E5E5E5 border + 3px coloured top bar
  • box-shadow: 0 2px 8px rgba(0,0,0,0.04)
  • border-radius: 4px
```

---

## Card Anatomy

```
DSCard  (border: 1px --border, radius: 8px, bg: --card)
  └─ DSCardHeader  (padding: 20px 24px, border-bottom: --border-header)
  └─ DSCardBody    (padding: 20px 24px, gap: 16px)
  └─ DSCardFooter  (padding: 16px 24px, border-top: --border)  ← optional
```

---

## Status → Chip / Badge Mapping

| State | Chip variant | Colour |
|-------|-------------|--------|
| Active / Compliant | `success` | `#197335` on `#E7FCE8` |
| Pending / At Risk | `warning` | `#975100` on `#FCF5F0` |
| Overdue / Critical | `critical` | `#C70117` on `#FCF5F3` |
| In Progress / Info | `info` | `#0F69AE` on `#F4F7FC` |
| AI / Highlight | `info-alt` | `#2E2E38` on `#FFE600` |
| Archived / Inactive | `disabled` | `#9897A6` |

---

## Button Variants

| Variant | Use |
|---------|-----|
| `default` | Primary CTA — dark charcoal bg, white text |
| `yellow` | Primary on dark backgrounds — EY Yellow bg, dark text |
| `outline` | Secondary — transparent bg, `--border-button` border |
| `ghost` | Tertiary — no border, hover shows `--muted` bg |
| `destructive` | Destructive actions — critical red |
| `link` | Inline text links |

All buttons: **EYInterstate Regular**, `4px` border-radius.

---

## Dark Mode

Apply `className="dark"` to any ancestor. Key inversions:
- `--background` → `#2E2E38`
- `--foreground` → `#F9F9FA`
- `--card` → `#2E2E38`
- `--border` → `#656579`

The `<Header>` component always runs in `.dark` context.

---

## Project File Map

| Path | What lives here |
|------|----------------|
| `src/styles/motif-ds.css` | All CSS tokens + `@font-face` declarations |
| `src/assets/Fonts/` | EYInterstate TTF files (Light, Regular, Bold + Italics) |
| `src/assets/` | EY.png logo + hero / card background images |
| `src/app/components/ds-cards.tsx` | 10 layout atoms (DSCard, MetricCard, Chip…) |
| `src/app/components/motif-ds.tsx` | 26 interactive patterns (Tabs, Table, Modal…) |
| `src/app/components/ui/button.tsx` | Button primitive |
| `src/app/data/toolsConfig.tsx` | Agent definitions — add new agents here |
| `src/app/pages/DashboardPage.tsx` | Landing page (hero + agent cards) |
| `src/app/pages/ToolHubPage.tsx` | Agent workspace (hero + tool grid) |

---

## Hard Rules (Never Break)

1. **No raw hex in style props** — always `var(--token-name)`.
2. **No Tailwind colour classes** — no `bg-blue-500`, `text-gray-800`, etc.
3. **Always declare `fontFamily`** on text nodes — never rely on inheritance.
4. **Three font weights only** — 300 / 400 / 700.
5. **No global state outside Zustand store** (`lib/store.ts`).
6. **Use `react-router`**, not `react-router-dom`.
7. **No fading gradients** on section edges — use hard clean borders.
8. **EY Yellow is a marker, not a fill** — see rules above.

---

*Last updated: April 28, 2026 · Refer to `EY-India-AI-Tax-Hub-Design-System.md` for full component API.*
