"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2 mt-1 w-full relative"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="
          flex-1 px-4 py-2.5 rounded-xl text-sm
          bg-white/8 
          border border-white/10 dark:border-black/10
          text-white 
          placeholder:text-white/30 
          focus:outline-none focus:border-[#5CE1E6]/60
          transition-colors duration-200
        "
      />
      {/* The Arrow right icon should be in the input box on mobile devices */}
      <button
        type="submit"
        className="flex items-center gap-2 px-2 md:px-5 py-2 md:py-2.5 rounded-xl md:bg-[#5CE1E6] text-black text-sm font-semibold md:hover:bg-[#4bcdd2] transition-colors duration-200 shrink-0 absolute right-0 top-0 h-full md:relative"
      >
        <span className="hidden md:block">Subscribe</span>
        <ArrowRight size={14} className="text-[#5CE1E6] md:text-black" />
      </button>
    </form>
  );
}