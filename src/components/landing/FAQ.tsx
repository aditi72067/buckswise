"use client";

import { motion } from "framer-motion";

import SectionReveal from "../ui/SectionReveal";
import FAQItem from "./FAQItem";

import { fadeUp, viewport } from "@/lib/motion";

const faqs = [
  {
    question: "Is BucksWise free to use?",
    answer:
      "Yes. BucksWise offers a free Starter plan with essential budgeting and expense tracking features.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use bank-level encryption and industry-standard security practices to keep your data safe.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer:
      "Yes. BucksWise lets you securely connect multiple accounts so you can manage all your finances in one place.",
  },
  {
    question: "How does the AI help me?",
    answer:
      "Our AI analyzes your spending habits, identifies trends, predicts future expenses, and recommends ways to save more.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you like without hidden fees.",
  },
] as const;

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-200/25 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/25 blur-[160px]"
      />

      <SectionReveal>
        <div className="relative mx-auto max-w-4xl px-8">
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              FAQ
            </p>

            <h2
              id="faq-heading"
              className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything you need to know about BucksWise.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}