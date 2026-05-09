import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { QuickNav } from "@/components/site/QuickNav";
import { EventCard } from "@/components/site/EventCard";
import { CityStrip } from "@/components/site/CityStrip";
import { Newsletter } from "@/components/site/Newsletter";
import { SiteFooter } from "@/components/site/SiteFooter";
import { events } from "@/data/events";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Concerts — Alaska's Live Music & Events Tonight" },
      {
        name: "description",
        content:
          "Discover Alaska concerts, festivals, comedy and live music tonight. Anchorage, Fairbanks, Juneau and beyond — curated daily.",
      },
      { property: "og:title", content: "AK Concerts — Alaska's Live Music & Events" },
      {
        property: "og:description",
        content: "The statewide source of truth for live entertainment in Alaska.",
      },
    ],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {href && (
        <a
          href={href}
          className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
        >
          See all <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Index() {
  const tonight = events.filter((e) => e.bucket === "tonight");
  const weekend = events.filter((e) => e.bucket === "weekend");
  const upcoming = events.filter((e) => e.bucket === "upcoming");
  const featured = events.filter((e) => e.featured);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <QuickNav />
        <CityStrip />

        <section id="tonight" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading eyebrow="Happening Tonight" title="Don't stay in." href="#" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tonight.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <SectionHeading eyebrow="Featured" title="On the marquee" href="#" />
            <div className="grid gap-5 lg:grid-cols-3">
              {featured.map((e) => (
                <EventCard key={e.id} event={e} size="lg" />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading eyebrow="This Weekend" title="Make plans." href="#" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weekend.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHeading eyebrow="Upcoming" title="On the radar." href="#" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
