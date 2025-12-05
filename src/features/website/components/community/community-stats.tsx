import { Book, Globe, TrendingUp } from 'lucide-react';
import React, { useMemo } from 'react'
type TopMember = {
  name: string;
  avatar: string;
  points: number;
};


type Chapter = {
  id: number | string;
  name: string;
  location: string;
  region: string;
  memberCount: number;
  description: string;
  totalPoints: number;
  topMembers: TopMember[];
};


const communityChapters: Chapter[] = [
  {
    id: 1,
    name: "EKSU Chapter",
    location: "Ekiti State University, Nigeria",
    memberCount: 247,
    region: "ssAfrica",
    description: "Driving academic excellence and personal development at EKSU",
    totalPoints: 45680,
    topMembers: [
      {
        name: "Adebayo Oluwaseun",
        avatar: "/api/placeholder/40/40",
        points: 1250,
      },
      { name: "Funmi Adeyemi", avatar: "/api/placeholder/40/40", points: 1180 },
      { name: "Tunde Akinola", avatar: "/api/placeholder/40/40", points: 1120 },
    ],
  },
];

export const CommunityStats = () => {
    
  const totalCommunityMembers = useMemo(() => {
    return communityChapters.reduce(
      (total, chapter) => total + chapter.memberCount,
      0
    );
  }, []);

  return (
    <>
      {/* Community Growth Stats */}
      <div className="space-y-4 bg-white rounded-md p-10">
        <div className="text-center space-y-1">
          <h3 className="text-3xl font-extrabold dark:text-black">Community Growth</h3>
          <p className="text-gray-700">
            Our chapters are growing stronger every day
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-15">
            <TrendingUp className="w-8 h-8 mx-auto text-blue-600 mb-2" />
            <span className="block text-lg font-bold dark:text-black">
              +{Math.floor(totalCommunityMembers)}
            </span>
            <span className="text-gray-600 block dark:text-brand-text-dark">New Members This Month</span>
          </div>
          <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-15">
            <Globe className="w-8 h-8 mx-auto text-green-600 mb-2" />
            <span className="block text-lg font-bold dark:text-black">
              {communityChapters.length}
            </span>
            <span className="text-gray-600 block">Active Chapters</span>
          </div>
          <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-15">
            <Book className="w-8 h-8 mx-auto text-red-600 mb-2" />
            <span className="block text-lg font-bold dark:text-black">
              {Math.round(
                communityChapters.reduce((sum, c) => sum + c.totalPoints, 0) /
                  1000
              )}
              K+
            </span>
            <span className="text-gray-600 block">Collective Points</span>
          </div>
        </div>
      </div>
    </>
  );
}
