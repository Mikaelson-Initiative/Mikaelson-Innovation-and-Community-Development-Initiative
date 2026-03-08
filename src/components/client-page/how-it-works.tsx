"use client";
import { steps } from "@/components/client-page/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      
      <div className="text-center pt-24 pb-12 px-6">
        <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Process
        </p>
        <h2 className="text-[clamp(2rem,5vw,2.3rem)] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          How It Works
        </h2>
      </div>

     
      <div className="md:hidden flex flex-col gap-4 pb-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              relative rounded-2xl border border-[#5CE1E6]/60
              bg-[#050a0a] text-white overflow-hidden
              p-6 flex flex-col justify-end
            "
            style={{ height: "340px" }}
          >
            {/* Subtle glow */}
            <div
              className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.07) 0%, transparent 70%)",
              }}
            />
            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* BIG NUMBER */}
            <div
              className="absolute text-[#5CE1E6]/20 top-2 left-3 font-black leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(80px, 26vw, 130px)", letterSpacing: "-0.05em" }}
            >
              {step.number}
            </div>
            {/* Content */}
            <div className="relative z-10">
              <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.18em] uppercase mb-2">
                Step {step.number}
              </p>
              <h3 className="text-2xl font-bold mb-3 leading-[1.1] tracking-[-0.02em]">
                {step.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-[#5CE1E6]/50 text-[#5CE1E6] bg-[#5CE1E6]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
            {/* Bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                opacity: 0.4,
              }}
            />
          </div>
        ))}
      </div>

        {/* desktop */}
      <section
        ref={sectionRef}
        className="relative hidden md:flex items-center  justify-center overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <div
          className="relative w-full max-w-6xl px-6"
          style={{ height: "75vh" }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                how-card
                absolute inset-0
                rounded-3xl
                border border-[#5CE1E6]/60
                p-12
                flex flex-col justify-end
                bg-[#050a0a]
                text-white
                overflow-hidden
                
              "
            >
              {/* subtle glow*/}
              <div
                className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.07) 0%, transparent 70%)",
                }}
              />
              {/* Grid texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* BIG NUMBER */}
              <div
                className="absolute text-[#5CE1E6]/20 top-4 left-6 font-black leading-none pointer-events-none select-none"
                style={{ fontSize: "clamp(120px, 14vw, 200px)", letterSpacing: "-0.05em" }}
              >
                {step.number}
              </div>
              {/* Content */}
              <div className="relative z-10 max-w-xl">
                <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  Step {step.number}
                </p>
                <h3
                  className="font-bold mb-6 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                >
                  {step.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-medium border border-[#5CE1E6]/50 text-[#5CE1E6] bg-[#5CE1E6]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-base leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
              {/* bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}