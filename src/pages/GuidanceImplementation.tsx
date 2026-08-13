import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Download, Eye, RotateCcw, X } from "lucide-react";
import { UseCaseBucketCards } from "../components/UseCaseBucketCards";
import { countUseCaseEntries, readStoredUseCaseEntries } from "../data/use-case-buckets";
import { SiteHeader } from "../design-kit/SiteHeader";
import { ModuleHeader, SUBNAV_SCROLL_MARGIN, useModuleSectionHashScroll } from "../design-kit/LearningNav";
import { AscentModuleProgressSection } from "../imports/Frame353/ascentCurriculum";
import { PromptStackBuilderCompact } from "../components/PromptStackBuilderCompact";
import { TemplatePreviewModal } from "../components/TemplatePreviewModal";
import { PromptBookshelfLibrary } from "../components/PromptBookshelfLibrary";
import { PROMPTING_TECHNIQUES, TECHNIQUE_FACETS } from "../data/prompt-techniques";
import {
  colors as C,
  contentInlinePad,
  contentRailStyle,
  fonts as F,
  spacing,
  spectrumCss,
  typeScale,
} from "../design-kit/tokens";

interface Props {
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const PHASE3_LABEL = "Phase 3: Guidance for Implementation";
export const PHASE3_NUMBER = 3;

const PHASE3_SECTIONS = [
  { id: "p3-workshop", label: "Workshop", group: "learn" as const },
  { id: "p3-bingo", label: "AI Bingo", group: "learn" as const },
  { id: "p3-prompts", label: "Tax Prompts", group: "learn" as const },
  { id: "p3-your-use-cases", label: "Your Use Cases", group: "learn" as const },
  { id: "p3-agents", label: "M365 Agents", group: "learn" as const },
  { id: "p3-hitl", label: "Human-in-Loop", group: "learn" as const },
  { id: "p5-templates", label: "Reference Library", group: "apply" as const },
  { id: "journey-progress", label: "Ascent", group: "apply" as const },
];

/** Set true to restore Sample M365 Agent Templates (Panel6 / #p3-agent-templates) */
const SHOW_P3_AGENT_TEMPLATES = false;

// ── Shared helpers ────────────────────────────────────────────────────────────

const eyebrow = (color: string): CSSProperties => ({
  fontFamily: F.bold,
  fontSize: typeScale.label.size,
  fontWeight: typeScale.label.weight,
  letterSpacing: typeScale.label.tracking,
  textTransform: "uppercase",
  color,
  marginBottom: 8,
});

// Section-level header used at the top of each panel — centered
const sectionHeader: CSSProperties = {
  textAlign: "center",
  marginBottom: 48,
};

const h2Style: CSSProperties = {
  fontFamily: F.bold,
  fontSize: typeScale.h2.size,
  fontWeight: typeScale.h2.weight,
  lineHeight: 1.2,
  letterSpacing: typeScale.h2.tracking,
  marginBottom: 12,
};

function NumberedRow({ n, label, question, color, light = false }: { n: string; label: string; question: string; color: string; light?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "36px 160px 1fr",
        gap: 12,
        alignItems: "center",
        padding: "13px 0",
        borderBottom: `1px solid ${light ? "rgba(26,26,36,0.07)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <span style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color, letterSpacing: "0.04em" }}>{n}</span>
      <span style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: light ? C.confidentBlack : C.onDark }}>{label}</span>
      <span style={{ fontFamily: F.light, fontSize: 13, color: light ? C.gray01 : C.onDarkMuted }}>{question}</span>
    </div>
  );
}

// ── Panel 1 — Hands-On Build Workshop (Slides 1 + 2) ─────────────────────────

const BTR = [
  { n: "01", label: "Build", color: C.frameBlue },
  { n: "02", label: "Test", color: C.frameOrange },
  { n: "03", label: "Refine", color: C.frameGreen },
];

const WORKSHOP_COLS = [
  {
    color: C.frameBlue,
    label: "Workshop objective",
    items: ["Translate Phase 2 use cases into practical AI solutions for the tax function."],
  },
  {
    color: C.frameOrange,
    label: "Today's build zone",
    items: ["Prompt engineering", "M365 Copilot Agents", "Human review controls"],
  },
  {
    color: C.frameGreen,
    label: "Expected outcomes",
    items: ["Tax Prompt Templates", "Draft Agent Instructions", "Pilot Use Cases", "Human Review Framework", "AI Adoption Playbook"],
  },
];

function Panel1() {
  return (
    <section id="p3-workshop" style={{ position: "relative", scrollMarginTop: SUBNAV_SCROLL_MARGIN }}>
      {/* Hero — matches Foundational Concepts #home.hero (420px, spectrum bg) */}
      <div
        style={{
          position: "relative",
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: C.confidentBlack,
          backgroundImage: "url('/spectrum/hero-frame-7.png')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
          padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(26,26,36,0.94) 0%, rgba(26,26,36,0.78) 42%, rgba(26,26,36,0.35) 70%, rgba(26,26,36,0.18) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: spectrumCss(1), zIndex: 2 }} />
        <div style={{ ...contentRailStyle, position: "relative", zIndex: 1, width: "100%" }}>
          <h1
            style={{
              fontFamily: F.bold,
              fontSize: typeScale.h1.size,
              fontWeight: typeScale.h1.weight,
              color: C.onDark,
              lineHeight: 1.15,
              letterSpacing: typeScale.h1.tracking,
              margin: 0,
              maxWidth: 640,
            }}
          >
            Guidance for implementation
          </h1>
        </div>
      </div>

      <div
        style={{
          background: C.offWhite,
          paddingTop: 48,
          paddingBottom: 80,
          paddingLeft: contentInlinePad,
          paddingRight: contentInlinePad,
        }}
      >
        <div style={{ ...contentRailStyle }}>
        {/* Build / Test / Refine — yellow-tinted cards on light surface; top bars form a shared yellow line */}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
          {BTR.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.35, ease: "easeOut" }}
              style={{
                position: "relative",
                zIndex: 1,
                background: C.yellowAlpha10,
                borderRadius: 4,
                padding: "20px 28px",
                borderTop: `4px solid ${C.yellow}`,
                boxShadow: "0 2px 8px rgba(26,26,36,0.07)",
                transition: "box-shadow 150ms ease",
              }}
              whileHover={{ boxShadow: "0 4px 16px rgba(26,26,36,0.14)" }}
            >
              <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: step.color, letterSpacing: "0.06em", marginBottom: 6 }}>{step.n}</p>
              <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.confidentBlack }}>{step.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshop objective / build zone / outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {WORKSHOP_COLS.map((col) => (
            <div
              key={col.label}
              style={{
                background: C.white,
                borderRadius: 4,
                padding: "20px 24px",
                borderLeft: `3px solid ${col.color}`,
                boxShadow: "0 2px 8px rgba(26,26,36,0.07)",
                transition: "box-shadow 150ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,36,0.14)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,26,36,0.07)"; }}
            >
              <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: C.eyebrowGold, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>{col.label}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {col.items.map((item) => (
                  <li key={item} style={{ fontFamily: F.light, fontSize: 13, color: C.gray01, lineHeight: 1.5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: col.color, flexShrink: 0 }}>·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 1b — AI Fluency Bingo (before Prompt Engineering Refresher) ─────────
// Echo: Priya (9079aa2f) + placement note (cd7c4b34) — after workshop, before p3-prompts

type BingoTile = {
  id: string;
  statement: string;
  isTrue: boolean;
};

const BINGO_TILES: BingoTile[] = [
  {
    id: "b1",
    statement: "A clear objective and rich context often matter more than making a prompt longer.",
    isTrue: true,
  },
  {
    id: "b2",
    statement: "Copilot can access every file in your organization.",
    isTrue: false,
  },
  {
    id: "b3",
    statement: "Chain-of-Thought prompting always improves accuracy and should be used in every scenario.",
    isTrue: false,
  },
  {
    id: "b4",
    statement: "Few-Shot Prompting works by giving examples of the type of response you want.",
    isTrue: true,
  },
  {
    id: "b5",
    statement: "An AI agent can use tools to act toward a goal.",
    isTrue: true,
  },
  {
    id: "b6",
    statement: "An agent primarily responds to prompts and questions.",
    isTrue: false,
  },
  {
    id: "b7",
    statement: "A Copilot Agent is primarily designed to automate or assist with a specific task or workflow.",
    isTrue: true,
  },
  {
    id: "b8",
    statement: "Any confidential data is safe in any AI tool.",
    isTrue: false,
  },
  {
    id: "b9",
    statement: "Giving AI an expert role can influence the style and perspective of its response.",
    isTrue: true,
  },
];

function PanelBingo() {
  // Track which tiles the learner has revealed (click once to show True/False)
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const revealedCount = Object.keys(revealed).filter((k) => revealed[k]).length;

  const revealTile = (id: string) => {
    setRevealed((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const resetBingo = () => setRevealed({});

  return (
    <section
      id="p3-bingo"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.white,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.eyebrowGoldDark)}>AI Fluency Bingo</p>
          <h2 style={{ ...h2Style, color: C.offBlack, marginBottom: 8 }}>Fact or Fiction?</h2>
          <p
            style={{
              fontFamily: F.light,
              fontSize: typeScale.body.size,
              color: C.gray01,
              margin: "0 auto",
              maxWidth: 880,
              lineHeight: 1.5,
            }}
          >
            A quick challenge to assess your understanding of prompts, Copilot, and AI agents.
          </p>
          {/* Hint text on one end; refresh pill on the other */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 16,
              textAlign: "left",
            }}
          >
            <button
              type="button"
              onClick={resetBingo}
              disabled={revealedCount === 0}
              aria-label="Refresh bingo — hide all answers"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 999,
                border: `1px solid ${C.gray02}`,
                background: C.offWhite,
                color: C.offBlack,
                fontFamily: F.bold,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                cursor: revealedCount === 0 ? "not-allowed" : "pointer",
                opacity: revealedCount === 0 ? 0.45 : 1,
              }}
            >
              <RotateCcw size={14} strokeWidth={2} aria-hidden />
              Refresh
            </button>
            <p
              style={{
                fontFamily: F.regular,
                fontSize: typeScale.caption.size,
                color: C.gray01,
                margin: 0,
                textAlign: "right",
              }}
            >
              Tap a tile to reveal whether it is True or False.
              {revealedCount > 0 ? ` · ${revealedCount} of ${BINGO_TILES.length} revealed` : ""}
            </p>
          </div>
        </div>

        <div
          role="list"
          aria-label="AI Fluency Bingo — nine True or False statements"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {BINGO_TILES.map((tile, index) => {
            const isOpen = Boolean(revealed[tile.id]);
            const tone = isOpen ? (tile.isTrue ? "true" : "false") : "idle";

            const borderColor =
              tone === "true" ? C.success : tone === "false" ? C.error : C.gray02;
            // Revealed tiles fill green/red per Priya's Echo note; idle stays neutral
            const bg =
              tone === "true" ? C.success : tone === "false" ? C.error : C.offWhite;
            const textColor = tone === "idle" ? C.offBlack : C.white;
            const labelColor = tone === "idle" ? C.eyebrowGoldDark : C.white;

            return (
              <button
                key={tile.id}
                type="button"
                role="listitem"
                aria-pressed={isOpen}
                aria-label={
                  isOpen
                    ? `${tile.statement} — ${tile.isTrue ? "True" : "False"}`
                    : `Statement ${index + 1}: ${tile.statement}. Activate to reveal answer.`
                }
                onClick={() => revealTile(tile.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 12,
                  minHeight: 168,
                  padding: "20px 18px",
                  textAlign: "left",
                  cursor: isOpen ? "default" : "pointer",
                  borderRadius: 4,
                  border: `2px solid ${borderColor}`,
                  background: bg,
                  boxShadow: "0 2px 8px rgba(26,26,36,0.06)",
                  transition: "background 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: F.bold,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: labelColor,
                  }}
                >
                  {isOpen ? (
                    tile.isTrue ? (
                      <>
                        <Check size={14} strokeWidth={2} aria-hidden />
                        True
                      </>
                    ) : (
                      <>
                        <X size={14} strokeWidth={2} aria-hidden />
                        False
                      </>
                    )
                  ) : (
                    <>{String(index + 1).padStart(2, "0")} · Fact or fiction?</>
                  )}
                </span>
                <span
                  style={{
                    fontFamily: F.regular,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.45,
                    color: textColor,
                    flex: 1,
                  }}
                >
                  {tile.statement}
                </span>
              </button>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 900px) {
            #p3-bingo [role="list"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 901px) and (max-width: 1100px) {
            #p3-bingo [role="list"] {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

// ── Panel 2 — Building Better Tax Prompts (Slide 3) ───────────────────────────

const PROMPT_COMPONENTS = [
  { n: "01", label: "Persona",           question: "Who should the AI act as?" },
  { n: "02", label: "Context",           question: "Why is the task being performed?" },
  { n: "03", label: "Instructions",      question: "What exactly must be done?" },
  { n: "04", label: "Tone & style",      question: "How should it read?" },
  { n: "05", label: "Examples",          question: "Use few-shot examples where possible." },
  { n: "06", label: "Output indicator",  question: "Specify sections or table format." },
  { n: "07", label: "Constraints",       question: "Define what should not be done." },
  { n: "08", label: "Grounding",         question: "Anchor to approved source documents." },
];

// Each prompt segment maps to an element index (0-7). Unmapped segments are plain.
const PROMPT_SEGMENTS: { text: string; el?: number }[] = [
  { text: "You are a senior Indian tax professional specialising in transfer pricing and international taxation.", el: 0 },
  { text: " " },
  { text: "Prepare the analysis for a regional tax director.", el: 1 },
  { text: " " },
  { text: "Compare current-year and prior-year intercompany transactions and identify material changes.", el: 2 },
  { text: " " },
  { text: "Use a professional advisory style", el: 3 },
  { text: " " },
  { text: "and present the findings in a table with sections: Summary, Material Changes, and Recommendations.", el: 5 },
  { text: " " },
  { text: "Do not cite external sources or speculate beyond the provided documents.", el: 6 },
  { text: " " },
  { text: "Rely only on the specified source documents.", el: 7 },
];

type TemplateAsset = { screenshot?: string; downloadUrl?: string };

function TabRail<T extends string>({
  tabs,
  active,
  onChange,
  onDark = false,
}: {
  tabs: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
  onDark?: boolean;
}) {
  const focusRing = `2px solid ${C.yellow}`;
  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        background: onDark ? "rgba(255,255,255,0.06)" : C.offWhite,
        border: onDark ? `1px solid ${C.borderOnDark}` : `1px solid rgba(46,46,56,0.10)`,
        borderRadius: 8,
        padding: 4,
        gap: 4,
        marginBottom: 24,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            style={{
              padding: "9px 18px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              background: isActive ? (onDark ? C.yellow : C.confidentBlack) : "transparent",
              color: isActive ? (onDark ? C.confidentBlack : C.white) : (onDark ? C.onDarkMuted : C.gray01),
              fontSize: 13,
              fontWeight: isActive ? 700 : 400,
              fontFamily: isActive ? F.bold : F.regular,
              transition: "background 150ms ease, color 150ms ease",
              whiteSpace: "nowrap",
            }}
            onFocus={(e) => { e.currentTarget.style.outline = focusRing; }}
            onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function TechniqueExampleQuote({ text, variant }: { text: string; variant: "without" | "with" }) {
  const isBad = variant === "without";
  return (
    <p
      style={{
        fontSize: 14,
        lineHeight: 1.7,
        color: isBad ? C.destructive : C.success,
        fontFamily: F.light,
        fontStyle: "italic",
        margin: 0,
        maxWidth: 560,
        padding: "14px 18px",
        background: (isBad ? C.destructive : C.success) + "0a",
        borderRadius: 8,
        borderLeft: `3px solid ${isBad ? C.destructive : C.success}`,
      }}
    >
      {text}
    </p>
  );
}

function PromptTechniquesPanel() {
  const [selectedId, setSelectedId] = useState(PROMPTING_TECHNIQUES[0].id);
  const technique = PROMPTING_TECHNIQUES.find((t) => t.id === selectedId) ?? PROMPTING_TECHNIQUES[0];
  const focusRing = `2px solid ${C.yellow}`;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(220px, 260px) 1fr",
      gap: 0,
      borderRadius: 8,
      overflow: "hidden",
      border: `1px solid ${C.borderOnDark}`,
      background: C.eyBgCard,
      textAlign: "left",
      minHeight: 520,
    }}>
      <nav aria-label="Prompting techniques" style={{
        borderRight: `1px solid ${C.borderOnDark}`,
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        background: C.confidentBlack,
      }}>
        <div style={{ padding: "0 20px 14px", borderBottom: `1px solid ${C.borderOnDark}` }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.yellow, fontFamily: F.bold, marginBottom: 4 }}>
            8 Techniques
          </div>
          <div style={{ fontSize: 13, color: C.onDarkMuted, fontFamily: F.regular, lineHeight: 1.5 }}>
            Pick one to explore.
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px" }}>
          {PROMPTING_TECHNIQUES.map((item) => {
            const active = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? "true" : undefined}
                onClick={() => setSelectedId(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 12px",
                  marginBottom: 2,
                  background: active ? C.surfaceOnDark : "transparent",
                  border: "1px solid transparent",
                  borderRadius: 6,
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onFocus={(e) => { e.currentTarget.style.outline = focusRing; }}
                onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
              >
                <span style={{
                  width: 22, height: 22, borderRadius: 4, flexShrink: 0,
                  background: active ? C.yellow : item.color + "18",
                  border: `1.5px solid ${active ? C.yellow : item.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700,
                  color: C.confidentBlack,
                  fontFamily: F.bold,
                }}>
                  {item.id}
                </span>
                <span style={{
                  flex: 1, minWidth: 0,
                  fontSize: 12, fontWeight: 700,
                  color: active ? C.onDark : C.onDarkMuted,
                  fontFamily: F.bold,
                  lineHeight: 1.3,
                }}>
                  {item.technique}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
        <div style={{
          padding: "14px 24px",
          background: C.surfaceOnDark,
          borderBottom: `1px solid ${C.borderOnDark}`,
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              width: 26, height: 26, borderRadius: 4, flexShrink: 0,
              background: C.yellow, color: C.confidentBlack,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700, fontFamily: F.bold,
            }}>
              {technique.id}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.onDark, fontFamily: F.bold }}>{technique.technique}</span>
          </div>
          <p style={{ fontSize: 12, color: C.onDarkMuted, fontFamily: F.light, margin: "4px 0 0", paddingLeft: 34 }}>
            {technique.does}
          </p>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {TECHNIQUE_FACETS.map((f) => {
            const text = technique[f.key];
            return (
              <section key={f.key}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginBottom: 10,
                  padding: "4px 10px",
                  borderRadius: 100,
                  border: `1px solid ${f.color}55`,
                  background: f.color + "14",
                  fontSize: 11,
                  fontWeight: 700,
                  color: f.color,
                  fontFamily: F.bold,
                }}>
                  {f.label}
                </span>
                {f.key === "without" || f.key === "with" ? (
                  <TechniqueExampleQuote text={text} variant={f.key} />
                ) : (
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.onDarkMuted, fontFamily: F.regular, margin: 0, maxWidth: 560 }}>
                    {text}
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TemplateAssetActions({
  name,
  asset,
  onPreview,
  onDark = false,
}: {
  name: string;
  asset?: TemplateAsset;
  onPreview: (src: string, title: string) => void;
  onDark?: boolean;
}) {
  if (!asset?.screenshot && !asset?.downloadUrl) return null;

  return (
    <div style={{
      marginTop: 8,
      marginBottom: 24,
      padding: "16px 18px",
      background: onDark ? "rgba(255,255,255,0.04)" : C.offWhite,
      borderRadius: 8,
      border: onDark ? `1px solid ${C.borderOnDark}` : `1px solid rgba(46,46,56,0.08)`,
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
    }}>
      {asset.screenshot && (
        <button
          type="button"
          onClick={() => onPreview(asset.screenshot!, name)}
          style={{
            border: `1px solid ${onDark ? C.borderOnDark : C.gray02}`,
            borderRadius: 6,
            padding: 0,
            background: C.white,
            cursor: "pointer",
            overflow: "hidden",
            flexShrink: 0,
          }}
          aria-label={`Preview ${name} template`}
        >
          <img
            src={asset.screenshot}
            alt={`${name} template thumbnail`}
            style={{ width: 120, height: 80, objectFit: "cover", display: "block" }}
          />
        </button>
      )}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {asset.screenshot && (
          <button
            type="button"
            onClick={() => onPreview(asset.screenshot!, name)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: F.bold, fontSize: 12, fontWeight: 700,
              color: onDark ? C.onDark : C.confidentBlack,
              background: onDark ? "rgba(255,255,255,0.08)" : C.white,
              border: `1px solid ${onDark ? C.borderOnDark : C.gray02}`,
              borderRadius: 6, padding: "8px 14px", cursor: "pointer",
            }}
          >
            <Eye size={14} strokeWidth={1.75} aria-hidden /> Preview
          </button>
        )}
        {asset.downloadUrl && (
          <a
            href={asset.downloadUrl}
            download
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: F.bold, fontSize: 12, fontWeight: 700,
              color: C.confidentBlack,
              background: C.yellow,
              border: "none",
              borderRadius: 6, padding: "8px 14px",
              textDecoration: "none",
            }}
          >
            <Download size={14} strokeWidth={1.75} aria-hidden /> Download
          </a>
        )}
      </div>
    </div>
  );
}

