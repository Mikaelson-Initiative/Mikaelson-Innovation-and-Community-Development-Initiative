import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UnifiedExperience = () => {
  return (
    <Card className="max-w-md w-full !py-10 feature-card">
      <CardHeader>
        <div className="h-44 bg-[#f7fcfe] rounded-xl relative flex items-center justify-center">
          <div className="text-5xl unified-float">🧩</div>
          <div className="absolute inset-0 flex items-center justify-around px-8">
            <span className="w-3 h-3 bg-[#5ce1e6] rounded-full pulse-dot-1" />
            <span className="w-3 h-3 bg-[#5ce1e6] rounded-full pulse-dot-2"></span>
            <span className="w-3 h-3 bg-[#5ce1e6] rounded-full pulse-dot-3"></span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-center">
        <CardTitle className="text-xl lg:text-2xl">
          Unified Experience
        </CardTitle>
        <p className="text-gray-600">
          Combine Community, Challenge, and Dashboard into a single, intuitive
          post-login environment and social feed.
        </p>
      </CardContent>
    </Card>
  );
};
