"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface NotificationToastProps {
  show: boolean;
  message: string;
}

export default function NotificationToast({
  show,
  message,
}: NotificationToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-8 left-8 z-50 flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-2xl"
        >
          <CheckCircle2 className="text-green-400" />

          <span className="font-medium">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}