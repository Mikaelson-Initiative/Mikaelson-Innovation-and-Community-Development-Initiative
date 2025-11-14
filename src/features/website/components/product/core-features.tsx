import React from "react";
import { SocialFeed } from "./product-feat/social-feed";
import { UnifiedExperience } from "./product-feat/unified-experience";
import { HabitDashboard } from "./product-feat/habit-dashboard";
import { Leaderboard } from "./product-feat/leaderboard";

export const CoreFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 w-full place-items-center">
        <SocialFeed />
        <UnifiedExperience />
        <HabitDashboard />
        <Leaderboard />
      </div>
    </div>
  );
};
