"use client";

import  { useMemo, useState, useEffect } from "react";
import TestimonialMarquee from "./reusable-components/marquee";
import { IMPACT_ITEMS, ImpactItem} from "@/components/client-page/data";

type TabKey = "Overview" | "Reach" | "Programs" | "Stories";

function CountUp({ value }: { value: string }) {
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const match = String(value).match(/([0-9,]+)(\+?)/);
    if (!match) { setDisplay(value); return; }
    const numericPart = match[1].replace(/,/g, "");
    const suffix = match[2] || "";
    const target = parseInt(numericPart, 10);
    if (Number.isNaN(target)) { setDisplay(value); return; }
    const durationMs = 1200;
    const start = performance.now();
    function step(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      const current = Math.floor(target * progress);
      const formatted = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDisplay(`${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [value]);

  return <span>{display}</span>;
}



export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("Overview");

  const TABS: Record<TabKey, ImpactItem[]> = useMemo(() => ({
    Overview: IMPACT_ITEMS,
    Reach: [IMPACT_ITEMS[0], IMPACT_ITEMS[1]],
    Programs: [IMPACT_ITEMS[2], IMPACT_ITEMS[3]],
    Stories: [IMPACT_ITEMS[4]],
  }), []);

  const itemsToShow = TABS[activeTab];

  return (
    <section className="py-24 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Impact
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] dark:text-white text-[#111111]">
              Our Impact So Far
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl border border-[#5CE1E6]/20 dark:bg-white/5 bg-[#f0fafa] w-fit">
            {(Object.keys(TABS) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#5CE1E6] text-black"
                    : "dark:text-white/50 text-[#555] hover:text-[#111] dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {itemsToShow.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl border border-[#5CE1E6]/25 dark:bg-white/5 bg-[#f7fafa] p-8 overflow-hidden transition-all duration-300 hover:border-[#5CE1E6]/60 hover:shadow-[0_0_40px_rgba(92,225,230,0.07)]"
            >
              <div className="relative z-10 flex flex-col gap-3">
                <div className="w-7 h-[2px] bg-[#5CE1E6] rounded-full" />
                <h3 className="text-[clamp(2.2rem,5vw,3rem)] font-extrabold dark:text-white text-[#111] leading-none tracking-[-0.03em]">
                  <CountUp value={item.number} />
                </h3>
                <p className="text-sm dark:text-white/50 text-[#555] leading-relaxed">
                  {item.label}
                </p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Testimonial marquee */}
        <div className="mt-16">
          <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Student Voices
          </p>
          <TestimonialMarquee />
        </div>

      </div>
    </section>
  );
}