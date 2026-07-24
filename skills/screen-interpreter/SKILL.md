---
name: screen-interpreter
description: "Interpret any UI input — screenshot, sketch photo, Figma URL, or text brief — and produce a structured Screen Spec JSON for the EY India AI Tax Hub. Use this skill whenever someone says 'interpret this screen', 'what components do I need', 'analyze this mockup', 'break down this UI', or provides an image/URL/description of a screen they want built. Also trigger when the design-orchestrator chains to this skill. This is always the FIRST step in the design-to-code pipeline."
---

# Screen Interpreter — EY India AI Tax Hub

Takes any visual or textual description of a UI screen and produces a **structured Screen Spec JSON** consumed by downstream skills (figma-wireframer, react-implementer).

## Accepted Inputs

1. **Screenshot or sketch photo** — Use vision to identify UI regions, components, layout hierarchy
2. **Figma URL** — Traverse node tree, read layer names, auto-layout settings
3. **Text brief / PRD** — Parse requirements into screen zones

## Step 1: Identify Screen Type

Classify into one of these EY Tax Hub patterns:

- `litigation-case-list` — DigiLiM+ case table with notice management (e.g. ITA/2025/0042)
- `litigation-case-detail` — Single case with grounds, documents, timeline, team
- `research-assistant` — AI query interface with history and results
- `compliance-dashboard` — KPI cards, TAT metrics, filing status overview
- `document-vault` — Enterprise/My Vault document list with filters
- `settings-form` — Tabbed configuration / profile settings
- `wizard-flow` — Multi-step process (e.g. notice upload → review → submit)
- `report` — Filters + data table + export actions

## Step 2: Zone Mapping

Every EY Tax Hub screen is built from these zones:

- `breadcrumb` — Navigation trail (`MotifBreadcrumbs`)
- `pageHeader` — EY Yellow marker + page title + right action (`PageHeader`)
- `tabs` — Tab navigation (`MotifTabs`)
- `toggleGroup` — Binary view switcher (`MotifToggleGroup`, e.g. Enterprise Vault / My Vault)
- `toolbar` — Filters, search, tag group, action buttons
- `metricRow` — KPI strip with TATCards or MotifMetricItems
- `dataTable` — Primary data display (`MotifTable`)
- `activityFeed` — Timeline of user actions (`MotifActivityFeed`)
- `accordionList` — Collapsible sections (`MotifAccordion`)
- `documentList` — Navigable items (`ListRow[]`)
- `filterPanel` — Sidebar filter accordion (`MotifFilterPanel`)
- `stepper` — Multi-step wizard progress (`MotifProgressIndicator`)
- `modals` — Overlay dialogs (`MotifModal`)
- `drawers` — Slide-out panels (`MotifMenu`)
- `inlineMessages` — Block alerts (`MotifInlineMessage`)

## Step 3: Component Intent Mapping

| UI Pattern Detected | Component |
|---------------------|-----------|
| Data grid with rows | `MotifTable` (title, columns, data, selectable, searchable, pagination) |
| Case/entity display card | `MotifAccountCard` (initials, name, role, status, details, actions) |
| Timeline / audit trail | `MotifActivityFeed` (items: id, initials, name, action, time) |
| Collapsible sections | `MotifAccordion` (items: id, title, content, subtitle?) |
| Page heading | `PageHeader` (title, subtitle, action) |
| Section heading | `ZoneHeader` (title, subtitle) — always with EY Yellow marker |
| KPI metric | `MetricCard` (title=value, description=label, stats, chip) |
| Compact KPI | `TATCard` (label, value, chipText, chipVariant) |
| Single metric atom | `MotifMetricItem` (label, value, trend, icon) |
| Navigation trail | `MotifBreadcrumbs` (items, showBack) |
| Tab strip | `MotifTabs` (tabs, activeTab, variant: underline/contained/pill) |
| Binary toggle | `MotifToggleGroup` (options, value) |
| Status badge | `Chip` (text, variant: success/warning/critical/neutral) |
| Count / dot badge | `MotifBadge` (variant, mode: label/dot/count/mini/dotOnly) |
| Inline compact alert | `MotifChipAlert` (type, message, onDismiss) |
| Block alert | `MotifInlineMessage` (type, title, description, action) |
| Card wrapper | `DSCard` → `DSCardHeader` → `DSCardBody` → `DSCardFooter` |
| Key-value info strip | `MetadataRow` (items: icon, label, value) |
| Navigable list item | `ListRow` (icon, title, subtitle, right, onClick) |
| Centered dialog | `MotifModal` (title, subtitle, size: sm/md/lg/xl, footer) |
| Slide-out panel | `MotifMenu` (title, subtitle, position, width, footer) |
| Filter sidebar | `MotifFilterPanel` (sections, searchable, onApply) |
| Avatar stack | `MotifAvatarGroup` (users, max, size) |
| Avatar + label | `MotifAvatarLabelGroup` (initials, name, subtitle, status) |
| Segmented switcher | `MotifContentSwitcher` (items, activeId, fullWidth) |
| Filter tag | `MotifTag` (label, variant, selected, onRemove) |
| Divider | `MotifContentDivider` (label, variant, spacing) |
| Empty placeholder | `MotifEmptyState` (icon, title, description, action) |
| Step wizard | `MotifProgressIndicator` (steps, currentStep, orientation) |
| Linear progress | `MotifProgressBar` (value, label, variant) |
| Circular progress | `MotifProgressCircle` (value, label, variant) |
| Loading spinner | `MotifProgressLoader` (size, label) |

