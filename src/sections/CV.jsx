import cvPdf from "../assets/cv.pdf";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { subscribe } from "../assets/images/pictures";
import cv from "../assets/images/cv.jpg";
import { Download, ArrowRight } from "lucide-react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// ── Syntax-highlighted career stats ──────────────────────────────────────────
const PROFILE = [
  { key: "name",         val: '"Ahmed Ghoul"',              blue: false },
  { key: "role",         val: '"Full-Stack & AI Dev"',      blue: false },
  { key: "gpa",          val: '"15.63 / 20"',               blue: false,  comment: "// Très Bien" },
  { key: "rank",         val: '"#1"',                       blue: false,  comment: "// CS cohort · Univ. Guelma" },
  { key: "experience",   val: '"2+ years"',                 blue: false },
  { key: "projects",     val: '"15+ shipped"',              blue: false },
  { key: "clients",      val: '"8+ satisfied"',             blue: false },
  { key: "open_to",      val: '"Remote & EU relocation"',   blue: false },
  { key: "available",    val: "true",                       blue: true,   comment: "// open to opportunities" },
];

// ── Fake git header for the thank-you block ───────────────────────────────────
const COMMIT = [
  { label: "commit", val: "a9f3d2c" },
  { label: "Author", val: "Ahmed Ghoul <0ahmedghoul0@gmail.com>" },
  { label: "Date",   val: "June 2026" },
];

