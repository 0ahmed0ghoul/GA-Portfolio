import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

// Same tokens as everywhere else in the portfolio
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

// SVG ring geometry — sits exactly inside the 48×48 button face
const RADIUS       = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ≈ 131.95

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress]   = useState(0);
  const [hovered, setHovered]     = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY   = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollY > 300);
      setProgress(maxScroll > 0 ? scrollY / maxScroll : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Scroll to top"
          title="Scroll to top"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y:  0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed bottom-6 right-4 sm:bottom-10 sm:right-8 z-50
                     w-12 h-12 flex items-center justify-center
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: `${SURFACE}e6`,
            backdropFilter: "blur(8px)",
            border: `1px solid ${hovered ? AMBER : BORDER}`,
            outlineColor: AMBER,
            transition: "border-color 0.2s ease",
          }}
        >
          {/*
           * Scroll-progress ring — drawn in SVG directly over the button face.
           * Rotated -90° so the arc starts at 12 o'clock (top).
           */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 48 48"
            style={{ transform: "rotate(-90deg)" }}
          >
            {/* track — always visible, very faint */}
            <circle
              cx="24" cy="24" r={RADIUS}
              fill="none"
              stroke={BORDER}
              strokeWidth="1.5"
            />
            {/* progress arc — fills clockwise as the user scrolls */}
            <circle
              cx="24" cy="24" r={RADIUS}
              fill="none"
              stroke={AMBER}
              strokeWidth="1.5"
              strokeLinecap="butt"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.12s linear" }}
            />
          </svg>

          {/* Icon — transitions from ASH to AMBER on hover */}
          <ChevronUp
            aria-hidden="true"
            className="relative z-10 transition-colors duration-200"
            size={16}
            style={{ color: hovered ? AMBER : ASH }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default UpButton;