import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-3xl border-border/60 bg-white/95">
        <CardHeader>
          <CardTitle className="text-2xl">Studio settings</CardTitle>
          <p className="text-sm text-muted-foreground">
            Configure brand identity, shipping rules, and publishing cadence.
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Brand name
            </label>
            <Input placeholder="Vero Atelier" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Primary warehouse
            </label>
            <Input placeholder="New York, NY" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email for order updates
            </label>
            <Input placeholder="ops@veroatelier.com" />
          </div>
          <Button className="rounded-full px-8">Save settings</Button>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader>
            <CardTitle className="text-xl">Publishing cadence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Next drop: Autumn Field Notes</p>
            <p>Release date: Feb 18, 2026</p>
            <p>Channel: Direct-to-consumer</p>
            <Button variant="outline" className="rounded-full">Manage calendar</Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 bg-white/95">
          <CardHeader>
            <CardTitle className="text-xl">Team access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Creative director</p>
            <p>Merchandising lead</p>
            <p>Operations manager</p>
            <Button variant="outline" className="rounded-full">Invite teammate</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
