"use client";

import AIInsightCard from "@/components/landing/AIInsightCard";
import ExpensePieChart from "@/components/landing/ExpensePieChart";
import FinancialSummary from "./FinancialSummary";
import { Expense } from "@/types/expense";

interface RightSidebarProps {
  expenses: Expense[];
  insight: string;
  transactionCount: number;
  highestCategory: string;
  monthlyIncome: number;
  savings: number;
}

export default function RightSidebar({
  expenses,
  insight,
  transactionCount,
  highestCategory,
  monthlyIncome,
  savings,
}: RightSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-xl font-semibold text-slate-900">
          Spending Breakdown
        </h2>

        <ExpensePieChart expenses={expenses} />
      </div>

      <AIInsightCard insight={insight} />

      <FinancialSummary
        transactionCount={transactionCount}
        highestCategory={highestCategory}
        monthlyIncome={monthlyIncome}
        savings={savings}
      />
    </div>
  );
}