import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";

export function BonusSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="pill" className="text-sm px-4 py-1.5 gap-1.5">
          <Gift className="size-4" />
          Pro Only
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Bonus: Full Content OS Template
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Get the complete Notion dashboard with all databases pre-connected, views configured, and workflows ready to go.
        </p>

        {/* Dashboard screenshot placeholder */}
        <div className="rounded-2xl border bg-card shadow-xl shadow-primary/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
            <span className="size-3 rounded-full bg-destructive/60" />
            <span className="size-3 rounded-full bg-chart-4/60" />
            <span className="size-3 rounded-full bg-success/60" />
            <div className="ml-3 flex-1 h-7 rounded-lg bg-muted" />
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-violet-soft to-secondary flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="size-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <Gift className="size-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Content OS Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
