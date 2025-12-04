"use client"
import React from "react";
import { motion } from "motion/react";

const TeamHeroSection: React.FC = () => {
  return (
    <section className="bg-white py-5 dark:bg-brand-dark-bg-nav">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="flex min-h-[550px] items-center justify-center rounded-3xl bg-brand-bg-color px-6 py-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.button
              className="mb-3 rounded-xl border-2 border-gray-700 px-5 py-4 text-xl font-bold text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              MEET THE TEAM
            </motion.button>
            <motion.h1
              className="mb-5 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-4xl"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Meet the Change Makers
            </motion.h1>
            <motion.p
              className="text-lg text-left font-medium leading-relaxed text-gray-700 md:text-center md:text-xl"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Discover the passionate individuals driving the Mikaelson
              Initiative forward. Our dedicated team works tirelessly to create
              meaningful impact and transform ideas into reality, one project at
              a time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHeroSection;
