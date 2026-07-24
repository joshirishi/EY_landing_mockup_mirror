---
name: react-implementer
description: "Generate production React/TSX code for the EY India AI Tax Hub using ONLY the EY Motif DS 4.17 component library (ds-cards.tsx + motif-ds.tsx + button.tsx). Use this skill whenever someone says 'implement this screen', 'build the React for this', 'code this UI', 'create the component', 'generate the frontend', or when the design-orchestrator chains to this skill. NEVER use raw HTML elements, inline hex values, or Tailwind color utilities. All colors must use var(--token). All fonts must be EYInterstate. Also trigger when someone asks to 'migrate' an existing screen to Motif DS."
---

# React Implementer — EY India AI Tax Hub

Generates production-ready `.tsx` files using **exclusively** the EY Motif DS 4.17 component library. Zero inline hex colors. Zero Tailwind color utilities. EYInterstate on every text node.

## Before You Start

Read `EY-India-AI-Tax-Hub-Design-System.md` for the full component API.

## Critical Rules (Non-Negotiable)

### 1. ONLY import from these three sources

```tsx
import { DSCard, DSCardHeader, DSCardBody, DSCardFooter,
         MetricCard, TATCard, Chip, ListRow,
         PageHeader, ZoneHeader, MetadataRow } from "../components/ds-cards";

import { MotifTable, MotifModal, MotifMenu, MotifTabs,
         MotifToggleGroup, MotifAccordion, MotifActivityFeed,
         MotifBadge, MotifBreadcrumbs, MotifAvatarGroup,
         MotifAvatarLabelGroup, MotifComplexCard, MotifAccountCard,
         MotifChipAlert, MotifTag, MotifMetricItem,
         MotifContentDivider, MotifContentSwitcher, MotifEmptyState,
         MotifFilterPanel, MotifInlineMessage, MotifEngagementSwitcher,
         MotifProgressLoader, MotifProgressBar, MotifProgressCircle,
         MotifProgressIndicator } from "../components/motif-ds";

import { Button } from "../components/ui/button";
```

### 2. Token-only coloring — never hardcode colors

```tsx
// ✅ Correct
style={{ color: "var(--foreground)", backgroundColor: "var(--muted)" }}
style={{ borderColor: "var(--border)", borderRadius: "var(--radius-card)" }}

// ❌ Wrong
style={{ color: "#2E2E38", backgroundColor: "#F3F3F5" }}
className="text-gray-800 bg-gray-100 border-gray-200"
```

### 3. EYInterstate on every text node

```tsx
// ✅ Correct
<span style={{ fontFamily: "'EYInterstate', sans-serif", fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)" }}>
  Label
</span>

// ❌ Wrong
<span className="font-sans text-sm font-medium">Label</span>
```

### 4. Only three font weights

| Role | Weight | Token |
|------|--------|-------|
| Body, descriptions, captions | `300` | `var(--font-weight-light)` |
| Titles, labels, buttons, interactive | `400` | `var(--font-weight-normal)` |
| Emphasis, uppercase zone labels | `500` | `var(--font-weight-medium)` |

### 5. Routing via react-router (not react-router-dom)

```tsx
import { useNavigate } from "react-router";
const navigate = useNavigate();
navigate("/digilim/case/123");
```

## Component Quick Reference

### Layout & Structure
| Need | Use |
|------|-----|
| Page heading with EY Yellow bar | `PageHeader` (title, subtitle, action) |
| Section heading in dashboard | `ZoneHeader` (title, subtitle) |
| Card wrapper | `DSCard` → `DSCardHeader` → `DSCardBody` → `DSCardFooter` |
| Key-value strip | `MetadataRow` (items: [{icon, label, value}]) |
| Navigable list item | `ListRow` (icon, title, subtitle, right, onClick) |

### Data Display
| Need | Use |
|------|-----|
| Data table | `MotifTable` (columns, data, rowKey, selectable, searchable, pagination) |
| KPI card with stats | `MetricCard` (title=value, description=eyebrow, stats, chip) |
| Compact KPI + chip | `TATCard` (label, value, chipText, chipVariant) |
| Single metric atom | `MotifMetricItem` (label, value, trend) |
| Activity timeline | `MotifActivityFeed` (items, title) |
| Collapsible sections | `MotifAccordion` (items, defaultOpen, size, iconType) |
| Entity card | `MotifAccountCard` (initials, name, role, status, details, actions) |

