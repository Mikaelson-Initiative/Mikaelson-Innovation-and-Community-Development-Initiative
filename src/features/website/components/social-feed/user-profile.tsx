import React from "react";
import { UserHeader } from "./userprofile/user-header";
import { ProfileSearch } from "./userprofile/profile-search";
import { ProfileTab } from "./userprofile/profile-tab";

export const UserProfile = () => {
  return (
    <div className="hidden lg:flex bg-white border rounded-lg overflow-hidden w-full col-span-2 h-max">
      <div className="space-y-5 p-5">
        <UserHeader />
        <ProfileSearch />
        <ProfileTab />
      </div>
    </div>
  );
};
