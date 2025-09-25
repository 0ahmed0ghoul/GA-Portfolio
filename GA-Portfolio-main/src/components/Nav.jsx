import {
  blackLangue,
  hamburger,
  mode,
  whiteHamburger,
  whiteLangue,
  whiteMode,
} from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Nav = ({ darkMode, setDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Optional: clean URL hash
      setTimeout(() => {
        window.history.replaceState(null, null, " ");
      }, 1000);
      setIsSidebarOpen(false);
    }
  };

  return (
    <header className="px-6 py-8 absolute z-10 w-full dark:bg-cyan-blue dark:bg-slate-900">
      <nav className="flex justify-between items-center max-container">
        {/* Navigation Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.href);
                }}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-gray-300 hover:text-coral-red dark:hover:text-blue-400 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Dark Mode & Language - hidden on mobile */}
        <div className="flex justify-between gap-3 items-center max-lg:hidden">
          {/* Dark Mode Toggle */}
          <div
            className="cursor-pointer p-2 transition-all duration-500 hover:scale-110 hover:rotate-12"
            onClick={() => setDarkMode(!darkMode)}
          >
            <img
              src={darkMode ? whiteMode : mode}
              alt={darkMode ? t("nav.light_mode") : t("nav.dark_mode")}
              width={25}
              height={25}
            />
          </div>
          {/* Language Selector */}
          <LanguageSelector darkMode={darkMode} />
        </div>

        {/* Mobile Hamburger Menu */}
        <div
          className="hidden max-lg:block cursor-pointer p-2 transition-all duration-500 hover:scale-110 hover:rotate-12"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <img
            src={darkMode ? whiteHamburger : hamburger}
            alt={t("nav.menu")}
            width={25}
            height={25}
          />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 shadow-xl z-50 transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-72" : "w-0 overflow-hidden"
          }`}
        >
          <div className="p-6 h-full flex flex-col z">
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-8 ">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t("nav.menu")}
              </h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Sidebar Links */}
            <ul className="space-y-3 flex-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      scrollToSection(e, item.href);
                    }}
                    className="block px-4 py-3 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile-only Dark Mode & Language */}
            <div className="flex justify-center gap-4 h-48 mt-10 lg:hidden ">
              {/* Dark Mode Toggle */}
              <div
                className="cursor-pointer p-2 transition-all duration-500 hover:scale-110 hover:rotate-12"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? whiteMode : mode}
                  alt={darkMode ? t("nav.light_mode") : t("nav.dark_mode")}
                  width={25}
                  height={25}
                />
              </div>
              {/* Language Selector */}
              <LanguageSelector darkMode={darkMode} />
            </div>

            {/* Sidebar Footer */}
            <div className="pt-4 border-t border-gray-200 dark:border-slate-700 mt-auto">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} {t("nav.footer")}
              </p>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Nav;
