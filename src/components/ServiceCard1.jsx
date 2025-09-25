import { motion } from "framer-motion";

const ServiceCard1 = ({ imgURL, label, subtext, techs }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
    <div className="flex">
      <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
      <img src={imgURL}/>
      </div>
      <div>
        <h5 className="mt-1 mb-6 text-xl">{label}</h5>
        <p className="text-md p-2 mb-20 text-neutral-500">
        {subtext}
        </p>
        <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <motion.span
            key={index}
            className="bg-black bg-opacity-40 text-white-400 px-3 py-1 rounded-3xl border-2 border-white-400 text-md hover:text-black hover:bg-white transition duration-300 select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard1;