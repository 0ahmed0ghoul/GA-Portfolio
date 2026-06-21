import { motion } from "framer-motion";

const SURFACE = "#161410";
const PAPER = "#ece6d6";
const ASH = "#948e7c";
const AMBER = "#e0a045";

const EXT_BY_CATEGORY = {
  category_web: "tsx",
  category_desktop: "cpp",
  category_ui: "fig",
  category_internship: "md",
};

/**
 * A single "file" row in the projects explorer.
 *
 * orientation="vertical"   → desktop sidebar: full width, left accent border
 * orientation="horizontal" → mobile tab strip: fixed width, bottom accent border
 *
 * Deliberately has no whileHover scale/translate — fixed height/width at all
 * times so it can't outgrow its container or jump on hover.
 */
const ProjectCard = ({ project, isActive, onClick, index, orientation = "vertical" }) => {
  const isInProgress = project.status === "status_in_progress";
  const ext = EXT_BY_CATEGORY[project.category] || "ts";
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: index * 0.04, duration: 0.25 } }}
      whileTap={{ opacity: 0.7 }}
      className={`flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-left transition-colors duration-200 hover:bg-white/5 ${
        isHorizontal ? "shrink-0 px-3.5 py-2.5" : "w-full px-4 py-3"
      }`}
      style={{
        color: isActive ? PAPER : ASH,
        backgroundColor: isActive ? SURFACE : undefined,
        borderLeft: !isHorizontal ? `2px solid ${isActive ? AMBER : "transparent"}` : undefined,
        borderBottom: isHorizontal ? `2px solid ${isActive ? AMBER : "transparent"}` : undefined,
      }}
    >
      <span style={{ color: ASH }}>{String(index + 1).padStart(2, "0")}</span>
      <span className={isHorizontal ? "whitespace-nowrap" : "flex-1 truncate"}>
        {project.name}
        <span style={{ color: ASH }}>.{ext}</span>
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{
          backgroundColor: isInProgress ? AMBER : "transparent",
          border: `1px solid ${isInProgress ? AMBER : ASH}`,
        }}
      />
    </motion.button>
  );
};

export default ProjectCard;