import AnimatedSection from "@/components/animated-section";
import EcosystemSection from "@/features/website/components/ecosystem-section";
import { ExploreMore } from "@/features/website/components/explore-more";
import HomeHero from "@/features/website/components/hero";
import ImpactSection from "@/features/website/components/impact-section";
import MediaStories from "@/features/website/components/media-stories";

export default function Home() {
  return (
    <main className="bg-[#ffffff] px-5 lg:px-0">
      <HomeHero />
      <EcosystemSection />
      <AnimatedSection
        title="The Mikaelson Community"
        description="The Mikaelson Community is a vibrant network of ambitious students and changemakers across Africa, united by excellence and intentional growth."
        buttonText="Join our community"
        btnBgcolor="bg-brand-green-100"
        buttonLink="/community"
        imageSrc="/assets/images/Macbook-pro.jpg"
        imageAlt="Mikaelson Community on MacBook"
      />
      <AnimatedSection
        title="Mikaelson Labs"
        description="Mikaelson Labs is our innovation hub where we build and experiment
          with new ideas to solve challenges across Africa."
        buttonText="Contribute to Labs"
        buttonLink="/labs"
        btnBgcolor="bg-brand-blue"
        imageSrc="/assets/images/Desktop-image.jpg"
        imageAlt="Mikaelson Community on MacBook"
      />
      <AnimatedSection
        title="Partnership & Growth Network"
        description="Our network connects students with mentors, resources, and
          opportunities to foster collaboration and accelerate growth."
        buttonText="Sponsor a Program"
        buttonLink="/sponsor"
        btnBgcolor="bg-brand-black"
        imageSrc="/assets/images/iPad Image Presentation.jpg"
        imageAlt="Partnership & Growth Network on iPad"
      />
      <ImpactSection />
      <MediaStories />
      <ExploreMore />
    </main>
  );
}
