"use client";

import Link from "next/link";
import { ArrowLeft, Download, LayoutDashboard } from "lucide-react";

interface DashboardHeaderProps {
  onExport: () => void;
}

export default function DashboardHeader({
  onExport,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-3 text-white shadow-lg">
            <LayoutDashboard size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              BucksWise Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Welcome back! Here's your financial overview.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Home
          </Link>

          <button
            onClick={onExport}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>
    </header>
  );
}