import { Variants } from "framer-motion";

/**
 * -------------------------------------------------------
 * BUCKSWISE MOTION SYSTEM
 * -------------------------------------------------------
 * Centralized animation system for the entire project.
 * Every reusable animation, transition and viewport
 * configuration should live in this file.
 * -------------------------------------------------------
 */

export const transitions = {
  smooth: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export const viewport = {
  once: true,
  amount: 0.2,
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};