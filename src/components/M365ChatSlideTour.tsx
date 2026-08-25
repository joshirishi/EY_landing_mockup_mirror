import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  Clock,
  FileText,
  Grid3x3,
  Image,
  MessagesSquare,
  Mic,
  MoreHorizontal,
  PenLine,
  Pencil,
  Plus,
  Rocket,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { colors, fonts as F, spectrumCss, typeScale } from "../design-kit/tokens";

const C = { ...colors, dark2: colors.offBlack };
const line = `color-mix(in srgb, ${C.gray02} 50%, ${C.white})`;
const FIGMA_W = 953;
const FIGMA_H = 530;
const COPILOT_HEX = "/reference-images/m365-chat-tour/copilot-hex.png";

// ── Types ─────────────────────────────────────────────────────────────────────

type Placement = "left" | "right" | "top" | "bottom";

type Callout = {
  title: string;
  body: string;
  icon: LucideIcon;
  /** Matches data-tour-id on the canvas element — highlight measured live. */
  target: string;
  placement: Placement;
  /** Shared 1–8 workflow number (Step 3 has two beats). */
  workflowStep: number;
};

type SlideKind = "personalization" | "analyst" | "builder" | "researcher" | "create";

type Slide = {
  label: string;
  kind: SlideKind;
  callouts: Callout[];
};

const WORKFLOW_STEPS = 8;

// ── Callout measurement (from rendered DOM — works across scale transforms) ───

type CalloutRect = { left: number; top: number; width: number; height: number };

function measureTarget(frame: HTMLElement, target: string): CalloutRect | null {
  const el = frame.querySelector(`[data-tour-id="${target}"]`);
  if (!(el instanceof HTMLElement)) return null;
  const parent = frame.getBoundingClientRect();
  const box = el.getBoundingClientRect();
  if (parent.width < 2 || parent.height < 2 || box.width < 1) return null;
  const pad = 5;
  return {
    left: ((box.left - parent.left - pad) / parent.width) * 100,
    top: ((box.top - parent.top - pad) / parent.height) * 100,
    width: ((box.width + pad * 2) / parent.width) * 100,
    height: ((box.height + pad * 2) / parent.height) * 100,
  };
}

function cardAnchor(rect: CalloutRect, placement: Placement) {
  if (placement === "right") return { left: rect.left + rect.width, top: rect.top + rect.height / 2 };
  if (placement === "left") return { left: rect.left, top: rect.top + rect.height / 2 };
  if (placement === "top") return { left: rect.left + rect.width / 2, top: rect.top };
  return { left: rect.left + rect.width / 2, top: rect.top + rect.height };
}

function cardTransform(placement: Placement): CSSProperties {
  switch (placement) {
    case "right": return { transform: "translate(10px, -50%)" };
    case "left":  return { transform: "translate(calc(-100% - 10px), -50%)" };
    case "top":   return { transform: "translate(-50%, calc(-100% - 10px))" };
    case "bottom":return { transform: "translate(-50%, 10px)" };
  }
}

/** Flip a callout if it would sit off the canvas (avoids page jump on Next). */
function safePlacement(rect: CalloutRect, placement: Placement): Placement {
  if (placement === "top" && rect.top < 24) return "bottom";
  if (placement === "bottom" && rect.top + rect.height > 76) return "top";
  if (placement === "right" && rect.left + rect.width > 70) return "left";
  if (placement === "left" && rect.left < 30) return "right";
  return placement;
}

// ── Slide data ────────────────────────────────────────────────────────────────