// ── Reusable IDE chrome bar ───────────────────────────────────────────────────
const Chrome = ({ filename, right }) => (
  <div
    className="flex items-center gap-2 px-4 py-2.5"
    style={{ borderBottom: `1px solid ${BORDER}` }}
  >
    <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
    <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
    <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
    <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
      {filename}
    </span>
    {right && (
      <span className="ml-auto font-mono text-[10px]" style={{ color: AMBER }}>
        {right}
      </span>
    )}
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const CV = () => {
  const { t }      = useTranslation();
  const ref        = useRef(null);
  const isInView   = useInView(ref, { once: true, margin: "-80px" });
  const [hover, setHover] = useState(false);

  const slide = (delay = 0) => ({
    hidden:  { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.42, ease: "easeOut" } },
  });

  return (
    <section
      id="cv"
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
        <filter id="grain-cv">
          <feTurbulence type="fractalNoise" baseFrequency="0.85"
                        numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-cv)" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          className="mb-12"
          variants={slide(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
            // cv
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
          >
            {t("cv.title_part1")}{" "}
            <span style={{ color: AMBER }}>{t("cv.title_part2")}</span>
          </h2>
          <p
            className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            {t("cv.subtitle")}
          </p>
        </motion.div>

        {/* ── Two-column grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* ══ LEFT: CV preview ══════════════════════════════════════════ */}
          <motion.div
            className="flex flex-col gap-4"
            variants={slide(0.1)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* PDF preview panel */}
            <div style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
              <Chrome filename="ahmed_ghoul_cv.pdf" right="PDF · 1 page" />

              {/* Image + hover overlay */}
              <a
                href={cvPdf}
                download="Ahmed_Ghoul_CV.pdf"
                className="block relative overflow-hidden"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                aria-label="Download Ahmed Ghoul CV"
              >
                <img
                  src={cv}
                  alt={t("cv.cv_preview_alt")}
                  className="w-full h-auto block transition-all duration-500"
                  style={{ filter: hover ? "brightness(0.28)" : "brightness(0.82)" }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300"
                  style={{ opacity: hover ? 1 : 0 }}
                >
                  <motion.div
                    animate={hover ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center"
                      style={{ border: `1px solid ${AMBER}`, backgroundColor: `${AMBER}15` }}
                    >
                      <Download className="w-6 h-6" style={{ color: AMBER }} />
                    </div>
                    <p
                      className="font-semibold text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
                    >
                      {t("cv.download_text")}
                    </p>
                    <p className="font-mono text-xs" style={{ color: ASH }}>
                      Ahmed_Ghoul_CV.pdf
                    </p>
                  </motion.div>
                </div>
              </a>
            </div>

            {/* Fake terminal download command */}
            <div
              className="px-4 py-3.5 font-mono text-[11px] sm:text-xs leading-6"
              style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}
            >
              <p style={{ color: ASH }}>
                <span style={{ color: AMBER }}>$</span>{" "}
                curl -L{" "}
                <span style={{ color: "#6b9eb2" }}>ahmed-ghoul.dev</span>
                /cv.pdf -o Ahmed_Ghoul_CV.pdf
              </p>
              <p className="mt-1" style={{ color: "#6b9eb2" }}>
                → Downloading
                <span style={{ color: PAPER }}> Ahmed_Ghoul_CV.pdf </span>
                <span style={{ color: AMBER }}>████████████</span> 100%
              </p>
              <p className="mt-0.5" style={{ color: ASH }}>
                → Saved · 342 KB
              </p>
            </div>

            {/* Solid amber download button */}
            <a
              href={cvPdf}
              download="Ahmed_Ghoul_CV.pdf"
              className="group inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3 transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: AMBER, color: INK, outlineColor: AMBER }}
            >
              <Download className="w-4 h-4" />
              {t("cv.download_button")}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* ══ RIGHT: profile stats + thank you + image ══════════════════ */}
          <motion.div
            className="flex flex-col gap-4"
            variants={slide(0.2)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* dev_profile.ts — syntax-highlighted career object */}
            <div style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
              <Chrome filename="dev_profile.ts" />
              <div className="px-5 py-4 font-mono text-xs sm:text-[13px] leading-7">
                <p style={{ color: ASH }}>
                  const{" "}
                  <span style={{ color: PAPER }}>candidate</span>{" "}
                  = {"{"}
                </p>

                {PROFILE.map(({ key, val, blue, comment }, i) => (
                  <motion.p
                    key={key}
                    className="pl-4"
                    style={{ color: ASH }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.065, duration: 0.3, ease: "easeOut" }}
                  >
                    <span style={{ color: "#9b8fc0" }}>{key}</span>
                    {": "}
                    <span style={{ color: blue ? "#6b9eb2" : AMBER }}>{val}</span>
                    {","}
                    {comment && (
                      <span
                        className="ml-2"
                        style={{ color: BORDER, fontSize: 10 }}
                      >
                        {comment}
                      </span>
                    )}
                  </motion.p>
                ))}

                <p style={{ color: ASH }}>{"}"}</p>
              </div>
            </div>

            {/* Git commit — thank you message ──────────────────────────── */}
            <div
              className="font-mono text-xs leading-6 px-4 py-4"
              style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}
            >
              {/* commit header */}
              {COMMIT.map(({ label, val }) => (
                <p key={label} style={{ color: ASH }}>
                  <span style={{ color: "#9b8fc0" }}>{label}</span>
                  {"  "}
                  <span style={{ color: label === "commit" ? AMBER : PAPER }}>
                    {val}
                  </span>
                </p>
              ))}

              {/* message body */}
              <div
                className="mt-4 pl-3 py-1"
                style={{ borderLeft: `2px solid ${AMBER}45` }}
              >
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
                >
                  {t("cv.thank_you_part1")}{" "}
                  <span style={{ color: AMBER }}>{t("cv.thank_you_part2")}</span>
                </p>
                <p
                  className="mt-2 text-[11px] sm:text-xs leading-5"
                  style={{ color: BODY }}
                >
                  {t("cv.thank_you_message")}
                </p>
                <p className="mt-3 text-[11px]" style={{ color: ASH }}>
                  — Ahmed
                </p>
              </div>
            </div>

            {/* Profile image panel ─────────────────────────────────────── */}
            <div style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
                  profile.jpg
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: AMBER }}
                  />
                  <span className="font-mono text-[10px]" style={{ color: ASH }}>
                    available
                  </span>
                </div>
              </div>
              <img
                src={subscribe}
                alt={t("cv.profile_alt")}
                className="w-full h-auto object-cover block"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV;