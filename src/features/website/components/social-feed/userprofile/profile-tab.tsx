"use client";
import { HomeIcon, Trophy, Users } from "lucide-react";
import { useState } from "react";

export const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState("forYou");

  const tabs = [
    {
      id: "forYou",
      label: "For You",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      id: "followings",
      label: "Followings",
      icon: <Users className="w-6 h-6" />,
    },

    {
      id: "challenges",
      label: "Challenges",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-start  flex-col">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center  cursor-pointer gap-2 py-3 px-4 text-sm duration-300 ease-in-out font-medium transition ${
              activeTab === tab.id
                ? "bg-brand-blue/10 text-brand-blue rounded"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
