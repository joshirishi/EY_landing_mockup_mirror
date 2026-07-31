---
type: pattern
description: Accordion, comparison grid, cheat sheet rows, quiz cards, and two-path compare patterns
tags: [pattern, accordion, comparison, quiz, cheatsheet]
---

# Pattern: Accordion, Comparison & Quiz

Recurring interactive patterns used in the Foundational Concepts HTML lesson and AI Tax Prompting module.

---

## Accordion (Cheat Sheet columns)

Used in: `#cheatsheet` section of [[Pages/FoundationalConcepts]]

Native HTML — no library required:

```html
<details class="cheat-card">
  <summary>
    <svg>…<!-- stroke chevron icon --></svg>
    <strong>Prompt Element: Context</strong>
  </summary>
  <div class="cheat-body">
    <p>What the AI needs to know before responding…</p>
    <div class="cheat-example">Example prompt snippet here</div>
  </div>
</details>
```

**Chevron:** Stroke SVG (Lucide `ChevronDown`), rotates 180° when open via CSS.  
**Do not** use emoji (▼ ▲) as expand indicators.

---

## Comparison grid (GenAI vs Agents)

Used in: `#genai-vs-agents` section of [[Pages/FoundationalConcepts]]

```html
<div class="gva-table">
  <div class="gva-header">  <!-- sticky column headers -->
    <div class="gva-col-label">GenAI</div>
    <div class="gva-col-label">Agents</div>
  </div>
  <div class="gva-row">
    <div class="gva-cell">Reactive</div>
    <div class="gva-cell">Proactive</div>
  </div>
</div>
```

- `position: sticky; top: 0` on `.gva-header`
- Dark card surface (`.gva-section` background)
- Spectrum category colors for row category labels

---

## Two-path comparison (Strategic Divide)

Used in: `#strategic-divide` section of [[Pages/FoundationalConcepts]]

```html
<div class="paths-container">
  <div class="paths-card bad">
    <h3>Without AI</h3>
    <!-- content -->
  </div>
  <div class="paths-vs">VS</div>
  <div class="paths-card good">
    <h3>With EY.ai</h3>
    <!-- content -->
  </div>
</div>
```

- VS diamond: circular badge, yellow fill
- `.bad` card: subtle red/destructive accent
- `.good` card: green/success accent

---

## Quiz cards

Used in: `#quiz` section of [[Pages/FoundationalConcepts]]

```html
<div class="quiz-card" data-correct="b">
  <p class="quiz-question">What is the primary benefit of…?</p>
  <div class="quiz-options">
    <button class="quiz-opt" data-value="a">Option A</button>
    <button class="quiz-opt" data-value="b">Option B (correct)</button>
    <button class="quiz-opt" data-value="c">Option C</button>
  </div>
  <p class="quiz-feedback"></p>
</div>
```

- Correct answer: `colors.success` (green) feedback
- Wrong answer: `colors.destructive` (red) feedback
- Feedback text set by inline JS after click

---

## Left-nav wizard (7 Elements, Advanced Techniques)

Used in: `#elements` and `#advanced` of [[Pages/AiTaxPrompting]]

```tsx
// React implementation
<div style={{ display: 'flex', gap: 0 }}>
  <nav style={{ /* facet list */ }}>
    {facets.map((f, i) => (
      <button
        key={f.id}
        style={{
          borderLeft: activeIdx === i ? `3px solid ${colors.yellow}` : '3px solid transparent',
        }}
        onClick={() => setActiveIdx(i)}
      >
        {f.label}
      </button>
    ))}
  </nav>
  <div style={{ /* detail pane */ }}>
    {facets[activeIdx].content}
  </div>
</div>
```

- Active facet: `3px solid colors.yellow` left border
- Each facet has a Spectrum color (from `spectrumGradients`) for its icon/accent

---

## Cheat row pattern

Used in: `#cheatsheet` cheat cards:

```
[Icon] Element name       ← 13px bold
      Example prompt text ← 14px light, gray01
```

---

## Related

- [[Pages/FoundationalConcepts]] — primary location of accordion/comparison/quiz
- [[Pages/AiTaxPrompting]] — left-nav wizard patterns
- [[Design/design-system]] — colors for feedback states
- [[Patterns/HtmlLesson]] — token bridge for HTML lesson patterns