const CHAT_TOUR_SLIDES: Slide[] = [
  {
    label: "Set up Copilot",
    kind: "personalization",
    callouts: [
      {
        title: "Enable Work IQ",
        body: "When on, Copilot can use your work data and the web, within your permissions. When off, answers come from web content only — you control what it can see.",
        icon: Sparkles,
        target: "work-iq",
        placement: "bottom",
        workflowStep: 1,
      },
      {
        title: "Select the right model",
        body: "Auto picks for you. GPT Quick is for fast drafts. GPT Advanced is for analysis. Claude Opus is for deep research and strategy.",
        icon: Brain,
        target: "auto-model",
        placement: "bottom",
        workflowStep: 2,
      },
      {
        title: "Custom instructions",
        body: "Tell Copilot how to answer. Example: you are an Indian tax professional — prioritise Indian law, use bullets, and call out risks, deadlines and penalties.",
        icon: Settings,
        target: "custom-instructions",
        placement: "bottom",
        workflowStep: 3,
      },
      {
        title: "Saved memories",
        body: "Copilot remembers your writing style, formats and recurring context so later answers match you without repeating the brief.",
        icon: Brain,
        target: "saved-memories",
        placement: "bottom",
        workflowStep: 3,
      },
      {
        title: "Saved prompts",
        body: "Reuse a GST template: analyse a period, flag late filings, highlight high-risk months and create trend charts — one click, same quality.",
        icon: Save,
        target: "saved-prompts",
        placement: "top",
        workflowStep: 4,
      },
    ],
  },
  {
    label: "Analyst Agent",
    kind: "analyst",
    callouts: [
      {
        title: "Analyst agent",
        body: "Ask it to analyse 12 months of GST filings. It finds patterns, late filings and high-risk periods, then builds the charts — minutes, not hours.",
        icon: BarChart3,
        target: "analyst",
        placement: "right",
        workflowStep: 5,
      },
    ],
  },
  {
    label: "Custom Agent",
    kind: "builder",
    callouts: [
      {
        title: "New agent",
        body: "Create a specialist for Indian tax — your instructions, your knowledge sources, your compliance process. No need to re-explain the brief each time.",
        icon: Bot,
        target: "new-agent",
        placement: "right",
        workflowStep: 6,
      },
      {
        title: "Agent Builder",
        body: "Name the agent, write instructions and attach approved sources so the team can run the same tax workflow consistently.",
        icon: Sparkles,
        target: "agent-builder",
        placement: "left",
        workflowStep: 6,
      },
    ],
  },
  {
    label: "Researcher Agent",
    kind: "researcher",
    callouts: [
      {
        title: "Researcher agent",
        body: "Prep a manufacturing client exploring global expansion — it pulls indirect tax, customs and transfer pricing, then returns a meeting-ready brief.",
        icon: Search,
        target: "researcher",
        placement: "right",
        workflowStep: 7,
      },
    ],
  },
  {
    label: "Create",
    kind: "create",
    callouts: [
      {
        title: "Create content",
        body: "Turn ideas into professional images, videos, surveys and pages. Describe the asset and brand style, then refine what Copilot generates.",
        icon: Rocket,
        target: "create-content",
        placement: "top",
        workflowStep: 8,
      },
    ],
  },
];

// ── Scale-to-width hook ───────────────────────────────────────────────────────

function useScaleToWidth(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return { ref, scale };
}

// ── Shared UI primitives ──────────────────────────────────────────────────────

function NavRow({ icon, label, tourId, active }: { icon: ReactNode; label: string; tourId?: string; active?: boolean }) {
  return (
    <div
      data-tour-id={tourId}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 10px",
        borderRadius: 6,
        width: "100%",
        background: active ? `color-mix(in srgb, ${C.gray02} 40%, ${C.white})` : "transparent",
        cursor: "default",
      }}
    >
      <span style={{ width: 16, height: 16, display: "flex", flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: F.regular, fontSize: 13, color: C.dark2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
        {label}
      </span>
    </div>
  );
}

function AgentRow({ color, label, tourId }: { color: string; label: string; tourId?: string }) {
  return (
    <div
      data-tour-id={tourId}
      style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 10px", borderRadius: 6, width: "100%", cursor: "default" }}
    >
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ fontFamily: F.regular, fontSize: 13, color: C.dark2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
        {label}
      </span>
    </div>
  );
}

function CopilotHex({ size }: { size: number }) {
  return (
    <img src={COPILOT_HEX} alt="" width={size} height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block", flexShrink: 0 }} />
  );
}

// ── Shared sidebar ────────────────────────────────────────────────────────────

const CHAT_SIDEBAR_W = 210;

