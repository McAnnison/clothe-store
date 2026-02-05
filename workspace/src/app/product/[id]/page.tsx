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
import { mockProducts } from "@/lib/mock-data";

const toneClasses: Record<string, string> = {
  sand: "from-[#efe6d8] to-[#d9c9b5]",
  clay: "from-[#f0dfcf] to-[#d6c3ad]",
  slate: "from-[#e1e7ee] to-[#c4ceda]",
  olive: "from-[#e4e8d7] to-[#c2cbb1]",
  ink: "from-[#e5e2e8] to-[#c4c0cc]",
  rose: "from-[#f3dde2] to-[#d8b7bf]",
  mist: "from-[#e6eef0] to-[#c7d3d9]",
};

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = mockProducts.find((item) => item.id === params.id);

  if (!product) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-[var(--font-display)] text-3xl">Product not found</h1>
        <p className="text-muted-foreground">
          The item you are looking for is not available right now.
        </p>
        <Button asChild className="rounded-full">
          <Link href="/shop">Back to shop</Link>
        </Button>
      </div>
    );
  }

  const related = mockProducts.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Vero Atelier
            </p>
            <h1 className="font-[var(--font-display)] text-3xl">{product.name}</h1>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/shop">Back to shop</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div
            className={`h-[420px] rounded-[32px] bg-gradient-to-br ${toneClasses[product.tone ?? "sand"]}`}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Description
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Materials
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.materials}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-3xl border-border/60 bg-white/95">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="rounded-full" variant="secondary">
                  {product.category}
                </Badge>
                <Badge className="rounded-full" variant="secondary">
                  {product.tag ?? "Ready"}
                </Badge>
              </div>
              <CardTitle className="text-3xl">${product.price}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {product.rating}★ ({product.reviews} reviews)
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Color
                </p>
                <p className="text-sm font-medium">{product.color}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Size
                </p>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Quantity
                </p>
                <Input type="number" min={1} defaultValue={1} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full px-8">Add to cart</Button>
                <Button variant="outline" className="rounded-full px-8">
                  Order now
                </Button>
              </div>
              <Separator />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Free returns within 14 days.</p>
                <p>Delivery in 3-5 business days.</p>
                <p>Order concierge available 24 hours.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 bg-white/95">
            <CardHeader>
              <CardTitle className="text-xl">Order assistance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Place a custom order with fit notes, preferred delivery, and styling
                requests.
              </p>
              <Button className="w-full rounded-full">Request custom order</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="font-[var(--font-display)] text-2xl">You may also like</h2>
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/shop">View all</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Card key={item.id} className="rounded-3xl border-border/60 bg-white">
              <CardHeader className="space-y-3">
                <Link
                  href={`/product/${item.id}`}
                  className={`h-40 rounded-2xl bg-gradient-to-br ${toneClasses[item.tone ?? "sand"]}`}
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{item.category}</span>
                  <Badge variant="secondary">{item.tag ?? "Ready"}</Badge>
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.color}</span>
                <span className="font-semibold">${item.price}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
