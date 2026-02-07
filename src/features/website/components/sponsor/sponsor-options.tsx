"use client";
import Link from "next/link";
import React from "react";

type Option = {
  title: string;
  description: string;
  color: string;
  buttonLabel: string;
};

const options: Option[] = [
  {
    title: "Sponsor a Student",
    description:
      "Provide a full scholarship for a promising student to participate in our intensive programs, covering mentorship, resources, and community access.",
    color: "#2563eb",
    buttonLabel: "Donate Now",
  },
  {
    title: "Fund a Workshop",
    description:
      "Enable us to host specialized workshops on topics like software development, entrepreneurship, and intentional living for our community.",
    color: "#20c9c0",
    buttonLabel: "Give Today",
  },
  // {
  //   title: "Become a Partner",
  //   description:
  //     "Join our network of corporate partners committed to fostering talent and driving innovation in Africa. Let's build the future together.",
  //   color: "#1f2937",
  //   buttonLabel: "Contact Us",
  // },
];

export const SponsorshipOptions: React.FC = () => {
  return (
    <section className="sponsorship-options" style={{ padding: "4rem 1rem" }}>
      <div style={{ width: "90%", maxWidth: 1200, margin: "0 auto" }}>
        <h2 className="text-2xl md:text-[3rem] font-bold mb-6 lg:mb-8 text-center dark:text-brand-text-dark-heading">
          Ways to Give
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.title}
              className="sponsorship-card"
              style={{
                background: "white",
                borderRadius: 16,
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                className="text-xl font-semibold "
                style={{
                  color: opt.color,
                }}
              >
                {opt.title}
              </h3>
              <p
                className="text-sm md:text-base text-left md:text-center"
                style={{ margin: "1rem 0", color: "#333" }}
              >
                {opt.description}
              </p>
              <button
                className="py-3 text-sm md:text-base px-4 md:py-[0.8rem] md:px-[1.5rem]"
                style={{
                  background: opt.color,
                  color: "white",
                  borderRadius: "2rem",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {opt.buttonLabel}
              </button>
            </div>
          ))}
          <div
            className="sponsorship-card"
            style={{
              background: "white",
              borderRadius: 16,
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <h3 className="text-xl font-semibold" style={{ color: "#1f2937" }}>
              Become a Partner
            </h3>

            <p
              className="text-sm md:text-base text-left md:text-center"
              style={{ margin: "1rem 0", color: "#333" }}
            >
              Join our network of corporate partners committed to fostering
              talent and driving innovation in Africa. Let&apos;s build the future
              together.
            </p>

            <Link
              href="/contact"
              className="py-3 text-sm md:text-base px-4 md:py-[0.8rem] md:px-[1.5rem] inline-block font-semibold"
              style={{
                background: "#1f2937",
                color: "white",
                borderRadius: "2rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
