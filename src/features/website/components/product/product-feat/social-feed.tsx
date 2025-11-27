import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SocialFeed = () => {
  return (
    <Card className="max-w-md w-full !py-10 feature-card">
      <CardHeader>
        <div className="h-44 bg-[#f7fcfe] rounded-xl grid grid-cols-1 gap-3 py-4 px-8">
          <div className=" rounded-lg bg-gradient-to-r from-cyan-300/30 to-blue-500/30 animate-slide-1" />
          <div className="rounded-lg bg-gradient-to-r from-cyan-300/30 to-blue-500/30 animate-slide-2" />
          <div className="rounded-lg bg-gradient-to-r from-cyan-300/30 to-blue-500/30 animate-slide-3" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-center">
        <CardTitle className="text-xl lg:text-2xl">Social Feed</CardTitle>
        <p className="text-gray-600">
          Tweet updates and watch videos simultaneously. Engage with your
          community while staying productive.
        </p>
      </CardContent>
    </Card>
  );
};
