import { Database, FileText, BarChart3, ArrowRight, Users, Briefcase, UserCircle, Building2 } from "lucide-react";

const databases = [
  {
    icon: FileText,
    title: "Ideas & Scripts",
    description: "Capture every idea and script draft in a structured database. Never lose a creative thought again.",
    color: "bg-violet-50 text-violet-600",
    items: ["Content briefs", "Draft scripts", "Reference links", "Mood boards"],
  },
  {
    icon: Database,
    title: "Campaigns",
    description: "Group posts into campaigns with timelines and goals. Map content to funnels & campaigns.",
    color: "bg-pink-50 text-pink-600",
    items: ["Campaign goals", "Timeline tracking", "Post assignments", "Performance KPIs"],
  },
  {
    icon: BarChart3,
    title: "Posts & Performance",
    description: "Track published posts and measure engagement metrics. Connect posts to performance data.",
    color: "bg-emerald-50 text-emerald-600",
    items: ["Engagement metrics", "Platform analytics", "Growth tracking", "Content scoring"],
  },
];

const builtFor = [
  { icon: UserCircle, label: "Creators" },
  { icon: Briefcase, label: "Managers" },
  { icon: Users, label: "Teams" },
  { icon: Building2, label: "Agencies" },
];

export function ContentOSValueSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Content OS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            A real Content OS — <span className="gradient-text">not just a planner.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Store ideas & scripts clearly. Map content to funnels & campaigns.
            Connect posts to performance. Build repeatable, scalable content systems.
          </p>
        </div>

        {/* Database cards with flow arrows */}
        <div className="relative grid md:grid-cols-3 gap-5 mb-16">
          {databases.map((db, i) => {
            const Icon = db.icon;
            return (
              <div
                key={db.title}
                className="relative bg-card rounded-2xl border p-7 shadow-sm space-y-4 premium-card"
              >
                <div className={`size-12 rounded-xl ${db.color} flex items-center justify-center`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{db.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{db.description}</p>

                {/* Mini feature list */}
                <div className="pt-2 space-y-2">
                  {db.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="size-1.5 rounded-full bg-primary/40" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Flow arrows between cards (desktop only) */}
          <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <ArrowRight className="size-4 text-primary-foreground" />
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 left-[67%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <ArrowRight className="size-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Database screenshot */}
        <div className="rounded-2xl border bg-card shadow-xl shadow-primary/5 overflow-hidden mb-12">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex-1 h-7 rounded-lg bg-muted flex items-center px-3">
              <span className="text-[11px] text-muted-foreground">Content OS — Database Flow</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/notion-databases-flow.png"
              alt="Content OS interconnected databases showing Ideas, Campaigns, and Performance"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Built for tags */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Built for:</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {builtFor.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border shadow-sm">
                    <Icon className="size-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  {i < builtFor.length - 1 && (
                    <span className="text-muted-foreground/40 text-lg">·</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
