"use client";
import React from "react";
import { motion } from "motion/react";

export const AboutOrganization: React.FC = () => (
  <section className="about-organization mt-16 bg-gray-50 py-12 text-center">
    <motion.div
      className="mx-auto max-w-4xl rounded-2xl border border-black/10 bg-white/80 p-10 text-left shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h2
        className="mb-6 text-center text-2xl font-bold text-gray-700 md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About the Mikaelson Community Development and Tech Initiative
      </motion.h2>

      <motion.p
        className="mb-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mikaelson Community Development and Tech Initiative is a standalone
        organization dedicated to fostering innovation and sustainable community
        development across Africa through technology-driven solutions and
        educational empowerment.
      </motion.p>

      <motion.p
        className="mb-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Our organization was founded with the vision of empowering African
        communities by providing accessible technology, educational resources,
        and sustainable development programs that create lasting positive
        impact.
      </motion.p>

      <motion.p
        className="mb-6 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        As an independent initiative, we maintain full autonomy over our
        programs, partnerships, and strategic direction.
      </motion.p>

      <motion.div
        className="mb-6 rounded-xl border border-amber-500 bg-amber-100 p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="mb-1 font-semibold text-amber-800">
          Important Clarification:
        </p>
        <p className="text-amber-800">
          The Mikaelson Initiative is not associated with any NGO, foundation,
          or any other entity bearing the name &apos;Mikaelson.&apos;
        </p>
      </motion.div>

      <motion.div
        className="rounded-xl border-l-4 border-teal-400 bg-emerald-50 p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="italic text-gray-700">
          We are committed to transparency, authenticity, and building genuine
          partnerships that drive meaningful change.
        </p>
      </motion.div>
    </motion.div>
  </section>
);
