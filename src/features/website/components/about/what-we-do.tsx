"use client";
import React from "react";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  accent: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, accent, children }) => (
  <motion.div
    className="rounded-2xl bg-gray-50 py-6 px-10"
    style={{ borderLeft: `4px solid ${accent}` }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-[20.8px]">
      {title}
    </h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

export const WhatWeDo: React.FC = () => (
  <section className="what-we-do mb-16 px-4">
    <motion.h2
      className="mb-10 text-center text-3xl font-extrabold dark:text-brand-text-dark-heading text-gray-900 md:text-[40px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      What We Do
    </motion.h2>

    <div className="lg:max-w-[1080px] mx-auto w-full">
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
        <Card title="Community Building" accent="#20c9c0">
          We create vibrant networks of ambitious students and changemakers
          united by excellence and intentional growth.
        </Card>
        <Card title="Innovation Labs" accent="#2563eb">
          Our innovation hub where we build and experiment with new ideas to
          solve challenges across Africa.
        </Card>
        <Card title="Partnership Networks" accent="#10b981">
          We connect students with mentors, resources, and opportunities to
          foster collaboration and accelerate growth.
        </Card>
        <Card title="Personal Development" accent="#f59e0b">
          We run growth campaigns and programs that help students develop
          discipline, leadership, and life skills.
        </Card>
      </motion.div>
    </div>
  </section>
);
