import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const EducExper = () => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="education_experience">
      <div className="w-full min-h-screen flex justify-center items-center bg-white px-4 py-10 sm:py-20 transition-colors duration-300">
        <div className="w-full max-w-3xl">
          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-3 mb-8 sm:mb-12 flex-wrap">
            <span className={`text-2xl sm:text-3xl font-semibold ${!isFlipped ? "text-gray-800 underline" : "text-gray-500"}`}>
              {t('education_experience.education')}
            </span>
            
            <label className="relative inline-flex items-center cursor-pointer mx-4">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isFlipped}
                onChange={() => setIsFlipped(!isFlipped)}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-coral-red transition-colors duration-300">
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transform transition-all duration-300 ${isFlipped ? "translate-x-7" : ""}`} />
              </div>
            </label>

            <span className={`text-2xl sm:text-3xl font-semibold ${isFlipped ? "text-gray-800 underline" : "text-gray-500"}`}>
              {t('education_experience.experience')}
            </span>
          </div>

          {/* Flip Card Container */}
          <div className={`relative w-full h-96 sm:h-[28rem] perspective-1000 ${isFlipped ? "flipped" : ""}`}>
            {/* Front: Education */}
            <div className={`absolute w-full h-full backface-hidden transition-transform duration-700 ease-in-out transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : "rotate-y-0"}`}>
              <div className="w-full h-full bg-gray-50 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                  {t('education_experience.academic_journey')}
                </h2>
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-800">2024:</span> {t('education_experience.bachelors_degree')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-800">2023-2026:</span> {t('education_experience.undergraduate_studies')}
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button
                    label={t('education_experience.view_certificates')}
                    iconURL={arrowRight}
                    backgroundColor="bg-coral-red"
                    borderColor="border-coral-red"
                    textColor="text-white"
                    hover="hover:text-black hover:bg-white transition duration-300 select-none"
                  />
                </div>
              </div>
            </div>

            {/* Back: Experience */}
            <div className={`absolute w-full h-full backface-hidden transition-transform duration-700 ease-in-out transform-style-preserve-3d ${isFlipped ? "rotate-y-0" : "rotate-y-180"}`}>
              <div className="w-full h-full bg-gray-50 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                  {t('education_experience.professional_experience')}
                </h2>
                <div className="flex-grow space-y-4 overflow-y-auto">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-800">2024 – {t('education_experience.agriculture_institution')}:</span> {t('education_experience.agriculture_description')}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    <span className="font-semibold text-gray-800">2025 – {t('education_experience.sonatrach')}:</span> {t('education_experience.sonatrach_description')}
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button
                    label={t('education_experience.see_projects')}
                    iconURL={arrowRight}
                    backgroundColor="bg-coral-red"
                    borderColor="border-coral-red"
                    textColor="text-white"
                    hover="hover:text-black hover:bg-white transition duration-300 select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducExper;