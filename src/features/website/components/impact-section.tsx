"use client";
import { HeadingClipText } from "@/components/heading-backgroun-clip";
import React, { useMemo, useState, useEffect } from "react";

// Item type
interface ImpactItem {
  icon: string;
  number: string;
  label: string;
}

// Static items
const IMPACT_ITEMS: ImpactItem[] = [
  { icon: "🏛️", number: "4", label: "Universities Touched (and counting…)" },
  { icon: "👥", number: "3,000+", label: "Students Reached" },
  { icon: "🚀", number: "6", label: "Personal Growth Campaigns Run" },
  {
    icon: "🤝",
    number: "12+",
    label: "Strategic Collaborators and Volunteers",
  },
  { icon: "🎙️", number: "10+", label: "Student Stories Captured" },
];

// Tab keys
type TabKey = "Overview" | "Reach" | "Programs" | "Stories";

// CountUp props
interface CountUpProps {
  value: string;
}

function CountUp({ value }: CountUpProps) {
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const match = String(value).match(/([0-9,]+)(\+?)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const numericPart = match[1].replace(/,/g, "");
    const suffix = match[2] || "";
    const target = parseInt(numericPart, 10);
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    const durationMs = 1200;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      const current = Math.floor(target * progress);
      const formatted = current
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [value]);

  return <span>{display}</span>;
}

export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");

  const TABS: Record<TabKey, ImpactItem[]> = useMemo(
    () => ({
      Overview: IMPACT_ITEMS,
      Reach: [IMPACT_ITEMS[0], IMPACT_ITEMS[1]],
      Programs: [IMPACT_ITEMS[2], IMPACT_ITEMS[3]],
      Stories: [IMPACT_ITEMS[4]],
    }),
    []
  );

  const itemsToShow = TABS[activeTab];

  return (
    <section className="impact-section px-4 py-16" data-aos="fade-up">
      <div className="container mx-auto max-w-[1200px] text-center">
        {/* Section heading */}
        <div className="flex justify-between items-center px-5">
          <HeadingClipText className="mb-0" title={"Our Impact so far"} />
          {/* Tabs */}
          <div className="hidden md:flex gap-2 rounded-lg bg-gray-100 p-1 text-sm md:text-base">
            {Object.keys(TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabKey)}
                aria-pressed={activeTab === tab}
                className={`rounded px-2 md:py-2 transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="impact-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itemsToShow.map((item) => (
            <div
              key={item.label}
              className="impact-item rounded-2xl border border-l-[#20c9c0] border-l-4 border-gray-200 bg-white p-10 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="impact-icon-wrapper hidden mx-auto mb-3 h-12 w-12 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-gray-100 text-xl">
                <span className="impact-icon text-2xl lg:text-5xl" aria-hidden>
                  {item.icon}
                </span>
              </div>
              <div className="impact-content">
                <h3 className="impact-number text-3xl lg:text-[40px] font-extrabold text-gray-900">
                  <CountUp value={item.number} />
                </h3>
                <p className="mt-1 text-sm text-gray-700 md:text-[17.6px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mx-auto mt-10 max-w-3xl rounded-lg border border-l-[#20c9c0] border-l-8 border-gray-200 bg-white p-6 italic text-gray-800 text-lg">
          <p className="md:text-[25.6px]">
            The Initiative gave me the structure I needed to finally take my
            life seriously.
          </p>
          <footer className="mt-2 not-italic text-sm text-right text-gray-600  lg:text-[17.6px]">
            — A Student, Wesley University
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
