import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { statistics } from "../constants";
import { me } from "../assets/images";
import {
  motion,
  useInView,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

/**
 * Type system
 * — Headline (name) → "Space Grotesk"
 * — Everything else (labels, code, data) → "JetBrains Mono"
 * Make sure both are registered globally, e.g. in tailwind.config.js:
 *   fontFamily: {
 *     display: ["Space Grotesk", "sans-serif"],
 *     mono: ["JetBrains Mono", "monospace"],
 *   }
 *
 * Translation keys this file needs that may not exist yet:
 *   about.french        →  "French" / "Français"
 *   about.french_level  →  e.g. "A2"
 * (Swapped out "portuguese" for "french" to match the real language set —
 * English / German / French. Drop the old portuguese keys if unused elsewhere.)
 *
 * No longer imported: the `down` and `experience` icon assets, and `Button`
 * from ../components — the CTA and badges now reuse the same icon family
 * (lucide) for visual consistency. The asset files themselves are untouched.
 */

const INK = "#0d0c0a"; // background
const SURFACE = "#161410"; // panel fill
const BORDER = "#2c2820"; // hairline
const PAPER = "#ece6d6"; // primary text
const BODY = "#c8c2b1"; // paragraph text
const ASH = "#948e7c"; // secondary / labels
const AMBER = "#e0a045"; // single accent

// Only this literal command string is typed character-by-character — it's
// terminal syntax, not translated copy, so it's safe to animate regardless
// of the active locale or text direction.
const TypedPrompt = ({ text, active, speed = 40, onDone }) => {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!active) return undefined;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);

  return <>{shown}</>;
};

const _AboutMe = () => {
  const { t } = useTranslation();
  const [hoveredStat, setHoveredStat] = useState(null);
  const [promptDone, setPromptDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };

  const fade = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const languages = [
    { key: "english", level: 88 },
    { key: "german", level: 18 },
    { key: "french", level: 35 },
  ];

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isInView) return undefined;
      const end = parseInt(value, 10) || 0;
      if (reduceMotion) {
        setCount(end);
        return undefined;
      }
      let start = 0;
      const step = Math.max(end / (700 / 16), 1);
      const id = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(id);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(id);
    }, [isInView, value]);
    return <>{count}+</>;
  };

  return (
    <section
      id="aboutme"
      ref={ref}
      className="relative z-0 min-h-screen lg:h-screen overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* faint paper grain — texture, not gloss */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 flex items-center">
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-16 lg:py-0"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* ---------- Photo column ---------- */}
          <motion.div variants={fade} className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[280px] overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
              <img
                src={me}
                alt={t("about.my_picture_alt")}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>

            <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px]" style={{ color: ASH }}>
              <MapPin className="w-3 h-3" style={{ color: AMBER }} />
              {t("about.from")} <span style={{ color: PAPER }}>{t("about.location")}</span>
            </div>

            <div className="mt-1.5 flex items-center gap-2 font-mono text-[11px]" style={{ color: ASH }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: AMBER }} />
              {t("about.available")}
            </div>
          </motion.div>

          {/* ---------- Content column ---------- */}
          <div className="lg:col-span-8 flex flex-col gap-7">
            {/* command-prompt eyebrow */}
            <motion.div variants={fade} className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
              <span style={{ color: AMBER }}>~/about</span>{" "}
              $ <TypedPrompt text="whoami" active={isInView} onDone={() => setPromptDone(true)} />
              <span
                className={`inline-block w-[6px] h-[13px] ml-0.5 align-middle ${promptDone ? "animate-pulse" : ""}`}
                style={{ backgroundColor: AMBER }}
              />
            </motion.div>

            {/* name */}
            <motion.h1 variants={fade} className="leading-[1.05]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="block text-2xl sm:text-3xl font-normal" style={{ color: ASH }}>
                {t("about.greeting")}
              </span>
              <span className="relative inline-block text-4xl sm:text-5xl lg:text-6xl font-semibold mt-1" style={{ color: PAPER }}>
                {t("about.my_name")}
                <motion.svg
                  className="absolute left-0 -bottom-2 w-full h-4"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.5, ease: "easeInOut" }}
                >
                  <path
                    d="M2,7 Q20,2 35,6 T65,5 T98,7"
                    fill="none"
                    stroke={AMBER}
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* role tags */}
            <motion.div variants={fade} className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm">
              {["profession1", "profession2"].map((prof) => (
                <span key={prof} className="px-3 py-1.5" style={{ color: PAPER, border: `1px solid ${BORDER}` }}>
                  {t(`about.${prof}`)}
                </span>
              ))}
            </motion.div>

            {/* description */}
            <motion.p variants={fade} className="max-w-xl text-sm sm:text-base leading-relaxed" style={{ color: BODY }}>
              {t("about.description")}
            </motion.p>

            {/* code panel — structured summary */}
            <motion.div variants={fade} className="w-full max-w-xl" style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
                  whoami.ts
                </span>
              </div>
              <div className="px-4 py-4 font-mono text-xs sm:text-[13px] leading-7">
                <div style={{ color: ASH }}>
                  const <span style={{ color: PAPER }}>developer</span> = {"{"}
                </div>
                <div className="pl-4" style={{ color: ASH }}>
                  name: <span style={{ color: AMBER }}>"{t("about.my_name")}"</span>,
                </div>
                <div className="pl-4" style={{ color: ASH }}>
                  role: <span style={{ color: AMBER }}>"{t("about.profession1")} & {t("about.profession2")}"</span>,
                </div>
                <div className="pl-4" style={{ color: ASH }}>
                  base: <span style={{ color: AMBER }}>"{t("about.location")}"</span>,
                </div>
                <div className="pl-4" style={{ color: ASH }}>
                  experience: <span style={{ color: AMBER }}>"2+ years"</span>,
                </div>
                <div className="pl-4" style={{ color: ASH }}>
                  available: <span style={{ color: AMBER }}>true</span>
                </div>
                <div style={{ color: ASH }}>{"}"}</div>
              </div>
            </motion.div>

            {/* languages */}
            <motion.div variants={fade} className="w-full max-w-xl">
              <p className="font-mono text-[11px] mb-3" style={{ color: ASH }}>
                // {t("about.language_proficiency")}
              </p>
              <div className="flex flex-col gap-3">
                {languages.map((lang) => (
                  <div key={lang.key} className="flex items-center gap-3 font-mono text-xs">
                    <span className="w-16 sm:w-20" style={{ color: PAPER }}>
                      {t(`about.${lang.key}`)}
                    </span>
                    <div className="flex-1 h-[3px]" style={{ backgroundColor: BORDER }}>
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: AMBER }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.level}%` } : {}}
                        transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <span className="w-20 text-right" style={{ color: ASH }}>
                      {t(`about.${lang.key}_level`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* stats + CTA */}
            <motion.div variants={fade} className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-2">
              <div className="flex gap-6 sm:gap-8">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <span
                      className="font-mono text-xl sm:text-2xl font-semibold transition-colors duration-300"
                      style={{ color: hoveredStat === index ? AMBER : PAPER }}
                    >
                      <Counter value={stat.value} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: ASH }}>
                      {t(`stats.${stat.label.toLowerCase().replace(" ", "_")}`)}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 font-mono text-sm px-4 py-2.5 self-start transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ border: `1px solid ${AMBER}`, color: AMBER, outlineColor: AMBER }}
              >
                <span style={{ color: ASH }}>./</span>
                {t("projects")}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default _AboutMe;