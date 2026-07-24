---
name: ux-auditor
description: "Run a structured UX audit on any EY India AI Tax Hub screen — screenshot, Figma URL, or React code — using Peter Morville's UX Honeycomb, tailored to EY's tax advisory workflows. Use this skill whenever someone says 'audit this screen', 'check the UX', 'review this for usability', 'is this good enough', 'UX review', 'accessibility check', 'design review', or when the design-orchestrator chains to this skill. Also trigger when someone asks about 'honeycomb', 'usability score', or 'UX quality'. Produces a scored report with specific fix recommendations."
---

# UX Auditor — EY India AI Tax Hub

Evaluates any screen against the **UX Honeycomb** framework, customized for EY's tax advisory platform. Produces a scored report with actionable fixes.

## Accepted Inputs

- Screenshot or photo of a screen
- Figma URL (read via `use_figma` MCP)
- React/TSX component code (read directly)
- Screen Spec JSON (from screen-interpreter)

## The EY Tax Hub UX Honeycomb

Seven dimensions, weighted for tax advisory workflows:

### 1. USEFUL (Weight: 20%)

**Question:** Does this screen directly serve a tax professional's core workflow?

**EY-specific criteria:**
- Supports a core task: notice response, research query, compliance tracking, litigation management, document upload
- Would a Tax CoE member or partner-level user rely on this screen daily or weekly?
- Does it reduce a multi-tool workflow to one screen?
- Does it surface tax-critical data: demand amounts, deadlines, AY references, PAN?

**Scoring:**
- **A:** Core workflow screen — notice management, research query, compliance calendar
- **B:** Supporting screen — document vault, team assignment, engagement settings
- **C:** Administrative utility — profile settings, notification preferences
- **D:** Unclear purpose or duplicates another screen

### 2. USABLE (Weight: 20%)

**Question:** Can a tax professional complete their primary task efficiently?

**EY-specific criteria:**
- Primary action achievable in ≤ 3 clicks from the screen
- Bulk actions available when table has > 5 rows (e.g. bulk assign, bulk download)
- Search and filter available on case/document lists
- Forms have sensible defaults (AY auto-set to current, deadline pre-filled from notice date)
- Destructive actions (delete case, reject query) require confirmation
- Loading and error states are handled

**Scoring:**
- **A:** Primary task ≤ 2 clicks, bulk actions present, smart defaults, inline validation
- **B:** Primary task ≤ 3 clicks, search available, reasonable flow
- **C:** 4+ clicks, no bulk actions, missing search
- **D:** Confusing flow, no clear primary action

### 3. DESIRABLE (Weight: 10%)

**Question:** Does it feel like a premium EY-grade enterprise tool?

