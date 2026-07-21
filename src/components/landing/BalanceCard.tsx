"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Wallet } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  change: string;
}

export default function BalanceCard({
  balance,
  change,
}: BalanceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      aria-labelledby="balance-heading"
      className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-7 text-white shadow-[0_25px_70px_rgba(99,102,241,0.35)]"
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            id="balance-heading"
            className="text-sm font-medium text-indigo-100"
          >
            Total Balance
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            {balance}
          </h2>
        </div>

        <div
          aria-hidden="true"
          className="rounded-2xl bg-white/15 p-3 backdrop-blur-lg"
        >
          <Wallet size={26} />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
          <ArrowUpRight
            size={18}
            aria-hidden="true"
          />

          <span className="font-semibold">
            {change}
          </span>
        </div>

        <span className="text-sm text-indigo-100">
          vs last month
        </span>
      </div>
    </motion.section>
  );
}