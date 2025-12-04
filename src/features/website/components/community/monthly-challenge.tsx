import React from "react";
import { CommunityHeader } from "./community-header";
import { WellnessProgressCard } from "./wellness-progress-card";
import { ChallengeLeaders } from "./challenge-leaders";

export const MonthlyChallenge = () => {
  return (
    <div className="bg-brand-bg-gray px-5 py-10 lg:py-20 dark:bg-card">
      <CommunityHeader
        title="Transform Your August"
        subtitle="Push your limits this month with our comprehensive wellness challenge designed to elevate your mind, body, and spirit."
        label="Monthly Challenge"
      />
      <WellnessProgressCard />
      <ChallengeLeaders />
    </div>
  );
};
