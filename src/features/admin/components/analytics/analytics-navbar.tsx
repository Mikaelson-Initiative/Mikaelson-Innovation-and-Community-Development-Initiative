"use client";
import { ModeToggle } from "@/components/mode-toggler";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AnalyticsNavbar = () => {
  const router = useRouter();
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
        <span className="text-xl font-semibold dark:text-white">Analytics</span>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/admin/dashboard"
          className="text-sm text-white bg-brand-green-100 flex items-center gap-1 rounded-md py-3 px-3"
        >
          <Home size={16} />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
