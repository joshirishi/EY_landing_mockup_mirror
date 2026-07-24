---
name: token-enforcer
description: "Audit any TSX, JSX, or CSS file (or the whole EY Tax Hub codebase) for hardcoded design values — hex colors, rgba strings, Tailwind color utilities, px font sizes — and replace them with the correct EY Motif DS 4.17 CSS custom property tokens. Trigger this skill when someone says 'check my tokens', 'are we using variables', 'token audit', 'design system compliance', 'replace hardcoded colors', 'fix my tokens', 'enforce tokens', 'scan for hardcoded values', or 'are we using CSS variables'. Also run automatically before committing any new UI page or component."
---

# Token Enforcer — EY India AI Tax Hub

Scans TSX/JSX/CSS files for hardcoded design values and produces exact replacement suggestions using EY Motif DS 4.17 tokens defined in `/src/styles/theme.css`.

## EY Token Inventory

### Surface & Background Tokens

| Token | Light Value | Use for |
|-------|------------|---------|
| `var(--background)` | `#F9F9FA` | Page canvas |
| `var(--card)` | `#FFFFFF` | Cards, modals, drawers |
| `var(--muted)` | `#F3F3F5` | Disabled bg, hover bg, icon wells |
| `var(--input)` | `#FFFFFF` | Form field backgrounds |
| `var(--sidebar)` | `#FFFFFF` | Sidebar background |
| `var(--popover)` | `#2E2E38` | Tooltip / dropdown bg |

### Text & Foreground Tokens

| Token | Light Value | Use for |
|-------|------------|---------|
| `var(--foreground)` | `#2E2E38` | Primary text, primary button bg |
| `var(--card-foreground)` | `#2E2E38` | Text inside cards |
| `var(--muted-foreground)` | `#656579` | Secondary text, disabled, icons |
| `var(--primary-foreground)` | `#FFFFFF` | Text on primary bg |
| `var(--popover-foreground)` | `#F9F9FA` | Text in tooltips |
| `var(--sidebar-foreground)` | `#2E2E38` | Nav item text |

### Interactive & Brand Tokens

| Token | Light Value | Use for |
|-------|------------|---------|
| `var(--accent)` | `#0F69AE` | Links, focus rings, interactive highlights, accent buttons |
| `var(--accent-foreground)` | `#FFFFFF` | Text on accent bg |
| `var(--primary)` | `#2E2E38` | Primary button bg |
| `var(--ey-yellow)` | `#FFE600` | Brand markers (PageHeader/ZoneHeader bars), tab active indicator |
| `var(--ring)` | `#0F69AE` | Focus ring color |

### Border Tokens

| Token | Light Value | Use for |
|-------|------------|---------|
| `var(--border)` | `#E6E6E9` | Default card borders, dividers |
| `var(--border-header)` | `#C3C3CB` | Card header separator (darker) |
| `var(--border-button)` | `#C3C3CB` | Secondary button border |
| `var(--breadcrumb-separator)` | `#9897A6` | Breadcrumb chevron separator |
| `var(--chip-default-border)` | `#D7D7DC` | Default badge border |

### Radius Tokens

| Token | Value | Use for |
|-------|-------|---------|
| `var(--radius)` | `4px` | Buttons, badges, inputs |
| `var(--radius-card)` | `8px` | Cards, modals |
| `var(--radius-sm)` | `2px` | Smallest rounding |
| `var(--radius-xl)` | `12px` | Largest rounding |

### Status Tokens

| Token | Value | Use for |
|-------|-------|---------|
| `var(--status-critical)` | `#C70117` | Critical text / icon |
| `var(--status-critical-bg)` | `rgba(199,1,23,0.06)` | Critical bg tint |
| `var(--status-warning)` | `#BF9000` | Warning text / icon |
| `var(--status-warning-bg)` | `rgba(191,144,0,0.06)` | Warning bg tint |
| `var(--status-success)` | `#0F69AE` | Success text / icon |
| `var(--status-success-bg)` | `rgba(15,105,174,0.06)` | Success bg tint |
| `var(--destructive-foreground)` | `#C70117` | Error text, destructive CTAs |

### Chip / Badge Color Tokens

