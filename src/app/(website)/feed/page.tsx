"use client";
import { CommunityStats } from "@/features/website/components/social-feed/community-stats";
import { FeedsMainContent } from "@/features/website/components/social-feed/feeds-main-content";
import { SuggestedForYou } from "@/features/website/components/social-feed/suggested-for-you";
import { TopContributors } from "@/features/website/components/social-feed/top-contributors";
import { UserProfile } from "@/features/website/components/social-feed/user-profile";
import React, { useState } from "react";
import { User } from "../../../../types";
import axios from "axios";
import { BACKEND_URL } from "../../../../constants";
import { useQuery } from "@tanstack/react-query";

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState<string>("forYou");

  async function fetchTopContributors(): Promise<User[]> {
    const response = await axios.get(
      `${BACKEND_URL}/api/v1/users/top-contributors`
    );
    console.log("top contributors:", response.data.data);
    return response.data.data;
  }
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: [`top_contibutors`],
    queryFn: fetchTopContributors,
  });

  async function fetchChallenges(): Promise<any[]> {
    const response = await axios.get(`${BACKEND_URL}/api/v1/challenges`);
    console.log("challenge:", response.data.data);
    return response.data.data;
  }
  const {
    data: challenges,
    error: challengesPostsError,
    isLoading: ChallengesPostsloading,
  } = useQuery({
    queryKey: [`challenge`],
    queryFn: fetchChallenges,
  });

  return (
    <div className="grid lg:grid-cols-8 max-w-7xl mx-auto gap-4 p-4 py-6">
      <UserProfile activeTab={activeTab} onChange={setActiveTab} />
      <FeedsMainContent activeTab={activeTab} onChange={setActiveTab} />
      <div className="col-span-2 space-y-2 hidden lg:flex flex-col">
        <CommunityStats />
        <TopContributors users={users!} />
        <SuggestedForYou challenges={challenges!} />
      </div>
    </div>
  );
};

export default SocialFeed;
