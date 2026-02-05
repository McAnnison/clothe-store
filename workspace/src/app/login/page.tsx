import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <Card className="w-full max-w-md rounded-3xl border-border/60 bg-white/90 shadow-xl shadow-black/10">
        <CardHeader className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Studio access
          </p>
          <CardTitle className="font-[var(--font-display)] text-3xl">
            Welcome back
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Sign in to manage collections, inventory, and product uploads.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </label>
            <Input type="email" placeholder="studio@veroatelier.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Password
            </label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full rounded-full" size="lg">
            Sign in
          </Button>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Forgot password?</span>
            <Link className="text-foreground" href="/dashboard">
              Continue to dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
