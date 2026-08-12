/**
 * Bookshelf prompt library — Priya HTML interaction, restyled with EY tokens.
 */

import { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  PROMPT_LIBRARY,
  PROMPT_LIBRARY_FILTERS,
  type PromptLibraryCategory,
  type PromptLibraryEntry,
} from "@/data/prompt-library";
import { colors, fonts, typeScale } from "@/design-kit";

const SPINE_COLORS = [
  colors.confidentBlack,
  colors.frameBlue,
  colors.frameGreen,
  colors.framePurple,
  colors.offBlack,
  colors.frameTeal,
  colors.frameMagenta,
  colors.frameOrange,
  colors.frameRed,
  colors.frameLime,
] as const;

const SPINE_HEIGHTS = [180, 200, 220, 235] as const;
const BOOKS_PER_SHELF = 8;

type FilterId = "all" | PromptLibraryCategory;

function spineStyle(entry: PromptLibraryEntry, shelfIndex: number) {
  const color = SPINE_COLORS[(entry.id - 1) % SPINE_COLORS.length];
  const height = SPINE_HEIGHTS[(entry.id + shelfIndex) % SPINE_HEIGHTS.length];
  return { background: color, height };
}

export function PromptBookshelfLibrary() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [active, setActive] = useState<PromptLibraryEntry | null>(null);
  const [slide, setSlide] = useState(0);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROMPT_LIBRARY
        : PROMPT_LIBRARY.filter((p) => p.category === filter),
    [filter],
  );

  const shelves = useMemo(() => {
    const rows: PromptLibraryEntry[][] = [];
    for (let i = 0; i < filtered.length; i += BOOKS_PER_SHELF) {
      rows.push(filtered.slice(i, i + BOOKS_PER_SHELF));
    }
    return rows;
  }, [filtered]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setSlide((s) => Math.min(s + 1, active.slides.length - 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const openBook = (entry: PromptLibraryEntry) => {
    setActive(entry);
    setSlide(0);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 28,
        }}
      >
        {PROMPT_LIBRARY_FILTERS.map((f) => {
          const isActive = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              style={{
                padding: "7px 18px",
                borderRadius: 20,
                border: `1px solid ${isActive ? colors.confidentBlack : colors.gray02}`,
                background: isActive ? colors.yellow : colors.white,
                color: colors.confidentBlack,
                fontFamily: isActive ? fonts.bold : fonts.regular,
                fontSize: 13,
                fontWeight: isActive ? 700 : 400,
                cursor: "pointer",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {shelves.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            padding: 48,
            fontFamily: fonts.regular,
            color: colors.gray01,
            margin: 0,
          }}
        >
          No templates in this category
        </p>
      ) : (
        shelves.map((books, shelfIdx) => (
          <div
            key={shelfIdx}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 0,
              padding: "28px 12px 0",
              marginBottom: 8,
            }}
          >
            {books.map((book, i) => {
              const spine = spineStyle(book, i);
              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => openBook(book)}
                  title={`${book.name} — ${book.category}`}
                  aria-label={`Open ${book.name} template`}
                  style={{
                    width: 58,
                    margin: "0 3px",
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    transformOrigin: "bottom center",
                    transition: "transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-12px) scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "none";
                  }}
                >
                  <div
                    style={{
                      ...spine,
                      borderRadius: "3px 6px 6px 3px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px 4px",
                      boxShadow: "2px 2px 8px rgba(0,0,0,0.25)",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        fontFamily: fonts.bold,
                        fontSize: 11,
                        color: colors.white,
                        letterSpacing: "0.04em",
                        maxHeight: spine.height - 40,
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
                        fontSize: 9,
                        color: "rgba(255,255,255,0.55)",
                        marginTop: 6,
                      }}
                    >
                      #{book.id}
                    </span>
                  </div>
                </button>
              );
            })}
            <div
              aria-hidden
              style={{
                width: "100%",
                height: 14,
                marginTop: 0,
                background: colors.confidentBlack,
                borderRadius: "0 0 4px 4px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        ))
      )}

      {/* Discussion prompt */}
      <div
        style={{
          marginTop: 24,
          background: colors.yellow,
          borderRadius: 8,
          padding: "18px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <p
          style={{
            fontFamily: fonts.bold,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: colors.confidentBlack,
            margin: 0,
          }}
        >
          Discussion prompt
        </p>
        <p
          style={{
            fontFamily: fonts.regular,
            fontSize: 15,
            color: colors.offBlack,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Which recurring tax activity would benefit from stronger extraction, comparison, analysis, explanation, validation or a first draft?
        </p>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ppt-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <button
            type="button"
            aria-label="Close overlay"
            onClick={() => setActive(null)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(26,26,36,0.72)",
              border: "none",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "min(920px, 100%)",
              maxHeight: "90vh",
              overflow: "auto",
              background: colors.white,
              borderRadius: 12,
              boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "16px 20px",
                borderBottom: `1px solid ${colors.gray02}`,
              }}
            >
              <h3
                id="ppt-title"
                style={{
                  fontFamily: fonts.bold,
                  fontSize: 20,
                  color: colors.confidentBlack,
                  margin: 0,
                }}
              >
                {active.name}
              </h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: `1px solid ${colors.gray02}`,
                  background: colors.offWhite,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.offBlack,
                }}
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "28px 20px",
                minHeight: 280,
              }}
            >
              <button
                type="button"
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                disabled={slide === 0}
                aria-label="Previous slide"
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

              <div style={{ flex: 1, textAlign: "center", padding: "0 12px" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: colors.yellow,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.confidentBlack,
                    marginBottom: 16,
                  }}
                >
                  <BookOpen size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h4
                  style={{
                    fontFamily: fonts.bold,
                    fontSize: "clamp(22px, 3vw, 32px)",
                    color: colors.confidentBlack,
                    margin: "0 0 10px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {active.slides[slide].title}
                </h4>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: fonts.bold,
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: colors.eyebrowGoldDark,
                    marginBottom: 14,
                  }}
                >
                  {active.slides[slide].sub}
                </span>
                <p
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: typeScale.body.size,
                    color: colors.gray01,
                    lineHeight: 1.6,
                    margin: "0 auto",
                    maxWidth: 520,
                  }}
                >
                  {active.slides[slide].body}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSlide((s) => Math.min(active.slides.length - 1, s + 1))}
                disabled={slide === active.slides.length - 1}
                aria-label="Next slide"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  border: `1px solid ${colors.gray02}`,
                  background: colors.offWhite,
                  cursor: slide === active.slides.length - 1 ? "not-allowed" : "pointer",
                  opacity: slide === active.slides.length - 1 ? 0.4 : 1,
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

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "0 20px 16px",
              }}
            >
              {active.slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: `1px solid ${i === slide ? colors.confidentBlack : colors.gray02}`,
                    background: i === slide ? colors.yellow : colors.offWhite,
                    fontFamily: fonts.regular,
                    fontSize: 12,
                    color: colors.offBlack,
                    cursor: "pointer",
                  }}
                >
                  Slide {i + 1}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px 20px 20px",
                borderTop: `1px solid ${colors.gray02}`,
                fontFamily: fonts.regular,
                fontSize: 13,
                color: colors.gray01,
              }}
            >
              {slide + 1} / {active.slides.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
