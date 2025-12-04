import React from "react";

export const SocialProof = ({ waitlistCount = 1247 }) => {
  const stats = [
    { number: `${waitlistCount}+`, label: "On Waitlist" },
    { number: "50+", label: "Countries" },
    { number: "95%", label: "Satisfaction" },
  ];

  return (
    <section className="w-full py-20 flex rounded-2xl items-center justify-center bg-[#f7fefe] max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 w-full">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-[48px] font-bold">
              {item.number}
            </div>
            <div className="text-gray-600 uppercase">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
