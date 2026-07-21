"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  PiggyBank,
  Wallet,
} from "lucide-react";

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
      className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#4F46E5] via-[#6D28D9] to-[#8B5CF6] p-7 text-white shadow-[0_30px_80px_rgba(99,102,241,0.35)]"
    >
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <p
            id="balance-heading"
            className="text-sm font-medium text-indigo-100"
          >
            Available Balance
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            {balance}
          </h2>

          <p className="mt-2 text-sm text-indigo-100">
            After expenses & savings
          </p>
        </div>

        <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-xl">
          <Wallet
            size={28}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-lg">
          <ArrowUpRight
            size={18}
            aria-hidden="true"
          />

          <span className="text-sm font-semibold">
            {change}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-lg">
          <PiggyBank
            size={17}
            aria-hidden="true"
          />

          <span className="text-sm font-medium">
            Smart Budget
          </span>
        </div>
      </div>
    </motion.section>
  );
}