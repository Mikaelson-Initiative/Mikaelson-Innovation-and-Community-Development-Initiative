"use client";

import { CalendarRange, Crown, Flame, MoveUp } from "lucide-react";
import React, { useState } from "react";
import { LeaderboardCard } from "./learderboard-card";
import { CommunityHeader } from "./community-header";

const tabs = [
  { label: "Overall", icon: <Crown /> },
  { label: "Weekly Top 10", icon: <CalendarRange /> },
  { label: "Most consistent", icon: <Flame /> },
  { label: "Rising Stars", icon: <MoveUp /> },
];

export const LeaderBoard = () => {
  const [activeTab, setActiveTab] = useState("Overall");

  return (
    <section className="bg-brand-bg-gray dark:bg-card p-5 lg:p-10">
      <div className="mb-12">
        <CommunityHeader
          title="Community Leaderboard"
          subtitle="See who's leading the transformation journey this week"
          label="Live Rankings"
        />

        <div className="flex flex-wrap justify-center items-center gap-3 mt-6 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;

            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`
          flex items-center gap-2 
          px-4 py-3 sm:px-6 sm:py-4 
          rounded-4xl text-sm md:text-[17px] font-medium transition-all 
          w-full sm:w-auto text-nowrap
          ${
            isActive
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 border hover:bg-gray-100"
          }
        `}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-brand-dark-bg-nav mx-auto max-w-7xl p-3 sm:p-10">
        <div className="flex justify-between items-center py-5 border-b dark:border-b-brand-primary text-black">
          <h1 className="text-base md:text-2xl font-bold dark:text-brand-text-dark-heading">Top Performers</h1>
          <div className="flex items-center gap-2">
            <div className="size-3 bg-brand-primary animate-pulse rounded-full" />
            <h1 className="font-bold text-sm md:text-base text-brand-primary">Live updates</h1>
          </div>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto mt-10">
          {data.map((user) => (
            <LeaderboardCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    id: "1",
    name: "Sofia Müller",
    country: "Germany",
    shortLabel: "DE",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    points: 5230,
    streak: 45,
    habit: "12",
    progress: {
      totalDays: 30,
      currentDay: 18,
      percentage: 60,
    },
  },
  {
    id: "2",
    name: "Liam O'Connor",
    country: "Ireland",
    shortLabel: "IE",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    points: 4780,
    streak: 30,
    habit: "9",
    progress: {
      totalDays: 30,
      currentDay: 10,
      percentage: 33,
    },
  },
  {
    id: "3",
    name: "Aisha Khan",
    country: "Pakistan",
    shortLabel: "PK",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    points: 6010,
    streak: 60,
    habit: "15",
    progress: {
      totalDays: 30,
      currentDay: 25,
      percentage: 83,
    },
  },
  {
    id: "4",
    name: "Carlos Rodriguez",
    country: "Mexico",
    shortLabel: "MX",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    points: 3900,
    streak: 22,
    habit: "7",
    progress: {
      totalDays: 30,
      currentDay: 8,
      percentage: 27,
    },
  },
  {
    id: "5",
    name: "Yuki Tanaka",
    country: "Japan",
    shortLabel: "JP",
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    points: 7140,
    streak: 75,
    habit: "20",
    progress: {
      totalDays: 30,
      currentDay: 22,
      percentage: 73,
    },
  },
];
