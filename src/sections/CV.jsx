import { cv, subscribe } from "../assets/images";
import cvPdf from "../assets/cv.pdf";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const CV = () => {
  const { t } = useTranslation();

  return (
    <section
      id="cv"
      className="relative py-16 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-cv">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-cv)" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: PAPER }}>
            {t("cv.title_part1")}{" "}
            <span style={{ color: AMBER }}>{t("cv.title_part2")}</span>
          </h3>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: BODY }}>
            {t("cv.subtitle")}
          </p>
        </motion.div>

        <div className="hidden lg:block text-center font-display text-4xl font-semibold mb-8" style={{ color: AMBER }}>
          {t("cv.and")}
        </div>

        {/* Content */}
        <div className="flex flex-wrap justify-center items-start gap-12 w-full">
          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-[500px] w-full"
          >
            <div className="relative group w-full">
              <a href={cvPdf} download="Ahmed_Ghoul_CV.pdf" className="block">
                <img
                  src={cv}
                  alt={t("cv.cv_preview_alt")}
                  className="w-full border rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ borderColor: BORDER }}
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <div className="opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300">
                    <div className="px-8 py-4">
                      <span className="font-display text-2xl font-semibold block" style={{ color: PAPER }}>
                        {t("cv.download_text")}
                      </span>
                      <p className="font-mono text-sm mt-2" style={{ color: ASH }}>
                        {t("cv.click_to_download")}
                      </p>
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
              <button
                className="font-mono text-sm px-6 py-3 border transition-colors duration-300 w-full"
                style={{
                  borderColor: AMBER,
                  color: AMBER,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = AMBER;
                  e.currentTarget.style.color = INK;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = AMBER;
                }}
              >
                {t("cv.download_button")}
              </button>
            </a>

            {/* Divider for Mobile */}
            <div className="lg:hidden text-center font-display text-4xl font-semibold" style={{ color: AMBER }}>
              {t("cv.and")}
            </div>
          </motion.div>

          {/* Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 max-w-[500px] w-full text-center"
          >
            <div className="space-y-4">
              <h3 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: PAPER }}>
                {t("cv.thank_you_part1")}{" "}
                <span style={{ color: AMBER }}>{t("cv.thank_you_part2")}</span>
              </h3>
              <p className="text-xl" style={{ color: BODY }}>
                {t("cv.thank_you_message")}
              </p>
            </div>

            <div className="relative group w-full max-w-[390px]">
              <img
                src={subscribe}
                alt={t("cv.profile_alt")}
                className="w-full border rounded-lg object-cover shadow-lg"
                style={{ borderColor: BORDER }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV;