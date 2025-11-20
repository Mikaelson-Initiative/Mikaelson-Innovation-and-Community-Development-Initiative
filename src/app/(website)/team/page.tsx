// app/team/page.tsx
import JoinTeam from "@/features/website/components/team/join-our-team";
import TeamHeroSection from "@/features/website/components/team/team-hero-section";
import TeamSection from "@/features/website/components/team/team-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Mikaelson Initiative",
  description:
    "Discover the passionate individuals driving the Mikaelson Initiative forward. Our team works tirelessly to create impact and transform ideas into reality.",
  openGraph: {
    title: "Meet Our Team | Mikaelson Initiative",
    description:
      "Discover the passionate individuals driving the Mikaelson Initiative forward.",
    url: "https://mikaelsoninitiative.org/team",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | Mikaelson Initiative",
    description:
      "Discover the passionate individuals driving the Mikaelson Initiative forward.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const TeamPage = () => {
  return (
    <div className="px-5">
      <TeamHeroSection />
      <TeamSection />
      <JoinTeam />
    </div>
  );
};

export default TeamPage;
