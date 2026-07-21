"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewport, transitions } from "@/lib/motion";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        ...transitions.smooth,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}