import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
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

// ── Section nav config ────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "s-intro",     label: "Workshop Intro" },
  { id: "s-tools",     label: "Prompt vs Agent" },
  { id: "s-building-blocks", label: "Building Blocks" },
  { id: "s-problem",   label: "Problem First" },
  { id: "s-examples",  label: "Examples" },
  { id: "s-activity",  label: "Activity Choice" },
  { id: "s-brainstorm", label: "Brainstorm" },
  { id: "s-outputs",   label: "Outputs" },
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
        padding: "0",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          ...contentRailStyle,
          display: "flex",
          alignItems: "center",
          gap: 4,
          height: 44,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
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
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color,
  marginBottom: 12,
});

const h2Style: CSSProperties = {
  fontFamily: F.bold,
  fontSize: typeScale.h2,
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  marginBottom: 12,
};

const cardHover: CSSProperties = {
  transition: "box-shadow 150ms ease, transform 150ms ease",
};

// ── Panel 1 — Hero + FROM → TO (Slide 1) ─────────────────────────────────────

const FROM_BULLETS = [
  "Understanding AI",
  "Learning Prompt techniques",
  "Exploring M365 Agents",
  "Reviewing sample use cases",
];

const TO_BULLETS = [
  "Applying AI to your tax function",
  "Identifying activities suitable for Prompts",
  "Identifying recurring workflows for Agents",
  "Discovering your own priority opportunities",
];

function Panel1() {
  return (
    <section
      id="s-intro"
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
        <p style={eyebrow(C.yellow)}>Phase 2 · Tax AI Discovery</p>
        <h1
          style={{
            fontFamily: F.bold,
            fontSize: typeScale.h1,
            fontWeight: 700,
            color: C.onDark,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 900,
            marginBottom: 16,
          }}
        >
          You Know What AI Can Do.{" "}
          <span style={{ display: "block" }}>Now, Where Should It Work for You?</span>
        </h1>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, marginBottom: 56, maxWidth: 600 }}>
          From foundational learning to tax-process opportunity discovery.
        </p>

        {/* Workshop Challenge */}
        <div
          style={{
            borderLeft: `4px solid ${C.yellow}`,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "0 4px 4px 0",
            padding: "28px 32px",
            marginBottom: 48,
          }}
        >
          <p style={eyebrow(C.yellow)}>Workshop Challenge</p>
          <p style={{ fontFamily: F.bold, fontSize: 22, fontWeight: 700, color: C.onDark, lineHeight: 1.4, maxWidth: 860 }}>
            Which activities consume time, create friction or depend heavily on repeated
            searching, reviewing, drafting, coordination or follow-up?
          </p>
        </div>

        {/* FROM / TO */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: 3, background: C.frameBlue }} />
            <div style={{ padding: "24px 28px" }}>
              <p style={eyebrow(C.frameBlue)}>From</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {FROM_BULLETS.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, lineHeight: 1.5 }}>
                    <span style={{ color: C.frameBlue, marginTop: 2, flexShrink: 0 }}>·</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: 3, background: C.frameTeal }} />
            <div style={{ padding: "24px 28px" }}>
              <p style={eyebrow(C.frameTeal)}>To</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {TO_BULLETS.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3, ease: "easeOut" }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: F.regular, fontSize: typeScale.body, color: C.onDark, lineHeight: 1.5 }}
                  >
                    <span style={{ color: C.frameTeal, marginTop: 2, flexShrink: 0 }}>·</span>{b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 2 — Prompt vs Agent (Slide 2) ───────────────────────────────────────

const PROMPT_WHEN = [
  "Extract information",
  "Summarise content",
  "Compare documents or positions",
  "Analyse facts or data",
  "Explain or evaluate material",
  "Transform or reformat content",
  "Generate a first draft",
];

const PROMPT_USER = [
  "Initiates the task",
  "Provides context and instructions",
  "Reviews the output",
  "Applies professional judgment",
];

const AGENT_WHEN = [
  "Recurring information requests",
  "Retrieval across approved repositories",
  "Repeated document collection",
  "Multiple stakeholders",
  "Status tracking",
  "Standardised communications",
  "Periodic reporting",
  "Defined workflows and escalation",
];

const AGENT_DOES = [
  "Operates within an instructed purpose",
  "Uses specified knowledge sources",
  "Follows workflows and restrictions",
  "Produces outputs for human review",
];

function BulletList({ items, color, title }: { items: string[]; color: string; title: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <p style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{title}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.5 }}>
            <span style={{ color, flexShrink: 0, marginTop: 2 }}>·</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Panel2() {
  return (
    <section
      id="s-tools"
      style={{
        background: C.offBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.yellow)}>Quick Recall</p>
        <h2 style={{ ...h2Style, color: C.onDark }}>
          Prompt or M365 Agent? Start with the Nature of the Activity.
        </h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, marginBottom: 48, maxWidth: 640 }}>
          One tax process may contain Prompt activities, Agent activities, both—and human-led activities.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
          {/* Prompt */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden", ...cardHover }}>
            <div style={{ height: 3, background: C.frameBlue }} />
            <div style={{ padding: "24px 28px" }}>
              <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.frameBlue, marginBottom: 6 }}>Prompt</p>
              <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, marginBottom: 20, lineHeight: 1.5 }}>Targeted assistance for a defined task</p>
              <BulletList items={PROMPT_WHEN} color={C.frameBlue} title="Typically useful when a user needs to:" />
              <BulletList items={PROMPT_USER} color={C.frameBlue} title="The user:" />
            </div>
          </div>

          {/* Agent */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden", ...cardHover }}>
            <div style={{ height: 3, background: C.framePurple }} />
            <div style={{ padding: "24px 28px" }}>
              <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.framePurple, marginBottom: 6 }}>M365 Agent</p>
              <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, marginBottom: 20, lineHeight: 1.5 }}>A reusable assistant for a defined business scenario</p>
              <BulletList items={AGENT_WHEN} color={C.framePurple} title="Typically useful when work involves:" />
              <BulletList items={AGENT_DOES} color={C.framePurple} title="The Agent:" />
            </div>
          </div>
        </div>

        <div style={{ borderLeft: `4px solid ${C.yellow}`, background: "rgba(255,255,255,0.05)", borderRadius: "0 4px 4px 0", padding: "16px 28px" }}>
          <p style={{ fontFamily: F.bold, fontSize: 16, fontWeight: 700, color: C.onDark, lineHeight: 1.5 }}>
            Prompts assist specific tasks. Agents support repeatable workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Panel 3 — Building Blocks Refresher (Slide 3) ────────────────────────────

