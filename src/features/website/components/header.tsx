"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggler";

interface NavLink {
  label: string;
  href: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface HeaderProps {
  brandName?: string;
  navLinks?: NavLink[];
  mobileNavLinks?: NavLink[];
  actionButton?: ActionButton;
}

const Header: React.FC<HeaderProps> = ({
  brandName = "Mikaelson Initiative",
  navLinks = [
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "The Team", href: "/team" },
    { label: "Our Product", href: "/product" },
    { label: "About Us", href: "/about-us" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Our Blog", href: "/blog" },
  ],
  mobileNavLinks = [
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "The Team", href: "/team" },
    { label: "Community", href: "/community" },
    { label: "Our Product", href: "/product" },
    { label: "About Us", href: "/about-us" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Our Blog", href: "/blog" },
  ],
  actionButton = { label: "Sponsor a program", href: "/sponsor" },
}) => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111111]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">

        {/* logo*/}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold tracking-tight group"
        >
          <Image
            src="/assets/images/mikaelsonlogo.png"
            alt="Mikaelson Initiative"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-sm md:text-base dark:text-white text-[#111] group-hover:text-[#5CE1E6] transition-colors duration-200">
            {brandName}
          </span>
        </Link>

        {/* desktop nav*/}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "dark:text-white/70 text-[#444] hover:text-[#111] dark:hover:text-white",
                  "hover:bg-[#5CE1E6]/8 dark:hover:bg-white/5",
                  isActive && "text-[#5CE1E6] dark:text-[#5CE1E6] bg-[#5CE1E6]/8 dark:bg-[#5CE1E6]/10"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#5CE1E6] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* action button */}
        <div className="hidden lg:flex items-center gap-3">
          <ModeToggle />
          {actionButton && (
            <Link
              href={actionButton.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#5CE1E6] text-black hover:bg-[#4bcdd2] transition-all duration-200"
            >
              {actionButton.label}
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Mobile */}
        <MobileNav
          brandName={brandName}
          navLinks={mobileNavLinks}
          actionButton={actionButton}
        />
      </div>
    </header>
  );
};

export default Header;