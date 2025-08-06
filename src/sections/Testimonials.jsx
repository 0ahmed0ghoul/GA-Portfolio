import { ReviewCard } from "../components";
import { reviews } from "../constants";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    <section className='max-container dark:bg-slate-700' id="testimonials">
      <h3 className='font-palanquin text-center px-2 py-5 text-4xl font-bold dark:text-white'>
        {t('testimonials.title_part1')}  
        <span className='text-coral-red'> {t('testimonials.title_part2')} </span>
        {t('testimonials.title_part3')}  
        <span className='text-coral-red'> {t('testimonials.title_part4')} </span> 
        {t('testimonials.title_part5')}  
        <span className='text-coral-red'> {t('testimonials.title_part6')} </span> 
        {t('testimonials.title_part7')}
      </h3>

      <p className='m-auto mt-4 max-w-lg text-center info-text dark:text-slate-300'>
        {t('testimonials.subtitle')}
      </p>

      <div className='mt-5 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 pb-5'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={t(`testimonials.${review.nameKey}`)}
            profession={t(`testimonials.${review.professionKey}`)}
            feedback={t(`testimonials.${review.feedbackKey}`)}
            logo={review.logo}
            linkedinLink={review.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;