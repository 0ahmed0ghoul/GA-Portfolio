
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Star, Quote } from "lucide-react";
import { reviews } from "../constants";

// ── Design tokens ─────────────────────────────────────────────────────────────
const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// ── Role colours (same as EducExper / ContactMe branches) ─────────────────────
const STATUS = {
  "Internship Supervisor": { color: AMBER,     label: "Supervisor" },
  "My Teacher":            { color: "#9b8fc0", label: "Teacher"    },
  "Client":                { color: "#6b9eb2", label: "Client"     },
};

// ── 3D geometry constants ─────────────────────────────────────────────────────
const CARD_W    = 300;   // card face width  (px)
const CARD_H    = 430;   // card face height (px)
const SPREAD    = 220;   // horizontal gap between card centres
const Z_STEP    = 135;   // translateZ reduction per step
const ROT_STEP  = 50;    // rotateY per step (capped at offset ±2)
const SCALE_DEC = 0.17;  // scale reduction per step
const OPA_DEC   = 0.23;  // opacity reduction per step

// ── Helpers ───────────────────────────────────────────────────────────────────
// Normalise index into [-floor(n/2), floor(n/2)] for infinite looping
const getOffset = (i, active, n) => {
  let o = ((i - active) + n) % n;
  if (o > Math.floor(n / 2)) o -= n;
  return o;
};

// Compute every animated value from a single offset number
const pose = (offset) => {
  const abs  = Math.abs(offset);
  const sign = Math.sign(offset);
  return {
    x:       offset * SPREAD,
    z:       -abs * Z_STEP,
    rotateY: -(sign * Math.min(abs, 2) * ROT_STEP),
    scale:   Math.max(1 - abs * SCALE_DEC, 0.44),
    opacity: abs > 2 ? 0 : Math.max(1 - abs * OPA_DEC, 0.18),
  };
};

// Shared spring used for every card position update
const SPRING = { type: "spring", stiffness: 260, damping: 28, mass: 0.9 };

// ── Five stars ────────────────────────────────────────────────────────────────
const Stars = ({ lit }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} className="fill-current" style={{ width: 11, height: 11, color: lit ? AMBER : ASH }} />
    ))}
  </div>
);

// ── Card face (renders in both main position and reflection) ──────────────────
const CardFace = ({ review, isActive }) => {
  const { t } = useTranslation();
  const meta  = STATUS[review.status] ?? STATUS["Client"];

  return (
    <div
      style={{
        width:           CARD_W,
        height:          CARD_H,
        backgroundColor: SURFACE,
        border:          `1px solid ${isActive ? `${meta.color}55` : BORDER}`,
        borderTop:       `3px solid ${meta.color}`,
        boxShadow: isActive
          ? `0 40px 90px rgba(0,0,0,0.72), 0 0 60px ${meta.color}12`
          : "0 10px 30px rgba(0,0,0,0.5)",
        display:         "flex",
        flexDirection:   "column",
        overflow:        "hidden",
        transition:      "border-color .4s, box-shadow .4s",
        userSelect:      "none",
        position:        "relative",
      }}
    >
      {/* Top bar — status badge + institution / project logo */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span
          className="font-mono text-[9px] uppercase tracking-wide px-2 py-0.5"
          style={{
            color:           meta.color,
            border:          `1px solid ${meta.color}30`,
            backgroundColor: `${meta.color}0e`,
          }}
        >
          {meta.label}
        </span>

        {review.logo && (
          <img
            src={review.logo}
            alt=""
            aria-hidden="true"
            style={{
              width:      28,
              height:     28,
              objectFit:  "contain",
              opacity:    isActive ? 0.88 : 0.5,
              transition: "opacity .3s",
            }}
          />
        )}
      </div>

      {/* Person */}
      <div className="flex items-center gap-3 px-4 py-3 shrink-0">
        <img
          src={review.imgURL}
          alt={t(`testimonials.${review.nameKey}`)}
          className="rounded-full object-cover shrink-0"
          style={{
            width:      isActive ? 50 : 36,
            height:     isActive ? 50 : 36,
            border:     `2px solid ${meta.color}45`,
            transition: "width .35s, height .35s",
          }}
        />
        <div className="min-w-0 flex-1">
          <p
            className="font-semibold leading-tight truncate"
            style={{
              color:      PAPER,
              fontSize:   isActive ? 14 : 12,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "font-size .35s",
            }}
          >
            {t(`testimonials.${review.nameKey}`)}
          </p>
          <p className="font-mono text-[10px] mt-0.5 leading-tight truncate" style={{ color: ASH }}>
            {t(`testimonials.${review.professionKey}`)}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="px-4 pb-2.5 shrink-0">
        <Stars lit={isActive} />
      </div>

      {/* Quote */}
      <div className="flex-1 px-4 pb-3 overflow-hidden">
        <blockquote className="relative pl-3" style={{ borderLeft: `2px solid ${meta.color}38` }}>
          <Quote
            aria-hidden="true"
            className="absolute -top-0.5 -left-0.5 opacity-20"
            style={{ color: meta.color, width: 12, height: 12 }}
          />
          <p
            className="text-xs leading-relaxed"
            style={{
              color:           BODY,
              display:         "-webkit-box",
              WebkitLineClamp: isActive ? 11 : 5,
              WebkitBoxOrient: "vertical",
              overflow:        "hidden",
            }}
          >
            {t(`testimonials.${review.feedbackKey}`)}
          </p>
        </blockquote>
      </div>

      {/* Links — slide open only on active card */}
      <div
        style={{
          borderTop:  `1px solid ${BORDER}`,
          padding:    "8px 16px",
          display:    "flex",
          gap:        14,
          maxHeight:  isActive ? 40 : 0,
          opacity:    isActive ? 1 : 0,
          overflow:   "hidden",
          transition: "max-height .4s, opacity .3s",
          flexShrink: 0,
        }}
      >
        {review.linkedin && (
          <a
            href={review.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: AMBER, outlineColor: AMBER }}
            onClick={(e) => e.stopPropagation()}
          >
            LinkedIn <ExternalLink style={{ width: 9, height: 9 }} />
          </a>
        )}
        {review.website && (
          <a
            href={review.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: meta.color, outlineColor: meta.color }}
            onClick={(e) => e.stopPropagation()}
          >
            Visit project <ExternalLink style={{ width: 9, height: 9 }} />
          </a>
        )}
      </div>
    </div>
  );
};