const PROMPT_ELEMENTS_P2 = [
  { n: "01", label: "Persona", desc: "Perspective" },
  { n: "02", label: "Context", desc: "Relevant facts" },
  { n: "03", label: "Objective", desc: "What AI should do" },
  { n: "04", label: "Instructions", desc: "Steps and criteria" },
  { n: "05", label: "Sources", desc: "Material to use" },
  { n: "06", label: "Output", desc: "Format and detail" },
  { n: "07", label: "Constraints", desc: "What not to assume or do" },
  { n: "08", label: "Review", desc: "What the user must verify" },
];

const AGENT_ELEMENTS_P2 = [
  { n: "01", label: "Purpose", desc: "Goal to accomplish" },
  { n: "02", label: "General guidance", desc: "Directions, tone, restrictions" },
  { n: "03", label: "Skills", desc: "Support expected" },
  { n: "04", label: "Workflow", desc: "Steps to follow" },
  { n: "05", label: "Knowledge", desc: "Approved information" },
  { n: "06", label: "Errors & limitations", desc: "When to stop or clarify" },
  { n: "07", label: "Examples", desc: "Appropriate interaction" },
  { n: "08", label: "Follow-up & closing", desc: "How to complete the exchange" },
];

function NumberedRow({ n, label, desc, color }: { n: string; label: string; desc: string; color: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "36px 1fr auto",
        gap: 12,
        alignItems: "center",
        padding: "11px 0",
        borderBottom: `1px solid rgba(26,26,36,0.07)`,
      }}
    >
      <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color, letterSpacing: "0.04em" }}>{n}</span>
      <span style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack }}>{label}</span>
      <span style={{ fontFamily: F.light, fontSize: 12, color: C.gray01 }}>{desc}</span>
    </div>
  );
}

function Panel3() {
  return (
    <section
      id="s-building-blocks"
      style={{
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.confidentBlack)}>Memory Refresh</p>
        <h2 style={{ ...h2Style, color: C.confidentBlack }}>Good Outcomes Begin with Clear Instructions</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 48, maxWidth: 560 }}>
          Recall the building blocks—without repeating the full Phase 1 training.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ background: C.white, borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,36,0.07)" }}>
            <div style={{ height: 3, background: C.frameBlue }} />
            <div style={{ padding: "20px 24px" }}>
              <p style={eyebrow(C.frameBlue)}>Effective Prompt — 8 Elements</p>
              {PROMPT_ELEMENTS_P2.map((item) => (
                <NumberedRow key={item.n} {...item} color={C.frameBlue} />
              ))}
            </div>
          </div>
          <div style={{ background: C.white, borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,36,0.07)" }}>
            <div style={{ height: 3, background: C.framePurple }} />
            <div style={{ padding: "20px 24px" }}>
              <p style={eyebrow(C.framePurple)}>Effective M365 Agent Instructions — 8 Elements</p>
              {AGENT_ELEMENTS_P2.map((item) => (
                <NumberedRow key={item.n} {...item} color={C.framePurple} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, background: "rgba(26,26,36,0.06)", borderRadius: 4, padding: "16px 24px", borderLeft: `4px solid ${C.frameTeal}` }}>
          <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack, lineHeight: 1.5 }}>
            Now that we know how to instruct AI, which tax activities are worth redesigning?
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Panel 4 — Problem First (Slide 4) ─────────────────────────────────────────