function Panel2() {
  const [panelTab, setPanelTab] = useState<"elements" | "techniques">("elements");
  const [activeEl, setActiveEl] = useState<number | null>(null);
  const elem = activeEl != null ? PROMPT_COMPONENTS[activeEl] : null;
  const focusRing = `2px solid ${C.yellow}`;

  return (
    <section
      id="p3-prompts"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.confidentBlack,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.yellow)}>Prompt Engineering Refresher</p>
          <h2 style={{ ...h2Style, color: C.onDark }}>Building Better Tax Prompts</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body.size, color: C.onDarkMuted, marginBottom: 0 }}>
            A prompt is the control surface for quality, scope and reviewability. Click an element to see it at work.
          </p>
        </div>

        <TabRail
          tabs={[
            { id: "elements" as const, label: "Elements" },
            { id: "techniques" as const, label: "Techniques" },
          ]}
          active={panelTab}
          onChange={setPanelTab}
          onDark
        />

        {panelTab === "techniques" ? (
          <PromptTechniquesPanel />
        ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 300px) 1fr",
          gap: 0,
          borderRadius: 8,
          overflow: "hidden",
          border: `1px solid ${C.borderOnDark}`,
          background: C.eyBgCard,
          textAlign: "left",
        }}>
          {/* Left — element picker */}
          <nav aria-label="Prompt elements" style={{
            borderRight: `1px solid ${C.borderOnDark}`,
            padding: "16px 0",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            background: C.confidentBlack,
          }}>
            <div style={{ padding: "0 20px 14px", borderBottom: `1px solid ${C.borderOnDark}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.yellow, fontFamily: F.bold, marginBottom: 4 }}>
                8 Elements
              </div>
              <div style={{ fontSize: 13, color: C.onDarkMuted, fontFamily: F.regular, lineHeight: 1.5 }}>
                Pick one to highlight it in the prompt.
              </div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px" }}>
              {PROMPT_COMPONENTS.map((item, i) => {
                const active = activeEl === i;
                return (
                  <button
                    key={item.n}
                    type="button"
                    aria-current={active ? "true" : undefined}
                    onClick={() => setActiveEl(active ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      marginBottom: 2,
                      background: active ? C.surfaceOnDark : "transparent",
                      border: active ? "none" : "1px solid transparent",
                      borderRadius: 6,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    onFocus={e => { e.currentTarget.style.outline = focusRing; }}
                    onBlur={e => { e.currentTarget.style.outline = "none"; }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: 4, flexShrink: 0,
                      background: active ? C.yellow : "transparent",
                      border: `1.5px solid ${C.yellow}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700,
                      color: active ? C.confidentBlack : C.yellow,
                      fontFamily: F.bold,
                    }}>
                      {item.n}
                    </span>
                    <span style={{
                      flex: 1, minWidth: 0,
                      fontSize: 13, fontWeight: 700,
                      color: active ? C.onDark : C.onDarkMuted,
                      fontFamily: F.bold,
                    }}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Right — example prompt with live highlighting */}
          <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
            <div style={{
              padding: "14px 24px",
              background: C.surfaceOnDark,
              borderBottom: `1px solid ${C.borderOnDark}`,
              display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
              flexShrink: 0,
            }}>
              {elem ? (
                <>
                  <span style={{
                    width: 26, height: 26, borderRadius: 4, flexShrink: 0,
                    background: C.yellow, color: C.confidentBlack,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, fontFamily: F.bold,
                  }}>
                    {elem.n}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.onDark, fontFamily: F.bold }}>{elem.label}</span>
                  <span style={{ fontSize: 12, color: C.yellow, fontFamily: F.light }}>— {elem.question}</span>
                </>
              ) : (
                <span style={{ fontSize: 13, color: C.onDarkMuted, fontFamily: F.light }}>
                  Select an element to see where it lives in this prompt.
                </span>
              )}
            </div>

            <div style={{ padding: "24px 28px", flex: 1, overflowY: "auto" }}>
              {/* Example Prompt Seed — artifact card */}
              <div style={{
                background: C.surfaceOnDark,
                borderRadius: 4,
                padding: "24px 28px",
                borderLeft: `4px solid ${C.yellow}`,
                marginBottom: 20,
              }}>
                <p style={eyebrow(C.yellow)}>Example Prompt Seed</p>
                <p style={{ fontFamily: F.light, fontSize: 17, fontWeight: 300, color: C.onDarkMuted, lineHeight: 1.7, margin: 0 }}>
                  {PROMPT_SEGMENTS.map((seg, i) => {
                    const highlight = activeEl != null && seg.el === activeEl;
                    return highlight ? (
                      <motion.span
                        key={i}
                        initial={{ backgroundColor: "rgba(255,230,0,0.25)" }}
                        animate={{ backgroundColor: "rgba(255,230,0,0.22)" }}
                        style={{
                          background: "rgba(255,230,0,0.22)",
                          borderRadius: 3,
                          padding: "1px 4px",
                          margin: "0 -1px",
                          color: C.yellow,
                          fontWeight: 700,
                        }}
                      >
                        {seg.text}
                      </motion.span>
                    ) : (
                      <span key={i} style={{ color: C.onDarkMuted, fontWeight: 400 }}>{seg.text}</span>
                    );
                  })}
                </p>
              </div>
              <div style={{
                padding: "18px 22px",
                background: C.eyBgCard,
                borderRadius: 4,
                borderLeft: `4px solid ${C.yellow}`,
              }}>
                <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.onDark, lineHeight: 1.3 }}>
                  Good outputs start with good prompts.
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