// ── Main section ──────────────────────────────────────────────────────────────
const Testimonials = () => {
  const { t } = useTranslation();
  const n = reviews.length;

  const [active, setActive] = useState(0);
  const [tilt, setTilt]     = useState({ x: 0, y: 0 });

  const sectionRef  = useRef(null);
  const containerRef = useRef(null);
  const wheelBlock  = useRef(null);
  const dragStart   = useRef(null);

  const go = useCallback((dir) => {
    setActive((p) => ((p + dir) + n) % n);
  }, [n]);

  // ── Keyboard ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowLeft")  go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [go]);

  // ── Mouse wheel (must be non-passive to call preventDefault) ───────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const fn = (e) => {
      e.preventDefault();
      if (wheelBlock.current) return;
      go(e.deltaX !== 0 ? Math.sign(e.deltaX) : Math.sign(e.deltaY));
      wheelBlock.current = setTimeout(() => { wheelBlock.current = null; }, 720);
    };
    el.addEventListener("wheel", fn, { passive: false });
    return () => el.removeEventListener("wheel", fn);
  }, [go]);

  // ── Mouse parallax ──────────────────────────────────────────────────────────
  const onMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({
      x: ((e.clientX - r.left)  / r.width  - 0.5) * 2,
      y: ((e.clientY - r.top)   / r.height - 0.5) * 2,
    });
  };

  // ── Drag / touch ────────────────────────────────────────────────────────────
  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp   = (e) => {
    if (dragStart.current === null) return;
    const d = e.clientX - dragStart.current;
    if (Math.abs(d) > 55) go(d < 0 ? 1 : -1);
    dragStart.current = null;
  };

  const activeMeta = STATUS[reviews[active].status] ?? STATUS["Client"];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: INK }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Paper grain */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-test">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-test)" />
      </svg>

      {/* Ambient colour glow — updates colour with active card */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        animate={{ opacity: 1 }}
        style={{
          width:      700,
          height:     500,
          background: `radial-gradient(ellipse at center, ${activeMeta.color}07 0%, transparent 68%)`,
          filter:     "blur(48px)",
          transition: "background 0.8s",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
            // testimonials
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
          >
            {t("testimonials.title_part1")}{" "}
            <span style={{ color: AMBER }}>{t("testimonials.title_part2")}</span>
          </h2>
          <p
            className="mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* ── 3D Carousel ──────────────────────────────────────────────────── */}
        <div
          ref={containerRef}
          className="relative select-none"
          style={{ height: CARD_H + 130 }} // +130 for reflection + padding
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/*
           * Perspective lives on a static div so it is never transformed.
           * This prevents the perspective frustum from rotating with the tilt.
           */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
          >
            {/*
             * Tilt container — receives the mouse-parallax rotateX / rotateY.
             * preserve-3d is essential so all card slots inherit the 3D context.
             */}
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                position:       "relative",
                width:          0,
                height:         0,
              }}
              animate={{
                rotateY: tilt.x * 4,
                rotateX: tilt.y * -2.5,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 22, mass: 1 }}
            >
              {reviews.map((review, i) => {
                const offset   = getOffset(i, active, n);
                const tfm      = pose(offset);
                const isActive = i === active;

                return (
                  <motion.div
                    key={i}
                    style={{
                      position:       "absolute",
                      top:            -(CARD_H / 2),
                      left:           -(CARD_W / 2),
                      transformStyle: "preserve-3d",
                      willChange:     "transform",
                      cursor:         isActive ? "default" : "pointer",
                    }}
                    animate={{
                      x:       tfm.x,
                      z:       tfm.z,
                      rotateY: tfm.rotateY,
                      scale:   tfm.scale,
                      opacity: tfm.opacity,
                    }}
                    transition={SPRING}
                    onClick={() => !isActive && setActive(i)}
                  >
                    {/*
                     * Floating wrapper — active card gently bobs up and down.
                     * Lives INSIDE the position slot so it doesn't fight the
                     * carousel spring.
                     */}
                    <motion.div
                      animate={isActive ? { y: [0, -8, 0] } : { y: 0 }}
                      transition={
                        isActive
                          ? { duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }
                          : { duration: 0.5 }
                      }
                    >
                      {/* ── Card face ── */}
                      <CardFace review={review} isActive={isActive} />

                      {/* ── Floor reflection ── */}
                      <div
                        aria-hidden="true"
                        style={{
                          position:        "absolute",
                          top:             CARD_H + 2,
                          left:            0,
                          width:           CARD_W,
                          height:          Math.round(CARD_H * 0.3),
                          transform:       "scaleY(-1)",
                          transformOrigin: "top center",
                          opacity:         isActive ? 0.22 : 0.09,
                          filter:          "blur(2.5px)",
                          maskImage:       "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                          pointerEvents:   "none",
                          overflow:        "hidden",
                          transition:      "opacity .4s",
                        }}
                      >
                        {/*
                         * Render a frozen (isActive=false) copy of the card
                         * so the reflection always looks like the compact state.
                         */}
                        <div style={{ width: CARD_W, height: CARD_H, overflow: "hidden", pointerEvents: "none" }}>
                          <CardFace review={review} isActive={false} />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Arrow buttons ── */}
          {(["left", "right"]).map((side) => (
            <button
              key={side}
              type="button"
              aria-label={side === "left" ? "Previous testimonial" : "Next testimonial"}
              onClick={() => go(side === "left" ? -1 : 1)}
              className="absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                [side]:          0,
                border:          `1px solid ${BORDER}`,
                backgroundColor: `${SURFACE}d9`,
                backdropFilter:  "blur(8px)",
                color:           ASH,
                outlineColor:    AMBER,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
            >
              {side === "left"
                ? <ChevronLeft  className="w-4 h-4" />
                : <ChevronRight className="w-4 h-4" />
              }
            </button>
          ))}
        </div>

        {/* ── Progress dots ── */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {reviews.map((review, i) => {
            const m = STATUS[review.status] ?? STATUS["Client"];
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setActive(i)}
                className="transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  height:          6,
                  width:           i === active ? 24 : 6,
                  borderRadius:    3,
                  backgroundColor: i === active ? m.color : BORDER,
                  outlineColor:    AMBER,
                }}
              />
            );
          })}
        </div>

        {/* ── Active card name indicator ── */}
        <motion.div
          key={active}
          className="text-center mt-3"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-mono text-[11px]" style={{ color: ASH }}>
            {t(`testimonials.${reviews[active].nameKey}`)}
          </span>
          <span className="font-mono text-[11px] mx-2" style={{ color: BORDER }}>—</span>
          <span className="font-mono text-[11px]" style={{ color: activeMeta.color }}>
            {activeMeta.label}
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;