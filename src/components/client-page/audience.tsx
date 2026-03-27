"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audience } from "./data";

export default function WhoItsFor() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % audience.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const item = audience[current];
  const Icon = item.icon;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="py-24  md:px-10 bg-white dark:bg-[#050a0a] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Audience
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#111] dark:text-white max-w-sm">
              Who Mikaelson<br />Is For
            </h2>
          </div>
          <p className="text-base text-[#555] dark:text-white/50 leading-relaxed max-w-md md:text-right">
            Mikaelson Initiative is designed for African students who are committed to growth,
            discipline, and building meaningful impact within their schools and communities.
          </p>
        </div>

        {/* carousel */}
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "520px" }}>
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 rounded-2xl overflow-hidden"
            >
              {/* image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* content anchored bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col gap-3">
                <span className="text-[#5CE1E6] text-xs font-bold tracking-[0.2em] uppercase">
                  {item.number} · Our Audience
                </span>
                <h3 className="text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] max-w-xl">
                  {item.title}
                </h3>
                <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

         
          
        </div>

        {/* dot indicators + slide titles */}
        <div className="mt-6 flex items-center  justify-between gap-4">
          {/* titles row */}
          <div className="hidden md:flex items-center gap-6 overflow-x-auto">
            {audience.map((a, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`text-sm font-semibold whitespace-nowrap transition-all duration-300 pb-1 border-b-2 ${
                  i === current
                    ? "text-[#5CE1E6] dark:text-[#5CE1E6]"
                    : "text-black dark:text-white border-transparent hover:text-[#555] dark:hover:text-white/60"
                }`}
              >
                {a.title}
              </button>
            ))}
          </div>

          {/* dots — mobile */}
          <div className="flex md:hidden items-center  gap-2">
            {audience.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full bg-[#5CE1E6]"
                style={{
                  width: i === current ? "1.75rem" : "0.5rem",
                  height: "0.5rem",
                  opacity: i === current ? 1 : 0.3,
                }}
              />
            ))}
          </div>

          {/* progress counter */}
          <span className="text-xs  font-bold text-[#999] dark:text-white/30 tabular-nums shrink-0">
            {String(current + 1).padStart(2, "0")} / {String(audience.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}