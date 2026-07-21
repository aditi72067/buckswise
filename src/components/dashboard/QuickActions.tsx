"use client";

import {
  Download,
  Plus,
  Target,
  Wallet,
} from "lucide-react";

interface QuickActionsProps {
  onExport: () => void;
}

export default function QuickActions({
  onExport,
}: QuickActionsProps) {
  const actions = [
    {
      label: "Add Expense",
      icon: Plus,
      color:
        "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
    {
      label: "Export CSV",
      icon: Download,
      color:
        "bg-emerald-600 hover:bg-emerald-700 text-white",
      onClick: onExport,
    },
    {
      label: "Budget",
      icon: Wallet,
      color:
        "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "Goals",
      icon: Target,
      color:
        "bg-purple-600 hover:bg-purple-700 text-white",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              onClick={action.onClick}
              className={`rounded-2xl p-5 transition-all duration-300 hover:scale-105 ${action.color}`}
            >
              <Icon className="mx-auto mb-3" />

              <p className="text-sm font-semibold">
                {action.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}