"use client";
import ReactCountryFlag from "react-country-flag";
import { FILTERS, FilterType, TEAM_MEMBERS } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [search, setSearch] = useState<string>("");

  // Filter and search members
  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesFilter =
        activeFilter === "ALL" || member.department === activeFilter;
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.role.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section>
      {/* Header Section */}
      <motion.div
        className="mt-12 bg-gray-50 dark:bg-brand-dark-bg-nav px-4 py-16 text-center md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-3xl font-bold dark:text-brand-text-dark-heading text-gray-900 sm:text-4xl md:mb-8 md:text-5xl">
          Our Team of Impact
        </h2>
        <p className="mx-auto max-w-3xl dark:text-brand-text-dark text-base font-medium text-gray-500 sm:text-lg md:text-xl">
          Shaping the future of Africa with community backed by sustainable
          technology
        </p>
      </motion.div>
      {/* Filter Section */}
      <div className="bg-white px-4 py-8 dark:bg-brand-dark-bg-nav">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(FILTERS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as FilterType)}
                className={`rounded-lg border-2 border-cyan-400 px-4 py-2 text-sm font-medium transition-colors sm:text-base cursor-pointer ${activeFilter === key
                  ? "bg-cyan-400 text-white"
                  : "text-cyan-400 hover:bg-cyan-50"
                  }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
          <motion.div
            className="flex w-full items-center gap-2 sm:w-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search team members by name or role..."
              aria-label="Search team members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full dark:text-white dark:placeholder:text-white rounded-lg border-2 border-gray-700 p-2 text-sm outline-none focus:border-cyan-400 sm:w-72"
            />
          </motion.div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white px-4 py-12 dark:bg-brand-dark-bg-nav">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {filteredMembers.map((member) => {
              return (
                <div
                  key={member.name}
                  className="flex flex-col items-start w-full h-full"
                >
                  <div className="w-full aspect-4/5 sm:aspect-square overflow-hidden rounded-4xl bg-gray-50 flex items-end justify-center">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-top rounded-b-4xl"
                    />
                  </div>

                  <div className="w-full text-center px-2 flex flex-col items-start mt-4">
                    <h3 className="text-base text-center w-full sm:text-lg font-bold mb-1">
                      {member.name}
                      <ReactCountryFlag
                        countryCode={member.country}
                        svg
                        style={{ width: "1.2em", height: "1.2em" }}
                        title={member.country}
                        className="ml-2"
                      />
                    </h3>
                    <p className="text-sm font-medium w-full">
                      {member.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
