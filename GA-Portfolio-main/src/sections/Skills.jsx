import React from "react";
import { skills } from "../constants";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      aria-label={t('skills.section_label')}
      className="max-container w-full py-10 flex justify-center items-center"
    >
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skillKey, i) => (
            <span
              key={`${skillKey}-${i}`}
              className="text-sm sm:text-base md:text-lg mx-4 whitespace-nowrap text-slate-700 dark:text-white"
            >
              {t(`skills.${skillKey}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
