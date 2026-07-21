"use client";

import { Plus } from "lucide-react";

interface FloatingActionButtonProps {
  onClick: () => void;
}

export default function FloatingActionButton({
  onClick,
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-indigo-300"
      aria-label="Add Expense"
    >
      <Plus size={30} strokeWidth={2.5} />
    </button>
  );
}