import { useState } from "react";
import { ModuleHeader, SUBNAV_SCROLL_OFFSET } from "../design-kit/LearningNav";
import { SiteHeader } from "../design-kit/SiteHeader";
import { EYWhatsNext, EYWhatsNextHighlight } from "../design-kit/EYWhatsNext";
import { contentInlinePad, contentRailStyle, fonts as F, spacing } from "../design-kit/tokens";

// ── EY Design System tokens ───────────────────────────────────────────────────
const C = {
  yellow:         "#FFE600",
  dark:           "#1A1A24", // confident-black
  dark2:          "#2E2E38", // off-black
  gray01:         "#747480",
  gray02:         "#C4C4CD",
  offWhite:       "#F6F6FA",
  white:          "#FFFFFF",
  // EY spectrum (frame) accent colours — used as section accents
  frameBlue:      "#4696FF",
  frameGreen:     "#00C864",
  frameOrange:    "#FF7D1E",
  framePurple:    "#B400FF",
  // Microsoft app colours (kept for realistic app-window chrome only)
  wordBlue:       "#4696FF",
  excelGreen:     "#00C864",
  pptOrange:      "#FF3C00",
  outlookBlue:    "#4696FF",
  teamsViolet:    "#B400FF",
};

// ── EY Logo mark — paths from /public/ey-logo.svg ────────────────────────────
function EYLogoMark({ height = 32, letterColor = "#FFFFFF" }: { height?: number; letterColor?: string }) {
  return (
    <svg viewBox="0 -18 217.599 217.599" width={height * (217.599 / 181.599)} height={height} aria-label="EY logo">
      <path fill={C.yellow} d="M0 79.4L217.599 0v41z" />
      <path fill={letterColor} d="M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z" />
    </svg>
  );
}

// ── Copilot icon (simplified sparkle — replaces expired Figma asset) ──────────
function CopilotIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="url(#cg)" />
      <defs><radialGradient id="cg" cx="30%" cy="30%"><stop offset="0%" stopColor="#4696FF"/><stop offset="100%" stopColor="#B400FF"/></radialGradient></defs>
      <path d="M16 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" fill="#FFFFFF" opacity=".9"/>
    </svg>
  );
}

// ── Tab config (exact labels from Figma 3317:15589) ──────────────────────────
const TABS = [
  { id: "word",    label: "Word Prompts",     color: C.wordBlue,   appColor: C.wordBlue,   letter: "W" },
  { id: "excel",   label: "Excel Formulas",   color: C.excelGreen, appColor: C.excelGreen, letter: "X" },
  { id: "ppt",     label: "PowerPoint Decks", color: C.pptOrange,  appColor: C.pptOrange,  letter: "P" },
  { id: "outlook", label: "Outlook Threads",  color: C.outlookBlue,appColor: C.outlookBlue,letter: "O" },
  { id: "m365",    label: "M365 Chat",        color: C.teamsViolet,appColor: C.teamsViolet,letter: "T" },
] as const;
type TabId = (typeof TABS)[number]["id"];

