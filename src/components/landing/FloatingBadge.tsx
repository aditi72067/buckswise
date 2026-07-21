"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl lg:flex ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
        <TrendingUp size={18} />
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500">{title}</p>
        <p className="text-base font-bold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );
}