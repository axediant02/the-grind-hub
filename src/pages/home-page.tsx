import { ArrowRight, FolderTree, LayoutDashboard, Palette } from 'lucide-react'

import { AppShell } from '@/components/layout/app-shell'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const starterCards = [
  {
    title: 'Reusable UI primitives',
    description: 'Keep shared components in src/components/ui from the start.',
    icon: LayoutDashboard,
  },
  {
    title: 'Clear project structure',
    description:
      'Separate layouts, pages, hooks, and utilities before the app grows.',
    icon: FolderTree,
  },
  {
    title: 'Opinionated defaults',
    description:
      'Use linting, formatting, aliases, and CSS tokens without redoing setup.',
    icon: Palette,
  },
]

export function HomePage() {
  return (
    <AppShell>
      <section className="container py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm">
              Save this repo as your GitHub template
            </span>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                React starter with the frontend stack you reach for every time.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, Lucide
                icons, ESLint, and Prettier are already wired together.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Use as template
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Add your first feature
              </Button>
            </div>
          </div>

          <Card className="border-border/80 bg-card/90 shadow-lg shadow-slate-200/40">
            <CardHeader>
              <CardTitle>Template checklist</CardTitle>
              <CardDescription>
                Keep these defaults so new projects start clean.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-secondary p-4 text-sm text-secondary-foreground">
                `npm install`
              </div>
              <div className="rounded-lg bg-secondary p-4 text-sm text-secondary-foreground">
                `npm run dev`
              </div>
              <div className="rounded-lg bg-secondary p-4 text-sm text-secondary-foreground">
                `npx shadcn@latest add button card dialog`
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Replace this page with your first route or landing screen.
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="container pb-16 sm:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {starterCards.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="border-border/80 bg-white/80 backdrop-blur"
            >
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  )
}
