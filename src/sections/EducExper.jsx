import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { flex, hc ,leetcode} from "../assets/images/achievements";

const INK     = "#0d0c0a";
const SURFACE = "#161410";
const BORDER  = "#2c2820";
const PAPER   = "#ece6d6";
const BODY    = "#c8c2b1";
const ASH     = "#948e7c";
const AMBER   = "#e0a045";

/**
 * Three "branches" — colours are intentionally muted so they complement
 * AMBER without competing with it.
 */
const BRANCH = {
  edu:     { color: AMBER,     prefix: "feat(edu)" },
  work:    { color: "#6b9eb2", prefix: "feat(work)" },
  achieve: { color: "#9b8fc0", prefix: "feat(achieve)" },
};

/**
 * Entries newest-first (git log default order).
 * Hash strings are cosmetic; they just need to be unique and look real.
 */
const ENTRIES = [
  {
    hash: "b2e4f1",
    year: "2025",
    type: "work",
    titleKey: "education_experience.sonatrach",
    descKey:  "education_experience.sonatrach_description",
    tags: ["PFE", "Software Development"],
  },
  {
    hash: "a8d3c9",
    year: "2025",
    type: "achieve",
    titleKey: "education_experience.hakathon",
    descKey:  "education_experience.hakathon_desc",
    image: hc,
  },
  {
    hash: "f2c7b1",
    year: "2025",
    type: "achieve",
    titleKey: "education_experience.flex_box_grid",
    descKey:  "education_experience.flex_box_grid_desc",
    image: flex,
  },
  {
    hash: "e9a1d4",
    year: "2024",
    type: "edu",
    titleKey: "education_experience.bachelors_degree",
    descKey:  "education_experience.bachelors_details",
  },
  {
    hash: "c4f8e2",
    year: "2024",
    type: "work",
    titleKey: "education_experience.agriculture_institution",
    descKey:  "education_experience.agriculture_description",
    tags: ["Web Development", "Database Design"],
  },
  {
    hash: "d7b2a3",
    year: "2024",
    type: "achieve",
    titleKey: "education_experience.leetcode",
    descKey:  "education_experience.leetcode_desc",
    image: leetcode,
  },
  {
    hash: "8c3a5f",
    year: "2023",
    type: "edu",
    titleKey: "education_experience.undergraduate_studies",
    descKey:  "education_experience.undergraduate_details",
  },
];

// Left edge of the vertical spine (px from panel left).
// Derived from: px-4 (16) + half of the node column (8) = 24.
const SPINE_LEFT = 24;

