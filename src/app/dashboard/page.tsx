"use client";

import { useEffect, useMemo, useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import EditExpenseModal from "@/components/dashboard/EditExpenseModal";
import DeleteExpenseModal from "@/components/dashboard/DeleteExpenseModal";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import ExpenseSection from "@/components/dashboard/ExpenseSection";
import RightSidebar from "@/components/dashboard/RightSidebar";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import SavingsGoal from "@/components/dashboard/SavingsGoal";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import DashboardSettingsModal from "@/components/dashboard/DashboardSettingsModal";
import FloatingActionButton from "@/components/dashboard/FloatingActionButton";
import NotificationToast from "@/components/dashboard/NotificationToast";

import { Expense } from "@/types/expense";
import { SpendingData } from "@/components/landing/SpendingChart";

const INITIAL_EXPENSES: Expense[] = [
  {
    id: crypto.randomUUID(),
    title: "Groceries",
    category: "Food",
    amount: 2500,
    date: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "Electricity Bill",
    category: "Bills",
    amount: 1800,
    date: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "Uber",
    category: "Transport",
    amount: 450,
    date: new Date().toISOString(),
  },
];

export default function DashboardPage() {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Latest");

  const [monthlyIncome] =
    useState(50000);

  const [monthlyBudget, setMonthlyBudget] =
    useState(50000);

  const [savingsGoal, setSavingsGoal] =
    useState(20000);

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  const [toastVisible, setToastVisible] =
    useState(false);

  const [toastMessage, setToastMessage] =
    useState("");
    const [editModalOpen, setEditModalOpen] = useState(false);
const [editingExpense, setEditingExpense] =
  useState<Expense | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] =
  useState(false);

const [expenseToDelete, setExpenseToDelete] =
  useState<Expense | null>(null);

const startEditing = (expense: Expense) => {
  console.log("START EDIT", expense);

  setEditingExpense(expense);
  setEditModalOpen(true);
};

const closeEditor = () => {
  setEditingExpense(null);
  setEditModalOpen(false);
};
      useEffect(() => {
    const storedExpenses =
      localStorage.getItem("buckswise-expenses");

    if (storedExpenses) {
      try {
        setExpenses(JSON.parse(storedExpenses));
      } catch {
        setExpenses(INITIAL_EXPENSES);
      }
    } else {
      setExpenses(INITIAL_EXPENSES);
    }

    const storedBudget =
      localStorage.getItem("buckswise-budget");

    if (storedBudget) {
      setMonthlyBudget(Number(storedBudget));
    }

    const storedGoal =
      localStorage.getItem("buckswise-goal");

    if (storedGoal) {
      setSavingsGoal(Number(storedGoal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "buckswise-expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem(
      "buckswise-budget",
      monthlyBudget.toString()
    );
  }, [monthlyBudget]);

  useEffect(() => {
    localStorage.setItem(
      "buckswise-goal",
      savingsGoal.toString()
    );
  }, [savingsGoal]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [expenses]);

  const savings =
    monthlyIncome - totalExpenses;

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        expenses.map(
          (expense) => expense.category
        )
      ),
    ];
  }, [expenses]);

  const chartData: SpendingData[] =
    useMemo(() => {
      const totals = new Map<
        string,
        number
      >();

      expenses.forEach((expense) => {
        totals.set(
          expense.category,
          (totals.get(expense.category) ??
            0) + expense.amount
        );
      });

      return Array.from(
        totals.entries()
      ).map(([category, amount]) => ({
       month: category,
       spending: amount,
      }));
    }, [expenses]);

  const filteredExpenses = useMemo(() => {
    let data = [...expenses];

    if (search.trim()) {
      const query =
        search.toLowerCase();

      data = data.filter(
        (expense) =>
          expense.title
            .toLowerCase()
            .includes(query) ||
          expense.category
            .toLowerCase()
            .includes(query)
      );
    }

    if (category !== "All") {
      data = data.filter(
        (expense) =>
          expense.category === category
      );
    }

    switch (sortBy) {
      case "Highest":
        data.sort(
          (a, b) => b.amount - a.amount
        );
        break;

      case "Lowest":
        data.sort(
          (a, b) => a.amount - b.amount
        );
        break;

      default:
        data.sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );
    }

    return data;
  }, [
    expenses,
    search,
    category,
    sortBy,
  ]);
    const averageDaily =
    expenses.length === 0
      ? 0
      : Math.round(totalExpenses / expenses.length);

  const largestExpense =
    expenses.length === 0
      ? 0
      : Math.max(
          ...expenses.map(
            (expense) => expense.amount
          )
        );

  const highestCategory =
    chartData.length === 0
      ? "None"
      : chartData.reduce((prev, current) =>
          current.spending > prev.spending
            ? current
            : prev
        ).month;

  const insight =
    expenses.length === 0
      ? "Start adding expenses to receive AI-powered spending insights."
      : `You spent the most on ${highestCategory}. Consider reviewing this category to improve your monthly savings.`;

  const addExpense = (
    expense: Expense
  ) => {
    setExpenses((prev) => [
      expense,
      ...prev,
    ]);
  };

  const deleteExpense = (
  id: string
) => {
  setExpenses((prev) =>
    prev.filter(
      (expense) => expense.id !== id
    )
  );
};
const openDeleteModal = (expense: Expense) => {
  setExpenseToDelete(expense);
  setDeleteModalOpen(true);
};

