"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface AIInsightCardProps {
  insight: string;
}

export default function AIInsightCard({
  insight,
}: AIInsightCardProps) {
  const healthScore = 92;

  return (
    <motion.section
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 shadow-lg"
      aria-label="AI financial insight"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg">
            <BrainCircuit size={24} />
          </div>

          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles
                size={16}
                className="text-violet-600"
              />

              <span className="text-sm font-bold uppercase tracking-wider text-violet-700">
                AI Financial Insight
              </span>
            </div>

            <p className="leading-7 text-slate-700">
              {insight}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-violet-100">
            <div className="mb-2 flex items-center gap-2">
              <TrendingUp
                size={18}
                className="text-emerald-600"
              />

              <span className="text-sm font-semibold text-slate-700">
                Financial Health
              </span>
            </div>

            <p className="text-3xl font-bold text-emerald-600">
              {healthScore}
              <span className="text-lg text-slate-500">
                /100
              </span>
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-violet-100">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-indigo-600"
              />

              <span className="text-sm font-semibold text-slate-700">
                Status
              </span>
            </div>

            <p className="font-semibold text-indigo-700">
              Excellent
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Keep maintaining your current spending habits.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
          <h4 className="mb-2 text-sm font-semibold text-violet-700">
            AI Recommendation
          </h4>

          <ul className="space-y-2 text-sm leading-6 text-slate-700">
            <li>• Track your daily expenses consistently.</li>
            <li>• Reduce non-essential spending by 10%.</li>
            <li>• Maintain an emergency fund of at least 6 months.</li>
            <li>• Review subscriptions every month.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}