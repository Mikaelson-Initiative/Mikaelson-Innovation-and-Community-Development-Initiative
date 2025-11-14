"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How much time do I need to commit?",
    answer:
      "We offer flexible commitment options and remote roles; apply and we will match you with a suitable opportunity.",
  },
  {
    question: "Is this opportunity remote?",
    answer:
      "We offer flexible commitment options and remote roles; apply and we will match you with a suitable opportunity.",
  },
  {
    question: "Do I need specific qualifications?",
    answer:
      "We offer flexible commitment options and remote roles; apply and we will match you with a suitable opportunity.",
  },
  {
    question: "Will I receive any certification?",
    answer:
      "We offer flexible commitment options and remote roles; apply and we will match you with a suitable opportunity.",
  },
  {
    question: "Can I volunteer while working full-time?",
    answer:
      "We offer flexible commitment options and remote roles; apply and we will match you with a suitable opportunity.",
  },
];

const VolunteerFAQ: React.FC = () => {
  return (
    <section className="faq-section px-6 py-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-title mb-8 text-center text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="multiple"
          defaultValue={questions.map((_, idx) => `item-${idx}`)}
          className="divide-y space-y-2 divide-gray-200 bg-white"
        >
          {questions.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="px-5 py-2"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 flex justify-between">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-600"
                >
                  {item.answer}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default VolunteerFAQ;
