import { whiteHamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

// Color palette — shared with _AboutMe / Projects
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const { t } = useTranslation();

  // Detach from the hero once #aboutme scrolls out of view, re-attach when it's back.
  // Adjust the rootMargin if you want it to float earlier/later.
  useEffect(() => {
    const hero = document.getElementById("aboutme");
    if (!hero) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFloating(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Scrollspy — whichever linked section sits in the vertical center of the
  // viewport becomes "active" and keeps the amber indicator.
  useEffect(() => {
    const targets = navLinks
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean);
    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const match = navLinks.find((item) => item.href.replace("#", "") === visible.target.id);
          if (match) setActiveKey(match.key);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href, key) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveKey(key);
      setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname);
      }, 800);
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* DESKTOP LINKS — sits inline under the hero; once #aboutme scrolls
          out of view each link animates (via layout) into a fixed pill row
          at the top, then animates back when you scroll back up. */}
      <div
        className={
          isFloating
            ? "hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-2  w-full justify-center"
            : "hidden lg:flex relative justify-center mt-10 gap-2"
        }
      >
        {navLinks.map((item, index) => {
          const active = activeKey === item.key;
          return (
            <motion.a
              key={item.key}
              layout
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.key)}
              animate={isFloating ? { y: [0, -3, 0] } : { y: 0 }}
              whileHover={{ y: isFloating ? -5 : -2, scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={{
                layout: { type: "spring", stiffness: 320, damping: 30 },
                y: isFloating
                  ? { duration: 2.4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }
                  : { type: "spring", stiffness: 320, damping: 30 },
              }}
              className={`relative font-display text-sm tracking-wide rounded-full border overflow-hidden transition-[padding,colors] duration-300 ${
                isFloating ? "px-5 py-2.5" : "px-4 py-2"
              } ${active ? "" : "text-[#948e7c] hover:text-[#e0a045]"}`}
              style={{
                borderColor: active ? AMBER : BORDER,
                color: active ? INK : undefined,
                backgroundColor: !active && isFloating ? `${SURFACE}d9` : "transparent",
                backdropFilter: !active && isFloating ? "blur(8px)" : undefined,
                boxShadow: isFloating ? "0 10px 22px -8px rgba(0,0,0,0.55)" : "none",
              }}
            >
              {/* shared layoutId — this is what makes the highlight glide
                  from one link to the next instead of just popping in */}
              {active && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: AMBER, zIndex: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t(`nav.${item.key}`)}</span>
            </motion.a>
          );
        })}
      </div>

      {/* MOBILE TRIGGER — always reachable, independent of the floating logic above */}
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label={t("nav.menu")}
        className={`lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-full border transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ backgroundColor: `${SURFACE}cc`, borderColor: BORDER, backdropFilter: "blur(8px)" }}
      >
        <img src={whiteHamburger} alt="" width={20} height={20} />
      </button>

      {/* MOBILE SIDEBAR + BACKDROP — unchanged from before */}
      {isSidebarOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 backdrop-blur-sm z-[9998]"
              style={{ backgroundColor: `${INK}80` }}
              onClick={() => setIsSidebarOpen(false)}
            />
            <div
              className={`fixed top-0 left-0 h-full w-72 shadow-2xl z-[9999]
                transform transition-transform duration-500 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              `}
              style={{ backgroundColor: SURFACE, borderRight: `1px solid ${BORDER}` }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-display font-semibold" style={{ color: PAPER }}>
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

                <ul className="flex-1 space-y-3">
                  {navLinks.map((item, index) => (
                    <li
                      key={item.key}
                      className="transform transition-all duration-500"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href, item.key)}
                        className="block px-4 py-3 rounded-lg transition-colors duration-200 font-display"
                        style={{ color: activeKey === item.key ? AMBER : BODY }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = BORDER;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>

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