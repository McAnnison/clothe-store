import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { categoryOptions, mockProducts } from "@/lib/mock-data";

const toneClasses: Record<string, string> = {
  sand: "from-[#efe6d8] to-[#d9c9b5]",
  clay: "from-[#f0dfcf] to-[#d6c3ad]",
  slate: "from-[#e1e7ee] to-[#c4ceda]",
  olive: "from-[#e4e8d7] to-[#c2cbb1]",
  ink: "from-[#e5e2e8] to-[#c4c0cc]",
  rose: "from-[#f3dde2] to-[#d8b7bf]",
  mist: "from-[#e6eef0] to-[#c7d3d9]",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Vero Atelier
            </p>
            <h1 className="font-[var(--font-display)] text-3xl">Shop the collection</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Input placeholder="Search for linen, knit, skirt" className="w-60" />
            <Button asChild className="rounded-full">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-6">
          <Card className="rounded-3xl border-border/60 bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg">Filter by category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categoryOptions.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="w-full justify-start rounded-full"
                >
                  {category}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg">Order concierge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Need a full look assembled? Share your size and timeline.</p>
              <Button className="w-full rounded-full">Request styling help</Button>
            </CardContent>
          </Card>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge className="rounded-full" variant="secondary">
                {mockProducts.length} items
              </Badge>
              <span className="text-sm text-muted-foreground">
                Ready to ship and order-ready pieces.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Newest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="rounded-full">Filters</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mockProducts.map((product) => (
              <Card key={product.id} className="rounded-3xl border-border/60 bg-white">
                <CardHeader className="space-y-3">
                  <Link
                    href={`/product/${product.id}`}
                    className={`h-44 rounded-2xl bg-gradient-to-br ${toneClasses[product.tone ?? "sand"]}`}
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{product.category}</span>
                    <Badge variant="secondary">{product.tag ?? "Ready"}</Badge>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{product.color}</span>
                    <span className="font-semibold">${product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button asChild className="rounded-full">
                      <Link href={`/product/${product.id}`}>View details</Link>
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      Order now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator />

          <Card className="rounded-3xl border-border/60 bg-white/90">
            <CardContent className="flex flex-wrap items-center justify-between gap-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Newsletter
                </p>
                <p className="font-[var(--font-display)] text-2xl">
                  Get early access to new drops
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Input placeholder="Your email" className="w-60" />
                <Button className="rounded-full">Notify me</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
