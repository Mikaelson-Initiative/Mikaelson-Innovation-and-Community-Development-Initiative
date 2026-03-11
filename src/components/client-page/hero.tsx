"use client";

import React from "react";
import WavyBackground from "../hero-components/wavy-web"
import { motion } from "framer-motion";
import Link from "next/link";


const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      
      {/* wavy background */}
      <WavyBackground />

      {/* grainy overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
      {/* main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-10 md:py-16  md:px-10  ">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-gray-900 leading-[1.12] tracking-[-0.03em]"
              
            >
              We&apos;re Building{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0097a7]">Africa&apos;s Future</span>
                <span
                  className="absolute bottom-1 left-0 w-full h-[6px] rounded-full opacity-30"
                  style={{ background: "#5CE1E6" }}
                />
              </span>{" "}
              — One Student, One Idea, One Action at a Time.
            </motion.h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-[15px] md:text-[1.05rem] text-gray-600 leading-relaxed max-w-lg"
              
            >
              The Mikaelson Initiative is a youth development organization equipping African students
              with practical leadership skills, personal growth systems, and structured accountability.
            </motion.p>

            {/* call to action btns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="flex items-center gap-3 pt-1 flex-wrap"
            >
              <Link href="/community">
                <button className="px-7 py-3 text-sm font-semibold text-white bg-[#0097a7] rounded-full hover:bg-[#00838f] transition-all duration-300 shadow-[0_4px_20px_rgba(0,151,167,0.3)] hover:shadow-[0_6px_28px_rgba(0,151,167,0.45)] focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]">
                  Join The Community
                </button>
              </Link>

              <Link href="/about-us">
                <button className="px-7 py-3 text-sm font-semibold text-[#0097a7] border-2 border-[#5CE1E6]/70 rounded-full hover:border-[#5CE1E6] hover:bg-[#5CE1E6]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5CE1E6]">
                  Read More
                </button>
              </Link>
            </motion.div>
          </div>

         {/* video container */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
            className="w-full md:w-1/2 shrink-0"
          >
            {/* glow blob behind video */}
            <div
              className="absolute -z-0 w-[420px] h-[320px] rounded-full blur-[80px] opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #5CE1E6 0%, transparent 70%)",
                transform: "translate(10%, -10%)",
              }}
            />


            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#5CE1E6]/30 shadow-[0_8px_48px_rgba(0,151,167,0.18)] z-10">
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#5CE1E6] rounded-tl-2xl z-20" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#5CE1E6] rounded-tr-2xl z-20" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#5CE1E6] rounded-bl-2xl z-20" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#5CE1E6] rounded-br-2xl z-20" />

             
              {/*video here */}
              <iframe
                className="absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x8nYGAWlLnQ?autoplay=1&mute=1&loop=1&playlist=x8nYGAWlLnQ"
                title="Mikaelson Initiative Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;