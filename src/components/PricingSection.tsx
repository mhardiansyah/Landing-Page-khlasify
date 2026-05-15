import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    bestFor: "Solo creators starting out",
    price: "Free",
    period: "",
    features: [
      "1 widget",
      "Up to 9 posts",
      "Basic preview",
      "Hide selected posts",
    ],
    cta: "Get Starter",
    popular: false,
  },
  {
    name: "Pro",
    bestFor: "Active creators & managers",
    price: "Rp 199.000",
    period: "one-time",
    features: [
      "Unlimited widgets",
      "Up to 60 posts",
      "Full interactive preview",
      "Advanced filters & pinning",
      "Canva & external media preview",
      "Content Map view",
      "Drag & drop ordering",
      "Content OS Notion Template included",
      "Future updates included",
    ],
    cta: "Get Pro — Best Value",
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Start simple. <span className="gradient-text">Upgrade when content grows.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pay once. Use forever. No subscriptions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 space-y-6 ${
                plan.popular
                  ? "border-primary/40 bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                  : "bg-card shadow-sm"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <Badge variant="default" className="absolute -top-3 left-6 gap-1">
                  <Sparkles className="size-3" />
                  Most Popular
                </Badge>
              )}

              {/* Plan header */}
              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium">Best for:</span> {plan.bestFor}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start text-sm">
                    <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="size-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className={`${
                      f.includes("Content OS Notion Template")
                        ? "font-bold text-foreground"
                        : "text-muted-foreground"
                    }`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full gap-2"
              >
                {plan.cta}
                <ArrowRight className="!size-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Pro includes visual */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="rounded-2xl border bg-card shadow-lg shadow-primary/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
              <span className="size-3 rounded-full bg-red-400/70" />
              <span className="size-3 rounded-full bg-amber-400/70" />
              <span className="size-3 rounded-full bg-emerald-400/70" />
              <div className="ml-3 flex-1 h-7 rounded-lg bg-muted flex items-center px-3">
                <span className="text-[11px] text-muted-foreground">Content OS Notion Template</span>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/content-os-dashboard.png"
                alt="Content OS Notion Template included with Pro"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-6 pt-16">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="default" className="text-sm px-4 py-1.5 gap-1.5">
                    <Sparkles className="size-3.5" />
                    Included with Pro
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
