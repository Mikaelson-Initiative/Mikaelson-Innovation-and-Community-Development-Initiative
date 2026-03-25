"use client";

import  { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EcosystemSection from "./ecosystem";
// import ScrollTrigger from "gsap/ScrollTrigger";


const tabs = [
  {
    id: "community",
    label: "The Mikaelson Community",
    color: "#5CE1E6",
    textColor: "text-black",
    iconBg: "bg-black",
    iconColor: "text-white",
    title: "The Mikaelson Community",
    content:
      "The Mikaelson Community is a vibrant network of ambitious students and changemakers across Africa, united by excellence and intentional growth.",
    glowColor: "rgba(92,225,230,0.2)",
    shadowColor: "rgba(92,225,230,0.5)",
  },
  {
    id: "labs",
    label: "Mikaelson Labs",
    color: "#3b82f6",
    textColor: "text-black",
    iconBg: "bg-white",
    iconColor: "text-black",
    title: "Mikaelson Labs",
    content:
      "Mikaelson Labs serves as our innovation hub where bold ideas are nurtured and transformed into real-world solutions that drive sustainable progress.",
    glowColor: "rgba(59,130,246,0.15)",
    shadowColor: "rgba(59,130,246,0.4)",
  },
  {
    id: "partnerships",
    label: "Partnership & Growth Network",
    color: "#050a0a",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-black",
    title: "Partnership & Growth Network",
    content:
      "The Partnership & Growth Network connects emerging leaders with mentors, organizations, and strategic opportunities to scale their impact.",
    glowColor: "rgba(92,225,230,0.1)",
    shadowColor: "rgba(92,225,230,0.4)",
  },
];

export default function OurEcosystemTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);


  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);
  

  return (
    <section className="py-24 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-10 py-4 rounded-full bg-[#1a232c] text-white text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold tracking-wide">
            Our Ecosystem
          </div>
        </div>

        {/* Tabs Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ backgroundColor: tab.color }}
              className={`
                relative flex items-center justify-between gap-4 px-6 py-4 rounded-full font-bold 
                transition-transform hover:scale-105 active:scale-95 shadow-md
                ${tab.textColor}
                ${
                  activeTab !== tab.id
                    ? "opacity-70 hover:opacity-100"
                    : "ring-4 ring-offset-2 ring-gray-200 dark:ring-gray-800"
                }
              `}
            >
              <span className="text-[15px]">{tab.label}</span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${tab.iconBg} ${tab.iconColor}`}
              >
                <ArrowUpRight strokeWidth={2.5} size={18} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Animated tab content — one block, driven by activeTab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title + Card */}
          <div className="relative w-full max-w-4xl mx-auto mt-6 mb-16 px-5 overflow-hidden ">
            {/* Glow — clipped by overflow-hidden, no phantom height */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none"
              style={{ backgroundColor: activeData.glowColor }}
            />

            <div className="relative z-10 flex flex-col items-center text-center ">
              <h3
                className="text-[clamp(2.5rem,6vw,4rem)] font-black text-[#8b9cb0] opacity-80 mb-6 tracking-tight"
                style={{
                  textShadow: `0px 4px 40px ${activeData.shadowColor}`,
                }}
              >
                {activeData.title}
              </h3>

              <div className="bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-3xl w-full">
                <p className="text-gray-600 dark:text-gray-800 text-[1.1rem] md:text-[1.25rem] leading-relaxed font-medium">
                  {activeData.content}
                </p>
              </div>
            </div>
          </div>

          {/* Single EcosystemSection per active tab */}
          <EcosystemSection activeIndex={activeIndex} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}