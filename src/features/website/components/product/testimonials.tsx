"use client";

import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-16 bg-white testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 section-title">
          What Our Users Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3 testimonials-grid">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="shadow-md rounded-2xl border border-gray-200 testimonial"
            >
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
                <cite className="text-gray-900 font-semibold block">
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
