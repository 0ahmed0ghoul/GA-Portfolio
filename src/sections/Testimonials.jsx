import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { reviews } from "../constants";
import { ReviewCard } from "../components";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const Testimonials = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  // Generate consistent rotation per card based on index
  const getRotation = (index) => {
    const rotations = [-2, 1.5, -1, 2.5, -1.8, 0.8, -2.2, 1.2];
    return rotations[index % rotations.length];
  };

  // Scroll left/right helpers (optional)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const target = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-16 px-6 lg:px-8 overflow-hidden"
      id="testimonials"
      style={{ backgroundColor: INK }}
    >
      {/* Grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-testimonials">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-testimonials)" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-display text-center px-2 py-5 text-3xl md:text-4xl font-semibold"
          style={{ color: PAPER }}
        >
          {t("testimonials.title_part1")}
          <span style={{ color: AMBER }}> {t("testimonials.title_part2")} </span>
          {t("testimonials.title_part3")}
          <span style={{ color: AMBER }}> {t("testimonials.title_part4")} </span>
          {t("testimonials.title_part5")}
          <span style={{ color: AMBER }}> {t("testimonials.title_part6")} </span>
          {t("testimonials.title_part7")}
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="m-auto mt-4 max-w-2xl text-center text-base md:text-lg"
          style={{ color: BODY }}
        >
          {t("testimonials.subtitle")}
        </motion.p>

        {/* Horizontal Scroll Container */}
        <div className="relative mt-12">
          {/* Left Scroll Button (optional) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border transition-colors duration-200 hidden md:block"
            style={{
              backgroundColor: SURFACE,
              borderColor: BORDER,
              color: ASH,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
            onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
          >
            ←
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {/* Hide scrollbar for Chrome/Safari */}
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {reviews.map((review, index) => {
              const rotation = getRotation(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "center top",
                  }}
                >
                  {/* Sticky Note Card */}
                  <div
                    className="relative p-6 rounded-lg shadow-xl border transition-shadow duration-200 hover:shadow-2xl"
                    style={{
                      backgroundColor: PAPER,
                      borderColor: BORDER,
                      color: INK,
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.3)",
                    }}
                  >
                    {/* Pin / Tape decoration */}
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
                      style={{ backgroundColor: AMBER, boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                    />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-b from-white/60 to-transparent" />

                    {/* Content */}
                    <div className="mt-2">
                      {/* Avatar / Logo */}
                      {review.imgURL && (
                        <img
                          src={review.imgURL}
                          alt={t(`testimonials.${review.nameKey}`)}
                          className="w-14 h-14 rounded-full object-cover mx-auto border-2"
                          style={{ borderColor: AMBER }}
                        />
                      )}
                      <h4 className="font-display font-semibold text-lg text-center mt-2" style={{ color: INK }}>
                        {t(`testimonials.${review.nameKey}`)}
                      </h4>
                      <p className="text-center text-sm" style={{ color: ASH }}>
                        {t(`testimonials.${review.professionKey}`)}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed italic" style={{ color: INK }}>
                        "{t(`testimonials.${review.feedbackKey}`)}"
                      </p>
                      {review.linkedin && (
                        <div className="mt-4 text-center">
                          <a
                            href={review.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs underline transition-colors"
                            style={{ color: AMBER }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = INK)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = AMBER)}
                          >
                            LinkedIn
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Scroll Button (optional) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border transition-colors duration-200 hidden md:block"
            style={{
              backgroundColor: SURFACE,
              borderColor: BORDER,
              color: ASH,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
            onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
          >
            →
          </button>
        </div>

        {/* Optional indicator: dots or scroll hint */}
        <div className="mt-6 text-center font-mono text-xs" style={{ color: ASH }}>
          {t("testimonials.scroll_hint") || "← Scroll →"}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;