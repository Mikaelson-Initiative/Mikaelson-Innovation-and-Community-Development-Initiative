import VolunteerFAQ from "@/features/website/components/volunteer/volunteer-faq";
import VolunteerForm from "@/features/website/components/volunteer/volunteer-form";
import { VolunteerHero } from "@/features/website/components/volunteer/volunteer-hero";
import WhyVolunteer from "@/features/website/components/volunteer/why-volunteer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer with Mikaelson Initiative",
  description:
    "Join the Mikaelson Initiative and contribute your skills to transform Africa. Learn about volunteering opportunities, benefits, and get started today.",
  openGraph: {
    title: "Volunteer with Mikaelson Initiative",
    description:
      "Join the Mikaelson Initiative and contribute your skills to transform Africa. Learn about volunteering opportunities, benefits, and get started today.",
    url: "https://mikaelsoninitiative.org/volunteer",
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
    title: "Volunteer with Mikaelson Initiative",
    description:
      "Join the Mikaelson Initiative and contribute your skills to transform Africa. Learn about volunteering opportunities, benefits, and get started today.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const VolunteerPage = () => {
  return (
    <main className="volunteer-page px-5 lg:px-0">
      <VolunteerHero />
      <VolunteerFAQ />
      <WhyVolunteer />
      <VolunteerForm />
    </main>
  );
};

export default VolunteerPage;
