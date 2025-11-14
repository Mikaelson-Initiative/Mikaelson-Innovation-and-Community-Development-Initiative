import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SocialFeed = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader>
        <div className="h-40 bg-[#f7fcfe] rounded-xl" />
      </CardHeader>

      <CardContent className="space-y-2">
        <CardTitle className="text-xl">Social Feed</CardTitle>
        <p className="text-gray-600">
          Tweet updates and watch videos simultaneously. Engage with your
          community while staying productive.
        </p>
      </CardContent>
    </Card>
  );
};
