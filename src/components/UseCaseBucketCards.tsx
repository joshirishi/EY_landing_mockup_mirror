import type { CSSProperties } from "react";
import { PlusCircle, X } from "lucide-react";
import {
  USE_CASE_BUCKETS,
  type UseCaseBucketId,
} from "../data/use-case-buckets";
import { colors, fonts } from "../design-kit/tokens";

type Props = {
  entries: Record<UseCaseBucketId, string[]>;
  editable?: boolean;
  drafts?: Record<UseCaseBucketId, string>;
  onDraftChange?: (bucketId: UseCaseBucketId, value: string) => void;
  onAdd?: (bucketId: UseCaseBucketId) => void;
  onRemove?: (bucketId: UseCaseBucketId, index: number) => void;
  sectionId?: string;
};

const cardBase: CSSProperties = {
  background: colors.eyBgCard,
  border: `1px solid ${colors.borderOnDark}`,
  borderRadius: 10,
  padding: "clamp(20px, 2.5vw, 28px)",
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  minHeight: 320,
};

export function UseCaseBucketCards({
  entries,
  editable = false,
  drafts,
  onDraftChange,
  onAdd,
  onRemove,
  sectionId = "use-case-buckets",
}: Props) {
  const focusRing = `2px solid ${colors.yellow}`;

  return (
    <>
      {editable && (
        <style>{`
          #${sectionId} input::placeholder {
            color: rgba(255, 255, 255, 0.45);
          }
        `}</style>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(16px, 2vw, 24px)",
          alignItems: "stretch",
        }}
      >
        {USE_CASE_BUCKETS.map((bucket) => {
          const bucketEntries = entries[bucket.id];
          const isEmpty = bucketEntries.length === 0;
          const draftValue = drafts?.[bucket.id] ?? "";

          return (
            <div
              key={bucket.id}
              style={{
                ...cardBase,
                borderTop: `3px solid ${bucket.accent}`,
              }}
            >
              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: bucket.chipText,
                    background: bucket.accent,
                    borderRadius: 4,
                    padding: "3px 10px",
                  }}
                >
                  {bucket.label}
                </span>
              </div>
              <p
                style={{
                  fontFamily: fonts.regular,
                  fontSize: 13,
                  color: colors.onDarkMuted,
                  margin: "0 0 16px",
                  lineHeight: 1.45,
                }}
              >
                {bucket.hint}
              </p>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  border: `1.5px dashed ${isEmpty ? colors.borderOnDark : `${bucket.accent}88`}`,
                  borderRadius: 8,
                  padding: 14,
                  background: isEmpty ? colors.surfaceOnDark : "rgba(255,255,255,0.04)",
                  minHeight: 180,
                }}
              >
                {isEmpty ? (
                  <p
                    style={{
                      fontFamily: fonts.regular,
                      fontSize: 12,
                      color: colors.onDarkSubtle,
                      margin: 0,
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {editable
                      ? "No use cases yet — add your first idea below."
                      : "No use cases in this bucket."}
                  </p>
                ) : (
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      flex: 1,
                      overflowY: "auto",
                    }}
                  >
                    {bucketEntries.map((entry, index) => (
                      <li
                        key={`${bucket.id}-${index}-${entry}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "10px 12px",
                          borderRadius: 6,
                          background: colors.surfaceOnDark,
                          border: `1px solid ${colors.borderOnDark}`,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: bucket.accent,
                            flexShrink: 0,
                            marginTop: 6,
                          }}
                        />
                        <span
                          style={{
                            flex: 1,
                            fontFamily: fonts.regular,
                            fontSize: 13,
                            color: colors.onDark,
                            lineHeight: 1.45,
                          }}
                        >
                          {entry}
                        </span>
                        {editable && onRemove && (
                          <button
                            type="button"
                            onClick={() => onRemove(bucket.id, index)}
                            aria-label={`Remove use case from ${bucket.label}`}
                            style={{
                              border: "none",
                              background: "transparent",
                              cursor: "pointer",
                              padding: 2,
                              color: colors.onDarkMuted,
                              flexShrink: 0,
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.outline = focusRing;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.outline = "none";
                            }}
                          >
                            <X size={14} strokeWidth={1.75} aria-hidden />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {editable && onAdd && onDraftChange && (
                <div style={{ display: "flex", gap: 8, marginTop: 14, alignItems: "stretch" }}>
                  <input
                    type="text"
                    value={draftValue}
                    onChange={(e) => onDraftChange(bucket.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        onAdd(bucket.id);
                      }
                    }}
                    placeholder={bucket.placeholder}
                    aria-label={`Add ${bucket.label} use case`}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      fontFamily: fonts.regular,
                      fontSize: 13,
                      color: colors.onDark,
                      background: colors.surfaceOnDark,
                      border: `1px solid ${colors.borderOnDark}`,
                      borderRadius: 6,
                      padding: "10px 12px",
                      lineHeight: 1.4,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = focusRing;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = "none";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => onAdd(bucket.id)}
                    disabled={!draftValue.trim()}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: fonts.bold,
                      fontSize: 12,
                      fontWeight: 700,
                      color: draftValue.trim() ? colors.confidentBlack : colors.onDarkSubtle,
                      background: draftValue.trim() ? colors.yellow : colors.surfaceOnDark,
                      border: `1px solid ${draftValue.trim() ? colors.yellow : colors.borderOnDark}`,
                      borderRadius: 6,
                      padding: "10px 14px",
                      cursor: draftValue.trim() ? "pointer" : "not-allowed",
                      whiteSpace: "nowrap",
                    }}
                    onFocus={(e) => {
                      if (draftValue.trim()) e.currentTarget.style.outline = focusRing;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = "none";
                    }}
                  >
                    <PlusCircle size={14} strokeWidth={1.75} aria-hidden />
                    Add
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
