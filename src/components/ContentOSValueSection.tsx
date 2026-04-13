import { Database, FileText, BarChart3, ArrowRight } from "lucide-react";

const databases = [
  {
    icon: FileText,
    title: "Ideas / Scripts",
    description: "Capture every idea and script draft in a structured database.",
  },
  {
    icon: Database,
    title: "Campaigns",
    description: "Group posts into campaigns with timelines and goals.",
  },
  {
    icon: BarChart3,
    title: "Posts / Performance",
    description: "Track published posts and measure engagement metrics.",
  },
];

export function ContentOSValueSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            A real Content OS — not just a planner.
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Three interconnected databases that power your entire content workflow.
          </p>
        </div>

        {/* Overlapping card layout */}
        <div className="relative grid md:grid-cols-3 gap-6">
          {databases.map((db, i) => {
            const Icon = db.icon;
            return (
              <div
                key={db.title}
                className="relative bg-card rounded-2xl border p-7 shadow-sm space-y-4"
                style={{ transform: i === 1 ? "translateY(-12px)" : undefined }}
              >
                <div className="size-12 rounded-xl bg-violet-soft flex items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{db.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{db.description}</p>
              </div>
            );
          })}

          {/* Flow arrows between cards (desktop only) */}
          <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center shadow-md">
              <ArrowRight className="size-4 text-primary-foreground" />
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 left-[67%] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center shadow-md">
              <ArrowRight className="size-4 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
