"use client";

interface Step {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      title: "AI-Powered Insights",
      description:
        "Understand your community needs instantly using automated analysis.",
    },
    {
      title: "Smart Implementation",
      description:
        "Deploy strategies with guided workflows tailored to your organization.",
    },
    {
      title: "Measure Impact",
      description:
        "Track progress and outcomes with real-time dashboards and reporting.",
    },
  ];

  return (
    <section className="py-20 how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 section-title">
          How It Works
        </h2>

        {/* Static Divider Line (No Animation) */}
        <div className="flex items-center justify-center mb-14">
          <div className="w-full max-w-4xl h-[2px] bg-teal-300/60" />
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3 steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step text-center border border-gray-200 rounded-2xl p-8 shadow-sm bg-white"
            >
              <div className="step-number w-12 h-12 mx-auto mb-4 rounded-full bg-teal-300 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
