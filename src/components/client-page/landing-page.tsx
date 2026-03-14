import HomeHero from "@/components/client-page/hero";
import ImpactSection from "@/features/website/components/impact-section";
import IntroVideo from "@/components/client-page/intro-video";
import BlogSectionWrapper from "./blog-wrapper";
import WhatWeDo from "./what-we-do";
import HowItWorks from "@/components/client-page/how-it-works";
import WhoItsFor from "./audience";
import CommunitySection from "@/components/client-page/community-section";
import FinalSection from "@/components/client-page/final-section";
import EcosystemSection from "./ecosystem";

export default function Home() {
  
  return (
    <>
      <HomeHero />

      <main className="bg-[#ffffff] dark:bg-background px-5 lg:px-0">
        {/* <IntroVideo /> */}
        {/* <WhatWeDo /> */}
        <HowItWorks />
        <EcosystemSection />
        <WhoItsFor />
        <ImpactSection />
        {/* <CommunitySection /> */}
        <BlogSectionWrapper />
        <FinalSection />
      </main>
    </>
  );
}
