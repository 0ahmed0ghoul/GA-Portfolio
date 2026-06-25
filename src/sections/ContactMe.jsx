
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Clock, Code, Copy, Handbag, Mail, MapPin, Phone } from "lucide-react"; // Changed Github → GitHub
const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// ── Contact data ──────────────────────────────────────────────────────────────
const INFO = [
    { key: "email",        val: "0ahmedghoul0@gmail.com",               href: "mailto:0ahmedghoul0@gmail.com",                 Icon: Mail      },
    { key: "phone",        val: "+213 563 437 394",                      href: "tel:+213563437394",                             Icon: Phone     },
    { key: "location",     val: "Guelma, Algeria",                       href: null,                                            Icon: MapPin    },
    { key: "linkedin",     val: "ghoul-ahmed-dev",                       href: "https://www.linkedin.com/in/ghoul-ahmed-dev/",  Icon:  Handbag }, // Changed
    { key: "github",       val: "0ahmed0ghoul",                          href: "https://github.com/0ahmed0ghoul",               Icon:Code   }, // Changed
    { key: "availability", val: "Open to remote & relocation",           href: null,                                            Icon: Clock     },
  ];
const EMPTY = { name: "", email: "", subject: "", message: "" };

// ── Tiny copy-to-clipboard hook ───────────────────────────────────────────────
const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return [copied, copy];
};