function Panel2UseCases({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [entries, setEntries] = useState(() => readStoredUseCaseEntries());
  const hasEntries = countUseCaseEntries(entries) > 0;
  const focusRing = `2px solid ${C.yellow}`;

  useEffect(() => {
    setEntries(readStoredUseCaseEntries());
  }, []);

  return (
    <section
      id="p3-your-use-cases"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.confidentBlack,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.yellow)}>Your Use Cases</p>
          <h2 style={{ ...h2Style, color: C.onDark }}>Workshop Bucket Results</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body.size, color: C.onDarkMuted, marginBottom: 0 }}>
            Ideas you sorted in Phase 2 — Prompt, M365 Agent, and Pro Code — carried forward for implementation planning.
          </p>
        </div>

        {hasEntries ? (
          <UseCaseBucketCards sectionId="p3-your-use-cases" entries={entries} />
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "clamp(32px, 5vw, 48px)",
              borderRadius: 10,
              border: `1px dashed ${C.borderOnDark}`,
              background: C.eyBgCard,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: F.regular,
                fontSize: typeScale.body.size,
                color: C.onDarkMuted,
                margin: "0 0 20px",
                lineHeight: 1.6,
              }}
            >
              Complete the Phase 2 workshop to see your use cases here.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("/phase2#your-use-cases")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: F.bold,
                fontSize: 13,
                fontWeight: 700,
                color: C.confidentBlack,
                background: C.yellow,
                border: "none",
                borderRadius: 6,
                padding: "10px 18px",
                cursor: "pointer",
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = focusRing;
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
              }}
            >
              Go to Phase 2 workshop
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Panel 3 — Instruction Components / M365 Agent (Slide 4) ──────────────────

