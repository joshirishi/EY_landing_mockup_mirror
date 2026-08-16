---
type: reference
source-folder: reference/
last-updated: 2026-08-17T00:00:00Z
tags: [reference, source-map, interconnections, content]
---

# Reference source map — how materials connect

One graph of `reference/` → live data → live page. Do not invent extra sources. Missing files are marked **absent**.

Related: [[Reference/index]] · [[Reference/html-prototypes]] · [[Pages/GuidanceImplementation]] · [[Pages/BrainstormingUseCases]] · [[Pages/FoundationalConcepts]] · [[Pages/M365CopilotHub]]

---

## 1. Two libraries on the same shelf

The Workshop Reference Library (`#p5-templates` on Phase 3, `#workshop-library` on Phase 2) is **one bookshelf with two catalogs**.

```
Prompt Template Library          Agent Template Library
Priya PPT (21 books)             Sample use cases.xlsx agents (9 books)
        \                              /
         \                            /
          PromptBookshelfLibrary.tsx
           Phase 2  +  Phase 3
```

| Library tab | Source | Live data | Pages in each book |
|-------------|--------|-----------|--------------------|
| Prompt Template Library | `reference/3.1 - Sample Prompt Templates_Priya.pptx` (63 slides, 21 templates × 3) | `src/data/prompt-library.ts` | PPT slide wording (role / guardrails / techniques) |
| Agent Template Library | Sheet1 of **`Sample use cases.xlsx` (absent)** — same 9 agents as hidden Phase 3 `AGENT_LIBRARY` | `src/data/agent-template-library.ts` | Purpose · Actions · Outcome |

UI: `src/components/PromptBookshelfLibrary.tsx`  
Used by: [[Pages/GuidanceImplementation]] `#p5-templates` · [[Pages/BrainstormingUseCases]] `#workshop-library`

The hidden Phase 3 panel (`SHOW_P3_AGENT_TEMPLATES = false`, label “Agent Instruction Library”) is the **same 9 agents**, not a third list.

---

## 2. Prompt examples vs prompt templates (easy to mix up)

| Name in product | Source | What it is | Live home |
|-----------------|--------|------------|-----------|
| EY-Guided Prompt Examples (`#guided-examples`) | `Sample use cases.xlsx` Sheet1 **(absent)** | Short purpose / approach / outcome cards (Concept Note, Facts-to-Law, …) | [[Pages/BrainstormingUseCases]] `GUIDED_EXAMPLES` · [[Content/phase2-slide-5]] |
| Prompt Template Library | Priya PPT | Full copy-paste prompt frameworks | `prompt-library.ts` |
| `reference/prompt-library-v2_priya.html` | Earlier HTML of the Priya library | Prototype only — not loaded by the app | — |

---

## 3. Agent instruction *practices* vs agent *templates* (easy to mix up)

| Name | Source | What it is | Live home |
|------|--------|------------|-----------|
| Agent Template Library (9 named agents) | `Sample use cases.xlsx` **(absent)** | Catalogue of example agents | `agent-template-library.ts` · [[Content/phase2-slide-6]] |
| Agent Best Practices (10 practices) | `reference/Agent Best Practices mailer content.xlsx` (duplicate: `reference/assets/…`) | How to *write* instructions | `src/data/agent-best-practices.ts` |
| Tax Agent Instruction Navigator | `reference/tax_agent_instruction_navigator.html` | 10 practices + 6 failures + 9 patterns | Prototype only. Source note also cites **Template pattern mailer .docx (absent)** |
| M365 Copilot Hub practices | Same xlsx + Microsoft Learn pages in the hub | Interactive “create an agent” walkthrough | [[Pages/M365CopilotHub]] |

Best-practices xlsx is **already used** on Phase 3 Quick Recall (`#p3-prompts`) and the Copilot Hub. It is **not** the second bookshelf catalog.

---

## 4. Phase workshop decks

| Source | Vault / live |
|--------|----------------|
| Phase 2 PDF (older `reference/PDFs/ACFrOg….pdf` path — **stale**) | [[Content/phase2-workshop]] + slides 1–9 |
| `reference/PDF/phase3.pdf` | Current Phase 3 file. [[Content/phase3-guidance]] still names the old hashed PDF path |
| `reference/Friday workshop Notes.md` | Stakeholder list (rebrand, HITL, library headers, module copy). Not auto-applied |

Phase 3 live page [[Pages/GuidanceImplementation]] now: Bingo · Quick Recall (xlsx practices) · Use Cases · HITL · Reference Library (two catalogs). Hidden Panel 6 still holds the 9-agent picker.

---

## 5. Human-in-the-loop art

