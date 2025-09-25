import { services } from "../constants";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section  className="` relative py-16 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-coral-red/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <span className="text-sm font-montserrat font-semibold text-coral-red uppercase tracking-wider mb-2 block">
            {t("services.subtitle") || "What I Offer"}
          </span>
          
          <h2 className="font-palanquin text-3xl md:text-4xl font-bold text-white mb-4">
            {t("services.title_part1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-red to-pink-500">
              {t("services.title_part2")}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t("services.title_part3")}
            </span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            {t("services.description") || "Comprehensive web development services to bring your ideas to life"}
          </p>
        </motion.div>

        {/* Compact Grid of Cards */}
        <motion.div 
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.labelKey}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-coral-red/30 transition-all duration-300 group"
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral-red/10 to-purple-600/10 flex items-center justify-center mb-4 group-hover:from-coral-red/20 group-hover:to-purple-600/20 transition-colors duration-300">
                <img 
                  src={service.imgURL} 
                  alt={t(`services.${service.labelKey}`)}
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-palanquin font-bold text-lg text-white mb-2">
                {t(`services.${service.labelKey}`)}
              </h3>
              
              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {t(`services.${service.subtextKey}`)}
              </p>
              
              {/* Technologies */}
              <div className="mt-auto">
                <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t(`services.${service.techsKey}`, { returnObjects: true }).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Services;