import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext, techs }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex-1 sm:w-[350px] sm:min-w-[300px] w-full rounded-2xl p-[1px] bg-gradient-to-r from-coral-red via-pink-500 to-orange-400 shadow-lg"
    >
      <div className="rounded-2xl  bg-gray-900 p-6 h-full">
        {/* Icon */}
        <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-tr from-coral-red to-orange-400 shadow-md">
          <img src={imgURL} alt={label} width={28} height={28} />
        </div>

        {/* Title */}
        <h3 className="mt-6 font-palanquin text-2xl font-semibold text-white">
          {label}
        </h3>

        {/* Subtext */}
        <p className="mt-3 mb-6 text-base  text-slate-300 leading-relaxed line-clamp-3">
          {subtext}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 rounded-3xl text-sm font-medium 
                        bg-black/30 
                        border border-slate-600/40 
                      text-slate-200
                        hover:bg-gradient-to-r hover:from-coral-red hover:to-orange-400 hover:text-white 
                        transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
