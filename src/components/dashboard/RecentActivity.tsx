"use client";

import { Expense } from "@/types/expense";
import {
  Calendar,
  CreditCard,
  Trash2,
} from "lucide-react";

interface RecentActivityProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

export default function RecentActivity({
  expenses,
  onDeleteExpense,
}: RecentActivityProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
          {expenses.length} Items
        </span>
      </div>

      {expenses.length === 0 ? (
        <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500">
            No recent activity.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.slice(0, 5).map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-indigo-100 p-3">
                  <CreditCard
                    size={20}
                    className="text-indigo-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {expense.title}
                  </h3>

                  <div className="mt-1 flex items-center gap-3 text-sm text-slate-500">
                    <span>{expense.category}</span>

                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {expense.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold text-red-600">
                  ₹{expense.amount.toLocaleString("en-IN")}
                </span>

                <button
                  onClick={() =>
                    onDeleteExpense(expense.id)
                  }
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}