// ── Exact content from Figma (3317:15589) ────────────────────────────────────
const SECTION_DATA: Record<TabId, {
  eyebrow: string; eyebrowColor: string;
  h2: string; subtitle: string;
  features: { title: string; body: string }[];
  prompt: string;
  suggestions: string[];
  screenshotSide: "left" | "right";
  altBg: boolean;
}> = {
  word: {
    eyebrow: "DOCUMENT INTELLIGENCE",
    eyebrowColor: C.wordBlue,
    h2: "Copilot in Word",
    subtitle: "Draft documents, summarize content, and rewrite text with AI-powered assistance. Build professional issue memos and restructure client communication instantly.",
    features: [
      { title: "Draft Position Notes",   body: "Generate comprehensive first-cut tax research memos, issue analyses, and legal summaries for client reviews." },
      { title: "Refine Legal Language",  body: "Audit and adjust draft submissions, ensuring technical precision and alignment with jurisdictional requirements." },
      { title: "Summarize Case Laws",    body: "Quickly synthesize extensive tax court rulings, tribunal orders, and state circulars into essential facts and holdings." },
      { title: "Track Review Points",    body: "Convert comments and inputs into action points, open items and next-step trackers." },
    ],
    prompt: '"Draft a position memo on international tax safe harbor implications for tech transfers."',
    suggestions: ["Summarize Rulings", "Rewrite & Restructure"],
    screenshotSide: "left",
    altBg: true,
  },
  excel: {
    eyebrow: "ANALYTICAL ROUTINES",
    eyebrowColor: C.excelGreen,
    h2: "Copilot in Excel",
    subtitle: "Analyze data, create formulas, generate charts, and uncover insights from your spreadsheets. Build clean logical checks and eliminate calculation bugs.",
    features: [
      { title: "Analyse Tax Data",       body: "Summarise large datasets and identify key trends, gaps, mismatches and exceptions." },
      { title: "Spot Exceptions",        body: "Detect anomalies such as missing details, rate mismatches or duplicates." },
      { title: "Build Reconciliations",  body: "Create formulas and logic checks to compare books, returns and working papers." },
      { title: "Visualise Compliance",   body: "Create dashboards to show status, exposures, ageing and risk movement." },
    ],
    prompt: '"Highlight and partition any invoice entries where currency rates deviate by more than 2%."',
    suggestions: ["Flag Anomalies", "Build Formula"],
    screenshotSide: "right",
    altBg: false,
  },
  ppt: {
    eyebrow: "COLLABORATIVE & CREATIVE DELIVERY",
    eyebrowColor: C.pptOrange,
    h2: "Copilot in PowerPoint & Chat",
    subtitle: "Translate raw data matrices into compelling slides, executive summaries, and cross-application project definitions. Use Interactive Chat to coordinate answers.",
    features: [
      { title: "Create Client Decks",        body: "Convert tax analysis into structured, visually clean, client-ready presentations." },
      { title: "Prepare Leadership Updates",  body: "Generate concise leadership slides on exposures, updates and decisions required." },
      { title: "Tell the Tax Story",          body: "Organise complex positions into context, issue, risk, recommendation and next steps." },
      { title: "Summarise Case Strategy",     body: "Build crisp hearing briefs, timelines and argument maps." },
    ],
    prompt: '"Create a 5-slide visual presentation deck outlining the safe harbor risks for Q3."',
    suggestions: ["Summarize Rulings", "Rewrite & Restructure"],
    screenshotSide: "right",
    altBg: true,
  },
  outlook: {
    eyebrow: "COMMUNICATIONS & AGENDAS",
    eyebrowColor: C.outlookBlue,
    h2: "Copilot in Outlook",
    subtitle: "Summarize email threads, draft replies, and manage your inbox efficiently. Convert messy, sprawling client communications into actionable priorities in seconds.",
    features: [
      { title: "Draft Client Emails",    body: "Prepare clear professional emails for data requests, updates and follow-ups." },
      { title: "Manage Follow-ups",      body: "Convert email conversations into action-oriented follow-ups." },
      { title: "Summarise Threads",      body: "Extract decisions, pending inputs, responsibilities and deadlines from long chains." },
      { title: "Polish Tone Instantly",  body: "Rewrite responses to sound concise, client-sensitive and executive-ready." },
    ],
    prompt: '"Summarise this 12-email thread, listing all key approvals and unresolved items for the compliance team."',
    suggestions: ["Summarize Thread", "Draft Reply"],
    screenshotSide: "left",
    altBg: false,
  },
  m365: {
    eyebrow: "COLATE INFORMATION ACROSS M365",
    eyebrowColor: C.teamsViolet,
    h2: "Copilot in M365 Chat",
    subtitle: "Use Copilot in M365 Chat to ask questions, get summaries, and generate content across your Microsoft 365 data. Chat brings together information from documents, emails, meetings, and contacts to give you AI-powered answers grounded in your work data.",
    features: [
      { title: "Search Across Work",     body: "Find tax-related discussions, documents, emails and files across Microsoft 365." },
      { title: "Connect Tax Context",    body: "Connect compliance data, research notes, email trails and presentation inputs." },
      { title: "Prepare Matter Briefs",  body: "Generate briefing notes before client calls or internal reviews." },
      { title: "Accelerate First Drafts",body: "Create starting drafts for emails, memos, decks, trackers and meeting prep." },
    ],
    prompt: '"Find all tax-related documents James shared last week and summarise the key updates."',
    suggestions: ["Search Docs", "Summarise"],
    screenshotSide: "right",
    altBg: true,
  },
};

