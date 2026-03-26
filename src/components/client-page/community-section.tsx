"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { communityPillars, communityImages, floatingCards, memberImages  } from "@/components/client-page/data";

export default function CommunitySection() {
  return (
    <section className="py-24  md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

       
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* text */}
          <div className="flex flex-col gap-8 lg:w-[48%] shrink-0">

            <div>
              <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Community
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] dark:text-white text-[#111]">
                A Community Built<br />for Growth and<br />Leadership
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base text-[#555] dark:text-white/60 leading-relaxed">
                The Mikaelson Initiative brings together students who are committed to growth, leadership, and creating meaningful impact in their schools and communities.
              </p>
              <p className="text-base text-[#555] dark:text-white/60 leading-relaxed">
                Inside the community, members connect, exchange ideas, collaborate on projects, and challenge each other to grow.
              </p>
            </div>

            {/* pillars */}
            <div className="flex flex-col gap-4 pt-2">
              {communityPillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="shrink-0 mt-0.5 w-9 h-9 rounded-xl border border-[#5CE1E6]/30 bg-[#5CE1E6]/5 flex items-center justify-center group-hover:border-[#5CE1E6]/60 transition-colors duration-200">
                    <pillar.icon size={16} color="#5CE1E6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold dark:text-white text-[#111] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#666] dark:text-white/50 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* liner */}
            <div className="flex items-center gap-3 py-4 border-y border-[#5CE1E6]/15">
              <span className="w-8 h-[2px] bg-[#5CE1E6] rounded-full shrink-0" />
              <p className="text-sm italic text-[#555] dark:text-white/50">
                Great ideas grow faster in the right community.
              </p>
            </div>

            {/* member avatars and cta btns */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {memberImages.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-[#111] overflow-hidden shrink-0"
                      style={{ zIndex: 4 - i }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <div
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-[#111] bg-[#5CE1E6]/20 flex items-center justify-center shrink-0"
                    style={{ zIndex: 0 }}
                  >
                    <span className="text-[10px] font-bold text-[#5CE1E6]">+</span>
                  </div>
                </div>
                <p className="text-xs text-[#666] dark:text-white/50 leading-tight">
                  Individuals from different<br />walks of life, united by ambition.
                </p>
              </div>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5CE1E6] text-black text-sm font-semibold hover:bg-[#4bcdd2] transition-all duration-200 group w-fit"
              >
                Explore the Community
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* collage */}
          <div className="relative lg:w-[52%] w-full">

            {/* grid */}
            <div className="grid  grid-cols-2 gap-3">
              {/* image */}
              <div className="row-span-2 rounded-2xl overflow-hidden border border-[#5CE1E6]/15 aspect-[3/4]">
                <Image
                  src={communityImages[0].src}
                  alt={communityImages[0].alt}
                  width={400}
                  height={533}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {/* 2 right images */}
              <div className="rounded-2xl overflow-hidden border border-[#5CE1E6]/15 aspect-square">
                <Image
                  src={communityImages[1].src}
                  alt={communityImages[1].alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#5CE1E6]/15 aspect-square">
                <Image
                  src={communityImages[2].src}
                  alt={communityImages[2].alt}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* image */}
            <div className="mt-3 rounded-2xl overflow-hidden border border-[#5CE1E6]/15 aspect-[16/6]">
              <Image
                src={communityImages[3].src}
                alt={communityImages[3].alt}
                width={800}
                height={300}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* stat cards */}
            <motion.div
              className="absolute -left-5 top-1/3 flex flex-col gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {floatingCards.slice(0, 2).map((card, i) => (
                <div
                  key={i}
                  className="bg-white mx-4 dark:bg-[#111] border border-[#5CE1E6]/30 rounded-xl px-4 py-3 shadow-lg shadow-black/10 dark:shadow-black/30"
                >
                  <p className="text-[#5CE1E6] font-extrabold text-lg leading-none">{card.count}</p>
                  <p className="text-xs text-[#555] dark:text-white/50 mt-1">{card.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="absolute -right-3 bottom-24 flex flex-col gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              {floatingCards.slice(2).map((card, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#111] border border-[#5CE1E6]/30 rounded-xl px-4 py-3 shadow-lg shadow-black/10 dark:shadow-black/30"
                >
                  <p className="text-[#5CE1E6] font-extrabold text-lg leading-none">{card.count}</p>
                  <p className="text-xs text-[#555] dark:text-white/50 mt-1">{card.label}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}