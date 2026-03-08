import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { FocusAreaContent } from "./focus-area-data";

interface FocusAreaTemplateProps {
  content: FocusAreaContent;
}

const tint = (hex: string, alpha: string) => `${hex}${alpha}`;

const FocusAreaTemplate = ({ content }: FocusAreaTemplateProps) => {
  return (
    <main className="relative overflow-hidden dark:bg-brand-dark-bg-nav">
      <section
        className="relative isolate border-b border-slate-200/80"
        style={{
          background: `linear-gradient(130deg, ${content.theme.gradientStart}, ${content.theme.gradientEnd})`,
        }}
      >
        <div
          className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: tint(content.theme.accent, "33") }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: tint(content.theme.accent, "26") }}
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:px-8 md:py-20 lg:px-10">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-balance text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
                  style={{
                    borderColor: tint(content.theme.accent, "73"),
                    backgroundColor: tint(content.theme.accent, "12"),
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-slate-200/90 bg-white/85 p-5 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: content.theme.accent }}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
            Core Pillars
          </h2>
          <p className="mt-2 text-slate-600">
            The operating principles that shape this focus area from strategy to execution.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {content.pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-4 inline-flex rounded-2xl p-3"
                  style={{
                    backgroundColor: tint(content.theme.accent, "1A"),
                    color: content.theme.accent,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              Key Initiatives
            </h2>
            <p className="mt-2 text-slate-600">
              Programs and systems currently driving impact in this area.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6 md:flex-row">
            {content.initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.title}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[auto,1fr,auto] md:items-center"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: tint(content.theme.accent, "1A"),
                      color: content.theme.accent,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 md:text-lg">
                      {initiative.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {initiative.description}
                    </p>
                  </div>
                  <span
                    className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{
                      borderColor: tint(content.theme.accent, "73"),
                      color: content.theme.accent,
                      backgroundColor: tint(content.theme.accent, "12"),
                    }}
                  >
                    {initiative.cadence}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              Expected Outcomes
            </h2>
            <div className="flex flex-col gap-4 mt-6 md:flex-row">
              {content.outcomes.map((outcome) => (
                <div
                  key={outcome.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: content.theme.accent }}
                    />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {outcome.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-slate-900">
              Take the next step
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Collaborate with us to expand this focus area and scale outcomes across Africa.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={content.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: content.theme.accent }}
              >
                {content.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/focus-areas"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Browse All Focus Areas
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default FocusAreaTemplate;