| Variant | Background Token | Text Token |
|---------|-----------------|-----------|
| success | `var(--chip-success-bg)` `#E7FCE8` | `var(--chip-success-text)` `#197335` |
| warning | `var(--chip-warning-bg)` `#FCF5F0` | `var(--chip-warning-text)` `#975100` |
| critical | `var(--chip-critical-bg)` `#FCF5F3` | `var(--chip-critical-text)` `#C70117` |
| info | `var(--chip-info-bg)` `#F4F7FC` | `var(--chip-info-text)` `#0F69AE` |
| info-alt | `var(--ey-yellow)` `#FFE600` | `var(--foreground)` |
| accent-1 | `var(--chip-accent1-bg)` | `var(--chip-accent1-text)` |

### Chart Series Tokens

| Token | Value | Use |
|-------|-------|-----|
| `var(--chart-1)` | `#083153` | Primary data series (dark navy) |
| `var(--chart-2)` | `#188CE5` | Secondary series (sky blue) |
| `var(--chart-3)` | `#4A279F` | Tertiary series (purple) |
| `var(--chart-4)` | `#9D7CD4` | Fourth series (lavender) |
| `var(--chart-5)` | `#0B4847` | Fifth series (teal) |

### Typography Tokens

| Token | Value | Use |
|-------|-------|-----|
| `var(--text-h1)` | `32px` | Page headings |
| `var(--text-h2)` | `28px` | Section headings |
| `var(--text-h3)` | `22px` | Card headings, PageHeader |
| `var(--text-h4)` | `18px` | Sub-section headings |
| `var(--text-base)` | `16px` | Body text |
| `var(--text-sm)` | `14px` | Labels, buttons, badges |
| `var(--font-weight-light)` | `300` | Body, descriptions |
| `var(--font-weight-normal)` | `400` | Titles, labels, buttons |
| `var(--font-weight-medium)` | `500` | Emphasis, zone labels |

### Elevation Token

| Token | Value |
|-------|-------|
| `var(--elevation-sm)` | `0px 2px 4px rgba(35,35,47,0.06), 0px 6px 12px rgba(35,35,47,0.08)` |

## Intentional Exceptions (Do NOT Replace)

- `rgba(46,46,56,0.4)` — modal/drawer backdrop (intentional opacity)
- `#EF4444` / `#22C55E` — trend arrows for positive/negative deltas
- SVG `fill` or `stroke` values used for icon rendering (`#fff` inside SVG)
- Values already using `var(--*)` tokens
- Heatmap cell intensities (inline computed background)

## Audit Process

### Step 1 — Discover

Run grep to find violations:
```bash
rg -n --type tsx --type jsx --type css -E "(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|font-size:\s*\d+px|bg-(gray|blue|red|green|yellow|purple)-|text-(gray|blue|red|green|yellow|purple)-)" src/
```

Also flag Tailwind color utilities:
```bash
rg -n "className=.*\"[^\"]*\b(bg|text|border)-(gray|blue|red|green|yellow|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-" src/
```

### Step 2 — Triage

For each match, classify:
- **Tier 1 (Replace now):** Color/value has a direct token mapping (see inventory above)
- **Tier 2 (Replace with brand token):** Color matches a known EY brand value
- **Tier 3 (Intentional exception):** Backdrop, delta arrows, SVG fills — note and skip
- **Tier 4 (Unknown):** Color not in token inventory — surface to user for decision

### Step 3 — Report

| File | Line | Hardcoded Value | Replacement | Tier |
|------|------|-----------------|-------------|------|
| `DigiLiMPage.tsx` | 56 | `#2E2E38` | `var(--foreground)` | 1 |
| `StatCards.tsx` | 88 | `#0F69AE` | `var(--accent)` | 1 |
| `TopBar.tsx` | 122 | `className="bg-gray-100"` | `style={{backgroundColor:"var(--muted)"}}` | 2 |
| `Chart.tsx` | 45 | `#22C55E` | intentional delta arrow | 3 |

### Step 4 — Apply

Apply all Tier 1 and Tier 2 replacements using the Edit tool.
For Tier 4 unknowns, ask the user before replacing.

## Output Format

```
## EY Token Audit Report

**Files scanned:** N
**Violations found:** X (Tier 1: A, Tier 2: B, Tier 3: C intentional, Tier 4: D unknown)

### Tier 1 — Applied ✅
[table of replacements made]

### Tier 2 — Applied ✅
[table of Tailwind utility → CSS var replacements]

### Tier 3 — Intentional (skipped) ℹ️
[list with reason]

### Tier 4 — Needs decision ❓
[list of unknown values requiring user input]

**All replacements applied. Codebase is EY token-compliant.**
```
