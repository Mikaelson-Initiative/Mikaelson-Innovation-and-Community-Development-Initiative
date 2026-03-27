import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="relative rounded-3xl overflow-hidden border border-[#5CE1E6] bg-[#050a0a] dark:bg-[#050a0a] light:bg-white p-12 md:p-20"
          style={{} as React.CSSProperties}
        >
          {/* wrapper that handles the bg flip */}
          <div className="absolute inset-0 bg-white dark:bg-[#050a0a] -z-0" />

          {/* grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
            style={{
              backgroundImage:
                "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* accent line top */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-[1]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #5CE1E6 30%, #5CE1E6 70%, transparent)",
            }}
          />

          {/* content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8">

            <div className="flex flex-col items-center gap-5">
              <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase">
                Take the Next Step
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111] dark:text-white">
                Ready to Start Your<br />Growth Journey?
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-xl">
              <p className="text-base text-[#555] dark:text-white/60 leading-relaxed">
                The Mikaelson Initiative brings together students who are committed to growth, leadership, and creating meaningful impact in their schools and communities.
              </p>
              <p className="text-base text-[#555] dark:text-white/60 leading-relaxed">
                If you are ready to challenge yourself, collaborate with ambitious peers, and develop the mindset of a leader — we invite you to take the next step.
              </p>
            </div>

            {/* CTA — only Join the Community */}
            <div className="flex items-center w-full sm:w-auto justify-center">
              <Link
                href="/community"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#5CE1E6] text-black font-semibold text-sm hover:bg-[#4bcdd2] transition-all duration-200 w-full sm:w-auto justify-center shadow-[0_4px_24px_rgba(92,225,230,0.25)]"
              >
                Join the Community
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* trust line */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#5CE1E6]/40 rounded-full" />
              <p className="text-xs text-[#999] dark:text-white/35 tracking-wide">
                Open to students across Africa.
              </p>
              <span className="w-6 h-[1.5px] bg-[#5CE1E6]/40 rounded-full" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}