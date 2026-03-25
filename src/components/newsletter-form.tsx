"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2 mt-1"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="
          flex-1 px-4 py-2.5 rounded-xl text-sm
          bg-white/8 
          border border-black/10
          text-black/80 
          placeholder:text-black/30 
          focus:outline-none focus:border-[#5CE1E6]/60
          transition-colors duration-200
        "
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5CE1E6] text-black text-sm font-semibold hover:bg-[#4bcdd2] transition-colors duration-200 shrink-0"
      >
        Subscribe
        <ArrowRight size={14} />
      </button>
    </form>
  );
}