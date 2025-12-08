"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const AnalyticsHeader = () => {
  const [range, setRange] = useState("7");

  const ranges = [
    { label: "Last 7 Days", value: "7" },
    { label: "Last 30 Days", value: "30" },
    { label: "Last 90 Days", value: "90" },
    { label: "Last Year", value: "365" },
  ];

  return (
    <div className="w-full p-8">
      {/* Title */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Insights into your platform performance
        </p>
      </div>

      {/* Range Switcher */}
      <div className="flex gap-3 mb-8">
        {ranges.map((r) => (
          <button
            key={r.value}
            onClick={() => setRange(r.value)}
            className={cn(
              "px-4 py-2 rounded-lg border text-sm font-medium transition",
              range === r.value
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            )}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Warning Alert */}
      <div className="border border-yellow-300 bg-yellow-100/80 rounded-lg p-5 flex items-start gap-3">
        <div>
          <Info className="text-yellow-600 h-5 w-5 mt-1" />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-yellow-800 text-lg">
            Google Analytics Not Configured
          </h3>

          <p className="text-yellow-700 text-sm">
            Go to{" "}
            <Link href="/admin/settings" className="text-brand-green-100 underline">
              Settings
            </Link>{" "}
            to add your Google Analytics tracking ID.
          </p>
        </div>
      </div>
    </div>
  );
};
