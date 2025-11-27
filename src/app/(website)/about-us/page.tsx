import { AboutHeader } from "@/features/website/components/about/about-header";
import { AboutOrganization } from "@/features/website/components/about/about-organisation";
import { ImpactStats } from "@/features/website/components/about/impact-stats";
import { JoinSection } from "@/features/website/components/about/join-section";
import { OurStory } from "@/features/website/components/about/our-story";
import SdgSection from "@/features/website/components/about/sdg-section";
import { TeamSection } from "@/features/website/components/about/team-section";
import { WhatWeDo } from "@/features/website/components/about/what-we-do";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mikaelson Initiative",
  description:
    "Learn about the Mikaelson Initiative, our mission, vision, values, and the passionate team driving positive change across Africa.",
  openGraph: {
    title: "About Us | Mikaelson Initiative",
    description:
      "Learn about the Mikaelson Initiative, our mission, vision, values, and the passionate team driving positive change across Africa.",
    url: "https://mikaelsoninitiative.org/about",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mikaelson Initiative",
    description:
      "Learn about the Mikaelson Initiative, our mission, vision, values, and the passionate team driving positive change across Africa.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const AboutPage = () => {
  return (
    <main className="">
      <AboutHeader />
      <SdgSection />
      <AboutOrganization />
      <OurStory />
      <WhatWeDo />
      <ImpactStats />
      <TeamSection />
      <JoinSection />
    </main>
  );
};

export default AboutPage;
