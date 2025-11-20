import CommunityChapters from "@/features/website/components/community/community-chapter";
import CommunityCTA from "@/features/website/components/community/community-cta";
import FeaturesOverview from "@/features/website/components/community/community-features";
import CommunityHeroSection from "@/features/website/components/community/community-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Mikaelson Community | Connect & Grow",
  description:
    "Become part of the Mikaelson Initiative community. Connect with changemakers, explore features, and engage with chapters across Africa.",
  openGraph: {
    title: "Join the Mikaelson Community | Connect & Grow",
    description:
      "Become part of the Mikaelson Initiative community. Connect with changemakers, explore features, and engage with chapters across Africa.",
    url: "https://mikaelsoninitiative.org/community",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Mikaelson Community | Connect & Grow",
    description:
      "Become part of the Mikaelson Initiative community. Connect with changemakers, explore features, and engage with chapters across Africa.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const CommunityPage = () => {
  return (
    <main className="community-page">
      <CommunityHeroSection />
      <FeaturesOverview />
      <CommunityChapters />
      <CommunityCTA />
    </main>
  );
};

export default CommunityPage;
