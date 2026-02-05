import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockNotifications, mockProducts } from "@/lib/mock-data";

const stats = [
  { label: "Active products", value: "128" },
  { label: "Draft items", value: "24" },
  { label: "Low stock", value: "7" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="rounded-3xl border-border/60 bg-white/90">
            <CardHeader className="pb-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Updated moments ago
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-3xl border-border/60 bg-white/95">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Product list</CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage pricing, status, and inventory in one place.
            </p>
          </div>
          <Button variant="outline" className="rounded-full">Export</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Color / Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Inventory</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {product.color} · {product.size}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.status === "active" ? "default" : "secondary"}
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{product.inventory}</TableCell>
                  <TableCell className="text-right">${product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Admin activity</CardTitle>
              <p className="text-sm text-muted-foreground">
                Live notifications from orders, inventory, and customer activity.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/dashboard/notifications">View all</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockNotifications.slice(0, 4).map((note) => (
              <div
                key={note.id}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-white px-4 py-3"
              >
                <div>
                  <p className="font-medium text-foreground">{note.title}</p>
                  <p className="text-sm text-muted-foreground">{note.detail}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {note.channel}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={note.level === "critical" ? "destructive" : "secondary"}
                  >
                    {note.level}
                  </Badge>
                  <p className="mt-2 text-xs text-muted-foreground">{note.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader>
            <CardTitle className="text-xl">Quick alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-sm">
              <p className="font-medium">3 orders need fulfillment</p>
              <p className="text-muted-foreground">Average fulfillment time: 1h 14m</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-sm">
              <p className="font-medium">2 SKUs below reorder point</p>
              <p className="text-muted-foreground">Review inventory thresholds today.</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-sm">
              <p className="font-medium">1 payment retry pending</p>
              <p className="text-muted-foreground">Contact customer for payment update.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
