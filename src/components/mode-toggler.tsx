"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="
          relative flex items-center justify-center
          w-9 h-9 rounded-lg
          border border-black/10 dark:border-white/10
          bg-transparent
          text-[#444] dark:text-white/70
          hover:text-[#111] dark:hover:text-white
          hover:border-[#5CE1E6]/50 dark:hover:border-[#5CE1E6]/50
          hover:bg-[#5CE1E6]/8
          transition-all duration-200
          outline-none focus-visible:ring-2 focus-visible:ring-[#5CE1E6]
        ">
          <Sun className="h-[1.1rem] w-[1.1rem] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90 absolute" />
          <Moon className="h-[1.1rem] w-[1.1rem] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0 absolute" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-[120px] rounded-xl border border-black/8 dark:border-white/8 bg-white dark:bg-[#111] shadow-lg p-1"
      >
        {[
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "System", value: "system" },
        ].map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="
              rounded-lg px-3 py-2 text-sm font-medium cursor-pointer
              text-[#444] dark:text-white/60
              hover:text-[#111] dark:hover:text-white
              hover:bg-[#5CE1E6]/8 dark:hover:bg-white/5
              focus:bg-[#5CE1E6]/8 dark:focus:bg-white/5
              transition-colors duration-150
            "
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}