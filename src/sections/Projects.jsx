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
const PROJECT_KEYS = {
  TITLE_PART1: "projects.title_part1",
  TITLE_PART2: "projects.title_part2",
  SUBTITLE: "projects.subtitle",
  VIEW_BUTTON: "projects.view_project_button",
  SHOWCASE_ALT: "projects.project_showcase_alt",
  THUMBNAIL_ALT: "projects.project_thumbnail_alt",
};

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();

  // State for the currently selected project
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [direction, setDirection] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleProjectChange = (project, index) => {
    setDirection(index > prevIndex ? 1 : -1);
    setPrevIndex(index);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="max-container max-sm:mt-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-5"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-palanquin font-bold text-center dark:text-white">
            {t(PROJECT_KEYS.TITLE_PART1)}{" "}
            <span className="text-coral-red">
              {t(PROJECT_KEYS.TITLE_PART2)}
            </span>
          </h2>
          <p className="lg:max-w-lg font-montserrat text-slate-gray text-center my-2 dark:text-slate-300">
            {t(PROJECT_KEYS.SUBTITLE)}
          </p>
        </motion.div>
      </motion.div>

      <div
        className="relative flex flex-col xl:min-h-[620px] dark:gb-slate-900 py-5"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-3 w-full">
          {/* Main Project Image */}
          <div
            className="w-full max-w-[500px] h-[350px] sm:h-[400px] md:h-[500px] border-2 rounded-xl overflow-hidden bg-cover bg-center bg-white"
            style={{ boxShadow: "0 10px 15px -3px #ff6452" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={selectedProject.imgURL}
                src={selectedProject.imgURL}
                alt={t(PROJECT_KEYS.SHOWCASE_ALT)}
                className="w-full h-full object-cover"
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Project Info */}
          <div className="flex-1 rounded-xl p-4 w-full max-w-[500px] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-between gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.nameKey}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col h-full"
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="font-palanquin font-bold text-3xl dark:text-white">
                    {t(`projects.${selectedProject.nameKey}`)}
                  </p>
                  <p className="text-slate-gray dark:text-slate-300">{selectedProject.Date}</p>
                  <p className="info-text my-4 sm:my-6 md:my-10 dark:text-slate-300">
                    {t(`projects.${selectedProject.descKey}`)}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.split(" ").map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-coral-red text-white-400 px-3 py-1 rounded-3xl border-2 border-white-400 text-md hover:text-black hover:bg-white transition duration-300 select-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div>
                    <Button
                      label={t(PROJECT_KEYS.VIEW_BUTTON)}
                      backgroundColor="bg-transparent"
                      borderColor="border-slate-gray"
                      textColor="text-slate-gray"
                      darkMode = 'dark:text-slate-300 border-slate-300'
                      hover="hover:bg-black hover:text-white hover:border-black transition duration-200 "
                      onClick={() =>
                        window.open(selectedProject.link, "_blank")
                      }
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Thumbnails */}
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full px-5"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.nameKey}
              variants={itemVariants}
              whileHover={{ y: -5 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
