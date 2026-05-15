import { Check, X } from "lucide-react";

const comparisonRows = [
  { feature: "Content planning & scheduling", others: true, contentOS: true },
  { feature: "Visual social feed preview", others: false, contentOS: true },
  { feature: "Preview connected to your system", others: false, contentOS: true },
  { feature: "Full feedback loop (plan → publish → analyze → improve)", others: false, contentOS: true },
  { feature: "Performance tracking integration", others: false, contentOS: true },
  { feature: "Decision framework (post, repurpose, or stop)", others: false, contentOS: true },
  { feature: "Built on Notion (your existing workspace)", others: false, contentOS: true },
  { feature: "One-time purchase (no subscription)", others: false, contentOS: true },
];

export function WhyDifferentSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Why This Is Different</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Why Content OS + Preview Widget <br className="hidden md:block" />
            <span className="gradient-text">beats templates & widgets.</span>
          </h2>
          <div className="mt-6 max-w-xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Not just planning — but a <strong className="text-foreground">full feedback loop</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Preview is <strong className="text-foreground">connected to your system</strong>, not separate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Designed for <strong className="text-foreground">decisions</strong>, not just aesthetics.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_160px_160px] items-center border-b bg-surface-elevated/50">
            <div className="px-6 py-4">
              <span className="text-sm font-semibold text-muted-foreground">Features</span>
            </div>
            <div className="px-4 py-4 text-center border-l">
              <span className="text-sm font-semibold text-muted-foreground">Others</span>
            </div>
            <div className="px-4 py-4 text-center border-l bg-primary/5">
              <span className="text-sm font-bold text-primary">Content OS</span>
            </div>
          </div>

          {/* Table Body */}
          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_120px_120px] md:grid-cols-[1fr_160px_160px] items-center ${
                i < comparisonRows.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="px-6 py-3.5">
                <span className="text-sm text-foreground">{row.feature}</span>
              </div>
              <div className="px-4 py-3.5 flex justify-center border-l">
                {row.others ? (
                  <div className="size-5 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Check className="size-3 text-emerald-500" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="size-5 rounded-full bg-red-50 flex items-center justify-center">
                    <X className="size-3 text-red-400" strokeWidth={3} />
                  </div>
                )}
              </div>
              <div className="px-4 py-3.5 flex justify-center border-l bg-primary/[0.02]">
                <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="size-3 text-primary" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
