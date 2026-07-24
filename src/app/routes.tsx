import { createBrowserRouter, Outlet, useNavigate } from "react-router";
import Home from "../imports/Home2/index";
import { PhasedEngagementView, Phase1View } from "../imports/Frame353/index";
import FoundationalConcepts from "../pages/FoundationalConcepts";
import AiTaxPrompting from "../pages/AiTaxPrompting";
import M365CopilotHub from "../pages/M365CopilotHub";

// ── /  ──────────────────────────────────────────────────────────────────────
function HomeRoute() {
  return (
    <div className="relative w-full max-w-full min-w-0 overflow-x-hidden">
      <Home />
    </div>
  );
}

// ── /phased  ─────────────────────────────────────────────────────────────────
// Fluid layout (same pattern as /phase1) — no ScaledCanvas zoom-shrink.
function PhasedRoute() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full max-w-full min-w-0 overflow-x-hidden">
      <PhasedEngagementView onNavigateToPhase1={() => navigate("/phase1")} />
    </div>
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
