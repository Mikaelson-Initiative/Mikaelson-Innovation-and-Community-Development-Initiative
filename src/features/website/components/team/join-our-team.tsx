"use client";
import { useRouter } from "next/navigation";
import React from "react";

const JoinTeam: React.FC = () => {
  const router = useRouter()
  return (
    <section
      className="join-team dark:bg-brand-dark-bg-nav bg-[#ecf8ff]"
      style={{
        padding: "4rem 1rem",
        textAlign: "center",
        marginTop: "4rem",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          className="dark:text-brand-text-dark-heading text-black"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          Join Our Team
        </h2>

        <h3
          className="dark:text-brand-text-dark"
          style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Ready to make a difference? Join our mission to transform communities
          across Africa through sustainable technology and innovation. Together,
          we can create lasting impact and build a brighter future.
        </h3>

        <button
          type="button"
          onClick={() => router.push("/volunteer")}
          className="bg-teal-400 hover:bg-teal-500 transition-colors text-white text-lg font-semibold py-4 px-8 border-none cursor-pointer shadow rounded-md"
        >
          Join Us Today
        </button>
      </div>
    </section>
  );
};

export default JoinTeam;