// ── Shared feature card ───────────────────────────────────────────────────────
function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ background: C.white, borderRadius: 12, padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", borderBottom: "1px solid #C4C4CD" }}>
      <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.dark2, marginBottom: 8, lineHeight: 1.3 }}>{title}</p>
      <p style={{ fontFamily: F.regular, fontSize: 14, color: C.gray01, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

// ── Copilot sidebar (shared across app windows) ───────────────────────────────
function AppCopilotSidebar({ prompt, suggestions }: { prompt: string; suggestions: string[] }) {
  return (
    <div style={{ width: 220, background: C.white, borderLeft: "1px solid #C4C4CD", padding: 16, flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <CopilotIcon size={22} />
        <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 14, color: C.dark2 }}>Copilot</p>
      </div>
      <p style={{ fontFamily: F.regular, fontSize: 11, color: C.gray01, marginBottom: 6, fontWeight: 600, letterSpacing: "0.04em" }}>CURRENT PROMPT</p>
      <p style={{ fontFamily: F.regular, fontSize: 12, background: C.offWhite, padding: "10px 12px", borderRadius: 8, fontStyle: "italic", color: C.dark2, lineHeight: 1.5, marginBottom: 16 }}>{prompt}</p>
      <p style={{ fontFamily: F.regular, fontSize: 11, color: C.gray01, marginBottom: 8, fontWeight: 600, letterSpacing: "0.04em" }}>SUGGESTIONS</p>
      {suggestions.map(s => (
        <div key={s} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 16, border: "1px solid #C4C4CD", fontSize: 11, color: C.dark2, marginRight: 4, marginBottom: 4, background: C.white, cursor: "default", fontFamily: F.regular }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.5" stroke={C.frameGreen ?? "#00C864"} /><path d="M3.5 6l1.7 1.7L8.5 4.5" stroke={C.frameGreen ?? "#00C864"} strokeWidth="1.2" strokeLinecap="round"/></svg>
          {s}
        </div>
      ))}
    </div>
  );
}

// ── Word window mock ──────────────────────────────────────────────────────────
function WordWindow({ prompt, suggestions }: { prompt: string; suggestions: string[] }) {
  return (
    <div style={{ flex: 1, background: "#F6F6FA", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ background: C.wordBlue, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="19" viewBox="0 0 18 19"><rect width="18" height="19" rx="2" fill="#4696FF"/><text x="4" y="13" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>W</text></svg>
        <span style={{ color: "#FFFFFF", fontSize: 13, fontFamily: F.regular, fontWeight: 600 }}>Untitled Document</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
          {["File","Home","Insert"].map(m=><span key={m} style={{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily: F.regular}}>{m}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", minHeight: 320 }}>
        <div style={{ flex: 1, padding: "24px 24px", fontFamily: F.regular, overflow: "hidden" }}>
          <p style={{ fontWeight: 700, fontSize: 16, color: "#1A1A24", marginBottom: 12 }}>International Tax Transfer Pricing Memo</p>
          <p style={{ fontSize: 13, color: "#2E2E38", lineHeight: "1.65", marginBottom: 12 }}>
            Executive Summary: This document outlines the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following sections detail the methodology for calculating arm's length pricing and the implications of recent tribunal rulings on multinational entities.
          </p>
          <p style={{ fontWeight: 600, fontSize: 13, color: "#1A1A24", marginBottom: 6 }}>• Methodology</p>
          <p style={{ fontSize: 13, color: "#2E2E38", lineHeight: "1.65" }}>
            We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines while providing a defensible position for audit purposes.
          </p>
        </div>
        <AppCopilotSidebar prompt={prompt} suggestions={suggestions} />
      </div>
    </div>
  );
}

// ── Excel window mock (with spreadsheet + Copilot chat overlay) ───────────────
const EXCEL_ROWS = [
  { n: 2, id: "INV-20240101", exp: "1.1250", act: "1.1260", flag: "OK",   ent: "DE Entity A", flagged: false, active: false },
  { n: 3, id: "INV-20240102", exp: "1.1250", act: "1.1520", flag: "FLAG", ent: "FR Entity B", flagged: true,  active: false },
  { n: 4, id: "INV-20240103", exp: "1.1250", act: "1.1480", flag: "FLAG", ent: "NL Entity C", flagged: false, active: true  },
  { n: 5, id: "INV-20240104", exp: "1.1250", act: "1.1255", flag: "OK",   ent: "UK Entity D", flagged: false, active: false },
  { n: 6, id: "INV-20240105", exp: "1.1250", act: "1.1610", flag: "FLAG", ent: "ES Entity E", flagged: true,  active: false },
  { n: 7, id: "INV-20240106", exp: "1.1250", act: "1.1258", flag: "OK",   ent: "IT Entity F", flagged: false, active: false },
  { n: 8, id: "INV-20240107", exp: "1.1250", act: "1.1263", flag: "OK",   ent: "PL Entity G", flagged: false, active: false, faded: true },
];

function ExcelWindow({ prompt, suggestions }: { prompt: string; suggestions: string[] }) {
  return (
    <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
      {/* Title bar */}
      <div style={{ background: C.excelGreen, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="19" viewBox="0 0 18 19"><rect width="18" height="19" rx="2" fill="#00C864"/><text x="4" y="13" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>X</text></svg>
        <span style={{ color: "#FFFFFF", fontSize: 12, fontFamily: F.regular, fontWeight: 600 }}>TaxAnalysis_Q4_2024.xlsx - Excel</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
          {[C.excelGreen,"#00C864","#00C864"].map((c,i)=><div key={i} style={{ width:10,height:10,borderRadius:"50%",background:c,border:"1px solid rgba(255,255,255,0.3)" }}/>)}
        </div>
      </div>
      {/* Ribbon */}
      <div style={{ background: "#F6F6FA", padding: "4px 14px", display: "flex", gap: 16, borderBottom: "1px solid #C4C4CD" }}>
        {["File","Home","Insert","Formulas","Data","Review","View","Copilot"].map(m=><span key={m} style={{ fontSize: 11, color: "#2E2E38", fontFamily: F.regular }}>{m}</span>)}
      </div>
      {/* Formula bar */}
      <div style={{ background: "#FFFFFF", padding: "5px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #C4C4CD" }}>
        <span style={{ background: "#F6F6FA", padding: "3px 8px", borderRadius: 4, fontSize: 10, fontFamily: "monospace", fontWeight: 600 }}>D4</span>
        <span style={{ width: 1, height: 16, background: "#C4C4CD" }} />
        <span style={{ fontFamily: "monospace", fontSize: 10, color: C.excelGreen }}>=IF(ABS(C4-B4)/B4&gt;0.02,"FLAG","OK")</span>
      </div>
      {/* Spreadsheet */}
      <div style={{ position: "relative", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10, fontFamily: F.regular }}>
          <thead>
            <tr>
              <th style={{ background: "#F6F6FA", width: 32, padding: "5px 6px", border: "1px solid #C4C4CD", color: "#747480" }}></th>
              <th style={{ background: "#F6F6FA", padding: "5px 6px", border: "1px solid #C4C4CD", textAlign: "left", color: "#2E2E38", fontWeight: 600 }}>Invoice ID</th>
              <th style={{ background: "#F6F6FA", padding: "5px 6px", border: "1px solid #C4C4CD", textAlign: "left", color: "#2E2E38", fontWeight: 600 }}>Expected Rate</th>
              <th style={{ background: "#F6F6FA", padding: "5px 6px", border: "1px solid #C4C4CD", textAlign: "left", color: "#2E2E38", fontWeight: 600 }}>Actual Rate</th>
              <th style={{ background: "#F6F6FA", padding: "5px 6px", border: "1px solid #C4C4CD", textAlign: "left", color: "#2E2E38", fontWeight: 600 }}>Variance Flag</th>
              <th style={{ background: "#F6F6FA", padding: "5px 6px", border: "1px solid #C4C4CD", textAlign: "left", color: "#2E2E38", fontWeight: 600 }}>Entity</th>
            </tr>
          </thead>
          <tbody>
            {EXCEL_ROWS.map(r => (
              <tr key={r.n} style={{ background: r.active ? "rgba(16,124,65,0.06)" : r.flagged ? "rgba(192,57,43,0.04)" : "#FFFFFF", opacity: (r as any).faded ? 0.45 : 1 }}>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD", color: r.active ? C.excelGreen : "#747480", textAlign: "center", fontWeight: r.active ? 700 : 400 }}>{r.n}</td>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD", color: r.active ? C.excelGreen : r.flagged ? "#FF4136" : "#2E2E38" }}>{r.id}</td>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD", color: "#2E2E38" }}>{r.exp}</td>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD", color: r.flagged ? "#FF4136" : r.active ? C.excelGreen : "#2E2E38", fontWeight: r.flagged || r.active ? 600 : 400 }}>{r.act}</td>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD" }}>
                  <span style={{ background: r.flag === "FLAG" ? (r.active ? C.excelGreen : "rgba(192,57,43,0.12)") : "transparent", color: r.flag === "FLAG" ? (r.active ? "#FFFFFF" : "#FF4136") : C.excelGreen, padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>{r.flag}</span>
                </td>
                <td style={{ padding: "5px 6px", border: "1px solid #C4C4CD", color: r.active ? C.excelGreen : "#2E2E38" }}>{r.ent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Copilot chat overlay */}
        <div style={{ background: "#FFFFFF", borderTop: "1px solid #C4C4CD", padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <CopilotIcon size={16} />
            <span style={{ fontFamily: F.regular, fontSize: 11, fontWeight: 700, background: C.excelGreen, color: "#FFFFFF", padding: "2px 8px", borderRadius: 10 }}>Copilot</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 10, fontFamily: F.regular, padding: "8px 10px", borderRadius: 8, background: "#F6F6FA", color: "#2E2E38", lineHeight: 1.5 }}>I've analysed your transaction data. I found 2 invoices where currency rate deviation exceeds your 2% threshold.</div>
            <div style={{ fontSize: 10, fontFamily: F.regular, padding: "8px 10px", borderRadius: 8, background: C.excelGreen, color: "#FFFFFF", alignSelf: "flex-end", maxWidth: "85%", lineHeight: 1.5 }}>Highlight and partition any invoice entries where currency rates deviate by more than 2%.</div>
            <div style={{ fontSize: 10, fontFamily: F.regular, padding: "8px 10px", borderRadius: 8, background: "#F6F6FA", color: "#2E2E38", lineHeight: 1.5 }}>
              Done! Rows 3 and 6 are flagged. Column D formula applied:
              <div style={{ fontFamily: "monospace", fontSize: 9, color: C.excelGreen, background: "#F6F6FA", padding: "4px 8px", borderRadius: 4, marginTop: 4 }}>=IF(ABS(C-B)/B&gt;0.02,"FLAG","OK")</div>
            </div>
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", background: C.offWhite, borderRadius: 8, padding: "6px 10px" }}>
            <span style={{ flex: 1, fontFamily: F.regular, fontSize: 11, color: C.gray01 }}>Ask Copilot something...</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.gray01} strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Generic document window (PPT, Outlook) ────────────────────────────────────
function GenericWindow({ appColor, appLetter, title, bodyContent, prompt, suggestions }: {
  appColor: string; appLetter: string; title: string;
  bodyContent: React.ReactNode; prompt: string; suggestions: string[];
}) {
  return (
    <div style={{ flex: 1, background: "#F6F6FA", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ background: appColor, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="19" viewBox="0 0 18 19"><rect width="18" height="19" rx="2" fill={appColor}/><text x="4" y="13" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>{appLetter}</text></svg>
        <span style={{ color: "#FFFFFF", fontSize: 13, fontFamily: F.regular, fontWeight: 600 }}>{title}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16 }}>
          {["File","Home","Insert"].map(m=><span key={m} style={{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily: F.regular}}>{m}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", minHeight: 300 }}>
        <div style={{ flex: 1, padding: 24, fontFamily: F.regular, overflow: "hidden" }}>
          {bodyContent}
        </div>
        <AppCopilotSidebar prompt={prompt} suggestions={suggestions} />
      </div>
    </div>
  );
}

// ── M365 Chat window ──────────────────────────────────────────────────────────
function M365ChatWindow() {
  return (
    <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
      <div style={{ background: C.teamsViolet, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="18" height="19" viewBox="0 0 18 19"><rect width="18" height="19" rx="2" fill="#B400FF"/><text x="4" y="13" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>T</text></svg>
        <span style={{ color: "#FFFFFF", fontSize: 13, fontFamily: F.regular, fontWeight: 600 }}>M365 Chat</span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 16, borderBottom: "1px solid #C4C4CD", marginBottom: 16 }}>
          <CopilotIcon size={28} />
          <div>
            <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 15, color: C.dark2 }}>Copilot</p>
            <p style={{ fontFamily: F.regular, fontSize: 12, color: C.excelGreen }}>Online</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: F.regular, fontWeight: 700, fontSize: 12, color: C.dark }}>U</div>
            <div style={{ background: "#F6F6FA", padding: "12px 14px", borderRadius: 12, fontSize: 13, color: "#2E2E38", fontFamily: F.regular, maxWidth: "85%", lineHeight: 1.6 }}>
              Find all tax-related documents James shared last week and summarise the key updates across compliance and advisory.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <div style={{ background: "#F6F6FA", padding: "12px 14px", borderRadius: 12, fontSize: 13, color: "#2E2E38", fontFamily: F.regular, maxWidth: "85%", lineHeight: 1.6 }}>
              I found 3 documents shared by James last week. Here is a summary of the key tax updates:
              <br/>• <strong>Compliance:</strong> New safe harbor provisions for cross-border tech transfers.
              <br/>• <strong>Advisory:</strong> Tribunal rulings on arm's length pricing methodologies.
            </div>
            <CopilotIcon size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── App icon ──────────────────────────────────────────────────────────────────
function AppIcon({ color, letter }: { color: string; letter: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
      <rect width="20" height="20" rx="3" fill={color} />
      <text x="4" y="14" fill="white" fontSize="11" fontWeight="bold" fontFamily={F.regular}>{letter}</text>
    </svg>
  );
}

// ── Full tab section ──────────────────────────────────────────────────────────
function TabSection({ tabId }: { tabId: TabId }) {
  const d = SECTION_DATA[tabId];
  const tabMeta = TABS.find(t => t.id === tabId)!;
  const bg = d.altBg ? C.offWhite : C.white;

  const screenshotEl = tabId === "word" ? (
    <WordWindow prompt={d.prompt} suggestions={d.suggestions} />
  ) : tabId === "excel" ? (
    <ExcelWindow prompt={d.prompt} suggestions={d.suggestions} />
  ) : tabId === "ppt" ? (
    <GenericWindow
      appColor={C.pptOrange} appLetter="P" title="Safe Harbor Presentation"
      prompt={d.prompt} suggestions={d.suggestions}
      bodyContent={
        <>
          <p style={{ fontWeight: 700, fontSize: 16, color: "#1A1A24", marginBottom: 12 }}>Safe Harbor Risks — Q3 Presentation</p>
          <p style={{ fontSize: 13, color: "#2E2E38", lineHeight: "1.65", marginBottom: 12 }}>
            Executive Summary: This deck summarizes the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following slides detail the methodology for calculating arm's length pricing.
          </p>
          <p style={{ fontWeight: 600, fontSize: 13, color: "#1A1A24", marginBottom: 6 }}>• Slide 1: Executive Summary</p>
          <p style={{ fontSize: 13, color: "#2E2E38", lineHeight: "1.65" }}>
            We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines.
          </p>
        </>
      }
    />
  ) : tabId === "outlook" ? (
    <GenericWindow
      appColor={C.outlookBlue} appLetter="O" title="Inbox — Compliance Team"
      prompt={d.prompt} suggestions={d.suggestions}
      bodyContent={
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 12, background: "#F6F6FA", borderRadius: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.outlookBlue, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontWeight: 700, fontSize: 15, flexShrink: 0, fontFamily: F.regular }}>A</div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, color: "#1A1A24", marginBottom: 4, fontFamily: F.regular }}>Alex Chen</p>
            <p style={{ fontSize: 13, color: "#2E2E38", fontFamily: F.regular }}>Re: Compliance Review for Q3 Tax Filings</p>
            <p style={{ fontSize: 11, color: C.gray01, fontFamily: F.regular, marginTop: 2 }}>10:42 AM</p>
          </div>
        </div>
      }
    />
  ) : (
    <M365ChatWindow />
  );

  const cardsEl = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
      {d.features.map(f => <FeatureCard key={f.title} title={f.title} body={f.body} />)}
    </div>
  );

  return (
    <div style={{ background: bg, padding: `48px 0 64px` }}>
      <div style={{ ...contentRailStyle }}>
      {/* Eyebrow with app icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <AppIcon color={tabMeta.appColor} letter={tabMeta.letter} />
        <span style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: d.eyebrowColor }}>{d.eyebrow}</span>
      </div>
      <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 28, color: C.dark2, marginBottom: 12, lineHeight: 1.2 }}>{d.h2}</p>
      <p style={{ fontFamily: F.regular, fontSize: 15, color: C.gray01, marginBottom: 36, lineHeight: 1.6 }}>{d.subtitle}</p>
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
        {d.screenshotSide === "left" ? <>{screenshotEl}{cardsEl}</> : <>{cardsEl}{screenshotEl}</>}
      </div>
      </div>
    </div>
  );
}

// ── Useful Links (from Figma: 5 cards — mail, book-open, help-circle, compass, settings) ──
// Line icons for Useful Links — 24×24 stroke, EY gray02 (#C4C4CD) on dark surface
const LINK_ICONS = {
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  ),
  helpCircle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
      <circle cx="12" cy="17" r=".5" fill="#C4C4CD"/>
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
};

const USEFUL_LINKS = [
  { icon: LINK_ICONS.mail,       title: "Outlook Copilot Resources",  body: "Access quick reference sheets and guides for secure email automation.",                   cta: "View Guides" },
  { icon: LINK_ICONS.book,       title: "EY Prompt Library",           body: "Explore verified prompts created and vetted specifically by professional services.",       cta: "Browse Library" },
  { icon: LINK_ICONS.helpCircle, title: "Copilot FAQs",                body: "Find quick answers regarding workspace licenses, token limits, and prompt accuracy.",      cta: "Read FAQs" },
  { icon: LINK_ICONS.compass,    title: "Explore Agents",              body: "Discover AI agents built for specific EY workflows, from tax research to audit support.",  cta: "Explore Agents" },
  { icon: LINK_ICONS.lock,       title: "Manage Access",               body: "Review your Copilot license status, request access, or manage permissions for your team.", cta: "Manage Access" },
];

// ── Security cards (Figma: security-case-studies, 4 horizontal cards, 302px each) ──
const SECURITY_CARDS = [
  { num: "01", title: "Quick Check Before You Prompt", src: "/security_Picture1.png" },
  { num: "02", title: "Share Smartly",                 src: "/security_Picture2.png" },
  { num: "03", title: "Use Sensitivity Labels",        src: "/security_Picture3.png" },
  { num: "04", title: "Check Who Has Access",          src: "/security_Picture4.png" },
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function M365CopilotHub({
  onBack,
  onNavigate,
}: {
  onBack?: () => void;
  onNavigate?: (path: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("word");

  return (
    <div style={{ fontFamily: F.regular, color: C.dark2, background: C.white, minHeight: "100vh" }}>

      {onBack && onNavigate && (
        <>
          <SiteHeader variant="learning" onNavigate={onNavigate} skipLinkTarget="#module-content" />
          <ModuleHeader currentModuleId="copilot-hub" onNavigate={onNavigate} onBack={onBack} />
        </>
      )}

      {/* ── Hero — "M365 COPILOT HUB IS LIVE" (Figma: HeroSection) ─────────── */}
      {/* Spectrum: Frame 9 — EY-yellow beam, darkest left for copy readability */}
      <section
        id="module-content"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: `88px ${contentInlinePad}`,
          gap: 64,
          overflow: "hidden",
          backgroundColor: C.dark,
          backgroundImage: "url('/spectrum/hero-frame-9.png')",
          backgroundSize: "cover",
          backgroundPosition: "72% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft left scrim so white type stays readable over the bloom */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(26,26,36,0.92) 0%, rgba(26,26,36,0.72) 42%, rgba(26,26,36,0.28) 70%, rgba(26,26,36,0.15) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, flex: 1, maxWidth: 676 }}>
          {/* Badge row — green active dot + label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.frameGreen }} />
            <span style={{ fontSize: 11, color: C.gray02, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, fontFamily: F.regular }}>M365 COPILOT HUB IS LIVE</span>
          </div>
          <h1 style={{ fontSize: 36, color: C.white, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>
            Explore M365 Copilot prompts in a new-age workspace
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
            Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365.
          </p>
        </div>
        {/* Video placeholder (Figma: VideoPlaceholder 540×269) */}
        <div style={{ position: "relative", zIndex: 1, width: 540, height: 269, background: "rgba(46,46,56,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, borderLeft: "22px solid #FFFFFF", borderTop: "13px solid transparent", borderBottom: "13px solid transparent", marginLeft: 5 }} />
          </div>
        </div>
      </section>

      {/* ── Repository Tabs — CENTERED header (Figma: RepositoryTabs) ────────── */}
      <section id="prompt-repository" style={{ padding: `64px 0 0`, textAlign: "center", scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        <p style={{ fontSize: 11, color: C.gray01, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>EXPLORE PROMPT CATEGORIES</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: C.dark2 }}>Sample Prompt Repository for using Copilot in Tax</h2>
        <p style={{ fontSize: 15, color: C.gray01, marginBottom: 32 }}>Select your preferred M365 application tool below to view optimized, compliant corporate-ready prompts.</p>
        {/* Tab row — centered. Dark container from tokens: offBlack (#2E2E38) */}
        <div style={{ display: "inline-flex", gap: 8, background: C.dark2, borderRadius: 12, padding: 8 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 8,
                background: activeTab === t.id ? C.yellow : "transparent",
                border: "none", cursor: "pointer", fontSize: 13,
                color: activeTab === t.id ? C.dark2 : C.gray02,
                fontWeight: 700,
                boxShadow: activeTab === t.id ? "0 1px 6px rgba(0,0,0,0.25)" : "none",
                transition: "background 0.15s, color 0.15s, box-shadow 0.15s", fontFamily: F.regular,
              }}
            >
              <AppIcon color={t.appColor} letter={t.letter} />
              {t.label}
            </button>
          ))}
        </div>
        </div>
      </section>

      {/* ── Active tab section ──────────────────────────────────────────────── */}
      <TabSection tabId={activeTab} />

      {/* ── Useful Links (Figma: useful-links-section-redesign) ─────────────── */}
      <section id="useful-links" style={{ background: C.dark2, padding: `${spacing.sectionPaddingY} 0 64px`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: C.white, marginBottom: 12, textAlign: "center" }}>Useful Links</h2>
        <p style={{ fontSize: 15, color: C.gray02, marginBottom: 48, textAlign: "center" }}>Handy EY resources to check your system access, explore deeper templates, and use generative AI safely.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {USEFUL_LINKS.map(l => (
            <div key={l.title} style={{ flex: "1 1 0", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 12, transition: "transform 0.15s", cursor: "default" }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{l.icon}</div>
              <p style={{ fontWeight: 700, fontSize: 15, color: C.white, lineHeight: 1.3 }}>{l.title}</p>
              <p style={{ fontSize: 13, color: "#C4C4CD", flex: 1, lineHeight: 1.55 }}>{l.body}</p>
              <a href="#" style={{ fontSize: 14, color: C.yellow, textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                {l.cta} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Security (Figma: security-case-studies — 4 horizontal cards) ─────── */}
      <section id="security" style={{ background: C.dark, padding: `${spacing.sectionPaddingY} 0`, scrollMarginTop: SUBNAV_SCROLL_OFFSET }}>
        <div style={{ ...contentRailStyle }}>
        {/* GOVERNANCE & TRUST kicker badge */}
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,230,0,0.12)", border: "1px solid rgba(255,230,0,0.25)", borderRadius: 20, padding: "5px 14px", marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.yellow, fontFamily: F.regular }}>GOVERNANCE &amp; TRUST</span>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.white, marginBottom: 14 }}>Enterprise-Grade Security</h2>
        <p style={{ fontSize: 16, color: C.gray02, marginBottom: 52, maxWidth: 800 }}>Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size.</p>
        {/* 4 horizontal cards (Figma: CaseStudiesGrid — each 302px wide) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }}>
          {SECURITY_CARDS.map(card => (
            <div key={card.num} style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer", transition: "transform 0.25s, box-shadow 0.25s", background: "#2e2e38", border: "1px solid #747480", display: "flex", flexDirection: "column" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffe600"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              {/* Card accent image area */}
              <div style={{ height: 140, background: "linear-gradient(155deg, rgb(69,69,83) 0%, rgb(37,37,46) 100%)", position: "relative", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={card.src}
                  alt={card.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Card body */}
              <div style={{ background: "#2e2e38", padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 32, color: C.yellow, marginBottom: 10, lineHeight: 1 }}>{card.num}</p>
                {/* Title grows to fill — pushes separator + CTA to bottom */}
                <p style={{ fontFamily: F.regular, fontWeight: 700, fontSize: 16, color: C.white, lineHeight: 1.35, flex: 1, marginBottom: 14 }}>{card.title}</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 14 }} />
                {/* CTA — always at the bottom */}
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: C.yellow, fontWeight: 700, textDecoration: "none", fontFamily: F.regular }}>
                  View Protocol
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Shared dark CTA — Phase 1 complete */}
      <EYWhatsNext
        title={
          <>
            You&apos;ve completed Phase 1.
            <br />
            Keep practising with <EYWhatsNextHighlight>real tax workflows.</EYWhatsNextHighlight>
          </>
        }
        description="You now have the foundations, prompting craft, and Copilot patterns to use AI safely in tax work. Revisit any module anytime — or return to Tax Labs to explore what's next."
        ctaLabel="Back to Tax Labs"
        onContinue={() => onNavigate?.("/phase1")}
        meta="Phase 1 covered: AI foundations, tax prompting, and M365 Copilot"
      />

      {/* ── Footer (Figma: Footer — EY logo + EY.ai Tax Labs + link cols) ────── */}
      <footer style={{ background: C.dark2, padding: `56px 0 32px` }}>
        <div style={{ ...contentRailStyle }}>
          <div style={{ display: "flex", gap: 80, marginBottom: 48 }}>
            <div style={{ flex: 1, maxWidth: 280 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <EYLogoMark height={28} letterColor="#FFFFFF" />
                <span style={{ color: C.white, fontWeight: 700, fontSize: 16, fontFamily: F.regular }}>EY.ai Tax Labs</span>
              </div>
              <p style={{ fontSize: 13, color: "#C4C4CD", lineHeight: 1.6 }}>Accelerating tax performance safely through custom generative AI structures and premium prompt frameworks.</p>
            </div>
            <div>
              <p style={{ fontSize: 14, color: C.white, fontWeight: 700, marginBottom: 14, fontFamily: F.regular }}>M365 Apps</p>
              {["Word Prompts","Excel Sheets","PowerPoint Decks","Outlook Emails"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#C4C4CD", textDecoration: "none", marginBottom: 8, fontFamily: F.regular }}>{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 14, color: C.white, fontWeight: 700, marginBottom: 14, fontFamily: F.regular }}>Trust &amp; Security</p>
              {["Privacy Policy","Data Governance","Safe Harbor Rules"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "#C4C4CD", textDecoration: "none", marginBottom: 8, fontFamily: F.regular }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: 12, color: "#C4C4CD", fontFamily: F.regular }}>© 2026 EY.ai Tax Labs. All rights reserved. Proprietary and confidential.</p>
            <div style={{ display: "flex", gap: 14 }}>
              {["in","𝕏"].map(s => (
                <a key={s} href="#" style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4C4CD", fontSize: 11, fontWeight: 700, textDecoration: "none", fontFamily: F.regular }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
