import React from "react";
import { Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TopLocations = () => {
  const data = [
    { country: "United States", visitors: 0 },
    { country: "Canada", visitors: 0 },
    { country: "United Kingdom", visitors: 0 },
    { country: "Germany", visitors: 0 },
    { country: "France", visitors: 0 },
    { country: "Spain", visitors: 0 },
    { country: "Netherlands", visitors: 0 },
    { country: "Nigeria", visitors: 0 },
    { country: "Kenya", visitors: 0 },
    { country: "India", visitors: 0 },
  ];

  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-2">
        <Globe className="w-5 h-5 text-brand-green-100" />
        <CardTitle>Top Locations</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {data.map((item) => (
          <div
            key={item.country}
            className="flex justify-between items-center border-b last:border-none pb-2"
          >
            <span className="text-sm text-muted-foreground">
              {item.country}
            </span>
            <span className="text-sm font-medium">{item.visitors}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
