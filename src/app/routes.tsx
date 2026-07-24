import { createBrowserRouter, Outlet, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";

// ── ScaledCanvas ─────────────────────────────────────────────────────────────
// Wraps a fixed-pixel Figma export and scales it proportionally to fit the
// current viewport width. Uses ResizeObserver so it reacts to window resize.
function ScaledCanvas({ children, designWidth = 1416 }: { children: React.ReactNode; designWidth?: number }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [outerHeight, setOuterHeight] = useState(0);

  useEffect(() => {
    const computeScale = () => {
      const vw = document.documentElement.clientWidth;
      const s = Math.min(1, vw / designWidth);
      setScale(s);
      if (innerRef.current) {
        setOuterHeight(innerRef.current.scrollHeight * s);
      }
    };
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, [designWidth]);

  useEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(() => {
      if (!innerRef.current) return;
      setOuterHeight(innerRef.current.scrollHeight * scale);
    });
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [scale]);

  return (
    <div style={{ width: "100%", height: outerHeight || "auto", overflow: "hidden", position: "relative" }}>
      <div
        ref={innerRef}
        style={{ width: designWidth, transformOrigin: "top left", transform: `scale(${scale})`, position: "absolute", top: 0, left: 0 }}
      >
        {children}
      </div>
    </div>
  );
}
import Home from "../imports/Home2/index";
import { PhasedEngagementView, Phase1View } from "../imports/Frame353/index";
import FoundationalConcepts from "../pages/FoundationalConcepts";
import AiTaxPrompting from "../pages/AiTaxPrompting";
import M365CopilotHub from "../pages/M365CopilotHub";

// ── /  ──────────────────────────────────────────────────────────────────────
function HomeRoute() {
  const navigate = useNavigate();
  return (
    <div className="relative" style={{ width: 1416, height: 1150 }}>
      <Home />
      {/* Transparent overlay over the EY.ai Tax Labs card (3rd card) */}
      <div
        onClick={() => navigate("/phased")}
        title="Explore EY.ai Tax Labs"
        style={{
          position: "absolute",
          left: 946,
          top: 887,
          width: 429,
          height: 391,
          cursor: "pointer",
          zIndex: 10,
        }}
      />
    </div>
  );
}

// ── /phased  ─────────────────────────────────────────────────────────────────
// Note: no floating "Back to Home" button here anymore — the shared Nav/Nav1
// site header (rendered inside PhasedEngagementView) already provides a
// working "About EY India AI Tax Hub" link back to Home.
function PhasedRoute() {
  const navigate = useNavigate();
  return (
    <ScaledCanvas designWidth={1416}>
      <PhasedEngagementView onNavigateToPhase1={() => navigate("/phase1")} />
    </ScaledCanvas>
  );
}

// ── /phase1  ─────────────────────────────────────────────────────────────────
function Phase1Route() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", maxWidth: "100%", minWidth: 0 }}>
      <Phase1View
        onNavigate={navigate}
        onNavigateToFoundational={() => navigate("/foundational")}
        onNavigateToAiTaxPrompting={() => navigate("/ai-tax-prompting")}
        onNavigateToCopilotHub={() => navigate("/copilot-hub")}
      />
    </div>
  );
}

// ── /copilot-hub  ────────────────────────────────────────────────────────────
function CopilotHubRoute() {
  const navigate = useNavigate();
  return (
    <div className="size-full">
      <M365CopilotHub onBack={() => navigate("/phase1")} onNavigate={navigate} />
    </div>
  );
}

// ── /ai-tax-prompting  ───────────────────────────────────────────────────────
function AiTaxPromptingRoute() {
  const navigate = useNavigate();
  return (
    <div className="size-full">
      <AiTaxPrompting onBack={() => navigate("/phase1")} onNavigate={navigate} />
    </div>
  );
}

// ── /foundational  ──────────────────────────────────────────────────────────
function FoundationalRoute() {
  const navigate = useNavigate();
  return (
    <div className="size-full">
      <FoundationalConcepts onBack={() => navigate("/phase1")} onNavigate={navigate} />
    </div>
  );
}

// ── Root layout  ─────────────────────────────────────────────────────────────
function Root() {
  return (
    <div className="size-full overflow-auto bg-white">
      <Outlet />
    </div>
  );
}

// ── Router  ──────────────────────────────────────────────────────────────────
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeRoute },
      { path: "phased", Component: PhasedRoute },
      { path: "phase1", Component: Phase1Route },
      { path: "ai-tax-prompting", Component: AiTaxPromptingRoute },
      { path: "foundational", Component: FoundationalRoute },
      { path: "copilot-hub", Component: CopilotHubRoute },
    ],
  },
]);
