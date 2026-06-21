import { useTranslation } from "react-i18next";
import {
  containerVariants,
  imageVariants,
  infoVariants,
  itemVariants,
  projects,
} from "../constants";
import { ProjectCard } from "../components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react";

const PROJECT_KEYS = {
  TITLE_PART1: "projects.title_part1",
  TITLE_PART2: "projects.title_part2",
  SUBTITLE: "projects.subtitle",
  VIEW_BUTTON: "projects.view_project_button",
  SHOWCASE_ALT: "projects.project_showcase_alt",
  VIEW_CODE: "projects.view_code",
  LIVE_DEMO: "projects.live_demo",
  SEE_MORE: "projects.see_more",
};

/**
 * Same token system as AboutMe.jsx — keep these in sync if either file
 * changes. Worth lifting into a shared `theme.js` once a third section
 * needs them.
 */
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [direction, setDirection] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleProjectChange = (project, index) => {
    setDirection(index > prevIndex ? 1 : -1);
    setPrevIndex(index);
    setSelectedProject(project);
  };

  // Only show the first 5 projects
  const displayedProjects = projects.slice(0, 5);
  const currentIndex = displayedProjects.findIndex((p) => p.nameKey === selectedProject.nameKey);
  const isInProgress = selectedProject.status === "status_in_progress";

  const goTo = (i) => {
    const next = (i + displayedProjects.length) % displayedProjects.length;
    handleProjectChange(displayedProjects[next], next);
  };

  return (
    <section id="projects" className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: INK }}>
      {/* faint paper grain — same as About */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="projects-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#projects-grain)" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center gap-1 mb-14"
        >
          <motion.div variants={itemVariants}>
            <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
              // {t("projects.projects")}
            </p>
            <h2
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
            >
              {t(PROJECT_KEYS.TITLE_PART1)} <span style={{ color: AMBER }}>{t(PROJECT_KEYS.TITLE_PART2)}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: BODY }}>
              {t(PROJECT_KEYS.SUBTITLE)}
            </p>
          </motion.div>
        </motion.div>

        {/* IDE-style workspace: file explorer + live preview */}
        <div className="flex flex-col lg:flex-row" style={{ border: `1px solid ${BORDER}` }}>
          {/* Sidebar — file explorer */}
          <div className="lg:w-64 shrink-0 flex flex-col" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <div className="px-4 py-2.5 font-mono text-[11px]" style={{ color: ASH, borderBottom: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}` }}>
              projects/
            </div>
            <div className="flex flex-col" style={{ borderRight: `1px solid ${BORDER}` }}>
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.nameKey}
                  index={index}
                  project={{ ...project, name: t(`projects.${project.nameKey}`) }}
                  isActive={selectedProject.nameKey === project.nameKey}
                  onClick={() => handleProjectChange(project, index)}
                />
              ))}
            </div>
            <div className="hidden lg:block mt-auto px-4 py-3 font-mono text-[11px]" style={{ borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}` }}>
              <Link
                to="/show/projects"
                className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: ASH, outlineColor: AMBER }}
              >
                {t(PROJECT_KEYS.SEE_MORE)} <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Main — editor / live preview */}
          <div className="flex-1 min-w-0">
            {/* browser chrome + screenshot */}
            <div style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="flex items-center gap-3 px-4 py-2.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                  <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                  <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
                </div>
                <div
                  className="flex-1 px-3 py-1 font-mono text-[11px] truncate"
                  style={{ color: ASH, border: `1px solid ${BORDER}` }}
                >
                  {selectedProject.demo || selectedProject.link || selectedProject.github || "—"}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: SURFACE }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={selectedProject.imgURL}
                    src={selectedProject.imgURL}
                    alt={t(PROJECT_KEYS.SHOWCASE_ALT)}
                    className="w-full h-full object-cover"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(currentIndex - 1)}
                    aria-label="Previous project"
                    className="w-8 h-8 flex items-center justify-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ border: `1px solid ${BORDER}`, backgroundColor: INK, color: ASH, outlineColor: AMBER }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(currentIndex + 1)}
                    aria-label="Next project"
                    className="w-8 h-8 flex items-center justify-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ border: `1px solid ${BORDER}`, backgroundColor: INK, color: ASH, outlineColor: AMBER }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* metadata */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.nameKey}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="px-5 sm:px-6 py-6"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] mb-3" style={{ color: ASH }}>
                  <span style={{ border: `1px solid ${BORDER}`, padding: "2px 8px" }}>
                    {t(`projects.${selectedProject.category}`)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: isInProgress ? AMBER : "transparent",
                        border: `1px solid ${isInProgress ? AMBER : ASH}`,
                      }}
                    />
                    {t(`projects.${selectedProject.status}`)}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}>
                  {t(`projects.${selectedProject.nameKey}`)}
                </h3>
                <p className="font-mono text-[11px] mt-1" style={{ color: ASH }}>
                  {selectedProject.Date} · {selectedProject.role}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: BODY }}>
                  {t(`projects.${selectedProject.descKey}`)}
                </p>

                {/* tech stack, rendered as a literal array — same device as whoami.ts in About */}
                <div className="mt-5 font-mono text-xs leading-7">
                  <div style={{ color: ASH }}>stack: [</div>
                  <div className="pl-4 flex flex-wrap gap-x-1.5">
                    {selectedProject.techs.split(" ").map((tech, i, arr) => (
                      <span key={i} style={{ color: AMBER }}>
                        "{tech}"{i < arr.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <div style={{ color: ASH }}>]</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2.5 transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: AMBER, color: INK, outlineColor: AMBER }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t(PROJECT_KEYS.VIEW_BUTTON)}
                  </a>

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2.5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ border: `1px solid ${BORDER}`, color: ASH, outlineColor: AMBER }}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      {t(PROJECT_KEYS.VIEW_CODE)}
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2.5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ border: `1px solid ${BORDER}`, color: ASH, outlineColor: AMBER }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t(PROJECT_KEYS.LIVE_DEMO)}
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* See more — mobile only, sidebar already shows it on desktop */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            to="/show/projects"
            className="font-mono text-xs inline-flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: ASH, outlineColor: AMBER }}
          >
            {t(PROJECT_KEYS.SEE_MORE)} <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;