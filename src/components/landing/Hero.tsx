"use client";

import { motion } from "framer-motion";
import FloatingBadge from "./FloatingBadge";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <main>
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-slate-50"
      >
        <div
          aria-hidden="true"
          className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-[170px]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-300/30 blur-[180px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-80px)] items-center gap-20 py-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1
                id="hero-heading"
                className="text-balance text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
              >
                Money, made smarter with{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  AI
                </span>
                .
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0 lg:text-xl">
                Spend smarter, save better, split expenses effortlessly, and
                achieve your financial goals with BucksWise, your AI-powered
                finance companion.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-2xl"
                >
                  Start Free
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[650px] lg:mx-0 lg:justify-self-end"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rotate-2"
              >
                <FloatingBadge
                  title="Monthly Growth"
                  value="+18%"
                  className="-left-16 top-12"
                />

                <FloatingBadge
                  title="AI Score"
                  value="98%"
                  className="-right-14 top-40"
                />

                <FloatingBadge
                  title="Savings"
                  value="$2,450"
                  className="-left-12 bottom-0"
                />

                <div
                  role="img"
                  aria-label="Interactive finance dashboard preview"
                >
                  <DashboardPreview />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}