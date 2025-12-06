import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AdminDashboardStats = () => {
  const stats = [
    {
      label: "Total Users",
      value: "0",
      change: "+0% this month",
      changeColor: "text-green-600",
    },
    {
      label: "Waitlist",
      value: "0",
      change: "+0% this month",
      changeColor: "text-green-600",
    },
    {
      label: "Engagement",
      value: "0%",
      change: "+0% this month",
      changeColor: "text-green-600",
    },
    {
      label: "Messages",
      value: "0",
      change: "No change",
      changeColor: "text-gray-500",
    },
  ];


  return (
    <div className="space-y-6 py-10 px-5 md:px-0">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold dark:text-brand-black">Dashboard</h1>
        <p className="text-gray-600">Overview of your platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-brand-primary-200 border-brand-primary border hover:-translate-y-1 duration-300 transition-transform">
            <CardHeader>
              <CardTitle className="text-sm text-gray-500 dark:text-black">
                {stat.label}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="text-3xl font-bold dark:text-black">{stat.value}</div>
              <div className={`${stat.changeColor} text-sm mt-1`}>
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
