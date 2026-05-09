import type { Event } from "@/data/events";
import { Calendar, MapPin } from "lucide-react";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

export function EventCard({ event, size = "md" }: { event: Event; size?: "md" | "lg" }) {
  return (
    <a
      href="#"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-[color-mix(in_oklab,var(--neon)_50%,transparent)] hover:shadow-[0_20px_60px_-25px_var(--neon)]"
    >
      <div className={"relative overflow-hidden " + (size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider backdrop-blur">
            {event.genre}
          </span>
          {event.featured && (
            <span className="rounded-full bg-gradient-neon px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-neon-foreground">
              Featured
            </span>
          )}
          {event.free && (
            <span className="rounded-full bg-[var(--cyan)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-neon-foreground">
              Free
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/50 px-2.5 py-1 text-xs font-semibold backdrop-blur">
          {event.price}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight tracking-tight sm:text-xl">
            {event.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{event.artist}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {fmtDate(event.date)} · {event.doors}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {event.venue}, {event.city}
          </span>
        </div>
      </div>
    </a>
  );
}
