import React from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "We engage with communities to understand their unique challenges and identify opportunities for technological intervention.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our team designs user-centered solutions and builds functional prototypes for testing and validation.",
  },
  {
    number: "03",
    title: "Test & Iterate",
    description:
      "We conduct extensive testing with real users, gathering feedback and refining our solutions for optimal performance.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "Successful solutions are deployed across communities and scaled to maximize their positive impact.",
  },
];

const LabsInnovationProcess: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl dark:text-brand-text-dark-heading font-extrabold text-gray-900 mb-4">
            Our Innovation Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-brand-text-dark">
            From idea to implementation, we follow a structured approach to
            ensure our solutions create meaningful impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Step number bubble */}
                <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-indigo-600 text-white font-bold z-10 shadow-md">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`mt-4 md:mt-0 md:max-w-md bg-white p-6 rounded-2xl shadow transition hover:shadow-lg ${
                    index % 2 === 0
                      ? "md:ml-8 md:text-left"
                      : "md:mr-8 md:text-right"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsInnovationProcess;
