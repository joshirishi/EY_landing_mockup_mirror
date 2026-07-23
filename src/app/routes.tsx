import { createBrowserRouter, Outlet, useNavigate } from "react-router";
import Home from "../imports/Home2/index";
import { PhasedEngagementView, Phase1View } from "../imports/Frame353/index";
import Module1 from "../pages/Module1";
import FoundationalConcepts from "../pages/FoundationalConcepts";

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
function PhasedRoute() {
  const navigate = useNavigate();
  return (
    <>
      <BackButton label="Back to Home" onClick={() => navigate("/")} />
      <div style={{ width: 1416 }}>
        <PhasedEngagementView onNavigateToPhase1={() => navigate("/phase1")} />
      </div>
    </>
  );
}

// ── /phase1  ─────────────────────────────────────────────────────────────────
function Phase1Route() {
  const navigate = useNavigate();
  return (
    <>
      <BackButton label="Back to Overview" onClick={() => navigate("/phased")} />
      <div style={{ width: 1720 }}>
        <Phase1View
          onNavigateToModule1={() => navigate("/module1")}
          onNavigateToFoundational={() => navigate("/foundational")}
        />
      </div>
    </>
  );
}

// ── /module1  ────────────────────────────────────────────────────────────────
function Module1Route() {
  const navigate = useNavigate();
  return (
    <div className="size-full">
      <Module1 onBack={() => navigate("/phase1")} />
    </div>
  );
}

// ── /foundational  ──────────────────────────────────────────────────────────
function FoundationalRoute() {
  const navigate = useNavigate();
  return (
    <div className="size-full">
      <FoundationalConcepts onBack={() => navigate("/phase1")} />
    </div>
  );
}

// ── Shared back button  ──────────────────────────────────────────────────────
function BackButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffe600";
        (e.currentTarget as HTMLButtonElement).style.color = "#2e2e38";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2e2e38";
        (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
      }}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 9999,
        backgroundColor: "#2e2e38",
        color: "#ffffff",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        fontFamily: "'EYInterstate:Regular', sans-serif",
        fontSize: 13,
        letterSpacing: "0.02em",
        display: "flex",
        alignItems: "center",
        gap: 8,
        transition: "background-color 0.15s, color 0.15s",
      }}
    >
      ← {label}
    </button>
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
      { path: "module1", Component: Module1Route },
      { path: "foundational", Component: FoundationalRoute },
    ],
  },
]);