function ChatSidebar({ prevChatsId }: { prevChatsId?: string }) {
  const icon = { size: 16, strokeWidth: 1.5, color: "#424242" } as const;
  return (
    <div
      style={{
        width: CHAT_SIDEBAR_W,
        flexShrink: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px 12px",
        borderRight: `1px solid #e5e5e5`,
        background: C.white,
        gap: 4,
      }}
    >
      {/* Top icons */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 6px", marginBottom: 8 }}>
        <span style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CopilotHex size={22} />
        </span>
        <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid3x3 size={18} strokeWidth={1.5} color="#616161" />
        </span>
      </div>

      {/* Nav */}
      <NavRow icon={<PenLine {...icon} />} label="New chat" tourId="new-chat" />
      <NavRow icon={<Search {...icon} />} label="Search" tourId="search" />
      <NavRow icon={<BookOpen {...icon} />} label="Library" tourId="library" />

      {/* Agents */}
      <div style={{ marginTop: 12, marginBottom: 2, padding: "0 10px" }}>
        <span style={{ fontFamily: F.regular, fontSize: 11, fontWeight: 600, color: "#757575", textTransform: "none", letterSpacing: 0 }}>
          Agents
        </span>
      </div>
      <AgentRow color="#107C10" label="Researcher" tourId="researcher" />
      <AgentRow color="#7719AA" label="Analyst" tourId="analyst" />
      <AgentRow color="#0078D4" label="Income Tax Laws check" />
      <AgentRow color="#CA5010" label="Prompt Coach" />
      <div
        data-tour-id="new-agent"
        style={{
          display: "flex", alignItems: "center", gap: 10, padding: "6px 10px",
          borderRadius: 6, width: "100%", cursor: "default",
        }}
      >
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: spectrumCss(4, "135deg"), flexShrink: 0 }} />
        <span style={{ fontFamily: F.regular, fontSize: 13, color: C.dark2, whiteSpace: "nowrap" }}>New agent</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px" }}>
        <ChevronsRight size={13} strokeWidth={1.5} color="#9e9e9e" />
        <span style={{ fontFamily: F.regular, fontSize: 12, color: "#9e9e9e" }}>More agents</span>
      </div>

      {/* Chats */}
      <div style={{ marginTop: 10, marginBottom: 2, padding: "0 10px" }}>
        <span style={{ fontFamily: F.regular, fontSize: 11, fontWeight: 600, color: "#757575" }}>Chats</span>
      </div>
      <div data-tour-id={prevChatsId} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {["Example of Saved Prompt Usa…", "Explaining Work IQ in M365…", "Understanding Advance Tax Ba…"].map(t => (
          <div key={t} style={{ padding: "5px 10px", fontFamily: F.regular, fontSize: 12, color: "#616161", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Canvas: Slide 0 — Chat home ───────────────────────────────────────────────

const QUICK_PILLS = ["File Insights", "Inbox Triage", "People Search", "Meeting Prep"] as const;

const CREATE_MENU_ITEMS = [
  { label: "Image", icon: Image },
  { label: "Video", icon: Video },
  { label: "Survey", icon: FileText },
  { label: "Page", icon: FileText },
] as const;

function ChatMainCanvas({ frameRef, showCreateMenu }: { frameRef: (el: HTMLDivElement | null) => void; showCreateMenu?: boolean }) {
  const { ref, scale } = useScaleToWidth(FIGMA_W);
  return (
    <div
      ref={ref}
      role="img"
      aria-label="Microsoft 365 Copilot Chat home"
      style={{ width: "100%", aspectRatio: `${FIGMA_W} / ${FIGMA_H}`, position: "relative", overflow: "hidden", background: C.white }}
    >
      <div
        ref={frameRef}
        aria-hidden
        style={{ position: "absolute", top: 0, left: 0, width: FIGMA_W, height: FIGMA_H, transform: `scale(${scale})`, transformOrigin: "top left", display: "flex", background: C.white }}
      >
        <ChatSidebar />

        {/* Main area */}
        <div style={{ flex: 1, minWidth: 0, height: "100%", display: "flex", flexDirection: "column", padding: "16px 48px 32px", background: C.white }}>
          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                data-tour-id="work-iq-main"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f", background: C.white, cursor: "default" }}
              >
                <Sparkles size={13} strokeWidth={1.75} color="#7719AA" />
                Work IQ
              </span>
              <span
                data-tour-id="auto-main"
                style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f", cursor: "default" }}
              >
                Auto <ChevronDown size={12} strokeWidth={1.5} color="#616161" />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span data-tour-id="gov-shield" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28 }}>
                <ShieldCheck size={18} strokeWidth={1.5} color="#107C10" />
              </span>
              <MoreHorizontal size={18} strokeWidth={1.5} color="#616161" />
            </div>
          </div>

          {/* Centre */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <p style={{ fontFamily: F.bold, fontSize: 26, fontWeight: 700, color: "#1f1f1f", textAlign: "center", margin: 0, lineHeight: 1.3 }}>
              Hi, what can I help you with?
            </p>
            <div style={{ width: "100%", maxWidth: 540, display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                data-tour-id="prompt-input"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 16px", borderRadius: 28, border: "1px solid #d0d0d0", background: C.white, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", cursor: "text" }}
              >
                <span
                  data-tour-id={showCreateMenu ? "create-content" : undefined}
                  style={{ position: "relative", display: "inline-flex" }}
                >
                  <Plus size={18} strokeWidth={1.5} color="#424242" />
                  {showCreateMenu && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "calc(100% + 8px)",
                        width: 188,
                        borderRadius: 10,
                        border: "1px solid #e0e0e0",
                        background: C.white,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                        overflow: "hidden",
                        zIndex: 4,
                      }}
                    >
                      <div style={{ padding: "8px 12px", fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: "#1f1f1f", borderBottom: "1px solid #f0f0f0" }}>
                        Create
                      </div>
                      {CREATE_MENU_ITEMS.map(({ label, icon: Icon }) => (
                        <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px" }}>
                          <Icon size={14} strokeWidth={1.5} color="#424242" />
                          <span style={{ fontFamily: F.regular, fontSize: 12, color: "#1f1f1f" }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </span>
                <span style={{ flex: 1, fontFamily: F.regular, fontSize: 14, color: "#9e9e9e" }}>Message Copilot</span>
                <span data-tour-id="voice-btn" style={{ display: "inline-flex" }}>
                  <Mic size={18} strokeWidth={1.5} color="#424242" />
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}>
                {QUICK_PILLS.map(label => (
                  <span key={label} style={{ padding: "7px 14px", borderRadius: 999, border: "1px solid #d0d0d0", background: "#f9f9f9", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f", whiteSpace: "nowrap" }}>
                    {label}
                  </span>
                ))}
                <span style={{ width: 32, height: 32, borderRadius: 999, border: "1px solid #d0d0d0", background: "#f9f9f9", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <MoreHorizontal size={14} strokeWidth={1.5} color="#9e9e9e" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p style={{ fontFamily: F.regular, fontSize: 11, color: "#9e9e9e", textAlign: "center", margin: 0 }}>
            AI-generated content may be incorrect
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Canvas: Slide 1 — Personalization ────────────────────────────────────────

const SAVED_PROMPTS_DATA = [
  { label: "GST Compliance Check", icon: FileText },
  { label: "Meeting Summary", icon: MessagesSquare },
  { label: "Inbox Triage", icon: Search },
] as const;

function PersonalizationCanvas({ frameRef, showModelMenu }: { frameRef: (el: HTMLDivElement | null) => void; showModelMenu: boolean }) {
  const { ref, scale } = useScaleToWidth(FIGMA_W);
  return (
    <div
      ref={ref}
      role="img"
      aria-label="M365 Copilot Chat personalization settings"
      style={{ width: "100%", aspectRatio: `${FIGMA_W} / ${FIGMA_H}`, position: "relative", overflow: "hidden", background: C.white }}
    >
      <div
        ref={frameRef}
        aria-hidden
        style={{ position: "absolute", top: 0, left: 0, width: FIGMA_W, height: FIGMA_H, transform: `scale(${scale})`, transformOrigin: "top left", display: "flex", background: C.white }}
      >
        <ChatSidebar />

        {/* Main settings panel */}
        <div style={{ flex: 1, minWidth: 0, height: "100%", display: "flex", flexDirection: "column", padding: "16px 32px 24px", overflow: "hidden" }}>
          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16 }}>
            <span
              data-tour-id="work-iq"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f", background: C.white }}
            >
              <Sparkles size={13} strokeWidth={1.75} color="#7719AA" />
              Work IQ
              <span style={{ display: "inline-block", width: 28, height: 16, borderRadius: 999, background: "#107C10", position: "relative", marginLeft: 4 }}>
                <span style={{ position: "absolute", right: 2, top: 2, width: 12, height: 12, borderRadius: 999, background: C.white }} />
              </span>
            </span>
            {/* Auto pill + open dropdown grouped together as one target */}
            <div data-tour-id="auto-model" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f", alignSelf: "flex-start" }}>
                Auto <ChevronDown size={12} strokeWidth={1.5} color="#616161" />
              </span>
              {/* Open only on the model step — otherwise later settings are clipped and callouts jump the page */}
              {showModelMenu && (
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start", marginTop: 2 }}>
                {/* Primary dropdown card */}
                <div style={{ width: 200, borderRadius: 10, border: "1px solid #e0e0e0", background: C.white, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 13px", borderBottom: "1px solid #f0f0f0" }}>
                    <span style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: "#1f1f1f" }}>Auto</span>
                    <ChevronDown size={13} strokeWidth={1.5} color="#616161" />
                  </div>
                  {[
                    { label: "Auto", sub: "Picks the best model for your query", checked: true },
                    { label: "GPT Quick response", sub: "Fast drafts and summaries", checked: false },
                    { label: "GPT Advanced", sub: "Analysis and complex problem-solving", checked: false },
                    { label: "Claude Opus", sub: "Deep research and strategic planning", checked: false },
                  ].map(opt => (
                    <div key={opt.label} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "8px 13px", borderBottom: "1px solid #f5f5f5" }}>
                      <span style={{ width: 14, height: 14, marginTop: 2, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {opt.checked && <Check size={12} strokeWidth={2.5} color="#1f1f1f" />}
                      </span>
                      <div>
                        <div style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: "#1f1f1f" }}>{opt.label}</div>
                        <div style={{ fontFamily: F.regular, fontSize: 10, color: "#757575", marginTop: 1 }}>{opt.sub}</div>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 13px", background: "#f7f0fd" }}>
                    <div>
                      <div style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 700, color: "#1f1f1f" }}>GPT</div>
                      <div style={{ fontFamily: F.regular, fontSize: 10, color: "#757575" }}>OpenAI versions</div>
                    </div>
                    <ChevronRight size={13} strokeWidth={1.5} color="#616161" />
                  </div>
                </div>
                {/* GPT sub-menu — marginTop aligns it with the GPT row in the primary card */}
                {/* header(38) + 4 option rows(~38px each) = ~190px before GPT row */}
                <div style={{ marginTop: 190, width: 180, borderRadius: 10, border: "1px solid #e0e0e0", background: C.white, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", overflow: "hidden", flexShrink: 0 }}>
                  {["GPT 5.6 Think deeper", "GPT 5.6 Quick response", "GPT 5.5 Quick response"].map((label, i) => (
                    <div key={label} style={{ padding: "10px 14px", fontFamily: F.regular, fontSize: 11, color: "#1f1f1f", borderBottom: i < 2 ? "1px solid #f5f5f5" : "none" }}>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              )}
            </div>
          </div>

          {/* Custom Instructions */}
          <div style={{ marginBottom: 16 }}>
            <div data-tour-id="custom-instructions" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <Settings size={14} strokeWidth={1.5} color="#424242" />
              <span style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 600, color: "#1f1f1f" }}>Custom Instructions</span>
              <span style={{ padding: "2px 8px", borderRadius: 999, background: "#f0e6fa", fontFamily: F.regular, fontSize: 10, color: "#7719AA" }}>Personalisation</span>
            </div>
            <div style={{ padding: "12px 14px", borderRadius: 8, border: "1px solid #d0d0d0", background: "#fafafa", minHeight: 108 }}>
              <p style={{ fontFamily: F.regular, fontSize: 12, color: "#424242", margin: 0, lineHeight: 1.65 }}>
                I am an Indian tax professional. When responding to tax questions, prioritise Indian tax laws and regulations. Present compliance requirements in bullet points and highlight risks, deadlines, and penalties separately.
              </p>
            </div>
          </div>

          {/* Saved Memories */}
          <div style={{ marginBottom: 20 }}>
            <div data-tour-id="saved-memories" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <Brain size={14} strokeWidth={1.5} color="#424242" />
              <span style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 600, color: "#1f1f1f" }}>Saved Memories</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Preferred writing style", "Frequently used formats", "Tax jurisdiction: India"].map(mem => (
                <span key={mem} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 999, border: "1px solid #d0d0d0", background: C.white, fontFamily: F.regular, fontSize: 11, color: "#424242" }}>
                  <Brain size={11} strokeWidth={1.5} color="#7719AA" />
                  {mem}
                </span>
              ))}
            </div>
          </div>

          {/* Saved Prompts */}
          <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
            <div data-tour-id="saved-prompts" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <Save size={14} strokeWidth={1.5} color="#424242" />
              <span style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 600, color: "#1f1f1f" }}>Saved Prompts</span>
              <span style={{ padding: "2px 8px", borderRadius: 999, background: "#FFF8CC", fontFamily: F.regular, fontSize: 10, color: "#5a4500" }}>Personal library</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {SAVED_PROMPTS_DATA.map(({ label, icon: Icon }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 8, border: "1px solid #d0d0d0", background: C.white, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", minWidth: 160 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 7, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={14} strokeWidth={1.75} color={C.dark2} />
                  </span>
                  <span style={{ fontFamily: F.bold, fontSize: 11, fontWeight: 600, color: "#1f1f1f" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Canvas: Slide 2 — Advanced features with Agent Builder ────────────────────

function IconBtn({ children, filled }: { children: ReactNode; filled?: boolean }) {
  return (
    <span style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: filled ? "#f0f0f0" : C.white, border: filled ? "none" : "1px solid #d0d0d0" }}>
      {children}
    </span>
  );
}

function ChatTourCanvas({ frameRef }: { frameRef: (el: HTMLDivElement | null) => void }) {
  const { ref, scale } = useScaleToWidth(FIGMA_W);
  const icon = { size: 16, strokeWidth: 1.5, color: "#424242" } as const;
  return (
    <div
      ref={ref}
      role="img"
      aria-label="Microsoft 365 Copilot Chat with Agent Builder"
      style={{ width: "100%", aspectRatio: `${FIGMA_W} / ${FIGMA_H}`, position: "relative", overflow: "hidden", background: C.white }}
    >
      <div
        ref={frameRef}
        aria-hidden
        style={{ position: "absolute", top: 0, left: 0, width: FIGMA_W, height: FIGMA_H, transform: `scale(${scale})`, transformOrigin: "top left", display: "flex", background: C.white }}
      >
        <ChatSidebar prevChatsId="prev-chats" />

        {/* Centre chat */}
        <div style={{ flex: 1, minWidth: 0, height: "100%", display: "flex", flexDirection: "column", padding: "16px 28px 32px", background: C.white }}>
          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span data-tour-id="work-iq-main" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f" }}>
                <Sparkles size={13} strokeWidth={1.75} color="#7719AA" /> Work IQ
              </span>
              <span data-tour-id="auto-main" style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 12, color: "#1f1f1f" }}>
                Auto <ChevronDown size={12} strokeWidth={1.5} color="#616161" />
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span data-tour-id="temp-chat" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Clock size={16} strokeWidth={1.5} color="#616161" />
              </span>
              <span data-tour-id="gov-shield">
                <ShieldCheck size={18} strokeWidth={1.5} color="#107C10" />
              </span>
              <MoreHorizontal size={18} strokeWidth={1.5} color="#616161" />
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <p style={{ fontFamily: F.bold, fontSize: 22, fontWeight: 700, color: "#1f1f1f", textAlign: "center", margin: 0 }}>
              Build your own specialist agent
            </p>
            <div
              data-tour-id="prompt-input"
              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "13px 16px", borderRadius: 28, border: "1px solid #d0d0d0", background: C.white }}
            >
              <span data-tour-id="plus-apps"><Plus size={18} strokeWidth={1.5} color="#424242" /></span>
              <span style={{ flex: 1, fontFamily: F.regular, fontSize: 14, color: "#9e9e9e" }}>Message Copilot</span>
              <span data-tour-id="voice-btn"><Mic size={18} strokeWidth={1.5} color="#424242" /></span>
            </div>
          </div>
        </div>

        {/* Right Agent Builder panel */}
        <div
          data-tour-id="agent-builder"
          style={{ flex: 1, minWidth: 0, height: "100%", display: "flex", flexDirection: "column", gap: 20, padding: "16px 20px", borderLeft: "1px solid #e5e5e5", background: C.white }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px 3px 6px", borderRadius: 999, background: "#f0e6fa", border: "1px solid #d4aaee" }}>
                <CopilotHex size={16} />
                <span style={{ fontFamily: F.bold, fontSize: 12, fontWeight: 600, color: "#7719AA" }}>Agent Builder</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 999, border: "1px solid #d0d0d0", fontFamily: F.regular, fontSize: 11, color: "#1f1f1f" }}>
                Configure <ChevronDown size={11} strokeWidth={1.5} color="#616161" />
              </span>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              <IconBtn filled><Plus size={13} strokeWidth={1.5} color="#424242" /></IconBtn>
              <IconBtn><MoreHorizontal size={13} strokeWidth={1.5} color="#424242" /></IconBtn>
              <IconBtn><X size={13} strokeWidth={1.5} color="#424242" /></IconBtn>
            </div>
          </div>

          {/* Agent name */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 32, height: 32, borderRadius: "50%", background: spectrumCss(4, "135deg"), display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={16} color="#fff" strokeWidth={1.5} />
              </span>
              <span style={{ fontFamily: F.bold, fontSize: 18, fontWeight: 700, color: "#1f1f1f" }}>New Agent</span>
              <Pencil size={14} strokeWidth={1.5} color="#9e9e9e" />
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <span style={{ fontFamily: F.regular, fontSize: 12, color: "#9e9e9e" }}>Auto</span>
              <ChevronDown size={11} strokeWidth={1.5} color="#9e9e9e" />
            </span>
          </div>

          <p style={{ fontFamily: F.regular, fontSize: 13, color: "#9e9e9e", margin: 0 }}>Describe your agent</p>

          {/* Instructions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 16, borderRadius: 10, border: "1px solid #e0e0e0", background: C.white, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 600, color: "#1f1f1f" }}>Instructions</span>
            </div>
            <div style={{ flex: 1, minHeight: 80, padding: 12, borderRadius: 6, border: "1px solid #e0e0e0" }}>
              <p style={{ fontFamily: F.regular, fontSize: 12, lineHeight: "18px", color: "#9e9e9e", margin: 0 }}>
                Describe what this agent should do, define its tone, and outline any rules or guidelines it must follow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Callout box (highlight ring + solid card, no backdrop blur) ───────────────

function CalloutBox({
  callout,
  active,
  stepNum,
  frame,
  onNext,
  isLast,
}: {
  callout: Callout;
  active: boolean;
  stepNum: number;
  frame: HTMLDivElement | null;
  onNext: () => void;
  isLast: boolean;
}) {
  const Icon = callout.icon;
  const [rect, setRect] = useState<CalloutRect | null>(null);

  useLayoutEffect(() => {
    if (!frame || !active) { setRect(null); return; }
    const update = () => setRect(measureTarget(frame, callout.target));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(frame);
    const t1 = window.setTimeout(update, 80);
    const t2 = window.setTimeout(update, 240);
    return () => { ro.disconnect(); window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [frame, callout.target, active]);

  if (!rect) return null;
  const placement = safePlacement(rect, callout.placement);
  const anchor = cardAnchor(rect, placement);

  return (
    <div
      role="note"
      aria-hidden={!active}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: active ? 20 : 5,
        opacity: active ? 1 : 0,
        pointerEvents: active ? "auto" : "none",
        transition: "opacity 0.3s ease",
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        filter: "none",
      }}
    >
      {/* Yellow border on focused element */}
      <span
        aria-hidden
        style={{ position: "absolute", left: `${rect.left}%`, top: `${rect.top}%`, width: `${rect.width}%`, height: `${rect.height}%`, boxSizing: "border-box", border: `2px solid ${C.yellow}`, borderRadius: 6, background: "transparent", pointerEvents: "none", zIndex: 2 }}
      />

      {/* Annotation card */}
      <div
        style={{ position: "absolute", left: `${anchor.left}%`, top: `${anchor.top}%`, width: "min(260px, 38vw)", background: C.white, border: `1.5px solid ${C.yellow}`, borderRadius: 12, padding: "12px 14px", boxShadow: `0 12px 32px color-mix(in srgb, ${C.confidentBlack} 18%, transparent)`, zIndex: 3, pointerEvents: "auto", ...cardTransform(placement) }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ width: 26, height: 26, minWidth: 26, borderRadius: 7, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.bold, fontSize: 12, fontWeight: 700, color: C.dark2 }}>
            {stepNum}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
              <Icon size={14} strokeWidth={1.75} color={C.dark2} aria-hidden />
              <p style={{ fontFamily: F.bold, fontSize: 13, fontWeight: 700, color: C.dark2, margin: 0, lineHeight: 1.3 }}>{callout.title}</p>
            </div>
            <p style={{ fontFamily: F.regular, fontSize: 12, color: C.gray01, margin: 0, lineHeight: 1.5 }}>{callout.body}</p>
          </div>
        </div>
        {/* Inline next button */}
        {!isLast && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
            <button
              type="button"
              onMouseDown={e => e.preventDefault()}
              onClick={onNext}
              style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 999, border: "none", background: C.yellow, color: C.dark2, fontFamily: F.bold, fontSize: 11, fontWeight: 700, cursor: "pointer" }}
            >
              Next <ChevronRight size={13} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Nav button styles ─────────────────────────────────────────────────────────

const navBtnStyle = (disabled: boolean): CSSProperties => ({
  display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 999,
  border: `1px solid ${C.gray02}`, background: C.white, color: disabled ? C.gray02 : C.dark2,
  fontFamily: F.regular, fontSize: 14, fontWeight: 700, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
});

const primaryBtnStyle: CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 999,
  border: "none", background: C.yellow, color: C.dark2, fontFamily: F.bold, fontSize: 14, fontWeight: 700, cursor: "pointer", marginLeft: "auto",
};

// ── Main export ───────────────────────────────────────────────────────────────

export function M365ChatSlideTour() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [calloutIndex, setCalloutIndex] = useState(0);
  const [frameEl, setFrameEl] = useState<HTMLDivElement | null>(null);
  const tourRef = useRef<HTMLDivElement>(null);

  const slide = CHAT_TOUR_SLIDES[slideIndex];
  const totalSlides = CHAT_TOUR_SLIDES.length;
  const totalCallouts = slide.callouts.length;
  const safeCalloutIndex = Math.min(calloutIndex, totalCallouts - 1);
  const currentCallout = slide.callouts[safeCalloutIndex];
  const workflowStep = currentCallout.workflowStep;
  const isFirstCallout = safeCalloutIndex === 0;
  const isLastCallout = safeCalloutIndex === totalCallouts - 1;
  const isFirstSlide = slideIndex === 0;
  const isLastSlide = slideIndex === totalSlides - 1;
  const tourComplete = isLastSlide && isLastCallout;

  const goNext = useCallback(() => {
    setCalloutIndex(prev => {
      if (prev < totalCallouts - 1) return prev + 1;
      // Last callout — advance to next slide
      if (!isLastSlide) {
        setSlideIndex(s => s + 1);
        setFrameEl(null);
        return 0;
      }
      return prev; // tour complete — stay put
    });
  }, [totalCallouts, isLastSlide]);

  const goPrev = useCallback(() => {
    setCalloutIndex(prev => {
      if (prev > 0) return prev - 1;
      if (!isFirstSlide) {
        const prevSlide = slideIndex - 1;
        setSlideIndex(prevSlide);
        setFrameEl(null);
        return CHAT_TOUR_SLIDES[prevSlide].callouts.length - 1;
      }
      return 0;
    });
  }, [isFirstSlide, slideIndex]);

  const restart = useCallback(() => {
    setSlideIndex(0); setCalloutIndex(0); setFrameEl(null);
    tourRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!tourRef.current?.contains(document.activeElement) && document.activeElement !== document.body) return;
      if (e.key === "ArrowRight" || e.key === "Enter") { e.preventDefault(); if (!tourComplete) goNext(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); if (!isFirstSlide || !isFirstCallout) goPrev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, tourComplete, isFirstSlide, isFirstCallout]);

  const frameRefCb = useCallback((el: HTMLDivElement | null) => setFrameEl(el), []);

  return (
    <div ref={tourRef} tabIndex={0} role="region" aria-label="M365 Copilot Chat eight-step workflow" aria-roledescription="carousel"
      style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16, outline: "none" }}>

      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: F.bold, fontSize: typeScale.label.size, fontWeight: 700, letterSpacing: typeScale.label.tracking, textTransform: "uppercase", color: C.dark2 }}>
            {slide.label}
          </span>
          <span style={{ fontFamily: F.regular, fontSize: 12, color: C.gray01 }}>
            Step {workflowStep} of {WORKFLOW_STEPS}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} aria-hidden>
          {Array.from({ length: WORKFLOW_STEPS }, (_, i) => (
            <span key={i} style={{ width: i + 1 === workflowStep ? 24 : 8, height: 8, borderRadius: 999, background: i + 1 === workflowStep ? C.yellow : C.gray02, transition: "width 0.2s ease" }} />
          ))}
        </div>
      </div>

      {/* Canvas with callout overlays */}
      <div style={{ position: "relative", width: "100%", borderRadius: 16, border: `1px solid ${C.gray02}`, background: C.white, boxShadow: `0 16px 40px color-mix(in srgb, ${C.confidentBlack} 10%, transparent)` }}>
        {slide.kind === "personalization" && <PersonalizationCanvas frameRef={frameRefCb} showModelMenu={currentCallout.target === "auto-model"} />}
        {slide.kind === "analyst" && <ChatMainCanvas frameRef={frameRefCb} />}
        {slide.kind === "builder" && <ChatTourCanvas frameRef={frameRefCb} />}
        {slide.kind === "researcher" && <ChatMainCanvas frameRef={frameRefCb} />}
        {slide.kind === "create" && <ChatMainCanvas frameRef={frameRefCb} showCreateMenu />}

        {slide.callouts.map((c, i) => (
          <CalloutBox key={`${slideIndex}-${c.target}`} callout={c} active={i === safeCalloutIndex} stepNum={c.workflowStep} frame={frameEl} onNext={goNext} isLast={tourComplete || (i === totalCallouts - 1 && isLastSlide)} />
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 0 0" }}>
        <button type="button" onClick={goPrev} disabled={isFirstSlide && isFirstCallout} aria-label="Previous step" style={navBtnStyle(isFirstSlide && isFirstCallout)}>
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden /> Previous
        </button>
        {tourComplete ? (
          <button type="button" onClick={restart} aria-label="Restart tour" style={primaryBtnStyle}>Restart tour</button>
        ) : (
          <button type="button" onClick={goNext} aria-label="Next step" style={primaryBtnStyle}>
            Continue <ChevronRight size={16} strokeWidth={1.75} aria-hidden />
          </button>
        )}
        <span style={{ fontFamily: F.regular, fontSize: 12, color: C.gray01, flex: "1 1 100%", textAlign: "center" }}>
          Use arrow keys or Continue to walk the eight-step workflow
        </span>
      </div>
    </div>
  );
}
