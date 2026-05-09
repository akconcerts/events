import { Calendar, Flame, Mic, Music, PartyPopper, Snowflake, Sparkles, Ticket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { label: string; icon: LucideIcon; tone: "neon" | "cyan" }[] = [
  { label: "Tonight", icon: Flame, tone: "neon" },
  { label: "This Weekend", icon: Calendar, tone: "cyan" },
  { label: "Live Music", icon: Music, tone: "neon" },
  { label: "Comedy", icon: Mic, tone: "cyan" },
  { label: "Festivals", icon: PartyPopper, tone: "neon" },
  { label: "Free Events", icon: Sparkles, tone: "cyan" },
  { label: "Touring AK", icon: Ticket, tone: "neon" },
  { label: "Winter Series", icon: Snowflake, tone: "cyan" },
];

export function QuickNav() {
  return (
    <section id="cities" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Jump in</h2>
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          Quick filters
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {items.map(({ label, icon: Icon, tone }) => (
          <button
            key={label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 text-left transition hover:border-transparent hover:bg-secondary"
          >
            <div
              className={
                "absolute inset-0 -z-0 opacity-0 transition group-hover:opacity-100 " +
                (tone === "neon"
                  ? "bg-[radial-gradient(80%_80%_at_0%_0%,color-mix(in_oklab,var(--neon)_30%,transparent),transparent)]"
                  : "bg-[radial-gradient(80%_80%_at_100%_100%,color-mix(in_oklab,var(--cyan)_30%,transparent),transparent)]")
              }
            />
            <div className="relative flex flex-col gap-3">
              <Icon
                className={
                  "h-5 w-5 " + (tone === "neon" ? "text-[var(--neon)]" : "text-[var(--cyan)]")
                }
              />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
