import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "sonner";
import Script from "next/script";

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

const clerkPubKey = "pk_test_ZGl2aW5lLWRvcnktMzMuY2xlcmsuYWNjb3VudHMuZGV2JA"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          src="https://t.contentsquare.net/uxa/637962adff02e.js"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?('&l='+l):'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M2GCJCC8');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ClerkProvider publishableKey={clerkPubKey}>
          <QueryProvider>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M2GCJCC8"
                height={0}
                width={0}
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>

            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main id="main-content">
                {children}
                <Toaster position="top-center" richColors />
              </main>
            </ThemeProvider>
          </QueryProvider>
      </ClerkProvider>
    </body>
    </html >
  );
}
