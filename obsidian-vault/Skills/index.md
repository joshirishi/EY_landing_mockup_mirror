---
type: index
description: Claude skills available in this project — what they do and when to use them
last-updated: 2026-07-31
tags: [skills, agents, automation]
---

# Skills

Claude skills that operate on this repo. Invoke with `/skill-name` or they trigger on matching phrases.

## Design pipeline skills

| Skill | Trigger phrases | What it does |
|-------|----------------|--------------|
| `design-critic` | "critique this design", "review this screen" | 4-persona design critique (Arjun UX, Meera Business, Priya Feasibility, Zara Delight). Returns SHIP/REVISE/BLOCK verdict + ranked action items |
| `ux-ideator` | "design this feature", "new screen from scratch" | Full ideation: two competing IA concepts, deliberation, delight pass, feasibility check, wireframes |
| `ux-story-gate` | "review this screen", "evaluate this design" | Task-first gate — discovers PRDs/stories, routes to Noor (IA), Anuj (power-user), Arjun (UX). Entry point for any screen review |
| `persona-orchestrator` | "run full persona review" | Full agentic persona chain with MoE routing, DS/hierarchy/verify gates, SHIP/REVISE/BLOCK table |

## Knowledge skills

| Skill | Trigger phrases | What it does |
|-------|----------------|--------------|
| `obsidian-knowledge-graph` | "sync obsidian", "rebuild vault", "update knowledge graph" | Builds/rebuilds this vault |
| `collect-knowledge` | "collect knowledge", "scan codebase for personas", "build vault" | Kavi — knowledge archivist that scans codebase, enriches vault notes, syncs into knowledge bank |

## Code quality skills

| Skill | Trigger phrases | What it does |
|-------|----------------|--------------|
| `simplify` | "/simplify" | Reviews changed code for reuse/simplification/efficiency; applies fixes |
| `fewer-permission-prompts` | — | Scans transcripts for common read-only tools, adds allowlist to settings.json |

## Utility skills

| Skill | Notes |
|-------|-------|
| `update-config` | Configure Claude Code settings, hooks, permissions |
| `dataviz` | Use before writing any chart/graph/visualization code |
| `artifact-design` | Design guidance before publishing an Artifact |
| `claude-api` | Reference for Anthropic SDK/API — model IDs, pricing, params |

---

## Skills relevant to this project

When designing or reviewing UI in this repo:

1. **Start with** `ux-story-gate` — it discovers the PRD/stories first before critiquing
2. **For ideation** use `ux-ideator` — generates two competing IA concepts
3. **For a quick multi-persona review** use `design-critic`
4. **After a major redesign** run `obsidian-knowledge-graph` to update this vault

---

## Related

- [[index]] — vault entry point
- [[Pages/index]] — pages these skills review
- [[Components/index]] — components these skills operate on
