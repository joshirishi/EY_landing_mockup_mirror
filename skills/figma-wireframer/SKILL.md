---
name: figma-wireframer
description: "Create Figma wireframes and hi-fi mockups for the EY India AI Tax Hub from a Screen Spec JSON or verbal description. Use this skill whenever someone says 'wireframe this', 'create a Figma mockup', 'design this screen in Figma', 'make a Figma file for this', or when the design-orchestrator or screen-interpreter chains to this skill. Requires Figma MCP tools. Always apply EY Motif DS 4.17 brand tokens (EY Yellow #FFE600, foreground #2E2E38, accent #0F69AE, EYInterstate font)."
---

# Figma Wireframer — EY India AI Tax Hub

Takes a Screen Spec JSON (from screen-interpreter) or verbal description and builds a Figma file using EY Motif DS 4.17 brand tokens.

## Prerequisites

- Figma MCP must be connected with a valid PAT
- Run `whoami` to get the plan key if needed

## Step 1: Create or Open File

```
create_new_file(fileName: "EY Tax Hub — [Screen Name] — Wireframe", planKey: "<plan_key>", editorType: "design")
```

## Step 2: Apply EY Motif DS 4.17 Brand Tokens

Every Figma element must use these exact values:

### Colors

| Role | Value | Token |
|------|-------|-------|
| Page background | `#F9F9FA` | `--background` |
| Card / modal bg | `#FFFFFF` | `--card` |
| Hover / disabled bg | `#F3F3F5` | `--muted` |
| Primary text | `#2E2E38` | `--foreground` |
| Secondary text | `#656579` | `--muted-foreground` |
| EY Blue accent | `#0F69AE` | `--accent` |
| **EY Yellow** | **`#FFE600`** | `--ey-yellow` — brand markers ONLY |
| Card border | `#E6E6E9` | `--border` |
| Header separator | `#C3C3CB` | `--border-header` |
| Sidebar bg | `#FFFFFF` | `--sidebar` |
| Tooltip bg | `#2E2E38` | `--popover` |
| Error / critical | `#C70117` | `--destructive-foreground` |

### Chart Series Colors

| Series | Value |
|--------|-------|
| Primary | `#083153` (dark navy) |
| Secondary | `#188CE5` (sky blue) |
| Tertiary | `#4A279F` (purple) |
| Fourth | `#9D7CD4` (lavender) |
| Fifth | `#0B4847` (teal) |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title | EYInterstate | 22px | 400 |
| Section heading | EYInterstate | 18px | 400 |
| Body / card title | EYInterstate | 16px | 300 |
| Labels / buttons | EYInterstate | 14px | 400 |
| Micro / timestamps | EYInterstate | 12px | 300 |
| Eyebrow labels | EYInterstate | 10px | 400, UPPERCASE |

### Radius & Spacing

| Element | Radius | Padding |
|---------|--------|---------|
| Cards, modals | 8px | Header: 20px 24px, Body: 20px 24px |
| Buttons, badges | 4px | — |
| Chips / pills | 16px | 2px 8px |
| Card footer | 8px | 16px 24px |

### Elevation

- Cards / dropdowns: `0px 2px 4px rgba(35,35,47,0.06), 0px 6px 12px rgba(35,35,47,0.08)`

## Step 3: Build Frame Hierarchy

```javascript
// Main frame — 1440×900 desktop
const mainFrame = figma.createFrame();
mainFrame.name = "DigiLiM+ — Desktop";
mainFrame.resize(1440, 900);
mainFrame.layoutMode = "VERTICAL";
mainFrame.primaryAxisAlignItems = "MIN";
mainFrame.counterAxisAlignItems = "MIN";
mainFrame.fills = [{ type: 'SOLID', color: { r: 0.976, g: 0.976, b: 0.980 } }]; // #F9F9FA
```

## Step 4: Build Each Zone

### PageHeader (mandatory on every page)

```
Frame: horizontal auto-layout, padding 0, gap 16px
  ├── EY Yellow bar: 3px × 24px, radius 2px, fill #FFE600
  ├── Text stack (vertical, gap 4px)
  │     ├── Title: EYInterstate 22px 400 #2E2E38
  │     └── Subtitle: EYInterstate 14px 300 #656579
  └── Action zone: right-aligned buttons
```

