import { cv, subscribe } from "../assets/images";
import cvPdf from "../assets/cv.pdf";
import { Button } from "../components";
import { useTranslation } from "react-i18next";

const CV = () => {
  const { t } = useTranslation();

  return (
    <section
      id="cv"
      className="max-container flex flex-col items-center py-10 px-4 gap-10"
    >
      {/* Heading */}
      <div className="text-center space-y-4">
        <h3 className="text-4xl max-sm:text-3xl font-palanquin font-bold text-white">
          {t("cv.title_part1")}{" "}
          <span className="text-coral-red">{t("cv.title_part2")}</span>
        </h3>
        <p className="text-lg max-w-2xl mx-auto text-slate-300">
          {t("cv.subtitle")}
        </p>
      </div>

      <div className="hidden lg:block text-4xl font-palanquin font-bold text-coral-red">
        {t("cv.and")}
      </div>

      {/* Content */}
      <div className="flex flex-wrap justify-center items-start gap-12 w-full">
        {/* CV Preview */}
        <div className="flex flex-col items-center gap-6 max-w-[500px] w-full">
          <div className="relative group w-full">
            <a href={cvPdf} download="Ahmed_Ghoul_CV.pdf" className="block">
              <img
                src={cv}
                alt={t("cv.cv_preview_alt")}
                className="w-full border-2 border-slate-gray rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-xl transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center transition-opacity duration-300">
                  <div className="px-8 py-4">
                    <span className="text-2xl font-bold block">{t("cv.download_text")}</span>
                    <p className="text-sm mt-2">{t("cv.click_to_download")}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Download Button */}
          <a
            href={cvPdf}
            download="Ahmed_Ghoul_CV.pdf"
            className="lg:hidden w-full max-w-xs flex justify-center"
          >
            <Button
              label={t("cv.download_button")}
              className="bg-coral-red text-white hover:bg-red-600 w-full"
              hover="hover:text-black hover:bg-white transition duration-300 select-none"
            />
          </a>

          {/* Divider for Mobile */}
          <div className="lg:hidden text-4xl font-palanquin font-bold text-coral-red">
            {t("cv.and")}
          </div>
        </div>

        {/* Thank You */}
        <div className="flex flex-col items-center gap-6 max-w-[500px] w-full text-center">
          <div className="space-y-4">
            <h3 className="text-4xl max-sm:text-3xl font-palanquin font-bold text-white">
              {t("cv.thank_you_part1")}{" "}
              <span className="text-coral-red">{t("cv.thank_you_part2")}</span>
            </h3>
            <p className="text-xl text-slate-300">
              {t("cv.thank_you_message")}
            </p>
          </div>

          <div className="relative group w-full max-w-[390px]">
            <img
              src={subscribe}
              alt={t("cv.profile_alt")}
              className="w-full border-2 rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
