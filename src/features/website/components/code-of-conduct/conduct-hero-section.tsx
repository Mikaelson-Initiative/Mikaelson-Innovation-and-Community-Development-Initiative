import React from "react";

interface CodeOfConductHeroProps {
  title?: string;
  subtitle?: string;
  lastUpdated?: string;
}

export default function CodeOfConductHero({
  title = "Code of Conduct",
  subtitle = "Our pledge to maintain a safe, inclusive, and respectful community.",
  lastUpdated = "August 10, 2025",
}: CodeOfConductHeroProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[rgba(92,225,230,0.5)] px-8 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight dark:text-brand-text-dark-heading text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-brand-text-dark">{subtitle}</p>
          <div className="mt-6 inline-flex items-center gap-x-2 rounded-full bg-white/80 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="font-semibold text-gray-700">Last updated:</span>
            <span className="text-gray-600">{lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
