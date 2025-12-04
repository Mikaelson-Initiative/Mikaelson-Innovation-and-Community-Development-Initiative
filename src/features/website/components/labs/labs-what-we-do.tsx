"use client";
import React, { useState } from "react";

type Service = {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const services: Service[] = [
  {
    icon: "🔬",
    title: "Research & Development",
    description:
      "Conducting deep research into local challenges and developing innovative technological solutions tailored to community needs.",
    buttonLabel: "Learn More",
  },
  {
    icon: "💡",
    title: "Prototype Development",
    description:
      "Building and testing proof-of-concept solutions before scaling them for broader community implementation.",
    buttonLabel: "Learn More",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Leveraging artificial intelligence to solve complex problems in education, healthcare, and economic development.",
    buttonLabel: "Learn More",
  },
  {
    icon: "📱",
    title: "Digital Products",
    description:
      "Creating mobile and web applications that improve access to essential services and opportunities.",
    buttonLabel: "Learn More",
  },
  {
    icon: "🌐",
    title: "Open Source",
    description:
      "Contributing to and creating open-source projects that empower developers and benefit the global community.",
    buttonLabel: "Explore Contributions",
  },
];

const LabsWhatWeDo: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl dark:text-brand-text-dark-heading font-extrabold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-brand-text-dark">
            Our labs focus on creating technology solutions that directly
            address the unique challenges and opportunities within African
            communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group p-6 rounded-2xl shadow-lg bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                hoveredIndex === index ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-indigo-600 bg-opacity-90 flex items-center justify-center rounded-2xl transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl shadow hover:bg-gray-100 transition">
                  {service.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsWhatWeDo;
