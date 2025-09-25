import { useTranslation } from "react-i18next";
import {
  containerVariants,
  imageVariants,
  infoVariants,
  itemVariants,
  projects,
} from "../constants";


import { Button, ProjectCard } from "../components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const PROJECT_KEYS = {
  TITLE_PART1: "projects.title_part1",
  TITLE_PART2: "projects.title_part2",
  SUBTITLE: "projects.subtitle",
  VIEW_BUTTON: "projects.view_project_button",
  SHOWCASE_ALT: "projects.project_showcase_alt",
  THUMBNAIL_ALT: "projects.project_thumbnail_alt",
  VIEW_CODE: "projects.view_code",
  LIVE_DEMO: "projects.live_demo",
  TECH_LABEL: "projects.tech_label",
  ALL_PROJECTS: "projects.all_projects",
  CATEGORY_WEB: "projects.category_web",
  CATEGORY_DESKTOP: "projects.category_desktop", 
  CATEGORY_UI: "projects.category_ui",
  CATEGORY_INTERNSHIP: "projects.category_internship",
  STATUS_COMPLETED: "projects.status_completed",
  STATUS_IN_PROGRESS: "projects.status_in_progress",
  SEE_MORE: "projects.see_more",
};

const Projects = () => {
  const { t } = useTranslation();

  // State for the currently selected project
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [direction, setDirection] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleProjectChange = (project, index) => {
    setDirection(index > prevIndex ? 1 : -1);
    setPrevIndex(index);
    setSelectedProject(project);
  };

  // Only show the first 5 projects
  const displayedProjects = projects.slice(0, 5);

  // // Category options
  // const categories = [
  //   { key: 'all', label: t('projects.all_projects') },
  //   { key: 'category_web', label: t(PROJECT_KEYS.CATEGORY_WEB) },
  //   { key: 'category_desktop', label: t(PROJECT_KEYS.CATEGORY_DESKTOP) },
  //   { key: 'category_ui', label: t(PROJECT_KEYS.CATEGORY_UI) },
  //   { key: 'category_internship', label: t(PROJECT_KEYS.CATEGORY_INTERNSHIP) },
  // ];

  // Filter projects based on category
  const filteredProjects = activeCategory === 'all' 
    ? displayedProjects 
    : displayedProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-coral-red to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-center gap-5 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="text-sm font-montserrat font-semibold text-coral-red/90 uppercase tracking-wide">
              {t("projects.projects")}
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-palanquin font-bold text-center text-white">
              {t(PROJECT_KEYS.TITLE_PART1)}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-purple-600">
                {t(PROJECT_KEYS.TITLE_PART2)}
              </span>
            </h2>
            <div className="mt-4 max-w-3xl">
              <p className="text-lg font-montserrat text-slate-300 text-center">
                {t(PROJECT_KEYS.SUBTITLE)}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filters
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? 'bg-coral-red text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div> */}

        <div className="relative flex flex-col items-center">
          <div className="flex flex-col xl:flex-row items-start justify-center gap-10 xl:gap-16 w-full">
            {/* Project Info */}
            <div className="w-full xl:w-2/5 order-2 xl:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.nameKey}
                  variants={infoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 h-full flex flex-col"
                >
                  <div>
                    {/* Category and Status Badges */}
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs font-medium px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">
                        {t(`projects.${selectedProject.category}`)}
                      </span>
                      <span className="text-xs font-medium px-3 py-1 bg-green-900/30 text-green-300 rounded-full">
                        {t(`projects.${selectedProject.status}`)}
                      </span>
                    </div>

                    <div>
                      <p className="font-palanquin font-bold text-2xl md:text-3xl text-white">
                        {t(`projects.${selectedProject.nameKey}`)}
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
                        {selectedProject.Date} • {selectedProject.role}
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4 mb-6">
                        {t(`projects.${selectedProject.descKey}`)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">
                        {t(PROJECT_KEYS.TECH_LABEL)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techs.split(" ").map((tech, index) => (
                          <motion.span
                            key={index}
                            className="bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        label={t(PROJECT_KEYS.VIEW_BUTTON)}
                        backgroundColor="bg-coral-red"
                        borderColor="border-coral-red"
                        textColor="text-white"
                        hover="hover:bg-coral-red/90 hover:border-coral-red/90 transition-all duration-300 shadow-lg hover:shadow-coral-red/30"
                        onClick={() => window.open(selectedProject.link, "_blank")}
                      />
                      
                      {selectedProject.github && (
                        <Button
                          label={t(PROJECT_KEYS.VIEW_CODE)}
                          backgroundColor="bg-transparent"
                          borderColor="border-slate-600"
                          textColor="text-slate-300"
                          hover="hover:bg-slate-700 transition-all duration-300"
                          onClick={() => window.open(selectedProject.github, "_blank")}
                        />
                      )}
                      
                      {selectedProject.demo && (
                        <Button
                          label={t(PROJECT_KEYS.LIVE_DEMO)}
                          backgroundColor="bg-transparent"
                          borderColor="border-green-600"
                          textColor="text-green-400"
                          hover="hover:bg-green-900/20 transition-all duration-300"
                          onClick={() => window.open(selectedProject.demo, "_blank")}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Main Project Image */}
            <div className="w-full xl:w-3/5 order-1 xl:order-2">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={selectedProject.imgURL}
                    src={selectedProject.imgURL}
                    alt={t(PROJECT_KEYS.SHOWCASE_ALT)}
                    className="w-full h-auto object-cover rounded-2xl"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                
                {/* Project navigation arrows */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                  <button 
                    className="bg-slate-800/90 p-2 rounded-full shadow-md hover:bg-slate-700 transition-colors"
                    onClick={() => {
                      const currentIndex = displayedProjects.findIndex(p => p.nameKey === selectedProject.nameKey);
                      const prevIndex = (currentIndex - 1 + displayedProjects.length) % displayedProjects.length;
                      handleProjectChange(displayedProjects[prevIndex], prevIndex);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="bg-slate-800/90 p-2 rounded-full shadow-md hover:bg-slate-700 transition-colors"
                    onClick={() => {
                      const currentIndex = displayedProjects.findIndex(p => p.nameKey === selectedProject.nameKey);
                      const nextIndex = (currentIndex + 1) % displayedProjects.length;
                      handleProjectChange(displayedProjects[nextIndex], nextIndex);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Thumbnails */}
          <motion.div
            className="mt-16 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-palanquin font-bold text-center mb-8 text-white">
              {t(PROJECT_KEYS.ALL_PROJECTS)}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.nameKey}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="flex justify-center"
                >
                  <ProjectCard
                    index={index}
                    project={{
                      ...project,
                      name: t(`projects.${project.nameKey}`),
                      desc: t(`projects.${project.descKey}`),
                    }}
                    isActive={selectedProject.imgURL === project.imgURL}
                    onClick={() => handleProjectChange(project, index)}
                  />
                </motion.div>
              ))}
            </div>

           
          </motion.div>
           {/* See More Projects Button */}
           <div className="mt-12 text-center">
           <Link to="/show/projects">
              <Button
                label={t(PROJECT_KEYS.SEE_MORE)}
                backgroundColor="bg-transparent"
                borderColor="border-slate-600"
                textColor="text-slate-300"
                hover="hover:bg-slate-700 transition-all duration-300"
              />
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;