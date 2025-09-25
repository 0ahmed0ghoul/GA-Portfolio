import { ReviewCard } from "../components";
import { reviews } from "../constants";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative max-container bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 py-16 px-6"
      id="testimonials"
    >
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-coral-red/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-palanquin text-center px-2 py-5 text-4xl md:text-5xl font-bold text-white"
      >
        {t("testimonials.title_part1")}
        <span className="text-coral-red"> {t("testimonials.title_part2")} </span>
        {t("testimonials.title_part3")}
        <span className="text-coral-red"> {t("testimonials.title_part4")} </span>
        {t("testimonials.title_part5")}
        <span className="text-coral-red"> {t("testimonials.title_part6")} </span>
        {t("testimonials.title_part7")}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="m-auto mt-4 max-w-2xl text-center text-lg md:text-xl text-slate-300"
      >
        {t("testimonials.subtitle")}
      </motion.p>

      {/* Testimonials Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <ReviewCard
              imgURL={review.imgURL}
              customerName={t(`testimonials.${review.nameKey}`)}
              profession={t(`testimonials.${review.professionKey}`)}
              feedback={t(`testimonials.${review.feedbackKey}`)}
              logo={review.logo}
              linkedinLink={review.linkedin}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
