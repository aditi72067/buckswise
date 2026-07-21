"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface AIInsightCardProps {
  insight: string;
}

export default function AIInsightCard({
  insight,
}: AIInsightCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -3,
              scale: 1.01,
            }
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      aria-labelledby="ai-insight-heading"
      className="overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-5 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg"
        >
          <Sparkles className="h-6 w-6" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3
              id="ai-insight-heading"
              className="text-lg font-bold text-slate-900"
            >
              AI Insight
            </h3>

            <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">
              Smart
            </span>
          </div>

          <p className="mt-3 leading-7 text-slate-600">
            {insight}
          </p>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <span>View detailed analysis</span>

            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}