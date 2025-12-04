"use client";
import React from "react";
import { motion } from "motion/react";
import { Eye, Heart, Target, type LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  Icon: LucideIcon;
  text: string;
  background: string;
  textColor: string;
  borderColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  background,
  Icon,
  textColor,
  borderColor,
}) => (
  <motion.div
    className="rounded-2xl px-13 py-5"
    style={{
      background,
      color: textColor,
      borderColor: borderColor ?? "transparent",
      borderWidth: borderColor ? 2 : 0,
      borderStyle: "solid",
    }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex-center">
      <Icon
        className="w-10 h-10 md:w-13 md:h-13"
        fill={title === "Our Values" ? "white": "transparent"}
      />
    </div>
    <h3 className="mb-3 text-xl font-bold md:text-2xl">{title}</h3>
    <p className="text-sm md:text-base text-balance">{text}</p>
  </motion.div>
);

export const AboutHeader: React.FC = () => (
  <header className="bg-brand-gray py-10 mt-3 dark:bg-brand-dark-bg-nav">
    <div className="mx-auto max-w-6xl text-center px-5 pt-9 md:pt-13">
      <motion.h1
        className="mb-4 text-4xl font-extrabold md:text-5xl dark:text-brand-text-dark-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mikaelson Community Development and Tech Initiative
      </motion.h1>
      <motion.p
        className="mb-12 text-lg text-gray-600 md:text-xl dark:text-brand-text-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our name is changing and make it change in every part of about us.
      </motion.p>

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
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
        <InfoCard
          Icon={Target}
          title="Our Mission"
          text="To empower African communities through innovative technology solutions, quality education, and sustainable development programs that foster economic growth and social progress."
          background="rgba(92,225,230,0.5)"
          textColor="#111"
          borderColor="#5ce1e6"
        />
        <InfoCard
          Icon={Eye}
          title="Our Vision"
          text="A thriving Africa where every community has access to technology, education, and opportunities that enable them to build prosperous, sustainable futures."
          background="#2563eb"
          textColor="#fff"
        />
        <InfoCard
          Icon={Heart}
          title="Our Values"
          text="Innovation, community collaboration, sustainability, integrity, and empowerment drive everything we do as we work to transform Africa's future."
          background="#10b981"
          textColor="#fff"
        />
      </motion.div>
    </div>
  </header>
);
