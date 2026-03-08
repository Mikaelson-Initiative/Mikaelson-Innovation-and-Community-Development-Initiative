import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReactCountryFlag from "react-country-flag";

interface Progress {
  totalDays: number;
  currentDay: number;
  percentage: number;
}

interface LeaderboardUser {
  id: string;
  name: string;
  country: string;
  shortLabel: string;
  imageUrl: string;
  points: number;
  streak: number;
  habit: string;
  progress: Progress;
}

export const LeaderboardCard = ({ user }: { user: LeaderboardUser }) => {
  return (
    <div className="w-full rounded-xl bg-brand-bg-gray dark:bg-card dark:border-white/10 shadow p-5 border flex lg:flex-row flex-col gap-4">
      <div className="flex flex-1 items-center gap-4">
        {/* Avatar */}
        <Avatar className="h-10 w-10 md:h-12 md:w-12">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback className="bg-blue-600 text-white font-bold">
            {user.shortLabel}
          </AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="w-full">
          <div className="flex justify-between md:flex-col">
            <p className="font-semibold text-sm md:text-lg dark:text-brand-text-dark-heading">{user.name}</p>
            <div className="flex items-center gap-2">
              <p className="text-xs md:text-sm text-gray-500 dark:text-brand-text-dark">{user.country}</p>
              <ReactCountryFlag
                countryCode={user.shortLabel}
                svg
                // style={{ width: "1.5em", height: "1.5em" }}
                title={user.country}
                className="rotate-2 ml-2 h-2 w-2 sm:w-5! sm:h-5!"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">145 days Active</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-evenly gap-3">
        <div className="w-full grid grid-cols-3">
          <div>
            <p className="font-bold dark:text-brand-text-dark-heading">{user.points}</p>
            <p className="text-xs text-gray-500 dark:text-brand-text-dark">Points</p>
          </div>
          <div>
            <p className="font-bold dark:text-brand-text-dark-heading">{user.streak}</p>
            <p className="text-xs text-gray-500 dark:text-brand-text-dark">Streak</p>
          </div>
          <div>
            <p className="font-bold dark:text-brand-text-dark-heading">{user.habit}</p>
            <p className="text-xs text-gray-500 dark:text-brand-text-dark">Habits</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full md:flex hidden bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${user.progress.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
