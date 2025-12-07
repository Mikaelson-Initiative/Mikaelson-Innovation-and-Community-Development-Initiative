import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  totalUsers: number;
  totalUsersChange: number;

  waitlistCount: number;
  waitlistChange: number;

  engagementRate: number;
  engagementChange: number;

  messagesCount: number;
};

export const AdminDashboardStats: React.FC<Props> = ({
  totalUsers,
  waitlistCount,
  engagementRate,
  messagesCount,
  totalUsersChange,
  waitlistChange,
  engagementChange,
}) => {
  const stats = [
    {
      label: "Total Users",
      value: String(totalUsers),
      change: String(`+${totalUsersChange}% this month`),
      changeColor: "text-green-600",
    },
    {
      label: "Waitlist",
      value: String(waitlistCount),
      change: String(`+${waitlistChange}% this month`),
      changeColor: "text-green-600",
    },
    {
      label: "Engagement",
      value: `${Math.round(engagementRate)}%`,
      change: String(`+${engagementChange}% this month`),
      changeColor: "text-green-600",
    },
    {
      label: "Messages",
      value: String(messagesCount),
      change: undefined,
      changeColor: "text-gray-500",
    },
  ];

  return (
    <div className="space-y-6 py-10 px-5 md:px-0">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
        <p className="text-gray-600">Overview of your platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-brand-primary-200 border-brand-primary border hover:-translate-y-1 duration-300 transition-transform dark:bg-black/60 dark:border-brand-primary">
            <CardHeader>
              <CardTitle className="text-sm text-gray-500 dark:text-white">
                {stat.label}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold dark:text-white">{stat.value}</div>
              {stat.change && (
                <div className={`${stat.changeColor} text-sm mt-1`}>
                  {stat.change}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
