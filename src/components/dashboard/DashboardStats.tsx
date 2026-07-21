"use client";

import {
  Wallet,
  TrendingDown,
  PiggyBank,
  Receipt,
} from "lucide-react";

interface DashboardStatsProps {
  monthlyIncome: number;
  totalExpenses: number;
  savings: number;
  transactionCount: number;
}

export default function DashboardStats({
  monthlyIncome,
  totalExpenses,
  savings,
  transactionCount,
}: DashboardStatsProps) {
  const cards = [
    {
      title: "Monthly Income",
      value: `₹${monthlyIncome.toLocaleString("en-IN")}`,
      subtitle: "Income",
      icon: Wallet,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      badge: "bg-green-100 text-green-700",
    },
    {
      title: "Expenses",
      value: `₹${totalExpenses.toLocaleString("en-IN")}`,
      subtitle: `${transactionCount} Transactions`,
      icon: TrendingDown,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      badge: "bg-red-100 text-red-700",
    },
    {
      title: "Savings",
      value: `₹${savings.toLocaleString("en-IN")}`,
      subtitle:
        savings >= 0 ? "Current Savings" : "Overspent",
      icon: PiggyBank,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      badge:
        savings >= 0
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700",
    },
    {
      title: "Transactions",
      value: transactionCount,
      subtitle: "This Month",
      icon: Receipt,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      badge: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  {card.value}
                </h3>

                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${card.badge}`}
                >
                  {card.subtitle}
                </span>
              </div>

              <div
                className={`rounded-2xl p-3 ${card.iconBg}`}
              >
                <Icon
                  size={24}
                  className={card.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}