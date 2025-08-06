import { services } from "../constants";
import { ServiceCard } from "../components";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  
  return (
    <section className='max-container' id="services">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold mb-10 pt-2 dark:text-white'>
        {t('services.title_part1')}
        <span className='text-coral-red'> {t('services.title_part2')} </span>
        <span className='text-coral-red'>{t('services.title_part3')} </span>
        {t('services.title_part4')}
      </h2>
      <div className="flex justify-center flex-wrap gap-9"> 
        {services.map((service) => (
          <ServiceCard 
            key={service.labelKey}
            imgURL={service.imgURL}
            label={t(`services.${service.labelKey}`)}
            subtext={t(`services.${service.subtextKey}`)}
            techs={t(`services.${service.techsKey}`, { returnObjects: true })}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;