"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_30px_70px_rgba(99,102,241,0.18)]"
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200/40 to-violet-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg"
      >
        <Icon size={30} />
      </motion.div>

      {/* Title */}
      <h3 className="relative text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 text-[15px] leading-7 text-slate-600">
        {description}
      </p>

      {/* CTA */}
      <div className="relative mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 transition-all duration-300 group-hover:gap-3">
        Learn more

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}