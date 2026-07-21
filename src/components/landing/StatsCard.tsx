"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500">
          {title}
        </span>

        <div className="rounded-xl bg-indigo-50 p-2">
          <TrendingUp className="h-5 w-5 text-indigo-600" />
        </div>
      </div>

      <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
        {amount}
      </h3>

      <div className="mt-5 flex items-center justify-between">
        <div
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-rose-50 text-rose-600"
          }`}
        >
          {positive ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}

          {change}
        </div>

        <span className="text-xs text-slate-400">
          This month
        </span>
      </div>
    </motion.div>
  );
}