### Navigation
| Need | Use |
|------|-----|
| Breadcrumb trail | `MotifBreadcrumbs` (items, showBack, maxVisible) |
| Tab strip | `MotifTabs` (tabs, activeTab, onTabChange, variant) |
| Binary toggle | `MotifToggleGroup` (options, value, onChange) |
| Section switcher | `MotifContentSwitcher` (items, activeId, onChange) |
| Stepper | `MotifProgressIndicator` (steps, currentStep, orientation) |

### Status & Feedback
| Need | Use |
|------|-----|
| Status pill | `Chip` (text, variant: success/warning/critical/neutral) |
| Badge (dot/count) | `MotifBadge` (variant, mode: label/dot/count/mini/dotOnly) |
| Filter tag | `MotifTag` (label, variant, selected, onRemove) |
| Inline compact alert | `MotifChipAlert` (type, message, onDismiss) |
| Block alert | `MotifInlineMessage` (type, title, description, action) |

### Overlays
| Need | Use |
|------|-----|
| Centered dialog | `MotifModal` (open, onClose, title, size, footer) |
| Slide-out drawer | `MotifMenu` (open, onClose, title, position, width, footer) |
| Filter panel | `MotifFilterPanel` (sections, searchable, onApply) |

### Buttons (all via Button component)
| Tier | Usage |
|------|-------|
| Primary | `<Button variant="default">` — dark bg (#2E2E38), white text |
| Secondary | `<Button variant="outline">` — transparent + border |
| Tertiary | `<Button variant="ghost">` — no bg, no border |
| Accent | `<Button variant="accent">` — EY blue (#0F69AE) |
| Destructive | `<Button variant="destructive">` — red (#C70117) |

## State Patterns

```tsx
// Modal open/close
const [open, setOpen] = useState(false);
<MotifModal open={open} onClose={() => setOpen(false)} ...>

// Tab selection
const [activeTab, setActiveTab] = useState("overview");
<MotifTabs activeTab={activeTab} onTabChange={setActiveTab} ...>

// Table selection
const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
<MotifTable selectable selectedRows={selectedRows} onSelectionChange={setSelectedRows} ...>

// Sort
const [sortCol, setSortCol] = useState("");
const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
```

## Page Structure Pattern

```tsx
// Standard EY Tax Hub page
export default function DigiLiMPage() {
  return (
    <div style={{ backgroundColor: "var(--background)", minHeight: "100vh", padding: "24px" }}>
      <MotifBreadcrumbs items={[{ label: "Dashboard", onClick: () => navigate("/") }, { label: "DigiLiM+" }]} />
      <div style={{ marginTop: "16px" }}>
        <PageHeader
          title="DigiLiM+"
          subtitle="Income tax litigation case management"
          action={<Button variant="default" onClick={() => setNewCaseOpen(true)}>New Case</Button>}
        />
      </div>
      <div style={{ marginTop: "16px" }}>
        <MotifTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      {/* TATCard row */}
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        {kpis.map(k => <TATCard key={k.label} {...k} />)}
      </div>
      {/* Main content */}
      <div style={{ marginTop: "16px" }}>
        <MotifTable ... />
      </div>
      {/* Modals */}
      <MotifModal open={newCaseOpen} onClose={() => setNewCaseOpen(false)} ... />
    </div>
  );
}
```

## File Structure

Output a single `.tsx` file per screen, placed in `src/app/pages/`:

```
src/app/pages/
  DigiLiMPage.tsx        ← page + all modals in one file
  ResearchAssistantPage.tsx
  ComplianceDashboard.tsx
```

Update `src/app/routes.tsx` to import and route to the new page.

## EY Tax Hub Domain Vocabulary

Use these terms consistently in mock data, labels, and descriptions:

| Term | Description |
|------|-------------|
| AY | Assessment Year (e.g. AY 2025-26) |
| TAT | Turnaround Time |
| PAN | Permanent Account Number |
| ITA | Income Tax Appeal reference (e.g. ITA/2025/0042) |
| DigiLiM+ | Digital Litigation Management module |
| Notice types | Scrutiny, Demand, Appeal, Transfer Pricing, GST |
| Demand (₹ Cr) | Tax demand in crores |
| Ground | Basis of objection in litigation |
| CoE | Center of Excellence |

## Intentional Exceptions (do NOT replace)

- `#EF4444` / `#22C55E` — trend arrow colors (positive/negative deltas)
- `rgba(46,46,56,0.4)` — modal/drawer backdrop
- SVG `fill` / `stroke` attributes for icons
