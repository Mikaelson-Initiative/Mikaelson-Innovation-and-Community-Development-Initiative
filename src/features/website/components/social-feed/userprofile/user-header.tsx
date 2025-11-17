import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const stats = [
  { title: "Day Streak", value: 7 },
  { title: "Challenges", value: 3 },
  { title: "Points", value: 1024 },
];

export const UserHeader = () => {
  return (
    <div className="space-y-5">
      <div className="border-b space-y-4 pb-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center font-bold text-white rounded-full bg-blue-600">
            U
          </div>

          <div>
            <h1 className="font-semibold text-lg">User</h1>
            <p className="text-xs text-gray-500">10 posts • 200 followers</p>
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
