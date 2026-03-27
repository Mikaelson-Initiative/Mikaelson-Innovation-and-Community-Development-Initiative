"use client";

import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { TESTIMONIALS } from "@/components/client-page/data";
import  { useRef } from "react";



export default function TestimonialMarquee() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const speed = 0.6;

  useAnimationFrame(() => {
    if (isPaused.current || !innerRef.current) return;
    const halfWidth = innerRef.current.scrollWidth / 2;
    const current = x.get();
    const next = current - speed;
    x.set(next <= -halfWidth ? 0 : next);
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#111] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-[#111] to-transparent" />

      <motion.div
        ref={innerRef}
        className="flex gap-5 w-max py-2"
        style={{ x }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[360px] rounded-2xl border border-[#5CE1E6]/20 dark:bg-white/5 bg-[#f7fafa] p-6 flex flex-col gap-4"
          >
            <div className="w-6 h-[2px] bg-[#5CE1E6] rounded-full" />
            <p className="text-sm md:text-[15px] dark:text-white/70 text-[#333] leading-relaxed italic flex-1">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-[#5CE1E6]/10">
              <div className="w-8 h-8 rounded-full bg-[#5CE1E6]/15 border border-[#5CE1E6]/40 flex items-center justify-center text-[#5CE1E6] text-xs font-bold shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold dark:text-white text-[#111]">{t.name}</p>
                <p className="text-xs dark:text-white/40 text-[#888]">{t.school}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}