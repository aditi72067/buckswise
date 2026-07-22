"use client";

import { useState } from "react";
import { Expense } from "@/types/expense";

export default function useExpenseEditor() {
  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  const [open, setOpen] =
    useState(false);

  const startEditing = (
    expense: Expense
  ) => {
    setEditingExpense(expense);
    setOpen(true);
  };

  const closeEditor = () => {
    setEditingExpense(null);
    setOpen(false);
  };

  return {
    open,
    editingExpense,
    startEditing,
    closeEditor,
  };
}