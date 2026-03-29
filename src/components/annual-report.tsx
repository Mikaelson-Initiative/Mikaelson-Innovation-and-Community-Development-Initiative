"use client";
import { cn } from "@/lib/utils";
import {  ChevronDown, FileBarChart } from "lucide-react";
import React, { useState } from "react";

const ReportsDropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl border border-[#5CE1E6]/25 bg-transparent text-sm font-medium text-black  hover:border-[#5CE1E6]/60 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <FileBarChart size={14} className="text-black dark:text-white" />
          <span className="dark:text-white">Annual Reports</span>
        </div>
        <ChevronDown
          size={14}
          className={cn(
            "text-black dark:text-white transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          open &&
            "rotate-180 ease-linear translate-y-0.5 transition-transform duration-300"
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
          className="flex items-center justify-between px-4 py-3 text-sm  text-black/70  dark:hover:text-black hover:bg-[#5CE1E6]/8 transition-colors duration-150"
        >
          2025
        </a>
      </div>
    </div>
  );
};

export default ReportsDropdown;
