// Certifications.jsx
// Requires: npm install gsap

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certFiveStar, certIelts, certMajor } from "../assets/images/certifications";

gsap.registerPlugin(ScrollTrigger);

// ── Shared design tokens ──────────────────────────────────────────────────────
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

// ── Certificate data ──────────────────────────────────────────────────────────
const CERTS = [
  {
    id: "five_star",
    num: "01",
    label: "5-Star Student",
    grade: "Excellence Award",
    imgURL: certFiveStar, // ← add this
    issuer: "University of 8 May 1945, Guelma",
    year: "2024",
    accent: AMBER,
    meta: [
      { key: "type", val: "Excellence Certificate" },
      { key: "field", val: "Computer Science · B.Sc." },
      { key: "awarded", val: "Outstanding Academic Performance" },
    ],
    desc: "Awarded for exceptional academic performance throughout the Computer Science programme — one of the highest honours conferred by the Faculty of Exact Sciences.",
  },
  {
    id: "major",
    num: "02",
    label: "Major",
    grade: "First in Cohort",
    imgURL: certMajor, // ← add this
    issuer: "University of 8 May 1945, Guelma",
    year: "2024",
    accent: "#9b8fc0",
    meta: [
      { key: "gpa", val: "15.63 / 20  (Très Bien)" },
      { key: "rank", val: "#1 — Computer Science cohort" },
      { key: "status", val: "H+ · Anabin DB (EU-recognised)" },
    ],
    desc: "Graduated first in the Computer Science cohort (GPA 15.63/20, Très Bien). Bologna-compatible, H+-listed in the German Anabin database — recognised for EU postgraduate admission without equivalency assessment.",
  },
  {
    id: "ielts",
    num: "03",
    label: "IELTS Academic",
    grade: "Band 6.5 · B2",
    issuer: "British Council · IDP Education",
    imgURL: certIelts, // ← add this
    year: "2024",
    accent: "#6b9eb2",
    meta: [
      { key: "module", val: "Academic" },
      { key: "level", val: "B2 / C1  (CEFR)" },
      { key: "band", val: "Overall 6.5" },
    ],
    desc: "English proficiency at B2/C1 level via IELTS Academic. Accepted by universities, employers, and immigration authorities worldwide — including EU institutions and UKVI-approved purposes.",
  },
];

// Alternating entrance directions: 0 → from right, 1 → from left, 2 → from right
const DIR = [1, -1, 1];

// ── Corner bracket ────────────────────────────────────────────────────────────
const Bracket = ({ color, top, left }) => {
  const borders = {};
  borders[top ? "borderTop" : "borderBottom"] = `1.5px solid ${color}`;
  borders[left ? "borderLeft" : "borderRight"] = `1.5px solid ${color}`;
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        [top ? "top" : "bottom"]: 10,
        [left ? "left" : "right"]: 10,
        width: 20,
        height: 20,
        opacity: 0.72,
        ...borders,
      }}
    />
  );
};

// ── Wax seal ──────────────────────────────────────────────────────────────────
const Seal = ({ color }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
    {Array.from({ length: 12 }).map((_, i) => (
      <line
        key={i}
        x1="30"
        y1="3"
        x2="30"
        y2="9"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.48"
        transform={`rotate(${i * 30}, 30, 30)`}
      />
    ))}
    <circle
      cx="30"
      cy="30"
      r="25"
      fill="none"
      stroke={color}
      strokeWidth="0.8"
      strokeDasharray="2.5 1.5"
      opacity="0.38"
    />
    <circle
      cx="30"
      cy="30"
      r="20"
      fill={`${color}14`}
      stroke={color}
      strokeWidth="1.2"
      opacity="0.85"
    />
    <text
      x="30"
      y="26"
      textAnchor="middle"
      fill={color}
      fontSize="7.5"
      fontFamily="'Space Grotesk', sans-serif"
      fontWeight="700"
      opacity="0.9"
    >
      A.G
    </text>
    <line
      x1="18"
      y1="30"
      x2="42"
      y2="30"
      stroke={color}
      strokeWidth="0.6"
      opacity="0.3"
    />
    <text
      x="30"
      y="39"
      textAnchor="middle"
      fill={color}
      fontSize="7"
      fontFamily="'JetBrains Mono', monospace"
      letterSpacing="0.5"
    >
      2024
    </text>
  </svg>
);

