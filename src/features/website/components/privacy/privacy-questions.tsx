"use client";

export default function PrivacyQuestions() {
  const cards = [
    {
      title: "Contact Privacy Team",
      description: null,
      linkText: "Get in Touch →",
      href: "mailto:privacy@mikaelsoninitiative.org",
      isButton: false,
    },
    {
      title: "Terms & Conditions",
      description: "Review our complete terms of service.",
      linkText: "Read Terms",
      href: "/terms",
      isButton: true,
    },
    {
      title: "Data Rights",
      description: "Exercise your data protection rights.",
      linkText: "Submit Request",
      href: "mailto:data-requests@mikaelsoninitiative.org",
      isButton: true,
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-6xl px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-brand-text-dark-heading">Privacy Questions?</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-brand-text-dark">
        Need clarification about our privacy practices?
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            {card.description && (
              <p className="mt-2 text-gray-600">{card.description}</p>
            )}
            {card.isButton ? (
              <a
                href={card.href}
                className="mt-4 inline-block rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
              >
                {card.linkText}
              </a>
            ) : (
              <a
                href={card.href}
                className="mt-4 inline-block text-cyan-600 hover:underline"
              >
                {card.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