```
reference/HILT/art-01.png … art-08.png
        ↓ copied to
public/hitl/art-01.png … art-08.png
        ↓
src/components/HitlUnderstandModal.tsx
        ↓
[[Pages/GuidanceImplementation]] #p3-hitl
```

Also in `reference/HILT/`: `comic-01`–`comic-08.png`, `Frame 381.png` (same art as `public/hitl/`). Comics / Frame 381 are source art; the understand-modal uses the **art-0N** set.

---

## 6. Foundational Concepts — HTML + news + pipeline images

```
reference/html/Foundational_Concepts.html
        ↓ working copy
src/imports/Foundational_Concepts.html
        ↓ injected by
[[Pages/FoundationalConcepts]]
```

Hallucination / news beat: `reference/images/` and `reference/hallucination images/` plus `reference/Newspaper articles.docx` / `reference/news articles/`. The live lesson comments point at `reference/images/` for the carousel.

Inside-the-model tabs use **generated** stills in `public/pipeline/tab-tokens.png`, `tab-llm.png`, `tab-knowledge.png`, `tab-rag.png` (not files under `reference/`).

---

## 7. M365 Copilot decks and recordings

| Source | Feeds |
|--------|--------|
| `reference/M365_Copilot_Agents_Features_Overview 2.pptx` (+ `msagent_1.3/` copy) | [[Pages/M365CopilotHub]] agent features / builder tour |
| `reference/M365 Copilot chat features.pptx` | Hub chat-features tour |
| `reference/MS Apps Screen Recordings/` (Word, Excel, PPT, Outlook, Teams `.mp4` + `msagent1/2.png`) | App-stage / recording stills |
| `reference/assets/copilot1.png`–`copilot4.png`, `m365_agent.png` | Copilot UI stills |
| `reference/images/Copilot beyond chat mailer_gif.gif` | Beyond-chat mailer motion |
| `reference/assets/AI Tax Hub Design.pptx` | Early hub design deck |

Live logos for the hub dock live in `public/pipeline/*.svg` (product marks), not in `reference/`.

---

## 8. HTML blueprints → live routes

See [[Reference/html-prototypes]] for the table. Short form:

| `reference/html/` | Live |
|-------------------|------|
| `Foundational_Concepts.html` | `/foundational` |
| `ai-tax-prompting1.html` | `/ai-tax-prompting` |
| `copilot_dashboard.html` + `AI_Labs_1.1.html` + `m365-copilot-redesign.html` | `/copilot-hub` |
| `ey_design_system.html` | `src/design-kit/` |
| `phase1.html` (if present in older trees) | `/phase1` |

`reference/css/default_shadcn_theme.css` is a leftover theme file — **not** the EY kit. Canonical tokens: `src/design-kit/tokens.ts`.

---

## 9. Echo + workshop notes (process, not curriculum)

| File | Role |
|------|------|
| `reference/Friday workshop Notes.md` | 7 Aug 2026 meeting list (Tax Labs → “AI for Tax Excellence”, HITL, library naming) |
| `reference/echo-thread-tracker.md` | Echo thread tracker |
| `reference/echo-latest-open.json` | Open Echo threads |
| `reference/echo-open-threads-audit.json` | Audit dump |
| `reference/echo-gap-analysis.json` | Gap analysis |
| `reference/echo-reconcile-inventory.json` | Reconcile inventory |
| `reference/echo-resolved-batch.json` | Resolved batch |
| `reference/echo-deferred-backlog.txt` | Deferred backlog |

These explain *why* some UI changed. They are not slide wording.

---

## 10. One-page chain (curriculum)

```
Phase 1 HTML / decks
  → [[Pages/FoundationalConcepts]] · [[Pages/AiTaxPrompting]] · [[Pages/M365CopilotHub]]

Sample use cases.xlsx (absent)
  → [[Content/phase2-slide-5]] Prompt Examples
  → [[Content/phase2-slide-6]] Agent Examples
  → Agent Template Library on the shelf

Priya PPT
  → Prompt Template Library on the shelf

Agent Best Practices xlsx
  → Phase 3 Quick Recall
  → Copilot Hub instruction walkthrough
  → (full set also in tax_agent_instruction_navigator.html)

Phase 3 PDF
  → [[Content/phase3-guidance]]
  → [[Pages/GuidanceImplementation]]

HILT art
  → public/hitl → HITL understand modal
```

---

## 11. Rules for later edits

- Priya PPT and the two xlsx/PDF sources: **keep wording exact**.
- Categories on the bookshelf (Research / Compliance / Data / task type) are **browse labels only** — they are not in the PPT or xlsx.
- Do not merge the 21 Priya templates with the 9 agent examples or the 10 writing practices.
- If a cited file is **absent**, edit the vault copy (`Content/` or `src/data/`) and say so — do not pretend the xlsx is in `reference/`.
