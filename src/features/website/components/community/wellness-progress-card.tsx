"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Clock,
  Flame,
  FlameIcon,
  LucideIcon,
  StarIcon,
  TrophyIcon,
  Users,
} from "lucide-react";

type Stat = {
  label: string;
  value: string | number;
  tooltip?: string;
  icon: LucideIcon;
};

type WellnessProgressProps = {
  title?: string;
  subtitle?: string;
  dateRange?: string;
  daysLeft?: number;
  completionPercent?: number; // 0–100
  stats?: Stat[];
  className?: string;
};

export function WellnessProgressCard({
  title = "30-Day Wellness Revolution",
  subtitle = "Mind, Body & Spirit Transformation",
  dateRange = "Aug 1, 2025 — Aug 31, 2025",
  daysLeft = 28,
  completionPercent = 9,
  stats = [
    { label: "Participants", value: "4,287", icon: Users },
    { label: "Total Rewards", value: "50K+", icon: TrophyIcon },
    { label: "Success Rate", value: "73%", icon: FlameIcon },
    { label: "Points Earned", value: "125,000", icon: StarIcon },
  ],
  className,
}: WellnessProgressProps) {
  const pct = Math.max(0, Math.min(100, completionPercent));

  return (
    <Card className={cn("overflow-hidden max-w-5xl mx-auto p-10! dark:bg-card dark:border-white/10", className)}>
      <CardHeader className="space-y-2">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <div className="size-20 rounded-2xl flex-center bg-[#fb675c] text-white">
            <Flame className="size-10" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl mb-5 md:text-2xl dark:text-brand-text-dark-heading text-[#2c3e50] text-center lg:text-[28.8px] font-bold tracking-wide">
              {title}
            </h1>
            <p className="text-sm md:text-base text-center text-muted-foreground">
              {subtitle}
            </p>
            <div className="flex items-center mt-10 gap-4">
              <p className="text-sm text-muted-foreground font-semibold">
                {dateRange}
              </p>
              <Badge className="uppercase tracking-wide bg-[#d4edda] dark:bg-[#d4edda]/20 text-green-900 dark:text-green-300 font-semibold">
                <Clock />
                {daysLeft} days left
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CircularProgress percent={pct} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="space-y-6">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border gap-3 flex items-center bg-[#f8f9fa] dark:bg-brand-dark-bg-nav dark:border-white/10 p-4 shadow-sm transition-colors"
                title={s.tooltip}
              >
                <div className="size-10 btn-gradient flex-center rounded-sm text-white">
                  <s.icon />
                </div>
                <div className="">
                  <p className="mt-1 text-lg md:text-2xl font-bold dark:text-brand-text-dark-heading">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-semibold">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </CardContent>
    </Card>
  );
}

interface CircularProgressProps {
  percent: number;
  size?: number; // diameter in px
  strokeWidth?: number; // thickness of border
}

export function CircularProgress({
  percent,
  size = 48,
  strokeWidth = 4,
}: CircularProgressProps) {
  const innerSize = size - strokeWidth * 2;

  return (
    <div
      className="rounded-full flex justify-center items-center"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(#14b8a6 ${percent * 3.6}deg, #e5e7eb 0deg)`,
      }}
    >
      <div
        className="bg-white rounded-full dark:text-black flex justify-center items-center text-sm font-semibold"
        style={{ width: innerSize, height: innerSize }}
      >
        {percent}%
      </div>
    </div>
  );
}
