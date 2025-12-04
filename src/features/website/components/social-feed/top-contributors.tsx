import { ScrollArea } from "@/components/ui/scroll-area";
import { Crown } from "lucide-react";
import React from "react";
import { User } from "../../../../../types";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";
import { useQuery } from "@tanstack/react-query";

const data = [
  { name: "Amara Okafor", posts: 2, likes: 10 },
  { name: "John Doe", posts: 5, likes: 22 },
  { name: "Jane Smith", posts: 3, likes: 18 },
  { name: "Tunde Adebayo", posts: 7, likes: 30 },
  { name: "Mary Johnson", posts: 1, likes: 4 },
  { name: "Chidi Nwosu", posts: 4, likes: 15 },
  { name: "Aisha Bello", posts: 6, likes: 28 },
  { name: "Daniel Obi", posts: 2, likes: 9 },
  { name: "Sophia Umeh", posts: 3, likes: 12 },
  { name: "Michael Eze", posts: 8, likes: 35 },
];

export const TopContributors = ({ users }: { users: User[] }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <div className="flex gap-2 items-center my-2 p-3 border-b">
        <Crown className="text-yellow-500" />
        <h1 className="font-bold text-lg">Top Contributors</h1>
      </div>

      <ScrollArea  className="h-72 w-full rounded-md border-none p-3">
        <div className="space-y-3">
          {users?.map((user, index) => {
            const [firstName, lastName] = user?.username.split(" ");
            return (
              <div
                key={index}
                className="flex justify-between border-y items-center p-2  hover:bg-gray-100 transition"
              >
                {/* Left side: Rank and Name */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-7 h-7 flex-center rounded-full bg-brand-bg-color text-gray-500 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="size-10 bg-brand-blue rounded-full flex-center text-white">
                      {firstName?.charAt(0)}
                      {lastName?.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {firstName}{" "}
                      <span className="text-gray-600">{lastName}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.Post?.length} posts • {user?.Like?.length} likes
                    </p>
                  </div>
                </div>

                {/* Right side: Medal for top 3 */}
                <div className="text-lg">🏅</div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
