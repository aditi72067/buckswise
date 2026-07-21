"use client";

import ExpenseForm from "@/components/landing/ExpenseForm";
import ExpenseList from "@/components/landing/ExpenseList";
import SpendingChart, {
  SpendingData,
} from "@/components/landing/SpendingChart";
import { Expense } from "@/types/expense";

interface ExpenseSectionProps {
  expenses: Expense[];
  filteredExpenses: Expense[];
  categories: string[];
  chartData: SpendingData[];

  search: string;
  category: string;
  sortBy: string;

  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;

  onAddExpense: (expense: Expense) => void;
  onDeleteExpense: (id: string) => void;
}

export default function ExpenseSection({
  filteredExpenses,
  categories,
  chartData,

  search,
  category,
  sortBy,

  setSearch,
  setCategory,
  setSortBy,

  onAddExpense,
  onDeleteExpense,
}: ExpenseSectionProps) {
  return (
    <div className="space-y-6">
      <ExpenseForm onAddExpense={onAddExpense} />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Expense History
          </h2>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-2 outline-none transition focus:border-indigo-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
            >
              <option value="Latest">
                Latest
              </option>

              <option value="Highest">
                Highest
              </option>

              <option value="Lowest">
                Lowest
              </option>
            </select>
          </div>
        </div>
                  <ExpenseList
            expenses={filteredExpenses}
            onDeleteExpense={onDeleteExpense}
          />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Monthly Spending
          </h2>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            Overview
          </span>
        </div>

        {chartData.length > 0 ? (
          <SpendingChart data={chartData} />
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500">
              No spending data available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}