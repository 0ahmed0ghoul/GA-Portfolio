import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { useState } from "react";

const EducExper = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section id="education&experience" >
      <div className="w-full min-h-screen flex justify-center items-center bg-white px-4 py-10 sm:py-20 transition-colors duration-300">
      <div className="w-full max-w-3xl">
        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-3 mb-8 sm:mb-12 flex-wrap">
          <span className={`text-2xl sm:text-3xl font-semibold ${!isFlipped ? "text-gray-800 underline" : "text-gray-500"}`}>
            Education
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
            Experience
          </span>
        </div>

        {/* Flip Card Container */}
        <div className={`relative w-full h-96 sm:h-[28rem] perspective-1000 ${isFlipped ? "flipped" : ""}`}>
          {/* Front: Education */}
          <div className={`absolute w-full h-full backface-hidden transition-transform duration-700 ease-in-out transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : "rotate-y-0"}`}>
            <div className="w-full h-full bg-gray-50 border-2 border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-coral-red">
                Academic Journey
              </h2>
              <div className="flex-grow space-y-4 overflow-y-auto">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-800">2024:</span> Bachelor's Degree in Computer Science with honors (GPA: 3.7/4.0)
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-800">2023-2026:</span> Undergraduate studies at University of 8 May 1945, Guelma (Ranked top 3 in class)
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  label="View Certificates"
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
                Professional Experience
              </h2>
              <div className="flex-grow space-y-4 overflow-y-auto">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-800">2024 – Agriculture Institution:</span> Developed a Python-based student management system that improved efficiency by 60%.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-800">2025 – Sonatrach:</span> Engineered a LAN monitoring solution for the Technology & Development division that optimized software resource usage.
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  label="See Projects"
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
