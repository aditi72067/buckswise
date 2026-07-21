"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export interface SpendingData {
  month: string;
  spending: number;
}

interface SpendingChartProps {
  data?: SpendingData[];
}

const defaultData: SpendingData[] = [
  { month: "Jan", spending: 2200 },
  { month: "Feb", spending: 1800 },
  { month: "Mar", spending: 2600 },
  { month: "Apr", spending: 2100 },
  { month: "May", spending: 3200 },
  { month: "Jun", spending: 2800 },
];

export default function SpendingChart({
  data = defaultData,
}: SpendingChartProps) {
  return (
    <section
      aria-labelledby="monthly-spending-heading"
      className="w-full rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p
            id="monthly-spending-heading"
            className="text-sm font-semibold text-slate-500"
          >
            Monthly Spending
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900">
  ₹
  {data
    .reduce((total, item) => total + item.spending, 0)
    .toLocaleString("en-IN")}
</h3>
        </div>

        <div
          aria-label="Monthly spending summary"
          className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600"
        >
          Live
        </div>
      </div>

      <ResponsiveContainer width="100%" height={230}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="spendingGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#6366F1"
                stopOpacity={0.45}
              />
              <stop
                offset="95%"
                stopColor="#6366F1"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#64748B",
              fontSize: 12,
            }}
          />

          <YAxis
            hide
            domain={["dataMin - 300", "dataMax + 300"]}
          />

          <Tooltip
            cursor={{
              stroke: "#6366F1",
              strokeDasharray: "4 4",
            }}
            contentStyle={{
              borderRadius: "14px",
              border: "none",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            }}
            labelStyle={{
              fontWeight: 600,
            }}
            formatter={(value) => [
  `₹${Number(value).toLocaleString("en-IN")}`,
  "Spent",
]}
          />

          <Area
            type="natural"
            dataKey="spending"
            stroke="#6366F1"
            strokeWidth={3}
            fill="url(#spendingGradient)"
            animationDuration={1400}
            activeDot={{
              r: 6,
              fill: "#6366F1",
              stroke: "#FFFFFF",
              strokeWidth: 3,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}