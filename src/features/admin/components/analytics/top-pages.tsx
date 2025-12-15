import React from "react";
import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TopPages = () => {
  const data = [
    { label: "/home", views: 0 },
    { label: "/waitlist", views: 0 },
    { label: "/community", views: 0 },
    { label: "/admin", views: 0 },
  ];

  return (
    <Card className="w-full rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-2">
        <FileText className="w-5 h-5 text-brand-green-100" />
        <CardTitle>Top Pages</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {data.map((page) => (
            <div
              key={page.label}
              className="flex justify-between items-center border-b last:border-none pb-2"
            >
              <span className="text-sm text-muted-foreground">
                {page.label}
              </span>
              <span className="text-sm font-medium">{page.views} views</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
