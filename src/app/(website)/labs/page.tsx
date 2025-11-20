import LabsCollaborationSection from "@/features/website/components/labs/labs-collaboration";
import LabsFeaturedProjects from "@/features/website/components/labs/labs-featured-section";
import LabsHeroSection from "@/features/website/components/labs/labs-hero";
import LabsInnovationProcess from "@/features/website/components/labs/labs-innovation-process";
import LabsTeamSection from "@/features/website/components/labs/labs-team-section";
import LabsWhatWeDo from "@/features/website/components/labs/labs-what-we-do";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mikaelson Innovation Labs | Building Africa's Future",
  description:
    "Explore the Mikaelson Innovation Labs: collaborative spaces where breakthrough ideas meet cutting-edge technology to solve real-world challenges across Africa.",
  openGraph: {
    title: "Mikaelson Innovation Labs | Building Africa's Future",
    description:
      "Explore the Mikaelson Innovation Labs: collaborative spaces where breakthrough ideas meet cutting-edge technology to solve real-world challenges across Africa.",
    url: "https://mikaelsoninitiative.org/labs",
    images: [
      {
        url: "/assets/images/Desktop-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mikaelson Innovation Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikaelson Innovation Labs | Building Africa's Future",
    description:
      "Explore the Mikaelson Innovation Labs: collaborative spaces where breakthrough ideas meet cutting-edge technology to solve real-world challenges across Africa.",
    images: ["/assets/images/Desktop-image.jpg"],
  },
};

const LabsPage = () => {
  return (
    <main className="labs-page">
      <LabsHeroSection />
      <LabsWhatWeDo />
      <LabsFeaturedProjects />
      <LabsInnovationProcess />
      <LabsTeamSection />
      <LabsCollaborationSection />
    </main>
  );
};

export default LabsPage;
