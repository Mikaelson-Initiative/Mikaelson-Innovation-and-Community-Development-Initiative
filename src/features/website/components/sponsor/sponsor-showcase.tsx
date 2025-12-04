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
      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div
          className="logo-slider"
          style={{
            display: "flex",
            gap: "3rem",
            animation: "slideLeft 20s linear infinite",
            whiteSpace: "nowrap",
            width: "calc(200% + 6rem)",
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={`sponsor-${i}`}
              src="/assets/images/brand-1.svg"
              alt={`Sponsor ${i + 1}`}
              width={80}
              height={80}
              className="rounded-full"
              style={{ flexShrink: 0 }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={`sponsor-dup-${i}`}
              src="/assets/images/brand-1.svg"
              alt={`Sponsor ${i + 1} Duplicate`}
              className="rounded-full"
              width={80}
              height={80}
              style={{flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