const EducExper = () => {
  const { t } = useTranslation();
  const [openHash, setOpenHash] = useState(null);
  const [filter, setFilter]     = useState("all");

  const filtered = filter === "all"
    ? ENTRIES
    : ENTRIES.filter((e) => e.type === filter);

  return (
    <section
      className="relative py-16 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* faint paper grain — shared with all sections */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-educ">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-educ)" />
      </svg>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section header — same pattern as About / Projects */}
        <div className="mb-10">
          <p className="font-mono text-xs sm:text-sm" style={{ color: ASH }}>
            // {t("education_experience.subtitle") || "My Journey"}
          </p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-semibold text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: PAPER }}
          >
            {t("education_experience.title") || "Education & Experience"}
          </h2>
        </div>

        {/* Terminal / IDE panel */}
        <div style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>

          {/* Window chrome */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
            <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
            <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
            <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
              $ git log --all --oneline --graph
            </span>
          </div>

          {/* Branch filter — styled as the git refs legend */}
          <div
            className="flex items-center gap-5 px-4 py-2.5 flex-wrap"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="font-mono text-[11px] transition-colors duration-200"
              style={{ color: filter === "all" ? PAPER : ASH }}
            >
              * all
            </button>

            {Object.entries(BRANCH).map(([key, b]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors duration-200"
                style={{ color: filter === key ? b.color : ASH }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: filter === key ? b.color : "transparent",
                    border: `1px solid ${b.color}`,
                  }}
                />
                {key}
              </button>
            ))}
          </div>

          {/* Log entries */}
          <div className="relative py-3">
            <AnimatePresence initial={false}>
              {filtered.map((entry, idx) => {
                const branch = BRANCH[entry.type];
                const isOpen = openHash === entry.hash;
                const isLast = idx === filtered.length - 1;

                return (
                  <motion.div
                    key={entry.hash}
                    className="relative"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.22, delay: idx * 0.04 }}
                  >
                    {/* Spine — absolute so it runs through the expanded panel too */}
                    {!isLast && (
                      <div
                        className="absolute top-[22px] bottom-0 w-px pointer-events-none"
                        style={{ left: SPINE_LEFT, backgroundColor: BORDER }}
                      />
                    )}

                    {/* Commit row */}
                    <button
                      type="button"
                      onClick={() => setOpenHash(isOpen ? null : entry.hash)}
                      className="relative z-10 w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ outlineColor: AMBER }}
                    >
                      {/* Node dot — scales up when the commit is open */}
                      <div className="shrink-0 flex items-center justify-center" style={{ width: 16 }}>
                        <motion.div
                          className="rounded-full"
                          style={{ width: 10, height: 10, backgroundColor: branch.color }}
                          animate={{ scale: isOpen ? 1.4 : 1 }}
                          transition={{ type: "spring", stiffness: 420, damping: 22 }}
                        />
                      </div>

                      {/* Hash — amber, fixed width so alignment is consistent */}
                      <span
                        className="font-mono text-[11px] shrink-0 tabular-nums"
                        style={{ color: AMBER, minWidth: 46 }}
                      >
                        {entry.hash}
                      </span>

                      {/* Year */}
                      <span
                        className="font-mono text-[11px] shrink-0 tabular-nums"
                        style={{ color: ASH, minWidth: 32 }}
                      >
                        {entry.year}
                      </span>

                      {/* Message — truncated on small screens */}
                      <span className="font-mono text-xs truncate min-w-0">
                        <span style={{ color: branch.color }}>{branch.prefix}:</span>{" "}
                        <span style={{ color: PAPER }}>{t(entry.titleKey)}</span>
                      </span>

                      {/* Expand caret */}
                      <motion.span
                        className="ml-auto font-mono text-[10px] shrink-0"
                        style={{ color: ASH }}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        ▶
                      </motion.span>
                    </button>

                    {/* Expanded — mimics `git show` output */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div
                            className="relative z-10 my-1 mr-4 p-4"
                            style={{
                              marginLeft: 40,  // clears the spine + node column
                              backgroundColor: `${INK}90`,
                              borderLeft: `2px solid ${branch.color}`,
                            }}
                          >
                            {/* git show meta line */}
                            <p
                              className="font-mono text-[11px] mb-3"
                              style={{ color: ASH }}
                            >
                              commit {entry.hash}
                              <span className="mx-2" style={{ color: BORDER }}>·</span>
                              Author: Ahmed
                              <span className="mx-2" style={{ color: BORDER }}>·</span>
                              {entry.year}
                            </p>

                            {/* Description */}
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: BODY }}
                            >
                              {t(entry.descKey)}
                            </p>

                            {/* Tags */}
                            {entry.tags && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {entry.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-mono text-[11px] px-2 py-0.5"
                                    style={{ color: ASH, border: `1px solid ${BORDER}` }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Certificate / proof image */}
                            {entry.image && (
                              <img
                                src={entry.image}
                                alt={t(entry.titleKey)}
                                className="mt-4 max-w-xs w-full"
                                style={{ border: `1px solid ${BORDER}` }}
                              />
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <p className="font-mono text-[11px]" style={{ color: ASH }}>
              {filtered.length} commit{filtered.length !== 1 ? "s" : ""}
            </p>
            <p className="font-mono text-[11px]" style={{ color: ASH }}>
              {openHash ? `showing ${openHash}` : "click any to expand"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducExper;