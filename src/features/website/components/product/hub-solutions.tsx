"use client";
import { Input } from "@/components/ui/input";
import { ProductsGrid } from "./product-grid";
import { useState } from "react";

export const HubSolutions = () => {
    const [search, setSearch] = useState("");
  return (
    <div className="bg-white py-12 px-10 ">
      <div className="container mx-auto max-w-7xl space-y-8">
        <div className="flex justify-between flex-col md:flex-row gap-5 items-center">
          <h1 className="text-3xl font-bold lg:text-[64px]">
            RIO Hub Solutions
          </h1>
          <Input
            placeholder="Search ecosystems..."
            className="max-w-sm input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        <ProductsGrid search={search} />
      </div>
    </div>
  );
};
