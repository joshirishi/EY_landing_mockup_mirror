import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SiteHeader } from "../design-kit/SiteHeader";
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

// ── Section nav ───────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "p3-workshop",  label: "Workshop" },
  { id: "p3-prompts",   label: "Tax Prompts" },
  { id: "p3-agents",    label: "M365 Agents" },
  { id: "p3-hitl",      label: "Human-in-Loop" },
  { id: "p3-library",   label: "Reference Library" },
  { id: "p3-closing",   label: "Outcomes" },
];

function SectionNav({ activeId }: { activeId: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const container = document.querySelector(".overflow-auto");
    if (el && container) {
      const top = el.getBoundingClientRect().top + container.scrollTop - 80;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(26,26,36,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid rgba(255,255,255,0.08)`,
        overflowX: "auto",
      }}
    >
      <div style={{ ...contentRailStyle, display: "flex", alignItems: "center", gap: 4, height: 44, paddingTop: 0, paddingBottom: 0 }}>
        {SECTIONS.map((sec) => {
          const active = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 12px",
                height: "100%",
                fontFamily: F.regular,
                fontSize: 12,
                color: active ? C.yellow : C.onDarkMuted,
                borderBottom: active ? `2px solid ${C.yellow}` : "2px solid transparent",
                transition: "color 150ms ease, border-color 150ms ease",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
    color: C.framePurple,
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
    <section
      id="p3-workshop"
      style={{
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: spectrumCss(1) }} />
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.yellow)}>Phase 3 · Guidance for Implementation</p>
          <h1
            style={{
              fontFamily: F.bold,
              fontSize: typeScale.h1,
              fontWeight: 700,
              color: C.onDark,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Hands-On Build Workshop
          </h1>
          <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.onDarkMuted, marginBottom: 0 }}>
            Building Tax Prompt Libraries and Microsoft 365 Copilot Agents
          </p>
        </div>

        {/* Quote card */}
        <div
          style={{
            borderLeft: `4px solid ${C.yellow}`,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "0 4px 4px 0",
            padding: "22px 28px",
            marginBottom: 48,
            maxWidth: 720,
          }}
        >
          <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.yellow, lineHeight: 1.5, fontStyle: "italic" }}>
            "The objective is no longer awareness. Participants should spend more time in Copilot than looking at slides."
          </p>
        </div>

        {/* Build / Test / Refine */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 48 }}>
          {BTR.map((step, i) => (
            <div key={step.n} style={{ display: "flex", alignItems: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.35, ease: "easeOut" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 4,
                  padding: "20px 28px",
                  borderTop: `3px solid ${step.color}`,
                  minWidth: 140,
                  transition: "background 150ms ease",
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.09)" }}
              >
                <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: step.color, letterSpacing: "0.06em", marginBottom: 6 }}>{step.n}</p>
                <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.onDark }}>{step.label}</p>
              </motion.div>
              {i < BTR.length - 1 && (
                <div style={{ width: 32, height: 2, background: "rgba(255,255,255,0.15)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Workshop objective / build zone / outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {WORKSHOP_COLS.map((col) => (
            <div
              key={col.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 4,
                padding: "20px 24px",
                borderLeft: `3px solid ${col.color}`,
              }}
            >
              <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: col.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>{col.label}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {col.items.map((item) => (
                  <li key={item} style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: col.color, flexShrink: 0 }}>·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "14px 24px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: C.yellow, fontSize: 16 }}>→</span>
          <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.yellow }}>Facilitator deck + detailed handouts</p>
        </div>
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

function Panel2() {
  return (
    <section
      id="p3-prompts"
      style={{
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.confidentBlack)}>Prompt Engineering Refresher</p>
          <h2 style={{ ...h2Style, color: C.confidentBlack }}>Building Better Tax Prompts</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 0 }}>
            A prompt is the control surface for quality, scope and reviewability.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "start" }}>
          {/* 8-element table */}
          <div style={{ background: C.white, borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,36,0.07)" }}>
            <div style={{ height: 3, background: spectrumCss(1) }} />
            <div style={{ padding: "0 24px" }}>
              {PROMPT_COMPONENTS.map((item) => (
                <NumberedRow key={item.n} {...item} color={C.yellow} light />
              ))}
            </div>
          </div>

          {/* Prompt seed + payoff */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: C.confidentBlack, borderRadius: 4, padding: "24px 28px" }}>
              <p style={eyebrow(C.yellow)}>Example Prompt Seed</p>
              <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.yellow, lineHeight: 1.5, marginBottom: 16 }}>
                "You are a senior Indian tax professional specialising in transfer pricing and international taxation."
              </p>
              <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.6, marginBottom: 12 }}>
                Prepare the analysis for a regional tax director. Compare current-year and prior-year intercompany transactions and identify material changes.
              </p>
              <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.6 }}>
                Use a professional advisory style and rely only on specified source documents.
              </p>
            </div>
            <div style={{ background: C.white, borderRadius: 4, padding: "24px 28px", boxShadow: "0 2px 8px rgba(26,26,36,0.07)", borderLeft: `4px solid ${C.yellow}` }}>
              <p style={{ fontFamily: F.bold, fontSize: 22, fontWeight: 700, color: C.confidentBlack, lineHeight: 1.3 }}>
                Good outputs start with good prompts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 3 — Instruction Components / M365 Agent (Slide 4) ──────────────────

const AGENT_COMPONENTS = [
  { n: "01", label: "Purpose",               question: "Why does the agent exist?" },
  { n: "02", label: "Knowledge sources",     question: "Where should it search?" },
  { n: "03", label: "Core responsibilities", question: "Summaries, retrieve, organize, draft, report." },
  { n: "04", label: "Workflow",              question: "What steps should it follow?" },
  { n: "05", label: "Output format",         question: "Define standard sections." },
  { n: "06", label: "Escalation rules",      question: "When should it ask for help?" },
  { n: "07", label: "Guardrails",            question: "What must it never do?" },
];

const AGENT_WORKFLOW = [
  { n: "01", step: "Receive request" },
  { n: "02", step: "Search repository" },
  { n: "03", step: "Summaries findings" },
  { n: "04", step: "Identify gaps" },
  { n: "05", step: "Prepare output" },
];

function Panel3() {
  const [activeStep, setActiveStep] = useState(0);
  const atEnd = activeStep === AGENT_WORKFLOW.length - 1;

  function scrollToTemplates() {
    const el = document.getElementById("p5-templates");
    const container = document.querySelector(".overflow-auto");
    if (el && container) {
      const top = el.getBoundingClientRect().top + container.scrollTop - 80;
      container.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <section
      id="p3-agents"
      style={{
        background: C.white,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.confidentBlack)}>Anatomy of a Good M365 Agent</p>
          <h2 style={{ ...h2Style, color: C.confidentBlack }}>Instruction Components</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 0 }}>
            Design the assistant like a repeatable tax process — not a generic chatbot.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "start" }}>
          {/* 7-element table */}
          <div style={{ background: C.offWhite, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: 3, background: spectrumCss(2) }} />
            <div style={{ padding: "0 24px" }}>
              {AGENT_COMPONENTS.map((item) => (
                <NumberedRow key={item.n} {...item} color={C.framePurple} light />
              ))}
            </div>
          </div>

          {/* Workflow (interactive step-through) + example purpose */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: C.offWhite, borderRadius: 4, padding: "24px 28px" }}>
              <p style={eyebrow(C.framePurple)}>Agent Workflow</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {AGENT_WORKFLOW.map((step, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  return (
                    <div key={step.n} style={{ display: "flex", alignItems: "center", transition: "opacity 200ms ease-out", opacity: isPast ? 0.35 : 1 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 4, flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: isActive ? C.framePurple : C.confidentBlack,
                          boxShadow: isActive ? `0 0 0 3px rgba(122,85,204,0.25)` : "none",
                          transition: "background 200ms ease-out, box-shadow 200ms ease-out",
                        }}>
                          <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: isActive ? C.white : C.framePurple }}>{step.n}</span>
                        </div>
                        {i < AGENT_WORKFLOW.length - 1 && <div style={{ width: 1, height: 16, background: "rgba(26,26,36,0.15)" }} />}
                      </div>
                      <span style={{
                        fontFamily: F.regular, fontSize: 14, marginLeft: 14,
                        color: isActive ? C.confidentBlack : C.gray01,
                        fontWeight: isActive ? 700 : 400,
                        transition: "color 200ms ease-out, font-weight 200ms ease-out",
                      }}>{step.step}</span>
                    </div>
                  );
                })}
              </div>

              {/* Step controls */}
              <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
                {!atEnd ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((s) => Math.min(s + 1, AGENT_WORKFLOW.length - 1))}
                    style={{
                      fontFamily: F.bold, fontSize: 12, fontWeight: 700,
                      color: C.framePurple, background: "none",
                      border: `1px solid ${C.framePurple}`, borderRadius: 3,
                      padding: "6px 14px", cursor: "pointer",
                      letterSpacing: "0.04em",
                      transition: "background 150ms ease, color 150ms ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = C.framePurple; (e.currentTarget as HTMLButtonElement).style.color = C.white; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "none"; (e.currentTarget as HTMLButtonElement).style.color = C.framePurple; }}
                  >
                    Next step →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToTemplates}
                    style={{
                      fontFamily: F.bold, fontSize: 12, fontWeight: 700,
                      color: C.white, background: C.framePurple,
                      border: "none", borderRadius: 3,
                      padding: "6px 14px", cursor: "pointer",
                      letterSpacing: "0.04em",
                    }}
                  >
                    See example output →
                  </button>
                )}
                {activeStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveStep(0)}
                    style={{
                      fontFamily: F.regular, fontSize: 12,
                      color: C.gray01, background: "none",
                      border: "none", cursor: "pointer", padding: "6px 8px",
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div style={{ background: C.confidentBlack, borderRadius: 4, padding: "20px 24px", borderLeft: `4px solid ${C.framePurple}` }}>
              <p style={eyebrow(C.framePurple)}>Example Purpose</p>
              <p style={{ fontFamily: F.regular, fontSize: 14, color: C.onDark, lineHeight: 1.5 }}>
                Assist tax teams in gathering and organising transfer pricing documentation.
              </p>
            </div>
          </div>
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
const NEVER_DELEGATE  = ["Technical tax positions", "Tax authority submissions", "Litigation strategy", "Return sign-offs", "Professional opinions"];

function Panel4() {
  return (
    <section
      id="p3-hitl"
      style={{
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

        {/* Banner */}
        <div style={{ background: "rgba(255,230,0,0.1)", border: `1px solid rgba(255,230,0,0.3)`, borderRadius: 4, padding: "16px 24px", marginBottom: 40 }}>
          <p style={{ fontFamily: F.bold, fontSize: 16, fontWeight: 700, color: C.yellow, textAlign: "center" }}>
            AI assists with drafts and structure. Tax professionals decide the final position.
          </p>
        </div>

        {/* 5-step flow — Zara's peak moment: stagger in, then pulse step 04 */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 48, flexWrap: "wrap" }}>
          {HITL_FLOW.map((step, i) => (
            <div key={step.n} style={{ display: "flex", alignItems: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.12, duration: 0.3, ease: "easeOut" }}
              >
                {step.yellow ? (
                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.04, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.7, duration: 0.4, ease: "easeInOut" }}
                    style={{
                      background: C.yellow,
                      borderRadius: 4,
                      padding: "16px 20px",
                      minWidth: 140,
                    }}
                  >
                    <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: C.confidentBlack, letterSpacing: "0.06em", marginBottom: 4 }}>{step.n}</p>
                    <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.confidentBlack }}>{step.label}</p>
                  </motion.div>
                ) : (
                  <div
                    style={{ background: "rgba(255,255,255,0.07)", borderRadius: 4, padding: "16px 20px", minWidth: 140 }}
                  >
                    <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: C.onDarkMuted, letterSpacing: "0.06em", marginBottom: 4 }}>{step.n}</p>
                    <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.onDark }}>{step.label}</p>
                  </div>
                )}
              </motion.div>
              {i < HITL_FLOW.length - 1 && (
                <div style={{ width: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: C.yellow, fontSize: 18 }}>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Validate / Never delegate */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: "24px 28px", borderTop: `3px solid ${C.frameGreen}` }}>
            <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.frameGreen, marginBottom: 16, letterSpacing: "0.04em" }}>Human review should validate</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {VALIDATE.map((item) => (
                <p key={item} style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.4 }}>{item}</p>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: "24px 28px", borderTop: `3px solid ${C.frameOrange}` }}>
            <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.frameOrange, marginBottom: 16, letterSpacing: "0.04em" }}>Tax functions should never delegate</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {NEVER_DELEGATE.map((item) => (
                <p key={item} style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.4 }}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Golden Rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div style={{ background: C.yellow, padding: "14px 24px", borderRadius: "4px 0 0 4px", flexShrink: 0 }}>
            <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack, whiteSpace: "nowrap" }}>Golden Rule</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", padding: "14px 32px", borderRadius: "0 4px 4px 0", flex: 1 }}>
            <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.onDark }}>AI assists. Tax professionals decide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 5 — Workshop Reference Library (Slide 6) ───────────────────────────

const PROMPT_CATS = [
  {
    color: C.frameBlue,
    title: "Compare & Assess Prompts",
    items: ["Calendar Year vs Financial Year", "New Regime vs Old Regime", "Global vs Local Policy Review"],
  },
  {
    color: C.framePurple,
    title: "Review & Recommend Prompts",
    items: ["Tax Exposure Assessment", "Process Gap Assessment", "Shared Service Cost Allocation Review"],
  },
  {
    color: C.frameOrange,
    title: "Analyse & Detect Prompts",
    items: ["Outlier Detection", "Tax-Sensitive GL Review", "Predictive Tax Analytics"],
  },
];

const APPENDIX_REFS = [
  "Master Prompt Template",
  "Comparative Assessment Prompt",
  "Risk Assessment Prompt",
  "Data Analysis Prompt",
];

function Panel5() {
  return (
    <section
      id="p5-templates"
      style={{
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.confidentBlack)}>Sample Prompt Templates</p>
          <h2 style={{ ...h2Style, color: C.confidentBlack }}>Workshop Reference Library</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 0 }}>
            Use the programme handouts for detailed templates; use this slide as the build menu.
          </p>
        </div>
        <div style={{ background: C.confidentBlack, borderRadius: 4, padding: "12px 20px", marginBottom: 40, display: "inline-block" }}>
          <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.yellow }}>Reference material in Appendix A handout</p>
        </div>

        {/* 3-col prompt categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 32 }}>
          {PROMPT_CATS.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: C.white,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(26,26,36,0.07)",
                transition: "box-shadow 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,36,0.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,26,36,0.07)")}
            >
              <div style={{ height: 3, background: cat.color }} />
              <div style={{ padding: "20px 24px" }}>
                <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: cat.color, marginBottom: 14 }}>{cat.title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {cat.items.map((item, i) => (
                    <li key={item} style={{ fontFamily: F.light, fontSize: 13, color: C.gray01, lineHeight: 1.4, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ fontFamily: F.bold, fontSize: 11, color: cat.color, fontWeight: 700, flexShrink: 0, paddingTop: 1 }}>0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Appendix refs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {APPENDIX_REFS.map((ref) => (
            <div key={ref} style={{ background: C.white, border: `1px solid rgba(26,26,36,0.1)`, borderRadius: 4, padding: "8px 16px" }}>
              <p style={{ fontFamily: F.regular, fontSize: 13, color: C.confidentBlack }}>{ref}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Panel 6 — Agent Library + Closing (Slides 7 + 8) ─────────────────────────

const AGENT_LIBRARY = [
  { n: "1", color: C.frameBlue,   title: "Tax Information Request Agent",          desc: "Collect, organise and track tax information requests." },
  { n: "2", color: C.framePurple, title: "Transfer Pricing Documentation Agent",   desc: "Retrieve and organise TP documentation." },
  { n: "3", color: C.frameOrange, title: "Assessment & Litigation Evidence Agent",  desc: "Locate, summarise and package supporting evidence." },
  { n: "4", color: C.frameGreen,  title: "Tax Knowledge Retrieval Agent",          desc: "Retrieve prior opinions and historical tax positions." },
  { n: "5", color: C.frameTeal,   title: "Compliance Calendar Agent",              desc: "Track obligations and deadlines." },
  { n: "6", color: C.frameBlue,   title: "Tax Leadership Reporting Agent",         desc: "Prepare executive dashboards and reporting packs." },
  { n: "7", color: C.framePurple, title: "Tax Communication & Correspondence Agent", desc: "Draft recurring tax communications." },
];

const YOU_NOW_HAVE = [
  { color: C.frameBlue,   label: "Identified tax AI opportunities" },
  { color: C.frameOrange, label: "Built prompt templates" },
  { color: C.framePurple, label: "Designed AI-enabled processes" },
  { color: C.frameGreen,  label: "Built Copilot Agent instructions" },
];

function Panel6() {
  return (
    <section
      id="p3-closing"
      style={{
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <div style={sectionHeader}>
          <p style={eyebrow(C.yellow)}>Sample M365 Agent Templates</p>
          <h2 style={{ ...h2Style, color: C.onDark }}>From Build Lab to Controlled Deployment</h2>
          <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, marginBottom: 0 }}>
            Convert draft instructions into pilots, adoption rituals and continuous refinement.
          </p>
        </div>

        {/* 7 agents */}
        <p style={{ ...eyebrow(C.framePurple), marginBottom: 16 }}>Agent Instruction Library</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 56 }}>
          {AGENT_LIBRARY.map((agent) => (
            <div
              key={agent.n}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 4,
                overflow: "hidden",
                transition: "background 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
            >
              <div style={{ height: 3, background: agent.color }} />
              <div style={{ padding: "16px 18px" }}>
                <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: agent.color, marginBottom: 6 }}>{agent.n}</p>
                <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.onDark, lineHeight: 1.35, marginBottom: 6 }}>{agent.title}</p>
                <p style={{ fontFamily: F.light, fontSize: 12, color: C.onDarkMuted, lineHeight: 1.45 }}>{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* You now have */}
        <p style={{ ...eyebrow(C.yellow), textAlign: "center" }}>You Now Have</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 56 }}>
          {YOU_NOW_HAVE.map((item) => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "24px 22px", borderTop: `3px solid ${item.color}` }}>
              <p style={{ fontFamily: F.bold, fontSize: 15, fontWeight: 700, color: C.onDark, lineHeight: 1.4 }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Closing context */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 4,
            padding: "36px 40px",
            borderLeft: `4px solid ${C.yellow}`,
          }}
        >
          <p style={eyebrow(C.yellow)}>Hands-on Build Workshop</p>
          <p style={{ fontFamily: F.bold, fontSize: 22, fontWeight: 700, color: C.onDark, lineHeight: 1.35, marginBottom: 12 }}>
            Controlled deployment, user adoption and continuous refinement of the Tax AI operating model.
          </p>
          <p style={{ fontFamily: F.light, fontSize: 14, color: C.onDarkMuted, lineHeight: 1.6, maxWidth: 700 }}>
            Phase 2 helped us understand AI. Phase 3 identifies where AI can create value in tax. Phase 3 turns those opportunities into working solutions through prompts, Copilot Agents and practical implementation guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GuidanceImplementation({ onBack, onNavigate }: Props) {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = document.querySelector(".overflow-auto");
    const options = { root: container, rootMargin: "-20% 0px -60% 0px", threshold: 0 };

    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, options);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: C.confidentBlack }}>
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#phase3-content" />

      {/* Breadcrumb */}
      <div style={{ background: C.offBlack, padding: "16px 0", borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ ...contentRailStyle, display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: F.regular, fontSize: 13, color: C.onDarkMuted, padding: 0 }}
          >
            ← Back
          </button>
          <span style={{ color: C.borderOnDark }}>|</span>
          <p style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: C.onDarkSubtle, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
            Phase 3 · Guidance for Implementation
          </p>
        </div>
      </div>

      {/* Section nav */}
      <SectionNav activeId={activeSection} />

      <main id="phase3-content" style={{ position: "relative" }}>
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Panel5 />
        <Panel6 />
      </main>
    </div>
  );
}
