"use client";
import {
  Book,
  Globe,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type TopMember = {
  name: string;
  avatar: string;
  points: number;
};

type Chapter = {
  id: number | string;
  name: string;
  location: string;
  flag: string;
  memberCount: number;
  description: string;
  totalPoints: number;
  topMembers: TopMember[];
};

type RegionGroup = {
  key: string;
  name: string;
  chapterCount: number;
  members: number;
  chapters: Chapter[];
};

const formatNumber = (num: number) => num.toLocaleString();

  // Chapter data
  const communityChapters: Chapter[] = [
    {
      id: 1,
      name: "EKSU Chapter",
      location: "Ekiti State University, Nigeria",
      flag: "🇳🇬",
      memberCount: 247,
      description:
        "Driving academic excellence and personal development at EKSU",
      totalPoints: 45680,
      topMembers: [
        {
          name: "Adebayo Oluwaseun",
          avatar: "/api/placeholder/40/40",
          points: 1250,
        },
        {
          name: "Funmi Adeyemi",
          avatar: "/api/placeholder/40/40",
          points: 1180,
        },
        {
          name: "Tunde Akinola",
          avatar: "/api/placeholder/40/40",
          points: 1120,
        },
      ],
    },
    // ... include the rest of your chapters here
  ];
const CommunityChapters: React.FC = () => {
  const [selectedRegionKey, setSelectedRegionKey] = useState<string | null>(
    null
  );



  // Compute total members
  const totalCommunityMembers = useMemo(() => {
    return communityChapters.reduce(
      (total, chapter) => total + chapter.memberCount,
      0
    );
  }, []);

  // Example region list grouping chapters by country/region
  const regionList: RegionGroup[] = [
    {
      key: "nigeria",
      name: "Nigeria",
      chapterCount: communityChapters.filter((c) => c.flag === "🇳🇬").length,
      members: communityChapters
        .filter((c) => c.flag === "🇳🇬")
        .reduce((sum, c) => sum + c.memberCount, 0),
      chapters: communityChapters.filter((c) => c.flag === "🇳🇬"),
    },
    {
      key: "kenya",
      name: "Kenya",
      chapterCount: communityChapters.filter((c) => c.flag === "🇰🇪").length,
      members: communityChapters
        .filter((c) => c.flag === "🇰🇪")
        .reduce((sum, c) => sum + c.memberCount, 0),
      chapters: communityChapters.filter((c) => c.flag === "🇰🇪"),
    },
    {
      key: "international",
      name: "International",
      chapterCount: communityChapters.filter(
        (c) => c.flag !== "🇳🇬" && c.flag !== "🇰🇪"
      ).length,
      members: communityChapters
        .filter((c) => c.flag !== "🇳🇬" && c.flag !== "🇰🇪")
        .reduce((sum, c) => sum + c.memberCount, 0),
      chapters: communityChapters.filter(
        (c) => c.flag !== "🇳🇬" && c.flag !== "🇰🇪"
      ),
    },
  ];

  const selectedRegionGroup = regionList.find(
    (group) => group.key === selectedRegionKey
  );

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="text-sm w-fit mx-auto font-semibold border px-5 py-3 bg-blue-500 uppercase tracking-wide mb-8 shadow-lg text-white rounded-full">
            Our Global Network
          </div>
          <h2 className="text-3xl font-bold">Community Chapters</h2>
          <p className="text-gray-700 text-base">
            Connecting minds and hearts across institutions and continents
          </p>
        </div>

        {/* Total Members Stats */}
        <div className="relative btn-gradient rounded-4xl shadow lg:p-20 p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Users className="w-10 h-10 text-white" />
            <div>
              <span className="block text-2xl lg:text-5xl font-extrabold">
                {formatNumber(totalCommunityMembers)}
              </span>
              <span className="text-gray-600">
                Total Community Members Worldwide
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="w-10 h-10 text-green-600" />
            <span className="text-gray-700 font-medium">
              United in Growth, Connected by Purpose
            </span>
          </div>
        </div>

        {/* Chapter Categories */}
        <div>
          <h3 className="text-3xl  text-center font-extrabold mb-4">
            Explore Our Chapters by Region
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {regionList.map((group) => (
              <button
                key={group.key}
                type="button"
                onClick={() => setSelectedRegionKey(group.key)}
                aria-pressed={selectedRegionKey === group.key}
                className={`p-4 cursor-pointer rounded-lg shadow transition ${
                  selectedRegionKey === group.key
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-blue-50"
                }`}
              >
                <h4 className="font-semibold">{group.name}</h4>
                <p className="text-sm">
                  {group.chapterCount}{" "}
                  {group.chapterCount === 1 ? "Chapter" : "Chapters"}
                </p>
                <span className="text-sm font-medium mt-2 block">
                  {formatNumber(group.members)} Members
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Region Results */}
        {selectedRegionGroup?.chapters?.length ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {selectedRegionGroup.name} Communities
            </h3>
            <ul className="space-y-2">
              {selectedRegionGroup.chapters
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/chapter/${chapter.id}`}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
                    >
                      <span>{chapter.flag}</span>
                      <span className="font-medium">{chapter.name}</span>
                      <span className="text-gray-500">
                        • {chapter.location}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ) : null}

        {/* Community Growth Stats */}
        <div className="space-y-4 bg-white rounded-md p-10">
          <div className="text-center space-y-1">
            <h3 className="text-3xl font-extrabold">Community Growth</h3>
            <p className="text-gray-700">
              Our chapters are growing stronger every day
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100  p-15">
              <TrendingUp className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <span className="block text-lg font-bold">
                +{Math.floor(totalCommunityMembers * 0.08)}
              </span>
              <span className="text-gray-600 block">
                New Members This Month
              </span>
            </div>
            <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100  p-15">
              <Globe className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <span className="block text-lg font-bold">
                {communityChapters.length}
              </span>
              <span className="text-gray-600 block">Active Chapters</span>
            </div>
            <div className="bg-white rounded-lg bg-gradient-to-br from-slate-50 to-slate-100  p-15">
              <Book className="w-8 h-8 mx-auto text-red-600 mb-2" />
              <span className="block text-lg font-bold">
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
      </div>
    </section>
  );
};

export default CommunityChapters;
