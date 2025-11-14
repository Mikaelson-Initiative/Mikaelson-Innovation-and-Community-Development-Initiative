"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="py-20 bg-gray-50 final-cta">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Community?
        </h2>
        <p className="text-gray-700 mb-8">
          Join thousands of organizations using RIO AI to drive meaningful
          change
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 cta-buttons">
          <Button asChild className="px-8 py-6 text-lg primary">
            <Link href="/signup">Start Free Trial</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-8 py-6 text-lg secondary"
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