const PROBLEM_CARDS = [
  { num: "01", color: C.frameBlue, title: "What work is being performed?", bullets: ["Tax process and key activities", "Trigger and required output"] },
  { num: "02", color: C.frameOrange, title: "Where does effort or friction arise?", bullets: ["Searching, reviewing, comparing, drafting", "Follow-ups, tracking, evidence and reporting"] },
  { num: "03", color: C.framePurple, title: "What makes the activity difficult?", bullets: ["Volume, stakeholders and repositories", "Formats, hand-offs, missing information and judgment"] },
  { num: "04", color: C.frameGreen, title: "What should improve?", bullets: ["Effort, speed and consistency", "Visibility, evidence organisation and time for analysis"] },
];

function Panel4() {
  return (
    <section
      id="s-problem"
      style={{
        background: C.white,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.confidentBlack)}>Problem First</p>
        <h2 style={{ ...h2Style, color: C.confidentBlack }}>Do Not Begin with "We Need an Agent"</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 48, maxWidth: 560 }}>
          A technology choice should follow the problem definition—not precede it.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.num}
              style={{ background: C.offWhite, borderRadius: 4, overflow: "hidden", ...cardHover, cursor: "default" }}
            >
              <div style={{ height: 3, background: card.color }} />
              <div style={{ padding: "24px 28px" }}>
                <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: card.color, marginBottom: 10, letterSpacing: "0.04em" }}>{card.num}</p>
                <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.confidentBlack, lineHeight: 1.35, marginBottom: 14 }}>{card.title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {card.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: F.light, fontSize: 14, color: C.gray01, lineHeight: 1.5 }}>
                      <span style={{ color: card.color, marginTop: 2, flexShrink: 0 }}>·</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: `4px solid ${C.yellow}`, background: C.confidentBlack, borderRadius: "0 4px 4px 0", padding: "24px 32px" }}>
          <p style={eyebrow(C.yellow)}>Workshop Prompt</p>
          <p style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: C.onDark, lineHeight: 1.5, maxWidth: 800 }}>
            Which tax processes consume the most effort today—and which individual activities create that effort?
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Panel 5 — EY Guided Examples (Slides 5 + 6) ───────────────────────────────

// ── Full prompt data with Purpose / Approach / Outcome ───────────────────────

