"use client"
import React from "react";
import { motion } from "motion/react";

interface StatProps {
  value: string;
  label: string;
  color: string;
}

const Stat: React.FC<StatProps> = ({ value, label, color }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-4xl lg:text-[48px] font-black" style={{ color }}>
      {value}
    </div>
    <p className="font-semibold text-gray-600 text-center">{label}</p>
  </motion.div>
);

export const ImpactStats: React.FC = () => (
  <section className="max-w-5xl mx-auto mb-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-200 p-10 text-center px-4">
    <motion.h2
      className="mb-8 text-3xl font-extrabold text-gray-900 md:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Our Impact
    </motion.h2>

    <motion.div
      className="grid grid-cols-2 gap-6 md:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <Stat value="4+" label="Universities Touched" color="#20c9c0" />
      <Stat value="3,000+" label="Students Reached" color="#2563eb" />
      <Stat value="6" label="Growth Campaigns" color="#10b981" />
      <Stat value="12+" label="Strategic Partners" color="#f59e0b" />
    </motion.div>
  </section>
);