// ── Physical certificate card ─────────────────────────────────────────────────
const CertCard = ({ cert }) => (
  <div
    className="relative select-none"
    style={{
      width: "min(500px, 85vw)",
      aspectRatio: "1.55 / 1",
      backgroundColor: "#f6f1e4",
      border: `2px solid ${cert.accent}`,
      boxShadow: [
        "22px 30px 58px rgba(0,0,0,0.62)",
        "-4px -4px 14px rgba(0,0,0,0.18)",
        "inset 0 0 40px rgba(0,0,0,0.035)",
      ].join(", "),
      backgroundImage: [
        `radial-gradient(ellipse at 28% 55%, ${cert.accent}0c 0%, transparent 65%)`,
        `radial-gradient(ellipse at 72% 45%, ${cert.accent}09 0%, transparent 65%)`,
      ].join(", "),
    }}
  >
    {/* Inner hairline border */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: "7px",
        border: `1px solid ${cert.accent}45`,
        pointerEvents: "none",
      }}
    />

    {/* 4 corner brackets */}
    <Bracket color={cert.accent} top left />
    <Bracket color={cert.accent} top left={false} />
    <Bracket color={cert.accent} top={false} left />
    <Bracket color={cert.accent} top={false} left={false} />

    {/* Content */}
    <div
      className="absolute flex flex-col items-center justify-between text-center"
      style={{ inset: "16px", padding: "10px 20px" }}
    >
      {/* Issuer */}
      <div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(6.5px, 1vw, 8.5px)",
            letterSpacing: "0.32em",
            color: cert.accent,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {cert.issuer}
        </p>
        <div
          style={{
            width: 36,
            height: 1,
            margin: "5px auto 0",
            backgroundColor: cert.accent,
            opacity: 0.38,
          }}
        />
      </div>

      {/* Name + award */}
      <div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(7px, 1vw, 8.5px)",
            color: "#6b5a48",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          This certifies that
        </p>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(17px, 3.5vw, 27px)",
            fontWeight: 600,
            color: "#1c1208",
            letterSpacing: "0.03em",
          }}
        >
          Ahmed Ghoul
        </h3>
        <div
          style={{
            width: "62%",
            height: 1,
            margin: "5px auto",
            background: `linear-gradient(to right, transparent, ${cert.accent}55, transparent)`,
          }}
        />
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(11px, 2vw, 16px)",
            fontWeight: 600,
            color: "#1c1208",
          }}
        >
          {cert.label}
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(7.5px, 1.1vw, 10px)",
            color: cert.accent,
            marginTop: 3,
            letterSpacing: "0.08em",
          }}
        >
          {cert.grade}
        </p>
      </div>

      {/* Footer row: year – seal – location */}
      <div className="flex items-end justify-between w-full px-2">
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(9px, 1.3vw, 12px)",
              fontWeight: 700,
              color: cert.accent,
            }}
          >
            {cert.year}
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(5.5px, 0.85vw, 7.5px)",
              color: "#6b5a48",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            Year
          </p>
        </div>

        <Seal color={cert.accent} />

        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(6.5px, 1vw, 8.5px)",
              color: cert.accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Guelma
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(5.5px, 0.85vw, 7.5px)",
              color: "#6b5a48",
              opacity: 0.65,
            }}
          >
            Algeria
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ── Terminal description block ────────────────────────────────────────────────
const DescBlock = ({ cert }) => (
  <div
    className="w-full max-w-2xl mx-auto"
    style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}
  >
    {/* Chrome bar */}
    <div
      className="flex items-center gap-2 px-4 py-2"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <div className="flex gap-1.5">
        <span
          className="w-2 h-2 rounded-full"
          style={{ border: `1px solid ${ASH}` }}
        />
        <span
          className="w-2 h-2 rounded-full"
          style={{ border: `1px solid ${ASH}` }}
        />
        <span
          className="w-2 h-2 rounded-full"
          style={{ border: `1px solid ${ASH}` }}
        />
      </div>
      <span className="font-mono text-[11px]" style={{ color: AMBER }}>
        ~/certs
      </span>
      <span className="font-mono text-[11px]" style={{ color: ASH }}>
        $ cat <span style={{ color: PAPER }}>{cert.id}.json</span>
      </span>
    </div>

    {/* JSON-style output */}
    <div className="px-5 py-3 font-mono text-[11px] sm:text-xs leading-[1.85]">
      <p style={{ color: ASH }}>{"{"}</p>
      {cert.meta.map(({ key, val }) => (
        <p key={key} className="pl-4" style={{ color: ASH }}>
          <span style={{ color: "#9b8fc0" }}>"{key}"</span>
          {": "}
          <span style={{ color: AMBER }}>"{val}"</span>,
        </p>
      ))}
      <p className="pl-4 truncate" style={{ color: ASH }}>
        <span style={{ color: "#9b8fc0" }}>"note"</span>
        {": "}
        <span style={{ color: BODY }}>"{cert.desc}"</span>
      </p>
      <p style={{ color: ASH }}>{"}"}</p>
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const Certifications = () => {
  const sectionRef = useRef(null);
  const certRefs = useRef([]);
  const descRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Initial off-screen states ──────────────────────────────────────────
      certRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          xPercent: DIR[i] * 82,
          rotateY: DIR[i] * 55,
          transformPerspective: 1100,
          scale: 0.52,
          opacity: 0,
          z: -260,
        });
      });
      descRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 0, yPercent: 22 });
      });
      const isMobile = window.innerWidth < 768;

      // ── Master scrubbed timeline ───────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end:  isMobile ? "+=620%" : "+=390%",
          scrub:  isMobile ? 3.2 : 1.4,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.44) setActive(0);
            else if (p < 0.77) setActive(1);
            else setActive(2);
          },
        },
      });

      // ─ Cert 0: flies in from right ─────────────────────────────────────────
      tl.to(certRefs.current[0], {
        xPercent: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        z: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          descRefs.current[0],
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.55,
          },
          "-=0.35"
        )
        .to({}, { duration: 0.75 }) // ← rest / viewing pause

        // ─ Cert 0 exits left | Cert 1 enters from left ───────────────────────
        .to(certRefs.current[0], {
          xPercent: -80,
          rotateY: -55,
          scale: 0.52,
          opacity: 0,
          z: -260,
          duration: 1.05,
          ease: "power2.in",
        })
        .to(
          descRefs.current[0],
          { opacity: 0, yPercent: -18, duration: 0.35 },
          "<"
        )
        .to(
          certRefs.current[1],
          {
            xPercent: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            z: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "<0.28"
        )
        .to(
          descRefs.current[1],
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.55,
          },
          "-=0.35"
        )
        .to({}, { duration: 0.75 })

        // ─ Cert 1 exits right | Cert 2 enters from right ─────────────────────
        .to(certRefs.current[1], {
          xPercent: 80,
          rotateY: 55,
          scale: 0.52,
          opacity: 0,
          z: -260,
          duration: 1.05,
          ease: "power2.in",
        })
        .to(
          descRefs.current[1],
          { opacity: 0, yPercent: -18, duration: 0.35 },
          "<"
        )
        .to(
          certRefs.current[2],
          {
            xPercent: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            z: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "<0.28"
        )
        .to(
          descRefs.current[2],
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.55,
          },
          "-=0.35"
        )
        .to({}, { duration: 0.75 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Paper grain */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.05, zIndex: 0 }}
      >
        <filter id="grain-certs">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-certs)" />
      </svg>

      {/* ── Inner layout ──────────────────────────────────────────────────── */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 1 }}>
        {/* Header */}
        <div
          className="flex-shrink-0 flex items-end justify-between
                     px-5 sm:px-8 lg:px-10 pt-8 pb-4"
        >
          <div>
            <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
              // certifications
            </p>
            <h2
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: PAPER,
              }}
            >
              My <span style={{ color: AMBER }}>Credentials</span>
            </h2>
          </div>

          {/* 01 / 03 counter */}
          <p className="font-mono text-sm pb-1 shrink-0" style={{ color: ASH }}>
            <span style={{ color: CERTS[active].accent }}>
              {CERTS[active].num}
            </span>
            <span style={{ color: BORDER }}> / </span>
            {String(CERTS.length).padStart(2, "0")}
          </p>
        </div>

        {/* ── Certificate stage ──────────────────────────────────────────── */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-0">
          {CERTS.map((cert, i) => (
            <div
              key={cert.id}
              ref={(el) => (certRefs.current[i] = el)}
              className="absolute inset-0 flex items-center justify-center"
              style={{ willChange: "transform, opacity" }}
            >
              <img
                src={cert.imgURL}
                alt={cert.label}
                draggable={false}
                className="select-none"
                style={{
                  maxWidth: "min(500px, 85vw)",
                  maxHeight: "calc(100% - 32px)",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  border: `2px solid ${cert.accent}`,
                  boxShadow:
                    "22px 30px 58px rgba(0,0,0,0.62), -4px -4px 14px rgba(0,0,0,0.18)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Description area ───────────────────────────────────────────── */}
        <div
          className="flex-shrink-0 relative px-5 sm:px-8 lg:px-10"
          style={{ height: "148px" }}
        >
          {CERTS.map((cert, i) => (
            <div
              key={cert.id}
              ref={(el) => (descRefs.current[i] = el)}
              className="absolute inset-0 flex items-center
                         px-5 sm:px-8 lg:px-10"
              style={{ willChange: "transform, opacity" }}
            >
              <DescBlock cert={cert} />
            </div>
          ))}
        </div>

        {/* ── Progress indicator ─────────────────────────────────────────── */}
        <div className="flex-shrink-0 flex items-center justify-center gap-2.5 h-12">
          {CERTS.map((cert, i) => (
            <div
              key={cert.id}
              className="rounded-sm transition-all duration-300 ease-out"
              style={{
                height: 3,
                width: active === i ? 28 : 8,
                backgroundColor: active === i ? cert.accent : BORDER,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