const PROMPT_DATA = [
  { id: "concept-note", color: C.frameBlue, cat: "Research & Drafting", num: "01", title: "Concept Note",
    purpose: "Reviewing research from multiple sources and helps draft requisite concept note for larger consumption",
    approach: "Analyses tax research data collated from various platforms to draft a simplified concept note in line with requirements listed and preferred drafting style",
    outcome: "Creates a precise and informative summary reflecting tax issue discussed, conclusions, assumptions, and key guidance provided." },
  { id: "facts-law", color: C.frameBlue, cat: "Research & Drafting", num: "02", title: "Facts-to-Law Mapping",
    purpose: "Review of large agreements with multiple clauses and bulky landmark tax judgements, to identify relevant tax, regulatory and compliance implications.",
    approach: "Evaluate fact patterns against bulky landmark judgements, to identify clauses impacted by the said judgement against relevant laws, treaty provisions and legal requirements",
    outcome: "Produces a structured comparative summary and/or advisory memo, highlighting relevant clauses from case law and agreement and highlights key issues, tax implications, risks and practical recommendations." },
  { id: "concept-simplify", color: C.frameBlue, cat: "Research & Drafting", num: "03", title: "20-80 Concept Simplification",
    purpose: "Accelerates understanding of a new tax or technical topic by focusing on essential 20% knowledge to comprehend 80% of topic breadth",
    approach: "Separates foundational principles from advanced topics and explains their significance in a structured format.",
    outcome: "Delivers a concise learning guide that enables quicker understanding and more informed discussions." },
  { id: "stepwise", color: C.frameBlue, cat: "Research & Drafting", num: "04", title: "Stepwise Concept Plan",
    purpose: "Simplifies complex tax, regulatory or business topics for easier learning and stakeholder communication.",
    approach: "Breaks a topic into logical building blocks supported by examples, analogies and progressive explanations.",
    outcome: "Creates an easy-to-follow roadmap that makes complex concepts more relatable and actionable." },
  { id: "gst-formula", color: C.frameOrange, cat: "Compliance & Validation", num: "05", title: "GST Formula Validation",
    purpose: "Automates validation of GST-related data used in compliance and reporting processes.",
    approach: "Generates Excel formulas to test GSTINs, invoice numbers and HSN/SAC codes against specified validation rules.",
    outcome: "Improves data quality, reduces manual review effort and enhances reporting accuracy." },
  { id: "doc-extraction", color: C.frameOrange, cat: "Compliance & Validation", num: "06", title: "Document Extraction",
    purpose: "Extracts relevant information from tax and financial documents and converts it into structured data.",
    approach: "Applies predefined extraction rules, mappings and validation criteria against uploaded source documents.",
    outcome: "Creates standardized datasets that can be readily used for compliance, reporting and analysis." },
  { id: "agreement-review", color: C.frameOrange, cat: "Compliance & Validation", num: "07", title: "Agreement Review",
    purpose: "Reviews agreements to identify commercial, tax and compliance considerations.",
    approach: "Evaluates contractual provisions, tax implications, reporting obligations and drafting inconsistencies.",
    outcome: "Provides a structured review highlighting risks, observations and recommendations to strengthen tax position." },
  { id: "sop-review", color: C.frameOrange, cat: "Compliance & Validation", num: "08", title: "SOP Review",
    purpose: "Assesses policies, procedures and operating frameworks for potential improvements.",
    approach: "Tests existing frameworks against realistic scenarios, risks and considerations.",
    outcome: "Produces actionable recommendations to improve policy effectiveness." },
  { id: "meeting-minutes", color: C.framePurple, cat: "Communication & Planning", num: "09", title: "Meeting Minutes",
    purpose: "Converts meeting transcripts and discussion notes into structured records and action trackers.",
    approach: "Captures agendas, executive summaries, speaker-wise discussions, decisions and assigned responsibilities.",
    outcome: "Produces professional meeting minutes with clear actions, ownership and next steps." },
  { id: "ppt-mock", color: C.framePurple, cat: "Communication & Planning", num: "10", title: "PPT Mock Run",
    purpose: "Helps presenters draft presentations and prepare for leadership, client and internal meetings.",
    approach: "Drafts and Reviews slide content, develops speaking notes, identifies key messages and anticipates audience questions.",
    outcome: "Improves presentation quality, confidence, storytelling and audience engagement." },
  { id: "transaction-step", color: C.framePurple, cat: "Communication & Planning", num: "11", title: "Transaction Step Plan",
    purpose: "Supports planning and execution of transactions, restructuring projects and regulatory processes.",
    approach: "Identifies key activities, timelines, responsibilities, documentation requirements and relevant legal provisions.",
    outcome: "Generates an implementation tracker and execution roadmap to improve project governance and completion." },
  { id: "tax-upskilling", color: C.framePurple, cat: "Communication & Planning", num: "12", title: "Tax Strategic Upskilling",
    purpose: "Supports capability building and professional development across tax and technology domains.",
    approach: "Creates structured learning plans incorporating practical exercises, resources, milestones and study schedules.",
    outcome: "Delivers a tailored upskilling roadmap to accelerate learning and long-term capability development." },
  { id: "image-summary", color: C.frameGreen, cat: "Data & Analysis", num: "13", title: "Image Summarization",
    purpose: "Converts handwritten notes, scanned content and images into usable business information.",
    approach: "Extracts text, identifies visual elements and summarizes key observations and discussion points.",
    outcome: "Produces structured summaries, meeting notes and key takeaways without manual transcription effort." },
  { id: "translation", color: C.frameGreen, cat: "Data & Analysis", num: "14", title: "Vernacular Translation",
    purpose: "Enables review of tax, legal and regulatory documents issued in regional languages — for example WHT certificates, invoices, credit notes etc.",
    approach: "Extracts and translates the complete document, including tables and supporting content, while preserving meaning and structure.",
    outcome: "Delivers an accurate English version suitable for analysis, compliance and decision-making." },
  { id: "vba", color: C.frameGreen, cat: "Data & Analysis", num: "15", title: "VBA Automation",
    purpose: "Automates repetitive spreadsheet and file-management activities through VBA-based solutions.",
    approach: "Converts business requirements into VBA scripts with supporting implementation instructions.",
    outcome: "Reduces manual effort, improves consistency and enables scalable automation of routine tasks." },
];

