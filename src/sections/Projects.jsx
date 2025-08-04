import { containerVariants, imageVariants, infoVariants, itemVariants, projects, } from "../constants";
import { Button, ShoeCard } from "../components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { classroom } from "../assets/images";

const Projects = () => {
  const [bigProjectImg, setbigProjectImg] = useState(classroom);
  const [bigProjectInfo, setbigProjectInfo] = useState([
    projects[0].name,
    projects[0].Date,
    projects[0].techs,
    projects[0].link,
    projects[0].desc
  ]);
  const [direction, setDirection] = useState(0); // For slide direction
  const [prevIndex, setPrevIndex] = useState(0); // Track previous index for animation

  const handleProjectChange = (shoe, proj, index) => {
    setDirection(index > prevIndex ? 1 : -1);
    setPrevIndex(index);
    setbigProjectImg(shoe);
    setbigProjectInfo(proj);
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
          <h2 className="text-4xl font-palanquin font-bold text-center">
            Few of my <span className="text-coral-red"> Projects </span>
          </h2>
          <p className="lg:max-w-lg font-montserrat text-slate-gray text-center my-2">
            Here are some of the projects I have worked on recently. Each
            project showcases my skills in various technologies and my ability
            to deliver high-quality solutions.
          </p>
        </motion.div>
      </motion.div>

      <div className="relative flex flex-col xl:min-h-[620px] bg-primary bg-hero bg-cover bg-center py-5">
        {/* Project section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-3 w-full">
          {/* Image */}
          <div className="w-full max-w-[500px] h-[350px] sm:h-[400px] md:h-[500px] flex justify-center items-center border-2 rounded-xl overflow-hidden  bg-white" style={{boxShadow:'0 10px 15px -3px #ff6452'}}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={bigProjectImg}
                src={bigProjectImg}
                alt="project showcase"
                className="w-full h-full object-contain p-4"
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          {/* Info Box */}
          <div className="flex-1 rounded-xl p-4 w-full max-w-[500px] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-between gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={bigProjectInfo[0]}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col h-full"
              >
                <div>
                  <p className="font-palanquin font-bold text-3xl">
                    {bigProjectInfo[0]}
                  </p>
                  <p className="text-slate-gray">{bigProjectInfo[1]}</p>
                  <p className="info-text my-4 sm:my-6 md:my-10">
                    {bigProjectInfo[4]}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {bigProjectInfo[2].split(" ").map((tech, index) => (
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
                      label="View project"
                      backgroundColor="bg-transparent"
                      borderColor="border-slate-gray"
                      textColor="text-slate-gray"
                      hover="hover:bg-black hover:text-white hover:border-black transition duration-200"
                      onClick={() => window.open(bigProjectInfo[3], "_blank")}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project list */}
        <motion.div 
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full px-5"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <ShoeCard
                index={index}
                project={project}
                changeBigProjectImage={(shoe) => setbigProjectImg(shoe)}
                changeBigProjectInfo={(proj) => handleProjectChange(project.imgURL, proj, index)}
                bigProjectInfo={bigProjectInfo}
                bigShoeImg={bigProjectImg}
                i={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;