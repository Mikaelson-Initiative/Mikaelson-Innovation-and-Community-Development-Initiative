"use client";

import { steps } from "@/components/client-page/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".how-card");

      cards.forEach((card, i) => {
        gsap.set(card, {
          yPercent: 80,
          scale: 0.95,
          opacity: 0,
          zIndex: i,
        });

        gsap.to(card, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top -=${i * 100}%`,
            end: `+=100%`,
            scrub: 1.2,
          },
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${steps.length * 100}%`,
        pin: true,
        scrub: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h2 className="text-[2.3rem] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111] text-center py-20">How It Works</h2>
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden "
      >

        
        <div className="relative w-full max-w-6xl h-[75vh] border border-red-400">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
              how-card
              absolute inset-0
              rounded-3xl
              border
              p-12
              flex flex-col justify-end
              backdrop-blur-xl
              transition-colors

              border-[#5CE1E6]
              bg-black
              text-white

              dark:border-[#5CE1E6]
              dark:bg-black

              light:border-[#5CE1E6]
              light:bg-white
              light:text-black
            "
            >
              {/* BIG NUMBER */}
              <div
                className="absolute text-[#5CE1E6] top-4 left-6 text-[clamp(120px,14vw,180px)] font-bold  leading-none pointer-events-none select-none">
                {step.number}
              </div>

              <div className="relative z-10 max-w-xl">
                <h3 className="text-4xl md:text-5xl font-semibold mb-6">
                  {step.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-8">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm  border border-[#5CE1E6]        dark:border-[#5CE1E6]  light:border-[#5CE1E6] ">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white   max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
