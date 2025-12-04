"use client"
import React from "react";
import { motion } from "motion/react";

export const OurStory: React.FC = () => (
  <section className="mx-auto mt-16 max-w-5xl px-4">
    <motion.div
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <motion.h2
        className="mb-4 text-3xl text-center dark:text-brand-text-dark-heading font-extrabold text-gray-900 md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Story
      </motion.h2>

      <motion.p
        className="mb-4 text-gray-700 md:text-lg dark:text-brand-text-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The Mikaelson Initiative was born from a deeply personal struggle. Our
        founder, Oluwasegun Olukayode, discovered a critical problem that was
        holding him back as both a student and an individual - procrastination,
        losing focus, and lacking a structured, purposeful life. These
        challenges were not just academic setbacks; they were barriers that
        prevented him from reaching his full potential and living the impactful
        life he envisioned.
      </motion.p>

      <motion.p
        className="mb-4 text-gray-700 md:text-lg dark:text-brand-text-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Recognizing that he wasn&apos;t alone in this struggle, Oluwasegun
        realized that countless other African students were facing the same
        challenges - brilliant minds being held back by lack of structure,
        focus, and intentional personal development. This realization sparked a
        mission to create something bigger than himself.
      </motion.p>

      <motion.p
        className="text-gray-700 md:text-lg dark:text-brand-text-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        What began as one person&apos;s journey to overcome procrastination and
        build a focused, structured life has evolved into a movement reaching
        thousands of students across multiple universities. Today, the Mikaelson
        Initiative represents hope, possibility, and action - transforming not
        just individuals, but building a better Africa, one student at a time.
      </motion.p>
    </motion.div>
  </section>
);