const PROMPT_CATS = [
  { key: "Research & Drafting", color: C.frameBlue },
  { key: "Compliance & Validation", color: C.frameOrange },
  { key: "Communication & Planning", color: C.framePurple },
  { key: "Data & Analysis", color: C.frameGreen },
];

const AGENT_DATA = [
  { id: "tax-knowledge", color: C.frameBlue, num: "01", title: "Tax Knowledge Retrieval Agent",
    purpose: "Acts as a centralised knowledge assistant for locating historical tax positions, precedents and supporting materials.",
    actions: "Searches approved repositories containing tax opinions, notices, submissions, laws, policies and knowledge documents.",
    outcome: "Enables faster research, improves consistency in tax positions and reduces time spent searching for information." },
  { id: "transfer-pricing", color: C.frameOrange, num: "02", title: "Transfer Pricing Documentation Agent",
    purpose: "Supports preparation and maintenance of transfer pricing documentation and supporting evidence.",
    actions: "Reviews related-party schedules, TP reports, benchmarking studies, GL records and supporting documentation.",
    outcome: "Identifies transactions, summarizes supporting information, highlights exceptions and improves audit readiness." },
  { id: "advance-tax", color: C.framePurple, num: "03", title: "Advance Tax Reviewer Agent",
    purpose: "Assists tax teams in reviewing advance tax computations and identifying key movements between reporting periods.",
    actions: "Compares current and prior quarter computations, validates changes in assumptions and workings, and analyses variances across tax forecasts and calculations.",
    outcome: "Produces variance analysis narratives, management summary notes and review observations that support faster validation, stakeholder reporting and decision-making." },
  { id: "tax-info-request", color: C.frameGreen, num: "04", title: "Tax Information Request Agent",
    purpose: "Streamlines the collection and management of information required from stakeholders during tax projects.",
    actions: "Drafts information requests, reviews responses, summarizes stakeholder inputs and identifies missing information.",
    outcome: "Reduces follow-up effort and improves the completeness and quality of information received." },
  { id: "assessment-evidence", color: C.frameTeal, num: "05", title: "Assessment Evidence Agent",
    purpose: "Assists tax teams in gathering and organizing supporting evidence for audits, assessments and disputes.",
    actions: "Searches SharePoint, Teams, Outlook and supporting repositories for relevant documentation and correspondence.",
    outcome: "Creates issue-wise evidence packs, highlights missing support and strengthens audit preparedness." },
  { id: "leadership-reporting", color: C.frameBlue, num: "06", title: "Tax Leadership Reporting Agent",
    purpose: "Provides leadership with periodic consolidated visibility over tax activities, developments and risks.",
    actions: "Collects status updates, auditor comments, legislative changes and regional tax developments for analysis.",
    outcome: "Produces executive dashboards, management reports and briefing materials to support decision-making." },
  { id: "tracker", color: C.frameOrange, num: "07", title: "Personalized Tracker Agent",
    purpose: "Acts as a centralised monitoring tool for tax compliance activities, deadlines and action items.",
    actions: "Maintains compliance calendars, trackers, filing records and related correspondence.",
    outcome: "Identifies upcoming, due and overdue obligations, highlights risks and supports timely compliance management." },
  { id: "correspondence", color: C.framePurple, num: "08", title: "Repetitive Tax Correspondence Agent",
    purpose: "Standardises recurring tax communications across stakeholders, management and employees.",
    actions: "Generates communication templates, drafts correspondence, refines messaging and applies approved communication standards.",
    outcome: "Improves consistency, reduces drafting effort and accelerates turnaround of routine communications." },
  { id: "second-brain", color: C.frameGreen, num: "09", title: "Second Brain Agent",
    purpose: "Acts as a personalized tax knowledge companion that helps professionals quickly access information, insights and prior work products accumulated over time.",
    actions: "Searches across emails, meeting notes, presentations, research materials, working papers, tax opinions and enterprise repositories to build contextual understanding.",
    outcome: "Enables users to retrieve historical knowledge, identify relevant precedents, surface action items and obtain context-aware guidance without manually searching through multiple sources." },
];

// ── Shared accordion card (dark and light surfaces) ──────────────────────────

