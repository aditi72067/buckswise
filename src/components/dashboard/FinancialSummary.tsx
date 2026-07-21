"use client";

interface FinancialSummaryProps {
  transactionCount: number;
  highestCategory: string;
  monthlyIncome: number;
  savings: number;
}

export default function FinancialSummary({
  transactionCount,
  highestCategory,
  monthlyIncome,
  savings,
}: FinancialSummaryProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-slate-900">
        Financial Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <span className="text-slate-600">
            Total Transactions
          </span>

          <span className="font-bold text-slate-900">
            {transactionCount}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <span className="text-slate-600">
            Highest Spending Category
          </span>

          <span className="font-bold text-indigo-600">
            {highestCategory}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <span className="text-slate-600">
            Monthly Income
          </span>

          <span className="font-bold text-green-600">
            ₹{monthlyIncome.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <span className="text-slate-600">
            Current Savings
          </span>

          <span
            className={`font-bold ${
              savings >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            ₹{savings.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}