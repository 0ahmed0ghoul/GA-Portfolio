import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='max-container' id="contact_me">
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={headerLogo}
              alt={t('footer.logo_alt')}
              width={50}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            {t('footer.description')}
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.altKey}
                onClick={() => window.open(icon.link, "_blank")}
              >
                <img 
                  src={icon.src} 
                  alt={t(`footer.${icon.altKey}`)} 
                  width={24} 
                  height={24} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.titleKey}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {t(`footer.${section.titleKey}`)}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={`${link.nameKey}-${index}`}
                  >
                    {link.link ? (
                      <a href={link.link}>{t(`footer.${link.nameKey}`)}</a>
                    ) : (
                      <span>{t(`footer.${link.nameKey}`)}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt={t('footer.copyright_alt')}
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>{t('footer.copyright_text')}</p>
        </div>
        <p className='font-montserrat cursor-pointer'>{t('footer.terms_conditions')}</p>
      </div>
    </footer>
  );
};

export default Footer;