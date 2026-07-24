# EY India AI Tax Hub — Design System
**Motif DS 4.17 · Internal Build Reference**

> All components must exclusively use CSS custom properties from `/src/styles/theme.css`.  
> All typography must use the `EYInterstate` font face from `/src/styles/fonts.css`.  
> No hardcoded Tailwind color utilities. No inline hex values unless aliased through a token.

---

## Table of Contents

1. [Design Tokens](#1-design-tokens)
   - [Color](#11-color-tokens)
   - [Typography](#12-typography)
   - [Spacing & Radius](#13-spacing--radius)
   - [Shadow / Elevation](#14-shadow--elevation)
   - [Status & Semantic Colors](#15-status--semantic-colors)
   - [Chip / Badge Colors](#16-chip--badge-colors)
2. [Dark Mode](#2-dark-mode)
3. [Component Libraries](#3-component-libraries)
4. [ds-cards.tsx — Layout Atoms](#4-ds-cardstsx--layout-atoms)
   - [DSCard](#41-dscard)
   - [DSCardHeader](#42-dscardheader)
   - [DSCardBody](#43-dscardbody)
   - [DSCardFooter](#44-dscardfooter)
   - [MetricCard](#45-metriccard)
   - [TATCard](#46-tatcard)
   - [Chip](#47-chip)
   - [ListRow](#48-listrow)
   - [PageHeader](#49-pageheader)
   - [ZoneHeader](#410-zoneheader)
   - [MetadataRow](#411-metadatarow)
5. [motif-ds.tsx — Interactive Patterns](#5-motif-dstsx--interactive-patterns)
   - [MotifAccordion](#51-motifaccordion)
   - [MotifActivityFeed](#52-motifactivityfeed)
   - [MotifAvatarGroup](#53-motifavatargroup)
   - [MotifAvatarLabelGroup](#54-motifavatar labelgroup)
   - [MotifBadge](#55-motifbadge)
   - [MotifBreadcrumbs](#56-motifbreadcrumbs)
   - [MotifTabs](#57-motiftabs)
   - [MotifToggleGroup](#58-motiftogglegroup)
   - [MotifComplexCard](#59-motifcomplexcard)
   - [MotifAccountCard](#510-motifaccountcard)
   - [MotifChipAlert](#511-motifchipalert)
   - [MotifTag](#512-motiftag)
   - [MotifMetricItem](#513-motifmetricitem)
   - [MotifContentDivider](#514-motifcontentdivider)
   - [MotifContentSwitcher](#515-motifcontentswitcher)
   - [MotifEmptyState](#516-motifemptystate)
   - [MotifFilterPanel](#517-motiffilterpanel)
   - [MotifMenu / Drawer](#518-motifmenu--drawer)
   - [MotifInlineMessage](#519-motifinlinemessage)
   - [MotifModal](#520-motifmodal)
   - [MotifEngagementSwitcher](#521-motifengagementswitcher)
   - [MotifProgressLoader](#522-motifprogressloader)
   - [MotifProgressBar](#523-motifprogressbar)
   - [MotifProgressCircle](#524-motifprogresscircle)
   - [MotifProgressIndicator](#525-motifprogressindicator)
   - [MotifTable](#526-motiftable)
6. [Button CTA Spec](#6-button-cta-spec)
7. [Composition Patterns](#7-composition-patterns)
8. [Key Principles](#8-key-principles)

---

## 1. Design Tokens

All tokens are defined as CSS custom properties in `/src/styles/theme.css` and bridged into Tailwind's `@theme inline` block. Always reference tokens via `var(--token-name)`.

### 1.1 Color Tokens

#### Surface & Background

| Token | Light Value | Role |
|-------|------------|------|
| `--background` | `#F9F9FA` | Page canvas |
| `--card` | `#FFFFFF` | Cards, modals, drawers |
| `--muted` | `#F3F3F5` | Disabled bg, hover bg, icon wells |
| `--input` / `--input-background` | `#FFFFFF` | Form field backgrounds |
| `--sidebar` | `#FFFFFF` | Navigation / sidebar bg |
| `--popover` | `#2E2E38` | Tooltip / dropdown bg |

#### Text & Foreground

| Token | Light Value | Role |
|-------|------------|------|
| `--foreground` | `#2E2E38` | Primary text, primary button bg |
| `--card-foreground` | `#2E2E38` | Text inside cards |
| `--muted-foreground` | `#656579` | Secondary text, disabled, icons |
| `--primary-foreground` | `#FFFFFF` | Text on primary bg |
| `--popover-foreground` | `#F9F9FA` | Text in tooltips/dropdowns |
| `--sidebar-foreground` | `#2E2E38` | Nav item text |

#### Interactive & Brand

| Token | Light Value | Role |
|-------|------------|------|
| `--accent` | `#0F69AE` | Links, focus rings, interactive highlights |
| `--accent-foreground` | `#FFFFFF` | Text on accent bg |
| `--primary` | `#2E2E38` | Primary button bg |
| `--ey-yellow` | `#FFE600` | Brand markers, tab active indicator, zone dividers |
| `--ring` | `#0F69AE` | Focus ring color |

#### Borders & Dividers

| Token | Light Value | Role |
|-------|------------|------|
| `--border` | `#E6E6E9` | Default card borders, dividers |
| `--border-header` | `#C3C3CB` | Card header separator (slightly darker) |
| `--border-button` | `#C3C3CB` | Secondary button border |
| `--breadcrumb-separator` | `#9897A6` | Breadcrumb chevron separator |
| `--chip-default-border` | `#D7D7DC` | "Default" badge border |

#### Destructive

| Token | Light Value | Role |
|-------|------------|------|
| `--destructive-foreground` | `#C70117` | Error text, critical CTAs |

#### Chart Series

| Token | Value | Use |
|-------|-------|-----|
| `--chart-1` | `#083153` | Dark navy — primary data series |
| `--chart-2` | `#188CE5` | Sky blue — secondary series |
| `--chart-3` | `#4A279F` | Purple — tertiary series |
| `--chart-4` | `#9D7CD4` | Lavender — fourth series |
| `--chart-5` | `#0B4847` | Teal green — fifth series |

#### Sidebar-specific (Navigation)

| Token | Light Value |
|-------|------------|
| `--sidebar-primary` | `#2E2E38` |
| `--sidebar-primary-foreground` | `#FFFFFF` |
| `--sidebar-accent` | `#D7D7DC` |
| `--sidebar-accent-foreground` | `#2E2E38` |
| `--sidebar-border` | `#E6E6E9` |
| `--sidebar-ring` | `#7F7F91` |

---

### 1.2 Typography

**Font:** `'EYInterstate', sans-serif` — mapped to Inter via Google Fonts as a brand-approved web fallback.

```css
font-family: 'EYInterstate', sans-serif;
```

#### Font Size Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--text-h1` | `32px` | Page-level headings |
| `--text-h2` | `28px` | Section headings |
| `--text-h3` | `22px` | Card headings, `PageHeader` title |
| `--text-h4` | `18px` | Sub-section headings, `MetricCard` stat labels |
| `--text-base` | `16px` | Body text, card titles, inputs |
| `--text-sm` | `14px` | Labels, buttons, breadcrumbs, badges |
| *(fixed)* | `12px` | Micro labels, timestamps, stat subtitles |
| *(fixed)* | `10px` | Uppercase eyebrow labels (MetricCard, TATCard) |

#### Font Weight Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-light` | `300` | Body paragraphs, descriptions, captions |
| `--font-weight-normal` | `400` | Titles, labels, buttons, interactive elements |
| `--font-weight-medium` | `500` | Emphasis, ZoneHeader titles |

#### Base Typography Defaults (theme.css)

Element defaults applied in `@layer base` when no Tailwind text class is present:

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| `h1` | `--text-h1` (32px) | normal (400) | 1.5 |
| `h2` | `--text-h2` (28px) | normal (400) | 1.5 |
| `h3` | `--text-h3` (22px) | normal (400) | 1.5 |
| `h4` | `--text-h4` (18px) | normal (400) | 1.5 |
| `p` | `--text-base` (16px) | light (300) | 1.5 |
| `label` | `--text-sm` (14px) | normal (400) | 1.5 |
| `button` | `--text-sm` (14px) | normal (400) | 1.5 |
| `input` | `--text-base` (16px) | light (300) | 1.5 |

> ⚠️ **Override note:** Tailwind component defaults (e.g. gap, font-size) may bleed through. Always set explicit `fontFamily`, `fontSize`, `fontWeight` on any DS component text node.

---

### 1.3 Spacing & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `4px` | Default: buttons, badges, inputs, accordion items |
| `--radius-button` | `4px` | Button border radius |
| `--radius-card` | `8px` | Cards, modals |
| `--radius-sm` | `2px` | (`--radius - 2px`) Smallest rounding |
| `--radius-md` | `4px` | (same as `--radius`) |
| `--radius-lg` | `8px` | (same as `--radius-card`) |
| `--radius-xl` | `12px` | (`--radius-card + 4px`) Largest rounding |

#### Component Spacing Reference

| Context | Padding | Gap |
|---------|---------|-----|
| Card header | `20px 24px` | — |
| Card body | `20px 24px` | `16px` (flex-col) |
| Card footer | `16px 24px` | `8px` |
| MetricCard | `16px` | `8px` |
| MetadataRow cell | `12px 16px` | `2px` |
| ListRow | `12px 0` | `14px` |
| PageHeader | — | `16px` (horizontal) |
| ZoneHeader | — | `10px` (horizontal) |

---

### 1.4 Shadow / Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `--elevation-sm` | `0px 2px 4px rgba(35,35,47,0.06), 0px 6px 12px rgba(35,35,47,0.08)` | Cards, contained tab active state, dropdowns |

---

### 1.5 Status & Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--status-critical` | `#C70117` | Critical text / icon |
| `--status-critical-bg` | `rgba(199,1,23,0.06)` | Critical bg tint |
| `--status-warning` | `#BF9000` | Warning text / icon |
| `--status-warning-bg` | `rgba(191,144,0,0.06)` | Warning bg tint |
| `--status-success` | `#0F69AE` | Success text / icon (uses accent) |
| `--status-success-bg` | `rgba(15,105,174,0.06)` | Success bg tint |

---

### 1.6 Chip / Badge Colors

Sourced from Motif DS 4.17 Badges spec. All badge variants derive their colors from these tokens.

| Variant | Background | Text | Dot |
|---------|-----------|------|-----|
| **success** | `--chip-success-bg` `#E7FCE8` | `--chip-success-text` `#197335` | `--chip-success-dot` `#26A04B` |
| **warning** | `--chip-warning-bg` `#FCF5F0` | `--chip-warning-text` `#975100` | `--chip-warning-dot` `#D07200` |
| **critical** | `--chip-critical-bg` `#FCF5F3` | `--chip-critical-text` `#C70117` | `--chip-critical-dot` `#FF4336` |
| **info** | `--chip-info-bg` `#F4F7FC` | `--chip-info-text` `#0F69AE` | `--chip-info-dot` `#188CE5` |
| **info-alt** | `--ey-yellow` `#FFE600` | `--foreground` `#2E2E38` | `--foreground` |
| **accent-1** | `--chip-accent1-bg` `#F8F6FA` | `--chip-accent1-text` `#724BC3` | `--chip-accent1-dot` `#9D7CD4` |
| **accent-2** | `--chip-accent2-bg` `#FAF5F8` | `--chip-accent2-text` `#82336A` | `--chip-accent2-dot` `#DA5BB3` |
| **accent-3** | `--chip-accent3-bg` `#E1FCFB` | `--chip-accent3-text` `#17706F` | `--chip-accent3-dot` `#229B9A` |
| **disabled** | `transparent` | `--chip-disabled-text` `#9897A6` | `#9897A6` |
| **default** | `--card` `#FFFFFF` | `--muted-foreground` | `--muted-foreground` |
| **alt** | `--border` `#E6E6E9` | `--muted-foreground` | `--muted-foreground` |

---

## 2. Dark Mode

A `.dark` class on any ancestor node activates the dark theme. Core token inversions:

| Token | Dark Value |
|-------|-----------|
| `--background` | `#2E2E38` |
| `--foreground` | `#F9F9FA` |
| `--card` | `#2E2E38` |
| `--muted` | `#656579` |
| `--muted-foreground` | `#F3F3F5` |
| `--accent` | `#188CE5` |
| `--border` | `#656579` |
| `--ring` | `#188CE5` |

---

## 3. Component Libraries

| File | Export Count | Purpose |
|------|-------------|---------|
| `/src/app/components/ds-cards.tsx` | **10 components** | Card-based layout atoms: wrappers, headers, metrics, chips, rows |
| `/src/app/components/motif-ds.tsx` | **26 components** | Interactive patterns: accordions, feeds, avatars, badges, tabs, tables, modals, progress |
| `/src/app/components/ui/button.tsx` | **1 component** | 3-tier CTA button with 9 variants and 4 sizes |

```
Total: 36 components + 1 button primitive
```

Import paths from `/src/app/pages/`:
```tsx
import { DSCard, DSCardHeader, DSCardBody } from "../components/ds-cards";
import { MotifTabs, MotifBadge, MotifTable } from "../components/motif-ds";
import { Button } from "../components/ui/button";
```

---

## 4. ds-cards.tsx — Layout Atoms

### 4.1 DSCard

The foundational card wrapper. White background, 1px `--border`, 6px radius, overflow hidden.

```tsx
<DSCard>
  <DSCardHeader title="Section Title" subtitle="Optional description" />
  <DSCardBody>
    {/* content */}
  </DSCardBody>
</DSCard>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | ✓ | Card content |
| `className` | `string` | — | Extra CSS classes |
| `style` | `CSSProperties` | — | Override styles |

**Visual spec:** `border: 1px solid var(--border)`, `borderRadius: 6px`, `backgroundColor: var(--card)`.

---

### 4.2 DSCardHeader

Top section with `--border-header` bottom separator. Holds title, subtitle, label chip, and right-aligned action.

```tsx
<DSCardHeader
  title="Research Assistant"
  subtitle="AI-powered tax research"
  label="Beta"
  action={<Button variant="default">Upload</Button>}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Header title (16px normal foreground) |
| `subtitle` | `string` | Secondary label (14px light muted-foreground) |
| `label` | `string` | Pill chip next to title (muted bg) |
| `action` | `ReactNode` | Right-aligned CTA zone |

**Padding:** `20px 24px`. **Border:** `1px solid var(--border-header)` (bottom).

---

### 4.3 DSCardBody

Padded content area below the header. Flex-column with 16px gap.

```tsx
<DSCardBody style={{ padding: "16px 24px" }}>
  <p>Custom content</p>
</DSCardBody>
```

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Body content |
| `style` | `CSSProperties` | Override padding/gap/etc. |

**Default:** `padding: 20px 24px`, `gap: 16px`, `flex: 1`.

---

### 4.4 DSCardFooter

Pinned CTA zone at the bottom of a card. `--border` top separator, flex row.

```tsx
<DSCardFooter>
  <Button variant="ghost">Cancel</Button>
  <Button variant="default">Confirm</Button>
</DSCardFooter>
```

**Padding:** `16px 24px`. **Border:** `1px solid var(--border)` (top). **Gap:** `8px`.

---

### 4.5 MetricCard

Inner sub-card for KPI displays. Large numeric value, optional chip badge, stats row with border-right dividers.

```tsx
<MetricCard
  title="156"
  description="TOTAL QUERIES"
  icon={Search}
  stats={[
    { label: "Resolved", value: "124" },
    { label: "Pending", value: "32" },
  ]}
  chip={{ text: "+12%", variant: "success" }}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Large KPI value (24px normal foreground) |
| `description` | `string` | Uppercase eyebrow label (10px, letter-spacing 0.4px) |
| `icon` | `ComponentType` | Icon in 24px muted rounded pill (12px icon) |
| `stats` | `{ label, value }[]` | Stats row with border-right dividers |
| `chip` | `{ text, variant? }` | Status chip — `"success" \| "warning" \| "critical"` |

---

### 4.6 TATCard

Compact KPI metric: uppercase label + large value + status chip on one line.

```tsx
<TATCard
  label="AVG TAT"
  value="2.4 days"
  chipText="On Track"
  chipVariant="success"
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Uppercase eyebrow (10px) |
| `value` | `string` | Large display value (24px) |
| `chipText` | `string` | Status chip label |
| `chipVariant` | `"success" \| "warning" \| "critical"` | Chip color variant |

**Layout:** `flex 1`, `16px` padding, `6px` radius, `1px --border`.

---

### 4.7 Chip

Pill-shaped inline badge/tag for status and categorization.

```tsx
<Chip text="Active" variant="success" />
<Chip text="Overdue" variant="critical" icon={AlertTriangle} />
<Chip text="Draft" variant="neutral" />
```

| Prop | Type | Description |
|------|------|-------------|
| `text` | `string` | Display text |
| `variant` | `"success" \| "warning" \| "critical" \| "neutral"` | Color variant |
| `icon` | `ComponentType` | Optional 12px leading icon |

**Style:** `borderRadius: 16px`, `padding: 2px 8px`, `14px normal`.

---

### 4.8 ListRow

Horizontal list item: 32px icon well + title/subtitle text stack + right slot (chevron or custom node). Hover turns background to `--muted`.

```tsx
<ListRow
  icon={FileText}
  title="Transfer Pricing Report"
  subtitle="Updated Feb 28, 2026"
  onClick={() => navigate("/doc/123")}
/>

// Custom right slot (e.g. chip)
<ListRow
  icon={Scale}
  title="GST Compliance"
  right={<Chip text="Due" variant="warning" />}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `ComponentType` | 16px icon in 32px muted rounded square well |
| `title` | `string` | Primary text (14px normal foreground, line-clamp-1) |
| `subtitle` | `string` | Secondary text (12px light muted) |
| `right` | `ReactNode` | Custom right slot (defaults to `ChevronRight`) |
| `onClick` | `() => void` | Enables pointer cursor + hover background |

---

### 4.9 PageHeader

Page-level heading with EY Yellow vertical brand marker (3×24px pill) and right-aligned action zone.

```tsx
<PageHeader
  title="Research Assistant"
  subtitle="AI-powered tax research platform"
  action={<Button variant="default">New Query</Button>}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title (22px `--text-h3`, normal, foreground) |
| `subtitle` | `string` | Page description (14px light muted-foreground) |
| `action` | `ReactNode` | Right-aligned CTA / controls |

**Brand marker:** `3px × 24px`, `--ey-yellow`, `2px radius`. Title sits `12px` to the right of marker.

---

### 4.10 ZoneHeader

Section-level separator header for dashboard zones. EY Yellow marker (3×20px) + uppercase title + light subtitle.

```tsx
<ZoneHeader title="Zone A — Key Metrics" subtitle="As of today" />
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Uppercase label (14px medium, letter-spacing 0.04em) |
| `subtitle` | `string` | Light descriptor (12px light muted) |

**Marker:** `3px × 20px`, `--ey-yellow`. Used at the top of each 4-zone dashboard grid area.

---

### 4.11 MetadataRow

Horizontal info strip: icon + label + value columns divided by `--border` right separators.

```tsx
<MetadataRow
  items={[
    { icon: Calendar, label: "Notice Date", value: "Feb 28, 2026" },
    { icon: Scale, label: "Legislation", value: "Income Tax Act, 1961" },
    { icon: Building, label: "Entity", value: "Tiger Global Management" },
    { icon: Hash, label: "Reference", value: "ITA/2025/0042" },
  ]}
/>
```

| Prop | Description |
|------|-------------|
| `items` | Array of `{ icon, label, value }` — label is 12px muted, value is 14px foreground |

**Container:** flex, stretch alignment, `1px --border` right between items.

---

## 5. motif-ds.tsx — Interactive Patterns

### 5.1 MotifAccordion

Vertically stacked collapsible sections. Each item is an independent card. Supports 3 sizes, 2 icon types, 2 icon positions.

```tsx
// Default: md size, chevron icon on right
<MotifAccordion
  items={[
    { id: "1", title: "Ground of Objection", content: <p>...</p> },
    { id: "2", title: "Tax Demand Summary", subtitle: "₹4.2 Cr", content: <MetadataRow items={[...]} /> },
  ]}
  defaultOpen={["1"]}
/>

// Left icon, plus-minus style, small size
<MotifAccordion
  size="sm"
  iconType="plusMinus"
  iconPosition="left"
  items={[...]}
  allowMultiple
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ id, title, content, subtitle? }[]` | — | Accordion data |
| `defaultOpen` | `string[]` | `[]` | Initially open item IDs |
| `allowMultiple` | `boolean` | `false` | Allow multiple open simultaneously |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls font size and padding |
| `iconType` | `"chevron" \| "plusMinus"` | `"chevron"` | Icon style |
| `iconPosition` | `"left" \| "right"` | `"right"` | Icon placement |

**Size tokens:**

| Size | Font | Title Padding | Body Padding |
|------|------|---------------|--------------|
| `sm` | 16px | 8px / 16px | 8px 16px 16px 16px |
| `md` | 18px | 10px / 32px | 16px 32px 32px 32px |
| `lg` | 20px | 16px / 32px | 16px 32px 32px 32px |

**States:** hover → `--muted` bg; focus → `inset 0 0 0 2px var(--accent)` ring. Chevron rotates 180° when open.

---

### 5.2 MotifActivityFeed

Chronological timeline of user actions with a vertical connector line between avatar circles.

```tsx
<MotifActivityFeed
  title="Recent Activity"
  items={[
    {
      id: "1",
      initials: "BS",
      name: "Bhavya Sharda",
      action: "submitted the notice response",
      time: "2 hours ago",
      avatarColor: "var(--accent)",
    },
    {
      id: "2",
      initials: "PS",
      name: "Priya Sharma",
      action: "validated the ground summary",
      time: "4 hours ago",
    },
  ]}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `items` | `ActivityItem[]` | Timeline entries |
| `title` | `string` | Optional uppercase section header (12px) |
| `style` | `CSSProperties` | Override wrapper styles |

**`ActivityItem`:** `{ id, initials, name, action, time, icon?, avatarColor? }`

**Visual spec:** 32px circle avatar, 1px `--border` vertical connector line, name in 14px normal, action in 14px light, timestamp in 12px light muted.

---

### 5.3 MotifAvatarGroup

Stacked overlapping avatar circles with `+N` overflow indicator.

```tsx
<MotifAvatarGroup
  users={[
    { id: "1", initials: "BS" },
    { id: "2", initials: "PS", color: "var(--accent)" },
    { id: "3", initials: "AV" },
    { id: "4", initials: "RN" },
    { id: "5", initials: "AK" },
  ]}
  max={3}
  size="md"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `users` | `{ id, initials, src?, color? }[]` | — | User data |
| `max` | `number` | `4` | Visible avatars before `+N` overflow |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 24px / 32px / 40px |

**Overlap:** 30% of size as negative left margin. **Ring:** `2px solid var(--card)` border on each avatar. **Z-index:** leftmost = highest.

---

### 5.4 MotifAvatarLabelGroup

Avatar + name/subtitle text stack + optional status dot + notification badge.

```tsx
<MotifAvatarLabelGroup
  initials="BS"
  name="Bhavya Sharda"
  subtitle="Tax CoE Lead"
  status="online"
  notificationCount={3}
  size="md"
  onClick={() => openProfile()}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initials` | `string` | — | Avatar fallback text |
| `src` | `string` | — | Optional image URL |
| `name` | `string` | — | Primary label (14px normal) |
| `subtitle` | `string` | — | Secondary label (12px light muted) |
| `status` | `"online" \| "offline" \| "busy"` | — | Status dot: green / gray / red |
| `notificationCount` | `number` | — | Red badge (capped at `99+`) |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 28px / 36px / 44px avatar |
| `color` | `string` | `--foreground` | Custom avatar bg color |
| `onClick` | `() => void` | — | Enables pointer cursor |

---

### 5.5 MotifBadge

Inline status indicator. 11 color variants × 5 display modes. Derived from Motif DS 4.17 Badges spec.

```tsx
// Label (default) — tinted pill
<MotifBadge variant="success">Active</MotifBadge>
<MotifBadge variant="error">Failed</MotifBadge>
<MotifBadge variant="info-alt">Highlight</MotifBadge>

// Dot — 6px status dot + text
<MotifBadge variant="warning" mode="dot">Pending</MotifBadge>

// Count — numeric pill
<MotifBadge variant="info" mode="count">5</MotifBadge>
<MotifBadge variant="default" mode="count">12</MotifBadge>

// Mini — 16×16px solid circle, white text
<MotifBadge variant="info" mode="mini">3</MotifBadge>

// DotOnly — bare 6px dot
<MotifBadge variant="error" mode="dotOnly" />
```

**Variants:** `default` · `alt` · `error` · `warning` · `success` · `info` · `info-alt` · `accent-1` · `accent-2` · `accent-3` · `disabled`

**Modes:**

| Mode | Shape | Padding | Use Case |
|------|-------|---------|----------|
| `label` | Pill (200px radius) | `2px 8px` | Status labels |
| `dot` | Dot + text (no bg) | `2px 8px` | Inline status |
| `count` | Pill (200px radius) | `2px 6px`, min 24px | Numeric counters |
| `mini` | 16×16px circle | `2px` | Overlay notification counts |
| `dotOnly` | 6px circle | none | List row status indicators |

**`"default"` variant** always adds `1px solid var(--chip-default-border)`.

---

### 5.6 MotifBreadcrumbs

Navigation trail with separator chevrons. Supports home icon, back arrow, and truncation dropdown.

```tsx
// Basic
<MotifBreadcrumbs
  items={[
    { label: "Dashboard", onClick: () => navigate("/") },
    { label: "DigiLiM+", onClick: () => navigate("/digilim") },
    { label: "Case ITA/2025/0042" },
  ]}
/>

// With back arrow
<MotifBreadcrumbs showBack onBack={() => navigate(-1)} items={[...]} />

// With truncation
<MotifBreadcrumbs maxVisible={2} items={[...5 items...]} />
```

| Prop | Type | Description |
|------|------|-------------|
| `items` | `{ label, href?, onClick? }[]` | Breadcrumb items |
| `showHome` | `boolean` | Home icon (20px, `--accent`) before items |
| `showBack` | `boolean` | Back arrow (20px `ArrowLeft`, `--accent`) |
| `onBack` | `() => void` | Back arrow callback |
| `maxVisible` | `number` | Truncate middle items into `...` dropdown |

**Spec:** Links = 14px normal `--accent`; current item = 14px normal `--muted-foreground`; separator = `ChevronRight` 16px `--breadcrumb-separator` (#9897A6).

---

### 5.7 MotifTabs

Horizontal tab strip. 3 visual variants, 2 sizes, full-width support, per-tab disabled state, overflow menu.

```tsx
// Underline (default) — EY Yellow active bottom border
<MotifTabs
  tabs={[
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "details", label: "Details", badge: 3 },
    { id: "archived", label: "Archived", disabled: true },
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>

// Contained — boxed tabs on muted background
<MotifTabs variant="contained" tabs={[...]} activeTab={active} onTabChange={setActive} />

// Pill — dark filled active pill
<MotifTabs variant="pill" tabs={[...]} activeTab={active} onTabChange={setActive} />

// Full-width + overflow menu
<MotifTabs
  variant="underline"
  size="sm"
  fullWidth
  tabs={[...]}
  overflowMenu={[
    { id: "billing", label: "Billing" },
    { id: "notifications", label: "Notifications" },
  ]}
  activeTab={active}
  onTabChange={setActive}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[]` | — | `{ id, label, icon?, badge?, disabled? }` |
| `activeTab` | `string` | — | Active tab ID |
| `onTabChange` | `(id) => void` | — | Tab selection callback |
| `variant` | `"underline" \| "contained" \| "pill"` | `"underline"` | Visual style |
| `size` | `"sm" \| "md"` | `"md"` | 40px/14px or 44px/16px |
| `fullWidth` | `boolean` | `false` | Tabs stretch to fill container |
| `overflowMenu` | `TabItem[]` | — | Extra tabs in overflow dropdown |

**Variant details:**

| Variant | Active State | Container |
|---------|-------------|-----------|
| `underline` | `2px solid --ey-yellow` bottom, foreground text | `1px --border` bottom, 16px gap |
| `contained` | `--card` bg, `--border` border, elevation-sm shadow | `--muted` bg, 6px radius, 4px padding |
| `pill` | `--foreground` bg, white text, 200px radius | No border, 4px gap |

**Badge:** `--ey-yellow` bg when active (underline), `200px` pill, `24px` min-width.

---

### 5.8 MotifToggleGroup

Segmented button toggle for binary/N-way selection (e.g. Enterprise Vault / My Vault).

```tsx
<MotifToggleGroup
  options={[
    { id: "enterprise", label: "Enterprise Vault", count: 14 },
    { id: "my-vault", label: "My Vault", count: 8 },
  ]}
  value={vaultType}
  onChange={setVaultType}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `options` | `{ id, label, count? }[]` | Toggle options |
| `value` | `string` | Selected option ID |
| `onChange` | `(id) => void` | Selection callback |

> **MotifToggleGroup vs MotifContentSwitcher:** ToggleGroup uses `--foreground` dark bg for active; ContentSwitcher uses `--muted-foreground` for active (lighter). Use ToggleGroup for prominent type selection; ContentSwitcher for in-section view toggling.

---

### 5.9 MotifComplexCard

Multi-section card for mixed content (images, text, metadata, buttons). Supports N ordered sections with optional dividers.

```tsx
<MotifComplexCard
  header={{
    title: "Tiger Global — Exit Analysis",
    subtitle: "Q-15892",
    label: <Chip text="In Progress" variant="warning" />,
    action: <Button variant="ghost">More</Button>,
  }}
  sections={[
    { id: "summary", content: <p>Summary...</p> },
    { id: "metadata", content: <MetadataRow items={[...]} />, divider: true },
    { id: "files", content: <div>...</div>, padding: "16px 24px" },
  ]}
  footer={
    <>
      <Button variant="outline">Cancel</Button>
      <Button variant="default">Submit</Button>
    </>
  }
/>
```

| Prop | Description |
|------|-------------|
| `header` | `{ title, subtitle?, label? (ReactNode), action? (ReactNode) }` |
| `sections` | `{ id, content, divider?, padding? }[]` — divider shows `--border` top |
| `footer` | Right-aligned CTA area with `--border` top |

**Default section padding:** `20px 24px`.

---

### 5.10 MotifAccountCard

Entity/account display card: 48px avatar + name + status chip + key-value detail rows + CTA footer.

```tsx
<MotifAccountCard
  initials="TG"
  name="Tiger Global Management LLC"
  role="Foreign Portfolio Investor"
  status={{ text: "Active", variant: "success" }}
  details={[
    { label: "PAN", value: "AADCT1234F", icon: FileText },
    { label: "Jurisdiction", value: "Mauritius", icon: Globe },
    { label: "Tax Year", value: "AY 2025-26", icon: Calendar },
  ]}
  actions={
    <>
      <Button variant="outline">View History</Button>
      <Button variant="default">Open Profile</Button>
    </>
  }
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `initials` | `string` | Avatar fallback (48px circle) |
| `src` | `string` | Optional avatar image |
| `name` | `string` | Entity name |
| `role` | `string` | Subtitle/role |
| `status` | `{ text, variant }` | Status chip next to name |
| `details` | `{ label, value, icon? }[]` | Key-value rows with border-bottom |
| `actions` | `ReactNode` | Footer CTAs |
| `color` | `string` | Custom avatar bg color |

---

### 5.11 MotifChipAlert

Inline notification pill for feedback. Compact, pill-shaped, severity-colored.

```tsx
<MotifChipAlert type="info" message="Query submitted for review" />
<MotifChipAlert type="success" message="Document validated" onDismiss={() => {}} />
<MotifChipAlert type="warning" message="Deadline in 3 days" />
<MotifChipAlert type="critical" message="Compliance breach detected" onDismiss={dismiss} />
```

| Prop | Type | Description |
|------|------|-------------|
| `type` | `"info" \| "success" \| "warning" \| "critical"` | Severity + color |
| `message` | `string` | Alert text |
| `onDismiss` | `() => void` | Shows `X` dismiss button when provided |

**Style:** `borderRadius: 200px`, `padding: 6px 12px`, semi-transparent bg + matching `1px` border, icon + text colored by type.

> **MotifChipAlert vs MotifInlineMessage:** ChipAlert is compact inline pill for brief feedback; InlineMessage is block-level with title + description for detailed information.

---

### 5.12 MotifTag

Interactive compact tag for selections, filtering, and multi-select inputs.

```tsx
// Removable
<MotifTag label="GST" onRemove={() => removeTag("gst")} />

// Selectable filter toggle
<MotifTag
  label="Transfer Pricing"
  variant="accent"
  selected={isSelected}
  onClick={toggleFilter}
/>

// With icon
<MotifTag label="Compliance" variant="success" icon={CheckCircle} />

// Disabled
<MotifTag label="Archived" disabled />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Tag text |
| `variant` | `"default" \| "accent" \| "success" \| "warning" \| "critical"` | `"default"` | Color variant |
| `selected` | `boolean` | `false` | Inverts to filled bg + white text |
| `onRemove` | `() => void` | — | Shows 10px `X` button |
| `onClick` | `() => void` | — | Click handler for toggle behavior |
| `icon` | `ComponentType` | — | Optional 12px leading icon |
| `disabled` | `boolean` | `false` | 0.5 opacity, no interaction |

**Default style:** `--muted` bg, `--foreground` text, `1px --border`. **Selected:** variant color bg, white text.

---

### 5.13 MotifMetricItem

Single metric atom: uppercase label + large value + optional trend arrow. Composable inside grids.

```tsx
<MotifMetricItem
  label="Total Queries"
  value={156}
  trend={{ value: "+12%", direction: "up" }}
/>
<MotifMetricItem
  label="Avg TAT"
  value="2.4 days"
  trend={{ value: "-0.3d", direction: "down" }}
  icon={Clock}
/>
<MotifMetricItem label="Pending" value={32} />
```

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string \| number` | Large KPI value (24px normal foreground) |
| `label` | `string` | Uppercase description (12px muted, letter-spacing 0.4px) |
| `trend` | `{ value, direction: "up" \| "down" \| "flat" }` | Arrow indicator + colored text |
| `icon` | `ComponentType` | Optional 12px icon next to label |

**Trend colors:** up → `--chip-success-text` (green); down → `--chip-critical-text` (red); flat → `--muted-foreground`.

---

### 5.14 MotifContentDivider

Visual separator for sections. Supports simple line, dashed, dotted, and labeled variants.

```tsx
<MotifContentDivider />
<MotifContentDivider label="Today" />
<MotifContentDivider variant="dashed" spacing="lg" />
<MotifContentDivider variant="dotted" label="Or continue with" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Center text (12px uppercase muted) |
| `variant` | `"line" \| "dashed" \| "dotted"` | `"line"` | Line style |
| `spacing` | `"sm" \| "md" \| "lg"` | `"md"` | Vertical padding: 8px / 16px / 24px |

---

### 5.15 MotifContentSwitcher

Segmented control within a `--muted` container. Active button uses `--muted-foreground` bg with white text.

```tsx
// Full-width with icon
<MotifContentSwitcher
  items={[
    { id: "details", label: "My details", badge: 1 },
    { id: "profile", label: "Profile", icon: User },
    { id: "password", label: "Password" },
  ]}
  activeId={activeSection}
  onChange={setActiveSection}
  fullWidth
/>

// Icon-only alignment switcher
<MotifContentSwitcher
  items={[
    { id: "left", icon: AlignLeft },
    { id: "center", icon: AlignCenter },
    { id: "right", icon: AlignRight },
  ]}
  activeId="left"
  onChange={setAlign}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ id, label?, icon?, badge? }[]` | — | Switcher options |
| `activeId` | `string` | — | Active item ID |
| `onChange` | `(id) => void` | — | Selection callback |
| `fullWidth` | `boolean` | `false` | Buttons stretch to fill container |

**Container:** `--muted` bg, `6px` radius, `1px --border`, `4px` padding. **Active:** `--muted-foreground` bg (#656579), white text, `4px` inner radius, `36px` height.

---

### 5.16 MotifEmptyState

Centered placeholder for empty lists, tables, and sections.

```tsx
<MotifEmptyState
  icon={FileText}
  title="No documents found"
  description="Try adjusting your search criteria or upload a new document."
  action={<Button variant="default">Upload Document</Button>}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `ComponentType` | 28px icon inside 64px `--muted` circle |
| `title` | `string` | Primary text (16px normal foreground) |
| `description` | `string` | Secondary text (14px light muted, max-width 400px) |
| `action` | `ReactNode` | Optional CTA button |

**Padding:** `48px 32px`. Icon container: `64px` circle, `--muted` bg, `28px` icon.

---

### 5.17 MotifFilterPanel

Sidebar or inline filter panel with accordion sections, checkboxes, "Select All", search input, and apply/cancel footer.

```tsx
<MotifFilterPanel
  title="Filters"
  selectedCount={6}
  searchable
  sections={[
    {
      id: "status",
      title: "Status",
      selectAll: true,
      options: [
        { id: "active", label: "Active", checked: true },
        { id: "pending", label: "Pending", checked: true },
      ],
    },
    {
      id: "type",
      title: "Document Type",
      options: [
        { id: "query", label: "Query", checked: false },
      ],
    },
  ]}
  onFilterChange={(sectionId, optionId, checked) => updateFilter(sectionId, optionId, checked)}
  onSelectAll={(sectionId, checked) => toggleAll(sectionId, checked)}
  onClear={clearFilters}
  onApply={applyFilters}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Panel header (default: `"Filters"`) |
| `sections` | `FilterSection[]` | `{ id, title, options, selectAll? }` |
| `selectedCount` | `number` | Badge in header |
| `searchable` | `boolean` | Show search input at top |
| `onFilterChange` | `(sectionId, optionId, checked) => void` | Checkbox callback |
| `onSelectAll` | `(sectionId, checked) => void` | Select all callback |
| `onClear` | `() => void` | Clear all / cancel |
| `onApply` | `() => void` | Apply filters |

**Design:** Checkboxes are `16px` squares, `--accent` fill when checked with white `Check` icon. Footer shows `"✓ Selected N items"` + Cancel + Apply.

---

### 5.18 MotifMenu / Drawer

Slide-out panel from screen edge. Scrollable body, optional header and footer. Closes on `Escape` or backdrop click.

```tsx
const [open, setOpen] = useState(false);

<MotifMenu
  open={open}
  onClose={() => setOpen(false)}
  title="Document Details"
  subtitle="Query #Q-15892"
  position="right"
  width="480px"
  footer={
    <>
      <Button variant="outline">Cancel</Button>
      <Button variant="default">Save Changes</Button>
    </>
  }
>
  <MetadataRow items={[...]} />
  <MotifContentDivider label="History" />
  <MotifActivityFeed items={[...]} />
</MotifMenu>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controls visibility |
| `onClose` | `() => void` | — | Close callback |
| `title` | `string` | — | Header title |
| `subtitle` | `string` | — | Header subtitle |
| `children` | `ReactNode` | — | Scrollable body |
| `footer` | `ReactNode` | — | Footer CTAs (right-aligned) |
| `position` | `"left" \| "right"` | `"right"` | Edge to slide from |
| `width` | `string` | `"400px"` | Panel width (max `90vw`) |

**Backdrop:** `rgba(46,46,56,0.4)` fixed overlay, `z-index 998`. **Panel:** `--card` bg, `z-index 999`.

---

### 5.19 MotifInlineMessage

Block-level informational message displayed inline in the content area.

```tsx
<MotifInlineMessage type="info" title="Tip" description="You can drag and drop files." />
<MotifInlineMessage type="success" description="Query submitted successfully." onDismiss={() => {}} />
<MotifInlineMessage
  type="warning"
  title="Deadline Approaching"
  description="The compliance filing deadline is March 15, 2026."
  action={{ label: "View details", onClick: () => navigate("/compliance") }}
/>
<MotifInlineMessage type="error" title="Validation Failed" description="3 required fields missing." />
```

| Prop | Type | Description |
|------|------|-------------|
| `type` | `"info" \| "success" \| "warning" \| "error"` | Severity |
| `title` | `string` | Optional bold header (text-sm, colored) |
| `description` | `string` | Body text (14px light foreground) |
| `action` | `{ label, onClick }` | Underlined link-style button (`--accent`) |
| `onDismiss` | `() => void` | Shows `X` dismiss button |

**Style:** `6px` radius, `16px` padding, semi-transparent bg + matching `1px` border, 20px icon top-aligned.

---

### 5.20 MotifModal

Centered overlay dialog. Header + scrollable body + CTA footer. 4 size variants. Closes on `Escape` or backdrop. Locks body scroll.

```tsx
const [open, setOpen] = useState(false);

<MotifModal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Submission"
  subtitle="This action cannot be undone."
  size="md"
  footer={
    <>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="default">Submit</Button>
    </>
  }
>
  <p>Are you sure you want to submit this query for review?</p>
  <MotifContentDivider label="Summary" />
  <MetadataRow items={[...]} />
</MotifModal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controls visibility |
| `onClose` | `() => void` | — | Close callback |
| `title` | `string` | — | Header title |
| `subtitle` | `string` | — | Header subtitle |
| `children` | `ReactNode` | — | Scrollable body |
| `footer` | `ReactNode` | — | Footer CTAs (right-aligned) |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | `400px / 560px / 720px / 960px` |

**Max height:** `calc(100vh - 48px)`. **Backdrop:** `rgba(46,46,56,0.4)`. **Header padding:** `20px 24px`. **Body padding:** `24px`. **Footer padding:** `16px 24px`.

---

### 5.21 MotifEngagementSwitcher

Context/project/engagement selector dropdown for multi-engagement environments. Used in app headers.

```tsx
<MotifEngagementSwitcher
  label="Engagement"
  engagements={[
    {
      id: "eng1",
      name: "Google Financial Services",
      description: "Q3 2023 PCAOB 4105 Review",
      detail: "Google Financial Services\nThird Quarter 2023 PCAOB Review",
    },
    { id: "eng2", name: "Amazon Tax Restructuring", description: "AY 2025-26 Transfer Pricing" },
  ]}
  activeId={activeEngagement}
  onChange={setActiveEngagement}
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `engagements` | `{ id, name, description?, detail? }[]` | Available engagements |
| `activeId` | `string` | Selected engagement ID |
| `onChange` | `(id) => void` | Selection callback |
| `label` | `string` | Uppercase trigger label (default: `"Engagement"`) |

**Trigger:** `--card` bg, `--border`, label (12px uppercase muted) + name (14px foreground) + chevron. **Tooltip:** `--foreground` bg with white text, positioned to the right.

---

### 5.22 MotifProgressLoader

Indeterminate spinner for ongoing async processes. CSS keyframe rotation.

```tsx
<MotifProgressLoader />
<MotifProgressLoader size="lg" label="Loading documents..." />
<MotifProgressLoader size="sm" />
<MotifProgressLoader color="var(--chip-success-text)" label="Processing..." />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 20px / 32px / 48px |
| `label` | `string` | — | Optional text below (14px light muted) |
| `color` | `string` | `var(--accent)` | SVG stroke color |

**SVG:** `--border` track + colored arc, `2.5px` stroke width. Animation: `motif-spin` keyframes, 1s linear infinite.

---

### 5.23 MotifProgressBar

Linear determinate progress bar.

```tsx
<MotifProgressBar value={75} />
<MotifProgressBar value={45} label="Upload Progress" variant="accent" />
<MotifProgressBar value={100} label="Complete" variant="success" />
<MotifProgressBar value={85} label="Storage Used" variant="warning" height={8} />
<MotifProgressBar value={30} showValue={false} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Current value |
| `max` | `number` | `100` | Maximum value |
| `label` | `string` | — | Left-aligned label (14px normal) |
| `showValue` | `boolean` | `true` | Show percentage right-aligned |
| `variant` | `"accent" \| "success" \| "warning" \| "critical"` | `"accent"` | Fill color |
| `height` | `number` | `6` | Bar height in px |

**Track:** full-width `--muted` bg, rounded ends. **Fill:** variant color, `0.3s ease` transition.

---

### 5.24 MotifProgressCircle

Circular SVG arc progress indicator with center percentage.

```tsx
<MotifProgressCircle value={72} />
<MotifProgressCircle value={85} size="lg" label="Compliance Score" variant="success" />
<MotifProgressCircle value={45} size="sm" />
<MotifProgressCircle value={90} variant="warning" showValue={false} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Current progress |
| `max` | `number` | `100` | Maximum value |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 48px / 72px / 96px |
| `label` | `string` | — | Text below circle (14px light muted) |
| `showValue` | `boolean` | `true` | Center percentage display |
| `variant` | `"accent" \| "success" \| "warning" \| "critical"` | `"accent"` | Arc color |

**Arc:** `stroke-dashoffset` transition `0.4s ease`. Track: `--muted`. Center value scales with circle size.

---

### 5.25 MotifProgressIndicator

Multi-step wizard stepper. Numbered steps with connecting lines. Supports horizontal and vertical orientation.

```tsx
// Horizontal
<MotifProgressIndicator
  steps={[
    { id: "upload", label: "Upload", description: "Select documents" },
    { id: "review", label: "Review", description: "Validate content" },
    { id: "submit", label: "Submit", description: "Send for approval" },
    { id: "complete", label: "Complete" },
  ]}
  currentStep={1}
/>

// Vertical
<MotifProgressIndicator
  steps={[
    { id: "entity", label: "Entity Selection" },
    { id: "query", label: "Query Configuration" },
    { id: "ai", label: "AI Processing" },
    { id: "review", label: "Review & Submit" },
  ]}
  currentStep={2}
  orientation="vertical"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `{ id, label, description? }[]` | — | Step definitions |
| `currentStep` | `number` | — | 0-based active step index |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction |

**States:**

| State | Circle | Connector |
|-------|--------|-----------|
| Completed | 28px `--accent` fill, white `Check` icon | `2px --accent` line |
| Active | 28px `--accent` fill, white number | — |
| Upcoming | 28px `--muted` fill, `--border` outline, muted number | `2px --border` line |

---

### 5.26 MotifTable

Full-featured data table: sortable headers, row checkboxes, hover/selected states, custom cell renderers, action column, empty state, and pagination.

```tsx
const columns: MotifTableColumn<CaseRow>[] = [
  {
    id: "caseName",
    header: "Case Name",
    sortable: true,
    width: "200px",
    accessor: (row) => (
      <MotifAvatarLabelGroup
        initials={row.initials}
        name={row.caseName}
        subtitle={row.caseId}
        size="sm"
      />
    ),
  },
  {
    id: "status",
    header: "Status",
    sortable: true,
    width: "100px",
    accessor: (row) => <Chip text={row.status} variant={statusVariant(row.status)} />,
  },
  {
    id: "demand",
    header: "Demand (₹ Cr)",
    accessor: "demand",
    align: "right",
  },
  {
    id: "assignee",
    header: "Assignee",
    accessor: (row) => <MotifAvatarGroup users={row.team} max={3} size="sm" />,
    hideOnMobile: true,
  },
];

<MotifTable
  title="Litigation Cases"
  description="Active litigation matters as of April 2026"
  columns={columns}
  data={caseData}
  rowKey="id"
  selectable
  selectedRows={selectedIds}
  onSelectionChange={setSelectedIds}
  searchable
  onSearch={handleSearch}
  sortColumn={sortCol}
  sortDirection={sortDir}
  onSort={(col, dir) => { setSortCol(col); setSortDir(dir); }}
  onRowClick={(row) => navigate(`/digilim/case/${row.id}`)}
  actions={(row) => (
    <Button variant="ghost" size="sm">View</Button>
  )}
  pagination={{
    page: currentPage,
    pageSize: pageSize,
    totalItems: totalCount,
    pageSizeOptions: [10, 25, 50],
    onPageChange: setCurrentPage,
    onPageSizeChange: setPageSize,
  }}
  emptyState={
    <MotifEmptyState
      icon={Scale}
      title="No cases found"
      description="Adjust your filters or create a new case."
    />
  }
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Table header title |
| `description` | `string` | Subtitle below title |
| `columns` | `MotifTableColumn<T>[]` | Column definitions |
| `data` | `T[]` | Row data |
| `rowKey` | `keyof T` | Unique row identifier field |
| `selectable` | `boolean` | Enable checkbox column |
| `selectedRows` | `Set<string>` | Controlled selected IDs |
| `onSelectionChange` | `(ids: Set<string>) => void` | Selection callback |
| `searchable` | `boolean` | Show search input (240px, right-aligned) |
| `onSearch` | `(q: string) => void` | Search callback |
| `sortColumn` | `string` | Active sort column ID |
| `sortDirection` | `"asc" \| "desc"` | Sort direction |
| `onSort` | `(col, dir) => void` | Sort callback |
| `onRowClick` | `(row: T) => void` | Row click handler |
| `actions` | `(row: T) => ReactNode` | Action column render function |
| `pagination` | `PaginationConfig` | Page controls |
| `emptyState` | `ReactNode` | Custom empty state |

**`MotifTableColumn<T>`:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Column identifier |
| `header` | `string` | Column heading |
| `accessor` | `keyof T \| (row: T) => ReactNode` | Field key or custom renderer |
| `sortable` | `boolean` | Enables sort header |
| `width` | `string` | Column width CSS value |
| `align` | `"left" \| "center" \| "right"` | Cell text alignment |
| `hideOnMobile` | `boolean` | Hidden below breakpoint |

**Design spec:**

- **Container:** `--card` bg, `--radius-card` radius, `1px --border`
- **Header row:** title (16px normal) + description (14px normal muted) + search (right)
- **Column headers:** `12px 16px` padding, 14px normal muted, sortable icons (`ArrowUpDown` / `ArrowUp` / `ArrowDown`)
- **Checkbox:** `16px × 16px`, `3px` radius; checked = `--accent` bg + white `Check`; indeterminate = dash
- **Row hover:** `--muted` bg, `0.1s` transition
- **Row selected:** `rgba(15,105,174,0.04)` light blue tint
- **Cell text:** 14px light `--foreground`
- **Pagination:** `12px 24px` padding, `--border` top; page size dropdown + page nav icons

---

## 6. Button CTA Spec

All buttons use `/src/app/components/ui/button.tsx`. Derived from Motif DS 4.17 Buttons spec.

### Variants

| Tier | Variant | Appearance |
|------|---------|------------|
| **Primary** | `variant="default"` | `--primary` bg (#2E2E38), white text, `4px` radius |
| **Secondary** | `variant="outline"` | Transparent bg, `1px solid --border-button` (#C3C3CB), `--foreground` text |
| **Tertiary** | `variant="ghost"` | No bg, no border, `--foreground` text |
| **Accent** | `variant="accent"` | `--accent` bg (#0F69AE), white text |
| **Accent Ghost** | `variant="accent-ghost"` | No bg, no border, `--accent` text |
| **Destructive** | `variant="destructive"` | `--destructive-foreground` bg (#C70117), white text |
| **Destructive Outline** | `variant="destructive-outline"` | Transparent bg, `1px solid #C70117`, `#C70117` text |
| **Destructive Ghost** | `variant="destructive-ghost"` | No bg, no border, `#C70117` text |
| **Link** | `variant="link"` | No bg, `--accent` text, underline on hover |

```tsx
<Button variant="default">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>
<Button variant="ghost">Tertiary Link</Button>
<Button variant="accent">Accent CTA</Button>
<Button variant="accent-ghost">Accent Link</Button>
<Button variant="destructive">Delete</Button>
<Button variant="destructive-outline">Cancel</Button>
<Button variant="destructive-ghost">Remove</Button>
```

### Sizes

| Size | Height | Font | Padding |
|------|--------|------|---------|
| `size="sm"` | `32px` | 14px | `px-12` |
| `size="default"` | `36px` | 14px | `px-14 py-8` |
| `size="lg"` | `44px` | 14px | `px-20` |
| `size="icon"` | `36×36px` | — | Icon only |

### States

| State | Behavior |
|-------|----------|
| Default | Standard appearance |
| Hover | `bg/90` opacity or `--muted` bg (outline/ghost) |
| Focus | `3px --ring` (#0F69AE) ring |
| Disabled | `opacity 0.5`, `pointer-events none`, `#9897A6` text |

All buttons: `EYInterstate Regular`, `4px` radius.

---

## 7. Composition Patterns

### Card Layout (Standard)
```
DSCard
  └─ DSCardHeader  (title + action)
  └─ DSCardBody    (content area, 16px gap)
  └─ DSCardFooter  (optional, CTAs)
```

### Page Structure
```
PageHeader  (EY Yellow marker + title + action)
  └─ MotifTabs / MotifToggleGroup  (view switching)
  └─ Grid of DSCards  (content zones)
```

### Data Display
```
DSCard
  └─ DSCardHeader
  └─ DSCardBody
       └─ MetricCard / TATCard  (KPI numbers)
       └─ MetadataRow           (key-value info)
       └─ ListRow[]             (navigable items)
```

### Dashboard Zone Grid (4-Zone Layout)
```
Zone A (top-left)   — Key metrics / MotifMetricItem grid
Zone B (top-right)  — Activity / MotifActivityFeed
Zone C (bottom-left)  — Documents / MotifTable or ListRow[]
Zone D (bottom-right) — Workflows / MetricCard + MotifProgressBar
```

### Navigation
```
MotifBreadcrumbs  →  page-level context trail
MotifTabs         →  section switching within a page
MotifToggleGroup  →  binary/ternary type selection
```

### Status Communication
```
Chip (inline tags, row status)
MotifBadge (counts, dots, notifications)
TATCard (KPI with status chip)
MotifChipAlert (inline feedback)
MotifInlineMessage (block-level notices)
```

### Modal + Drawer Composition
```
MotifModal
  └─ DSCardHeader / MotifContentDivider
  └─ MetadataRow / MotifAccordion
  └─ DSCardFooter (via footer prop)

MotifMenu (Drawer)
  └─ MotifActivityFeed / MetadataRow
  └─ MotifAccordion
```

### Table with Rich Cells
```
MotifTable
  columns: [
    accessor → MotifAvatarLabelGroup  (name column)
    accessor → Chip                   (status column)
    accessor → MotifAvatarGroup       (assignees column)
    accessor → MotifTag[]             (labels column)
    actions  → Button (ghost, sm)     (action column)
  ]
  emptyState → MotifEmptyState
```

---

## 8. Key Principles

### 1. Token-Only Coloring
Never use hardcoded Tailwind color utilities (e.g. `bg-blue-500`, `text-[#2E2E38]`) or arbitrary hex values in component props. Always use `var(--token-name)`.

```tsx
// ✅ Correct
style={{ color: "var(--foreground)", backgroundColor: "var(--muted)" }}

// ❌ Wrong
style={{ color: "#2E2E38", backgroundColor: "#F3F3F5" }}
className="text-gray-800 bg-gray-100"
```

### 2. EYInterstate Everywhere
All text nodes must declare `fontFamily: "'EYInterstate', sans-serif"` explicitly — never rely on Tailwind's default sans-serif or inheritance.

```tsx
// ✅ Correct
<span style={{ fontFamily: "'EYInterstate', sans-serif", fontSize: "var(--text-sm)" }}>
  Label text
</span>

// ❌ Wrong
<span className="font-sans text-sm">Label text</span>
```

### 3. Three Font Weights
Use only the three design-system weights. Never set arbitrary weight values.

| Role | Weight | Token |
|------|--------|-------|
| Body text, descriptions, captions | `300` | `var(--font-weight-light)` |
| Titles, labels, buttons, interactive | `400` | `var(--font-weight-normal)` |
| Emphasis, uppercase zone labels | `500` | `var(--font-weight-medium)` |

### 4. EY Yellow for Brand Markers
`--ey-yellow` (#FFE600) is used exclusively for:
- `PageHeader` / `ZoneHeader` vertical bars (3px × 24/20px)
- `MotifTabs` underline variant active indicator
- `MotifBadge` `info-alt` variant background

Never use EY Yellow for text, backgrounds, or decorative elements outside these roles.

### 5. Consistent Card Anatomy
Every card follows: Header (border-bottom separator) → Body (padded content) → Footer (optional, border-top).

The `--border-header` (`#C3C3CB`) is specifically for the header separator — it is darker than the standard `--border` (`#E6E6E9`) used for card outlines.

### 6. Override Tailwind Defaults Explicitly
Base Tailwind components (shadcn/ui `Button`, `Card`, etc.) may inject gap, padding, or font defaults. Always set styling explicitly in the `style` prop on any DS component that wraps these primitives.

### 7. Routing Rule
Use `react-router` (not `react-router-dom`) for all routing. The `RouterProvider` lives in `/src/app/App.tsx`, routes are defined in `/src/app/routes.tsx`.

### 8. Semantic Status Color Mapping

| Status | Chip Variant | MotifBadge Variant |
|--------|-------------|-------------------|
| Active / Compliant | `success` | `success` |
| Pending / At Risk | `warning` | `warning` |
| Overdue / Critical / Breach | `critical` | `error` |
| Info / In Progress | — | `info` |
| AI / Highlight | — | `info-alt` |
| Archived / Inactive | `neutral` | `disabled` |

---

*This document is auto-derived from source components in `/src/app/components/ds-cards.tsx`, `/src/app/components/motif-ds.tsx`, and `/src/styles/theme.css`. Last updated: April 21, 2026.*
