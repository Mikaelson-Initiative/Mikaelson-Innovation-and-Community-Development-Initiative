"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const data = [
  {
    question: "What is the Mikaelson Initiative?",
    answer:
      "The Mikaelson Initiative is a youth-driven movement using technology, intentional living, and community to transform Africa from the inside out. We focus on empowering students and young changemakers across Africa through our community programs, labs, and partnership networks.",
  },
  {
    question: "How can I join the Mikaelson Community?",
    answer: (
      <span>
        You can join our community by visiting our{" "}
        <Link href={"/community"} className="text-brand-blue hover:underline">
          Community page
        </Link>{" "}
        and signing up. Membership is open to ambitious students and
        changemakers across Africa who are committed to excellence and
        intentional growth.,
      </span>
    ),
  },
  {
    question: "What programs do you offer?",
    answer:
      "We offer various programs including: • Personal Growth Campaigns • Innovation Labs and Workshops • Mentorship and Partnership Networks • Community Events and Collaborations • Student Leadership Development",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No, joining the Mikaelson Community is completely free. We believe in making personal development and community support accessible to all students and young professionals across Africa.",
  },
  {
    question: "What is Mikaelson Labs?",
    answer:
      "Mikaelson Labs is our innovation hub where we build and experiment with new ideas to solve challenges across Africa. It's a space for creative collaboration, technology development, and solution-oriented thinking.",
  },
  {
    question: "How can I contribute to the initiative?",
    answer:
      "There are many ways to contribute: • Join our community and participate actively • Volunteer for programs and events • Share your skills and expertise • Sponsor our programs • Spread the word about our mission",
  },
  {
    question: "What universities are you currently working with?",
    answer:
      "We've touched 4 universities and counting, with over 3,000 students reached. We're continuously expanding our presence across African universities. Contact us if you'd like to bring the Initiative to your campus.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach us through our Contact page, follow us on social media, or email us directly. We're always happy to hear from community members and potential collaborators.",
  },
];

export const FaqContent = () => {
  return (
    <section className="py-12 mx-auto max-w-4xl px-6">
      <Accordion
        defaultValue={data.map((_, index) => `faq-${index}`)}
        type="multiple"
        className="w-full space-y-2"
      >
        {data.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
