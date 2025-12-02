"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggler";

// Types
interface NavLink {
  label: string;
  href: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface MobileNavProps {
  brandName: string;
  navLinks: NavLink[];
  actionButton?: ActionButton;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  brandName,
  navLinks,
  actionButton,
}) => {
  return (
    <div className="lg:hidden flex items-center gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 dark:text-white" />
        </SheetTrigger>
        <SheetContent side="right" className="w-64 sm:w-80">
          <SheetHeader>
            <SheetTitle className="sr-only">{brandName}</SheetTitle>
          </SheetHeader>
          <div className="mt-6 px-5 flex flex-col gap-6 text-gray-700">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.label}>
                <Link
                  href={link.href}
                  className="text-base transition-colors hover:text-gray-900 dark:text-brand-text-dark-heading"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}

            {actionButton && (
              <SheetClose asChild>
                <Link
                  href={actionButton.href}
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
                >
                  {actionButton.label}
                </Link>
              </SheetClose>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </div>
  );
};