## Step 4: Output Screen Spec JSON

```json
{
  "screenType": "litigation-case-list",
  "title": "DigiLiM+ — Litigation Cases",
  "description": "Manage income tax notices and litigation cases",
  "zones": {
    "breadcrumb": {
      "type": "MotifBreadcrumbs",
      "items": ["Dashboard", "DigiLiM+"],
      "showBack": false
    },
    "pageHeader": {
      "type": "PageHeader",
      "title": "DigiLiM+",
      "subtitle": "Income tax litigation case management",
      "action": { "type": "Button", "variant": "default", "label": "New Case" }
    },
    "tabs": {
      "type": "MotifTabs",
      "variant": "underline",
      "tabs": ["All Cases", "Pending Response", "Hearing Scheduled", "Closed"]
    },
    "metricRow": {
      "type": "TATCard[]",
      "items": [
        { "label": "TOTAL CASES", "value": "42", "chipText": "Active", "chipVariant": "success" },
        { "label": "AVG TAT", "value": "3.2 days", "chipText": "On Track", "chipVariant": "success" },
        { "label": "OVERDUE", "value": "5", "chipText": "At Risk", "chipVariant": "critical" }
      ]
    },
    "dataTable": {
      "type": "MotifTable",
      "columns": ["Case Name/ID", "Notice Type", "Entity", "Demand (₹ Cr)", "Deadline", "Status", "Assignee", "Actions"],
      "features": ["selectable", "searchable", "sortable", "pagination", "row-click"]
    }
  },
  "modals": [
    {
      "name": "NewCase",
      "trigger": "New Case button",
      "type": "MotifModal",
      "size": "md",
      "fields": [
        { "type": "Input", "label": "Case Reference", "required": true },
        { "type": "Input", "label": "Entity Name", "required": true },
        { "type": "Select", "label": "Notice Type", "required": true }
      ]
    }
  ],
  "dataRequirements": {
    "entities": ["LitigationCase"],
    "fields": ["id", "caseName", "noticeType", "entity", "demandCr", "deadline", "status", "assignee", "createdAt"]
  }
}
```

## Step 5: Pass to Next Agent

Output the Screen Spec JSON and announce: "Screen Spec ready. Pass this to `figma-wireframer` to create the Figma file, or to `react-implementer` to generate code directly."

## Important Rules

- **Always use Motif DS component names** — never say "dropdown", say `MotifFilterPanel`. Never say "popup", say `MotifModal`.
- **Identify ALL modals and drawers** — look for buttons that trigger overlays.
- **EY Tax Hub domain vocabulary** — cases, notices, queries, grounds, TAT, compliance, entities, PAN, AY (Assessment Year), demand (₹ Cr).
- **PageHeader on every page** — always includes the EY Yellow 3px vertical brand marker.
- **ZoneHeader for dashboard sections** — each 4-zone grid area gets a ZoneHeader.
