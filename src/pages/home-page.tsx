import {
  ArrowRight,
  Coffee,
  Cookie,
  Gift,
  Heart,
} from 'lucide-react'

import coffeeImage from '@/assets/coffee.jpg'
import blueberryImage from '@/assets/customer-favorites-assets/blueberry-1.png'
import brownieImage from '@/assets/customer-favorites-assets/brownies-1.png'
import chocoImage from '@/assets/customer-favorites-assets/choco-1.png'
import ghCoffeeImage from '@/assets/customer-favorites-assets/gh-coffee.png'
import pastryImage from '@/assets/customer-favorites-assets/pastry-1.png'
import waffleImage from '@/assets/customer-favorites-assets/waffle.png'
import { AppShell } from '@/components/layout/app-shell'
import { Button } from '@/components/ui/button'

const featurePills = [
  {
    label: 'Specialty coffee',
    icon: Coffee,
  },
  {
    label: 'Handmade bakes',
    icon: Cookie,
  },
  {
    label: 'Custom gift boxes',
    icon: Gift,
  },
]

const favorites = [
  {
    title: 'Iced Spanish Latte',
    description: 'Smooth, creamy, and perfect for an afternoon pick-me-up.',
    image: ghCoffeeImage,
    tag: 'Best Seller',
    action: 'Order Drink',
  },
  {
    title: 'Almond Croissant',
    description: 'Flaky, buttery layers made for coffee breaks and slow mornings.',
    image: pastryImage,
    tag: 'Perfect with Coffee',
    action: 'Add to Order',
  },
  {
    title: 'Blueberry Cheesecake Tub',
    description: 'Creamy cheesecake finished with a sweet berry topping.',
    image: blueberryImage,
    tag: 'Gift Favorite',
    action: 'Reserve Tub',
  },
  {
    title: 'Chocolate Brownies',
    description: 'Rich, dense squares with a soft center and deep cocoa flavor.',
    image: brownieImage,
    tag: 'Sweet Treat',
    action: 'Get Brownies',
  },
  {
    title: 'Chocolate Drip Cake',
    description: 'A celebration-ready cake with bold chocolate layers.',
    image: chocoImage,
    tag: 'Celebration Pick',
    action: 'Customize Cake',
  },
  {
    title: 'Brunch Waffles',
    description: 'Golden, fluffy waffles made for syrup, fruit, and sharing.',
    image: waffleImage,
    tag: 'Brunch Favorite',
    action: 'See Waffles',
  },
]

const bundles = [
  {
    label: 'Good for 1',
    title: 'Morning Grind Set',
    description: 'Hot coffee + croissant.',
    action: 'Order Set',
  },
  {
    label: 'Good for 1',
    title: 'Iced Coffee Break',
    description: 'Iced latte + brownie or cookie.',
    action: 'Order Set',
    featured: true,
  },
  {
    label: 'Good for 1',
    title: 'Study Buddy Set',
    description: 'Coffee + warm waffle of choice.',
    action: 'Order Set',
  },
  {
    label: 'Good for 2',
    title: 'Sweet Date Box',
    description: 'Two drinks + a dessert box.',
    action: 'Reserve Box',
  },
  {
    label: 'Office Favorite',
    title: 'Office Treat Box',
    description: 'Bottled cold brews + cookies & brownies.',
    action: 'Order for Group',
    featured: true,
  },
  {
    label: 'Gift Ready',
    title: 'Celebration Box',
    description: 'Dessert tub + ribbon packaging + optional flowers.',
    action: 'Customize Gift',
  },
]

