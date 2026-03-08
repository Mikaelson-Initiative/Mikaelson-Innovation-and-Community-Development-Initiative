"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bookmark,
  Ellipsis,
  Flag,
  Heart,
  Link,
  MessageCircle,
  Redo2,
  Repeat,
} from "lucide-react";
import { Post } from "../../../../../types";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";
import { useQuery } from "@tanstack/react-query";

/*const posts = [
  {
    id: 1,
    userId: 1,
    userName: "Amara Okafor",
    userAvatar: "AO",
    challengeId: 1,
    challengeTitle: "30-Day Morning Routine",
    content:
      "Day 15 of my morning routine challenge! 🌅 Started with meditation, journaling, and a quick workout. Feeling more focused and energized than ever!",
    progress: {
      currentDay: 15,
      totalDays: 30,
      percentage: 50,
    },
    images: [],
    likes: 24,
    comments: 8,
    reposts: 3,
    shares: 5,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-16T08:30:00"),
    tags: ["morningroutine", "meditation", "productivity"],
  },
  {
    id: 2,
    userId: 2,
    userName: "Kwame Asante",
    userAvatar: "KA",
    challengeId: 2,
    challengeTitle: "Read 5 Books in 2 Months",
    content:
      "Just finished 'Atomic Habits' by James Clear! 📚 Book 3/5 completed. The insights on habit formation are incredible. Who else is reading this?",
    progress: {
      currentDay: 35,
      totalDays: 60,
      percentage: 58,
      booksRead: 3,
      totalBooks: 5,
    },
    images: [],
    likes: 31,
    comments: 12,
    reposts: 7,
    shares: 9,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-16T19:45:00"),
    tags: ["reading", "books", "atomichabits"],
  },
  {
    id: 3,
    userId: 3,
    userName: "Zara Mwangi",
    userAvatar: "ZM",
    challengeId: 3,
    challengeTitle: "Daily Exercise Challenge",
    content:
      "Week 2 of daily exercise complete! 💪 Mixed it up with yoga, running, and strength training. My energy levels have improved so much!",
    progress: {
      currentDay: 14,
      totalDays: 21,
      percentage: 67,
    },
    images: [],
    likes: 18,
    comments: 5,
    reposts: 2,
    shares: 4,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-16T17:20:00"),
    tags: ["exercise", "fitness", "yoga", "running"],
  },
  {
    id: 4,
    userId: 4,
    userName: "Emmanuel Adebayo",
    userAvatar: "EA",
    challengeId: 4,
    challengeTitle: "Learn a New Skill",
    content:
      "Day 20 of learning Python! 🐍 Built my first web scraper today. The progress feels slow some days, but consistency is key. #NeverStopLearning",
    progress: {
      currentDay: 20,
      totalDays: 45,
      percentage: 44,
    },
    images: [],
    likes: 27,
    comments: 9,
    reposts: 6,
    shares: 8,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-16T21:10:00"),
    tags: ["python", "coding", "webdevelopment", "learning"],
  },
  {
    id: 5,
    userId: 1,
    userName: "Amara Okafor",
    userAvatar: "AO",
    challengeId: 1,
    challengeTitle: "30-Day Morning Routine",
    content:
      "Morning routine update: Added gratitude journaling to my practice. Three things I'm grateful for today: ☀️ Beautiful sunrise, 👥 Supportive community, 📈 Personal growth",
    progress: {
      currentDay: 16,
      totalDays: 30,
      percentage: 53,
    },
    images: [],
    likes: 19,
    comments: 6,
    reposts: 4,
    shares: 7,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T07:15:00"),
    tags: ["gratitude", "journaling", "morningroutine"],
  },
  {
    id: 6,
    userId: 5,
    userName: "Chioma Nwachukwu",
    userAvatar: "CN",
    challengeId: 3,
    challengeTitle: "Daily Exercise Challenge",
    content:
      "Struggled with motivation today but showed up anyway! Did a 20-minute yoga session. Sometimes just showing up is the biggest victory. 🧘‍♀️ #consistency",
    progress: {
      currentDay: 8,
      totalDays: 21,
      percentage: 38,
    },
    images: [],
    likes: 42,
    comments: 15,
    reposts: 8,
    shares: 12,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T18:30:00"),
    tags: ["motivation", "yoga", "consistency", "selfcare"],
  },
  {
    id: 7,
    userId: 6,
    userName: "Taiwo Adeleke",
    userAvatar: "TA",
    challengeId: 2,
    challengeTitle: "Read 5 Books in 2 Months",
    content:
      "Book recommendation! 📖 Just started 'The 7 Habits of Highly Effective People' and already loving the insights on personal leadership. What are you reading?",
    progress: {
      currentDay: 25,
      totalDays: 60,
      percentage: 42,
      booksRead: 2,
      totalBooks: 5,
    },
    images: [],
    likes: 28,
    comments: 11,
    reposts: 5,
    shares: 9,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T14:20:00"),
    tags: ["reading", "books", "leadership", "growth"],
  },
  {
    id: 8,
    userId: 7,
    userName: "Fatima Kone",
    userAvatar: "FK",
    challengeId: 4,
    challengeTitle: "Learn a New Skill",
    content:
      "Major breakthrough! 🎉 Finally understood recursion in programming. Built my first recursive function today. The 'aha!' moment was incredible!",
    progress: {
      currentDay: 32,
      totalDays: 45,
      percentage: 71,
    },
    images: [],
    likes: 35,
    comments: 18,
    reposts: 12,
    shares: 6,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T20:45:00"),
    tags: ["programming", "learning", "breakthrough", "coding"],
  },
  {
    id: 9,
    userId: 8,
    userName: "David Osei",
    userAvatar: "DO",
    challengeId: 1,
    challengeTitle: "30-Day Morning Routine",
    content:
      "Week 3 complete! My morning routine now includes: 5 min meditation, 10 min journaling, 15 min reading, and a healthy breakfast. Energy levels through the roof! 🚀",
    progress: {
      currentDay: 21,
      totalDays: 30,
      percentage: 70,
    },
    images: [],
    likes: 56,
    comments: 23,
    reposts: 15,
    shares: 18,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T08:10:00"),
    tags: ["morningroutine", "meditation", "energy", "habits"],
  },
  {
    id: 10,
    userId: 9,
    userName: "Aisha Musa",
    userAvatar: "AM",
    challengeId: 3,
    challengeTitle: "Daily Exercise Challenge",
    content:
      "Rest day reflections: Taking breaks is just as important as showing up. Listened to my body today and did gentle stretching instead of intense workout. Self-care wins! 💪✨",
    progress: {
      currentDay: 12,
      totalDays: 21,
      percentage: 57,
    },
    images: [],
    likes: 31,
    comments: 9,
    reposts: 6,
    shares: 4,
    isLiked: false,
    isReposted: false,
    createdAt: new Date("2024-12-17T16:00:00"),
    tags: ["restday", "selfcare", "listening", "balance"],
  },
];*/

