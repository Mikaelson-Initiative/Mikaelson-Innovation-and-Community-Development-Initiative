import React from "react";
import { SocialFeed } from "./product-feat/social-feed";
import { UnifiedExperience } from "./product-feat/unified-experience";
import { HabitDashboard } from "./product-feat/habit-dashboard";
import { Leaderboard } from "./product-feat/leaderboard";
import { ProductHeader } from "./product-header";

export const CoreFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <ProductHeader
        title="Core Features"
        subTitle="Everything you need to build productive habits and stay accountable"
      />
      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full place-items-center">
        <UnifiedExperience />
        <HabitDashboard />
        <Leaderboard />
        <SocialFeed />
      </div>
    </div>
  );
};