// ── Terminal input row ────────────────────────────────────────────────────────
const TerminalField = ({ label, type = "text", value, onChange, placeholder }) => (
  <div
    className="flex items-center gap-2 px-4 py-3 font-mono text-xs"
    style={{ borderBottom: `1px solid ${BORDER}` }}
  >
    <span style={{ color: AMBER }} aria-hidden="true">$</span>
    <label
      htmlFor={`field-${label}`}
      className="shrink-0 w-16 sm:w-20 select-none"
      style={{ color: ASH }}
    >
      {label}
    </label>
    <input
      id={`field-${label}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      autoComplete="off"
      spellCheck={false}
      className="flex-1 bg-transparent outline-none placeholder:opacity-25"
      style={{ color: PAPER, caretColor: AMBER }}
    />
  </div>
);

// ── Copyable info row ─────────────────────────────────────────────────────────
const InfoRow = ({ label, val, href, Icon }) => {
  const [copied, copy] = useCopy();
  const isExternal = href?.startsWith("http");

  return (
    <div
      className="pl-4 flex items-baseline gap-2 font-mono text-xs leading-7 group"
    >
      <span style={{ color: "#9b8fc0" }}>"{label}"</span>
      <span style={{ color: ASH }}>:</span>
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel="noreferrer"
          className="transition-colors duration-200 hover:opacity-75 truncate"
          style={{ color: AMBER }}
        >
          "{val}"
        </a>
      ) : (
        <span style={{ color: PAPER }}>"{val}"</span>
      )}
      <span style={{ color: ASH }}>,</span>
      {/* copy button — only for email/phone */}
      {(label === "email" || label === "phone") && (
        <button
          type="button"
          onClick={() => copy(val)}
          aria-label={`Copy ${label}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto shrink-0 focus-visible:opacity-100"
          style={{ color: copied ? AMBER : ASH }}
        >
          {copied
            ? <Check className="w-3 h-3" />
            : <Copy className="w-3 h-3" />}
        </button>
      )}
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const ContactMe = () => {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-60px" });

  const [form, setForm]     = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mvzjkkeg", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  // Stagger variant factory
  const slide = (i = 0) => ({
    hidden:  { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.42, ease: "easeOut" } },
  });

  return (
    <section
      id="contact_me"
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Paper grain */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.05 }}
      >
        <filter id="grain-contact">
          <feTurbulence type="fractalNoise" baseFrequency="0.85"
                        numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-contact)" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* ── Section header ────────────────────────────────────────────── */}
        <motion.div
          className="mb-10 sm:mb-14"
          variants={slide(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
            // contact_me
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
          >
            Let's Build Something{" "}
            <span style={{ color: AMBER }}>Together</span>
          </h2>
          <p
            className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: BODY }}
          >
            Open to full-stack roles, freelance projects, and Erasmus Mundus opportunities. I read every message personally.
          </p>
        </motion.div>

        {/* ── IDE two-panel shell ───────────────────────────────────────── */}
        <motion.div
          className="flex flex-col lg:flex-row"
          style={{ border: `1px solid ${BORDER}` }}
          variants={slide(1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* ── LEFT: full JSON panel (desktop only) ─────────────────────── */}
          <div
            className="hidden lg:flex lg:w-80 shrink-0 flex-col"
            style={{ borderRight: `1px solid ${BORDER}` }}
          >
            {/* Chrome */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
                $ cat contact.json
              </span>
            </div>

            {/* JSON body */}
            <div className="px-5 py-5 font-mono text-xs leading-7 flex-1">
              <p style={{ color: ASH }}>{"{"}</p>
              {INFO.map(({ key, val, href, Icon }) => (
                <InfoRow key={key} label={key} val={val} href={href} Icon={Icon} />
              ))}
              <p style={{ color: ASH }}>{"}"}</p>
            </div>

            {/* Availability pulse */}
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                style={{ backgroundColor: AMBER }}
              />
              <p className="font-mono text-[11px]" style={{ color: ASH }}>
                Responds within{" "}
                <span style={{ color: PAPER }}>24–48 h</span>
              </p>
            </div>
          </div>

          {/* ── MOBILE: compact icon strip ───────────────────────────────── */}
          <div
            className="flex lg:hidden items-center justify-between px-4 py-3"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-4">
              {INFO.filter((i) => i.href).map(({ key, val, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={key}
                  className="transition-colors duration-200 hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: ASH, outlineColor: AMBER }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: AMBER }}
              />
              <span className="font-mono text-[10px]" style={{ color: ASH }}>
                Available for work
              </span>
            </div>
          </div>

          {/* ── RIGHT: form ──────────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Chrome */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              </div>
              <span className="ml-1 font-mono text-[11px]" style={{ color: ASH }}>
                $&nbsp;
                <span style={{ color: PAPER }}>./new_message.sh</span>
              </span>
            </div>

            {/* ── Sent state ── */}
            {status === "sent" ? (
              <div className="flex-1 px-5 py-8 font-mono text-xs leading-8">
                <p style={{ color: ASH }}>
                  $ ./new_message.sh{" "}
                  <span style={{ color: "#9b8fc0" }}>--execute</span>
                </p>
                <p style={{ color: ASH }}>
                  &gt; Connecting to{" "}
                  <span style={{ color: AMBER }}>0ahmedghoul0@gmail.com</span>
                  ...
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <p style={{ color: "#6b9eb2" }}>
                    &gt; Payload delivered{" "}
                    <span style={{ color: AMBER }}>✓</span>
                  </p>
                  <p style={{ color: ASH }}>
                    &gt; Response expected within{" "}
                    <span style={{ color: PAPER }}>24–48 h</span>.
                  </p>
                  <div className="mt-4 flex items-center gap-1" style={{ color: ASH }}>
                    <span>$</span>
                    <span
                      className="inline-block w-[6px] h-[13px] animate-pulse"
                      style={{ backgroundColor: AMBER }}
                    />
                  </div>
                </motion.div>

                <button
                  type="button"
                  onClick={() => { setForm(EMPTY); setStatus("idle"); }}
                  className="mt-10 font-mono text-xs transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: ASH, outlineColor: AMBER }}
                >
                  // send another message →
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col" noValidate>

                <TerminalField
                  label="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Ahmed Ghoul"
                />
                <TerminalField
                  label="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                />
                <TerminalField
                  label="subject"
                  value={form.subject}
                  onChange={set("subject")}
                  placeholder="Let's work together"
                />

                {/* Message */}
                <div
                  className="flex-1 flex flex-col"
                  style={{ borderBottom: `1px solid ${BORDER}` }}
                >
                  <div
                    className="flex items-center gap-2 px-4 pt-3 font-mono text-xs"
                  >
                    <span style={{ color: AMBER }} aria-hidden="true">$</span>
                    <label
                      htmlFor="field-message"
                      className="w-16 sm:w-20 select-none"
                      style={{ color: ASH }}
                    >
                      message
                    </label>
                  </div>
                  <textarea
                    id="field-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Hi Ahmed, I'd like to discuss..."
                    spellCheck={false}
                    className="flex-1 w-full bg-transparent px-4 pb-3 pt-2 font-mono text-xs outline-none resize-none placeholder:opacity-25"
                    style={{ color: PAPER, caretColor: AMBER }}
                  />
                </div>

                {/* Submit row */}
                <div className="px-4 py-4 flex items-center justify-between gap-4 flex-wrap">

                  {/* Error feedback */}
                  {status === "error" ? (
                    <p className="font-mono text-[11px]" style={{ color: "#c97b7b" }}>
                      ✗ Failed —{" "}
                      <a
                        href="mailto:0ahmedghoul0@gmail.com"
                        className="transition-opacity hover:opacity-75"
                        style={{ color: AMBER }}
                      >
                        email me directly
                      </a>
                    </p>
                  ) : (
                    <span className="font-mono text-[11px]" style={{ color: ASH }}>
                      // all fields required
                    </span>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      backgroundColor: status === "sending" ? "transparent" : AMBER,
                      color:           status === "sending" ? AMBER : INK,
                      border:          `1px solid ${AMBER}`,
                      outlineColor:    AMBER,
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <span>executing</span>
                        <span className="animate-pulse">_</span>
                      </>
                    ) : (
                      <>
                        <span>./send_message.sh</span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* ── Footer note ───────────────────────────────────────────────── */}
        <motion.p
          className="mt-6 text-center font-mono text-[11px]"
          style={{ color: ASH }}
          variants={slide(2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Prefer email?{" "}
          <a
            href="mailto:0ahmedghoul0@gmail.com"
            className="transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2"
            style={{ color: AMBER, outlineColor: AMBER }}
          >
            0ahmedghoul0@gmail.com
          </a>
        </motion.p>

      </div>
    </section>
  );
};

export default ContactMe;