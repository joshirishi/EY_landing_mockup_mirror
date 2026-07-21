import foundationalHtml from "../imports/Foundational_Concepts.html?raw";

export default function FoundationalConcepts({ onBack }: { onBack: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "var(--ey-bg-body)",
      }}
    >
      {/* Back navigation bar */}
      <div
        style={{
          background: "var(--ey-bg-nav)",
          borderBottom: "1px solid var(--ey-on-dark-12)",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={onBack}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--ey-brand-yellow)";
            (e.currentTarget as HTMLButtonElement).style.color = "#2e2e38";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--ey-brand-yellow)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "none";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--ey-on-dark)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--ey-on-dark-20)";
          }}
          style={{
            background: "none",
            border: "1px solid var(--ey-on-dark-20)",
            color: "var(--ey-on-dark)",
            padding: "7px 16px",
            cursor: "pointer",
            fontFamily: "'EYInterstate:Regular', sans-serif",
            fontSize: 13,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.15s, color 0.15s, border-color 0.15s",
          }}
        >
          ← Back to Phase 1
        </button>
        <span
          style={{
            color: "var(--ey-on-dark-72)",
            fontFamily: "'EYInterstate:Regular', sans-serif",
            fontSize: 13,
          }}
        >
          EY.ai Tax Labs
        </span>
        <span style={{ color: "var(--ey-on-dark-20)" }}>/</span>
        <span
          style={{
            color: "var(--ey-brand-yellow)",
            fontFamily: "'EYInterstate:Bold', sans-serif",
            fontSize: 13,
          }}
        >
          Foundational Concepts of AI
        </span>
      </div>

      {/* Full-page iframe embedding the original HTML */}
      <iframe
        srcDoc={foundationalHtml}
        style={{ flex: 1, border: "none", width: "100%", height: "100%" }}
        title="Foundational Concepts of AI"
      />
    </div>
  );
}
