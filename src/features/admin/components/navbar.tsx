"use client";

import Link from "next/link";
import { LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggler";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AdminNavbar = () => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  // Get admin email from localStorage

  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("admin_email");
      setAdminEmail(email);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);
    
    // Clear localStorage
    localStorage.removeItem("admin_authenticated");
    localStorage.removeItem("admin_email");
    
    // Redirect to login
    router.replace("/admin");

  };

  return (
    <header className="w-full bg-white dark:bg-brand-dark-bg-nav shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/mikaelsonlogo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-10 w-10 rounded-sm"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold dark:text-white">Admin</span>
          {adminEmail && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {adminEmail}
            </span>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Logout Button */}
        <Button
          className="flex items-center gap-2 !py-[22px] !px-3 bg-brand-green-100 text-white hover:bg-brand-green-100/90 transition-colors"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span className="hidden md:inline">Logging out...</span>
            </>
          ) : (
            <>
              <LogOut size={16} />
              <span className="hidden md:inline">Logout</span>
            </>
          )}
        </Button>

        {/* Back to Website */}
        <Link
          href="/"
          className="text-sm text-white bg-brand-green-100 flex items-center gap-1 rounded-md py-3 px-3 hover:bg-brand-green-100/90 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="hidden md:inline">Back to Site</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};