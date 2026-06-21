import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { all_projects } from "../constants";
import { useNavigate } from "react-router-dom";

// Color palette from _AboutMe
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const BODY = "#c8c2b1";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const ShowProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastWheelTime = useRef(Date.now());
  const velocityDecay = 0.95;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getTechArray = (techsString) => {
    if (!techsString) return [];
    if (Array.isArray(techsString)) return techsString;
    return techsString.split(",").map((tech) => tech.trim());
  };

  useEffect(() => {
    setHoveredIndex(null);
  }, [rotation]);

  const getCurrentProjectIndex = () => {
    const totalProjects = all_projects.length;
    const anglePerProject = 360 / totalProjects;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const index =
      Math.round(normalizedRotation / anglePerProject) % totalProjects;
    return index;
  };
  const currentIndex = getCurrentProjectIndex();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;
    setMousePosition({ x: normalizedX, y: normalizedY });
    const maxTiltX = 20;
    const maxTiltY = 12;
    setTiltX(-normalizedY * maxTiltX);
    setTiltY(normalizedX * maxTiltY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const now = Date.now();
    const timeDelta = now - lastWheelTime.current;
    lastWheelTime.current = now;
    const scrollIntensity = Math.abs(e.deltaY);
    const speedMultiplier = Math.min(scrollIntensity / 100, 3);
    const baseRotation = 0.5;
    const rotationAmount = baseRotation * speedMultiplier;
    const velocityChange = e.deltaY > 0 ? rotationAmount : -rotationAmount;
    setRotationVelocity((prev) => prev + velocityChange);
  };

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => prev + rotationVelocity);
      setRotationVelocity((prev) => {
        const newVelocity = prev * velocityDecay;
        return Math.abs(newVelocity) < 0.001 ? 0 : newVelocity;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [rotationVelocity]);

  const getProjectStyle = (index) => {
    const totalProjects = all_projects.length;
    const anglePerProject = 360 / totalProjects;
    const projectAngle = index * anglePerProject;
    const currentAngle = projectAngle - rotation;
    const radius = 700;
    const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
    const z = Math.cos((currentAngle * Math.PI) / 180) * radius;
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const distanceFromCenter = Math.min(normalizedAngle, 360 - normalizedAngle);
    const scale = Math.max(0.4, 1 - (distanceFromCenter / 180) * 0.6);
    const baseOpacity = Math.max(0.2, 1 - (distanceFromCenter / 180) * 0.8);
    const isFront = z > 0;
    const opacity = isFront ? baseOpacity : baseOpacity * 0.4;
    const centerThreshold = anglePerProject * 0.6;
    const isCenter = distanceFromCenter < centerThreshold;
    return {
      x,
      z,
      scale,
      opacity,
      rotateY: -currentAngle + 180,
      zIndex: Math.round(100 + z),
      isFront,
      isCenter,
      distanceFromCenter,
    };
  };

  const [touchStart, setTouchStart] = useState({ x: 0, time: 0 });
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      time: Date.now(),
    });
  };

  const handleTouchMove = (e) => {
    if (!touchStart.x) return;
    const touchX = e.touches[0].clientX;
    const diff = touchX - touchStart.x;
    setRotation((prev) => prev - diff * 0.3);
    setTouchStart({
      x: touchX,
      time: Date.now(),
    });
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.x - touchEnd;
    const timeDiff = Date.now() - touchStart.time;
    if (timeDiff < 200 && Math.abs(diff) > 50) {
      const velocity = (diff / timeDiff) * 10;
      setRotationVelocity((prev) => prev + velocity);
    }
    setTouchStart({ x: 0, time: 0 });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setRotationVelocity((prev) => prev + 2);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setRotationVelocity((prev) => prev - 2);
      } else if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
      } else if (e.key === "Enter" && !activeProject) {
        const currentIndex = getCurrentProjectIndex();
        setActiveProject(all_projects[currentIndex]);
      } else if (e.key === " ") {
        e.preventDefault();
        setRotationVelocity(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, rotation]);

  useEffect(() => {
    const el = document.getElementById("proj");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const handlePrevious = () => setRotationVelocity((prev) => prev - 3);
  const handleNext = () => setRotationVelocity((prev) => prev + 3);

  const renderCarousel = () => {
    if (!all_projects || all_projects.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl" style={{ color: PAPER }}>
            No projects available
          </p>
        </div>
      );
    }

    const currentIndex = getCurrentProjectIndex();

    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {all_projects.map((project, index) => {
              const style = getProjectStyle(index);
              const techArray = getTechArray(project.techs);

              return (
                <motion.div
                  key={`project-${index}`}
                  className="absolute top-1/2 left-1/2 w-72"
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: style.zIndex,
                    transform: `
                      translate(-50%, -50%)
                      translate3d(${style.x}px, 0px, ${style.z}px)
                      rotateY(${style.rotateY}deg)
                    `,
                    opacity: style.opacity,
                  }}
                  onClick={() => style.isCenter && setActiveProject(project)}
                  onHoverStart={() => {
                    if (index === currentIndex) setHoveredIndex(index);
                  }}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    scale:
                      style.scale *
                      (hoveredIndex === index && index === currentIndex ? 1.08 : 1),
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Project Card */}
                  <div
                    className={`relative w-full h-[26rem] rounded-xl overflow-hidden border transition-all duration-300 ${
                      style.isCenter
                        ? "cursor-pointer backdrop-blur-md"
                        : "cursor-default backdrop-blur-sm"
                    }`}
                    style={{
                      backgroundColor: style.isCenter ? SURFACE : `${SURFACE}80`,
                      borderColor: style.isCenter ? AMBER : BORDER,
                      boxShadow: style.isFront
                        ? `0 25px 50px -12px ${INK}80`
                        : `0 10px 25px -5px ${INK}60`,
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.imgURL}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          style.isCenter ? "hover:scale-110" : ""
                        }`}
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, ${INK}DD, ${INK}44 60%, transparent)`,
                        }}
                      />

                      {/* Tech Stack Badges */}
                      {style.isFront && (
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                          {techArray.slice(0, 2).map((technology, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs rounded-full font-mono backdrop-blur-sm border"
                              style={{
                                backgroundColor: `${AMBER}20`,
                                color: PAPER,
                                borderColor: AMBER,
                              }}
                            >
                              {technology}
                            </span>
                          ))}
                          {techArray.length > 2 && (
                            <span
                              className="px-2.5 py-1 text-xs rounded-full font-mono backdrop-blur-sm border"
                              style={{
                                backgroundColor: `${AMBER}15`,
                                color: ASH,
                                borderColor: BORDER,
                              }}
                            >
                              +{techArray.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div
                      className="p-5 h-[10.5rem] flex flex-col"
                      style={{
                        background: `linear-gradient(to bottom, ${SURFACE}CC, ${SURFACE})`,
                      }}
                    >
                      <h3
                        className="font-display font-semibold text-base mb-2 line-clamp-1"
                        style={{ color: PAPER }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm line-clamp-2 mb-3 flex-shrink-0"
                        style={{ color: BODY }}
                      >
                        {project.desc}
                      </p>

                      <div className="mt-auto pt-3 border-t" style={{ borderColor: BORDER }}>
                        {style.isCenter ? (
                          <motion.button
                            className="w-full text-sm font-mono py-2.5 rounded-lg transition-all duration-200"
                            style={{
                              backgroundColor: AMBER,
                              color: INK,
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Details →
                          </motion.button>
                        ) : (
                          <div className="w-full h-[42px]" />
                        )}
                      </div>
                    </div>

                    {/* Center Card Glow */}
                    {style.isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          boxShadow: `0 0 60px ${AMBER}40, inset 0 0 60px ${AMBER}10`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
          <div
            className="relative w-48 h-1.5 rounded-full overflow-hidden backdrop-blur-sm"
            style={{ backgroundColor: `${BORDER}80` }}
          >
            <motion.div
              className="absolute top-0 h-full rounded-full"
              style={{
                backgroundColor: AMBER,
                left: `${(currentIndex / (all_projects.length - 1)) * 80}%`,
                width: "20%",
              }}
            />
          </div>

          <div
            className="flex items-center gap-2 text-sm font-mono px-3 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              backgroundColor: `${SURFACE}CC`,
              borderColor: BORDER,
              color: ASH,
            }}
          >
            <span style={{ color: PAPER }}>{currentIndex + 1}</span>
            <span>/</span>
            <span>{all_projects.length}</span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border z-30 group shadow-xl hover:shadow-2xl hover:scale-110"
          style={{
            backgroundColor: `${SURFACE}CC`,
            borderColor: BORDER,
            color: ASH,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
          onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
          aria-label="Previous project"
        >
          <svg
            className="w-7 h-7 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border z-30 group shadow-xl hover:shadow-2xl hover:scale-110"
          style={{
            backgroundColor: `${SURFACE}CC`,
            borderColor: BORDER,
            color: ASH,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = AMBER)}
          onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
          aria-label="Next project"
        >
          <svg
            className="w-7 h-7 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: INK }}
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-projects">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-projects)" />
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: AMBER }}
      />

      {/* Return to Homepage Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-40 flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 backdrop-blur-md border group shadow-xl"
        style={{
          backgroundColor: `${SURFACE}CC`,
          borderColor: BORDER,
          color: ASH,
        }}
        whileHover={{ scale: 1.05, color: PAPER, borderColor: AMBER }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        id="proj"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-mono font-medium">Back</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">{renderCarousel()}</div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: `${INK}CC`, backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border shadow-2xl"
              style={{
                backgroundColor: SURFACE,
                borderColor: BORDER,
              }}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="relative">
                <img
                  src={activeProject.imgURL}
                  alt={activeProject.title}
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${SURFACE}, ${SURFACE}44 50%, transparent)`,
                  }}
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition-all backdrop-blur-md hover:scale-110 border"
                  style={{
                    backgroundColor: `${SURFACE}CC`,
                    borderColor: BORDER,
                    color: ASH,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = PAPER)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = ASH)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2
                    className="text-4xl md:text-5xl font-display font-semibold mb-4"
                    style={{ color: PAPER }}
                  >
                    {activeProject.title}
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: BODY }}>
                    {activeProject.desc}
                  </p>
                </div>

                {activeProject.techs && (
                  <div className="mb-8">
                    <h3 className="font-display font-semibold text-2xl mb-4 flex items-center gap-2" style={{ color: PAPER }}>
                      <span className="w-1 h-6 rounded-full" style={{ backgroundColor: AMBER }}></span>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {getTechArray(activeProject.techs).map((technology, idx) => (
                        <span
                          key={idx}
                          className="px-5 py-2.5 rounded-full text-sm font-mono border transition-all cursor-default"
                          style={{
                            color: ASH,
                            borderColor: BORDER,
                            backgroundColor: `${BORDER}40`,
                          }}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.features && activeProject.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-display font-semibold text-2xl mb-4 flex items-center gap-2" style={{ color: PAPER }}>
                      <span className="w-1 h-6 rounded-full" style={{ backgroundColor: AMBER }}></span>
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeProject.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start p-3 rounded-lg border"
                          style={{
                            color: BODY,
                            borderColor: BORDER,
                            backgroundColor: `${BORDER}20`,
                          }}
                        >
                          <span
                            className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                            style={{ backgroundColor: AMBER }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t" style={{ borderColor: BORDER }}>
                  {activeProject.demoURL && (
                    <a
                      href={activeProject.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 rounded-2xl text-center font-bold transition-all text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                      style={{
                        backgroundColor: AMBER,
                        color: INK,
                      }}
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {activeProject.githubURL && (
                    <a
                      href={activeProject.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 rounded-2xl text-center font-bold transition-all text-lg border-2 shadow-xl hover:scale-105"
                      style={{
                        color: PAPER,
                        borderColor: BORDER,
                        backgroundColor: `${BORDER}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = AMBER;
                        e.currentTarget.style.color = AMBER;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = BORDER;
                        e.currentTarget.style.color = PAPER;
                      }}
                    >
                      💻 View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowProjects;