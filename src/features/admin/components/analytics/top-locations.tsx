import React from "react";
import { Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TopLocations = () => {
  const data = [
    { country: "United States", visitors: 120 },
    { country: "Canada", visitors: 95 },
    { country: "United Kingdom", visitors: 88 },
    { country: "Germany", visitors: 76 },
    { country: "France", visitors: 72 },
    { country: "Spain", visitors: 68 },
    { country: "Netherlands", visitors: 65 },
    { country: "Nigeria", visitors: 60 },
    { country: "Kenya", visitors: 57 },
    { country: "India", visitors: 54 },
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