export function HomePage() {
  return (
    <AppShell>
      <section className="container py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive shadow-sm ring-1 ring-destructive/15">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              Freshly baked daily . Locally brewed
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[0.92] tracking-tight text-primary sm:text-6xl lg:text-[5.25rem]">
                Coffee, pastries
                <br />
                &amp;{' '}
                <span className="text-accent">
                  sweet gifts
                </span>{' '}
                for your daily grind.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                Hot coffee, iced drinks, frappes, croissants, waffles, pasta,
                cheesecake tubs, bottled cold brew, and gift-ready dessert boxes
                made for everyday cravings and special moments.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full px-7" size="lg">
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                className="rounded-full border-2 border-primary/80 bg-background/70 px-7 text-primary hover:bg-primary hover:text-primary-foreground"
                size="lg"
                variant="outline"
              >
                View Menu
              </Button>
              <Button
                className="rounded-full bg-destructive px-7 text-destructive-foreground hover:bg-destructive/90"
                size="lg"
              >
                <Gift className="h-4 w-4" />
                Reserve a Gift Box
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {featurePills.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-2 top-0 z-20 -translate-y-1/2 rotate-6 rounded-full bg-destructive px-5 py-2 text-sm font-semibold text-destructive-foreground shadow-lg shadow-destructive/20">
              <Heart className="mr-2 inline-block h-4 w-4 fill-current" />
              New Valentine Box
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-card p-3 shadow-[0_24px_80px_-28px_hsl(var(--primary)/0.45)] ring-1 ring-border/60">
              <img
                alt="Coffee and baked goods from The Grind Hub"
                className="h-[540px] w-full rounded-[2rem] object-cover object-center sm:h-[620px] lg:h-[720px]"
                src={coffeeImage}
              />

              <div className="absolute left-8 top-8 rounded-full bg-card/95 px-4 py-2 text-sm text-foreground shadow-md ring-1 ring-border/60 backdrop-blur">
                Iced Spanish Latte
              </div>
              <div className="absolute right-4 top-1/3 rounded-full bg-card/95 px-4 py-2 text-sm text-foreground shadow-md ring-1 ring-border/60 backdrop-blur">
                Almond Croissant
              </div>
              <div className="absolute left-4 bottom-24 rounded-full bg-card/95 px-4 py-2 text-sm text-foreground shadow-md ring-1 ring-border/60 backdrop-blur">
                Blueberry Cheesecake Tub
              </div>
              <div className="absolute bottom-8 right-6 rounded-full bg-card/95 px-4 py-2 text-sm text-foreground shadow-md ring-1 ring-border/60 backdrop-blur">
                Gift-Ready Boxes
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-background/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Customer Favorites
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
            The treats people keep coming back for
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            From creamy iced coffee to fresh pastries and shareable dessert
            tubs, these are the everyday classics of The Grind.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((favorite) => (
            <article
              key={favorite.title}
              className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-[0_16px_50px_-28px_hsl(var(--primary)/0.38)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  alt={favorite.title}
                  className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={favorite.image}
                />
                <div className="absolute left-3 top-3 rounded-full bg-destructive px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-destructive-foreground shadow-sm">
                  {favorite.tag}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary">
                    {favorite.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {favorite.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  {favorite.action}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Bundles &amp; Combos
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
            Easy picks for every craving
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Ready-made sets for breakfast, merienda, study sessions, coffee
            dates, office treats and special occasions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bundles.map((bundle) => (
            <article
              key={bundle.title}
              className={[
                'flex min-h-[230px] flex-col justify-between rounded-[2rem] border p-8 shadow-[0_16px_45px_-30px_hsl(var(--primary)/0.45)] transition-transform duration-300 hover:-translate-y-1',
                bundle.featured
                  ? 'border-primary/15 bg-primary text-primary-foreground'
                  : 'border-border/60 bg-card text-card-foreground',
              ].join(' ')}
            >
              <div className="space-y-5">
                <div
                  className={[
                    'inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm',
                    bundle.featured
                      ? 'bg-secondary/20 text-primary-foreground'
                      : 'bg-destructive/10 text-destructive',
                  ].join(' ')}
                >
                  {bundle.label}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-semibold tracking-tight">
                    {bundle.title}
                  </h3>
                  <p
                    className={[
                      'text-sm leading-6',
                      bundle.featured
                        ? 'text-primary-foreground/85'
                        : 'text-muted-foreground',
                    ].join(' ')}
                  >
                    {bundle.description}
                  </p>
                </div>
              </div>

              <Button
                className={[
                  'mt-8 w-fit rounded-full px-6',
                  bundle.featured
                    ? 'bg-background text-primary hover:bg-background/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90',
                ].join(' ')}
                size="sm"
              >
                {bundle.action}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  )
}
