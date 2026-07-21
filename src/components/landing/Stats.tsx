"use client";

import { motion } from "framer-motion";
import {
  Users,
  IndianRupee,
  ShieldCheck,
  Star,
} from "lucide-react";

import SectionReveal from "../ui/SectionReveal";
import TrustStatCard from "./TrustStatCard";

import {
  fadeUp,
  viewport,
} from "@/lib/motion";

const stats = [
  {
    icon: <Users size={30} />,
    value: "50K+",
    label: "Active Users",
  },
  {
    icon: <IndianRupee size={30} />,
    value: "₹20M+",
    label: "Money Saved",
  },
  {
    icon: <Star size={30} />,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: <ShieldCheck size={30} />,
    value: "256-bit",
    label: "Bank-Level Security",
  },
];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/30 blur-[160px]"
      />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              TRUSTED WORLDWIDE
            </p>

            <h2
              id="stats-heading"
              className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Helping thousands make smarter financial decisions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BucksWise empowers users with AI-driven insights,
              smarter budgeting, and secure financial management.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <TrustStatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}