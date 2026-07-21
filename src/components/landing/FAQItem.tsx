"use client";

import { useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const id = useId();

  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <motion.article
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -2,
            }
      }
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
        open
          ? "border-indigo-300 shadow-[0_20px_50px_rgba(99,102,241,0.12)]"
          : "border-slate-200/70 bg-gradient-to-br from-white via-white to-indigo-50/30 hover:border-indigo-200 hover:shadow-lg"
      }`}
    >
      {/* Hover Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-200/30 to-violet-200/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top Accent */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 transition-all duration-300 ${
          open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        className="relative flex w-full items-center justify-between px-7 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        <h3
          className={`pr-6 text-lg font-semibold transition-colors duration-300 ${
            open ? "text-indigo-600" : "text-slate-900"
          }`}
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.25,
          }}
          aria-hidden="true"
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            open
              ? "bg-indigo-100 text-indigo-600"
              : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
          }`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              prefersReducedMotion
                ? false
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={
              prefersReducedMotion
                ? {}
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7">
              <div
                aria-hidden="true"
                className="mb-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
              />

              <p className="leading-8 text-slate-600">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}