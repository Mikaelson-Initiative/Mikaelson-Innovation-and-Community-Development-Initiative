"use client";
import { CommunityStats } from "@/features/website/components/social-feed/community-stats";
import { FeedsMainContent } from "@/features/website/components/social-feed/feeds-main-content";
import { SuggestedForYou } from "@/features/website/components/social-feed/suggested-for-you";
import { TopContributors } from "@/features/website/components/social-feed/top-contributors";
import { UserProfile } from "@/features/website/components/social-feed/user-profile";
import React, { useState } from "react";

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState<string>("forYou");

  return (
    <div className="grid lg:grid-cols-8 max-w-7xl mx-auto gap-4 p-4 py-6">
      <UserProfile activeTab={activeTab} onChange={setActiveTab} />
      <FeedsMainContent activeTab={activeTab} onChange={setActiveTab} />
      <div className="col-span-2 space-y-2 hidden lg:flex flex-col">
        <CommunityStats />
        <TopContributors />
        <SuggestedForYou />
      </div>
    </div>
  );
};

export default SocialFeed;
