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
import { mockProducts } from "@/lib/mock-data";

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
    </div>
  );
}
