"use client"
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export const TeamSection: React.FC = () => (
  <section className="team-section mb-16 text-center px-4 dark:bg-brand-dark-bg-nav p-4">
    <motion.h2
      className="mb-6 text-3xl font-extrabold dark:text-brand-text-dark-heading text-gray-900 md:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Meet Our Team
    </motion.h2>

    <motion.p
      className="mx-auto mb-8 max-w-xl dark:text-brand-text-dark text-gray-600 md:text-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Our diverse team of passionate individuals is dedicated to empowering
      African youth and building stronger communities.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href="/team"
        className="inline-flex rounded-full bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
      >
        Meet the Team
      </Link>
    </motion.div>
  </section>
);
