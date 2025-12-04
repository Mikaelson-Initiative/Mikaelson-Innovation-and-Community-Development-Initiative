"use client";
import React from "react";
import { motion } from "motion/react";

const VolunteerForm: React.FC = () => (
  <section className="application-form px-4 py-16 dark:bg-brand-dark-bg-nav" id="start">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        className="form-header text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-brand-text-dark-heading md:text-4xl">
          Apply to Volunteer
        </h2>
        <p className="text-gray-600 md:text-lg dark:text-brand-text-dark">
          Tell us about yourself and how you&apos;d like to contribute
        </p>
      </motion.div>

      <motion.div
        className="form-cta mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          href="https://forms.gle/UYgZGfb4sthtP19z6"
          target="_blank"
          rel="noopener"
          className="submit-button inline-flex items-center rounded-full  px-8 py-4 text-lg font-semibold text-white shadow bg-gradient-to-r from-teal-300 to-blue-500  transition-colors"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          Apply now
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default VolunteerForm;
