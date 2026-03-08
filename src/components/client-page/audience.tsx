"use client";

import { audience } from "./data";

export default function WhoItsFor() {
  return (
    <section className="py-24  md:px-10 text-[#111111] dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Audience
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] dark:text-white text-[#111111] max-w-sm">
              Who Mikaelson<br />Is For
            </h2>
          </div>
          <p className="text-base text-[#555] dark:text-white/60 leading-relaxed max-w-md md:text-right">
            Mikaelson is designed for African students who are committed to growth,
            discipline, and building meaningful impact within their schools and communities.
          </p>
        </div>

        {/* desktop */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {audience.map((item, index) => {
            const isRight = index % 2 === 1;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#5CE1E6]/25 bg-[#050a0a] p-8 overflow-hidden transition-all duration-300 hover:border-[#5CE1E6]/60 hover:shadow-[0_0_40px_rgba(92,225,230,0.07)]"
                style={{ marginTop: isRight ? "3rem" : "0" }}
              >
                {/* texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* number */}
                <div
                  className="absolute bottom-4 right-6 font-black leading-none text-white/[0.04] pointer-events-none select-none"
                  style={{ fontSize: "clamp(80px, 10vw, 130px)", letterSpacing: "-0.05em" }}
                >
                  {item.number}
                </div>

                {/* icons and number */}
                <div className="relative z-10 flex items-start justify-between mb-10">
                  <div className="p-3 rounded-xl border border-[#5CE1E6]/20 bg-[#5CE1E6]/5 group-hover:border-[#5CE1E6]/50 transition-colors duration-300">
                    <item.icon {...item.iconProps} />
                  </div>
                  <span className="text-[#5CE1E6]/40 text-sm font-bold tracking-widest">
                    {item.number}
                  </span>
                </div>

                {/* content */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-7 h-[2px] bg-[#5CE1E6] rounded-full" />
                  <h3 className="text-xl font-bold text-white leading-snug tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* mobile version here */}
        <div className="flex md:hidden flex-col gap-4">
          {audience.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-[#5CE1E6]/25 bg-[#050a0a] p-6 overflow-hidden transition-all duration-300 hover:border-[#5CE1E6]/60"
            >
              {/* grid texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* watermark -- been doing a lot of this lately */}
              <div
                className="absolute bottom-2 right-4 font-black leading-none text-white/[0.04] pointer-events-none select-none"
                style={{ fontSize: "90px", letterSpacing: "-0.05em" }}
              >
                {item.number}
              </div>

              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl border border-[#5CE1E6]/20 bg-[#5CE1E6]/5">
                  <item.icon {...item.iconProps} />
                </div>
                <span className="text-[#5CE1E6]/40 text-sm font-bold tracking-widest">
                  {item.number}
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <div className="w-6 h-[2px] bg-[#5CE1E6] rounded-full" />
                <h3 className="text-lg font-bold text-white tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}