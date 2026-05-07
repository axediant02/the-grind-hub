import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Gift Boxes', href: '#gift-boxes' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Visit Us', href: '#visit-us' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center gap-6">
        <a href="/" className="flex items-center gap-3">
          <img
            alt="The Grind Hub cafe logo in Barangay Bato, Toledo City"
            className="h-11 w-11 rounded-full object-cover shadow-sm ring-1 ring-border/60"
            src="/logo.png"
          />
          <div className="leading-none">
            <p className="font-serif text-xl font-semibold tracking-tight">
              The Grind Hub
            </p>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              Bato, Toledo City
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-muted-foreground md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto">
          <Button asChild className="rounded-full px-6" size="sm">
            <a href="#menu" aria-label="View The Grind Hub cafe menu">
              Order Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
