import { whiteHamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname);
      }, 800);

      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="px-6 py-8 absolute z-50 w-full bg-slate-900">
        <nav className="flex justify-between items-center max-container">
          {/* DESKTOP NAV */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="font-montserrat text-lg text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <div
  className={`hidden max-lg:block cursor-pointer p-2 transition-all duration-500 hover:scale-110 hover:rotate-12
    ${isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
  onClick={() => setIsSidebarOpen(true)}
>
            <img
              src={whiteHamburger}
              alt={t("nav.menu")}
              width={25}
              height={25}
            />
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR + BACKDROP */}
      {isSidebarOpen &&
        createPortal(
          <>
            {/* BACKDROP */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* SIDEBAR */}
            <div
              className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-[9999]
              transform transition-transform duration-500 ease-in-out
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            >
              <div className="p-6 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    {t("nav.menu")}
                  </h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 rounded-full hover:bg-slate-700 text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* LINKS */}
                <ul className="flex-1 space-y-3">
                  {navLinks.map((item, index) => (
                    <li
                      key={item.key}
                      className="transform transition-all duration-500"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-blue-400 transition-colors"
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* FOOTER */}
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} {t("nav.footer")}
                  </p>
                </div>
              </div>
            </div>
          </>,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default Nav;
