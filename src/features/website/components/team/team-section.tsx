"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import ReactCountryFlag from "react-country-flag";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FILTERS, FilterType, TEAM_MEMBERS, TeamMember } from "@/constants";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
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
    <div>
      {/* Header Section */}
      <motion.section
        className="mt-12 bg-gray-50 dark:bg-brand-dark-bg-nav px-4 py-16 text-center md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-3xl font-bold dark:text-brand-text-dark-heading text-gray-900 sm:text-4xl md:mb-8 md:text-5xl">
          Our Team of Impact
        </h2>
        <h3 className="mx-auto max-w-3xl dark:text-brand-text-dark text-base font-medium text-gray-500 sm:text-lg md:text-xl">
          Shaping the future of Africa with community backed by sustainable
          technology
        </h3>
      </motion.section>
      {/* Filter Section */}
      <section className="bg-white px-4 py-8 dark:bg-brand-dark-bg-nav">
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
                className={`rounded-lg border-2 border-cyan-400 px-4 py-2 text-sm font-medium transition-colors sm:text-base cursor-pointer ${
                  activeFilter === key
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
      </section>

      {/* Team Members */}
      <section className="bg-white px-4 py-12 dark:bg-brand-dark-bg-nav">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
              <Dialog
                key={member.name}
                onOpenChange={(open) => !open && setSelectedMember(null)}
              >
                <DialogTrigger asChild>
                  <div
                    onClick={() => setSelectedMember(member)}
                    className="relative h-[360px] w-full cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-50 transition-transform hover:scale-[1.02] hover:shadow-lg sm:h-[400px] md:h-[420px]"
                    style={{
                      backgroundImage: `url(${member.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 m-1 rounded bg-white/90 p-1 text-center">
                      <h4 className="text-base font-semibold  text-gray-700 sm:text-lg">
                        {member.name}

                        <ReactCountryFlag
                          countryCode={member.country}
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title={member.country}
                          className="rotate-2 ml-2"
                        />
                      </h4>
                      <p className="text-sm text-gray-500 sm:text-base">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>

                {selectedMember && (
                  <DialogContent className="max-w-md">
                    <DialogHeader className="sr-only">
                      <DialogTitle className="dark:text-brand-text-dark-heading">What you need to know</DialogTitle>
                      <DialogDescription className="dark:text-brand-text-dark">
                        Get know {selectedMember.name}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh] p-6">
                      <div className="space-y-4 text-center flex items-center justify-center">
                        <Image
                          src={selectedMember.img}
                          alt={selectedMember.name}
                          width={160}
                          height={160}
                          className="h-40 w-40 rounded-full object-cover mx-auto border"
                        />
                      </div>

                      <div className="text-black text-center mt-4">
                        <h3 className="font-semibold text-2xl dark:text-brand-text-dark-heading">
                          {selectedMember.name}
                        </h3>
                        <p className="text-lg dark:text-brand-text-dark">{selectedMember.role}</p>
                      </div>

                      <div className="bg-[#f8fafc] p-5 space-y-3 mt-4 rounded-lg">
                        <h3 className="text-xl text-black font-semibold">
                          About
                        </h3>
                        <p>{selectedMember.bio}</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
