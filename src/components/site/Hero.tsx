import hero from "@/assets/hero.jpg";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Aurora-lit concert stage in Alaska"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-aurora opacity-70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-36">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 live-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          Live across Alaska tonight
        </div>

        <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          What's happening{" "}
          <span className="text-gradient-neon">tonight</span>
          <br className="hidden sm:block" /> in Alaska.
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          The statewide source of truth for live music, comedy and festivals — from
          Anchorage to Fairbanks to the Kenai. Curated daily.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#tonight"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-neon-foreground shadow-[0_10px_40px_-10px_var(--neon)] transition hover:translate-y-[-1px]"
          >
            See what's on tonight <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#cities"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-secondary"
          >
            <MapPin className="h-4 w-4" /> Browse by city
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border/40 pt-8 sm:max-w-md sm:grid-cols-3">
          <Stat n="487" label="Upcoming events" />
          <Stat n="62" label="Venues" />
          <Stat n="14" label="Cities" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold sm:text-3xl">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
