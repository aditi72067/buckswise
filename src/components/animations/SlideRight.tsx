"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { viewport, transitions } from "@/lib/motion";

interface SlideLeftProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideLeft({
  children,
  delay = 0,
  className = "",
}: SlideLeftProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
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