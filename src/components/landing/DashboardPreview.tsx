"use client";

import { motion, useReducedMotion } from "framer-motion";
import BalanceCard from "./BalanceCard";
import StatsCard from "./StatsCard";
import SpendingChart from "./SpendingChart";
import AIInsightCard from "./AIInsightCard";

export default function DashboardPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.015,
              rotate: 0,
            }
      }
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      role="region"
      aria-label="Finance dashboard preview"
      className="w-full max-w-[650px] rounded-[36px] border border-white/60 bg-white/85 p-7 shadow-[0_40px_120px_rgba(99,102,241,0.22)] backdrop-blur-2xl"
    >
      <BalanceCard
        balance="$12,480.50"
        change="+12.8%"
      />

      <div className="mt-6 grid grid-cols-2 gap-5">
        <StatsCard
          title="Income"
          amount="$8,240"
          change="+8.4%"
        />

        <StatsCard
          title="Expenses"
          amount="$3,960"
          change="-2.1%"
          positive={false}
        />
      </div>

      <div className="mt-7 overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-2">
        <SpendingChart />
      </div>

      <div className="mt-7">
        <AIInsightCard
          insight="You're spending 18% less on dining this month. At this pace, you'll exceed your savings goal by the end of the month."
        />
      </div>
    </motion.div>
  );
}