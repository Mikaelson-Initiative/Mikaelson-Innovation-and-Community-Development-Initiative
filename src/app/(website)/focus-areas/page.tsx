import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  focusAreaContent,
  focusAreaOrder,
} from "@/features/website/components/focus-areas/focus-area-data";

export const metadata: Metadata = {
  title: "Focus Areas | Mikaelson Initiative",
  description:
    "Explore Mikaelson Initiative focus areas across self development, youth empowerment, community, education growth, and technology infrastructure.",
  openGraph: {
    title: "Focus Areas | Mikaelson Initiative",
    description:
      "Explore Mikaelson Initiative focus areas across self development, youth empowerment, community, education growth, and technology infrastructure.",
    url: "https://mikaelsoninitiative.org/focus-areas",
    images: [
      {
        url: "/assets/images/mikaelsonlogo.png",
        width: 1200,
        height: 630,
        alt: "Mikaelson Initiative Focus Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Areas | Mikaelson Initiative",
    description:
      "Explore Mikaelson Initiative focus areas across self development, youth empowerment, community, education growth, and technology infrastructure.",
    images: ["/assets/images/mikaelsonlogo.png"],
  },
};

const FocusAreasPage = () => {
  return (
    <main className="dark:bg-brand-dark-bg-nav">
      <section className="border-b border-slate-200 bg-gradient-to-br from-cyan-50 via-sky-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Strategic Priorities
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-black text-slate-900 md:text-5xl">
            Focus Areas Driving Sustainable Impact
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            Discover the five program pillars shaping how we build disciplined growth,
            youth opportunity, stronger communities, and education outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreaOrder.map((slug) => {
            const area = focusAreaContent[slug];
            return (
              <article
                key={area.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{
                    color: area.theme.accent,
                    backgroundColor: `${area.theme.accent}1A`,
                  }}
                >
                  {area.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-black text-slate-900">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {area.shortDescription}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {area.metrics.slice(0, 2).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                    >
                      <p
                        className="font-extrabold"
                        style={{ color: area.theme.accent }}
                      >
                        {metric.value}
                      </p>
                      <p className="text-xs text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/${area.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: area.theme.accent }}
                >
                  Open focus area
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default FocusAreasPage;