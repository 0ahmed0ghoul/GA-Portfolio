import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { all_projects } from "../constants";
import { useNavigate } from "react-router-dom";

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
  // Helper function to convert techs string to array
  const getTechArray = (techsString) => {
    if (!techsString) return [];
    if (Array.isArray(techsString)) return techsString;
    return techsString.split(",").map((tech) => tech.trim());
  };

  useEffect(() => {
    setHoveredIndex(null);
  }, [rotation]);
  // Get current center project based on rotation
  const getCurrentProjectIndex = () => {
    const totalProjects = all_projects.length;
    const anglePerProject = 360 / totalProjects;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const index =
      Math.round(normalizedRotation / anglePerProject) % totalProjects;
    return index;
  };
  const currentIndex = getCurrentProjectIndex();

  // Handle mouse move for tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;

    setMousePosition({ x: normalizedX, y: normalizedY });

    const maxTiltX = 25;
    const maxTiltY = 15;

    setTiltX(-normalizedY * maxTiltX);
    setTiltY(normalizedX * maxTiltY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
    setMousePosition({ x: 0, y: 0 });
  };

  // Handle wheel scroll with momentum and speed-based rotation
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

  // Animation loop for smooth rotation with momentum
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

  // 3D Carousel calculations with continuous rotation - FIXED
  const getProjectStyle = (index) => {
    const totalProjects = all_projects.length;
    const anglePerProject = 360 / totalProjects;
    const projectAngle = index * anglePerProject;
    const currentAngle = projectAngle - rotation;

    const radius = 700;

    // Calculate position in 3D space
    const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
    const z = Math.cos((currentAngle * Math.PI) / 180) * radius;

    // Calculate distance from center position with proper wrapping
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const distanceFromCenter = Math.min(normalizedAngle, 360 - normalizedAngle);

    // Calculate opacity and scale based on distance from center
    const scale = Math.max(0.4, 1 - (distanceFromCenter / 180) * 0.6);
    const baseOpacity = Math.max(0.3, 1 - (distanceFromCenter / 180) * 0.7);

    // Determine if card is in front or back
    const isFront = z > 0;
    const opacity = isFront ? baseOpacity : baseOpacity * 0.5;

    // FIXED: More lenient center detection to prevent flickering
    const centerThreshold = anglePerProject * 0.6; // Increased from 0.5
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

  // Handle touch for mobile swipe
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

  // Keyboard navigation
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

  const handlePrevious = () => {
    setRotationVelocity((prev) => prev - 3);
  };

  const handleNext = () => {
    setRotationVelocity((prev) => prev + 3);
  };

  // Render carousel items - FIXED
  const renderCarousel = () => {
    if (!all_projects || all_projects.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-xl">No projects available</p>
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

          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
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
                  {/* Project Card - FIXED: Consistent height */}
                  <div
                    className={`relative w-full h-[26rem] rounded-xl overflow-hidden shadow-2xl border transition-all duration-300 ${
                      style.isCenter
                        ? "bg-white/20 border-white/40 cursor-pointer backdrop-blur-md"
                        : "bg-white/10 border-white/20 cursor-default backdrop-blur-sm"
                    }`}
                    style={{
                      boxShadow: style.isFront
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Tech Stack Badges */}
                      {style.isFront && (
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                          {techArray.slice(0, 2).map((technology, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white text-xs rounded-full font-semibold backdrop-blur-sm shadow-lg"
                            >
                              {technology}
                            </span>
                          ))}
                          {techArray.length > 2 && (
                            <span className="px-2.5 py-1 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white text-xs rounded-full font-semibold backdrop-blur-sm">
                              +{techArray.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Project Info - FIXED: Consistent layout */}
                    <div className="p-5 bg-gradient-to-b from-slate-800/80 to-slate-900/90 h-[10.5rem] flex flex-col">
                      <h3 className="font-bold text-white text-base mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-3 flex-shrink-0">
                        {project.desc}
                      </p>

                      {/* FIXED: Always reserve space for button to prevent layout shift */}
                      <div className="mt-auto pt-3 border-t border-white/20">
                        {style.isCenter ? (
                          <motion.button
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            View Details →
                          </motion.button>
                        ) : (
                          // Invisible placeholder to maintain consistent height
                          <div className="w-full h-[42px]" />
                        )}
                      </div>
                    </div>

                    {/* Center Card Glow */}
                    {style.isCenter && (
                      <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          boxShadow:
                            "0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.1)",
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
          <motion.div className="relative w-48 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="absolute top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
              style={{
                left: `${(currentIndex / (all_projects.length - 1)) * 80}%`,
                width: "20%",
              }}
            />
          </motion.div>

          <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">
            <span className="text-base">{currentIndex + 1}</span>
            <span className="text-white/60">/</span>
            <span className="text-white/60">{all_projects.length}</span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/30 z-30 group shadow-xl hover:shadow-2xl hover:scale-110"
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
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/30 z-30 group shadow-xl hover:shadow-2xl hover:scale-110"
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
      className="relative w-full h-screen bg-slate-900 overflow-hidden"
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Return to Homepage Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-40 flex items-center gap-2 px-5 py-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 hover:border-white/50 group shadow-xl"
        whileHover={{ scale: 1.05 }}
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
        <span className="text-sm font-semibold">Back to Home</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <div className="relative w-full h-full">{renderCarousel()}</div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-2xl font-bold transition-all backdrop-blur-md hover:scale-110 border border-white/20"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {activeProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {activeProject.desc}
                  </p>
                </div>

                {activeProject.techs && (
                  <div className="mb-8">
                    <h3 className="text-white font-semibold text-2xl mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {getTechArray(activeProject.techs).map(
                        (technology, idx) => (
                          <span
                            key={idx}
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 font-semibold hover:bg-blue-600/30 hover:scale-105 transition-all cursor-default"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeProject.features &&
                  activeProject.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-white font-semibold text-2xl mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeProject.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/20">
                  {activeProject.demoURL && (
                    <a
                      href={activeProject.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 rounded-2xl text-center font-bold transition-all text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {activeProject.githubURL && (
                    <a
                      href={activeProject.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-5 rounded-2xl text-center font-bold transition-all text-lg border-2 border-white/20 hover:border-white/40 shadow-xl hover:scale-105"
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
