"use client";

import {
  Wallet,
  Brain,
  Target,
  Users,
  BarChart3,
  Bell,
} from "lucide-react";

import { motion, type Variants } from "framer-motion";
import FeatureCard from "./FeatureCard";
import SectionReveal from "../ui/SectionReveal";

const features = [
  {
    icon: Wallet,
    title: "Smart Expense Tracking",
    description:
      "Automatically categorize your spending and keep every transaction organized.",
  },
  {
    icon: Brain,
    title: "AI Financial Insights",
    description:
      "Receive personalized recommendations to improve your financial habits.",
  },
  {
    icon: Target,
    title: "Savings Goals",
    description:
      "Set savings targets and monitor your progress with visual milestones.",
  },
  {
    icon: Users,
    title: "Bill Splitting",
    description:
      "Split expenses with friends and family instantly without manual calculations.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize income, expenses, trends, and budgets with interactive charts.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified about unusual spending, upcoming bills, and saving opportunities.",
  },
];

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section
  id="features"
  className="relative overflow-hidden bg-white py-24"
>
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/40 blur-[140px]" />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              FEATURES
            </p>

            <h2 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Everything you need to manage your money
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BucksWise combines AI, analytics, and automation to make personal
              finance effortless.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}