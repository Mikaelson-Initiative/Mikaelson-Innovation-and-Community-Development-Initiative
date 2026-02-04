"use client"

import React from "react";
import { motion } from "framer-motion";
import StatsCard from "./stats-card";
import Link from "next/link";

export const VolunteerHero: React.FC = () => (
  <section className="md:px-6 py-12 dark:bg-brand-dark-bg-nav">
    <motion.div
      className="mx-auto max-w-6xl rounded-3xl p-8 md:p-16 bg-brand-bg-color dark:bg-gray-500"
      style={{ minHeight: 550 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="mb-6 text-3xl font-extrabold leading-tight dark:text-white text-gray-900 md:text-5xl">
            Join Our Mission
          </h1>
          <p className="mb-8 text-base text-gray-600 md:text-lg dark:text-white">
            Be part of Africa&apos;s transformation. Connect with like-minded
            changemakers, contribute your skills, and help build a brighter
            future for our continent.
          </p>
          <Link
            href="#start"
            className="inline-flex items-center rounded-full hover:bg-teal-400 px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl font-semibold text-white shadow bg-teal-500 transition-colors"
          >
            Volunteer Now
            <span className="ml-3 text-2xl" aria-hidden>
              ↓
            </span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <StatsCard />
        </motion.div>
      </div>
    </motion.div>
  </section>
);
