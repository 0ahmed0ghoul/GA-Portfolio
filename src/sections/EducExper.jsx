import { arrowRight } from "../assets/icons";
import { flex, hc, leet, leetcode, nike } from "../assets/images";
import { Button } from "../components";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const EducExper = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState("education"); // Can be: 'education', 'experience', 'achievements'

  const isActive = (view) =>
    activeView === view
      ? "text-gray-800 underline dark:text-slate-200"
      : "text-slate-400";

  return (
    <section id="education_experience">
      <div className="w-full min-h-screen flex justify-center items-center bg-white dark:bg-slate-900 px-4 py-10 sm:py-20 transition-colors duration-300">
        <div className="w-full max-w-3xl">

          {/* Toggle Tabs */}
          <div className="flex justify-between items-center gap-3 mb-8 sm:mb-12 flex-wrap cursor-pointer">
            <span
              className={`text-2xl sm:text-3xl font-semibold ${isActive("education")}`}
              onClick={() => setActiveView("education")}
            >
              {t('education_experience.education')}
            </span>
            <span
              className={`text-2xl sm:text-3xl font-semibold ${isActive("experience")}`}
              onClick={() => setActiveView("experience")}
            >
              {t('education_experience.experience')}
            </span>
            <span
              className={`text-2xl sm:text-3xl font-semibold ${isActive("achievements")}`}
              onClick={() => setActiveView("achievements")}
            >
              {t('education_experience.Achievements')}
            </span>
          </div>

          {/* Views */}
          <div className="relative w-full h-96 sm:h-[28rem]">
            {activeView === "education" && (
              <div className="w-full h-full bg-gray-50 dark:bg-opacity-20 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                  {t('education_experience.academic_journey')}
                </h2>
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2024:</span> {t('education_experience.bachelors_degree')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2023-2026:</span> {t('education_experience.undergraduate_studies')}
                  </p>
                </div>
              </div>
            )}

            {activeView === "experience" && (
              <div className="w-full h-full bg-gray-50 dark:bg-opacity-20 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                  {t('education_experience.professional_experience')}
                </h2>
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <p className="sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2024 – {t('education_experience.agriculture_institution')}:</span> {t('education_experience.agriculture_description')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2025 – {t('education_experience.sonatrach')}:</span> {t('education_experience.sonatrach_description')}
                  </p>
                </div>
              </div>
            )}

            {activeView === "achievements" && (
              <div className="w-full h-full bg-gray-50 dark:bg-opacity-20 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                  {t('education_experience.Achievements')}
                </h2>
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2024: – {t('education_experience.leetcode')}</span> {t('education_experience.leetcode_desc')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2025: – {t('education_experience.hakathon')}</span> {t('education_experience.hakathon_desc')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                    <span className="font-semibold text-gray-800 dark:text-white">2025: – {t('education_experience.flex_box_grid')}</span> {t('education_experience.flex_box_grid_desc')}
                  </p>
                  <div className="flex flex-col justify-center gap-2 items-center">
                    <img src={leetcode} className="w-[70%]"/>
                    <img src={hc}  className="w-[70%]" />
                    <img src={flex} className="w-[70%]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducExper;
