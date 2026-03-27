import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikaelsoninitiative.org";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/dashboard/",
          "/feed/",
          "/challenges/",
          "/login/",
          "/sign-up/",
          "/forget-password/",
          "/verify-email/",
          "/sso-callback/",
          "/studio/",
          "/api/",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}