const closeDeleteModal = () => {
  setExpenseToDelete(null);
  setDeleteModalOpen(false);
};

const confirmDelete = () => {
  if (!expenseToDelete) return;

  deleteExpense(expenseToDelete.id);

  setExpenseToDelete(null);
  setDeleteModalOpen(false);

  setToastMessage("Expense deleted successfully!");
  setToastVisible(true);

  setTimeout(() => {
    setToastVisible(false);
  }, 2500);
};

const updateExpense = (
  updatedExpense: Expense
) => {
  setExpenses((prev) =>
    prev.map((expense) =>
      expense.id === updatedExpense.id
        ? updatedExpense
        : expense
    )
  );

  setToastMessage("Expense updated successfully!");
  setToastVisible(true);

  setTimeout(() => {
    setToastVisible(false);
  }, 2500);
};

  const exportCSV = () => {
    if (expenses.length === 0) return;

    const rows = [
      [
        "Title",
        "Category",
        "Amount",
        "Date",
      ],
      ...expenses.map((expense) => [
        expense.title,
        expense.category,
        expense.amount.toString(),
        expense.date,
      ]),
    ];

    const csv = rows
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "buckswise-expenses.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const saveSettings = (
    budget: number,
    goal: number
  ) => {
    setMonthlyBudget(budget);
    setSavingsGoal(goal);

    setSettingsOpen(false);

    setToastMessage(
      "Settings updated successfully!"
    );

    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };
    return (
    <>
      <main className="min-h-screen bg-slate-50">
        <DashboardHeader
    onExport={exportCSV}
/>

        <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">
          <AnalyticsCards
            averageDaily={averageDaily}
            largestExpense={largestExpense}
            categoryCount={categories.length - 1}
            transactionCount={expenses.length}
          />

          <DashboardStats
            monthlyIncome={monthlyIncome}
            totalExpenses={totalExpenses}
            savings={savings}
            transactionCount={expenses.length}
          />

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ExpenseSection
                expenses={expenses}
                filteredExpenses={filteredExpenses}
                categories={categories}
                chartData={chartData}
                search={search}
                category={category}
                sortBy={sortBy}
                setSearch={setSearch}
                setCategory={setCategory}
                setSortBy={setSortBy}
                onAddExpense={addExpense}
                onDeleteExpense={openDeleteModal}
                onEditExpense={startEditing}
              />
            </div>

            <RightSidebar
              expenses={expenses}
              insight={insight}
              transactionCount={expenses.length}
              highestCategory={highestCategory}
              monthlyIncome={monthlyIncome}
              savings={savings}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <BudgetProgress
              budget={monthlyBudget}
              spent={totalExpenses}
            />

            <SavingsGoal
              goal={savingsGoal}
              savings={savings}
            />
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RecentActivity
                expenses={expenses}
                onDeleteExpense={deleteExpense}
              />
            </div>

            <QuickActions
              onExport={exportCSV}
            />
            </div>
                  </div>

        <DashboardSettingsModal
          open={settingsOpen}
          initialBudget={monthlyBudget}
          initialGoal={savingsGoal}
          onClose={() => setSettingsOpen(false)}
          onSave={saveSettings}
        />

        <FloatingActionButton
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
        <EditExpenseModal
  open={editModalOpen}
  expense={editingExpense}
  onClose={closeEditor}
  onSave={updateExpense}
/>
<DeleteExpenseModal
  open={deleteModalOpen}
  expense={expenseToDelete}
  onClose={closeDeleteModal}
  onConfirm={confirmDelete}
/>
        <NotificationToast
          show={toastVisible}
          message={toastMessage}
        />
      </main>
    </>
  );
}