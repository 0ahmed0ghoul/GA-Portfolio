import React from "react";
import { skills } from "../constants";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
      id="skills"
      aria-label={t('skills.section_label')}
    >
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {[...skills, ...skills].map((skillKey, i) => (
            <span key={`${skillKey}-${i}`} className="info-text inline-block mx-4">
              {t(`skills.${skillKey}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;