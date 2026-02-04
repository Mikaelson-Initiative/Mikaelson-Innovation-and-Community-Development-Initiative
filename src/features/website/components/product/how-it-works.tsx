"use client";

import { ProductHeader } from "./product-header";

interface Step {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      title: "Choose Your Product",
      description: "Select the RIO AI tool that fits your needs.",
    },
    {
      title: "Integrate & Customize",
      description: "Seamlessly integrate with your existing workflows",
    },
    {
      title: "Scale & Grow",
      description: "Monitor impact and scale your initiatives",
    },
  ];

  return (
    <section className="py-20 how-it-works">
      <div className="container mx-auto px-6">
        <ProductHeader title="How it Works" />
        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3 steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="dark:bg-card hover:border-brand-green-100 transition-colors duration-300  hover:shadow-[0_20px_60px_rgba(92,225,230,0.2)]/10 hover:shadow-brand-green-100 text-center border-2 rounded-2xl p-8 shadow-sm bg-[#f8fafc]"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-green-100/50 flex items-center justify-center text-xl lg:text-3xl font-bold">
                {index + 1}
              </div>

              <h4 className="text-xl font-bold mb-2 dark:text-brand-text-dark-heading">{step.title}</h4>
              <p className="text-gray-600 dark:text-brand-text-dark">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
