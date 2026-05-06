import { Button } from '@/components/ui/button'

const navItems = ['Menu', 'Best Sellers', 'Gift Boxes', 'Bundles', 'Visit Us']

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center gap-6">
        <a href="/" className="flex items-center gap-3">
          <img
            alt="The Grind Hub"
            className="h-11 w-11 rounded-full object-cover shadow-sm ring-1 ring-border/60"
            src="/logo.png"
          />
          <div className="leading-none">
            <p className="font-serif text-xl font-semibold tracking-tight">
              The Grind Hub
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-muted-foreground md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <Button className="rounded-full px-6" size="sm">
            Order Now
          </Button>
        </div>
      </div>
    </header>
  )
}
