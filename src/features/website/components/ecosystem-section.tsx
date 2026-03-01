"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const ecosystemItems = [
  {
    label: "The Mikaelson Community",
    href: "/community",
    bg: "#20c9c0",
    icon: "/icons/arrow.svg",
  },
  {
    label: "Mikaelson Labs",
    href: "/labs",
    bg: "#2563eb",
    icon: "/icons/arrow.svg",
    iconBg: "bg-gray-900", // small circle behind icon
  },
  {
    label: "Partnership & Growth Network",
    href: "/sponsor",
    bg: "#000000",
    icon: "/icons/arrow.svg",
  },
];

export default function EcosystemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-[1] mx-auto max-w-[1200px] flex-col items-center justify-center dark:bg-brand-dark-bg-nav bg-white px-4 pt-4 pb-16"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <h2 className="mx-auto mb-2 text-center py-16 text-[2.3rem] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          Our Ecosystem
        </h2>
      </motion.div>

      {/* Ecosystem Buttons */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap items-center justify-center gap-6"
      >
        {ecosystemItems.map((item) => (
          <Link key={item.label} href={item.href} className="px-3">
            <button
              style={{ backgroundColor: item.bg }}
              className={`mikaelson-button cursor-pointer inline-flex h-[55px] items-center gap-3 rounded-full px-5 text-base font-medium shadow-sm transition ${item.bg}`}
            >
              <span className="text-white text-sm lg:text-xl">
                {item.label}
              </span>

              <span
                className={`button-icon inline-flex h-8 w-8 items-center justify-center rounded-full ${
                  item.iconBg || ""
                }`}
              >
                <Image
                  width={30}
                  height={30}
                  src={item.icon}
                  alt="arrow"
                  className={`h-6 w-6}`}
                />
              </span>
            </button>
          </Link>
        ))}
      </motion.div>
    </motion.section>
  );
}