const AGENT_COMPONENTS = [
  { n: "01", label: "Purpose",               question: "Why does the agent exist?", step: -1 },
  { n: "02", label: "Knowledge sources",     question: "Where should it search?", step: 1 },
  { n: "03", label: "Core responsibilities", question: "Summaries, retrieve, organize, draft, report.", step: -1 },
  { n: "04", label: "Workflow",              question: "What steps should it follow?", step: -2 },
  { n: "05", label: "Output format",         question: "Define standard sections.", step: 4 },
  { n: "06", label: "Escalation rules",      question: "When should it ask for help?", step: 3 },
  { n: "07", label: "Guardrails",            question: "What must it never do?", step: -1 },
];

const AGENT_WORKFLOW = [
  { n: "01", step: "Receive request" },
  { n: "02", step: "Search repository" },
  { n: "03", step: "Summaries findings" },
  { n: "04", step: "Identify gaps" },
  { n: "05", step: "Prepare output" },
];

const INSTRUCTION_PATTERNS = [
  {
    n: "01",
    name: "Convert ambiguous multitask requests into deterministic workflows",
    use: "Remove ambiguity by defining atomic steps, explicit formulas, and required validation. Ensures stable, repeatable behavior across model versions.",
    template: "## Task: Metrics and ROI (Deterministic)\n\n### Definitions (Do not invent)\n- Metrics to compute: [Metric1], [Metric2], [Metric3]\n- ROI definition: ROI = (Benefit - Cost) / Cost\n- Source of truth: Use ONLY the provided document(s)\n\n### Steps (Sequential — do not reorder)\nStep 1: Locate inputs. Quote the section/table where each came from.\nStep 2: Compute metrics exactly as defined. If any input is missing, stop and ask ONE question.\nStep 3: Compute ROI using the definition above.\nStep 4: Output ONLY the table.\n\n### Final check\nBefore finalizing: confirm every metric has a value, a source, and no assumptions.",
  },
  {
    n: "02",
    name: "Correct parallel versus sequential structure",
    use: "Separate parallel and sequential logic so the model runs workflows without adding or reordering steps.",
    template: "Section A — Extract Data (parallel)\n- Extract pricing changes.\n- Extract margin changes.\n- Extract sentiment themes.\n\nSection B — Build the Summary (sequential)\nStep 1: Integrate all findings from Section A.\nStep 2: Produce the 2 page call prep summary.",
  },
  {
    n: "03",
    name: "Explicit decision rules",
    use: "Add explicit if/then rules that prevent unintended model interpretation and enforce deterministic outcomes.",
    template: "Read the product report.\nCheck category performance.\nIf performance is stable or improving, write the summary section.\nIf performance declines or anomalies are detected, write the risks/issues section.",
  },
  {
    n: "04",
    name: "Output contract",
    use: "Provide shape, structure, tone, and allowed content ensuring consistency across versions.",
    template: "## Output Contract (Mandatory)\nGoal: [one sentence]\nFormat: [bullet list | table | 2 pages | JSON]\nDetail level: [short | medium | detailed]\nTone: [Professional | Friendly | Efficient]\nInclude: [A, B, C]\nExclude: No extra recommendations, no extra context, no helpful tips",
  },
  {
    n: "05",
    name: "Self-evaluation gate",
    use: "Add an explicit self-check step so the model validates completeness and corrects omissions before responding.",
    template: "## Final Check: Self Evaluation\nBefore finalizing the output, review your response for completeness, ensure that all Section A elements are accurately represented, check for inconsistencies or uncertainty, and revise the answer if needed.",
  },
  {
    n: "06",
    name: "Steering automode reasoning",
    use: "Explicit reasoning cues give you control over how much thinking the model applies.",
    template: "Deep: Use deep reasoning. Break the problem into steps, analyze each step, evaluate alternatives, and justify the final decision. Reflect before answering.\n\nFast: Short answer only. No reasoning or explanation. Provide the final result only.",
  },
  {
    n: "07",
    name: "Literal-execution header for immediate stability",
    use: "Temporarily stabilize an existing agent, especially after a model change. Interim fix while you update the full instruction set.",
    template: "Always interpret instructions literally.\nNever infer intent or fill in missing steps.\nNever add context, recommendations, or assumptions.\nFollow step order exactly with no optimization.\nRespond concisely and only in the requested format.\nDo not call tools unless a step explicitly instructs to do so.",
  },
];

