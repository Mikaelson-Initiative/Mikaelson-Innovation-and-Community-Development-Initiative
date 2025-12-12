"use client";

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const WaitlistGrowth = () => {
  const data = [
    { day: "Mon", signups: 0 },
    { day: "Tue", signups: 0 },
    { day: "Wed", signups: 0},
    { day: "Thu", signups: 0},
    { day: "Fri", signups: 0},
    { day: "Sat", signups:0 },
    { day: "Sun", signups: 0},
  ];

  // Define a color palette for each day
  const dayColors: Record<string, string> = {
    Mon: "#6366F1", // Indigo
    Tue: "#10B981", // Emerald
    Wed: "#F59E0B", // Amber
    Thu: "#EF4444", // Red
    Fri: "#3B82F6", // Blue
    Sat: "#8B5CF6", // Violet
    Sun: "#F472B6", // Pink
  };

  return (
    <ChartContainer
      config={{
        signups: {
          label: "Signups",
          color: "hsl(var(--primary))",
        },
      }}
      className="w-full h-full min-h-[300px] rounded-xl border p-4 bg-white dark:bg-card"
    >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />

        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />

        <ChartTooltip content={<ChartTooltipContent />} />

        <Bar dataKey="signups" radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={dayColors[entry.day]} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};
