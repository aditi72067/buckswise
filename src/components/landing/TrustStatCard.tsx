"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TrustStatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function TrustStatCard({
  icon,
  value,
  label,
}: TrustStatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-indigo-50/40 p-8 text-center shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_30px_70px_rgba(99,102,241,0.18)]"
    >
      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-indigo-200/30 to-violet-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 18,
        }}
        className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg"
      >
        {icon}
      </motion.div>

      {/* Value */}
      <h3 className="relative text-4xl font-extrabold tracking-tight text-slate-900">
        {value}
      </h3>

      {/* Label */}
      <p className="relative mt-3 text-sm font-medium text-slate-600">
        {label}
      </p>

      {/* Bottom Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}