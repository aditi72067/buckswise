"use client";

import { Expense } from "@/types/expense";
import { Pencil, Trash2 } from "lucide-react";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
  onEditExpense: (expense: Expense) => void;
}

export default function ExpenseList({
  expenses,
  onDeleteExpense,
  onEditExpense,
}: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          No expenses yet
        </h3>

        <p className="mt-2 text-slate-500">
          Add your first expense to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-slate-900">
        Recent Expenses
      </h3>

      <div className="space-y-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <div>
              <h4 className="font-semibold text-slate-900">
                {expense.title}
              </h4>

              <p className="text-sm text-slate-500">
                {expense.category} •{" "}
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 text-lg font-bold text-indigo-600">
                ₹{expense.amount.toLocaleString()}
              </span>

              <button
                type="button"
                onClick={() => onEditExpense(expense)}
                className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                aria-label={`Edit ${expense.title}`}
              >
                <Pencil size={18} />
              </button>

              <button
                type="button"
                onClick={() => onDeleteExpense(expense.id)}
                className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                aria-label={`Delete ${expense.title}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}