### ZoneHeader (dashboard section separators)

```
Frame: horizontal auto-layout, gap 10px, align center
  ├── EY Yellow bar: 3px × 20px, radius 2px, fill #FFE600
  ├── Title: EYInterstate 14px 500 UPPERCASE #2E2E38, letter-spacing 0.04em
  └── Subtitle: EYInterstate 12px 300 #656579
```

### MotifBreadcrumbs

```
Horizontal frame, gap 4px
  Items: EYInterstate 14px 400 #0F69AE (clickable) | 14px 400 #656579 (current)
  Separator: ChevronRight 16px #9897A6
```

### MotifTabs (underline variant — default)

```
Container: border-bottom 1px #E6E6E9
  Tabs: EYInterstate 14px 400
  Active tab: 2px solid #FFE600 bottom border, color #2E2E38
  Inactive tab: color #656579
  Badge: #FFE600 bg when active, min-width 24px, radius 200px
```

### TATCard / MetricCard strip

```
Horizontal frame, gap 16px, each card flex:1
  Each TATCard: 16px padding, 6px radius, 1px #E6E6E9 border
    ├── Label: 10px UPPERCASE #656579, letter-spacing 0.4px
    ├── Value: 24px 400 #2E2E38
    └── Chip: variant bg, 14px 400, 16px pill radius
```

### MotifTable

```
Card frame: #FFFFFF bg, 8px radius, 1px #E6E6E9 border
  Header row: flex between, 16px padding
    ├── Title: 16px 400 #2E2E38
    ├── Description: 14px 400 #656579
    └── Search input: 240px, right-aligned
  Column headers: 12px 16px padding, 14px 400 #656579
  Rows: alternating #FFFFFF / hover #F3F3F5, 1px #E6E6E9 bottom
    Cells: 14px 300 #2E2E38
    Status cells: Chip component
    Assignee cells: MotifAvatarGroup
  Pagination: border-top 1px #E6E6E9, 12px 24px padding
```

### DSCard

```
Frame: #FFFFFF bg, 8px radius, 1px #E6E6E9 border, overflow hidden
  DSCardHeader: 20px 24px padding, border-bottom 1px #C3C3CB
    Title: 16px 400 #2E2E38
    Action zone: right-aligned
  DSCardBody: 20px 24px padding, 16px gap, flex-col
  DSCardFooter: 16px 24px padding, border-top 1px #E6E6E9, flex row, 8px gap
```

### MotifModal

```
Backdrop: rgba(46,46,56,0.4) fullscreen overlay
Panel: centered, #FFFFFF bg, 8px radius
  Header: 20px 24px padding, border-bottom 1px #C3C3CB
  Body: 24px padding, scrollable
  Footer: 16px 24px padding, right-aligned CTAs
Sizes: 400px / 560px / 720px / 960px width
```

## Step 5: Output

Return:
1. **Figma file URL** — link to created file
2. **Component map** — which Figma elements map to which Motif DS components (for react-implementer)

```json
{
  "figmaUrl": "https://www.figma.com/design/...",
  "componentMap": {
    "pageHeader": "PageHeader",
    "breadcrumb": "MotifBreadcrumbs",
    "tabs": "MotifTabs (underline)",
    "kpiRow": "TATCard[]",
    "dataTable": "MotifTable",
    "modals.newCase": "MotifModal (md)"
  }
}
```

## Important Rules

- **EY Yellow (`#FFE600`) is ONLY for:** PageHeader bar, ZoneHeader bar, MotifTabs active indicator, MotifBadge info-alt. Never use as text, bg, or decorative element.
- **Never use Tailwind colors or arbitrary hex** — always match values from the token table above
- **Auto-layout everywhere** — no absolute positioning
- **Name every frame meaningfully** — "PageHeader", "TATCardRow", "CasesTable", "NewCaseModal"
- **Create modals as separate frames** outside the main page frame
- **EYInterstate is the ONLY font** — set explicitly on every text node
