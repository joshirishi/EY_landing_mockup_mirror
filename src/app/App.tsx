import { useState } from "react";
import Home from "../imports/Home2/index";
import { PhasedEngagementView, Phase1View } from "../imports/Frame353/index";
import Module1 from "../pages/Module1";
import FoundationalConcepts from "../pages/FoundationalConcepts";

type Page = "home" | "phased" | "phase1" | "module1" | "foundational";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="size-full overflow-auto bg-white">
      {/* Back button — visible on non-home pages except module1 (it has its own nav) */}
      {page !== "home" && page !== "module1" && page !== "foundational" && (
        <button
          onClick={() => setPage(page === "phase1" ? "phased" : "home")}
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
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffe600";
            (e.currentTarget as HTMLButtonElement).style.color = "#2e2e38";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2e2e38";
            (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
          }}
        >
          ← {page === "phase1" ? "Back to Overview" : "Back to Home"}
        </button>
      )}

      {/* ── PAGE 1: Landing ── */}
      {page === "home" && (
        <div className="relative" style={{ width: 1416, height: 1150 }}>
          <Home />
          {/*
            Transparent click overlay over the EY.ai Tax Labs card (3rd card).
            Layout: Body top=107px + hero=632px + Section1 pad=40px + heading=108px = 887px top
            x: 40px padding + 429px card1 + 24px gap + 429px card2 + 24px gap = 946px
          */}
          <div
            onClick={() => setPage("phased")}
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
      )}

      {/* ── PAGE 2: Phased Engagement (interactive expandable timeline) ── */}
      {page === "phased" && (
        <div style={{ width: 1416 }}>
          <PhasedEngagementView onNavigateToPhase1={() => setPage("phase1")} />
        </div>
      )}

      {/* ── PAGE 3: Phase 1 detail ── */}
      {page === "phase1" && (
        <div style={{ width: 1720 }}>
          <Phase1View
            onNavigateToModule1={() => setPage("module1")}
            onNavigateToFoundational={() => setPage("foundational")}
          />
        </div>
      )}

      {/* ── PAGE 4: Module 1 — M365 Copilot interactive experience ── */}
      {page === "module1" && (
        <div className="size-full">
          <Module1 onBack={() => setPage("phase1")} />
        </div>
      )}

      {/* ── PAGE 5: Foundational Concepts of AI ── */}
      {page === "foundational" && (
        <div className="size-full">
          <FoundationalConcepts onBack={() => setPage("phase1")} />
        </div>
      )}
    </div>
  );
}
