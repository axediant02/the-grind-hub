import { LayoutTemplate, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <LayoutTemplate className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Frontend Starter
            </p>
            <p className="text-xs text-muted-foreground">
              React, Vite, Tailwind, shadcn/ui
            </p>
          </div>
        </div>

        <Button variant="secondary" size="sm">
          <Sparkles className="h-4 w-4" />
          Start fast
        </Button>
      </div>
    </header>
  )
}
