import { Badge } from "@/components/ui/badge";
import { Gift, Lightbulb, Target, BarChart3, Brain, ArrowRight } from "lucide-react";

const bonusItems = [
  { icon: Lightbulb, label: "Idea & script system", color: "text-violet-600 bg-violet-50" },
  { icon: Target, label: "Campaign tracking", color: "text-pink-600 bg-pink-50" },
  { icon: BarChart3, label: "Performance dashboard", color: "text-emerald-600 bg-emerald-50" },
  { icon: Brain, label: "Decision framework", color: "text-amber-600 bg-amber-50" },
];

export function BonusSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="pill" className="text-sm px-4 py-1.5 gap-1.5">
            <Gift className="size-4" />
            Pro Only
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Bonus: Full Content OS Template
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Not just a widget — you get the entire system used to plan, execute, and improve content.
          </p>
        </div>

        {/* Bonus items grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
          {bonusItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-card rounded-xl border px-5 py-4 shadow-sm premium-card"
              >
                <div className={`size-10 rounded-lg flex items-center justify-center ${item.color}`}>
                  <Icon className="size-5" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Dashboard screenshot */}
        <div className="rounded-2xl border bg-card shadow-xl shadow-primary/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex-1 h-7 rounded-lg bg-muted flex items-center px-3">
              <span className="text-[11px] text-muted-foreground">Content OS — Full Dashboard</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/content-os-dashboard.png"
              alt="Content OS Full Dashboard — included with Pro plan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap text-sm font-medium text-muted-foreground">
          <span className="px-3 py-1.5 bg-violet-50 text-primary rounded-lg">Ideas</span>
          <ArrowRight className="size-4 text-primary/40" />
          <span className="px-3 py-1.5 bg-pink-50 text-pink-600 rounded-lg">Scripts</span>
          <ArrowRight className="size-4 text-primary/40" />
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg">Campaigns</span>
          <ArrowRight className="size-4 text-primary/40" />
          <span className="px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg">Performance</span>
        </div>
      </div>
    </section>
  );
}
