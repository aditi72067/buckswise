"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import BalanceCard from "./BalanceCard";
import StatsCard from "./StatsCard";
import SpendingChart from "./SpendingChart";
import AIInsightCard from "./AIInsightCard";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

import { Expense } from "@/types/expense";

const STORAGE_KEY = "buckswise-expenses";

export default function DashboardPreview() {
  const prefersReducedMotion = useReducedMotion();

  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      setExpenses(JSON.parse(saved));
    } catch {
      setExpenses([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [expenses]);

  const income = 8200;

  const savings = Math.max(
    income * 0.2,
    income - totalExpenses
  );

  const remaining = income - totalExpenses;

  const chartData = [
    {
      month: "Jan",
      spending: 1400,
    },
    {
      month: "Feb",
      spending: 1850,
    },
    {
      month: "Mar",
      spending: 2100,
    },
    {
      month: "Apr",
      spending: 1750,
    },
    {
      month: "May",
      spending: 2600,
    },
    {
      month: "Jun",
      spending:
        expenses.length === 0
          ? 0
          : totalExpenses,
    },
  ];

  const addExpense = (expense: Expense) => {
    setExpenses((previous) => [
      expense,
      ...previous,
    ]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((previous) =>
      previous.filter(
        (expense) => expense.id !== id
      )
    );
  };

  const formatCurrency = (value: number) =>
    `₹${value.toLocaleString("en-IN")}`;
    return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.015,
            }
      }
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform",
      }}
      role="region"
      aria-label="Finance dashboard preview"
      className="w-full max-w-[650px] rounded-[36px] border border-white/60 bg-white/85 p-7 shadow-[0_40px_120px_rgba(99,102,241,0.22)] backdrop-blur-2xl"
    >
      <BalanceCard
        balance={formatCurrency(remaining)}
        change="+12.8%"
      />

      <div className="mt-6 grid grid-cols-2 gap-5">
        <StatsCard
          title="Income"
          amount={formatCurrency(income)}
          change="+8.4%"
        />

        <StatsCard
          title="Expenses"
          amount={formatCurrency(totalExpenses)}
          change="-2.1%"
          positive={false}
        />

        <StatsCard
          title="Savings"
          amount={formatCurrency(savings)}
          change="+14.6%"
        />

        <StatsCard
          title="Remaining"
          amount={formatCurrency(remaining)}
          change="+6.2%"
        />
      </div>

      <div className="mt-7">
        <ExpenseForm
          onAddExpense={addExpense}
        />
      </div>

      <div className="mt-6">
        <ExpenseList
  expenses={expenses}
  onDeleteExpense={() => {}}
  onEditExpense={() => {}}
/>
      </div>

      <div className="mt-7 overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-2">
        <SpendingChart
          data={chartData}
        />
      </div>

      <div className="mt-7">
        <AIInsightCard
          insight={
            expenses.length === 0
              ? "Start adding expenses to receive personalized AI insights."
              : `You've spent ${formatCurrency(
                  totalExpenses
                )} across ${
                  expenses.length
                } transaction${
                  expenses.length === 1
                    ? ""
                    : "s"
                }. Keep tracking consistently to improve your savings.`
          }
        />
      </div>
          </motion.div>
  );
}