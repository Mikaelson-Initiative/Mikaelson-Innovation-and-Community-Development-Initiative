"use client";

import { AdminNavbar } from "@/features/admin/components/navbar";
import { QuickActions } from "@/features/admin/components/quick-actions";
import { AdminDashboardStats } from "@/features/admin/components/stats";
import { AdminDataTable } from "@/features/admin/components/table/admin-data-table";
import type { User } from "@/features/admin/components/table/columns";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// ✅ Helper for percentage change
const getPercentageChange = (current: number, previous: number) => {
  if (previous === 0) return current === 0 ? 0 : 100;
  return ((current - previous) / previous) * 100;
};

const AdminDashboardHome = () => {
  // ✅ Fetch users
  const fetchWaitList = async (): Promise<User[]> => {
    const res = await axios.get(`/api/waitlist`);
    const items = res.data?.data ?? [];

    return items.map((item: any) => ({
      id: String(item.id ?? item._id ?? ""),
      name: String(item.name ?? ""),
      email: String(item.email ?? ""),
      joinedDate: String(item.createdAt ?? item.joined ?? ""),
      interest: String(item.interest ?? ""),
    }));
  };

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["admin-waitlist"],
    queryFn: fetchWaitList,
  });

  // ✅ Date references
  const now = new Date();

  const lastMonth = new Date();
  lastMonth.setMonth(now.getMonth() - 1);

  const weekAgo = new Date();
  weekAgo.setDate(now.getDate() - 7);

  // ✅ Split users by time
  const thisMonthUsers = users.filter((u) => {
    const d = new Date(u.joinedDate);
    return (
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth()
    );
  });

  const lastMonthUsers = users.filter((u) => {
    const d = new Date(u.joinedDate);
    return (
      d.getFullYear() === lastMonth.getFullYear() &&
      d.getMonth() === lastMonth.getMonth()
    );
  });

  // ✅ Weekly engagement
  const thisWeekUsers = users.filter((u) => {
    const d = new Date(u.joinedDate);
    return !isNaN(d.getTime()) && d >= weekAgo && d <= now;
  });

  // ✅ Daily activity
  const newToday = users.filter((u) => {
    const d = new Date(u.joinedDate);
    return (
      !isNaN(d.getTime()) &&
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate()
    );
  });

  // ============================
  // ✅ CURRENT VALUES
  // ============================

  const totalUsers = users.length;
  const waitlistCount = thisMonthUsers.length;

  const engagementRate =
    totalUsers > 0
      ? (thisWeekUsers.length / totalUsers) * 100
      : 0;

  const messagesCount = newToday.length;

  // ============================
  // ✅ PREVIOUS VALUES (LAST MONTH)
  // ============================

  const totalLastMonth = lastMonthUsers.length;
  const waitlistLastMonth = lastMonthUsers.length;

  const lastMonthEngagementRate =
    totalLastMonth > 0
      ? (lastMonthUsers.length / totalLastMonth) * 100
      : 0;

  // ============================
  // ✅ PERCENTAGE CHANGES
  // ============================

  const totalUsersChange = getPercentageChange(
    totalUsers,
    totalLastMonth
  );

  const waitlistChange = getPercentageChange(
    waitlistCount,
    waitlistLastMonth
  );

  const engagementChange = getPercentageChange(
    engagementRate,
    lastMonthEngagementRate
  );

  // ============================
  // ✅ UI
  // ============================

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load data
      </div>
    );
  }

  return (
    <div className="pb-20 bg-brand-bg-gray dark:bg-black/80 dark:text-white min-h-screen">
      <AdminNavbar />

      <AdminDashboardStats
        totalUsers={totalUsers}
        totalUsersChange={totalUsersChange}
        waitlistCount={waitlistCount}
        waitlistChange={waitlistChange}
        engagementRate={engagementRate}
        engagementChange={engagementChange}
        messagesCount={messagesCount}
      />

      <AdminDataTable data={users} />

      <QuickActions users={users} />
    </div>
  );
};

export default AdminDashboardHome;
