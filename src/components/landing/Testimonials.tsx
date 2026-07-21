"use client";

import { motion } from "framer-motion";

import SectionReveal from "../ui/SectionReveal";
import TestimonialCard from "./TestimonialCard";

import {
  fadeUp,
  viewport,
} from "@/lib/motion";

const testimonials = [
  {
    avatar: "SA",
    name: "Sarah Anderson",
    role: "Freelance Designer",
    review:
      "BucksWise helped me understand where my money was going. I've saved more in the last three months than I did all last year.",
  },
  {
    avatar: "JP",
    name: "James Parker",
    role: "Software Engineer",
    review:
      "The AI insights are surprisingly accurate. I finally have a budgeting app that actually feels intelligent.",
  },
  {
    avatar: "PK",
    name: "Priya Khanna",
    role: "Marketing Manager",
    review:
      "Expense tracking, bill splitting, and savings goals all in one place. It's become my favorite finance app.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-[170px]"
      />

      <SectionReveal>
        <div className="relative mx-auto max-w-7xl px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
              TESTIMONIALS
            </p>

            <h2
              id="testimonials-heading"
              className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Loved by people who value smarter money management.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Thousands of users rely on BucksWise every day to track spending,
              save money, and make confident financial decisions.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                transition={{
                  delay: index * 0.12,
                }}
              >
                <TestimonialCard
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  role={testimonial.role}
                  review={testimonial.review}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}