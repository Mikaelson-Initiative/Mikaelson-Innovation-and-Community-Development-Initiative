import React from "react";

const stats = [
  { value: "15+", label: "ACTIVE VOLUNTEERS" },
  { value: "5+", label: "COUNTRIES" },
  { value: "10+", label: "PROJECTS" },
];

const StatsCard: React.FC = () => (
  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
    <div className="space-y-10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-extrabold text-teal-500">
            {stat.value}
          </div>
          <div className="mt-2 text-sm font-semibold tracking-wide text-gray-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsCard;
