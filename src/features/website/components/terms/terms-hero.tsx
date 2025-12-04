import React from "react";

export const TermsHeroSection = () => {
  return (
    <section className="py-12 dark:bg-brand-dark-bg-nav">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[rgba(92,225,230,0.5)] px-8 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-brand-text-dark-heading">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-brand-text-dark">
            Please read these terms carefully before using our services.
          </p>
          <div className="mt-6 inline-flex items-center gap-x-2 rounded-full bg-white/80 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="font-semibold text-gray-700">Last updated:</span>
            <span className="text-gray-600">August 10, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};
