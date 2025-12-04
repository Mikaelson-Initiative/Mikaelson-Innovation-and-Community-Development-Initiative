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
      "Most volunteer roles require 3-10 hours per week, depending on your availability and the project needs. We work with your schedule.",
  },
  {
    question: "Is this opportunity remote?",
    answer:
      "Yes! Most of our volunteer opportunities are remote-friendly. Some projects may have optional in-person events or meetups.",
  },
  {
    question: "Do I need specific qualifications?",
    answer:
      "We welcome volunteers from all backgrounds! What matters most is your passion, commitment, and willingness to learn.",
  },
  {
    question: "Will I receive any certification?",
    answer:
      "Yes, we provide volunteer certificates and recognition letters that you can use for your professional portfolio.",
  },
  {
    question: "Can I volunteer while working full-time?",
    answer:
      "Absolutely! Many of our volunteers balance this with their full-time jobs. We offer flexible scheduling and various commitment levels.",
  },
];

const VolunteerFAQ: React.FC = () => {
  return (
    <section className="faq-section px-6 py-16 dark:bg-brand-dark-bg-nav">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-title mb-8 text-center text-3xl dark:text-brand-text-dark-heading font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="multiple"
          defaultValue={questions.map((_, idx) => `item-${idx}`)}
          className="divide-y space-y-2 divide-gray-200 bg-white dark:bg-card"
        >
          {questions.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="px-5 py-2 dark:bg-card"
            >
              <AccordionTrigger className="text-left text-lg font-medium dark:text-brand-text-dark-heading text-gray-900 flex justify-between">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-600 dark:text-brand-text-dark"
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
