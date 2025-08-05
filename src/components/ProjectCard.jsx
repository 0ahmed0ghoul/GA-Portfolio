import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  changeBigProjectImage,
  changeBigProjectInfo,
  bigShoeImg,
  bigProjectInfo,
  i,
}) => {
  const handleClick = () => {
    if (bigShoeImg !== project.imgURL) {
      changeBigProjectImage(project.imgURL);
    }

    if (
      bigProjectInfo[0] !== project.name ||
      bigProjectInfo[1] !== project.Date
    ) {
      changeBigProjectInfo([
        project.name,
        project.Date,
        project.techs,
        project.link,
        project.desc
      ]);
    }
  };

  const isActive = bigShoeImg === project.imgURL;

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden ${
        isActive ? "ring-4 ring-coral-red" : "ring-2 ring-transparent"
      } cursor-pointer shadow-lg`}
      onClick={handleClick}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: i * 0.1 }
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-full aspect-square">
        {/* Main Image */}
        <motion.img
          src={project.imgURL}
          alt="project thumbnail"
          className="w-full h-full object-cover"
          initial={{ opacity: 0.9 }}
          animate={{ 
            opacity: isActive ? 1 : 0.7,
            transition: { duration: 0.3 }
          }}
        />

        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          animate={{
            backgroundColor: isActive ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.7)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Project Number */}
          <motion.span 
            className="text-white text-3xl font-bold"
            animate={{
              scale: isActive ? 1.2 : 1,
              color: isActive ? "#FF6452" : "white",
              transition: { 
                type: "spring", 
                stiffness: 500,
                damping: 15
              }
            }}
          >
            {i + 1}
          </motion.span>

          {/* Project Name (appears on hover) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20,
              transition: { duration: 0.3 }
            }}
          >
            <p className="text-white text-sm font-medium truncate text-center">
              {project.name}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;