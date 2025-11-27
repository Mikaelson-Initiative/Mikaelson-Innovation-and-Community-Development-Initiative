"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// lucide icons
import {
  Calendar,
  ChartBarIncreasing,
  History,
  ListChecks,
  Share2,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

// shadcn sidebar components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from "@/components/ui/sidebar";
import Image from "next/image";

const navLinks = [
  {
    section: "Main",
    links: [
      { label: "Dashboard", icon: TrendingUp, href: "/dashboard" },
      { label: "Goals", icon: Target, href: "/dashboard/goals" },
      { label: "Habit", icon: ListChecks, href: "/dashboard/habit" },
      { label: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
    ],
  },
  {
    section: "Social",
    links: [
      { label: "Community", icon: Users, href: "/community" },
      { label: "Leaderboard", icon: Trophy, href: "/dashboard/trophy" },
      { label: "Challenges", icon: Share2, href: "/dashboard/challenges" },
    ],
  },
  {
    section: "Insights",
    links: [
      {
        label: "Analytics",
        icon: ChartBarIncreasing,
        href: "/dashboard/analytics",
      },
      { label: "History", icon: History, href: "/dashboard/history" },
    ],
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Image
          src="/assets/images/mikaelsonlogo.png"
          alt="mikaelinitiativelogo"
          width={50}
          height={50}
          className="rounded-md"
        />
      </SidebarHeader>

      <div className="px-4 py-2">
        <SidebarSeparator className="opacity-10 text-[#5D6B68]" />
      </div>

      <SidebarContent className="scrollbar-none pb-10">
        {navLinks.map((group) => (
          <SidebarGroup key={group.section}>
            <SidebarGroupLabel className="text-xs font-semibold uppercase px-3">
              {group.section}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {group.links.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "py-5",
                        pathname === link.href ? "bg-brand-primary text-white" : "text-muted-foreground"
                      )}
                    >
                      <Link href={link.href}>
                        <link.icon className="h-5 w-5" />
                        <span className="text-[15px] font-medium tracking-tight">
                          {link.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
