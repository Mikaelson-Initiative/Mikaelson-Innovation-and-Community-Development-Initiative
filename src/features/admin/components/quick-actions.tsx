"use client";

import React from "react";
import Link from "next/link";
import { Download, List, BarChart, Settings } from "lucide-react";

export const QuickActions = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white mt-10 p-5 rounded-md">
      <h2 className="text-xl font-bold mb-4 text-center">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Export Data */}
        <button className="flex w-full items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary border-2 text-black rounded-md hover:bg-brand-primary transition">
          <Download size={16} />
          <span>Export Data</span>
        </button>

        {/* View Waitlist */}
        <Link
          href="/waitlist"
          className="flex w-full border-2 items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary borde text-black rounded-md hover:bg-brand-primary transition"
        >
          <List size={16} />
          <span>View Waitlist</span>
        </Link>

        {/* Analytics */}
        <button className="flex w-full border-2 items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary borde text-black rounded-md hover:bg-brand-primary transition">
          <BarChart size={16} />
          <span>Analytics</span>
        </button>

        {/* Settings */}
        <button className="flex w-full border-2 items-center justify-start gap-2 px-4 py-3 bg-brand-primary-300 border-brand-primary borde text-black rounded-md hover:bg-brand-primary transition">
          <Settings size={16} />
          <span>Settings</span>
        </button>
      </div>
    </section>
  );
};
