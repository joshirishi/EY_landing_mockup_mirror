---
type: reference-index
last-updated: 2026-08-17T00:00:00Z
tags: [reference, sources, inventory]
---

# `reference/` — Source inventory

Workshop originals, decks, mailers, HTML blueprints, and art that the live app copies from. **Not served as the running product.** Live pages read `src/` and `public/` copies.

Master interconnection graph: [[Reference/source-map]]

Older notes: [[Reference/html-prototypes]] · [[Reference/repo-structure]] · [[Reference/what-we-are-building]]

## Folder map

| Path | What it is |
|------|------------|
| `reference/html/` | Early HTML blueprints for modules |
| `reference/PDF/phase3.pdf` | Phase 3 workshop deck (current file) |
| `reference/3.1 - Sample Prompt Templates_Priya.pptx` | 21 prompt templates, 63 slides |
| `reference/Agent Best Practices mailer content.xlsx` | 10 agent-instruction practices (+ copy in `assets/`) |
| `reference/tax_agent_instruction_navigator.html` | Earlier full library of practices, failures, patterns |
| `reference/HILT/` | Human-in-the-loop art, comics, Frame 381 |
| `reference/M365_Copilot_Agents_Features_Overview 2.pptx` | M365 Agents feature deck (also under `msagent_1.3/`) |
| `reference/M365 Copilot chat features.pptx` | M365 Chat feature deck |
| `reference/Friday workshop Notes.md` | 7 Aug 2026 stakeholder change list |
| `reference/prompt-library-v2_priya.html` | Earlier HTML prompt-library prototype |
| `reference/images/` + `hallucination images/` + `news articles/` | News / hallucination art |
| `reference/MS Apps Screen Recordings/` | Word, Excel, PPT, Outlook, Teams clips + stills |
| `reference/assets/` | Logos, Copilot stills, mailer xlsx, design PPT |
| `reference/echo-*.json` + `echo-thread-tracker.md` | Echo feedback dumps |
| `reference/Newspaper articles.docx` | News source pack (also under `news articles/`) |

## Not in the repo (cited, missing files)

| Cited source | Where it is cited | Status |
|--------------|-------------------|--------|
| `Sample use cases.xlsx` Sheet1 | [[Content/phase2-slide-5]] · [[Content/phase2-slide-6]] | File absent; wording lives in vault + `src/data/agent-template-library.ts` |
| `Template pattern mailer .docx` | `tax_agent_instruction_navigator.html` source note | File absent |
| Older `reference/PDFs/ACFrOg….pdf` | [[Content/phase2-workshop]] · [[Content/phase3-guidance]] | Path stale; Phase 3 file is now `reference/PDF/phase3.pdf` |

## How to use this folder

1. Treat `reference/` as **source of truth for wording and art**.
2. Treat `src/data/*` and `public/*` as **the shipped copy**.
3. If they diverge, the reference file wins unless a later workshop note says otherwise.
4. Follow [[Reference/source-map]] before changing library, HITL, or Copilot-hub content.
