"use client";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ReportsDropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setOpen((v) => !v)}
      className="relative flex items-center gap-2 rounded-sm border border-gray-300 bg-white dark:bg-black dark:border-gray-300 cursor-pointer p-4 text-lg font-medium hover:bg-gray-50"
    >
      <span>📊 Annual Reports</span>
      <ChevronUp
        className={cn(
          open &&
            "rotate-180 ease-linear translate-y-0.5  transition-transform duration-300"
        )}
      />
      <div
        className={`absolute left-0 top-full w-full rounded-lg border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 translate-y-0 mt-2"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <a
          href="https://drive.google.com/drive/folders/1qSFgMPFig9RvlKLAcjaCsPh58GUiotqU"
          target="_blank"
          rel="noreferrer"
          className="rounded flex items-center justify-center px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 text-center"
        >
          2025
        </a>
      </div>
    </div>
  );
};

export default ReportsDropdown;
