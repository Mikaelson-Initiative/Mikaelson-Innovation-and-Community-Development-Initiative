"use client";
import React from "react";
import { UserHeader } from "./userprofile/user-header";
import { ProfileSearch } from "./userprofile/profile-search";
import { ProfileTab } from "./userprofile/profile-tab";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../../../../types";

export const UserProfile: React.FC<{
  activeTab: string;
  onChange: (value: string) => void;
}> = ({ activeTab, onChange }) => {
  const { userId } = useAuth();

  async function fetchUser(): Promise<User> {
    const response = await axios.get(`${BACKEND_URL}/api/v1/users/${userId}`);
    console.log(response.data.data);
    return response.data.data;
  }

  const { data, error, isLoading } = useQuery({
    queryKey: [`user:${userId}`],
    queryFn: fetchUser,
  });
  return (
    <div className="hidden lg:flex bg-white border rounded-lg overflow-hidden w-full col-span-2 h-max">
      <div className="space-y-5 p-5">
        <UserHeader user={data!}/>
        <ProfileSearch />
        <ProfileTab activeTab={activeTab} onChange={onChange} />
      </div>
    </div>
  );
};
