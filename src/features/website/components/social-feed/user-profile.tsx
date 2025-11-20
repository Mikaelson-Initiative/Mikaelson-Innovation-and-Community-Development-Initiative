import React from "react";
import { UserHeader } from "./userprofile/user-header";
import { ProfileSearch } from "./userprofile/profile-search";
import { ProfileTab } from "./userprofile/profile-tab";

export const UserProfile: React.FC<{ activeTab: string; onChange: (value: string) => void }> = ({ activeTab, onChange }) => {
  return (
    <div className="hidden lg:flex bg-white border rounded-lg overflow-hidden w-full col-span-2 h-max">
      <div className="space-y-5 p-5">
        <UserHeader />
        <ProfileSearch />
        <ProfileTab activeTab={activeTab} onChange={onChange} />
      </div>
    </div>
  );
};
