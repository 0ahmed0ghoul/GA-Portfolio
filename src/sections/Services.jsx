import { services } from "../constants";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { RotateCw } from "lucide-react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// Each card flies in from a unique 3D angle — cycles through 5 patterns
const ENTRY = [
  { x: -90,  y: 0,   rotateY: -40, rotateX:  0  },
  { x: 0,    y: -90, rotateY:  0,  rotateX:  40 },
  { x: 90,   y: 0,   rotateY:  40, rotateX:  0  },
  { x: -90,  y: 0,   rotateY: -40, rotateX:  0  },
  { x: 0,    y: 90,  rotateY:  0,  rotateX: -40 },
];

const CARD_H = 350; // px — both faces must match

// ── Single flip card ──────────────────────────────────────────────────────────
const ServiceCard = ({ service, index, isInView }) => {
  const { t } = useTranslation();

  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt]       = useState({ x: 0, y: 0 });

  const entry  = ENTRY[index % ENTRY.length];
  const techs  = t(`services.${service.techsKey}`, { returnObjects: true });
  const techArr = Array.isArray(techs) ? techs : [];

  // Mouse-position tilt — disabled while the flip is active
  const onMouseMove = (e) => {
    if (flipped) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x:  ((e.clientX - r.left)  / r.width  - 0.5) *  22,
      y: -((e.clientY - r.top)   / r.height - 0.5) *  16,
    });
  };
  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div style={{ perspective: "1000px" }}>

      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        initial={{
          opacity:  0,
          x:        entry.x,
          y:        entry.y,
          rotateY:  entry.rotateY,
          rotateX:  entry.rotateX,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0, rotateY: 0, rotateX: 0 }
            : {}
        }
        transition={{
          delay:    index * 0.11,
          duration: 0.72,
          ease:     [0.34, 1.56, 0.64, 1], // backOut overshoot
        }}
      >
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: flipped ? 0 : tilt.y,
            rotateY: flipped ? 0 : tilt.x,
          }}
          transition={{ duration: 0.13, ease: "easeOut" }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              position:       "relative",
              height:         CARD_H,
              cursor:         "pointer",
            }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 175, damping: 22 }}
            onClick={() => setFlipped((f) => !f)}
          >

            <div
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                position:        "absolute",
                inset:           0,
                height:          CARD_H,
                backgroundColor: SURFACE,
                border:          `1px solid ${BORDER}`,
                display:         "flex",
                flexDirection:   "column",
                padding:         "20px",
                overflow:        "hidden",
              }}
            >
              {/* Number + icon */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: AMBER }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-9 h-9 flex items-center justify-center"
                  style={{
                    border:          `1px solid ${BORDER}`,
                    backgroundColor: `${AMBER}10`,
                  }}
                >
                  <img
                    src={service.imgURL}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-semibold text-base leading-tight mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: PAPER,
                }}
              >
                {t(`services.${service.labelKey}`)}
              </h3>

              {/* Description */}
              <p
                className="text-xs leading-relaxed flex-1"
                style={{ color: BODY }}
              >
                {t(`services.${service.subtextKey}`)}
              </p>

              {/* Flip hint */}
              <div
                className="flex items-center gap-1.5 mt-4 pt-3 font-mono text-[10px]"
                style={{ borderTop: `1px solid ${BORDER}`, color: ASH }}
              >
                <RotateCw className="w-3 h-3" aria-hidden="true" />
                click to see stack
              </div>
            </div>

            {/* ════ BACK FACE ══════════════════════════════════════════════ */}
            <div
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform:       "rotateY(180deg)",
                position:        "absolute",
                inset:           0,
                height:          CARD_H,
                backgroundColor: SURFACE,
                border:          `1px solid ${BORDER}`,
                borderTop:       `2px solid ${AMBER}`,
                display:         "flex",
                flexDirection:   "column",
                padding:         "20px",
                overflow:        "hidden",
              }}
            >
              {/* Comment header */}
              <p
                className="font-mono text-[11px] mb-3"
                style={{ color: ASH }}
              >
                <span style={{ color: AMBER }}>// </span>
                {t(`services.${service.labelKey}`)}
              </p>

              {/* Tech stack as code array */}
              <div className="font-mono text-[11px] leading-[1.75] flex-1 overflow-hidden">
                <p style={{ color: ASH }}>stack: [</p>
                <div className="pl-4">
                  {techArr.map((tech, i) => (
                    <p key={i} style={{ color: AMBER }}>
                      &ldquo;{tech}&rdquo;
                      {i < techArr.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
                <p style={{ color: ASH }}>]</p>
              </div>

              {/* Flip-back hint */}
              <div
                className="flex items-center gap-1.5 mt-4 pt-3 font-mono text-[10px]"
                style={{ borderTop: `1px solid ${BORDER}`, color: ASH }}
              >
                <RotateCw
                  className="w-3 h-3"
                  aria-hidden="true"
                  style={{ transform: "scaleX(-1)" }}
                />
                click to flip back
              </div>
            </div>

          </motion.div>
          {/* end layer 3 */}
        </motion.div>
        {/* end layer 2 */}
      </motion.div>
      {/* end layer 1 */}

    </div>
  );
};

// ── Main section ──────────────────────────────────────────────────────────────
const Services = () => {
  const { t }    = useTranslation();
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Paper grain */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-services">
          <feTurbulence type="fractalNoise" baseFrequency="0.85"
                        numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-services)" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
            // services
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
          >
            {t("services.title_part1")}{" "}
            <span style={{ color: AMBER }}>{t("services.title_part2")}</span>
          </h2>
          <p
            className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            {t("services.description")}
          </p>
        </motion.div>

        {/* 3D flip card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.labelKey}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Interaction hint */}
        <motion.p
          className="text-center font-mono text-[11px] mt-8"
          style={{ color: ASH }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          // hover to tilt &nbsp;·&nbsp; click to reveal stack
        </motion.p>

      </div>
    </section>
  );
};

export default Services;