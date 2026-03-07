"use client";

import { motion } from "motion/react";

export default function IntroVideo() {
  return (
    <div className="max-w-7xl mx-auto md:px-10 py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* video */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 shrink-0"
        >
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#5CE1E6]/30 shadow-[0_0_40px_rgba(92,225,230,0.06)]">
            {/* corner accents - i want that jarvis, futuristic effect lol */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#5CE1E6] rounded-tl-2xl z-10" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#5CE1E6] rounded-tr-2xl z-10" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#5CE1E6] rounded-bl-2xl z-10" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#5CE1E6] rounded-br-2xl z-10" />

            <iframe
              className="h-full w-full"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/x8nYGAWlLnQ?autoplay=1&mute=0&loop=1&playlist=x8nYGAWlLnQ"
              title="Mikaelson Initiative Video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-1/2 gap-6"
        >
          <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase">
            Our Story
          </p>

          <h2 className="text-[clamp(2rem,4vw,2.6rem)] dark:text-white font-extrabold leading-[1.15] tracking-[-0.03em] text-[#111111]">
            Meet Mikaelson!
          </h2>

          <div className="w-10 h-[2px] bg-[#5CE1E6] rounded-full" />

          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[1.05rem] text-[#444] dark:text-white/70 leading-relaxed">
              Behind every impactful movement is a clear vision. Meet the minds and
              mission driving The Mikaelson Initiative — a youth-focused leadership
              platform committed to equipping African students with a structured
              growth system.
            </p>
            <p className="text-base md:text-[1.05rem] text-[#444] dark:text-white/70 leading-relaxed">
              This short video highlights our problem statement, the story, the conviction, and the long-term
              vision behind our youth leadership and personal development programs
              across Nigeria and Africa.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}