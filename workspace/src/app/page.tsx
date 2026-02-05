import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockProducts } from "@/lib/mock-data";

const categories = [
  "Workwear",
  "Outerwear",
  "Soft Essentials",
  "City Layers",
  "Resort",
];

const features = [
  {
    title: "Curated drops",
    copy: "Launch capsule collections with a single upload and instant live previews.",
  },
  {
    title: "Inventory clarity",
    copy: "Track active, draft, and low-stock items from one visual dashboard.",
  },
  {
    title: "Studio-ready",
    copy: "Craft rich product stories with color, size, and styling fields built in.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,#f7e8d2_0%,transparent_70%)] opacity-70" />
          <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,#e2d3bf_0%,transparent_70%)] opacity-60" />
        </div>
        <header className="sticky top-0 z-20 border-b border-border/60 bg-white/70 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,#15120f,#4b4037)] text-sm font-semibold text-white">
                VA
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Vero Atelier
                </p>
                <p className="font-[var(--font-display)] text-lg">Storefront Suite</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <span>Collections</span>
              <span>Lookbook</span>
              <span>Workflow</span>
              <span>Support</span>
            </nav>
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost" className="hidden md:inline-flex">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="/dashboard">Open Dashboard</Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit rounded-full px-4 py-1 text-xs tracking-[0.2em]">
              NEW SEASON SYSTEM
            </Badge>
            <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] text-foreground animate-[float-in_0.9s_ease-out]">
              Design, upload, and launch collections in one calm space.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Vero Atelier blends a storefront aesthetic with a management studio. Build
              product stories, manage inventory, and publish with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/dashboard/upload">Upload Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/dashboard">View Products</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div>
                <p className="text-2xl font-semibold text-foreground">128</p>
                <p>Live items</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">24</p>
                <p>Draft capsules</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">8</p>
                <p>Weekly drops</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Live merchandising board</p>
              <Badge variant="secondary" className="rounded-full">Live</Badge>
            </div>
            <div className="grid gap-4">
              {mockProducts.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-white px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.category} · {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
            <Separator />
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Weekly capsule focus</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="rounded-full">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-16">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Workflow layers
          </p>
          <h2 className="font-[var(--font-display)] text-3xl">Purpose-built for modern ateliers</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="rounded-3xl border-border/60 bg-white/90">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {feature.copy}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">New arrivals</p>
            <h3 className="font-[var(--font-display)] text-2xl">Studio edits for the season</h3>
          </div>
          <Button variant="outline" className="rounded-full">Browse all</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {mockProducts.map((product) => (
            <Card key={product.id} className="rounded-3xl border-border/60 bg-white">
              <CardHeader className="space-y-3">
                <div className="h-40 rounded-2xl bg-[linear-gradient(135deg,#efe6d8,#d9c9b5)]" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{product.category}</span>
                  <Badge variant={product.status === "active" ? "default" : "secondary"}>
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{product.color}</span>
                <span className="font-semibold">${product.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 rounded-[32px] bg-[linear-gradient(120deg,#14110f,#3c332b)] p-10 text-white md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Launch readiness</p>
            <h3 className="font-[var(--font-display)] text-3xl">
              Ready to publish your next drop?
            </h3>
            <p className="text-sm text-white/70">
              Move from design to live inventory with a single flow. Manage teams, approval
              steps, and product metadata in one place.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90">
              <Link href="/dashboard/settings">Configure studio settings</Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">Next capsule preview</p>
            <p className="mt-4 text-4xl font-semibold">Autumn Field Notes</p>
            <p className="mt-2 text-sm text-white/70">
              16 items · 4 looks · Scheduled drop
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-[var(--font-display)] text-xl">Vero Atelier</p>
            <p className="text-sm text-muted-foreground">Clothing store management suite.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>About</span>
            <span>Shipping</span>
            <span>Support</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
