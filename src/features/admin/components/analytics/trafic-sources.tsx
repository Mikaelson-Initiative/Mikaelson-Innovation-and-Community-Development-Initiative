"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const TraficSources = () => {
    const data = [
      { name: "Direct", value: 35, color: "#20c9c0" },
      { name: "Social Media", value: 20, color: "#a855f7" },
      { name: "Organic Search", value: 25, color: "#3b82f6" },
      { name: "Referral", value: 10, color: "#22c55e" },
      { name: "Email", value: 10, color: "#f59e0b" },
    ];

  return (
    <div className="space-y-4 p-4 bg-white dark:bg-card rounded-xl border">
      <ChartContainer
        config={{
          Direct: { label: "Direct", color: "#20c9c0" },
          SocialMedia: { label: "Social Media", color: "#a855f7" },
          OrganicSearch: {
            label: "Organic Search",
            color: "#3b82f6",
          },
          Referral: { label: "Referral", color: "#22c55e" },
          Email: { label: "Email", color: "#f59e0b" },
        }}
        className="w-full h-[300px]"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            innerRadius={60}
            strokeWidth={3}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={`var(--color-${
                  Object.keys({
                    Direct: null,
                    SocialMedia: null,
                    OrganicSearch: null,
                    Referral: null,
                    Email: null,
                  })[index]
                })`}
              />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
