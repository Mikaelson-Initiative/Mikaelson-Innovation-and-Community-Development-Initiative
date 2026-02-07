"use client";
import { motion } from "motion/react";
import React from "react";

const HomeHero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-8 py-5"
    >
      <div className="mx-auto max-w-[1200px] rounded-3xl bg-[rgba(92,225,230,0.5)] p-5 text-left md:p-8 min-h-[550px]">
        <div className="relative mt-10 md:mt-20 mx-auto flex-col flex max-w-[1500px] lg:flex-row items-stretch justify-between gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="z-10 flex max-w-[600px] flex-1 flex-col items-start justify-start md:pt-8 text-left"
            data-aos="fade-right"
          >
            <h1 className="m-0 text-3xl md:text-[2.1rem] font-bold leading-[1.2] text-[#111111] dark:text-brand-text-dark-heading">
              We&apos;re Building Africa&apos;s Future - One Student, One Idea,
              One Action at a Time.
            </h1>
            <p className="mt-[1.2rem] text-lg md:text-[1.1rem] font-normal leading-[1.6] text-[#222222] dark:text-brand-text-dark">
              The Mikaelson Initiative is a youth-driven movement using
              technology, intentional living, and community to transform Africa
              from the inside out. We&apos;re starting with students. We&apos;re
              staying with purpose.
            </p>
          </motion.div>

          {/* Video */}
          <div
            className="flex max-w-[700px] flex-1 items-center justify-center"
            data-aos="fade-left"
          >
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="flex aspect-video w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
            >
              <iframe
                className="h-full w-full rounded-xl"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x8nYGAWlLnQ?autoplay=1&mute=0&loop=1&playlist=x8nYGAWlLnQ"
                title="Mikaelson Initiative Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
