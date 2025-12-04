"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="py-40 bg-[#e6f6fe] dark:bg-brand-dark-bg-nav final-cta">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 lg:text-[48px] dark:text-brand-text-dark-heading">
          Ready to Transform Your Community?
        </h2>
        <p className="text-gray-700 mb-8 lg:text-xl dark:text-brand-text-dark">
          Join thousands of organizations using RIO AI to drive meaningful
          change
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 cta-buttons">
          <Button asChild className="btn-primary btn text-black">
            <Link href="/waitlist">Join waitlist</Link>
          </Button>

          <Button
            asChild
            className="btn bg-transparent border-2 text-brand-green-100 border-brand-green-100 hover:bg-brand-green-100/10"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
