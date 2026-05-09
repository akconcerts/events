import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Tonight" },
  { to: "/", label: "Weekend" },
  { to: "/", label: "Events" },
  { to: "/", label: "Venues" },
  { to: "/", label: "Artists" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-neon font-display text-sm font-bold text-neon-foreground">
            AK
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            ak<span className="text-gradient-neon">concerts</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/"
            className="hidden rounded-full bg-gradient-neon px-4 py-2 text-sm font-semibold text-neon-foreground shadow-[0_8px_30px_-10px_var(--neon)] transition hover:opacity-90 sm:inline-flex"
          >
            Submit Event
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/50 bg-background/90 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
