import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikaelsoninitiative.org"),
  title: {
    default: "Mikaelson Initiative | Elevating Humanity Through Technology",
    template: "%s | Mikaelson Initiative",
  },
  description:
    "The Mikaelson Initiative empowers communities and innovators across Africa through technology, education, and collaboration.",
  keywords: [
    "Mikaelson Initiative",
    "Technology",
    "Innovation",
    "Africa",
    "Community",
    "Volunteering",
    "Education",
  ],
  authors: [
    {
      name: "Mikaelson Initiative Team",
      url: "https://mikaelsoninitiative.org",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikaelsoninitiative.org",
    siteName: "Mikaelson Initiative",
    title: "Mikaelson Initiative | Elevating Humanity Through Technology",
    description:
      "Join the Mikaelson Initiative to build a better Africa through innovation, community, and impact-driven technology.",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mikaelsoninitiative",
    creator: "@mikaelsoninitiative",
    title: "Mikaelson Initiative | Empowering Africa Through Technology",
    description:
      "Discover how the Mikaelson Initiative is transforming Africa through innovation, education, and collaboration.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://mikaelsoninitiative.org",
  },
  category: "Technology & Community Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-white text-gray-900`}
      >
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
