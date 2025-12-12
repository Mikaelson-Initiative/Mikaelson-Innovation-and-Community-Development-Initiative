"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Timer,
  UserPlus,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AnalyticsStats = () => {
  const data = [
    {
      label: "Total Visitors",
      icon: <Users className="h-5 w-5 text-primary" />,
      value: "0",
      changeRate: "0% last period",
    },
    {
      label: "Page Views",
      icon: <Eye className="h-5 w-5 text-primary" />,
      value: "0",
      changeRate: "0% last period",
    },
    {
      label: "Avg. Session Duration",
      icon: <Timer className="h-5 w-5 text-primary" />,
      value: "0",
      changeRate: "0% last period",
    },
    {
      label: "Waitlist Signups",
      icon: <UserPlus className="h-5 w-5 text-primary" />,
      value: "0",
      changeRate: "0% last period",
    },
  ];

  const getChangeIcon = (rate: string) => {
    return rate.trim().startsWith("-") ? (
      <TrendingDown className="h-4 w-4 text-red-500" />
    ) : (
      <TrendingUp className="h-4 w-4 text-green-500" />
    );
  };

  const getChangeColor = (rate: string) => {
    return rate.trim().startsWith("-") ? "text-red-500" : "text-green-500";
  };

  return (
    <Card className="w-full rounded-2xl">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl border bg-card flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>

              <div className="text-2xl font-semibold">{item.value}</div>

              <div className="flex items-center gap-1 text-sm">
                {getChangeIcon(item.changeRate)}
                <span className={getChangeColor(item.changeRate)}>
                  {item.changeRate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
