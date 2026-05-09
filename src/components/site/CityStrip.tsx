const cities = [
  { name: "Anchorage", count: 184 },
  { name: "Fairbanks", count: 72 },
  { name: "Juneau", count: 48 },
  { name: "Kenai Peninsula", count: 41 },
  { name: "Wasilla", count: 29 },
  { name: "Seward", count: 22 },
  { name: "Homer", count: 19 },
  { name: "Sitka", count: 14 },
];

export function CityStrip() {
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="overflow-hidden py-6">
        <div className="marquee-track flex w-max gap-3 whitespace-nowrap">
          {[...cities, ...cities].map((c, i) => (
            <a
              key={i}
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm transition hover:border-[var(--neon)]"
            >
              <span className="font-semibold">{c.name}</span>
              <span className="text-xs text-muted-foreground group-hover:text-[var(--neon)]">
                {c.count} events
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
