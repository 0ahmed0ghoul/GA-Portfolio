import { services } from "../constants";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Timeline animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-services">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-services)" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs sm:text-sm tracking-wider block mb-2" style={{ color: ASH }}>
            {t("services.subtitle") || "What I Offer"}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: PAPER }}>
            {t("services.title_part1")}{" "}
            <span style={{ color: AMBER }}>{t("services.title_part2")}</span>{" "}
            <span style={{ color: AMBER }}>{t("services.title_part3")}</span>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] top-0 bottom-0 origin-top"
            style={{ backgroundColor: BORDER }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Services as timeline items */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.labelKey}
                  variants={itemVariants}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-start lg:items-center gap-6 lg:gap-12 relative`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10" style={{ borderColor: AMBER, backgroundColor: INK }}>
                    <div className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: AMBER }} />
                  </div>

                  {/* Content side */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right lg:pr-4" : "lg:text-left lg:pl-4"}`}>
                    <div
                      className="p-6 rounded-xl border transition-colors duration-300"
                      style={{ backgroundColor: SURFACE, borderColor: BORDER }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = AMBER)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
                    >
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${AMBER}15` }}
                      >
                        <img
                          src={service.imgURL}
                          alt={t(`services.${service.labelKey}`)}
                          className="w-7 h-7 object-contain filter brightness-0 invert"
                        />
                      </div>

                      {/* Number */}
                      <div className="font-mono text-xs font-bold tracking-wider mb-1" style={{ color: AMBER }}>
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-semibold text-lg mb-2" style={{ color: PAPER }}>
                        {t(`services.${service.labelKey}`)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-4" style={{ color: BODY }}>
                        {t(`services.${service.subtextKey}`)}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {t(`services.${service.techsKey}`, { returnObjects: true }).map((tech, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[10px] px-2 py-1 rounded"
                            style={{
                              color: ASH,
                              backgroundColor: `${BORDER}60`,
                              border: `1px solid ${BORDER}`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for the other side */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;