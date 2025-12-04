import React from "react";

const reportOptions = [
  {
    title: "Submit Report",
    description: "Experienced or witnessed inappropriate behavior?",
    buttonText: "Submit Report",
    buttonHref: "mailto:conduct@mikaelsoninitiative.org",
    buttonStyle: "bg-cyan-500 hover:bg-cyan-600 text-white",
  },
  {
    title: "Ask Questions",
    description: "Need clarification about our community standards?",
    buttonText: "Contact Us →",
    buttonHref: "/contact",
    buttonStyle: "text-cyan-600 hover:underline",
  },
  {
    title: "View Terms",
    description: "Review our complete terms of service.",
    buttonText: "Read Terms",
    buttonHref: "/terms",
    buttonStyle: "bg-cyan-500 hover:bg-cyan-600 text-white",
  },
];

export default function ReportViolationSection() {
  return (
    <div className="mx-auto mt-16 max-w-6xl px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-brand-text-dark-heading">Report a Violation</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-brand-text-dark">
        Experienced or witnessed inappropriate behavior?
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {reportOptions.map((option, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {option.title}
            </h3>
            <p className="mt-2 text-gray-600">{option.description}</p>
            <a
              href={option.buttonHref}
              className={`mt-4 inline-block rounded-md px-4 py-2 font-semibold ${option.buttonStyle}`}
            >
              {option.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
