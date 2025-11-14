import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Leaderboard = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <div className="h-40 bg-[#f7fcfe] rounded-xl" />
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle className="text-xl">Leaderboard</CardTitle>
        <p className="text-gray-600">
          See the top productive people in your community. Stay motivated
          through friendly competition and recognition.
        </p>
      </CardContent>
    </Card>
  );
};
