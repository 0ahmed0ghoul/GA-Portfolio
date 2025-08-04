import { arrowRight, education, experience } from "../assets/icons";
import { Button } from "../components";

const EducExper = () => {
  return (
    <section id="education&experience">
       <h2 className='font-palanquin capitalize text-4xl  font-bold mb-10 pt-16'>
          
          <span className='text-coral-red'> Education </span>&
          <span className='text-coral-red'> Experience </span>
        </h2>
      <div className="flex justify-between items-center max-xl:flex-col gap-10 max-container">
      {/* Education Card */}
      <div className="flex-1 sm:w-[350px] sm:min-w-[450px] h-[550px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-50 border border-gray-100">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full shadow-md">
          <img 
            src={education}  
            width={24} 
            height={24} 
            alt="Education icon" 
            className="filter brightness-0 invert"
          />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-900">
          Academic Journey
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-600">
          <span className="font-semibold text-gray-800">2024:</span> Bachelor's Degree in Computer Science with honors (GPA: 3.7/4.0)
          <br /><br />
          <span className="font-semibold text-gray-800">2023-2026:</span> Undergraduate studies at University of 8 May 1945, Guelma (Ranked top 3 in class)
        </p>
        <div className="mt-6">
          <Button 
            label="View Certificates" 
            iconURL={arrowRight} 
            backgroundColor="bg-coral-red" 
            borderColor="border-coral-red" 
            textColor="text-white"
          />
        </div>
      </div>

      {/* Experience Card */}
      <div className="flex-1 sm:w-[350px] sm:min-w-[450px] w-full h-[550px] rounded-[20px] shadow-3xl px-10 py-16 hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-50 border border-gray-100">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full shadow-md">
          <img 
            src={experience} 
            width={24} 
            height={24} 
            alt="Experience icon"
            className="filter brightness-0 invert"
          />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold text-gray-900">
          Professional Experience
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-600">
          <span className="font-semibold text-gray-800">2024 - Agriculture Institution:</span> Developed a Python-based student management system that automated administrative processes, resulting in 60% efficiency improvement.
          <br /><br />
          <span className="font-semibold text-gray-800">2025 - Sonatrach (Africa's largest energy company):</span> Engineered a LAN monitoring solution for the Technology & Development division that optimized software resource allocation and performance tracking.
        </p>
        <div className="mt-6">
          <Button 
            label="See Projects" 
            iconURL={arrowRight} 
            backgroundColor="bg-coral-red" 
            borderColor="border-coral-red" 
            textColor="text-white"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default EducExper;