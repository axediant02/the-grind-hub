import {
  ArrowRight,
  Clock3,
  Coffee,
  Cookie,
  Gift,
  Heart,
  MapPin,
  Star,
} from 'lucide-react'
import { type ReactNode, useEffect, useRef, useState } from 'react'

import coffeeImage from '@/assets/coffee.jpg'
import blueberryImage from '@/assets/customer-favorites-assets/blueberry-1.png'
import brownieImage from '@/assets/customer-favorites-assets/brownies-1.png'
import chocoImage from '@/assets/customer-favorites-assets/choco-1.png'
import customerFlexImage from '@/assets/customer-favorites-assets/customer-flex.jpg'
import ghCoffeeImage from '@/assets/customer-favorites-assets/gh-coffee.png'
import giftBoxImage from '@/assets/customer-favorites-assets/gift.jpg'
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

const giftBoxes = [
  {
    title: 'Coffee & Flower Box',
    description:
      'Coffee cup, fresh flowers, ribbon and sweets in one ready-to-give box.',
  },
  {
    title: 'Dessert Tub Gift Set',
    description:
      'A creamy cheesecake or chocolate dessert tub with gift packaging.',
  },
  {
    title: 'Valentine Coffee Box',
    description:
      'A themed drink-and-dessert set for romantic surprises.',
  },
  {
    title: 'Just for You Tray',
    description:
      'A small dessert tray with ribbon for thoughtful, last-minute gifts.',
  },
  {
    title: 'Office Dessert Box',
    description:
      'Cookies, brownies and bottled drinks for groups and teams.',
  },
]

const testimonials = [
  {
    quote: `Spanish latte two-shot is delicious.
And here we also have Nespresso capsule coffee.
You can enjoy a variety of exotic coffee flavors.
Enjoy Nespresso Crema.`,
    author: 'Daniel Lee SB',
  },
  {
    quote: 'A perfect place to relax and enjoy dessert and coffee',
    author: 'Freych Orongan',
  },
  {
    quote: 'A good place to chill and play boardgames',
    author: 'Louilla Delos Reyes',
  },
  {
    quote: 'It was great. Super yummy!!!😋😍',
    author: 'Sheryl Panugaling',
  },
]

const menuCategories = [
  {
    id: 'hot-drinks',
    label: 'Hot Drinks',
    eyebrow: 'Warm and classic',
    title: 'Comfort in a cup.',
    description:
      'Freshly brewed coffees and barista favorites for slow mornings and late work sessions.',
    items: [
      { name: 'Drip Coffee', price: '60' },
      { name: 'Americano', price: '100' },
      { name: 'Latte', price: '120' },
      { name: 'Cappuccino', price: '135' },
      { name: 'Nespresso Creations', price: '135' },
    ],
  },
  {
    id: 'cold-drinks',
    label: 'Cold Drinks',
    eyebrow: 'Iced and blended',
    title: 'Chill drinks that still taste rich.',
    description:
      'Iced coffees, frappes, and espresso-based coolers for warm afternoons and dessert pairings.',
    items: [
      { name: 'Americano', price: '120' },
      { name: 'Nespresso', price: '140 / 165' },
      { name: 'Latte', price: '130 / 155' },
      { name: 'Spanish Latte', price: '135 / 160' },
      { name: 'Cappuccino', price: '135 / 160' },
    ],
  },
  {
    id: 'non-coffee',
    label: 'Non-Coffee',
    eyebrow: 'Sweet and smooth',
    title: 'For matcha, chocolate, and tea lovers.',
    description:
      'A softer menu lane with creamy drinks and comforting tea options for everyone.',
    items: [
      { name: 'Matcha Latte', price: '125 / 160' },
      { name: 'Chocolate', price: '120 / 155' },
      { name: 'White Chocolate', price: '120 / 155' },
      { name: 'Tea', price: '75' },
      { name: 'Shared Serenity', price: '150' },
    ],
  },
  {
    id: 'bites',
    label: 'Bites & Pastries',
    eyebrow: 'Savory and sweet',
    title: 'Little plates that go with coffee.',
    description:
      'Pastries, cakes, sandwiches, and snacks for brunch, mid-day breaks, or sharing at the table.',
    items: [
      { name: 'Pasta Alfredo / Chicken Pesto', price: '150' },
      { name: 'Chocolate Cake', price: '140' },
      { name: 'S\'mores', price: '50' },
      { name: 'Brownie', price: '35' },
      { name: 'Cheesecake', price: '120' },
      { name: 'Tuna Sandwich', price: '80' },
      { name: 'Cheese Pimiento', price: '80' },
      { name: 'Ham and Cheese', price: '100' },
    ],
  },
  {
    id: 'waffles',
    label: 'Waffles',
    eyebrow: 'Fresh off the iron',
    title: 'Simple, loaded, or extra indulgent.',
    description:
      'A small menu built for breakfast, merienda, or dessert with customizable toppings.',
    items: [
      { name: 'Waffle Plain', price: '65' },
      { name: 'Waffle with Nutella', price: '85' },
      { name: 'Waffle with Biscoff', price: '85' },
      { name: 'Waffle with Peanut Butter', price: '80' },
    ],
  },
]

const mapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9525480213315!2d123.59325167585806!3d10.345679466989518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a96dda5c1d3483%3A0x470345e58232a663!2sThe%20Grind%20Hub!5e0!3m2!1sen!2sph!4v1778086718080!5m2!1sen!2sph'

const mapsLink = 'https://maps.app.goo.gl/xNaCVavJG9gmoB2AA'

type RevealProps = {
  children: ReactNode
  className?: string
  initialVisible?: boolean
}

function Reveal({
  children,
  className = '',
  initialVisible = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(initialVisible)

  useEffect(() => {
    const node = ref.current

    if (!node || initialVisible) {
      if (initialVisible) {
        const frame = requestAnimationFrame(() => setIsVisible(true))
        return () => cancelAnimationFrame(frame)
      }

      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [initialVisible])

  return (
    <div
      ref={ref}
      className={['reveal-item', className].filter(Boolean).join(' ')}
      data-visible={isVisible}
    >
      {children}
    </div>
  )
}

export function HomePage() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)
  const [giftImageLoaded, setGiftImageLoaded] = useState(false)
  const [storyImageLoaded, setStoryImageLoaded] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedMenuCategory, setSelectedMenuCategory] = useState(
    menuCategories[0].id,
  )
  const activeMenuCategory =
    menuCategories.find(({ id }) => id === selectedMenuCategory) ??
    menuCategories[0]

  return (
    <AppShell>
      <Reveal initialVisible className="container py-10 sm:py-14 lg:py-16">
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
              {!heroImageLoaded ? (
                <div className="absolute inset-3 animate-pulse rounded-[2rem] bg-muted/70" />
              ) : null}
              <img
                alt="Coffee and baked goods from The Grind Hub"
                className={[
                  'h-[540px] w-full rounded-[2rem] object-cover object-center transition-opacity duration-500 sm:h-[620px] lg:h-[720px]',
                  heroImageLoaded ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                onLoad={() => setHeroImageLoaded(true)}
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
      </Reveal>

      <Reveal className="bg-[#37231b] py-16 sm:py-20 lg:py-24">
        <div className="container text-center text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Menu
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[4.5rem]">
            Choose what you&apos;re craving today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
            Tap a category to explore drinks and bites. Prices can be updated
            anytime without changing the layout.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {menuCategories.map((category) => {
              const isActive = category.id === selectedMenuCategory

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedMenuCategory(category.id)}
                  className={[
                    'rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300',
                    isActive
                      ? 'border-accent bg-accent text-primary shadow-lg shadow-black/20'
                      : 'border-white/15 bg-white/5 text-primary-foreground/75 hover:border-white/25 hover:bg-white/10 hover:text-primary-foreground',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <article className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-left shadow-[0_20px_60px_-36px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                {activeMenuCategory.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
                {activeMenuCategory.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-primary-foreground/75">
                {activeMenuCategory.description}
              </p>

              <div className="mt-8 space-y-3">
                {activeMenuCategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3"
                  >
                    <p className="text-lg font-medium text-primary-foreground">
                      {item.name}
                    </p>
                    <div className="flex items-baseline gap-2 text-primary-foreground">
                      <span className="text-sm text-primary-foreground/60">
                        ₱
                      </span>
                      <span className="font-serif text-2xl leading-none">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-background px-6 text-primary hover:bg-background/90">
                  Order This Category
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  className="rounded-full border-2 border-white/20 bg-transparent px-6 text-primary-foreground hover:bg-white/10"
                  variant="outline"
                >
                  Ask for Availability
                </Button>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {menuCategories.map((category) => {
                const isActive = category.id === selectedMenuCategory

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedMenuCategory(category.id)}
                    className={[
                      'group rounded-[2rem] border p-5 text-left shadow-[0_16px_50px_-34px_rgba(0,0,0,0.55)] transition-all duration-300',
                      isActive
                        ? 'border-accent bg-primary/95 text-primary-foreground'
                        : 'border-white/10 bg-white/5 text-primary-foreground/85 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10',
                    ].join(' ')}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/90">
                          {category.eyebrow}
                        </p>
                        <h4 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                          {category.label}
                        </h4>
                      </div>
                      <div
                        className={[
                          'flex h-11 w-11 items-center justify-center rounded-full border',
                          isActive
                            ? 'border-accent bg-accent text-primary'
                            : 'border-white/10 bg-white/5 text-accent',
                        ].join(' ')}
                      >
                        <Heart className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      {category.items.slice(0, 3).map((item) => (
                        <div
                          key={item.name}
                          className="flex items-baseline justify-between gap-4 text-sm"
                        >
                          <span>{item.name}</span>
                          <span className="font-semibold text-accent">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="container pb-16 sm:pb-20 lg:pb-24">
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
      </Reveal>

      <Reveal className="container pb-16 sm:pb-20 lg:pb-24">
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
      </Reveal>

      <Reveal className="bg-gradient-to-b from-background via-secondary/15 to-background py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] bg-[#f7c9d3]/70 p-6 shadow-[0_22px_70px_-35px_hsl(var(--primary)/0.4)] ring-1 ring-border/60">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#f9d9df] p-4">
                  {!giftImageLoaded ? (
                    <div className="absolute inset-4 animate-pulse rounded-[1.5rem] bg-background/70" />
                  ) : null}
                  <img
                    alt="Gift-ready dessert box"
                    className={[
                      'h-[420px] w-full object-contain object-center transition-opacity duration-500 sm:h-[520px]',
                      giftImageLoaded ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                    onLoad={() => setGiftImageLoaded(true)}
                    src={giftBoxImage}
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 right-6 max-w-[220px] rounded-[1.5rem] bg-destructive px-5 py-5 text-destructive-foreground shadow-xl shadow-destructive/20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-destructive-foreground/90">
                  Limited seasonal designs
                </p>
                <p className="mt-3 text-sm leading-6 text-destructive-foreground/90">
                  Message us early to reserve.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-destructive">
                  Send Something Sweet
                </p>
                <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1] tracking-tight text-primary sm:text-5xl">
                  Gift-ready boxes, made with love.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Make someone&apos;s day with ribboned trays, coffee-and-flower
                  sets and seasonal sweets made for birthdays, anniversaries,
                  Valentine&apos;s Day, thank-you gifts and small celebrations.
                </p>
              </div>

              <div className="space-y-4">
                {giftBoxes.map((box) => (
                  <article
                    key={box.title}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-border/60 bg-card px-5 py-4 shadow-[0_12px_40px_-28px_hsl(var(--primary)/0.35)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <Gift className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-primary">
                        {box.title}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {box.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button className="rounded-full px-6" size="lg">
                  <Gift className="h-4 w-4" />
                  Reserve a Gift Box
                </Button>
                <Button
                  className="rounded-full border-2 border-primary/80 bg-background/70 px-6 text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                  variant="outline"
                >
                  Message for Custom Orders
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="container py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-primary sm:text-5xl lg:text-[4.4rem]">
              Made for your
              <span className="text-accent"> everyday grind.</span>
            </h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              The Grind is a cozy local caf&eacute; serving coffee, breads,
              pastries, desserts, waffles, pasta and gift-ready treats. Whether
              you&apos;re starting your morning, taking an afternoon break,
              studying, working or surprising someone special, we make every
              cup and bite feel comforting, personal, and worth coming back
              for.
            </p>
            <Button className="rounded-full px-7" size="lg">
              Visit Our Caf&eacute;
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_24px_70px_-32px_hsl(var(--primary)/0.4)] ring-1 ring-border/60">
              {!storyImageLoaded ? (
                <div className="absolute inset-0 animate-pulse rounded-[2.25rem] bg-muted/70" />
              ) : null}
              <img
                alt="The Grind Hub cafe interior with guests seated and warm lighting"
                className={[
                  'h-[420px] w-full object-cover object-center transition-opacity duration-500 sm:h-[520px] lg:h-[560px]',
                  storyImageLoaded ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                onLoad={() => setStoryImageLoaded(true)}
                src={customerFlexImage}
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-primary py-20 sm:py-24 lg:py-28">
        <div className="container text-center text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Loved Locally
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[4.5rem]">
            Loved by coffee
            <br />
            &amp; dessert people.
          </h2>

          <div className="mt-14 grid gap-5 text-left md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_-32px_rgba(0,0,0,0.55)] backdrop-blur-sm"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-5 font-serif text-xl leading-8 text-primary-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm text-primary-foreground/70">
                  &mdash; {testimonial.author}
                </p>
              </article>
            ))}
          </div>

          <Button className="mt-14 rounded-full bg-background px-7 text-primary hover:bg-background/90">
            See more on Instagram
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>

      <Reveal className="container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Find Us
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
            Visit The Grind
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Drop by for a coffee, swing through for pickup, or message us to
            reserve a gift box.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-[0_24px_80px_-40px_hsl(var(--primary)/0.38)]">
            {!mapLoaded ? (
              <div className="absolute inset-0 z-10 animate-pulse rounded-[2.5rem] bg-muted/70" />
            ) : null}
            <iframe
              allowFullScreen
              className={[
                'h-[420px] w-full sm:h-[520px] lg:h-full lg:min-h-[640px] transition-opacity duration-500',
                mapLoaded ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
              onLoad={() => setMapLoaded(true)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
              title="The Grind Hub location on Google Maps"
            />
          </div>

          <div className="rounded-[2.5rem] bg-primary p-8 text-primary-foreground shadow-[0_24px_80px_-40px_hsl(var(--primary)/0.5)] sm:p-10">
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-primary-foreground/60">
                      Address
                    </p>
                    <p className="mt-1 text-base font-semibold leading-7">
                      The Grind Hub
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-accent">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-primary-foreground/60">
                      Open daily
                    </p>
                    <p className="mt-1 text-base font-semibold leading-7">
                      7:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-background px-6 text-primary hover:bg-background/90"
                  size="lg"
                >
                  <a href={mapsLink} rel="noreferrer" target="_blank">
                    Get Directions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  className="w-full rounded-full bg-destructive px-6 text-destructive-foreground hover:bg-destructive/90"
                  size="lg"
                >
                  Order for Pickup
                </Button>
                <Button
                  className="w-full rounded-full border-2 border-background/30 bg-transparent px-6 text-primary-foreground hover:bg-background/10 hover:text-primary-foreground"
                  size="lg"
                  variant="outline"
                >
                  Message Us
                </Button>
              </div>

              <p className="pt-2 text-sm leading-6 text-primary-foreground/70">
                For gift boxes and bulk orders, please message us in advance.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </AppShell>
  )
}