export const ForYouFeed = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {posts?.map((post) => (
        <div
          key={post.id}
          className=" bg-white rounded p-6 border border-[#f3f4f6] shadow-md transition-all"
        >
          <div className="postheader flex flex-row justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-md">
                {post?.user?.profileImage ? (
                  <img
                    src={post.user.profileImage}
                    alt={post.user.username}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  post?.user?.username?.[0]?.toUpperCase()
                )}
              </div>

              {/* Username */}
              <span className="font-semibold text-sm ">
                {post.user?.username}
              </span>
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="rounded-full cursor-pointer p-2 hover:bg-blue-50"
                >
                  <div>
                    <Ellipsis />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Link />
                        <span>Copy link to post</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Bookmark />
                        <span>Bookmark post</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Flag />
                        <span>Report post</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="post-text space-y-2">{post.post}</div>
          <div className="post-tags flex flex-wrap gap-4 my-4">
            {post?.tags?.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200 text-black/40 px-2 py-1 hover:bg-teal-300 hover:text-white cursor-pointer transition-all rounded-full text-sm"
              >
                #{tag}
              </div>
            ))}
          </div>
          <hr />
          <div className="post-reactions flex items-center gap-2 my-2">
            <div
              className="likes hover:text-red-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="likes"
            >
              <Heart />
              <span>{post?.Like?.length}</span>
            </div>
            <div
              className="comments hover:text-blue-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="comments"
            >
              <MessageCircle />
              <span>{post?.Comment?.length}</span>
            </div>
            <div
              className="reposts hover:text-green-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="reposts"
            >
              <Repeat />
              {/*<span>{post.reposts}</span>*/}
            </div>
            <div
              className="shares hover:text-red-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="shares"
            >
              <Redo2 />
              {/*<span>{post.shares}</span>*/}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export const FollowingFeed = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col">
      {posts?.map((post) => (
        <div
          key={post.id}
          className=" bg-white rounded p-6 border border-[#f3f4f6] shadow-md transition-all"
        >
          <div className="postheader flex flex-row justify-between">
            <div className="flex flex-row gap-2 justify-center items-center">
              <span className="text-white flex items-center justify-center p-2 bg-linear-to-br from-teal-500 to-blue-600 rounded-full w-fit">
                {post?.user?.profileImage}
              </span>
              <span className="font-semibold text-sm">
                {post?.user?.username}
              </span>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="rounded-full cursor-pointer p-2 hover:bg-blue-50"
                >
                  <div>
                    <Ellipsis />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Link />
                        <span>Copy link to post</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Bookmark />
                        <span>Bookmark post</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex gap-2 p-2 items-center justify-center">
                        <Flag />
                        <span>Report post</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="post-text space-y-2">{post?.post}</div>
          <div className="post-tags flex flex-wrap gap-4 my-4">
            {post?.tags?.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200 text-black/40 px-2 py-1 hover:bg-teal-300 hover:text-white cursor-pointer transition-all rounded-full text-sm"
              >
                #{tag}
              </div>
            ))}
          </div>
          <hr />
          <div className="post-reactions flex items-center gap-2 my-2">
            <div
              className="likes hover:text-red-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="likes"
            >
              <Heart />
              <span>{post?.Like?.length}</span>
            </div>
            <div
              className="comments hover:text-blue-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="comments"
            >
              <MessageCircle />
              <span>{post?.Comment.length}</span>
            </div>
            <div
              className="reposts hover:text-green-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="reposts"
            >
              <Repeat />
              {/*<span>{post.reposts}</span>*/}
            </div>
            <div
              className="shares hover:text-red-600 hover:bg-gray-200 flex items-center justify-center p-2 rounded-lg cursor-pointer gap-2"
              title="shares"
            >
              <Redo2 />
              {/* <span>{post.shares}</span>*/}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
