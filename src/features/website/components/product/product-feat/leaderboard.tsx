import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Leaderboard = () => {
  return (
    <Card className="max-w-md w-full !py-10 feature-card">
      <CardHeader>
        <div className="h-44 bg-[#f7fcfe] rounded-xl p-5">
          <div className="flex items-end justify-center gap-3 h-full">
            <div className="w-10 h-[60%] bg-[#5ce1e6]/50 rounded-t-lg animate-bar-1"></div>
            <div className="w-10 h-full bg-[#5ce1e6]/50 rounded-t-lg animate-bar-2"></div>
            <div className="w-10 h-[75%] bg-[#5ce1e6]/50 rounded-t-lg animate-bar-3"></div>
            <div className="w-10 h-[50%] bg-[#5ce1e6]/50 rounded-t-lg animate-bar-4"></div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-center">
        <CardTitle className="text-xl lg:text-2xl">Leaderboard</CardTitle>
        <p className="text-gray-600 dark:text-brand-text-dark">
          See the top productive people in your community. Stay motivated
          through friendly competition and recognition.
        </p>
      </CardContent>
    </Card>
  );
};
