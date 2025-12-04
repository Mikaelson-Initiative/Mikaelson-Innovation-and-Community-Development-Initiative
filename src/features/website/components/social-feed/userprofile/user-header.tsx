import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React, { useEffect } from "react";
import { User } from "../../../../../../types";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACKEND_URL } from "../../../../../../constants";

const stats = [
  { title: "Day Streak", value: 7 },
  { title: "Challenges", value: 3 },
  { title: "Points", value: 1024 },
];

export const UserHeader = ({ user }: { user: User }) => {
  const { signOut, isSignedIn, userId } = useAuth();
  const { user: users, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/login");
    }
  }, [isSignedIn]);

  const handleSignOut = async () => {
    await signOut();

    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  };
  

  return (
    <div className="space-y-5">
      <div className="border-b space-y-4 pb-4">
        <div className="flex items-center gap-4">
          <div
            className="h-10 w-10 flex items-center justify-center font-bold text-white rounded-full bg-blue-600"
            onClick={handleSignOut}
          >
            {user?.username?.[0]}
          </div>

          <div>
            <h1 className="font-semibold text-lg">{user?.username}</h1>
            <p className="text-xs text-gray-500">
              {user?.Post?.length} posts • {user?.Follower?.length} followers
            </p>
          </div>
        </div>

        <Button className="bg-teal-400 hover:bg-teal-500 w-full text-md py-8 rounded-xl flex items-center justify-center gap-2">
          <PlusIcon className="w-5 h-5" />
          What&apos;s Happening
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-lg p-2 border"
          >
            <p className="font-bold">{item.value}</p>
            <p className="text-sm text-gray-500 capitalize">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
