"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ProductHeader } from "./product-header";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "RIO Hub transformed how we manage community projects. The AI insights are game-changing.",
      author: "Sarah Johnson, Community Manager",
    },
    {
      quote:
        "The energy optimization features helped us reduce costs by 30%. Highly recommend!",
      author: "Michael Chen, Sustainability Lead",
    },
    {
      quote:
        "RIO Accelerator sped up our program delivery. It's like having an expert team on call.",
      author: "Amina Hassan, Program Director",
    },
  ];

  return (
    <section className="py-16 bg-white testimonials dark:bg-card">
      <div className="container mx-auto px-6">
        <ProductHeader title="What Our Users say" />
        <div className="grid gap-8 md:grid-cols-3 testimonials-grid">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="shadow-md !border-l-4 transition-all hover:border-2 duration-300 hover:border-brand-green-100 hover:-translate-y-2 border-l-brand-primary rounded-2xl"
            >
              <CardContent className="p-6">
                <p className="text-muted-foreground italic text-base mb-4">"{item.quote}"</p>
                <cite className="text-brand-primary text-base font-semibold block">
                  - {item.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
