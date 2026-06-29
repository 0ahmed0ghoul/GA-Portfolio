// ShowProjects.jsx
// Awwwards-inspired editorial project showcase
// Navigation: scroll wheel · swipe · keyboard ← → · bottom arrows · dot pills

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { all_projects } from "../constants";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Code2, ChevronLeft } from "lucide-react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// Cinematic easing — identical acceleration curve to premium agency sites
const EASE = [0.76, 0, 0.24, 1];

// Parse tech string → clean array (handles spaces, commas, mixed)
const parseTechs = (raw) => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return raw.split(/[\s,]+/).filter(Boolean);
};

// ── Framer Motion variants ────────────────────────────────────────────────────

// Image: clip-path wipe left↔right depending on direction
const imgV = {
  enter: (d) => ({
    clipPath: d > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    opacity:  0.4,
  }),
  center: {
    clipPath: "inset(0 0 0 0%)",
    opacity:  1,
    transition: { duration: 0.9, ease: EASE },
  },
  exit: (d) => ({
    clipPath: d > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    opacity:  0,
    transition: { duration: 0.55, ease: EASE },
  }),
};

// Info panel: fade + slide up
const infoV = {
  enter: { opacity: 0, y: 28 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration:      0.6,
      ease:          "easeOut",
      delay:         0.18,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const childV = {
  enter:  { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit:   { opacity: 0 },
};

// Giant background number: cross-fade + slight drift
const numV = {
  enter:  (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
  center: { opacity: 0.04, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit:   { opacity: 0,    transition: { duration: 0.35 } },
};

// ── Main component ────────────────────────────────────────────────────────────
const ShowProjects = () => {
  const [idx, setIdx]   = useState(0);
  const [dir, setDir]   = useState(1);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const navigate        = useNavigate();
  const reduceMotion    = useReducedMotion();
  const wheelBlock      = useRef(null);
  const touchX          = useRef(0);

  const total   = all_projects.length;
  const project = all_projects[idx];
  const techs   = parseTechs(project.techs);

  const go = useCallback((d) => {
    setDir(d);
    setIdx((p) => ((p + d) + total) % total);
  }, [total]);

  // Keyboard
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(-1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [go]);

  // Wheel (throttled — one step per 900 ms)
  useEffect(() => {
    const fn = (e) => {
      e.preventDefault();
      if (wheelBlock.current) return;
      go(e.deltaY > 0 ? 1 : -1);
      wheelBlock.current = setTimeout(() => { wheelBlock.current = null; }, 900);
    };
    window.addEventListener("wheel", fn, { passive: false });
    return () => window.removeEventListener("wheel", fn);
  }, [go]);

  // Touch swipe
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const delta = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 55) go(delta > 0 ? 1 : -1);
  };

  // Cursor tracking (for the amber dot)
  const onMouseMove  = (e) => setCursor({ x: e.clientX, y: e.clientY });

  // Jump to specific index
  const jumpTo = (i) => { setDir(i > idx ? 1 : -1); setIdx(i); };

  return (
    <div
      id="proj"
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: INK }}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Paper grain */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-sp">
          <feTurbulence type="fractalNoise" baseFrequency="0.85"
                        numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-sp)" />
      </svg>

      {/* Amber cursor dot */}
      <motion.div
        aria-hidden="true"
        className="fixed z-[999] pointer-events-none rounded-full"
        style={{
          width:           8,
          height:          8,
          marginLeft:      -4,
          marginTop:       -4,
          backgroundColor: AMBER,
          mixBlendMode:    "difference",
        }}
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ duration: 0.07, ease: "linear" }}
      />

      {/* ── Giant background project number ── */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={`num-${idx}`}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          custom={dir}
          variants={reduceMotion ? {} : numV}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <span
            style={{
              fontFamily:    "'Space Grotesk', sans-serif",
              fontSize:      "clamp(180px, 28vw, 360px)",
              fontWeight:    800,
              color:         PAPER,
              lineHeight:    1,
              letterSpacing: "-0.06em",
              opacity:       1, // actual opacity set via variants above
            }}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* ── Top bar ── */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between
                   px-5 sm:px-8 lg:px-10 pt-5 pb-3"
      >
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group flex items-center gap-1.5 font-mono text-xs
                     transition-colors duration-200
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: ASH, outlineColor: AMBER }}
          onMouseEnter={(e) => (e.currentTarget.style.color = PAPER)}
          onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
        >
          <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back
        </button>

        {/* Counter + dots */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5">
            {all_projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Project ${i + 1}`}
                className="transition-all duration-300
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  height:          4,
                  width:           i === idx ? 22 : 6,
                  borderRadius:    2,
                  backgroundColor: i === idx ? AMBER : BORDER,
                  outlineColor:    AMBER,
                }}
              />
            ))}
          </div>

          <span className="font-mono text-xs" style={{ color: ASH }}>
            <span style={{ color: AMBER }}>{String(idx + 1).padStart(2, "0")}</span>
            {" / "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Content: image (left 58%) + info (right 42%) ── */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">

        {/* Image panel */}
        <div className="relative w-full lg:w-[58%] h-[45vh] lg:h-full overflow-hidden shrink-0">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`img-${idx}`}
              className="absolute inset-0"
              custom={dir}
              variants={reduceMotion ? {} : imgV}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={project.imgURL}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Gradient scrim — darkens right edge for bleed into info panel */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: [
                    `linear-gradient(to right, transparent 55%, ${INK}E0)`,
                    `linear-gradient(to top, ${INK}BB 0%, transparent 40%)`,
                  ].join(", "),
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Category badge (absolute inside image panel) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${idx}`}
              className="absolute bottom-5 left-5 z-10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.4 } }}
              exit={{ opacity: 0 }}
            >
              <span
                className="font-mono text-[9px] uppercase tracking-[0.28em] px-3 py-1.5"
                style={{
                  color:           AMBER,
                  border:          `1px solid ${AMBER}45`,
                  backgroundColor: `${INK}bb`,
                  backdropFilter:  "blur(6px)",
                }}
              >
                {project.category ?? "project"}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info panel */}
        <div
          className="relative w-full lg:w-[42%] flex flex-col justify-center
                     px-6 sm:px-10 lg:px-12 xl:px-16
                     py-8 lg:py-0
                     overflow-y-auto"
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`info-${idx}`}
              custom={dir}
              variants={infoV}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-5 max-w-lg"
            >
              {/* Eyebrow */}
              <motion.p
                variants={childV}
                className="font-mono text-[11px]"
                style={{ color: ASH }}
              >
                // project_{String(idx + 1).padStart(2, "0")}
              </motion.p>

              {/* Title */}
              <motion.h1
                variants={childV}
                className="leading-tight"
                style={{
                  fontFamily:    "'Space Grotesk', sans-serif",
                  fontSize:      "clamp(22px, 3vw, 44px)",
                  fontWeight:    600,
                  color:         PAPER,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </motion.h1>

              {/* Hairline */}
              <motion.div
                variants={childV}
                style={{ height: 1, backgroundColor: BORDER }}
              />

              {/* Description */}
              <motion.p
                variants={childV}
                className="text-sm leading-relaxed"
                style={{ color: BODY }}
              >
                {project.desc}
              </motion.p>

              {/* Tech stack — code-literal array */}
              {techs.length > 0 && (
                <motion.div
                  variants={childV}
                  className="font-mono text-[11px] leading-6"
                >
                  <p style={{ color: ASH }}>stack: [</p>
                  <p className="pl-4" style={{ color: AMBER }}>
                    {techs.map((t, i) => (
                      <span key={i}>
                        &ldquo;{t}&rdquo;{i < techs.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p style={{ color: ASH }}>]</p>
                </motion.div>
              )}

              {/* Links */}
              <motion.div
                variants={childV}
                className="flex flex-wrap gap-3 pt-1"
              >
                {project.demoURL && (
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5
                               transition-opacity duration-200 hover:opacity-80
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: AMBER, color: INK, outlineColor: AMBER }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
                {project.githubURL && (
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5
                               transition-colors duration-200
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      border:      `1px solid ${BORDER}`,
                      color:       ASH,
                      outlineColor: AMBER,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = PAPER)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                )}
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom amber progress bar ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] z-30 transition-all duration-700"
        style={{
          backgroundColor: AMBER,
          width:           `${((idx + 1) / total) * 100}%`,
          transition:      "width 0.7s cubic-bezier(0.76,0,0.24,1)",
        }}
      />

      {/* ── Bottom navigation arrows + keyboard hint ── */}
      <div
        className="absolute bottom-5 right-5 sm:right-8 z-30
                   flex items-center gap-2"
      >
        <p
          className="hidden sm:block font-mono text-[10px] mr-3"
          style={{ color: BORDER }}
        >
          ← → navigate
        </p>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="w-9 h-9 flex items-center justify-center
                     transition-colors duration-200
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            border:          `1px solid ${BORDER}`,
            backgroundColor: `${SURFACE}d9`,
            backdropFilter:  "blur(8px)",
            color:           ASH,
            outlineColor:    AMBER,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
          onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="w-9 h-9 flex items-center justify-center
                     transition-colors duration-200
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            border:          `1px solid ${BORDER}`,
            backgroundColor: `${SURFACE}d9`,
            backdropFilter:  "blur(8px)",
            color:           ASH,
            outlineColor:    AMBER,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
          onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default ShowProjects;