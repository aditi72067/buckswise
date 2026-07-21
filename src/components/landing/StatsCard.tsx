"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

interface StatsCardProps {
  title: string;
  amount: string;
  change: string;
  positive?: boolean;
}

export default function StatsCard({
  title,
  amount,
  change,
  positive = true,
}: StatsCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -5,
              scale: 1.02,
            }
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <div className="rounded-xl bg-indigo-50 p-2">
          <TrendingUp
            size={18}
            className="text-indigo-600"
          />
        </div>
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
        {amount}
      </h3>

      <div
        className={`mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
          positive
            ? "bg-emerald-100 text-emerald-700"
            : "bg-rose-100 text-rose-700"
        }`}
      >
        {positive ? (
          <ArrowUpRight size={14} />
        ) : (
          <ArrowDownRight size={14} />
        )}

        <span>{change}</span>
      </div>
    </motion.div>
  );
}