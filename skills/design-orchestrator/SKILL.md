---
name: design-orchestrator
description: "Run the full design-to-code pipeline for the EY India AI Tax Hub: interpret a screen → wireframe in Figma → implement in React → audit UX. Use this skill whenever someone says 'build this screen end to end', 'full pipeline', 'create this from scratch', 'design and implement this', or provides an image/sketch/PRD and expects both a Figma file and working React code. Also trigger when someone says 'run the chain', 'agent chain', or 'orchestrate'. This skill chains together screen-interpreter → figma-wireframer → react-implementer → ux-auditor in sequence, re-running steps if the audit returns scores below B."
---

# Design Orchestrator — EY India AI Tax Hub

Chains the 4 EY-specific agent skills in sequence to go from any input to a fully implemented, audited screen using EY Motif DS 4.17.

## The Chain

```
Input (image / Figma URL / PRD / text brief)
  │
  ▼
┌─────────────────────────┐
│  1. SCREEN INTERPRETER  │  → Screen Spec JSON
│  skill: screen-interpreter │  (EY Tax Hub domain, Motif DS components)
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│  2. FIGMA WIREFRAMER    │  → Figma URL + component map
│  skill: figma-wireframer │  (EY brand tokens, EYInterstate font)
│  (skip if no Figma PAT) │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│  3. REACT IMPLEMENTER   │  → .tsx file in src/app/pages/
│  skill: react-implementer│  (ds-cards + motif-ds + EY tokens)
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────┐
│  4. UX AUDITOR          │  → Scored audit report
│  skill: ux-auditor       │  (EY Honeycomb, tax workflow criteria)
└──────────┬──────────────┘
           │
           ▼
     Score check
     ┌──────────┐
     │ All ≥ B? │──Yes──→ Package deliverables ✓
     └────┬─────┘
          │ No
          ▼
     Route fixes to relevant skill → re-audit (max 2 loops)
```

## How to Run

### Full Pipeline
When the user provides an input and wants everything:

1. **Invoke screen-interpreter** — analyze input, produce Screen Spec JSON (EY Tax Hub domain)
2. **Check: Figma MCP available?**
   - Yes → Invoke figma-wireframer with Screen Spec (EY brand tokens)
   - No → Skip to step 3, note wireframe was skipped
3. **Invoke react-implementer** — generate TSX from Screen Spec using ds-cards + motif-ds
4. **Run token-enforcer** — scan generated TSX for any hardcoded hex/Tailwind color violations
5. **Invoke ux-auditor** — audit generated code and/or screenshot (EY Honeycomb)
6. **Check audit scores:**
   - All dimensions ≥ B → Package and deliver
   - Any dimension < B → Route the fix:
     - **Accessibility / Usability** → re-invoke react-implementer with specific patches
     - **Desirable** (brand/token issue) → run token-enforcer, then re-invoke react-implementer
     - **Findable** → update breadcrumbs/tabs in the page component
   - Re-audit after fixes (max 2 fix loops)

### Partial Pipeline

- "Just interpret" → Only screen-interpreter
- "Just implement" → Only react-implementer
- "Just audit" → Only ux-auditor
- "Check tokens" → Only token-enforcer
- "Interpret and implement" → screen-interpreter → react-implementer → token-enforcer
- "Figma only" → screen-interpreter → figma-wireframer

### Fix Mode

If the user has an existing screen and audit report:
- Read the audit report
- Identify which dimensions scored < B
- Apply fixes to the relevant `.tsx` file
- Re-run token-enforcer to catch any introduced violations
- Re-run ux-auditor to verify

## Deliverables Package

At the end of a full pipeline run, present:

1. **Figma file URL** (if created)
2. **TSX component file** — `src/app/pages/[ScreenName]Page.tsx`
3. **Route addition** — entry in `src/app/routes.tsx`
4. **UX Audit report** — inline in chat
5. **Token audit report** — inline in chat (from token-enforcer)
6. **Screen Spec JSON** — for reference / future modifications

## Important Rules

- **Always run token-enforcer** after react-implementer — even a single hardcoded hex is a design system violation
- **Always run ux-auditor** — quality control is automatic, not optional
- **Max 2 fix loops** — after 2 loops, present the best result with remaining issues noted
- **Skip Figma gracefully** — if no Figma MCP connected, skip step 2 and proceed. The pipeline works without Figma.
- **Announce each step** — tell the user what's happening: "Step 1: Interpreting your screen..." "Step 3: Generating TSX code..."
- **EY brand is non-negotiable** — PageHeader must have EY Yellow marker, EYInterstate must be on all text nodes, all colors via CSS tokens

## Example Invocation

```
User: "Build the Research Assistant screen. Here's the brief." [text]

Orchestrator:
  → "Step 1: Interpreting your brief..."
    [invokes screen-interpreter]
    → Screen Spec: { screenType: "research-assistant", zones: {...} }

  → "Step 2: Skipping Figma wireframe (no PAT configured)"

  → "Step 3: Generating React code..."
    [invokes react-implementer with Screen Spec]
    → ResearchAssistantPage.tsx created

  → "Step 3b: Running token audit..."
    [invokes token-enforcer]
    → 2 Tailwind color utilities replaced with var(--muted)

  → "Step 4: Running UX audit..."
    [invokes ux-auditor]
    → Audit: Useful=A, Usable=B, Desirable=B, Findable=A, Accessible=C, Credible=B, Valuable=A
    → Fix needed: Accessibility (C)

  → "Fixing accessibility issues..."
    [re-invokes react-implementer with specific patches]
    → Added aria-labels to icon buttons, focus rings to checkboxes

  → "Re-auditing..."
    [re-invokes ux-auditor]
    → All dimensions ≥ B ✓

  → "Done! Here are your deliverables:"
    [presents files + audit report]
```
