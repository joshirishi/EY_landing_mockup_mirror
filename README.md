
# Landing page mockup

This is a code bundle for Landing page mockup. The original project is available at https://www.figma.com/design/cfsKAPHNR9Ymuc8ZILs1uV/Landing-page-mockup.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Global content width

Page content rails use one token: `layout.contentWidth` in `src/design-kit/tokens.ts` (default **80%**). Change that value and it applies across pages via `contentRailStyle`, `spacing.sectionPadding`, and CSS `--ey-content-width`.

## Module 1 — Foundational Concepts

`/foundational` **copy** is aligned to the IDEATION Figma frame [Part 1: Foundational Concepts](https://www.figma.com/design/yYWgY4sOAcYYdpJMRLbIyJ/IDEATION_EY-Landing-Page-_-design--Copy-?node-id=3519-2938). Visual styling stays on EY design-kit tokens (EYInterstate, EY Yellow / Off White / Gray / Off Black) — Figma layout colors are not imported.

Cheat Sheet (`#cheatsheet`) follows the reference structure: **Think Beyond Drafting and Summarisation** with columns CREATE / UNDERSTAND / ORGANIZE / THINK and a 4×3 capability card grid (Generate → Advise). Styled with EY tokens (Off White surface, white cards, Off Black type; Yellow as column marker only). Below 900px width it becomes a stacked accordion.

LLM vs AI Agent vs Agentic AI (`#genai-vs-agents`) matches [Figma 3519:3747](https://www.figma.com/design/yYWgY4sOAcYYdpJMRLbIyJ/IDEATION_EY-Landing-Page-_-design--Copy-?node-id=3519-3747) content. Styled with EY dark-module tokens only (`confidentBlack` page, `eyBgCard` panels, `onDark` / `onDarkMuted` text, `borderOnDark`, Yellow markers, spectrum Blue/Green/Purple accents). No ad-hoc color washes. Sticky column + band headers for row compare.

## Module 2 — AI Tax Prompting

`/ai-tax-prompting` **Elements** (`#elements`) shows **7 prompt elements** as a 2-column tabbed card grid (WHAT IT IS / WHY IT MATTERS / WITHOUT / WITH). Tabs stay open once clicked. Styled with EY dark-module tokens. **Iterative Refinement** lives under Techniques (`#advanced`), not Elements.

The **Activity** (`#match-activity`) now runs two exercises sourced from the prompting exercise brief: a 5-question "Choose the Best Answer" MCQ (one question at a time, instant feedback, running score) and a 10-pair "Match the Description" match game (select a description, then its matching term; live "n / 10" score). **Golden Rules** (`#dos-donts`) now lists 7 Do's and 7 Don'ts plus a "Better Prompts → Better Outputs → Better Decisions" Final Rule strip. In **Techniques** (`#advanced`), the "Techniques" wizard tab is temporarily disabled (commented out, not deleted) pending a redesign into a nested 4-step framework (Chain of Thought, Decomposition, Ensemble, Self-Criticism) — the "Level Up" table remains as the interim view.

## Echo feedback

The Echo comment SDK is loaded from `index.html`. After the app opens in a browser, you should see a blue feedback button (FAB) in the bottom-right. Click it to leave a comment; threads show up in your Echo AppDetails page.
  