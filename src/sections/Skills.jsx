import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
      id="skills"
      aria-label="Skills section"
    >
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {[...skills, ...skills].map((skill, i) => (
            <span key={`${skill}-${i}`} className="info-text inline-block mx-4">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;