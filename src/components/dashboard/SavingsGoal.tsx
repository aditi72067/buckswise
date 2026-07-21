"use client";

interface SavingsGoalProps {
  goal: number;
  savings: number;
}

export default function SavingsGoal({
  goal,
  savings,
}: SavingsGoalProps) {
  const percentage =
    goal > 0
      ? Math.min((savings / goal) * 100, 100)
      : 0;

  const remaining = Math.max(goal - savings, 0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Savings Goal
        </h2>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          Goal
        </span>
      </div>

      <div className="mb-5">
        <p className="text-3xl font-bold text-slate-900">
          ₹{goal.toLocaleString("en-IN")}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Your monthly target
        </p>
      </div>

      <div className="mb-3 h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mb-6 flex justify-between text-sm">
        <span className="font-medium text-slate-600">
          {percentage.toFixed(0)}% Completed
        </span>

        <span className="font-medium text-slate-600">
          ₹{savings.toLocaleString("en-IN")} Saved
        </span>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Remaining Goal
          </span>

          <span className="font-bold text-emerald-600">
            ₹{remaining.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}