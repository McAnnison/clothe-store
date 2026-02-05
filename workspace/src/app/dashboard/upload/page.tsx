"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { categoryOptions } from "@/lib/mock-data";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function UploadPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-3xl border-border/60 bg-white/95">
        <CardHeader>
          <CardTitle className="text-2xl">Upload a new product</CardTitle>
          <p className="text-sm text-muted-foreground">
            This is a mock flow for now. Wire it to a real storage and database later.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Product name
              </label>
              <Input placeholder="Linen Drift Overshirt" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Price
              </label>
              <Input placeholder="$128" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Category
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Size
              </label>
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
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Status
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Draft" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Description
            </label>
            <Textarea
              placeholder="Describe fabrics, fit, and styling details."
              className="min-h-[140px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Upload imagery
            </label>
            <div className="rounded-3xl border border-dashed border-border/80 bg-muted/30 p-6 text-sm text-muted-foreground">
              Drag and drop lookbook images here, or click to upload.
            </div>
            <Input type="file" multiple />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full px-8">Save product</Button>
            <Button variant="outline" className="rounded-full px-8">Save as draft</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader>
            <CardTitle className="text-xl">Preview card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-40 rounded-2xl bg-[linear-gradient(135deg,#e7d9c7,#f5efe6)]" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Untitled product</p>
                <p className="text-sm text-muted-foreground">Outerwear · Sand</p>
              </div>
              <Badge>Draft</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Add details to instantly preview how the product will appear in your store.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader>
            <CardTitle className="text-xl">Upload checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>1. Add pricing and inventory.</p>
            <p>2. Upload at least 3 images.</p>
            <p>3. Tag the season and collection.</p>
            <p>4. Review status before publishing.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
