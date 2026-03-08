import { ActivityIcon, ChartLine, Trophy, Users } from "lucide-react";
import { CommunityHeader } from "./community-header";

const data = [
  {
    title: "Progress Tracking",
    desc: "Monitor your daily habits and see real-time progress. Track streaks, milestones, and celebrate achievements with the community.",
    icon: <ActivityIcon size={32} />,
  },
  {
    title: "Leaderboards",
    desc: "Compete in a friendly environment with community leaderboards. Earn points, climb ranks, and motivate others through your consistency.",
    icon: <Trophy size={32} />,
  },
  {
    title: "Accountability Partners",
    desc: "Connect with like-minded individuals who share your goals. Support each other and stay motivated on your growth journey.",
    icon: <Users size={32} />,
  },
  {
    title: "Analytics Dashboard",
    desc: "Get detailed insights into your habits and progress patterns. Understand your performance and optimize for better results.",
    icon: <ChartLine size={32} />,
  },
];

export const CommunityFeatures = () => {
  return (
    <div className="lg:py-20 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <CommunityHeader title="Community Features" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {data.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-card dark:border-white/10 hover:-translate-y-2 duration-300 rounded-xl border shadow-lg px-5 py-10 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all"
            >
              <div className="size-16 text-white rounded-full flex-center btn-gradient">{feature.icon}</div>
              <h3 className="font-semibold text-lg md:text-2xl dark:text-brand-text-dark-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base dark:text-brand-text-dark">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
