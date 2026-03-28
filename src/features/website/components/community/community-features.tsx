import React from "react";
import { LineChart, Users, Trophy } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <LineChart className="w-8 h-8 text-white" />,
    title: "Progress Tracking",
    description:
      "Monitor your daily habits and see real-time progress with detailed analytics and insights.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Community Support",
    description:
      "Connect with accountability partners and join group challenges to stay motivated.",
  },
  {
    icon: <Trophy className="w-8 h-8 text-white" />,
    title: "Achievements",
    description:
      "Earn badges, climb leaderboards, and celebrate milestones with recognition.",
  },
];

const FeaturesOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-card">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12 space-y-10 max-w-3xl mx-auto">
          <div className="text-sm w-fit mx-auto font-semibold border px-5 py-3 bg-blue-500 uppercase tracking-wide mb-8 shadow-lg text-white rounded-full">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 dark:text-brand-text-dark-heading">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-center w-full text-gray-600 dark:text-brand-text-dark text-lg max-w-md mx-auto">
            Powerful tools and supportive community to accelerate your personal
            growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-10 bg-gray-50 hover:-translate-y-2 rounded-2xl shadow hover:shadow-lg transition-transform duration-200 ease-linear"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto bg-gradient-to-br from-blue-600 to-teal-400">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 dark:text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base dark:text-brand-text-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
