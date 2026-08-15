/**
 * Workshop Reference Library — physical bookshelf metaphor.
 * Browse spines on shelves, pull a book forward, read its template in a modal.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  BookMarked,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Library,
  X,
} from "lucide-react";
import {
  PROMPT_LIBRARY,
  PROMPT_LIBRARY_FILTERS,
  type PromptLibraryCategory,
  type PromptLibraryEntry,
} from "@/data/prompt-library";
import { colors, fonts, spacing, typeScale } from "@/design-kit";

const CATEGORY_SPINE: Record<PromptLibraryCategory, string> = {
  Research: colors.frameBlue,
  Compliance: colors.frameGreen,
  "Planning and Communication": colors.framePurple,
  Data: colors.frameOrange,
};

const SPINE_HEIGHTS = [176, 192, 208, 224] as const;

type FilterId = "all" | PromptLibraryCategory;

function spineHeight(entry: PromptLibraryEntry) {
  return SPINE_HEIGHTS[entry.id % SPINE_HEIGHTS.length];
}

function shelfBoardStyle(): CSSProperties {
  return {
    width: "100%",
    height: 16,
    marginTop: 0,
    borderRadius: "0 0 4px 4px",
    background: `linear-gradient(180deg, ${colors.offBlack} 0%, ${colors.confidentBlack} 55%, ${colors.confidentBlack} 100%)`,
    boxShadow: `0 6px 16px ${colors.onDarkSubtle}, inset 0 1px 0 ${colors.onDarkMuted}`,
    position: "relative",
  };
}

function shelfLipStyle(): CSSProperties {
  return {
    position: "absolute",
    top: -3,
    left: 0,
    right: 0,
    height: 3,
    borderRadius: "2px 2px 0 0",
    background: `linear-gradient(180deg, ${colors.gray01}, ${colors.offBlack})`,
  };
}

export function PromptBookshelfLibrary() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROMPT_LIBRARY
        : PROMPT_LIBRARY.filter((p) => p.category === filter),
    [filter],
  );

  const selected = useMemo(
    () => filtered.find((b) => b.id === selectedId) ?? null,
    [filtered, selectedId],
  );

  const selectBook = useCallback((entry: PromptLibraryEntry) => {
    setSelectedId((prev) => (prev === entry.id ? null : entry.id));
    setSlide(0);
  }, []);

  const closeReading = useCallback(() => {
    setSelectedId(null);
  }, []);

  useEffect(() => {
    if (!selected) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeReading();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSlide((s) => Math.min(s + 1, selected.slides.length - 1));
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSlide((s) => Math.max(s - 1, 0));
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [selected, closeReading]);

  const activeFilterLabel =
    PROMPT_LIBRARY_FILTERS.find((f) => f.id === filter)?.label ?? "All";

  return (
    <div>
      {/* Library alcove — dark reading-room backdrop for the shelves */}
      <div
        style={{
          background: `linear-gradient(165deg, ${colors.confidentBlack} 0%, ${colors.offBlack} 48%, ${colors.confidentBlack} 100%)`,
          borderRadius: 12,
          padding: spacing.cardPadding,
          border: `1px solid ${colors.borderOnDark}`,
          boxShadow: `0 12px 40px ${colors.onDarkSubtle}`,
        }}
      >
        {/* Library header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 20,
            paddingBottom: 16,
            borderBottom: `1px solid ${colors.borderOnDark}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: colors.surfaceOnDark,
                border: `1px solid ${colors.borderOnDark}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.yellow,
              }}
              aria-hidden
            >
              <Library size={20} strokeWidth={1.75} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: fonts.bold,
                  fontSize: typeScale.label.size,
                  letterSpacing: typeScale.label.tracking,
                  textTransform: "uppercase",
                  color: colors.onDarkMuted,
                  margin: 0,
                }}
              >
                Reference shelf
              </p>
              <p
                style={{
                  fontFamily: fonts.regular,
                  fontSize: typeScale.body.size,
                  color: colors.onDark,
                  margin: "2px 0 0",
                }}
              >
                {filtered.length} template{filtered.length === 1 ? "" : "s"}
                {filter !== "all" ? ` · ${activeFilterLabel} section` : " · full collection"}
              </p>
            </div>
          </div>
          <p
            style={{
              fontFamily: fonts.light,
              fontSize: typeScale.caption.size,
              color: colors.onDarkSubtle,
              margin: 0,
              maxWidth: 280,
              lineHeight: 1.45,
            }}
          >
            Click a spine to open the template. Use arrow keys to turn pages.
          </p>
        </div>

        {/* Library section filters */}
        <div
          role="tablist"
          aria-label="Library sections"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {PROMPT_LIBRARY_FILTERS.map((f) => {
            const isActive = filter === f.id;
            const count =
              f.id === "all"
                ? PROMPT_LIBRARY.length
                : PROMPT_LIBRARY.filter((p) => p.category === f.id).length;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setFilter(f.id);
                  setSelectedId(null);
                  setSlide(0);
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: `1px solid ${isActive ? colors.yellow : colors.borderOnDark}`,
                  background: isActive ? colors.yellowAlpha12 : colors.surfaceOnDark,
                  color: isActive ? colors.yellow : colors.onDarkMuted,
                  fontFamily: isActive ? fonts.bold : fonts.regular,
                  fontSize: typeScale.caption.size,
                  fontWeight: isActive ? 700 : 400,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "border-color 150ms, background 150ms",
                }}
              >
                {f.label}
                <span
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: 10,
                    padding: "1px 6px",
                    borderRadius: 10,
                    background: isActive ? colors.yellowAlpha10 : colors.borderOnDark,
                    color: isActive ? colors.confidentBlack : colors.onDarkSubtle,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Single shelf — all books in one row, scroll on narrow viewports */}
        {filtered.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              padding: "48px 24px",
              fontFamily: fonts.regular,
              color: colors.onDarkMuted,
              margin: 0,
            }}
          >
            No templates in this section
          </p>
        ) : (
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                position: "relative",
                overflowX: "auto",
                overflowY: "visible",
                WebkitOverflowScrolling: "touch",
                paddingBottom: 4,
              }}
            >
              <div
                role="group"
                aria-label="Prompt template books"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  gap: 0,
                  minWidth: "min-content",
                  padding: "20px 8px 0",
                }}
              >
                {filtered.map((book) => {
                  const isSelected = selectedId === book.id;
                  const height = spineHeight(book);
                  const spineColor = CATEGORY_SPINE[book.category];
                  return (
                    <button
                      key={book.id}
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={`${book.name}, ${book.category}, book ${book.id}`}
                      onClick={() => selectBook(book)}
                      style={{
                        width: 62,
                        flexShrink: 0,
                        margin: "0 2px",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        transformOrigin: "bottom center",
                        transform: isSelected
                          ? "translateY(-18px) scale(1.05)"
                          : undefined,
                        transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: isSelected ? 12 : 1,
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.outline = `2px solid ${colors.yellow}`;
                        e.currentTarget.style.outlineOffset = "2px";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.outline = "none";
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                          e.currentTarget.style.zIndex = "8";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.zIndex = "1";
                        }
                      }}
                    >
                      <div
                        style={{
                          height,
                          borderRadius: "3px 6px 6px 3px",
                          background: `linear-gradient(90deg, ${colors.confidentBlack} 0%, ${spineColor} 12%, ${spineColor} 100%)`,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px 4px",
                          boxShadow: isSelected
                            ? `0 8px 20px ${colors.onDarkSubtle}, 0 0 0 2px ${colors.yellow}`
                            : `2px 4px 10px ${colors.onDarkSubtle}`,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* Spine edge highlight */}
                        <span
                          aria-hidden
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: 4,
                            background: colors.confidentBlack,
                            opacity: 0.45,
                          }}
                        />
                        <span
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            fontFamily: fonts.bold,
                            fontSize: typeScale.label.size,
                            fontWeight: typeScale.label.weight,
                            letterSpacing: typeScale.label.tracking,
                            color: colors.white,
                            maxHeight: height - 52,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {book.name}
                        </span>
                        <span
                          style={{
                            writingMode: "vertical-rl",
                            fontFamily: fonts.regular,
                            fontSize: typeScale.caption.size,
                            fontWeight: typeScale.caption.weight,
                            color: colors.onDarkMuted,
                            marginTop: 8,
                          }}
                        >
                          #{book.id}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Shelf board */}
            <div aria-hidden style={shelfBoardStyle()}>
              <div style={shelfLipStyle()} />
            </div>
            <div
              aria-hidden
              style={{
                height: 10,
                margin: "0 24px",
                background: colors.onDarkSubtle,
                filter: "blur(8px)",
                borderRadius: "50%",
                opacity: 0.5,
              }}
            />
          </div>
        )}
      </div>

      {/* Open book — modal reading panel (pattern: TemplatePreviewModal) */}
      {selected && (
        <div
          role="presentation"
          onClick={closeReading}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: `color-mix(in srgb, ${colors.confidentBlack} 72%, transparent)`,
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`reading-title-${selected.id}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 12,
              width: "min(92vw, 720px)",
              maxHeight: "92vh",
              animation: "bookshelfModalIn 220ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeReading}
              aria-label="Close book"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: colors.surfaceOnDark,
                border: `1px solid ${colors.borderOnDark}`,
                color: colors.onDark,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <X size={22} strokeWidth={1.75} aria-hidden />
            </button>
            <div
              role="region"
              aria-label={`Reading ${selected.name}`}
              style={{
                width: "100%",
                borderRadius: 12,
                overflow: "hidden",
                border: `1px solid ${colors.gray02}`,
                background: colors.white,
                boxShadow: `0 24px 64px color-mix(in srgb, ${colors.confidentBlack} 60%, transparent)`,
                maxHeight: "calc(92vh - 68px)",
                overflowY: "auto",
              }}
            >
          {/* Book header — cover strip */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              minHeight: 72,
              background: `linear-gradient(90deg, ${CATEGORY_SPINE[selected.category]} 0%, ${colors.offBlack} 100%)`,
            }}
          >
            <div
              style={{
                width: 72,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: colors.surfaceOnDark,
                borderRight: `1px solid ${colors.borderOnDark}`,
                color: colors.yellow,
              }}
              aria-hidden
            >
              <BookOpen size={28} strokeWidth={1.75} />
            </div>
            <div
              style={{
                flex: 1,
                padding: "14px 20px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <div>
                <h3
                  id={`reading-title-${selected.id}`}
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: typeScale.subheading.size,
                    color: colors.onDark,
                    margin: 0,
                    letterSpacing: typeScale.subheading.tracking,
                  }}
                >
                  {selected.name}
                </h3>
                <p
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: typeScale.caption.size,
                    color: colors.onDarkMuted,
                    margin: "4px 0 0",
                  }}
                >
                  {selected.category} · Template #{selected.id}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {selected.capabilities.map((cap) => (
                  <span
                    key={cap}
                    style={{
                      fontFamily: fonts.bold,
                      fontSize: 10,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 4,
                      background: colors.yellowAlpha12,
                      color: colors.yellow,
                      border: `1px solid ${colors.borderOnDark}`,
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Page content */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 0,
              minHeight: 240,
            }}
          >
            {/* Left page margin — book gutter */}
            <div
              aria-hidden
              style={{
                width: 28,
                flexShrink: 0,
                background: colors.offWhite,
                borderRight: `1px solid ${colors.gray02}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BookMarked size={14} strokeWidth={1.75} color={colors.gray01} />
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "28px 16px",
              }}
            >
              <button
                type="button"
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                disabled={slide === 0}
                aria-label="Previous page"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  border: `1px solid ${colors.gray02}`,
                  background: colors.offWhite,
                  cursor: slide === 0 ? "not-allowed" : "pointer",
                  opacity: slide === 0 ? 0.4 : 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.offBlack,
                  flexShrink: 0,
                }}
              >
                <ChevronLeft size={20} strokeWidth={1.75} />
              </button>

              <div style={{ flex: 1, textAlign: "center", padding: "0 8px" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: fonts.bold,
                    fontSize: typeScale.label.size,
                    letterSpacing: typeScale.label.tracking,
                    textTransform: "uppercase",
                    color: colors.eyebrowGoldDark,
                    marginBottom: 10,
                  }}
                >
                  {selected.slides[slide].sub}
                </span>
                <h4
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    color: colors.confidentBlack,
                    margin: "0 0 12px",
                    letterSpacing: typeScale.h2.tracking,
                  }}
                >
                  {selected.slides[slide].title}
                </h4>
                <p
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: typeScale.body.size,
                    color: colors.gray01,
                    lineHeight: 1.6,
                    margin: "0 auto",
                    maxWidth: 560,
                  }}
                >
                  {selected.slides[slide].body}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSlide((s) => Math.min(selected.slides.length - 1, s + 1))
                }
                disabled={slide === selected.slides.length - 1}
                aria-label="Next page"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  border: `1px solid ${colors.gray02}`,
                  background: colors.offWhite,
                  cursor:
                    slide === selected.slides.length - 1 ? "not-allowed" : "pointer",
                  opacity: slide === selected.slides.length - 1 ? 0.4 : 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.offBlack,
                  flexShrink: 0,
                }}
              >
                <ChevronRight size={20} strokeWidth={1.75} />
              </button>
            </div>

            {/* Right page margin */}
            <div
              aria-hidden
              style={{
                width: 28,
                flexShrink: 0,
                background: colors.offWhite,
                borderLeft: `1px solid ${colors.gray02}`,
              }}
            />
          </div>

          {/* Page tabs + footer */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "12px 20px 16px",
              borderTop: `1px solid ${colors.gray02}`,
              background: colors.offWhite,
            }}
          >
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {selected.slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Page ${i + 1}`}
                  aria-current={i === slide ? "page" : undefined}
                  style={{
                    padding: "5px 10px",
                    borderRadius: 4,
                    border: `1px solid ${i === slide ? colors.confidentBlack : colors.gray02}`,
                    background: i === slide ? colors.yellow : colors.white,
                    fontFamily: fonts.regular,
                    fontSize: typeScale.caption.size,
                    color: colors.offBlack,
                    cursor: "pointer",
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <p
              style={{
                fontFamily: fonts.regular,
                fontSize: typeScale.caption.size,
                color: colors.gray01,
                margin: 0,
              }}
            >
              Page {slide + 1} of {selected.slides.length}
            </p>
          </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes bookshelfModalIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