**EY-specific criteria:**
- EY brand tokens applied: `--foreground` (#2E2E38), `--accent` (#0F69AE), `--ey-yellow` (#FFE600)
- EYInterstate font used on all text nodes
- EY Yellow brand marker (3px vertical pill) on every PageHeader and ZoneHeader
- Card-based layout with `--radius-card` (8px) borders
- Clean information hierarchy — no visual clutter
- Professional data formatting: ₹ Cr with 1 decimal, dates in DD Mon YYYY, AY in AY YYYY-YY

**Scoring:**
- **A:** Fully EY-branded, premium feel, polished interactions
- **B:** Mostly on-brand, clean but minor polish missing
- **C:** Generic styling, missing EY Yellow markers or wrong font
- **D:** Off-brand, cluttered, uses hardcoded hex values

### 4. FINDABLE (Weight: 15%)

**Question:** Can the user locate this screen and navigate within it?

**EY-specific criteria:**
- Accessible from sidebar nav within 2 levels
- `MotifBreadcrumbs` present and accurate on every screen
- `MotifTabs` used for multi-section screens (e.g. Overview / Documents / Activity)
- Related actions co-located (case actions on case row, not in a separate menu)
- Back navigation predictable — uses `showBack` on MotifBreadcrumbs

**Scoring:**
- **A:** Clear nav path, breadcrumbs always present, logical tab structure
- **B:** Nav path exists but slightly unintuitive
- **C:** Missing breadcrumbs, buried navigation
- **D:** No path to reach this screen from sidebar

### 5. ACCESSIBLE (Weight: 15%)

**Question:** Can all users interact with this screen? (WCAG 2.1 AA)

**Criteria:**
- Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- All interactive elements keyboard-accessible (Tab, Enter, Escape)
- Focus ring visible: `3px solid var(--ring)` (#0F69AE) on focused elements
- `aria-label` on icon-only buttons (e.g. filter icon, close button)
- Form fields have proper `<label>` — never placeholder-only
- `MotifTable` column headers have `scope="col"`, row headers `scope="row"`
- No information conveyed by color alone (status badges must have text + color)

**Scoring:**
- **A:** Full WCAG 2.1 AA compliance, keyboard nav tested
- **B:** Minor issues — 1-2 missing aria-labels, one contrast issue
- **C:** Multiple issues — keyboard nav broken, form labels missing
- **D:** Major barriers — no keyboard access, critical contrast failures

### 6. CREDIBLE (Weight: 10%)

**Question:** Does the data presentation inspire trust for a tax professional?

**EY-specific criteria:**
- Demand amounts in ₹ Cr with 1 decimal (e.g. "₹4.2 Cr")
- Dates formatted DD Mon YYYY (e.g. "28 Feb 2026")
- AY formatted as "AY 2025-26"
- PAN displayed as `XXXXX####X` masked format where appropriate
- "Last updated" or timestamp on all data-heavy cards
- Empty states use `MotifEmptyState` — never blank or null rendered regions
- Audit trail / activity feed available on case detail screens

**Scoring:**
- **A:** All data sourced, timestamped, consistently formatted per EY standards
- **B:** Mostly clean, minor formatting inconsistencies
- **C:** Missing timestamps, inconsistent number formats
- **D:** Unlabeled metrics, raw IDs instead of named entities, no data provenance

### 7. VALUABLE (Weight: 10%)

**Question:** Does this screen support EY's tax advisory mission?

**EY-specific criteria:**
- Reduces time-to-respond to income tax notices
- Improves research query turnaround for Tax CoE members
- Supports compliance deadline management and TAT tracking
- Enables partner/manager oversight of case portfolio
- Would removing this screen increase manual effort or compliance risk?

**Scoring:**
- **A:** Directly reduces TAT or compliance risk for tax professionals
- **B:** Supports operational efficiency that enables advisory quality
- **C:** Administrative utility, indirect value
- **D:** Unclear business value

## Figma Fidelity Check (Run FIRST)

Before scoring the Honeycomb, verify the implementation matches the Figma design.

| Item | How to verify |
|------|--------------|
| Section presence | Every top-level section in the Figma frame is built |
| Table columns | Column names, order, and types match exactly |
| Chart types | Bar vs Line vs Donut — match Figma, not a substitute |
| Tab labels | Exact text match |
| Breadcrumb path | Dynamic, not hardcoded |
| EY Yellow markers | Present on PageHeader and ZoneHeader |
| Metric card values | Eyebrow labels are uppercase, values use correct format |

**Fidelity Scoring:** Pass / Warn / Fail
- **Fail** → Stop audit, report gaps. Do not score Honeycomb until fixed.

## Output Format

```
## UX Audit Report: [Screen Name]

### Overall Score: [A/B/C/D]

| Dimension   | Weight | Score | Key Finding |
|-------------|--------|-------|-------------|
| Useful      | 20%    | A     | Core litigation management workflow |
| Usable      | 20%    | B     | Bulk assign requires 4 clicks |
| Desirable   | 10%    | B     | EY Yellow markers present, missing TAT format |
| Findable    | 15%    | A     | Breadcrumbs accurate, tab structure clear |
| Accessible  | 15%    | C     | Icon buttons missing aria-labels |
| Credible    | 10%    | B     | Demands formatted, timestamps missing |
| Valuable    | 10%    | A     | Directly supports notice TAT reduction |

### Fix Recommendations (Priority Order)

1. **[ACCESSIBILITY]** Add aria-label to all icon buttons: `aria-label="Filter cases"`
2. **[ACCESSIBILITY]** Add focus ring to MotifTable row checkboxes
3. **[USABILITY]** Add "Bulk Assign" to table toolbar when rows are selected
4. **[CREDIBILITY]** Add "Last synced: X min ago" to table footer
5. **[DESIRABLE]** Add ZoneHeader above metric TATCard row

### EY Brand Compliance
- ✅ EYInterstate font applied
- ✅ EY Yellow markers on PageHeader
- ⚠️  Demand amounts missing ₹ Cr suffix on 2 columns
- ❌ One hardcoded #2E2E38 found — replace with var(--foreground)
```

## Important Rules

- **Be specific** — "Add aria-label to close button in MotifModal" not "improve accessibility"
- **Include code patches** — show exact TSX change for React code audits
- **Score honestly** — a 'C' is useful signal, don't inflate
- **Always run Figma Fidelity Check first** — never score on fabricated code
- **Reference the EY-India-AI-Tax-Hub-Design-System.md** for visual consistency checks
- **EY Yellow is sacred** — PageHeader and ZoneHeader without the yellow marker always scores 'C' or lower on Desirable
