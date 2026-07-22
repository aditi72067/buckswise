"use client";

import { Expense } from "@/types/expense";

interface DeleteExpenseModalProps {
  open: boolean;
  expense: Expense | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteExpenseModal({
  open,
  expense,
  onClose,
  onConfirm,
}: DeleteExpenseModalProps) {
  if (!open || !expense) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-slate-900">
          Delete Expense
        </h2>

        <p className="mt-4 text-slate-600">
          Are you sure you want to delete this expense?
        </p>

        <div className="mt-6 rounded-2xl bg-slate-100 p-4">
          <h3 className="font-semibold">
            {expense.title}
          </h3>

          <p className="text-slate-500">
            {expense.category}
          </p>

          <p className="mt-2 text-xl font-bold text-red-600">
            ₹{expense.amount.toLocaleString()}
          </p>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2 font-medium hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}