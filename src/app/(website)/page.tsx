import Home from "@/components/client-page/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mikaelson Initiative | Elevating Humanity Through Technology",
  description:
    "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
  keywords: [
    "youth leadership Nigeria",
    "student leadership programs Africa",
    "personal development for students",
    "African youth initiative",
    "leadership training Nigeria",
    "student growth programs",
    "Mikaelson Initiative",
    "youth development Africa",
    "accountability systems students",
    "leadership skills students Nigeria",
  ],
  authors: [{ name: "Mikaelson Initiative", url: "https://mikaelsoninitiative.org" }],
  alternates: {
    canonical: "https://mikaelsoninitiative.org",
  },
  openGraph: {
    title: "Youth Leadership Programs in Nigeria | Mikaelson Initiative",
    description:
      "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
    url: "https://mikaelsoninitiative.org",
    siteName: "Mikaelson Initiative",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://mikaelsoninitiative.org/assets/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative — Youth Leadership Programs in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Leadership Programs in Nigeria | Mikaelson Initiative",
    description:
      "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
    site: "@mcdti_org",
    images: ["https://mikaelsoninitiative.org/assets/images/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mikaelson Initiative",
            url: "https://mikaelsoninitiative.org",
            logo: "https://mikaelsoninitiative.org/assets/images/mikaelsonlogo.png",
            description:
              "Structured youth leadership and personal development programs equipping African students with discipline, innovation skills, and accountability systems.",
            foundingLocation: {
              "@type": "Place",
              name: "Nigeria",
            },
            areaServed: "Africa",
            sameAs: [
              "https://x.com/mcdti_org",
              "https://www.instagram.com/mikaelson_initiative/",
              "https://www.linkedin.com/company/mikaelson-initiative/",
              "https://www.youtube.com/@TheMikaelsonCommunity",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "mikaelsoninitiative@gmail.com",
              contactType: "customer support",
            },
          }),
        }}
      />
      <Home />
    </>
  );
}