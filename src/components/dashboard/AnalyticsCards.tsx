"use client";

import { CreditCard, IndianRupee, Layers3, TrendingUp } from "lucide-react";

interface AnalyticsCardsProps {
  averageDaily: number;
  largestExpense: number;
  categoryCount: number;
  transactionCount: number;
}

export default function AnalyticsCards({
  averageDaily,
  largestExpense,
  categoryCount,
  transactionCount,
}: AnalyticsCardsProps) {
  const cards = [
    {
      title: "Average Daily",
      value: `₹${averageDaily.toLocaleString("en-IN")}`,
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Largest Expense",
      value: `₹${largestExpense.toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Categories",
      value: categoryCount,
      icon: Layers3,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Transactions",
      value: transactionCount,
      icon: CreditCard,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {card.value}
                </h3>
              </div>

              <div
                className={`rounded-2xl p-3 ${card.color}`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}