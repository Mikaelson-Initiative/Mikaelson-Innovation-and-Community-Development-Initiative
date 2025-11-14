import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UnifiedExperience = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <div className="h-40 bg-[#f7fcfe] rounded-xl" />
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle className="text-xl">Unified Experience</CardTitle>
        <p className="text-gray-600">
          Combine Community, Challenge, and Dashboard into a single, intuitive
          post-login environment and social feed.
        </p>
      </CardContent>
    </Card>
  );
};
