import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { statistics } from "../constants";
import { Button } from "../components";
import { me } from "../assets/images";
import { motion, useInView, useAnimation } from "framer-motion";
import { down, experience } from "../assets/icons";

const _AboutMe = () => {
  const { t } = useTranslation();
  const [hoveredStat, setHoveredStat] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  // Ultra-compact animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -2,
      transition: { duration: 0.15 },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1,
        ease: "circOut",
        delay: 0.2,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.2,
      },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03 + 0.4,
        duration: 0.3,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.15,
      },
    },
  };

  // Animated counter for statistics
  const Counter = ({ value, suffix = "+" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const duration = 1000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-coral-red to-purple-600 bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
    );
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
<section
  id="aboutme"
  className="relative z-0 min-h-screen lg:h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
  ref={ref}
> 
      {/* Minimal background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -right-16 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-coral-red to-purple-600" />

      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-16">
          {/* Image Section - Responsive */}
          <motion.div
            className="relative w-full sm:w-auto lg:w-[38%] flex justify-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-md"
              variants={imageVariants}
              whileHover="hover"
              onHoverStart={() => setImageLoaded(true)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={me}
                  alt={t("about.my_picture_alt")}
                  className={`w-full z-1 max-w-[280px] sm:max-w-xs lg:max-w-sm h-auto object-cover transition-all duration-300 ${
                    imageLoaded ? "scale-100" : "scale-102"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-slate-800/80 px-2 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 border border-slate-700/50 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-slate-200">
                  {t("about.available")}
                </span>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-slate-800/80 p-2.5 sm:p-3 rounded-lg shadow-sm border border-slate-700/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-1.5">
                <div className="text-lg sm:text-xl font-bold text-coral-red">2+</div>
                <img
                  src={experience}
                  alt="Experience"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="text-xs text-slate-300 mt-0.5 whitespace-nowrap">
                {t("about.years_experience")}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section - Responsive */}
          <div className="w-full lg:w-[62%] flex flex-col items-center lg:items-start">
            <motion.div
              className="w-full flex flex-col justify-between gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {/* Introduction */}
              <div className="text-center lg:text-left">
                <motion.h4
                  className="text-xs sm:text-sm font-semibold text-coral-red uppercase tracking-wide mb-2"
                  variants={itemVariants}
                >
                  {t("about.welcome_note")}
                </motion.h4>

                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-palanquin font-bold mb-3 sm:mb-4"
                  variants={titleVariants}
                >
                  <span className="text-slate-100">{t("about.greeting")} </span>
                  <span className="bg-gradient-to-r from-coral-red to-purple-600 bg-clip-text text-transparent">
                    {t("about.my_name")}
                  </span>
                </motion.h1>

                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4"
                  variants={containerVariants}
                >
                  {["profession1", "profession2"].map((prof) => (
                    <span
                      key={prof}
                      className="px-3 py-1.5 bg-slate-800/40 text-slate-200 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {t(`about.${prof}`)}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  {t("about.description")}
                </motion.p>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 text-slate-400"
                  variants={itemVariants}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">
                    {t("about.from")}{" "}
                    <span className="text-coral-red font-medium">
                      {t("about.location")}
                    </span>
                  </span>
                </motion.div>
              </div>

              {/* Language Proficiency */}
              <motion.div
                className="w-full bg-slate-800/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-slate-700/20"
                variants={containerVariants}
              >
                <motion.h2
                  className="text-base sm:text-lg font-bold text-slate-100 mb-3 sm:mb-4 text-center lg:text-left"
                  variants={titleVariants}
                >
                  {t("about.language_proficiency")}
                </motion.h2>

                <div className="space-y-3 sm:space-y-3.5">
                  {[
                    { key: "english", level: 60 },
                    { key: "german", level: 20 },
                    { key: "portuguese", level: 10 },
                  ].map((lang) => (
                    <div key={lang.key} className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm font-medium text-slate-300 w-20 sm:w-24">
                        {t(`about.${lang.key}`)}
                      </span>
                      <div className="flex-1 h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-coral-red to-purple-600 rounded-full"
                          variants={progressBarVariants}
                          custom={lang.level}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-coral-red w-12 sm:w-16 text-right">
                        {t(`about.${lang.key}_level`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Statistics & Button */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {statistics.map((stat, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={statCardVariants}
                      initial="hidden"
                      animate={controls}
                      whileHover="hover"
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                      className="bg-slate-800/30 p-3 sm:p-4 rounded-lg shadow-sm border border-slate-700/20 group"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 rounded-md bg-slate-700/40 flex items-center justify-center">
                        <img
                          src={stat.icon}
                          alt={stat.label}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
                      <p className="text-center mb-1">
                        <Counter value={stat.value} />
                      </p>
                      <p className="text-xs sm:text-sm text-center text-slate-300 truncate px-1">
                        {t(`stats.${stat.label.toLowerCase().replace(" ", "_")}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="flex items-center justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="#projects" className="w-full sm:w-auto">
                    <Button
                      label="Projects"
                      iconURL={down}
                      backgroundColor="bg-gradient-to-r from-coral-red to-purple-600 hover:from-purple-600 hover:to-coral-red"
                      textColor="text-white"
                      borderColor="border-transparent"
                      className="text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 w-full sm:w-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border border-slate-600/50 flex justify-center">
          <div className="w-0.5 h-2 bg-gradient-to-b from-coral-red to-purple-600 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default _AboutMe;