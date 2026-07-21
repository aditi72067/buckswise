export interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
}

export const categories = [
  "Food",
  "Shopping",
  "Travel",
  "Bills",
  "Entertainment",
  "Health",
  "Education",
  "Other",
] as const;