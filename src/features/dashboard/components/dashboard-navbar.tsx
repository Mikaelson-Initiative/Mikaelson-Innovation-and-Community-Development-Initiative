"use client";

import React from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardNavbar = () => {
  const userInitials = "JD";

  return (
    <header className="w-full h-16 border-b bg-white flex items-center justify-between px-4">
      {/* Search */}
      <div className="flex  flex-1">
        <div className="flex justify-start w-full max-w-md border rounded-lg px-3 py-2 gap-2 bg-gray-50">
          <input
            type="text"
            placeholder="Search habits, goals, or activities..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <Button className="bg-brand-primary ">
            <Search className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
            3
          </span>
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full font-semibold">
          {userInitials}
        </div>
      </div>
    </header>
  );
};
