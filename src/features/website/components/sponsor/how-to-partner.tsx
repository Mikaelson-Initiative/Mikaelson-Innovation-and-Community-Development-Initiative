"use client";
import React from "react";

export const HowToPartner: React.FC = () => {
  return (
    <section className="w-full bg-indigo-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How to Partner With Us
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg max-w-2xl mx-auto">
          We welcome mission-aligned organizations to collaborate with us in
          creating sustainable impact.
        </p>
      </div>

      {/* FIRST STEP: EMAIL (separate so click works) */}
      <div className="mt-10 max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-100 flex items-start gap-4">
        <span className="text-indigo-600 font-bold text-xl">01</span>
        <p className="text-gray-700 text-base md:text-lg">
          Contact us at{" "}
          <a
            href="mailto:chukwusabastine2018@gmail.com"
            className="text-indigo-600 text-xs md:text-base underline font-medium"
          >
            community@mikaelsoninitiative.org
          </a>
        </p>
      </div>

      {/* THE REST OF THE STEPS */}
      <ol className="mt-4 max-w-3xl mx-auto space-y-2">
        {[
          "Discuss partnership opportunities tailored to your organization.",
          "Select a partnership package and sign the agreement.",
          "Collaborate on programs and track impact together.",
        ].map((text, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-100"
          >
            <span className="text-indigo-600 font-bold text-xl">
              {String(index + 2).padStart(2, "0")}
            </span>
            <p className="text-gray-700 text-base md:text-lg">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
