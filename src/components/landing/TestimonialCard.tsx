"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  review,
  avatar,
}: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -10,
              scale: 1.02,
            }
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      aria-labelledby={`${name}-testimonial`}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-indigo-50/40 p-8 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_30px_70px_rgba(99,102,241,0.18)]"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200/30 to-violet-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100"
      />

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg"
        >
          <Quote className="h-5 w-5" />
        </div>

        <div
          aria-label="5 out of 5 stars"
          className="flex gap-1"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

     {/* Review */}
<blockquote className="leading-8 italic text-slate-600">
  <span aria-hidden="true">&ldquo;</span>
  {review}
  <span aria-hidden="true">&rdquo;</span>
</blockquote>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  rotate: 8,
                  scale: 1.08,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-lg font-bold text-white shadow-lg"
        >
          {avatar}
        </motion.div>

        <div>
          <h3
            id={`${name}-testimonial`}
            className="font-bold tracking-tight text-slate-900"
          >
            {name}
          </h3>

          <p className="text-sm text-slate-500">
            {role}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.article>
  );
}