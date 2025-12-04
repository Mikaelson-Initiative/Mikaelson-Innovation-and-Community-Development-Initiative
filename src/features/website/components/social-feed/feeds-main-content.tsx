"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { FollowingFeed, ForYouFeed } from "../feed/GetAllPost";
import { GettAllPosts } from "../challenges/GetPostsTags";
import { Post } from "../../../../../types";
import { BACKEND_URL } from "../../../../../constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

interface ChallengePostsResult {
  posts: Post[];
  percentageOfPosts: number[];
  numOfDaysPosted: number;
}

// Make tabs controlled via props so aside buttons can control them
export const FeedsMainContent: React.FC<{
  activeTab: string;
  onChange: (value: string) => void;
}> = ({ activeTab, onChange }) => {
  const { userId } = useAuth();
  async function fetchPosts(): Promise<Post[]> {
    const response = await axios.get(`${BACKEND_URL}/api/v1/posts`);
    console.log(response.data.data);
    return response.data.data;
  }
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: [`posts`],
    queryFn: fetchPosts,
  });

  async function fetchFollowingsPosts(): Promise<Post[]> {
    const response = await axios.get(
      `${BACKEND_URL}/api/v1/posts/followings/${userId}`
    );
    console.log(response.data.data);
    return response.data.data;
  }
  const {
    data: followingsposts,
    error: isError,
    isLoading: loading,
  } = useQuery({
    queryKey: [`followings_posts`],
    queryFn: fetchFollowingsPosts,
  });

  async function fetchChallengesPosts(): Promise<ChallengePostsResult> {
    const response = await axios.get(`${BACKEND_URL}/api/v1/challenges/posts`);
    console.log("challenge posts:", response.data.data);
    return response.data.data;
  }
  const {
    data: challengesposts,
    error: challengesPostsError,
    isLoading: ChallengesPostsloading,
  } = useQuery({
    queryKey: [`challenge_posts`],
    queryFn: fetchChallengesPosts,
  });

  return (
    <section className="col-span-4">
      <Tabs value={activeTab} onValueChange={onChange}>
        <TabsList className="w-full">
          <TabsTrigger value="forYou" className="cursor-pointer">
            For You
          </TabsTrigger>
          <TabsTrigger value="following" className="cursor-pointer">
            Following
          </TabsTrigger>
          <TabsTrigger value="challenges" className="cursor-pointer">
            Challenges
          </TabsTrigger>
        </TabsList>
        <TabsContent value="forYou">
          <ForYouFeed posts={posts!} />
        </TabsContent>
        <TabsContent value="following">
          <FollowingFeed posts={followingsposts!} />
        </TabsContent>
        <TabsContent value="challenges">
          <GettAllPosts results={challengesposts!} />
        </TabsContent>
      </Tabs>
    </section>
  );
};
