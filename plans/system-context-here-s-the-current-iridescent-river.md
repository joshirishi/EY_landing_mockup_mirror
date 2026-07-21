# Plan: EY India AI Tax Hub Mockup — Two-Frame Navigation

## Context

The user has two Figma frames imported into `src/imports/`:
- **Home2** (`/src/imports/Home2/index.tsx`) — Landing page with hero, three product cards, and footer
- **Frame353** (`/src/imports/Frame353/index.tsx`) — Two screens side-by-side in the Figma canvas:
  - `EyAiTaxLabsPhasedEngagement` — "Compliance / Phased Engagement" detail page (1416px wide, absolutely positioned at `left:234px, top:299px`)
  - `EyAiTaxLabsPhase` — "Phase 1" course page (1720px wide, absolutely positioned at `left:1758px, top:261px`)

The default export `Frame43` renders both Frame353 screens positioned on a shared canvas. Neither sub-component is exported. The goal is a navigable mockup: **Landing page → Phased Engagement → Phase 1**.

## Design System

All wrapper/overlay UI uses CSS variables already defined in `src/styles/theme.css` (`--background`, `--foreground`, etc.). Fonts (`EYInterstate`, `Inter`) are referenced by the Figma imports as `font-['EYInterstate:Bold',sans-serif]` etc. — no new font setup needed.

## Implementation Approach

### Step 1 — Export sub-components from `src/imports/Frame353/index.tsx`

Add two new named exports that wrap the existing internal components, overriding the `absolute` + `left`/`top` positioning so they render in normal document flow:

```tsx
// New named exports at bottom of Frame353/index.tsx
export function PhasedEngagementView() {
  // Renders EyAiTaxLabsPhasedEngagement content but with position:relative, left/top reset to 0
  return (
    <div className="relative bg-white flex flex-col items-center overflow-clip w-[1416px]">
      {/* ... same internal JSX as EyAiTaxLabsPhasedEngagement ... */}
    </div>
  );
}

export function Phase1View() {
  // Renders EyAiTaxLabsPhase content but with position:relative, left/top reset to 0
  return (
    <div className="relative bg-white flex flex-col items-start overflow-clip w-[1720px]">
      {/* ... same internal JSX as EyAiTaxLabsPhase ... */}
    </div>
  );
}
```

The Figma source has the full JSX already — these exports copy that JSX verbatim but drop `absolute left-[234px] top-[299px]` from the root div's className.

### Step 2 — Update `src/app/App.tsx`

Use React `useState` for three-state routing: `'home' | 'phased' | 'phase1'`.

Render structure:
```tsx
export default function App() {
  const [page, setPage] = useState<'home' | 'phased' | 'phase1'>('home');

  return (
    <div className="relative size-full overflow-auto">
      {page === 'home' && (
        <div className="relative" style={{ minWidth: 1416, minHeight: 1150 }}>
          <HomeFrame />  {/* default export from Home2/index */}
          {/* Transparent click overlay over EY.ai Tax Labs "Know more" button */}
          <div
            className="absolute cursor-pointer"
            style={{ left: 1296, top: 650, width: 429, height: 391 }}
            onClick={() => setPage('phased')}
          />
        </div>
      )}
      {page === 'phased' && (
        <div className="overflow-x-auto">
          <PhasedEngagementView />  {/* named export from Frame353 */}
          {/* Transparent click overlay over Timeline Phase 1 card */}
          <div
            className="absolute cursor-pointer"
            style={{ left: 192, top: 860, right: 64, height: 100 }}
            onClick={() => setPage('phase1')}
          />
        </div>
      )}
      {page === 'phase1' && (
        <div className="overflow-x-auto">
          {/* Back button outside Figma component */}
          <button onClick={() => setPage('phased')} className="fixed top-4 left-4 z-50 ...">← Back</button>
          <Phase1View />
        </div>
      )}
    </div>
  );
}
```

**Navigation wiring:**
- **Home → Phased**: Click overlay positioned over the 3rd card (EY.ai Tax Labs) in Section1. The card group starts around `x:40, y:628` inside the white section with a `p-[40px]` container, cards are at `height:391px`. Overlay covers the EY.ai Tax Labs card.
- **Phased → Phase 1**: Click overlay over the first timeline phase card (Timeline-Phase-1), roughly `y:860` within the content area.
- **Phase 1 → Phased**: A small fixed "← Back to Overview" button in the top-left corner (z-50, outside Figma layout).

### Step 3 — Home2 absolute-positioning fix

The `Home` default export from Home2 has `Body` absolutely positioned at `top: 107px` and nav absolutely at `top: 0`, all inside a `relative size-full` container. This works correctly when the parent has explicit dimensions. Set the wrapper div to `style={{ width: 1416, height: 1260 }}` to establish the correct containing block.

## Critical Files

| File | Change |
|------|--------|
| `src/imports/Frame353/index.tsx` | Add `PhasedEngagementView` and `Phase1View` named exports (copy internal component JSX, remove absolute+left+top from root div) |
| `src/app/App.tsx` | State-based routing, render each view with overflow wrappers and click overlays |

## Overlay Positioning Notes

The Figma frames use fixed pixel layouts. Click overlay positions are derived from the Figma component structure:

**Home → Phased** overlay (EY.ai Tax Labs card):
- Section1 padding: `p-[40px]`, cards start after `Container2` (108px tall)
- Third card (Frame18) is at ~`x:1008` (after two 429px cards + 24px gaps + 40px padding), `y:~628`
- Overlay: `left:1008, top:628, width:429, height:391`

**Phased → Phase 1** overlay (Timeline Phase 1 card):
- ContentArea has `pb-[80px]`, Frame39 header is ~200px tall, TimelinePhase starts ~80px below
- Timeline stack: `px-[64px]`, Phase 1 card at approximately `top: 700` from start of ContentArea
- Overlay: covers the first timeline card row, roughly `y:700` in ContentArea

**Back button**: Fixed positioned, `z-50`, outside Figma layout — no positioning math needed.

## Verification

1. Preview shows landing page with EY hero, three cards, footer
2. Clicking EY.ai Tax Labs card area transitions to the Phased Engagement page (AI schematic + 4 timeline phases)
3. Clicking Timeline Phase 1 card transitions to the Phase 1 course grid (3 course cards)
4. Back button returns to Phased Engagement view
5. All EY branding, yellow accents, EYInterstate typography render correctly via Figma-imported components