function InstructionPatternsPanel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const pattern = INSTRUCTION_PATTERNS[activeIdx];
  const focusRing = `2px solid ${C.yellow}`;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(240px, 280px) 1fr",
      gap: 0,
      borderRadius: 8,
      overflow: "hidden",
      border: `1px solid rgba(46,46,56,0.10)`,
      background: C.offWhite,
      minHeight: 520,
    }}>
      <nav aria-label="Instruction patterns" style={{
        borderRight: `1px solid rgba(46,46,56,0.08)`,
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        background: C.white,
      }}>
        <div style={{ padding: "0 20px 14px", borderBottom: `1px solid rgba(46,46,56,0.08)` }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.eyebrowGold, fontFamily: F.bold, marginBottom: 4 }}>
            7 Patterns
          </div>
          <div style={{ fontSize: 13, color: C.gray01, fontFamily: F.regular, lineHeight: 1.5 }}>
            Pick a template to view.
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px 10px" }}>
          {INSTRUCTION_PATTERNS.map((item, i) => {
            const active = activeIdx === i;
            return (
              <button
                key={item.n}
                type="button"
                aria-current={active ? "true" : undefined}
                onClick={() => setActiveIdx(i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 12px",
                  marginBottom: 2,
                  background: active ? C.yellowAlpha10 : "transparent",
                  border: "1px solid transparent",
                  borderRadius: 6,
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onFocus={(e) => { e.currentTarget.style.outline = focusRing; }}
                onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
              >
                <span style={{
                  width: 22, height: 22, borderRadius: 4, flexShrink: 0,
                  background: active ? C.yellow : "transparent",
                  border: `1.5px solid ${active ? C.yellow : C.gray02}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700,
                  color: active ? C.confidentBlack : C.eyebrowGold,
                  fontFamily: F.bold,
                  marginTop: 1,
                }}>
                  {item.n}
                </span>
                <span style={{
                  flex: 1, minWidth: 0,
                  fontSize: 12, fontWeight: 700,
                  color: active ? C.confidentBlack : C.gray01,
                  fontFamily: F.bold,
                  lineHeight: 1.35,
                }}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
      <div style={{ display: "flex", flexDirection: "column", minHeight: 0, background: C.offWhite }}>
        <div style={{
          padding: "14px 24px",
          background: C.white,
          borderBottom: `1px solid rgba(46,46,56,0.08)`,
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.confidentBlack, fontFamily: F.bold }}>{pattern.name}</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <span style={{
              display: "inline-flex", marginBottom: 10, padding: "4px 10px", borderRadius: 100,
              border: `1px solid ${C.yellow}55`, background: C.yellow + "14",
              fontSize: 11, fontWeight: 700, color: C.eyebrowGold, fontFamily: F.bold,
            }}>
              When to use
            </span>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: C.gray01, fontFamily: F.regular, margin: 0 }}>
              {pattern.use}
            </p>
          </div>
          <div>
            <span style={{
              display: "inline-flex", marginBottom: 10, padding: "4px 10px", borderRadius: 100,
              border: `1px solid ${C.frameBlue}55`, background: C.frameBlue + "14",
              fontSize: 11, fontWeight: 700, color: C.frameBlue, fontFamily: F.bold,
            }}>
              Template
            </span>
            <div style={{
              background: C.confidentBlack, borderRadius: 8,
              padding: "16px 18px", border: `1px solid ${C.borderOnDark}`,
              overflowX: "auto",
            }}>
              <p style={{ fontFamily: F.regular, fontSize: 13, color: C.onDark, lineHeight: 1.7, whiteSpace: "pre-wrap", margin: 0 }}>
                {pattern.template}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel3() {
  const [panelTab, setPanelTab] = useState<"components" | "templates" | "anatomy">("components");
  const [activeStep, setActiveStep] = useState(0);
  const [activeEl, setActiveEl] = useState<number | null>(null);
  const [hoveredEl, setHoveredEl] = useState<number | null>(null);
  const atEnd = activeStep === AGENT_WORKFLOW.length - 1;

  // Element → step mapping: -1 = all steps, -2 = workflow overview (whole flow), 0-4 = specific step
  function handleElementClick(elIndex: number) {
    const el = AGENT_COMPONENTS[elIndex];
    setActiveEl(activeEl === elIndex ? null : elIndex);
    if (el.step >= 0) {
      setActiveStep(el.step);
    } else if (el.step === -2) {
      setActiveStep(-1); // overview — no single step highlighted
    }
    // step === -1 → all steps, leave activeStep as-is
  }

  function scrollToTemplates() {
    const el = document.getElementById("p5-templates");
    const container = document.querySelector(".overflow-auto");
    if (el && container) {
      const top = el.getBoundingClientRect().top + container.scrollTop - 80;
      container.scrollTo({ top, behavior: "smooth" });
    }
  }

  const isOverview = activeStep === -1;

  return (
    <section
      id="p3-agents"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.white,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.eyebrowGold)}>Anatomy of a Good M365 Agent</p>
          <h2 style={{ ...h2Style, color: C.confidentBlack }}>Instruction Components</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body.size, color: C.gray01, marginBottom: 0 }}>
            Design the assistant like a repeatable tax process — not a generic chatbot. Click a component to see it in the workflow.
          </p>
        </div>

        <TabRail
          tabs={[
            { id: "components" as const, label: "Instruction Components" },
            { id: "templates" as const, label: "Templates" },
            { id: "anatomy" as const, label: "Prompt Anatomy" },
          ]}
          active={panelTab}
          onChange={setPanelTab}
        />

        {panelTab === "templates" ? (
          <InstructionPatternsPanel />
        ) : panelTab === "anatomy" ? (
          <PromptStackBuilderCompact />
        ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "stretch" }}>
          {/* 7-element table — clickable, linked to workflow */}
          <div style={{ background: C.offWhite, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: 3, background: spectrumCss(2), flexShrink: 0 }} />
            <div style={{ padding: "0 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              {AGENT_COMPONENTS.map((item, i) => {
                const active = activeEl === i;
                const showDetail = active || hoveredEl === i;
                return (
                  <button
                    key={item.n}
                    type="button"
                    onClick={() => handleElementClick(i)}
                    onMouseEnter={() => setHoveredEl(i)}
                    onMouseLeave={() => setHoveredEl(null)}
                    onFocus={e => { e.currentTarget.style.outline = `2px solid ${C.yellow}`; }}
                    onBlur={e => { e.currentTarget.style.outline = "none"; }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "36px 1fr",
                      gap: 12,
                      alignItems: "start",
                      width: "100%",
                      padding: "13px 8px",
                      borderBottom: `1px solid rgba(26,26,36,0.07)`,
                      background: active ? C.yellowAlpha10 : (hoveredEl === i ? C.white : "transparent"),
                      border: "none",
                      borderBottomWidth: 1,
                      borderBottomStyle: "solid",
                      borderBottomColor: "rgba(26,26,36,0.07)",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 150ms ease",
                    }}
                  >
                    <span style={{
                      width: 26, height: 26, borderRadius: 4, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: active ? C.yellow : "transparent",
                      border: `1.5px solid ${active ? C.yellow : C.gray02}`,
                      fontFamily: F.bold, fontSize: 11, fontWeight: 700,
                      color: active ? C.confidentBlack : C.eyebrowGold,
                      marginTop: 1,
                    }}>
                      {item.n}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                      <span style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack }}>
                        {item.label}
                      </span>
                      <div
                        aria-hidden={!showDetail}
                        style={{
                          overflow: "hidden",
                          maxHeight: showDetail ? 56 : 0,
                          opacity: showDetail ? 1 : 0,
                          transition: "max-height 200ms ease, opacity 200ms ease",
                        }}
                      >
                        <span style={{ fontFamily: F.light, fontSize: 13, color: C.gray01, lineHeight: 1.45, display: "block" }}>
                          {item.question}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workflow — dark surface, circuit-fill, active chip pulse */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: C.eyBgCard, borderRadius: 4, padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
              <p style={eyebrow(C.yellow)}>Agent Workflow</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {AGENT_WORKFLOW.map((step, i) => {
                  const isActive = !isOverview && i === activeStep;
                  const isPast = !isOverview && i < activeStep;
                  const showCircuit = isPast || isActive;
                  return (
                    <div key={step.n} style={{ display: "flex", alignItems: "center", transition: "opacity 200ms ease-out", opacity: isOverview ? 0.6 : (isPast ? 0.45 : 1), cursor: "pointer" }} onClick={() => { setActiveStep(i); setActiveEl(null); }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <motion.div
                          key={`${step.n}-${isActive}`}
                          animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{
                            width: 32, height: 32, borderRadius: 4, flexShrink: 0,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: isActive ? C.yellow : (showCircuit ? C.confidentBlack : "transparent"),
                            border: `1.5px solid ${isActive ? C.yellow : (showCircuit ? C.yellow : "rgba(255,255,255,0.2)")}`,
                            transition: "background 200ms ease-out, border-color 200ms ease-out",
                          }}
                        >
                          <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: isActive ? C.confidentBlack : (showCircuit ? C.yellow : C.onDarkMuted) }}>{step.n}</span>
                        </motion.div>
                        {i < AGENT_WORKFLOW.length - 1 && (
                          <div style={{ width: 2, height: 16, background: "rgba(255,255,255,0.12)", position: "relative", overflow: "hidden" }}>
                            {showCircuit && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{ width: "100%", background: C.yellow, position: "absolute", top: 0, left: 0 }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                      <span style={{
                        fontFamily: F.regular, fontSize: 14, marginLeft: 14,
                        color: isActive ? C.onDark : (showCircuit ? C.onDark : C.onDarkMuted),
                        fontWeight: isActive ? 700 : 400,
                        transition: "color 200ms ease-out",
                      }}>{step.step}</span>
                    </div>
                  );
                })}
              </div>

              {/* Step controls */}
              <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
                {!atEnd && !isOverview ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((s) => Math.min(s + 1, AGENT_WORKFLOW.length - 1))}
                    style={{
                      fontFamily: F.bold, fontSize: 12, fontWeight: 700,
                      color: C.confidentBlack, background: C.yellow,
                      border: "none", borderRadius: 3,
                      padding: "8px 16px", cursor: "pointer",
                      letterSpacing: "0.04em",
                      transition: "background 150ms ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#FFE933"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = C.yellow; }}
                  >
                    Next step →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToTemplates}
                    style={{
                      fontFamily: F.bold, fontSize: 12, fontWeight: 700,
                      color: C.confidentBlack, background: C.yellow,
                      border: "none", borderRadius: 3,
                      padding: "8px 16px", cursor: "pointer",
                      letterSpacing: "0.04em",
                    }}
                  >
                    See example output →
                  </button>
                )}
                {(activeStep > 0 || isOverview) && (
                  <button
                    type="button"
                    onClick={() => { setActiveStep(0); setActiveEl(null); }}
                    style={{
                      fontFamily: F.regular, fontSize: 12,
                      color: C.onDarkMuted, background: "none",
                      border: "none", cursor: "pointer", padding: "8px 8px",
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Example Purpose — full-width footer band, spans both columns */}
        <div style={{
          marginTop: 24,
          background: C.confidentBlack,
          borderRadius: 4,
          padding: "24px 32px",
          borderLeft: `4px solid ${C.yellow}`,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}>
          <div style={{ flexShrink: 0 }}>
            <p style={eyebrow(C.yellow)}>Example Purpose</p>
          </div>
          <p style={{ fontFamily: F.regular, fontSize: 18, color: C.onDark, lineHeight: 1.4, margin: 0 }}>
            Assist tax teams in gathering and organising transfer pricing documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Panel 4 — HITL (Slide 5) — Zara's animated peak moment ───────────────────

const HITL_FLOW = [
  { n: "01", label: "Human input",       yellow: false },
  { n: "02", label: "Prompt / Agent",    yellow: false },
  { n: "03", label: "Draft output",      yellow: false },
  { n: "04", label: "Human review",      yellow: true  },
  { n: "05", label: "Final tax position", yellow: false },
];

const VALIDATE        = ["Facts", "Assumptions", "Calculations", "Legal references", "Recommendations", "Final conclusions"];
const VALIDATE_DETAILS = [
  "Verify source documents and cited figures match the underlying records.",
  "Challenge implicit assumptions and confirm they are documented or removed.",
  "Recalculate key figures independently before accepting AI output.",
  "Check statutory citations, circular references and case law against approved sources.",
  "Ensure recommendations align with client facts and professional judgment.",
  "Confirm the final position is defensible and appropriately qualified.",
];
const NEVER_DELEGATE  = ["Technical tax positions", "Tax authority submissions", "Litigation strategy", "Return sign-offs", "Professional opinions"];

function Panel4() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [replayKey, setReplayKey] = useState(0);
  const [expandedValidate, setExpandedValidate] = useState<number | null>(null);
  const hitlActive = activeStep === "04";

  const handleStepClick = (stepN: string) => {
    setActiveStep(stepN);
    if (stepN === "04") setReplayKey((k) => k + 1);
  };

  return (
    <section
      id="p3-hitl"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.yellow)}>Human-In-The-Loop (HITL)</p>
          <h2 style={{ ...h2Style, color: C.onDark }}>The Most Important Control</h2>
        </div>

        {/* Golden Rule — rank #1, full-width yellow bar at TOP */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 32 }}>
          <div style={{ background: C.yellow, padding: "14px 24px", borderRadius: "4px 0 0 4px", flexShrink: 0 }}>
            <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack, whiteSpace: "nowrap" }}>Golden Rule</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", padding: "14px 32px", borderRadius: "0 4px 4px 0", flex: 1 }}>
            <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.onDark }}>AI assists. Tax professionals decide.</p>
          </div>
        </div>

        {/* Banner — supporting context, demoted below Golden Rule */}
        <div style={{ background: "rgba(255,230,0,0.1)", border: `1px solid rgba(255,230,0,0.3)`, borderRadius: 4, padding: "16px 24px", marginBottom: 40 }}>
          <p style={{ fontFamily: F.bold, fontSize: 16, fontWeight: 700, color: C.yellow, textAlign: "center" }}>
            AI assists with drafts and structure. Tax professionals decide the final position.
          </p>
        </div>

        {/* 5-step flow — stagger in, then pulse step 04. Click step 04 to replay + cascade validate. Spans full width. */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 48 }}>
          {HITL_FLOW.map((step, i) => (
            <div key={step.n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.12, duration: 0.3, ease: "easeOut" }}
                style={{ flex: 1 }}
              >
                {step.yellow ? (
                  <motion.div
                    key={`pulse-${replayKey}`}
                    initial={{ scale: 1 }}
                    animate={
                      hitlActive
                        ? { scale: [1, 1.04, 1], boxShadow: "0 0 0 2px rgba(255,230,0,0.45)" }
                        : { scale: 1, boxShadow: "0 0 0 0 rgba(255,230,0,0)" }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => handleStepClick(step.n)}
                    style={{
                      background: C.yellow,
                      borderRadius: 4,
                      padding: "16px 20px",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: C.confidentBlack, letterSpacing: "0.06em", marginBottom: 4 }}>{step.n}</p>
                    <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.confidentBlack }}>{step.label}</p>
                  </motion.div>
                ) : (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleStepClick(step.n)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleStepClick(step.n); }}
                    style={{
                      background: activeStep === step.n ? "rgba(255,230,0,0.12)" : "rgba(255,255,255,0.07)",
                      borderRadius: 4,
                      padding: "16px 20px",
                      height: "100%",
                      cursor: "pointer",
                      outline: activeStep === step.n ? `2px solid ${C.yellow}` : "none",
                      outlineOffset: 2,
                      transition: "background 150ms ease, outline 150ms ease",
                    }}
                    onMouseEnter={(e) => { if (activeStep !== step.n) e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onMouseLeave={(e) => { if (activeStep !== step.n) e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                  >
                    <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: C.onDarkMuted, letterSpacing: "0.06em", marginBottom: 4 }}>{step.n}</p>
                    <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.onDark }}>{step.label}</p>
                  </div>
                )}
              </motion.div>
              {i < HITL_FLOW.length - 1 && (
                <div style={{ width: 28, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowRight size={16} color={C.yellow} strokeWidth={1.75} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Validate / Never delegate — interactive hover/click, validate items cascade yellow when step 04 replays */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              background: hitlActive ? "rgba(255,230,0,0.06)" : "rgba(255,255,255,0.04)",
              borderRadius: 4,
              padding: "24px 28px",
              borderTop: `3px solid ${C.frameGreen}`,
              boxShadow: hitlActive ? "0 0 0 1px rgba(255,230,0,0.28), inset 0 0 20px rgba(255,230,0,0.05)" : "none",
              transition: "background 200ms ease, box-shadow 200ms ease",
            }}
          >
            <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.confidentBlack, marginBottom: 16, letterSpacing: "0.04em", background: C.yellow, display: "inline-block", padding: "6px 12px", borderRadius: 3 }}>Human review should validate</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {VALIDATE.map((item, idx) => {
                const isExpanded = expandedValidate === idx;
                return (
                  <motion.button
                    key={`${item}-${replayKey}`}
                    type="button"
                    initial={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                    animate={
                      hitlActive
                        ? { backgroundColor: ["rgba(255,230,0,0.35)", "rgba(255,230,0,0.18)"] }
                        : { backgroundColor: isExpanded ? "rgba(255,230,0,0.12)" : "rgba(255,255,255,0.03)" }
                    }
                    transition={{ delay: hitlActive ? idx * 0.08 : 0, duration: 0.6, ease: "easeOut" }}
                    onClick={() => setExpandedValidate(isExpanded ? null : idx)}
                    style={{
                      fontFamily: F.light, fontSize: 13, color: hitlActive || isExpanded ? C.onDark : C.onDarkMuted, lineHeight: 1.4,
                      padding: "10px 12px", borderRadius: 3, margin: 0,
                      cursor: "pointer",
                      border: isExpanded ? `1px solid ${C.yellow}` : "1px solid transparent",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontFamily: F.bold, fontWeight: 700, fontSize: 13 }}>{item}</span>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ fontFamily: F.light, fontSize: 12, color: C.onDarkMuted, lineHeight: 1.45, overflow: "hidden" }}
                        >
                          {VALIDATE_DETAILS[idx]}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: "24px 28px", borderTop: `3px solid ${C.frameOrange}`, transition: "background 150ms ease" }}>
            <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.frameOrange, marginBottom: 16, letterSpacing: "0.04em" }}>Tax functions should never delegate</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {NEVER_DELEGATE.map((item) => (
                <p
                  key={item}
                  style={{
                    fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.4,
                    padding: "6px 10px", borderRadius: 3, margin: 0,
                    background: "rgba(255,255,255,0.03)",
                    transition: "background 150ms ease, color 150ms ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,125,30,0.12)"; e.currentTarget.style.color = C.onDark; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = C.onDarkMuted; }}
                >{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 5 — Workshop Reference Library (Slide 6) ───────────────────────────

type ExampleCategory = "research" | "generative" | "use-cases";

type GuidedExample = {
  name: string;
  category: ExampleCategory;
  purpose: string;
  approach: string;
  outcome: string;
  templateAsset?: TemplateAsset;
};

// 15 guided examples — same content as #guided-examples (BrainstormingUseCases)
const GUIDED_EXAMPLES: GuidedExample[] = [
  {
    name: "Concept Note",
    category: "research",
    purpose: "Reviewing research from multiple sources and helps draft requisite concept note for larger consumption.",
    approach: "Analyses tax research data collated from various sources and drafts a concept note with the relevant legislative provisions, judicial precedents and positions adopted.",
    outcome: "Creates a precise and informative summary of relevant tax concepts that serves as a foundational reference document.",
    templateAsset: { screenshot: "/templates/concept-note.png", downloadUrl: "/templates/concept-note.pptx" },
  },
  {
    name: "Facts-to-Law Mapping",
    category: "research",
    purpose: "Mapping of relevant facts of the case to applicable tax provisions and judicial precedents to assess tax exposure.",
    approach: "Extracts the relevant facts of a case, identifies the applicable tax provisions and maps these to applicable judicial precedents and positions adopted.",
    outcome: "Develops a structured fact-to-law matrix that clearly shows the relationship between facts and applicable legal frameworks.",
  },
  {
    name: "20-80 Concept Simplification",
    category: "research",
    purpose: "Simplifying tax concepts into digestible, actionable insights that cover 80% of use cases with 20% of the effort.",
    approach: "Analyses complex tax concepts and extracts the key principles, rules and exceptions that apply to the most common scenarios encountered in practice.",
    outcome: "Produces concise, practical summaries of tax concepts that enable quick understanding and application in common scenarios.",
  },
  {
    name: "Stepwise Concept Plan",
    category: "research",
    purpose: "Breaking down complex tax concepts into step-by-step implementation guidance that can be followed sequentially.",
    approach: "Structures tax concepts into logical, sequential steps with clear decision points, conditions and actions at each stage.",
    outcome: "Creates a structured implementation guide that reduces errors and ensures consistent application of tax concepts.",
  },
  {
    name: "Transaction Step Plan",
    category: "use-cases",
    purpose: "Mapping the tax implications of each step in a transaction to identify risks and planning opportunities.",
    approach: "Analyses each step of a proposed transaction, identifies applicable tax provisions and assesses the tax consequences and risks.",
    outcome: "Produces a comprehensive transaction map showing the tax implications at each step and highlighting key risk areas.",
  },
  {
    name: "GST Formula Validation",
    category: "use-cases",
    purpose: "Validating GST calculations and formulas to ensure compliance with applicable provisions and circulars.",
    approach: "Checks GST calculations against applicable tax rates, exemptions and provisions, identifies discrepancies and suggests corrections.",
    outcome: "Provides a validated GST calculation with references to applicable provisions and explanation of any adjustments made.",
  },
  {
    name: "Meeting Minutes",
    category: "generative",
    purpose: "Generating structured meeting minutes from discussion notes or recordings for tax team meetings.",
    approach: "Extracts key discussion points, decisions made, action items and owners from meeting notes and organises them into a structured format.",
    outcome: "Produces clear, concise meeting minutes with action items, owners and timelines that can be shared with stakeholders.",
  },
  {
    name: "PPT Mock Run",
    category: "generative",
    purpose: "Preparing for client presentations by generating anticipated questions and suggested responses.",
    approach: "Analyses the presentation content and generates likely client questions based on the subject matter, industry context and typical client concerns.",
    outcome: "Produces a Q&A preparation guide that helps presenters anticipate and prepare for client questions.",
  },
  {
    name: "Tax Strategic Upskilling",
    category: "research",
    purpose: "Creating personalised learning materials to build tax team capability in specific areas.",
    approach: "Assesses the learning objectives and creates structured learning content including explanations, examples, scenarios and self-assessment questions.",
    outcome: "Produces targeted learning materials that build capability in specific tax areas efficiently.",
  },
  {
    name: "Document Extraction",
    category: "generative",
    purpose: "Extracting specific data points or information from large volumes of tax documents.",
    approach: "Identifies and extracts specified data fields from documents such as invoices, contracts, returns and correspondence.",
    outcome: "Produces structured data extracts that can be used for analysis, reconciliation or reporting purposes.",
  },
  {
    name: "Image Summarization",
    category: "generative",
    purpose: "Summarising content from images, charts or scanned documents for use in tax analysis.",
    approach: "Analyses image content including charts, tables, scanned documents and handwritten notes and converts them into structured text summaries.",
    outcome: "Produces text summaries of image content that can be integrated into analysis and reporting workflows.",
  },
  {
    name: "Vernacular Translation",
    category: "generative",
    purpose: "Translating tax documents or communications from regional languages to English for analysis.",
    approach: "Translates content from regional languages while preserving technical tax terminology and context.",
    outcome: "Provides accurate translations that enable analysis of tax documents in regional languages.",
  },
  {
    name: "VBA Automation",
    category: "use-cases",
    purpose: "Creating VBA macros to automate repetitive Excel-based tax calculations and data processing tasks.",
    approach: "Analyses the manual process steps and generates VBA code to automate data extraction, calculation and formatting tasks.",
    outcome: "Produces VBA code that automates repetitive tasks, reducing manual effort and improving consistency.",
  },
  {
    name: "Agreement Review",
    category: "use-cases",
    purpose: "Reviewing agreements for tax-relevant clauses and assessing the tax implications of contractual arrangements.",
    approach: "Extracts and analyses tax-relevant clauses from agreements, identifies potential tax risks and suggests areas for clarification or renegotiation.",
    outcome: "Produces a structured review highlighting key tax clauses, risks and recommended actions.",
  },
  {
    name: "SOP Review",
    category: "use-cases",
    purpose: "Reviewing and updating standard operating procedures to reflect current tax provisions and best practices.",
    approach: "Analyses existing SOPs against current tax provisions and identifies areas where updates or clarifications are required.",
    outcome: "Produces updated SOPs or a gap analysis highlighting required changes to align with current requirements.",
  },
];

const APPENDIX_REFS = [
  "Master Prompt Template",
  "Comparative Assessment Prompt",
  "Risk Assessment Prompt",
  "Data Analysis Prompt",
];

// ── Alternate UI for guided examples: split-panel (same as #guided-examples) ─
function GuidedExamplesAlternateUI() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [panelKey, setPanelKey] = useState(0);
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  const select = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setPanelKey((k) => k + 1);
  };

  const active = GUIDED_EXAMPLES[activeIdx];
  const isLast = activeIdx === GUIDED_EXAMPLES.length - 1;
  const next = () => select(Math.min(activeIdx + 1, GUIDED_EXAMPLES.length - 1));
  const prev = () => select(Math.max(activeIdx - 1, 0));

  return (
    <div>
      {preview && (
        <TemplatePreviewModal
          imageSrc={preview.src}
          title={preview.title}
          onClose={() => setPreview(null)}
        />
      )}
      {/* Split panel */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "clamp(200px, 30%, 280px) 1fr",
        gap: 0,
        border: `1px solid ${C.gray02}`,
        borderRadius: 10,
        overflow: "hidden",
        background: C.white,
        minHeight: 480,
      }}>

        {/* LEFT — sidebar */}
        <div style={{
          background: C.confidentBlack,
          borderRight: `1px solid rgba(255,255,255,0.08)`,
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{
            padding: "16px 17px 12px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span style={{
              fontFamily: F.bold, fontSize: 11, letterSpacing: "0.06em",
              textTransform: "uppercase", color: C.onDarkMuted,
            }}>
              Examples
            </span>
            <span style={{
              fontFamily: F.bold, fontSize: 11,
              color: C.yellow,
              background: "rgba(255,230,0,0.12)",
              borderRadius: 20, padding: "2px 10px",
              letterSpacing: "0.02em",
            }}>
              {activeIdx + 1} / {GUIDED_EXAMPLES.length}
            </span>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {/* Flat list — matches Priya's reference HTML pin (no category headers) */}
            {GUIDED_EXAMPLES.map((ex, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={ex.name}
                  type="button"
                  onClick={() => select(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "none",
                    background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                    borderLeft: isActive ? `3px solid ${C.yellow}` : "3px solid transparent",
                    padding: "10px 16px 10px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <span style={{
                    fontFamily: isActive ? F.bold : F.regular,
                    fontSize: isActive ? 13 : 12,
                    color: isActive ? C.onDark : C.onDarkMuted,
                    lineHeight: 1.35,
                    letterSpacing: isActive ? "-0.01em" : "0.01em",
                  }}>
                    {ex.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT — detail panel */}
        <div
          key={panelKey}
          style={{
            padding: "clamp(24px, 3vw, 40px)",
            display: "flex",
            flexDirection: "column",
            animation: "ey-slide-right 200ms cubic-bezier(.22,.68,0,1.05) both",
          }}
        >
          <h3 style={{
            fontFamily: F.bold,
            fontSize: "clamp(18px, 2.2vw, 26px)",
            color: C.offBlack,
            margin: "0 0 28px",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}>
            {active.name}
          </h3>

          <TemplateAssetActions
            name={active.name}
            asset={active.templateAsset}
            onPreview={(src, title) => setPreview({ src, title })}
          />

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontFamily: F.bold, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.eyebrowGold, margin: "0 0 8px" }}>Purpose</p>
            <p style={{ fontFamily: F.regular, fontSize: 14, color: C.offBlack, margin: 0, lineHeight: 1.6 }}>{active.purpose}</p>
          </div>

          <div style={{ height: 1, background: C.gray02, marginBottom: 24 }} />

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontFamily: F.bold, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.eyebrowGold, margin: "0 0 8px" }}>Approach</p>
            <p style={{ fontFamily: F.regular, fontSize: 14, color: C.offBlack, margin: 0, lineHeight: 1.6 }}>{active.approach}</p>
          </div>

          <div style={{ height: 1, background: C.gray02, marginBottom: 24 }} />

          <div style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: F.bold, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.eyebrowGold, margin: "0 0 8px" }}>Outcome</p>
            <p style={{ fontFamily: F.regular, fontSize: 14, color: C.offBlack, margin: 0, lineHeight: 1.6 }}>{active.outcome}</p>
          </div>

          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", gap: 12 }}>
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              style={{
                fontFamily: F.bold, fontSize: 13,
                color: activeIdx === 0 ? C.gray02 : C.offBlack,
                background: "transparent",
                border: `1px solid ${activeIdx === 0 ? C.gray02 : C.offBlack}`,
                borderRadius: 6, padding: "8px 20px",
                cursor: activeIdx === 0 ? "not-allowed" : "pointer",
                letterSpacing: "-0.01em",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "border-color 150ms, color 150ms",
              }}
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <button
              onClick={next}
              disabled={isLast}
              style={{
                fontFamily: F.bold, fontSize: 13,
                color: isLast ? C.gray02 : C.offBlack,
                background: "transparent",
                border: `1px solid ${isLast ? C.gray02 : C.offBlack}`,
                borderRadius: 6, padding: "8px 20px",
                cursor: isLast ? "not-allowed" : "pointer",
                letterSpacing: "-0.01em",
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "border-color 150ms, color 150ms",
              }}
            >
              {isLast ? <>End of examples</> : <>Next <ChevronRight size={14} /></>}
            </button>
          </div>
        </div>
      </div>

      {/* Discussion prompt — Priya reference HTML pin under the template library */}
      <div
        style={{
          marginTop: 24,
          background: C.yellow,
          borderRadius: 8,
          padding: "18px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <p
          style={{
            fontFamily: F.bold,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: C.confidentBlack,
            margin: 0,
          }}
        >
          Discussion prompt
        </p>
        <p
          style={{
            fontFamily: F.regular,
            fontSize: 15,
            color: C.offBlack,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Which recurring tax activity would benefit from stronger extraction, comparison, analysis, explanation, validation or a first draft?
        </p>
      </div>
    </div>
  );
}

function Panel5() {
  return (
    <section
      id="p5-templates"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.confidentBlack)}>Sample Prompt Templates</p>
          <h2 style={{ ...h2Style, color: C.confidentBlack }}>Workshop Reference Library</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body.size, color: C.gray01, marginBottom: 0 }}>
            Select a book from the shelf to explore its guided prompt template.
          </p>
        </div>

        <PromptBookshelfLibrary />
      </div>
    </section>
  );
}

// ── Panel 6 — Agent Library + Closing (Slides 7 + 8) ─────────────────────────

type AgentEntry = {
  name: string;
  purpose: string;
  actions: string;
  outcome: string;
  templateAsset?: TemplateAsset;
};

const AGENT_LIBRARY: AgentEntry[] = [
  {
    name: "Tax Knowledge Retrieval Agent",
    purpose: "Acts as a centralized knowledge assistant for locating historical tax positions, precedents and supporting materials.",
    actions: "Searches approved repositories containing tax opinions, notices, submissions, laws, policies and knowledge documents.",
    outcome: "Enables faster research, improves consistency in tax positions and reduces time spent searching for information.",
    templateAsset: { screenshot: "/templates/tax-knowledge-agent.png", downloadUrl: "/templates/tax-knowledge-agent.docx" },
  },
  {
    name: "Transfer Pricing Documentation Agent",
    purpose: "Supports preparation and maintenance of transfer pricing documentation and supporting evidence.",
    actions: "Reviews related-party schedules, TP reports, benchmarking studies, GL records and supporting documentation.",
    outcome: "Identifies transactions, summarizes supporting information, highlights exceptions and improves audit readiness.",
  },
  {
    name: "Advance Tax Reviewer Agent",
    purpose: "Assists tax teams in reviewing advance tax computations and identifying key movements between reporting periods.",
    actions: "Compares current and prior quarter computations, validates changes in assumptions and workings, and analyses variances across tax forecasts and calculations.",
    outcome: "Produces variance analysis narratives, management summary notes and review observations that support faster validation, stakeholder reporting and decision-making.",
  },
  {
    name: "Tax Information Request Agent",
    purpose: "Streamlines the collection and management of information required from stakeholders during tax projects.",
    actions: "Drafts information requests, reviews responses, summarizes stakeholder inputs and identifies missing information.",
    outcome: "Reduces follow-up effort and improves the completeness and quality of information received.",
  },
  {
    name: "Assessment Evidence Agent",
    purpose: "Assists tax teams in gathering and organizing supporting evidence for audits, assessments and disputes.",
    actions: "Searches SharePoint, Teams, Outlook and supporting repositories for relevant documentation and correspondence.",
    outcome: "Creates issue-wise evidence packs, highlights missing support and strengthens audit preparedness.",
  },
  {
    name: "Tax Leadership Reporting Agent",
    purpose: "Provides leadership with periodic consolidated visibility over tax activities, developments and risks.",
    actions: "Collects status updates, auditor comments, legislative changes and regional tax developments for analysis.",
    outcome: "Produces executive dashboards, management reports and briefing materials to support decision-making.",
  },
  {
    name: "Personalized Tracker Agent (including Compliance Tracker)",
    purpose: "Acts as a centralized monitoring tool for tax compliance activities, deadlines and action items.",
    actions: "Maintains compliance calendars, trackers, filing records and related correspondence.",
    outcome: "Identifies upcoming, due and overdue obligations, highlights risks and supports timely compliance management.",
  },
  {
    name: "Repetitive Tax Correspondence Agent",
    purpose: "Standardizes recurring tax communications across stakeholders, management and employees.",
    actions: "Generates communication templates, drafts correspondence, refines messaging and applies approved communication standards.",
    outcome: "Improves consistency, reduces drafting effort and accelerates turnaround of routine communications.",
  },
  {
    name: "Second Brain Agent",
    purpose: "Acts as a personalized tax knowledge companion that helps professionals quickly access information, insights and prior work products accumulated over time.",
    actions: "Searches across emails, meeting notes, presentations, research materials, working papers, tax opinions and enterprise repositories to build contextual understanding.",
    outcome: "Enables users to retrieve historical knowledge, identify relevant precedents, surface action items and obtain context-aware guidance without manually searching through multiple sources.",
  },
];

function Panel6() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);
  const agent = AGENT_LIBRARY[activeIdx];

  return (
    <section
      id="p3-agent-templates"
      style={{
        scrollMarginTop: SUBNAV_SCROLL_MARGIN,
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: spacing.sectionPaddingY,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      {preview && (
        <TemplatePreviewModal
          imageSrc={preview.src}
          title={preview.title}
          onClose={() => setPreview(null)}
        />
      )}
      <div style={{ ...contentRailStyle }}>
          <div style={sectionHeader}>
            <p style={eyebrow(C.yellow)}>Sample M365 Agent Templates</p>
            <h2 style={{ ...h2Style, color: C.onDark }}>From Build Lab to Controlled Deployment</h2>
            <p style={{ fontFamily: F.light, fontSize: typeScale.body.size, color: C.onDarkMuted, marginBottom: 0 }}>
              Convert draft instructions into pilots, adoption rituals and continuous refinement. Click an agent to see what it does.
            </p>
          </div>

          {/* Agent wizard — split panel (same pattern as EightElementsWizard / pt-wizard) */}
          <div style={{
            border: `1px solid ${C.borderOnDark}`,
            borderRadius: 12,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "minmax(260px, 300px) 1fr",
            height: 620,
            textAlign: "left",
            background: C.eyBgCard,
          }}>
          {/* LEFT — agent picker sidebar */}
          <nav aria-label="M365 Agent templates" style={{
            background: C.confidentBlack,
            borderRight: `1px solid ${C.borderOnDark}`,
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}>
            <div style={{ padding: "0 20px 16px", borderBottom: `1px solid ${C.borderOnDark}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.yellow, fontFamily: F.bold, marginBottom: 4 }}>
                Agent Instruction Library
              </div>
              <div style={{ fontSize: 13, color: C.onDarkMuted, fontFamily: F.regular, lineHeight: 1.5 }}>
                Pick an agent to explore.
              </div>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px" }}>
              {AGENT_LIBRARY.map((a, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={a.name}
                    type="button"
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 12px",
                      marginBottom: 2,
                      background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                      border: isActive ? "none" : "1px solid transparent",
                      borderRadius: 8,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      background: isActive ? C.yellow : "transparent",
                      border: `1.5px solid ${isActive ? C.yellow : C.gray02}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700,
                      color: isActive ? C.confidentBlack : C.onDarkMuted,
                      fontFamily: F.bold,
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{
                      flex: 1, minWidth: 0,
                      fontSize: 13, fontWeight: 700,
                      color: isActive ? C.onDark : C.onDarkMuted,
                      fontFamily: F.bold,
                    }}>
                      {a.name}
                    </span>
                    <ChevronRight size={14} color={isActive ? C.yellow : C.onDarkSubtle} strokeWidth={1.75} style={{ flexShrink: 0 }} />
                  </button>
                );
              })}
            </div>
          </nav>

          {/* RIGHT — detail panel */}
          <div style={{ display: "flex", flexDirection: "column", background: C.eyBgCard, minHeight: 0 }}>
            {/* Header strip — active agent number + name */}
            <div style={{
              padding: "16px 24px",
              background: C.confidentBlack,
              borderBottom: `1px solid ${C.borderOnDark}`,
              display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
              flexShrink: 0,
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                background: C.yellow, color: C.confidentBlack,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, fontFamily: F.bold,
              }}>
                {activeIdx + 1}
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.onDark, fontFamily: F.bold }}>{agent.name}</span>
            </div>

            {/* Body — Purpose / Actions / Outcome as labeled sections */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
              <TemplateAssetActions
                name={agent.name}
                asset={agent.templateAsset}
                onPreview={(src, title) => setPreview({ src, title })}
                onDark
              />
              {[
                { label: "Purpose", body: agent.purpose },
                { label: "Actions", body: agent.actions },
                { label: "Outcome", body: agent.outcome },
              ].map(({ label, body }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: F.bold, fontSize: 10, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: C.eyebrowGold,
                    margin: "0 0 8px",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: F.regular, fontSize: 15, color: C.onDark,
                    margin: 0, lineHeight: 1.7, maxWidth: 560,
                  }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GuidanceImplementation({ onBack, onNavigate }: Props) {
  useModuleSectionHashScroll();

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: C.confidentBlack }}>
      <style>{`
        @keyframes ey-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ey-slide-right {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#phase3-content" />
      <ModuleHeader
        mode="phase-overview"
        hideModuleDropdown
        phaseLabel={PHASE3_LABEL}
        phaseNumber={PHASE3_NUMBER}
        subPhaseLabel="3.1"
        sections={PHASE3_SECTIONS}
        onNavigate={onNavigate}
        onBack={onBack}
      />

      <main id="phase3-content" style={{ position: "relative" }}>
        <Panel1 />
        <PanelBingo />
        <Panel2 />
        <Panel2UseCases onNavigate={onNavigate} />
        <Panel3 />
        <Panel4 />
        <Panel5 />
        {SHOW_P3_AGENT_TEMPLATES && <Panel6 />}
        <AscentModuleProgressSection
          moduleKey="m3"
          id="journey-progress"
          onNextStepCta={() => onNavigate("/closure-ai-reinforcement")}
        />
      </main>
    </div>
  );
}
