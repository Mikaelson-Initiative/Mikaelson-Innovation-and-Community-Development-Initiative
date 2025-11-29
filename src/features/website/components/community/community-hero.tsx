"use client";
import { ArrowRight, Flame, User, Users } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const formatNumber = (num: number): string => num.toLocaleString();

const CommunityHeroSection: React.FC = () => {
  const liveStats = {
    activeMembers: 3247,
    totalStreaks: 18653,
    countriesReached: 52,
  };

  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto flex flex-col items-center px-4 gap-8  md:gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Transform Your Life Through
            <span className="block bg-gradient-to-r from-brand-blue to-teal-500 text-transparent bg-clip-text">
              Community & Growth
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl">
            Connect with like-minded individuals across Africa, track your
            progress, and achieve your goals together. Experience the power of
            accountability and shared success.
          </p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <span className="block text-xl font-bold">
                  {formatNumber(liveStats.activeMembers)}+
                </span>
                <span className="text-sm text-gray-500">Active Members</span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <span className="block text-xl font-bold">
                  {formatNumber(liveStats.totalStreaks)}+
                </span>
                <span className="text-sm text-gray-500">Daily Streaks</span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <User className="w-8 h-8 text-green-600" />
              <div>
                <span className="block text-xl font-bold">
                  {liveStats.countriesReached}+
                </span>
                <span className="text-sm text-gray-500">Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div className="flex items-center">
              <Link
                href="/waitlist"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-gradient text-white font-semibold shadow hover:opacity-90 transition"
              >
                <span>Join waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100 text-gray-800 font-semibold shadow hover:bg-gray-200 transition"
            >
              <span>Sign In</span>
              <LogIn className="w-5 h-5" />
            </Link> */}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative flex w-full lg:max-w-3xl justify-center overflow-hidden h-[300px] md:h-[500px] bg-gray-300/50 px-4 py-3 rounded"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/images/IMG_3412 2.jpg"
            alt="Community Hero"
            width={500}
            height={550}
            className="rounded-md shadow-lg object-cover w-full h-full hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHeroSection;
