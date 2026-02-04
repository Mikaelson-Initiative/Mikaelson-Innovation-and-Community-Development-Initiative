"use client"
import React from "react";
import { motion } from "motion/react";

export const JoinSection: React.FC = () => (
  <section className="max-w-5xl mx-auto rounded-2xl bg-teal-500 p-10 text-center text-white px-4">
    <motion.h2
      className="mb-3 text-3xl font-extrabold md:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Join Our Movement
    </motion.h2>

    <motion.p
      className="mx-auto mb-6 max-w-2xl text-lg md:text-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Be part of the generation that transforms Africa. Join our community of
      ambitious students and changemakers today.
    </motion.p>

    <motion.div
      className="flex flex-wrap items-center justify-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a
        href="/community"
        className="rounded-full bg-white px-6 py-3 font-semibold text-teal-500 hover:bg-gray-100 transition-colors"
      >
        Join Community
      </a>
      <a
        href="/contact"
        className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
      >
        Contact Us
      </a>
    </motion.div>
  </section>
);
