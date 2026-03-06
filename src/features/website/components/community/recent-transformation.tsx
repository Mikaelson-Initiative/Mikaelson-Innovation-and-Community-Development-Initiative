import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flame, Heart, Star } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const data = [
  {
    name: "Chukwu Sabastine",
    countryCode: "NG", // Nigeria
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    goal: "Build a consistent workout routine and stay committed to a healthier lifestyle",
    streakNumber: 878,
    points: 87,
    tags: ["fitness", "exercise", "drama"],
    time: "2 hours ago",
  },
  {
    name: "Ada Lovelace",
    countryCode: "GB", // United Kingdom
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    goal: "Finish reading at least 10 insightful books to broaden creativity and improve thinking",
    streakNumber: 560,
    points: 120,
    tags: ["reading", "focus", "productivity"],
    time: "5 hours ago",
  },
  {
    name: "Michael Jordan",
    countryCode: "US", // United States
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    goal: "Master advanced basketball drills to enhance performance and overall athletic skill",
    streakNumber: 1200,
    points: 300,
    tags: ["sports", "performance"],
    time: "1 day ago",
  },
  {
    name: "Sophie Turner",
    countryCode: "CA", // Canada
    imageUrl: "https://randomuser.me/api/portraits/women/60.jpg",
    goal: "Develop stronger acting abilities through daily practice and creative expression",
    streakNumber: 240,
    points: 65,
    tags: ["acting", "creativity"],
    time: "3 days ago",
  },
];

export const RecentTransformation = () => {
  return (
    <div className="px-4 mt-10 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 dark:text-brand-text-dark-heading">Recent Transformations</h2>

        <div className="grid grid-cols-1 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="border dark:border-white/10 flex gap-8 rounded-xl p-6 bg-white dark:bg-card shadow-sm hover:shadow-md transition"
            >
              <div className="md:flex items-center gap-4 hidden">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={item.imageUrl} />
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-sm md:text-lg font-semibold dark:text-brand-text-dark-heading">{item.name}</h3>
                    <ReactCountryFlag
                      countryCode={item.countryCode}
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                      title={item.countryCode}
                      className="rotate-2 ml-2 hidden! md:flex!"
                    />
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm">{item.time}</p>
                </div>
                <p className="text-xs text-gray-600 md:text-sm">{item.goal}</p>
                <div className="mt-1 sm:mt-4 flex md:flex-row flex-col gap-2 md:gap-5">
                  <div className="text-sm shrink-0 items-center text-gray-600 mt-1 flex">
                    <Flame className="size-3" />
                    {item.streakNumber} days streak
                  </div>
                  <div className="text-sm items-center text-gray-600 mt-1 flex">
                    <Star className="size-3" />
                    {item.points} points
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#f8f9fa] dark:bg-brand-dark-bg-nav text-xs rounded-full dark:text-brand-text-dark-heading"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="p-2  flex gap-2 items-center cursor-pointer  rounded-full bg-orange-100 text-orange-600">
                  <Flame className="w-5 h-5" />
                  77
                </button>

                <button className="p-2 flex gap-2 items-center cursor-pointer  rounded-full bg-red-100 text-red-600">
                  <Heart className="w-5 h-5" />
                  34
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
