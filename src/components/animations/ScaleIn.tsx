"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { viewport, transitions } from "@/lib/motion";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScaleIn({
  children,
  delay = 0,
  className = "",
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
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