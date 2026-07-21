"use client";

import { motion } from "framer-motion";

import SectionReveal from "../ui/SectionReveal";
import PricingCard from "./PricingCard";

import { fadeUp, viewport } from "@/lib/motion";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    title: "Starter",
    price: "₹0",
    description: "Perfect for getting started.",
    highlighted: false,
    features: [
      "Expense Tracking",
      "Basic Budgeting",
      "Monthly Reports",
      "Email Support",
    ],
  },
  {
    title: "Pro",
    price: "₹299",
    description: "Everything you need to manage money smarter.",
    highlighted: true,
    features: [
      "AI Insights",
      "Unlimited Budgets",
      "Savings Goals",
      "Bill Reminders",
      "Priority Support",
    ],
  },
  {
    title: "Business",
    price: "Custom",
    description: "Advanced tools for teams and organizations.",
    highlighted: false,
    features: [
      "Multi-user Access",
      "Admin Dashboard",
      "Advanced Analytics",
      "API Access",
      "Dedicated Manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[170px]"
      />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              PRICING
            </p>

            <h2
              id="pricing-heading"
              className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Simple pricing for every stage.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Start free and upgrade whenever you&apos;re ready. No hidden charges.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                variants={fadeUp}
                transition={{
                  delay: index * 0.12,
                }}
                className={plan.highlighted ? "lg:-mt-4 lg:mb-4" : undefined}
              >
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  highlighted={plan.highlighted}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}