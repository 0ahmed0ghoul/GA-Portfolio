import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext, techs }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  shadow-3xl dark:shadow-white dark:shadow-lg  px-5 py-8'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold dark:text-white'>
        {label}
      </h3>
      <p className='my-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-slate-300'>
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
  );
};

export default ServiceCard;