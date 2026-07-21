"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const buttonText =
    title === "Starter"
      ? "Start Free"
      : title === "Business"
        ? "Contact Sales"
        : "Upgrade to Pro";

  return (
    <motion.article
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -8,
              scale: highlighted ? 1.02 : 1.03,
            }
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      aria-labelledby={`${title}-plan`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
        highlighted
          ? "border-indigo-500 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white shadow-[0_35px_80px_rgba(99,102,241,0.35)]"
          : "border-slate-200/70 bg-gradient-to-br from-white via-white to-indigo-50/40 text-slate-900 shadow-[0_15px_45px_rgba(15,23,42,0.08)] hover:border-indigo-200 hover:shadow-[0_30px_70px_rgba(99,102,241,0.18)]"
      }`}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 ${
          highlighted
            ? "bg-white/20"
            : "bg-gradient-to-br from-indigo-200/30 to-violet-200/30 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Top Accent */}
      {!highlighted && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-x-100"
        />
      )}

      {/* Badge */}
      {highlighted && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-indigo-600 shadow-xl">
            ⭐ Most Popular
          </span>
        </div>
      )}

      <div className="relative flex h-full flex-col p-8">
        <h3
          id={`${title}-plan`}
          className="text-3xl font-bold tracking-tight"
        >
          {title}
        </h3>

        <p
          className={`mt-3 leading-7 ${
            highlighted ? "text-indigo-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>

        <div className="mt-8">
          <span className="text-6xl font-extrabold tracking-tight">
            {price}
          </span>

          {price !== "Custom" && (
            <span
              className={`ml-2 text-lg ${
                highlighted ? "text-indigo-100" : "text-slate-500"
              }`}
            >
              /month
            </span>
          )}
        </div>

        <div
          aria-hidden="true"
          className={`my-8 h-px ${
            highlighted
              ? "bg-white/20"
              : "bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          }`}
        />

        <ul className="flex-1 space-y-5">
          {features.map((feature) => (
            <motion.li
              key={feature}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      x: 4,
                    }
              }
              className="flex items-center gap-4"
            >
              <div
                aria-hidden="true"
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  highlighted
                    ? "bg-white text-indigo-600"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <Check
                  size={15}
                  strokeWidth={3}
                />
              </div>

              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          type="button"
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  scale: 1.02,
                }
          }
          whileTap={
            prefersReducedMotion
              ? {}
              : {
                  scale: 0.98,
                }
          }
          className={`mt-10 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            highlighted
              ? "bg-white text-indigo-600 hover:bg-slate-100 focus-visible:ring-white"
              : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg focus-visible:ring-indigo-500"
          }`}
        >
          <span>{buttonText}</span>

          <ArrowRight
            aria-hidden="true"
            size={18}
          />
        </motion.button>
      </div>

      {/* Bottom Accent */}
      {!highlighted && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
    </motion.article>
  );
}