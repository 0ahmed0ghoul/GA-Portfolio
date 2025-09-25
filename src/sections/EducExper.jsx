import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { leetcode, hc, flex } from "../assets/images";

const EducExper = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("education");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
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
    <section  >
      <div className="relative py-16 px-6  lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-coral-red/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-sm font-montserrat font-semibold text-coral-red uppercase tracking-wider mb-2 block">
            {t('education_experience.subtitle') || "My Journey"}
          </span>
          <h2 className="font-palanquin text-3xl md:text-4xl font-bold text-white">
            {t('education_experience.title') || "Education & Experience"}
          </h2>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {["education", "experience", "achievements"].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeView === view
                  ? 'bg-coral-red text-white shadow-lg shadow-coral-red/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t(`education_experience.${view}`)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeView === "education" && (
              <motion.div
                key="education"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="h-full"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-palanquin font-bold text-center text-white mb-8"
                >
                  {t('education_experience.academic_journey')}
                </motion.h3>
                
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Education Item 1 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-coral-red">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.bachelors_degree')}
                      </h4>
                      <span className="text-sm bg-coral-red/20 text-coral-red px-2 py-1 rounded">
                        2024
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      {t('education_experience.bachelors_details') || "Completed Bachelor's degree in relevant field"}
                    </p>
                  </div>

                  {/* Education Item 2 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.undergraduate_studies')}
                      </h4>
                      <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        2023-2026
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      {t('education_experience.undergraduate_details') || "Ongoing undergraduate studies with focus on development"}
                    </p>
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
                className="h-full"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-palanquin font-bold text-center text-white mb-8"
                >
                  {t('education_experience.professional_experience')}
                </motion.h3>
                
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Experience Item 1 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-purple-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.agriculture_institution')}
                      </h4>
                      <span className="text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                        2024
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      {t('education_experience.agriculture_description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded">Web Development</span>
                      <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded">Database Design</span>
                    </div>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.sonatrach')}
                      </h4>
                      <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        2025
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">
                      {t('education_experience.sonatrach_description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded">PFE</span>
                      <span className="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded">Software Development</span>
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
                className="h-full"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-palanquin font-bold text-center text-white mb-8"
                >
                  {t('education_experience.achievements')}
                </motion.h3>
                
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Achievement 1 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.leetcode')}
                      </h4>
                      <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                        2024
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('education_experience.leetcode_desc')}
                    </p>
                    <img src={leetcode} alt="LeetCode" className="w-full max-w-xs mx-auto rounded-lg" />
                  </div>

                  {/* Achievement 2 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-pink-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.hakathon')}
                      </h4>
                      <span className="text-sm bg-pink-500/20 text-pink-400 px-2 py-1 rounded">
                        2025
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('education_experience.hakathon_desc')}
                    </p>
                    <img src={hc} alt="Hackathon" className="w-full max-w-xs mx-auto rounded-lg" />
                  </div>

                  {/* Achievement 3 */}
                  <div className="bg-slate-700/30 rounded-lg p-5 border-l-4 border-indigo-500">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">
                        {t('education_experience.flex_box_grid')}
                      </h4>
                      <span className="text-sm bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded">
                        2025
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('education_experience.flex_box_grid_desc')}
                    </p>
                    <img src={flex} alt="Flexbox & Grid" className="w-full max-w-xs mx-auto rounded-lg" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EducExper;