"use client"
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";
import { GettAllPosts } from "./GetPostsTags";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../../../../types";

interface ChallengePostsResult {
  posts: Post[];
  percentageOfPosts: number[];
  numOfDaysPosted: number;
}
//
const MainFeed = () => {
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
    <section className="md:col-span-4 p-4">
      <GettAllPosts results={challengesposts!} />
    </section>
  );
};

export default MainFeed;
