"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, FileBarChart } from "lucide-react";
import React, { useState } from "react";

const ReportsDropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl border border-[#5CE1E6]/25 bg-transparent text-sm font-medium text-white dark:text-[#111] hover:border-[#5CE1E6]/60 transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <FileBarChart size={14} className="text-[#5CE1E6]" />
          <span>Annual Reports</span>
        </div>
        <ChevronDown
          size={14}
          className={cn(
            "text-[#5CE1E6] transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full w-full mt-2 rounded-xl border border-[#5CE1E6]/20 bg-[#0a0a0a] dark:bg-white shadow-lg overflow-hidden transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <a
          href="https://drive.google.com/drive/folders/1qSFgMPFig9RvlKLAcjaCsPh58GUiotqU"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-4 py-3 text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black hover:bg-[#5CE1E6]/8 transition-colors duration-150"
        >
          <span>2025 Annual Report</span>
          <span className="text-[10px] font-semibold text-[#5CE1E6] tracking-widest uppercase">View</span>
        </a>
      </div>
    </div>
  );
};

export default ReportsDropdown;