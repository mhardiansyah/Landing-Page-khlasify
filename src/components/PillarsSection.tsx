import { Puzzle, Eye, BarChart3, Brain, ClipboardList, Upload, RotateCcw } from "lucide-react";

const pillars = [
  {
    icon: Puzzle,
    emoji: "🧩",
    title: "Content OS",
    description: "Structure ideas, scripts, campaigns, and posts in one system.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
  },
  {
    icon: Eye,
    emoji: "👀",
    title: "Preview Widget",
    description: "See your content like a real social feed — before posting.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    highlight: true,
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Performance System",
    description: "Track what works, what to fix, and what to scale.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Decision Framework",
    description: "Know when to post, repurpose, or stop content.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
];

const loopSteps = [
  { icon: ClipboardList, label: "Plan", highlight: false },
  { icon: Eye, label: "Preview", highlight: true },
  { icon: Upload, label: "Publish", highlight: false },
  { icon: BarChart3, label: "Analyze", highlight: false },
];

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">The Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Plan. Preview. Publish. <span className="gradient-text">Improve.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Four core pillars that transform how you create, manage, and optimize content.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid sm:grid-cols-2 gap-5 stagger-children mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative bg-card rounded-2xl border p-7 space-y-4 premium-card ${
                  pillar.highlight
                    ? "border-primary/30 ring-1 ring-primary/10 shadow-lg shadow-primary/5"
                    : "shadow-sm"
                }`}
              >
                {pillar.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
                <div className={`size-12 rounded-xl ${pillar.bgColor} flex items-center justify-center`}>
                  <span className="text-xl">{pillar.emoji}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content Loop Diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground">The Content Loop</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A continuous cycle that gets smarter every iteration
            </p>
          </div>

          <div className="relative bg-card rounded-2xl border p-8 shadow-sm">
            {/* Loop steps */}
            <div className="flex items-center justify-between gap-2 md:gap-4">
              {loopSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 md:gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`size-14 md:size-16 rounded-2xl flex items-center justify-center transition-all ${
                        step.highlight
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 animate-pulse-glow"
                          : "bg-violet-soft text-primary"
                      }`}>
                        <Icon className="size-6" />
                      </div>
                      <span className={`text-xs md:text-sm font-semibold ${
                        step.highlight ? "text-primary" : "text-foreground"
                      }`}>
                        {step.label}
                      </span>
                      {step.highlight && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          Bridge
                        </span>
                      )}
                    </div>
                    {i < loopSteps.length - 1 && (
                      <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-primary/30 shrink-0">
                        <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Improve & Repeat curved arrow */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 bg-violet-soft rounded-full px-5 py-2.5 shadow-sm">
                <RotateCcw className="size-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Improve & Repeat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
