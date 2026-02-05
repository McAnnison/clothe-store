import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockNotifications } from "@/lib/mock-data";

const channelLabels: Record<string, string> = {
  order: "Order",
  inventory: "Inventory",
  customer: "Customer",
  system: "System",
};

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-border/60 bg-white/95">
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">Notifications</CardTitle>
            <p className="text-sm text-muted-foreground">
              Track everything happening in the shop and respond quickly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Orders</Button>
            <Button variant="outline" className="rounded-full">Inventory</Button>
            <Button variant="outline" className="rounded-full">Customer</Button>
            <Button variant="outline" className="rounded-full">System</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockNotifications.map((note) => (
            <div key={note.id} className="rounded-3xl border border-border/60 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="rounded-full">
                      {channelLabels[note.channel]}
                    </Badge>
                    <Badge
                      variant={note.level === "critical" ? "destructive" : "secondary"}
                      className="rounded-full"
                    >
                      {note.level}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{note.title}</h3>
                  <p className="text-sm text-muted-foreground">{note.detail}</p>
                </div>
                <p className="text-sm text-muted-foreground">{note.time}</p>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full">Resolve</Button>
                <Button variant="outline" className="rounded-full">View details</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
