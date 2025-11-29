"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Rocket, Star, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  const [showCards, setShowCards] = useState(false);

  return (
    <section className="w-full relative py-20 flex flex-col items-center text-center gap-12">
      {/* HERO TEXT */}
      <motion.div
        className="max-w-2xl space-y-4"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => setShowCards(true)}
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Rocket className="w-4 h-4" /> Coming Soon
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-extrabold">
          Join the Waitlist
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">
          Be among the first to experience the future of personal
          transformation. Get exclusive early access and special perks when we
          launch.
        </p>
      </motion.div>

      {/* FLOATING CARDS — appear afterwards */}
      {showCards && (
        <>
          <Card className="absolute hidden animate-float-slow top-1/2 -translate-y-1/2 left-6 p-4 rounded-2xl shadow-md bg-white lg:flex flex-col items-center gap-2">
            <Star className="w-8 h-8 text-brand-primary fill-brand-primary" />
            <span className="font-medium">Premium Features</span>
          </Card>

          <Card className="absolute animate-float-medium hidden bottom-4 right-10 p-4 rounded-2xl shadow-md bg-white lg:flex flex-col items-center gap-2">
            <Users className="w-8 h-8 text-brand-primary fill-brand-primary" />
            <span className="font-medium">Community Access</span>
          </Card>

          <Card className="absolute animate-float-fast hidden top-10 right-1 p-4 rounded-2xl shadow-md bg-white lg:flex flex-col items-center gap-2">
            <Trophy className="w-8 h-8 text-brand-primary" />
            <span className="font-medium">Early Rewards</span>
          </Card>
        </>
      )}
    </section>
  );
};