function AccordionCard({
  accentColor, num, title, open, onToggle, dark, children,
}: {
  accentColor: string; num: string; title: string;
  open: boolean; onToggle: () => void; dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      borderRadius: 4, overflow: "hidden",
      border: dark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(26,26,36,0.08)",
    }}>
      <button
        type="button" aria-expanded={open} onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: 14,
          padding: "13px 18px",
          background: dark
            ? (open ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)")
            : (open ? C.white : C.offWhite),
          border: "none", borderLeft: `3px solid ${accentColor}`,
          cursor: "pointer", textAlign: "left", transition: "background 150ms ease",
        }}
      >
        <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: accentColor, minWidth: 22, flexShrink: 0 }}>{num}</span>
        <span style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: dark ? C.onDark : C.confidentBlack, flex: 1, lineHeight: 1.35 }}>{title}</span>
        <ChevronRight
          size={14}
          color={dark ? "rgba(255,255,255,0.4)" : C.gray01}
          style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}
        />
      </button>
      {open && (
        <div style={{
          padding: "18px 20px 20px",
          background: dark ? "rgba(255,255,255,0.05)" : C.white,
          borderTop: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,26,36,0.07)",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function SlotGrid({ slots, color, dark }: { slots: { label: string; text: string }[]; color: string; dark: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${slots.length}, 1fr)`, gap: 20 }}>
      {slots.map((s) => (
        <div key={s.label}>
          <p style={{ fontFamily: F.bold, fontSize: 10, fontWeight: 700, color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{s.label}</p>
          <p style={{ fontFamily: F.light, fontSize: 12, color: dark ? C.onDarkMuted : C.gray01, lineHeight: 1.55, margin: 0 }}>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

function Panel5() {
  const [openPrompt, setOpenPrompt] = useState<string | null>(null);
  const [openAgent, setOpenAgent] = useState<string | null>(null);

  return (
    <section
      id="s-examples"
      style={{
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.yellow)}>Guided Examples</p>
        <h2 style={{ ...h2Style, color: C.onDark }}>EY-Guided Prompt Examples</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, marginBottom: 8, maxWidth: 640 }}>
          Purpose, approach and outcome as summarised in Sheet1 of Sample use cases.xlsx.
        </p>
        <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, marginBottom: 32, maxWidth: 640 }}>
          These examples stimulate discussion; they are not a preselected implementation list.
        </p>

        <div style={{ marginBottom: 56 }}>
          {PROMPT_CATS.map((cat) => {
            const items = PROMPT_DATA.filter((p) => p.cat === cat.key);
            return (
              <div key={cat.key}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24, marginBottom: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: F.bold, fontSize: 10, fontWeight: 700, color: cat.color, letterSpacing: "0.09em", textTransform: "uppercase" }}>{cat.key}</span>
                  <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {items.map((item) => (
                    <AccordionCard
                      key={item.id}
                      accentColor={cat.color}
                      num={item.num}
                      title={item.title}
                      open={openPrompt === item.id}
                      onToggle={() => setOpenPrompt(openPrompt === item.id ? null : item.id)}
                      dark={true}
                    >
                      <SlotGrid
                        color={cat.color}
                        dark={true}
                        slots={[
                          { label: "Purpose", text: item.purpose },
                          { label: "Approach", text: item.approach },
                          { label: "Outcome", text: item.outcome },
                        ]}
                      />
                    </AccordionCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ ...eyebrow(C.framePurple), marginBottom: 8 }}>EY-Guided M365 Agent Examples</p>
        <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, marginBottom: 20 }}>
          Purpose, actions and outcome as summarised in Sheet1 of Sample use cases.xlsx.
          Agents are reusable assistants for clearly defined business scenarios.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 32 }}>
          {AGENT_DATA.map((agent) => (
            <AccordionCard
              key={agent.id}
              accentColor={agent.color}
              num={agent.num}
              title={agent.title}
              open={openAgent === agent.id}
              onToggle={() => setOpenAgent(openAgent === agent.id ? null : agent.id)}
              dark={true}
            >
              <SlotGrid
                color={agent.color}
                dark={true}
                slots={[
                  { label: "Purpose", text: agent.purpose },
                  { label: "Actions", text: agent.actions },
                  { label: "Outcome", text: agent.outcome },
                ]}
              />
            </AccordionCard>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, padding: "16px 24px", borderLeft: `4px solid ${C.framePurple}` }}>
          <p style={{ fontFamily: F.regular, fontSize: 14, color: C.onDarkMuted, lineHeight: 1.6 }}>
            <strong style={{ color: C.onDark }}>Discussion prompt:</strong> Which recurring tax workflow repeatedly requires people to search, collect, coordinate, track or report?
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Panel 6 — Activity-Level Choice (Slide 7) ─────────────────────────────────

const DECISION_CARDS = [
  {
    color: C.frameBlue,
    title: "Consider a Prompt",
    items: ["User-initiated task", "Defined input", "Interpretation, review or drafting", "Output varies with facts", "Professional closely involved"],
  },
  {
    color: C.framePurple,
    title: "Consider an Agent",
    items: ["Activity repeats", "Multiple people or repositories", "Collection, retrieval or tracking", "Workflow can be instructed", "Outputs and escalation can be defined"],
  },
  {
    color: C.frameTeal,
    title: "Consider both",
    items: ["Agent coordinates or retrieves", "Prompt interprets, analyses or drafts"],
  },
];

const ACTIVITY_ROWS = [
  { id: "row-1", activity: "Request projected financials from business units", pain: "Multiple follow-ups", solution: "M365 Agent", color: C.framePurple },
  { id: "row-2", activity: "Collect qualitative tax inputs", pain: "Inputs buried in email and Teams", solution: "M365 Agent", color: C.framePurple },
  { id: "row-3", activity: "Summarise business changes affecting forecast", pain: "Manual review of communications and forecasts", solution: "Prompt", color: C.frameBlue },
  { id: "row-4", activity: "Compare current and prior-quarter assumptions", pain: "Time spent reviewing historical workings", solution: "Prompt", color: C.frameBlue },
  { id: "row-5", activity: "Prepare variance narrative", pain: "Manual drafting", solution: "Prompt", color: C.frameBlue },
  { id: "row-6", activity: "Consolidate business-unit comments", pain: "Inputs received through different channels", solution: "M365 Agent", color: C.framePurple },
  { id: "row-7", activity: "Draft communication to Treasury or business", pain: "Recurring communication within a broader workflow", solution: "Prompt and/or Agent — subject to workflow design", color: C.frameTeal },
  { id: "row-8", activity: "Archive challans, approvals and supporting files", pain: "Manual document organisation", solution: "M365 Agent", color: C.framePurple },
];

function Panel6() {
  const [openActivity, setOpenActivity] = useState<string | null>(null);

  return (
    <section
      id="s-activity"
      style={{
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.confidentBlack)}>Activity-Level Choice</p>
        <h2 style={{ ...h2Style, color: C.confidentBlack }}>One Process. Different Activities. Different Solutions.</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 48, maxWidth: 580 }}>
          Do not classify an entire tax process as "Prompt" or "Agent." Assess each activity separately.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
          {DECISION_CARDS.map((card) => (
            <div
              key={card.title}
              style={{ background: C.white, borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,36,0.07)", transition: "box-shadow 150ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,26,36,0.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,26,36,0.07)")}
            >
              <div style={{ height: 3, background: card.color }} />
              <div style={{ padding: "22px 24px" }}>
                <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: card.color, marginBottom: 16 }}>{card.title}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8, fontFamily: F.light, fontSize: 13, color: C.gray01, lineHeight: 1.45, alignItems: "flex-start" }}>
                      <span style={{ color: card.color, flexShrink: 0 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p style={{ ...eyebrow(C.confidentBlack), marginBottom: 16 }}>Illustrative Advance-Tax Mapping — classify each activity separately</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {ACTIVITY_ROWS.map((row, i) => (
            <AccordionCard
              key={row.id}
              accentColor={row.color}
              num={String(i + 1).padStart(2, "0")}
              title={row.activity}
              open={openActivity === row.id}
              onToggle={() => setOpenActivity(openActivity === row.id ? null : row.id)}
              dark={false}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <p style={{ fontFamily: F.bold, fontSize: 10, fontWeight: 700, color: C.gray01, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Current Pain Point</p>
                  <p style={{ fontFamily: F.light, fontSize: 13, color: C.confidentBlack, lineHeight: 1.55, margin: 0 }}>{row.pain}</p>
                </div>
                <div>
                  <p style={{ fontFamily: F.bold, fontSize: 10, fontWeight: 700, color: C.gray01, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Possible Response</p>
                  <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: row.color, margin: 0 }}>{row.solution}</p>
                </div>
              </div>
            </AccordionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Panel 7 — Brainstorm A–F (Slide 8) ───────────────────────────────────────

const FRAMEWORK_SECTIONS = [
  { letter: "A", color: C.frameBlue, title: "Process", items: ["Process selected", "Business objective", "Trigger and final output", "Frequency"] },
  { letter: "B", color: C.frameOrange, title: "Current Activities", items: ["Key steps and owners", "Documents and data", "Systems and repositories"] },
  { letter: "C", color: C.framePurple, title: "Friction", items: ["Time and follow-ups", "Repeated searching", "Errors, inconsistencies or delays", "Professional judgment points"] },
  { letter: "D", color: C.frameGreen, title: "Opportunity", items: ["Prompt", "M365 Agent", "Prompt + Agent", "Process improvement", "Human-led activity"] },
  { letter: "E", color: C.frameTeal, title: "Control Questions", items: ["Permitted information and sources", "Qualified reviewer", "Stop or escalation points", "What remains human-led"] },
  { letter: "F", color: C.yellow, title: "Initial Priority", items: ["Relevance and friction", "Repeatability", "Inputs and sources", "Human review", "Practicality"] },
];

function Panel7() {
  return (
    <section
      id="s-brainstorm"
      style={{
        background: C.confidentBlack,
        paddingTop: spacing.sectionPaddingY,
        paddingBottom: 80,
        paddingLeft: contentInlinePad,
        paddingRight: contentInlinePad,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.yellow)}>Live Brainstorm</p>
        <h2 style={{ ...h2Style, color: C.onDark }}>Your Tax Process. Your Pain Points. Your Opportunities.</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.onDarkMuted, marginBottom: 8, maxWidth: 640 }}>
          EY's guided samples open the conversation. The client's validated process and pain points determine the opportunity.
        </p>
        <p style={{ fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, marginBottom: 40, maxWidth: 640 }}>
          Select one tax process. Map the activities. Name the friction. Then choose the response—Prompt, Agent, both, process change or human-led.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {FRAMEWORK_SECTIONS.map((sec) => (
            <div
              key={sec.letter}
              style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, overflow: "hidden", transition: "background 150ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
            >
              <div style={{ height: 3, background: sec.color }} />
              <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: sec.color }}>{sec.letter}</span>
                  <span style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.onDark }}>{sec.title}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {sec.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8, fontFamily: F.light, fontSize: 13, color: C.onDarkMuted, lineHeight: 1.45, alignItems: "flex-start" }}>
                      <span style={{ color: sec.color, flexShrink: 0 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Panel 8 — Outputs (Slide 9) ───────────────────────────────────────────────

const OUTPUTS = [
  { color: C.frameBlue, label: "Completed A-to-F brainstorm for at least one tax process" },
  { color: C.frameOrange, label: "Categorised each activity as Prompt, Agent or human-led" },
  { color: C.framePurple, label: "Identified one priority opportunity to take into Phase 3" },
  { color: C.frameGreen, label: "Named control requirements and what remains human-led" },
];

function Panel8() {
  return (
    <section
      id="s-outputs"
      style={{
        background: C.offWhite,
        padding: `${spacing.sectionPaddingY} ${contentInlinePad}`,
      }}
    >
      <div style={{ ...contentRailStyle }}>
        <p style={eyebrow(C.confidentBlack)}>Phase 2 Outputs</p>
        <h2 style={{ ...h2Style, color: C.confidentBlack }}>What You Leave With</h2>
        <p style={{ fontFamily: F.light, fontSize: typeScale.body, color: C.gray01, marginBottom: 48, maxWidth: 560 }}>
          Phase 2 converts the Phase 1 foundation into a validated, prioritised opportunity ready for implementation.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
          {OUTPUTS.map((out) => (
            <div key={out.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: C.white, borderRadius: 4, padding: "20px 24px", boxShadow: "0 2px 8px rgba(26,26,36,0.07)" }}>
              <div style={{ width: 4, height: "100%", background: out.color, borderRadius: 2, flexShrink: 0, minHeight: 32 }} />
              <p style={{ fontFamily: F.regular, fontSize: 15, color: C.confidentBlack, lineHeight: 1.5, margin: 0 }}>{out.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: C.confidentBlack, borderRadius: 4, padding: "32px 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
          <div>
            <p style={eyebrow(C.yellow)}>What's Next</p>
            <p style={{ fontFamily: F.bold, fontSize: 20, fontWeight: 700, color: C.onDark, lineHeight: 1.4, marginBottom: 8 }}>
              Phase 3 — Guidance for Implementation
            </p>
            <p style={{ fontFamily: F.light, fontSize: 14, color: C.onDarkMuted, lineHeight: 1.6, maxWidth: 500 }}>
              Phase 2 helped us understand AI. Phase 3 identifies where AI can create value in tax. Phase 3 turns those opportunities into working solutions through prompts, Copilot Agents and practical implementation guidance.
            </p>
          </div>
          <div style={{ background: C.yellow, borderRadius: 4, padding: "12px 28px", cursor: "default" }}>
            <p style={{ fontFamily: F.bold, fontSize: 14, fontWeight: 700, color: C.confidentBlack, whiteSpace: "nowrap" }}>Phase 3 →</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BrainstormingUseCases({ onBack, onNavigate }: Props) {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = document.querySelector(".overflow-auto");
    const options = { root: container, rootMargin: "-20% 0px -60% 0px", threshold: 0 };

    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
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
      <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#sub2-content" />

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
            Phase 2 · Tax AI Discovery & Opportunity Design
          </p>
        </div>
      </div>

      {/* Section nav */}
      <SectionNav activeId={activeSection} />

      <main id="sub2-content" style={{ position: "relative" }}>
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Panel5 />
        <Panel6 />
        <Panel7 />
        <Panel8 />
      </main>
    </div>
  );
}
