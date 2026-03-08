"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Crown, Medal, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

// Sample data
const data = [
  {
    name: "Elon Musk",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    country: "USA",
    shortCode: "US",
    points: 9500,
    award: "Visionary",
  },
  {
    name: "Chukwu Sabastine",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    country: "Nigeria",
    shortCode: "NG",
    points: 7867,
    award: "Transformational Leader",
  },
  {
    name: "Ada Lovelace",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    country: "UK",
    shortCode: "GB",
    points: 6821,
    award: "Innovator",
  },
];

// Function to return icon based on points
const getAwardIcon = (points: number) => {
  if (points >= 9000) return <Crown />;
  if (points >= 7000) return <Star />;
  return <Medal />;
};

const getPositionColor = (index: number) => {
  if (index === 0) return "bg-[#ffd700] text-white"; // 1st
  if (index === 1) return "bg-[#eccaa7] text-white"; // 2nd
  return "bg-orange-500 text-white"; // 3rd
};

export const ChallengeLeaders = () => {
  return (
    <div className="container px-4 py-10 max-w-5xl mx-auto p-10! bg-white dark:bg-card dark:border border-white/10 mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-brand-text-dark-heading">Challenge Leaders</h2>
      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((leader, index) => (
            <div
              key={index}
              className={cn(
                "border relative shadow-md rounded-2xl p-6 flex flex-col items-center text-center dark:bg-brand-dark-bg-nav dark:border-white/10",
                index === 0 && "bg-[#fffdf5] dark:bg-[#fffdf5]/10 border-[rgb(255,215,0)]",
                index === 1 && "bg-[#fff9f2] dark:bg-[#fff9f2]/10 border-[#eccaa7]",
                index === 2 && "bg-[#fff9f2] dark:bg-[#fff9f2]/10 border-[#a8a7a6]"
              )}
            >
              <div
                className={`${getPositionColor(
                  index
                )} absolute -top-3 z-10 left-1/2 size-6 flex-center -translate-x-1/2  py-1 rounded-full text-sm font-bold`}
              >
                {index + 1}
              </div>
              <Avatar className="w-16 h-16 mb-4">
                <AvatarImage src={leader.imageUrl} alt={leader.name} />
                <AvatarFallback>{leader.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold dark:text-brand-text-dark-heading">{leader.name}</h3>
              <p className="text-gray-500 text-sm">
                {leader.country}
                <ReactCountryFlag
                  countryCode={leader.shortCode}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  title={leader.country}
                  className="rotate-2 ml-2"
                />
              </p>
              <p className="text-gray-700 dark:text-brand-text-dark mt-2 mb-5">
                {leader.points.toLocaleString()} points
              </p>
              <span className="flex mt-auto items-center gap-2 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                {getAwardIcon(leader.points)}
                {leader.award}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
