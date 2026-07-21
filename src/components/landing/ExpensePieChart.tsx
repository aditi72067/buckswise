"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Expense } from "@/types/expense";

interface ExpensePieChartProps {
  expenses: Expense[];
}

const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#EC4899",
  "#F59E0B",
  "#10B981",
  "#06B6D4",
  "#EF4444",
  "#84CC16",
];

export default function ExpensePieChart({
  expenses,
}: ExpensePieChartProps) {
  const categoryTotals = expenses.reduce<Record<string, number>>(
    (acc, expense) => {
      acc[expense.category] =
        (acc[expense.category] || 0) + expense.amount;
      return acc;
    },
    {}
  );

  const data = Object.entries(categoryTotals).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Expense Categories
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Spending distribution by category
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex h-72 items-center justify-center text-slate-500">
          No expense data available.
        </div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                cornerRadius={8}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip
  formatter={(value) => [
    `₹${Number(value).toLocaleString("en-IN")}`,
    "Spent",
  ]}
/>

              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-3">
            {data.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />

                  <span className="font-medium text-slate-700">
                    {item.name}
                  </span>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-slate-900">
                    ₹
                    {item.value.toLocaleString(
                      "en-IN"
                    )}
                  </p>

                  <p className="text-xs text-slate-500">
                    {(
                      (item.value / total) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}