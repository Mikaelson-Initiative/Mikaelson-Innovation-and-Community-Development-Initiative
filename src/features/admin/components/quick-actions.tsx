"use client";

import React from "react";
import Link from "next/link";
import { Download, List, BarChart, Settings } from "lucide-react";
import type { User } from "./table/columns";

type Props = {
  users: User[];
};

export const QuickActions: React.FC<Props> = ({ users }) => {
  const exportAllUsersCSV = (data: User[]) => {
    const headers = ["id", "name", "email", "joinedDate", "interest"];

    const escape = (val: unknown) => {
      const s = String(val ?? "");
      const escaped = s.replace(/"/g, '""');
      return /[",\n]/.test(s) ? `"${escaped}"` : escaped;
    };

    const rows = [headers.join(",")];

    for (const u of data) {
      rows.push([
        escape(u.id),
        escape(u.name),
        escape(u.email),
        escape(u.joinedDate),
        escape(u.interest),
      ].join(","));
    }

    const csv = rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `admin-dashboard-users-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="max-w-6xl mx-auto bg-white mt-10 p-5 rounded-md dark:bg-black/60 dark:text-white">
      <h2 className="text-xl font-bold mb-4 text-center">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Export Data */}
        <button
          onClick={() => exportAllUsersCSV(users)}
          className="flex w-full items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary border-2 dark:bg-black text-black rounded-md hover:bg-brand-primary transition dark:text-white"
        >
          <Download size={16} />
          <span>Export Data</span>
        </button>

        {/* View Waitlist */}
        <Link
          href="/admin/waitlist"
          className="flex w-full border-2 items-center dark:bg-black justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white"
        >
          <List size={16} />
          <span>View Waitlist</span>
        </Link>

        {/* Analytics */}
        <Link href={"/admin/analytics"} className="flex w-full border-2 dark:bg-black items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white">
          <BarChart size={16} />
          <span>Analytics</span>
        </Link>

        {/* Settings */}
        <Link href={"/admin/settings"} className="flex w-full border-2 dark:bg-black items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary text-black rounded-md hover:bg-brand-primary transition dark:text-white">
          <Settings size={16} />
          <span>Settings</span>
        </Link>
      </div>
    </section>
  );
};
