"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FloatingBadgeProps {
  title: string;
  value: string;
  className?: string;
}

export default function FloatingBadge({
  title,
  value,
  className = "",
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 0.5, 0, -0.5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        y: -14,
      }}
      className={`absolute overflow-hidden rounded-3xl border border-white/70 bg-white/85 px-5 py-4 shadow-[0_25px_70px_rgba(99,102,241,0.22)] backdrop-blur-2xl ${className}`}
    >
      {/* Decorative Glow */}
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-200/30 blur-2xl" />

      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">
          <Sparkles className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {title}
          </p>

          <h4 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
            {value}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}