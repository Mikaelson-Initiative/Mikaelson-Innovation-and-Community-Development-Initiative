"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product, products } from "@/constants";
import { ArrowRight, Tag } from "lucide-react";
import React, { useState } from "react";

export const HubSolutions = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  console.log(selected);
  return (
    <div className="bg-white py-12 px-10 ">
      <div className="container mx-auto max-w-7xl space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold lg:text-[64px]">
            RIO Hub Solutions
          </h1>
          <Input placeholder="Search ecosystems..." className="max-w-sm" />
        </div>
        <div className="space-y-5 text-gray-700 lg:text-[18px] leading-relaxed text-center text-pretty">
          <p>
            RIO Hub is an intelligent productivity platform designed to
            transform how communities track progress, build habits, and achieve
            goals. By combining real-time analytics, AI-driven insights, and
            collaborative accountability tools, RIO Hub empowers individuals and
            organizations across every industry to optimize their workflows and
            maximize their potential.
          </p>

          <p>
            Whether you're in education, business, creative industries, or
            public service, RIO Hub adapts to your unique ecosystem—delivering
            personalized recommendations, actionable metrics, and the tools you
            need to drive meaningful improvement and sustainable success.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 ">
          {products.slice(0, 2).map((product, index) => (
            <div
              className="rounded-4xl overflow-hidden"
              key={index}
              onClick={() => setSelected(product)}
            >
              <div
                className="h-60 flex items-center justify-center relative"
                style={{ backgroundColor: product.color }}
              >
                <span className="absolute font-extrabold  text-2xl lg:text-[48px]/12 left-1/2 -translate-x-1/2 top-5">
                  {product.title}
                </span>
                <span className="text-9xl relative">{product.icon}</span>
              </div>
              <div className="flex justify-between items-center bg-[#f5f5f5] p-5">
                <div className="flex items-center gap-2">
                  <Tag />
                  <p>{product.category}</p>
                </div>
                <Button className="rounded-full py-6 px-8! lg:text-[14.4px] duration-300 transition-all hover:translate-x-1 hover:bg-brand-primary border-2  border-black hover:text-black font-semibold">
                  Expore <ArrowRight />{" "}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
