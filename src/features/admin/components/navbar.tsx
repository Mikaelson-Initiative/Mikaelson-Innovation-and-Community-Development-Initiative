"use client"
import Link from "next/link";
import { LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggler";

export const AdminNavbar = () => {
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
        <span className="text-xl font-semibold dark:text-white">Admin</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Logout Button */}
        <Button
          className="flex items-center gap-2 !py-[22px] !px-3 bg-brand-green-100 text-white"
          onClick={() => router.push("/admin")}
        >
          <LogOut size={16} />
          <span className="hidden md:inline">Logout</span>
        </Button>

        {/* Back to Website */}
        <Link
          href="/"
          className="text-sm text-white bg-brand-green-100 flex items-center gap-1 rounded-md py-3 px-3"
        >
          <ArrowLeft size={16} />
          <span className="hidden md:inline">Back to Site</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
