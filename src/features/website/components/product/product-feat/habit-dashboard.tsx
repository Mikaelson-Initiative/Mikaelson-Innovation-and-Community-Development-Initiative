import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HabitDashboard = () => {
  return (
    <Card className="max-w-md w-full !py-10 feature-card">
      <CardHeader>
        <div className="h-44 bg-[#f7fcfe] rounded-xl grid grid-cols-2 gap-3 p-5">
          <div className="rounded-lg bg-[#5ce1e6]/50 animate-scale-1" />
          <div className="rounded-lg bg-[#5ce1e6]/50 animate-scale-2" />
          <div className="rounded-lg bg-[#5ce1e6]/50 animate-scale-3" />
          <div className="rounded-lg bg-[#5ce1e6]/50 animate-scale-4" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-center">
        <CardTitle className="text-xl lg:text-2xl">Habit Dashboard</CardTitle>
        <p className="text-gray-600 dark:text-brand-text-dark">
          Create new habits and monitor progress in real-time. Track your
          productivity journey with intuitive visualizations.
        </p>
      </CardContent>
    </Card>
  );
};
