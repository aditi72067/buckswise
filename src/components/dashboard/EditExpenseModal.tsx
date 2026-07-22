"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Expense } from "@/types/expense";

interface EditExpenseModalProps {
  open: boolean;
  expense: Expense | null;
  onClose: () => void;
  onSave: (expense: Expense) => void;
}

export default function EditExpenseModal({
  open,
  expense,
  onClose,
  onSave,
}: EditExpenseModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setCategory(expense.category);
      setAmount(expense.amount.toString());
      setDate(expense.date);
    }
  }, [expense]);

  if (!open || !expense) return null;

  const handleSave = () => {
    if (
      !title.trim() ||
      !category.trim() ||
      !amount ||
      !date
    )
      return;

    onSave({
      ...expense,
      title: title.trim(),
      category: category.trim(),
      amount: Number(amount),
      date,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Edit Expense
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Title"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
          />

          <input
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            placeholder="Category"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            placeholder="Amount"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
          />

          <input
            type="date"
            value={date.split("T")[0]}
            onChange={(e) =>
              setDate(e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </div>
      </div>
  );
}