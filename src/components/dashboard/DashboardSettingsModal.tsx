"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface DashboardSettingsModalProps {
  open: boolean;
  initialBudget: number;
  initialGoal: number;
  onClose: () => void;
  onSave: (budget: number, goal: number) => void;
}

export default function DashboardSettingsModal({
  open,
  initialBudget,
  initialGoal,
  onClose,
  onSave,
}: DashboardSettingsModalProps) {
  const [budget, setBudget] = useState(initialBudget);
  const [goal, setGoal] = useState(initialGoal);

  useEffect(() => {
    setBudget(initialBudget);
    setGoal(initialGoal);
  }, [initialBudget, initialGoal, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Dashboard Settings
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Monthly Budget
            </label>

            <input
              type="number"
              value={budget}
              onChange={(e) =>
                setBudget(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Savings Goal
            </label>

            <input
              type="number"
              value={goal}
              onChange={(e) =>
                setGoal(Number(e.target.value))
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(budget, goal);
              onClose();
            }}
            className="rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}