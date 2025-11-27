import Link from "next/link";
import React from "react";

type Benefit = {
  id: number;
  icon: string;
  text: string;
};

const benefits: Benefit[] = [
  { id: 1, icon: "🤝", text: "Collaborate with like-minded innovators" },
  { id: 2, icon: "💡", text: "Turn your ideas into impactful solutions" },
  { id: 3, icon: "🌍", text: "Contribute to Africa’s tech ecosystem" },
];

const LabsCollaborationSection: React.FC = () => {
  return (
    <section id="collaboration" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Area */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Join Our Innovation Journey
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you&apos;re a developer, researcher, or community leader,
              there&apos;s a place for you in our innovation ecosystem.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-center gap-3 bg-white shadow-sm rounded-lg px-4 py-3 hover:shadow-md transition"
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex-1 flex flex-col gap-4 lg:max-w-sm">
            <Link href="/volunteer" className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition">
              Join Our Lab
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button className="w-full border border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-100 transition">
              Submit a Project Idea
            </button>

            <Link href="/sponsor" className="w-full flex justify-center border border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-100 transition">
              Partner with Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsCollaborationSection;
