"use client";

import { motion } from "framer-motion";
import { Brain, Wallet, TrendingUp } from "lucide-react";

import SectionReveal from "../ui/SectionReveal";
import StepCard from "./StepCard";

import {
  fadeUp,
  viewport,
} from "@/lib/motion";

const steps = [
  {
    icon: <Wallet size={30} />,
    step: "Step 01",
    title: "Connect Accounts",
    description:
      "Securely link your bank accounts and wallets to track all your finances in one place.",
  },
  {
    icon: <Brain size={30} />,
    step: "Step 02",
    title: "AI Analysis",
    description:
      "Our AI categorizes transactions, identifies spending habits, and finds opportunities to save.",
  },
  {
    icon: <TrendingUp size={30} />,
    step: "Step 03",
    title: "Grow Your Savings",
    description:
      "Receive personalized insights, budgeting tips, and smart recommendations to reach your goals faster.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/30 blur-[140px]"
      />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              HOW IT WORKS
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Managing your finances has never been easier.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BucksWise combines AI with beautiful analytics to help you
              understand, optimize, and grow your finances in just three
              simple steps.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative mt-20 grid gap-8 md:grid-cols-3"
          >
            {/* Connection Line (Desktop Only) */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent md:block"
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{
                  delay: index * 0.12,
                }}
                className="relative"
              >
                <StepCard
                  icon={step.icon}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}