import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Upload", href: "/dashboard/upload" },
  { label: "Notifications", href: "/dashboard/notifications" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f1e7_0%,#f2e9de_40%,#f7f1e7_100%)]">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-lg shadow-black/5">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#15120f,#4b4037)] text-sm font-semibold text-white">
              VA
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Studio
              </p>
              <p className="font-[var(--font-display)] text-lg">Vero Atelier</p>
            </div>
          </div>
          <Separator className="my-6" />
          <nav className="space-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-muted-foreground transition hover:bg-muted"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <Separator className="my-6" />
          <div className="space-y-3">
            <Badge variant="secondary" className="rounded-full">Pending review</Badge>
            <p className="text-sm text-muted-foreground">
              6 products waiting for final approval.
            </p>
            <Button asChild className="w-full rounded-full">
              <Link href="/dashboard/upload">Upload new item</Link>
            </Button>
          </div>
        </aside>

        <main className="space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/60 bg-white/80 px-6 py-5 shadow-lg shadow-black/5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Management
              </p>
              <h1 className="font-[var(--font-display)] text-2xl">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
                Last synced 5 mins ago
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,#d9c9b5,#f4ede2)] text-sm font-semibold">
                AI
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>
    </div>
  );
}
