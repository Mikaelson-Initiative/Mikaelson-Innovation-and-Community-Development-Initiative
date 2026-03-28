"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ecosystems } from "./data";

// eco-block
export function EcosystemBlock({ eco }: { eco: (typeof ecosystems)[0] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          sectionRef.current?.querySelectorAll(".eco-card-" + eco.id) ?? [],
        );
        cards.forEach((card, i) => {
          gsap.set(card, { yPercent: 80, scale: 0.95, opacity: 0, zIndex: i });
          gsap.to(card, {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top -=${i * 20}%`,
              end: `+=20%`,
              scrub: 1.2,
            },
          });
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${eco.bullets.length * 20}%`,
          pin: true,
          scrub: 1.2,
          
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [eco.id, eco.bullets.length]);

  return (
    <div className="relative ">
      {/* mobile cards */}
      <div className="md:hidden flex flex-col gap-3 pb-10">
        {eco.bullets.map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            className="relative rounded-2xl border border-[#5CE1E6]/30 bg-[#d0f4f6] text-[#050a0a] overflow-hidden"
          >
            {/* glow */}
            <div
              className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.25) 0%, transparent 70%)",
              }}
            />
            {/* grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#0097a7 1px, transparent 1px), linear-gradient(90deg, #0097a7 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 p-6">
              {/* top row: step label + number */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#0097a7] text-[10px] font-bold tracking-[0.2em] uppercase">
                  {eco.label} · {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-black text-[#C9A84C]/40 leading-none select-none pointer-events-none"
                  style={{ fontSize: "52px", letterSpacing: "-0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* bullet text */}
              <p className="text-[#050a0a]/80 text-[15px] leading-relaxed font-medium">
                {bullet}
              </p>

              {/* tags */}
              {/* <div className="flex flex-wrap gap-2 mt-5">
                {eco.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium border border-[#0097a7]/40 text-[#0097a7] bg-[#0097a7]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>

            {/* bottom accent */}
            <div
              className="h-[1.5px] w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                opacity: 0.3,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* desktop cards */}
      <section
        ref={sectionRef}
        className="relative hidden md:flex items-center justify-center overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <div className="relative w-full max-w-6xl" style={{ height: "72vh" }}>
          {eco.bullets.map((bullet, i) => (
            <div
              key={i}
              className={`eco-card-${eco.id} absolute inset-0 rounded-3xl border border-[#5CE1E6]/60 p-12 flex flex-col justify-end bg-[#d0f4f6] text-[#050a0a] overflow-hidden`}
            >
              {/* subtle glow */}
              <div
                className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.30) 0%, transparent 70%)",
                }}
              />
              {/* grid texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(#0097a7 1px, transparent 1px), linear-gradient(90deg, #0097a7 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* BIG NUMBER */}
              <div
                className="absolute text-[#C9A84C]/40 top-4 left-6 font-black leading-none pointer-events-none select-none"
                style={{
                  fontSize: "clamp(120px, 14vw, 200px)",
                  letterSpacing: "-0.05em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* content */}
              <div className="relative z-10 max-w-2xl">
                <p className="text-[#0097a7] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                  {eco.label} · Point {i + 1}
                </p>
                <p
                  className="font-bold mb-8 leading-[1.2] tracking-[-0.02em] text-[#050a0a]"
                  style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)" }}
                >
                  {bullet}
                </p>
                {/* <div className="flex flex-wrap gap-3">
                  {eco.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-medium border border-[#0097a7]/40 text-[#0097a7] bg-[#0097a7]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function EcosystemSection({
  activeIndex,
}: {
  activeIndex: number;
}) {
 

  return (
    <div className="w-full">
      <EcosystemBlock eco={ecosystems[activeIndex]} />
    </div>
  );
}
