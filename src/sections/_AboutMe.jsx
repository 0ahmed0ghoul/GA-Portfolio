import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { statistics } from "../constants";
import { Button } from "../components";
import { me } from "../assets/images";
import { motion, AnimatePresence } from "framer-motion";
import { down, experience } from "../assets/icons";

const _AboutMe = () => {
  const { t } = useTranslation();
  const [activeStat, setActiveStat] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const legendVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
      },
    },
  };

  // Animation for stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStat(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="aboutme" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-coral-red to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="relative lg:w-2/5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={me}
                alt={t("about.my_picture_alt")}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating badges */}
              <div className="absolute top-2 left-4  bg-slate-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                <div className="w-3 h-3 bg-coral-red rounded-full animate-pulse"></div>
                <span className="text-sm font-medium  text-slate-300">
                  {t("about.available")}
                </span>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4  bg-slate-800 p-4 rounded-2xl shadow-xl border  border-slate-700">
              <div className="text-3xl font-bold text-coral-red flex justify-between">
                2+ <img src={experience} alt="" />
              </div>
              <div className="text-sm  text-slate-400 mt-1 whitespace-nowrap">
                {t("about.years_experience")}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 flex flex-col items-center lg:items-start">
            {/* Introduction */}
            <div className="text-center lg:text-left mb-8">
              <h4 className="text-sm font-semibold text-coral-red uppercase tracking-wider mb-2">
                {t("about.welcome_note")}
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-palanquin font-bold  text-slate-100 mb-4">
                {t("about.greeting")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-purple-600">
                  {t("about.my_name")}
                </span>
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-coral-red/10 text-coral-red rounded-full text-sm font-medium">
                  {t("about.profession1")}
                </span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
                  {t("about.profession2")}
                </span>
              </div>

              <p className="text-lg  text-slate-300 leading-relaxed max-w-2xl">
                {t("about.description")}
              </p>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                <span>
                  {t("about.from")}{" "}
                  <span className="text-coral-red font-medium">
                    {t("about.location")}
                  </span>
                </span>
              </div>
            </div>
            <motion.div
              className="w-full max-w-2xl mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Title */}
              <motion.h2
                className="text-2xl font-bold text-slate-100 mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-coral-red after:to-purple-600 after:rounded-full"
                variants={titleVariants}
              >
                {t("about.language_proficiency")}
              </motion.h2>

              <motion.div className="space-y-6" variants={containerVariants}>
                {/* English */}
                <motion.div variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-300">
                      {t("about.english")}
                    </span>
                    <motion.span
                      className="text-sm font-semibold text-coral-red"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {t("about.english_level")}
                    </motion.span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-coral-red to-purple-600 rounded-full relative"
                      variants={progressBarVariants}
                      custom={60}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>

                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{
                          delay: 1.5,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* German */}
                <motion.div variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-300">
                      {t("about.german")}
                    </span>
                    <motion.span
                      className="text-sm font-semibold text-coral-red"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {t("about.german_level")}
                    </motion.span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-coral-red to-purple-600 rounded-full"
                      variants={progressBarVariants}
                      custom={20}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>

                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{
                          delay: 1.8,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Portuguese */}
                <motion.div variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-300">
                      {t("about.portuguese")}
                    </span>
                    <motion.span
                      className="text-sm font-semibold text-coral-red"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {t("about.portuguese_level")}
                    </motion.span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-to-r from-coral-red to-purple-600 rounded-full"
                      variants={progressBarVariants}
                      custom={10}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>

                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{
                          delay: 2.1,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Legend */}
              <motion.div
                className="flex justify-between mt-4 text-xs text-slate-400"
                variants={legendVariants}
              >
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("about.beginner")}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("about.intermediate")}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("about.advanced")}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t("about.fluent")}
                </motion.span>
              </motion.div>
            </motion.div>
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl mb-10">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className=" bg-slate-800 p-5 rounded-xl shadow-md border  border-slate-700 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-coral-red/10 flex items-center justify-center group-hover:bg-coral-red/20 transition-colors duration-300">
                    <img src={stat.icon} alt={stat.label} />
                  </div>

                  <p className="text-3xl font-palanquin font-bold text-coral-red mb-1">
                    {stat.value}+
                  </p>

                  <p className="text-sm font-montserrat  text-slate-300">
                    {t(`stats.${stat.label.toLowerCase().replace(" ", "_")}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#projects">
            <Button
              label="See Projects"
              iconURL={down}
              backgroundColor="bg-gradient-to-r from-coral-red to-purple-600"
              textColor="text-white"
              borderColor="border-transparent"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default _AboutMe;
