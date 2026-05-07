export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-6">
      <div className="container flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          The Grind Hub cafe in Barangay Bato, Toledo City. Coffee, pastries,
          desserts, waffles, pasta, and gift boxes.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-foreground" href="#menu">
            Menu
          </a>
          <a className="hover:text-foreground" href="#gift-boxes">
            Gift Boxes
          </a>
          <a className="hover:text-foreground" href="#visit-us">
            Visit Us
          </a>
        </div>
      </div>
    </footer>
  )
}
