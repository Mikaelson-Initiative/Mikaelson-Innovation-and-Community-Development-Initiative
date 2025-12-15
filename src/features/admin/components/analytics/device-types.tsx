import React from "react";
import { Smartphone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const DeviceTypes = () => {
  const data = [
    { label: "Mobile", percent: 0 },
    { label: "Desktop", percent: 0 },
    { label: "Tablet", percent: 0 },
  ];

  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-2">
        <Smartphone className="w-5 h-5 text-brand-green-100" />
        <CardTitle>Device Types</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.percent}%</span>
            </div>
            <Progress value={item.percent} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
