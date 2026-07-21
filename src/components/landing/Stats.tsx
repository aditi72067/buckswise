"use client";

import { motion, type Variants } from "framer-motion";
import {
  Users,
  IndianRupee,
  ShieldCheck,
  Star,
} from "lucide-react";

import SectionReveal from "../ui/SectionReveal";
import TrustStatCard from "./TrustStatCard";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/30 blur-[160px]" />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              TRUSTED WORLDWIDE
            </p>

            <h2 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900">
              Helping thousands make smarter financial decisions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BucksWise empowers users with AI-driven insights,
              smarter budgeting, and secure financial management.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={itemVariants}>
              <TrustStatCard
                icon={<Users size={30} />}
                value="50K+"
                label="Active Users"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrustStatCard
                icon={<IndianRupee size={30} />}
                value="₹20M+"
                label="Money Saved"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrustStatCard
                icon={<Star size={30} />}
                value="4.9/5"
                label="Average Rating"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TrustStatCard
                icon={<ShieldCheck size={30} />}
                value="256-bit"
                label="Bank-Level Security"
              />
            </motion.div>
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}