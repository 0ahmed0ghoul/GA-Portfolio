import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { leetcode, hc, flex } from "../assets/images";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const EducExper = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("education");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: INK }}>
      {/* Grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-educ">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-educ)" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs sm:text-sm tracking-wider block mb-2" style={{ color: ASH }}>
            {t('education_experience.subtitle') || "My Journey"}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: PAPER }}>
            {t('education_experience.title') || "Education & Experience"}
          </h2>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["education", "experience", "achievements"].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-5 py-2 rounded-md font-mono text-sm font-medium transition-all duration-200 border`}
              style={{
                backgroundColor: activeView === view ? AMBER : 'transparent',
                color: activeView === view ? INK : ASH,
                borderColor: activeView === view ? AMBER : BORDER,
              }}
              onMouseEnter={(e) => {
                if (activeView !== view) {
                  e.currentTarget.style.color = PAPER;
                  e.currentTarget.style.borderColor = AMBER;
                }
              }}
              onMouseLeave={(e) => {
                if (activeView !== view) {
                  e.currentTarget.style.color = ASH;
                  e.currentTarget.style.borderColor = BORDER;
                }
              }}
            >
              {t(`education_experience.${view}`)}
            </button>
          ))}
        </div>

        {/* Content Area – CV Timeline */}
        <div className="rounded-xl border p-6" style={{ backgroundColor: SURFACE, borderColor: BORDER }}>
          <AnimatePresence mode="wait">
            {activeView === "education" && (
              <motion.div
                key="education"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                {/* Education Item 1 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Year column */}
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2024
                      </span>
                      {/* Dotted line connector (visible only on md+) */}
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  {/* Content column */}
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.bachelors_degree')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.bachelors_details') || "Completed Bachelor's degree in relevant field"}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Education Item 2 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2023–2026
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.undergraduate_studies')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.undergraduate_details') || "Ongoing undergraduate studies with focus on development"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeView === "experience" && (
              <motion.div
                key="experience"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                {/* Experience Item 1 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2024
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.agriculture_institution')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.agriculture_description')}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="font-mono text-[11px] px-2 py-1 rounded" style={{ color: ASH, backgroundColor: `${BORDER}60`, border: `1px solid ${BORDER}` }}>
                          Web Development
                        </span>
                        <span className="font-mono text-[11px] px-2 py-1 rounded" style={{ color: ASH, backgroundColor: `${BORDER}60`, border: `1px solid ${BORDER}` }}>
                          Database Design
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Item 2 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2025
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.sonatrach')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.sonatrach_description')}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="font-mono text-[11px] px-2 py-1 rounded" style={{ color: ASH, backgroundColor: `${BORDER}60`, border: `1px solid ${BORDER}` }}>
                          PFE
                        </span>
                        <span className="font-mono text-[11px] px-2 py-1 rounded" style={{ color: ASH, backgroundColor: `${BORDER}60`, border: `1px solid ${BORDER}` }}>
                          Software Development
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeView === "achievements" && (
              <motion.div
                key="achievements"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-8"
              >
                {/* Achievement 1 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2024
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.leetcode')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.leetcode_desc')}
                      </p>
                      <img src={leetcode} alt="LeetCode" className="w-full max-w-xs mt-3 rounded-lg border" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                </motion.div>

                {/* Achievement 2 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2025
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.hakathon')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.hakathon_desc')}
                      </p>
                      <img src={hc} alt="Hackathon" className="w-full max-w-xs mt-3 rounded-lg border" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                </motion.div>

                {/* Achievement 3 */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex items-start md:justify-end">
                    <div className="relative">
                      <span className="font-mono text-sm font-semibold px-4 py-1.5 rounded-md inline-block" style={{ backgroundColor: `${AMBER}20`, color: AMBER }}>
                        2025
                      </span>
                      <div className="hidden md:block absolute top-1/2 left-full w-8 h-0 border-t-2 border-dashed" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-lg p-5 border-l-4" style={{ backgroundColor: `${BORDER}30`, borderColor: AMBER }}>
                      <h4 className="font-display font-semibold text-lg" style={{ color: PAPER }}>
                        {t('education_experience.flex_box_grid')}
                      </h4>
                      <p className="text-sm mt-1" style={{ color: BODY }}>
                        {t('education_experience.flex_box_grid_desc')}
                      </p>
                      <img src={flex} alt="Flexbox & Grid" className="w-full max-w-xs mt-3 rounded-lg border" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EducExper;