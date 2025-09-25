import { useTranslation } from 'react-i18next';
import { statistics } from "../constants";
import { Button } from "../components";
import { me } from "../assets/images";
import { halfme } from "../assets/images";
import { down } from "../assets/icons";

const _AboutMe = () => {
  const { t } = useTranslation();
  const professions = t("about.profession", { returnObjects: true });
  return (
    <section
      id="aboutme"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container dark:bg-slate-900 dark:text-slate-300"
    >
<div className="relative xl:w-2/5 h-[60%] flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 rounded-lg dark:shadow-white shadow-xl">
    <img
      src={me}
      alt={t('about.my_picture_alt')}
      className="h-full"
    />
</div>


      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full max-xl:padding-x">
        <h1 className=" font-palanquin text-[90px] max-sm:text-[72px] max-sm:leading-[82px] font-bold text-center dark:text-slate-300">
          <span className="mt-10 bg xl:whitespace-nowrap relative  ">
            {t('about.greeting')}
          </span>
          <br />
           <span className="text-coral-red text-4xl text-[60px]">{t('about.profession1')}</span><br />{t('about.profession2')}
        </h1>
        <h2>
          {t('about.greeting')} <span className="text-coral-red inline-block mt-8">{t('about.my_name')}</span> {t('about.last_name')}
        </h2>
        <h3 id='location'>
          {t('about.from')} <span className="text-coral-red">{t('about.location')}</span>
        </h3>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm text-center dark:text-slate-300">
          {t('about.description')}
        </p>
        
        <div className="languages-section ">
          <h2 className="text-2xl font-bold text-slate-800 my-6 animate-fadeIn dark:text-slate-300">
            {t('about.language_proficiency')}
            <span className="block w-12 h-1 bg-coral-red mt-2 rounded-full"></span>
          </h2>

          <div className="space-y-6 ">
            {/* English */}
            <div className="animate-slideIn" style={{ animationDelay: "0.1s" }}>
              <div className="flex justify-between items-center mb-1 ">
                <span className="font-medium text-slate-800 dark:text-slate-300">{t('about.english')}</span>
                <span className="text-sm font-semibold text-coral-red">
                  {t('about.english_level')}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full  relative">
                <div
                  className="h-full bg-gradient-to-r from-black to-coral-red rounded-full absolute top-0 -left-1"
                  style={{
                    width: "0%",
                    animation: "progress 1s ease-out forwards",
                    animationDelay: "0.3s",
                    animationFillMode: "forwards",
                    "--target-width": "60%",
                  }}
                ></div>
              </div>
            </div>

            {/* German */}
            <div className="animate-slideIn" style={{ animationDelay: "0.4s" }}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-800 dark:text-slate-300">{t('about.german')}</span>
                <span className="text-sm font-semibold text-coral-red">
                  {t('about.german_level')}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-xl  relative">
                <div
                  className="h-full bg-gradient-to-r from-black to-coral-red rounded-full absolute top-0 -left-1"
                  style={{
                    width: "0%",
                    animation: "progress 1s ease-out forwards",
                    animationDelay: "0.6s",
                    animationFillMode: "forwards",
                    "--target-width": "20%",
                  }}
                ></div>
              </div>
            </div>

            {/* Portuguese */}
            <div className="animate-slideIn" style={{ animationDelay: "0.7s" }}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-800 dark:text-slate-300">{t('about.portuguese')}</span>
                <span className="text-sm font-semibold text-coral-red">
                  {t('about.portuguese_level')}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full n relative">
                <div
                  className="h-full bg-gradient-to-r from-black to-coral-red rounded-full absolute top-0 -left-1"
                  style={{
                    width: "0%",
                    animation: "progress 1s ease-out forwards",
                    animationDelay: "0.9s",
                    animationFillMode: "forwards",
                    "--target-width": "10%",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            className="flex justify-between mt-6 text-xs text-slate-500 animate-fadeIn dark:text-slate-300"
            style={{ animationDelay: "1s" }}
          >
            <span>{t('about.beginner')}</span>
            <span>{t('about.intermediate')}</span>
            <span>{t('about.advanced')}</span>
            <span>{t('about.fluent')}</span>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap w-full my-7 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300">
                {t(`stats.${stat.label.toLowerCase().replace(' ', '_')}`)}
              </p>
            </div>
          ))}
        </div>
        <Button
          label={t('about.see_projects')}
          iconURL={down}
          onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </div>
    </section>
  );
};

export default _AboutMe;