"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="fixed left-0 top-0 z-[9999] h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500"
    />
  );
}