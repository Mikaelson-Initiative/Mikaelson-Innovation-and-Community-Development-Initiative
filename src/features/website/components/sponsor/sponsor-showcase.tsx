"use client";
import Image from "next/image";
import React from "react";

export const SponsorsShowcase: React.FC = () => {
  return (
    <section
      className="sponsors-showcase bg-white dark:bg-brand-dark-bg-nav"
      style={{ padding: "4rem 1rem", textAlign: "center", }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 16,
          padding: "2rem",
          margin: "0 auto 3rem auto",
          maxWidth: 900,
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          className="text-xl md:text-[1.5rem]"
          style={{
            fontWeight: 700,
            margin: 0,
            color: "#111",
          }}
        >
          Organizations and Individuals that support and believe in our goal
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          <div className="p-6 bg-white dark:bg-brand-dark-bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 w-full flex items-center justify-center h-32">
            <Image
              src="/assets/images/Google.png"
              alt="Google"
              width={140}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6 bg-white dark:bg-brand-dark-bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 w-full flex items-center justify-center h-32">
            <Image
              src="/assets/images/Microsoft.png"
              alt="Microsoft"
              width={140}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6 bg-white dark:bg-brand-dark-bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 w-full flex items-center justify-center h-32">
            <Image
              src="/assets/images/canva.png"
              alt="Partner Organization"
              width={120}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-6 bg-white dark:bg-brand-dark-bg-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 w-full flex items-center justify-center h-32">
             <Image
              src="/assets/images/Adobe-Express.png"
              alt="Mikaelson Initiative"
              width={120}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
