
import { whiteHamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

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
      <header className="px-6 py-8">
        <nav
          className="flex justify-between items-center max-container sticky top-0 z-50 rounded-lg backdrop-blur-md border"
          style={{
            backgroundColor: `${SURFACE}cc`, // semi-transparent
            borderColor: BORDER,
          }}
        >
          {/* DESKTOP NAV */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="font-display text-base tracking-wide transition-colors duration-200"
                  style={{ color: ASH }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
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
              className="fixed inset-0 backdrop-blur-sm z-[9998]"
              style={{ backgroundColor: `${INK}80` }} // semi-transparent
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* SIDEBAR */}
            <div
              className={`fixed top-0 left-0 h-full w-72 shadow-2xl z-[9999]
                transform transition-transform duration-500 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              `}
              style={{ backgroundColor: SURFACE, borderRight: `1px solid ${BORDER}` }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-8">
                  <h2
                    className="text-xl font-display font-semibold"
                    style={{ color: PAPER }}
                  >
                    {t("nav.menu")}
                  </h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 rounded-full hover:bg-[#2c2820] transition-colors"
                    style={{ color: ASH }}
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
                        className="block px-4 py-3 rounded-lg transition-colors duration-200 font-display"
                        style={{ color: BODY }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = PAPER;
                          e.currentTarget.style.backgroundColor = BORDER;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = BODY;
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* FOOTER */}
                <div className="pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
                  <p className="text-sm font-mono" style={{ color: ASH }}>
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
