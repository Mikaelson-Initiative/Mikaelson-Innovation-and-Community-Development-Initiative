"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FILTERS, FilterType, TEAM_MEMBERS, TeamMember } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";

const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [search, setSearch] = useState<string>("");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
      <motion.div
        className="mt-12 bg-gray-50 px-4 py-16 text-center dark:bg-brand-dark-bg-nav md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-brand-text-dark-heading sm:text-4xl md:mb-8 md:text-5xl">
          Our Team of Impact
        </h2>
        <p className="mx-auto max-w-3xl text-base font-medium text-gray-500 dark:text-brand-text-dark sm:text-lg md:text-xl">
          Shaping the future of Africa with community backed by sustainable
          technology
        </p>
      </motion.div>

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
                className={`cursor-pointer rounded-lg border-2 border-cyan-400 px-4 py-2 text-sm font-medium transition-colors sm:text-base ${activeFilter === key
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
              className="w-full rounded-lg border-2 border-gray-700 p-2 text-sm outline-none focus:border-cyan-400 dark:text-white dark:placeholder:text-white sm:w-72"
            />
          </motion.div>
        </div>
      </div>

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
            {filteredMembers.map((member) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setSelectedMember(member)}
                className="flex h-full w-full cursor-pointer flex-col items-start text-left"
              >
                <div className="relative h-[370px] aspect-4/5 w-full overflow-hidden rounded-4xl bg-gray-50 sm:aspect-square">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-x-2 bottom-2 rounded-2xl bg-white/90 p-2 text-center backdrop-blur-sm dark:bg-slate-900/85">
                    <h3 className="mb-1 w-full text-center text-base font-bold text-gray-900 dark:text-brand-text-dark-heading sm:text-md">
                      {member.name}
                      <ReactCountryFlag
                        countryCode={member.country}
                        svg
                        style={{ width: "1.2em", height: "1.2em" }}
                        title={member.country}
                        className="ml-2"
                      />
                    </h3>
                    <p className="w-full text-sm font-medium text-gray-700 dark:text-brand-text-dark">
                      {member.role}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <Dialog
        open={Boolean(selectedMember)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedMember(null);
          }
        }}
      >
        {selectedMember && (
          <DialogContent className="max-w-md">
            <DialogHeader className="sr-only">
              <DialogTitle>Team member profile</DialogTitle>
              <DialogDescription>
                Learn more about {selectedMember.name}
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh] p-6">
              <div className="flex items-center justify-center">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  width={160}
                  height={160}
                  className="mx-auto h-40 w-40 rounded-full border object-cover"
                />
              </div>

              <div className="mt-4 text-center text-black dark:text-brand-text-dark-heading">
                <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
                <p className="mt-1 text-lg dark:text-brand-text-dark">
                  {selectedMember.role}
                </p>
                <div className="mt-2 flex items-center justify-center gap-2 text-sm dark:text-brand-text-dark">
                  <span>{selectedMember.country}</span>
                  {selectedMember.department && (
                    <span>
                      • {FILTERS[selectedMember.department]}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-3 rounded-lg bg-[#f8fafc] p-5 dark:bg-slate-800/60">
                <h3 className="text-xl font-semibold text-black dark:text-brand-text-dark-heading">
                  About
                </h3>
                <p className="text-sm leading-6 text-gray-700 dark:text-brand-text-dark">
                  {selectedMember.name} serves as {selectedMember.role} at the
                  Mikaelson Initiative, helping advance our mission to empower
                  communities through education, innovation, and intentional
                  growth.
                </p>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default TeamSection;