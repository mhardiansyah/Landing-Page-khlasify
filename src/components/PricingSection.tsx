import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "one-time",
    description: "Perfect for solo creators getting organized.",
    features: [
      "Content OS Notion Template",
      "Basic calendar & database views",
      "3 platform previews",
      "Community access",
    ],
    cta: "Get Starter",
    popular: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "one-time",
    description: "For creators who want the full preview experience.",
    features: [
      "Everything in Starter",
      "Preview Widget (all platforms)",
      "Carousel & Reels preview",
      "Priority support",
      "Future updates included",
      "Team collaboration views",
    ],
    cta: "Get Pro — Best Value",
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Pay once. Use forever. No subscriptions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 space-y-5 ${
                plan.popular
                  ? "border-primary/40 bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                  : "bg-card shadow-sm"
              }`}
            >
              {plan.popular && (
                <Badge variant="default" className="absolute -top-3 left-6">
                  Most Popular
                </Badge>
              )}

              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/ {plan.period}</span>
              </div>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start text-sm text-muted-foreground">
                    <Check className="size-4 flex-shrink-0 mt-0.5 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

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
      </div>
    </section>
  );
}
