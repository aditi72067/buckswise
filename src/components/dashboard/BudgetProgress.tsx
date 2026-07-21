"use client";

interface BudgetProgressProps {
  budget: number;
  spent: number;
}

export default function BudgetProgress({
  budget,
  spent,
}: BudgetProgressProps) {
  const percentage =
    budget > 0
      ? Math.min((spent / budget) * 100, 100)
      : 0;

  const remaining = budget - spent;

  const barColor =
    percentage < 70
      ? "bg-green-500"
      : percentage < 90
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Monthly Budget
        </h2>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
          Budget
        </span>
      </div>

      <div className="mb-5">
        <p className="text-3xl font-bold text-slate-900">
          ₹{budget.toLocaleString("en-IN")}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Budget for this month
        </p>
      </div>

      <div className="mb-3 h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mb-6 flex justify-between text-sm">
        <span className="font-medium text-slate-600">
          {percentage.toFixed(0)}% Used
        </span>

        <span className="font-medium text-slate-600">
          ₹{spent.toLocaleString("en-IN")} Spent
        </span>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Remaining Budget
          </span>

          <span
            className={`font-bold ${
              remaining >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            ₹{remaining.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}