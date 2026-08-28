/** Canonical M365 agent icon — exported from Figma node 3837:4160. */
export const AGENT_HEX_SRC = "/reference-images/m365-chat-tour/agent-hex.png";

export function AgentHexIcon({ size = 16 }: { size?: number }) {
  return (
    <img
      src={AGENT_HEX_SRC}
      alt=""
      width={size}
      height={size}
      draggable={false}
      style={{ width: size, height: size, objectFit: "contain", display: "block", flexShrink: 0 }}
    />
  );
}

/** Copilot / Agent Builder brand mark — same hex asset as agents. */
export function CopilotHex({ size }: { size: number }) {
  return <AgentHexIcon size={size} />;
}
