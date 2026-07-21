"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewport, transitions } from "@/lib/motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
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