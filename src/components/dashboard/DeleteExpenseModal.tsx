"use client";

import { AlertTriangle } from "lucide-react";

interface DeleteExpenseModalProps {
  open: boolean;
  expenseTitle?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteExpenseModal({
  open,
  expenseTitle,
  onCancel,
  onConfirm,
}: DeleteExpenseModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-3">
            <AlertTriangle className="text-red-600" size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Delete Expense
            </h2>
            <p className="text-sm text-slate-500">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-slate-700">
            Are you sure you want to delete
            <span className="font-semibold">
              {" "}
              {expenseTitle || "this expense"}
            </span>
            ?
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-slate-300 px-5 py-2 hover:bg-slate-100"
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