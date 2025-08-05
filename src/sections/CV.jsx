import { cv, subscribe } from "../assets/images";
import cvPdf from '../assets/cv.pdf'; 
import { Button } from "../components";
import { useTranslation } from 'react-i18next';

const CV = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id='cv'
      className='max-container flex flex-col items-center py-5 gap-5 max-lg:gap-8'
    >
      {/* Main Heading */}
      <div className="text-center space-y-4">
        <h3 className='text-4xl font-palanquin font-bold max-sm:text-3xl'>
          {t('cv.title_part1')} <span className='text-coral-red'>{t('cv.title_part2')}</span>
        </h3>
        <p className="text-lg text-slate-gray max-w-2xl mx-auto">
          {t('cv.subtitle')}
        </p>
      </div>

      <div className="hidden lg:block text-4xl font-palanquin font-bold text-coral-red">
        {t('cv.and')}
      </div>

      {/* Content Container */}
      <div className="flex justify-evenly items-start max-lg:flex-col max-lg:items-center max-lg:gap-5 w-full">
        {/* CV Preview Section */}
        <div className='flex-1 flex flex-col max-w-[530px] items-center gap-8'>
          <div className="relative group w-full">
            <a href={cvPdf} download="Ahmed_Ghoul_CV.pdf" className="block">
              <img 
                src={cv} 
                alt={t('cv.cv_preview_alt')}  
                className="max-w-[530px] border-2 border-slate-gray rounded-xl shadow-lg transition-all duration-300 group-hover:scale-[1.02]" 
              />
              
              <div className="absolute max-w-[530px] inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-xl transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="px-8 py-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-bold block">{t('cv.download_text')}</span>
                    <p className="text-sm mt-2">{t('cv.click_to_download')}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <a href={cvPdf} download="Ahmed_Ghoul_CV.pdf" className="lg:hidden w-full max-w-xs flex justify-center">
            <Button 
              label={t('cv.download_button')} 
              className="bg-coral-red text-white hover:bg-red-600 w-full" 
              hover={'hover:text-black hover:bg-white transition duration-300 select-none'}
            />
          </a>
          {/* Decorative divider */}
          <div className="lg:hidden text-4xl font-palanquin font-bold text-coral-red">
            {t('cv.and')}
          </div>
        </div>

        {/* Thank You Section */}
        <div className='flex-1 max-w-xl flex flex-col items-center gap-8 text-center'>
          <div className="space-y-6">
            <h3 className='text-4xl font-palanquin font-bold max-sm:text-3xl'>
              {t('cv.thank_you_part1')} <span className='text-coral-red'>{t('cv.thank_you_part2')}</span>
            </h3>
            <p className="text-xl text-slate-gray">
              {t('cv.thank_you_message')}
            </p>
          </div>
          
          <div className="relative group w-full max-w-[390px]">
            <img 
              src={subscribe} 
              alt={t('cv.profile_alt')} 
              className="w-full border-2 rounded-xl object-cover shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;