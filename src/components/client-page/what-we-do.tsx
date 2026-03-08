"use client";

import Image from "next/image";
import { pillars } from "./data";

export default function WhatWeDo() {
  return (
    <section className="py-24 text-[#111111]  dark:text-white">
      <div className="container mx-auto  md:px-10">

        {/* header*/}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Pillars
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.3rem)] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111] mb-5">
            How We Develop Future-Ready African Leaders
          </h2>
          <p className="text-base md:text-[1.05rem] text-[#555] dark:text-white/60 leading-relaxed">
            Structured systems designed for measurable youth leadership and personal development growth.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#050a0a] border border-[#5CE1E6]/30 transition-all duration-300 hover:border-[#5CE1E6]/70 hover:shadow-[0_0_30px_rgba(92,225,230,0.08)]"
            >
              {/* watermark number kinda effect */}
              <div
                className="absolute top-3 right-4 font-black leading-none text-white/5 pointer-events-none select-none z-10"
                style={{ fontSize: "clamp(48px, 8vw, 72px)", letterSpacing: "-0.05em" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a0a] via-[#050a0a]/20 to-transparent" />
              </div>

              {/* content */}
              <div className="flex flex-col flex-1 p-5 pt-4 gap-3">
                <div className="w-8 h-[2px] bg-[#5CE1E6] rounded-full" />
                <h3 className="text-[15px] md:text-base font-bold text-white leading-snug tracking-[-0.01em]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>

              {/* bottom hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}