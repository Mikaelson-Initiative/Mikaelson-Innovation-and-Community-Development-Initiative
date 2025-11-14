import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HabitDashboard = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <div className="h-40 bg-[#f7fcfe] rounded-xl" />
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle className="text-xl">Habit Dashboard</CardTitle>
        <p className="text-gray-600">
          Create new habits and monitor progress in real-time. Track your
          productivity journey with intuitive visualizations.
        </p>
      </CardContent>
    </Card>
  );
};
