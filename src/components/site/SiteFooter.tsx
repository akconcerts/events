export function SiteFooter() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-neon font-display text-xs font-bold text-neon-foreground">
            AK
          </span>
          <span className="font-display font-bold">akconcerts</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AK Concerts · Alaska's live entertainment network
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Submit Event</a>
          <a href="#" className="hover:text-foreground">Newsletter</a>
          <a href="#" className="hover:text-foreground">About</a>
        </div>
      </div>
    </footer>
  );
}
