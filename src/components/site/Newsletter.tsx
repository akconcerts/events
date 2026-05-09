export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan)]">
              The Friday Drop
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Every Alaska show, in your inbox before the weekend.
            </h2>
            <p className="mt-3 text-muted-foreground">
              One email. No fluff. Just what's worth leaving the house for.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@alaska.com"
              className="w-full rounded-full border border-border bg-background/80 px-5 py-3 text-sm outline-none ring-0 backdrop-blur placeholder:text-muted-foreground focus:border-[var(--neon)]"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-neon-foreground shadow-[0_10px_40px_-10px_var(--neon)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
