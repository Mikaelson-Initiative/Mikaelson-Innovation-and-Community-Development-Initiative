import React from "react";
import { Crown } from "lucide-react";
import Link from "next/link";

type CTAProps = {
  title?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  testimonial?: {
    quote: string;
    author: string;
  };
};

const CommunityCTA: React.FC<CTAProps> = ({
  title = "Ready to Join Our Community?",
  description = "Start tracking your habits, connect with others, and transform your daily routine into lasting positive change. Join thousands of members already on their journey.",
  primaryAction = { label: "Join Waitlist", href: "/waitlist" },
  secondaryAction = { label: "Learn More", href: "/about-us" },
  testimonial = {
    quote:
      "This platform has completely changed how I approach my daily habits. The community support is incredible.",
    author: "— Sarah M., Community Member",
  },
}) => {
  return (
    <section className="bg-gradient-to-br dark:bg-card dark:from-card dark:to-card from-[#f8fafc] to-[#f1f5f9] py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4 mx-auto bg-gradient-to-br from-blue-600 to-teal-400">
          <Crown className="w-12 h-12 text-white" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-4 dark:text-brand-text-dark-heading">{title}</h2>
        <p className="text-lg mb-8 dark:text-brand-text-dark">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Link
            href={primaryAction.href}
            className="px-6 py-3 rounded-2xl btn-gradient font-semibold shadow text-lg text-white transition"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="px-6 py-3 rounded-2xl border text-brand-blue border-white font-semibold hover:bg-white text-lg  bg-white transition"
          >
            {secondaryAction.label}
          </Link>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl p-6 italic shadow-lg max-w-2xl mx-auto dark:text-black/70">
          <p className="mb-2">{testimonial.quote}</p>
          <cite className="not-italic font-semibold">{testimonial.author}</cite>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
