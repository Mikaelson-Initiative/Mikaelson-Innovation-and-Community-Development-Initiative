"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HeadingClipText } from "@/components/heading-backgroun-clip";
import { cn } from "@/lib/utils";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface AnimatedSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  btnBgcolor?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  btnBgcolor,
  className = "",
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`mx-auto mt-8 w-full overflow-hidden rounded-[2rem] dark:bg-linear-to-br dark:from-brand-dark-bg-nav dark:to-brand-dark-bg-nav bg-linear-to-br from-slate-50 to-slate-200 px-3 lg:px-7 py-12 text-center ${className}`}
    >
      {/* Heading */}
      <motion.div variants={itemVariants}>
        <HeadingClipText title={title} />
      </motion.div>

      {/* Paragraph */}
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-brand-dark-bg-nav text-black py-8 px-5 rounded-[2rem]"
      >
        <p className="text-center text-xl font-medium dark:text-brand-text-dark leading-[32.64px]">
          {description}
        </p>
      </motion.div>

      {/* Button (optional) */}
      {buttonText && buttonLink && (
        <motion.div variants={itemVariants}>
          <Link href={buttonLink}>
            <button
              type="button"
              className={cn(
                "mt-8 inline-flex cursor-pointer h-[55px] items-center gap-3 rounded-full px-6 text-lg font-semibold text-white shadow",
                btnBgcolor
              )}
            >
              <span>{buttonText}</span>
              <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
                <Image
                  width={20}
                  height={20}
                  src="/icons/arrow.svg"
                  alt="arrow"
                  className="h-4 w-4"
                />
              </span>
            </button>
          </Link>
        </motion.div>
      )}

      {/* Image (optional) */}
      {imageSrc && (
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 text-center"
        >
          <Image
            width={1200}
            height={700}
            src={imageSrc}
            alt={imageAlt || title}
            className="floating-image mx-auto max-w-[80%] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default AnimatedSection;
