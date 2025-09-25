import { whiteHamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
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
    <header className="px-6 py-12 absolute z-10 w-full bg-cyan-blue bg-slate-900">
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
                className="font-montserrat leading-normal text-lg text-gray-300 hover:text-blue-400  :hover:text-blue-400 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          className="hidden max-lg:block cursor-pointer p-2 transition-all duration-500 hover:scale-110 hover:rotate-12"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <img
            src={whiteHamburger}
            alt={t("nav.menu")}
            width={25}
            height={25}
          />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl z-50 
    transform transition-transform duration-500 ease-in-out 
    ${isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-72"}
  `}
        >
          <div className="p-6 h-full flex flex-col">
            {/* Sidebar Header */}
            <div
              className={`flex justify-between items-center mb-8 transform transition-all duration-500 ${
                isSidebarOpen
                  ? "opacity-100 translate-y-0 delay-150"
                  : "opacity-0 -translate-y-3"
              }`}
            >
              <h2 className="text-2xl font-bold text-white">{t("nav.menu")}</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded-full hover:bg-slate-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-300"
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
            <ul className="flex-1 space-y-3">
              {navLinks.map((item, index) => (
                <li
                  key={item.key}
                  className={`transform transition-all duration-500 ease-out ${
                    isSidebarOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }} // stagger after header
                >
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block px-4 py-3 rounded-lg font-medium text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors duration-300"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sidebar Footer */}
            <div
              className={`pt-4 border-t border-slate-700 mt-auto transition-all duration-500 ${
                isSidebarOpen ? "opacity-100 delay-700" : "opacity-0"
              }`}
            >
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} {t("nav.footer")}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
