import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bolt, Gift, Crown, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Bolt,
    title: "Early Access",
    description:
      "Be the first to try new features and shape the product's future",
  },
  {
    icon: Gift,
    title: "Exclusive Perks",
    description: "Get special rewards, discounts, and lifetime benefits",
  },
  {
    icon: Crown,
    title: "Founder Status",
    description: "Receive a special badge and recognition as a founding member",
  },
  {
    icon: Handshake,
    title: "Direct Input",
    description: "Help us build features that matter most to you",
  },
];

export const Benefits = () => {
  return (
    <section className="w-full pt-12 pb-25">
      <h2 className="text-3xl font-bold text-center mb-10 md:text-[40px] dark:text-brand-text-dark-heading">Why Join Early?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-md hover:-translate-y-2 duration-300 transition-transform"
          >
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="size-16 bg-brand-primary flex-center rounded-full">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold dark:text-brand-text-dark-heading">{benefit.title}</h3>
              <p className="text-gray-600 text-sm dark:text-brand-text-dark">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
