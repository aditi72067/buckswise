"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          whileHover={{
            scale: 1.08,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-[9998] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/80 text-indigo-600 shadow-[0_15px_45px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-all hover:border-indigo-300 hover:shadow-[0_20px_50px_rgba(99,102,241,0.25)]"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}