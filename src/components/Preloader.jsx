import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { me } from "../assets/images";

// Same token system as AboutMe / Projects / Nav
const INK = "#0d0c0a";
const SURFACE = "#161410";
const BORDER = "#2c2820";
const PAPER = "#ece6d6";
const ASH = "#948e7c";
const AMBER = "#e0a045";

// Floor so the splash doesn't just flash for one frame if the image is cached
const MIN_VISIBLE_MS = 700;

const Preloader = () => {
  const [progress, setProgress] = useState(4);
  const [imageReady, setImageReady] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Preload the hero image directly — doesn't depend on _AboutMe having mounted yet
  useEffect(() => {
    const img = new Image();
    const finish = () => setImageReady(true);
    img.onload = finish;
    img.onerror = finish; // never block the site on a failed asset
    img.src = me;
    if (img.complete) finish(); // already in cache
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMinTimeDone(true), MIN_VISIBLE_MS);
    return () => clearTimeout(t);
  }, []);

  // Simulated progress — eases toward 90% while we wait on the real load event,
  // since a single <img> doesn't report granular byte progress.
  useEffect(() => {
    if (imageReady) return undefined;
    const id = setInterval(() => {
      setProgress((p) => Math.min(90, p + (90 - p) * 0.18 + 0.6));
    }, 120);
    return () => clearInterval(id);
  }, [imageReady]);

  const ready = imageReady && minTimeDone;

  useEffect(() => {
    if (!ready) return undefined;
    setProgress(100);
    const t = setTimeout(() => setHidden(true), 400);
    return () => clearTimeout(t);
  }, [ready]);

  // lock scroll while the splash is up
  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-6"
          style={{ backgroundColor: INK }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full max-w-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}>
            {/* same browser/editor chrome used in the Projects preview */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="w-2 h-2 rounded-full" style={{ border: `1px solid ${ASH}` }} />
              <span className="ml-2 font-mono text-[11px]" style={{ color: ASH }}>
                boot.sh
              </span>
            </div>

            <div className="px-5 py-6 font-mono text-xs leading-6">
              <p style={{ color: ASH }}>$ ./portfolio --init</p>
              <p style={{ color: PAPER }}>
                loading assets<span style={{ color: AMBER }}>...</span>
              </p>

              <div className="mt-4 h-[3px] w-full" style={{ backgroundColor: BORDER }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: AMBER }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-right" style={{ color: ASH }}>
                {Math.round(progress)}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;