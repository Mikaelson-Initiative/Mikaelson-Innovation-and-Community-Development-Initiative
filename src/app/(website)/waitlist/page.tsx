import { Benefits } from "@/features/website/components/waitlist/benefits";
import { HeroSection } from "@/features/website/components/waitlist/hero-section";
import { SocialProof } from "@/features/website/components/waitlist/social-proof";
import { WaitlistForm } from "@/features/website/components/waitlist/waitlist-form";
import React from "react";

const WaitlistHome = () => {
  return (
    <div className="bg-brand-secondary dark:bg-brand-dark-bg-nav pb-30 px-5 md:px-0">
      <HeroSection />
      <WaitlistForm />
      <Benefits />
      <SocialProof />
    </div>
  );
};

export default WaitlistHome;
