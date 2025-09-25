import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { all_projects } from "../constants";
import { useNavigate } from "react-router-dom";
import UpButton from "../components/UpButton";

const ShowProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  // Helper function to convert techs string to array
  const getTechArray = (techsString) => {
    if (!techsString) return [];
    return techsString.split(',').map(tech => tech.trim());
  };

  // Helper function to count unique technologies across all projects
  const getUniqueTechCount = () => {
    const allTechs = all_projects.flatMap(project => 
      getTechArray(project.techs)
    );
    return new Set(allTechs).size;
  };

  // Helper function to get max technologies in a project
  const getMaxTechCount = () => {
    return Math.max(...all_projects.map(project => 
      getTechArray(project.techs).length
    ));
  };
  useEffect(() => {
    const el = document.getElementById("proj");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth"});
      }, 100);
    }
  }, []);
  // Grid layout for all screen sizes
  const renderProjectGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full max-w-7xl mx-auto">
      {all_projects.map((project, index) => {
        const techArray = getTechArray(project.techs);
        
        return (
          <motion.div
            key={project.id || index}
            className="bg-white/5 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
            onClick={() => setActiveProject(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Project Image with Gradient Overlay */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.imgURL}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tech Stack Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                {techArray.slice(0, 3).map((technology, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-blue-600/90 text-white text-xs rounded-full font-medium backdrop-blur-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4 bg-gradient-to-b from-slate-800/50 to-slate-900/80">
              <h3 className="font-bold text-white text-lg mb-2 line-clamp-1">{project.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3">{project.desc}</p>
              
              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-xs text-gray-400 font-medium">
                  {techArray.slice(0, 2).join(', ')}
                  {techArray.length > 2 && ` +${techArray.length - 2}`}
                </span>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-8">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Return to Homepage Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
         id="proj"
      >
        <svg 
          className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span  className="text-sm font-medium">Back to Home</span>
      </motion.button>

      {/* Main Content */}
      <div  className="relative z-10 w-full pt-16"> {/* Added pt-16 for button spacing */}
        {/* Header */}
        <motion.div 
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Exploring {all_projects.length} innovative projects that showcase modern development practices, 
            creative solutions, and technical excellence.
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{all_projects.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {getMaxTechCount()}
              </div>
              <div className="text-gray-400 text-sm">Max Tech/Project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {getUniqueTechCount()}
              </div>
              <div className="text-gray-400 text-sm">Unique Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {renderProjectGrid()}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <img
                  src={activeProject.imgURL}
                  alt={activeProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all backdrop-blur-sm"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {activeProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {activeProject.desc}
                  </p>
                </div>
                
                {/* Technologies */}
                {activeProject.techs && (
                  <div className="mb-8">
                    <h3 className="text-white font-semibold text-xl mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {getTechArray(activeProject.techs).map((technology, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 font-medium"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {activeProject.features && (
                  <div className="mb-8">
                    <h3 className="text-white font-semibold text-xl mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  {activeProject.demoURL && (
                    <a
                      href={activeProject.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-lg"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {activeProject.githubURL && (
                    <a
                      href={activeProject.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 text-white py-4 rounded-xl text-center font-semibold hover:bg-slate-600 transition-all text-lg border border-white/10"
                    >
                      💻 View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <UpButton />

    </div>
  );
};

export default ShowProjects;