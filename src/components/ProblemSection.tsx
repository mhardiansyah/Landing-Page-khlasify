import { Lightbulb, Send, HelpCircle, X, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Most content planners stop at planning.
            <br />
            <span className="text-muted-foreground">Your content has no feedback loop.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            They help you decide <em className="text-foreground font-medium">what</em> to post.
            They rarely help you see <em className="text-foreground font-medium">how it will look</em>.
          </p>
        </div>

        {/* Pain points */}
        <div className="max-w-xl mx-auto mb-16 space-y-4">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Without visibility:</p>
          <div className="space-y-3">
            {[
              "Planning stays theoretical",
              "Decisions stay subjective",
              "Improvements come too late",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-red-50 rounded-xl px-5 py-3 border border-red-100">
                <div className="size-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="size-3.5 text-destructive" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal broken-loop diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            {/* Idea */}
            <DiagramStep
              icon={<Lightbulb className="size-6 text-primary" />}
              label="Idea"
              active
            />

            <Arrow />

            {/* Post */}
            <DiagramStep
              icon={<Send className="size-6 text-primary" />}
              label="Post"
              active
            />

            <Arrow faded />

            {/* ❓ — faded/blurred */}
            <div className="relative flex flex-col items-center gap-2 opacity-30 blur-[2px]">
              <div className="size-14 md:size-16 rounded-2xl bg-muted flex items-center justify-center">
                <HelpCircle className="size-6 text-muted-foreground" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground">???</span>
            </div>
          </div>

          {/* Failure markers */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-6 text-sm text-destructive/80 font-medium">
              <span className="flex items-center gap-1.5">
                <X className="size-4" strokeWidth={2.5} />
                No insight
              </span>
              <span className="flex items-center gap-1.5">
                <X className="size-4" strokeWidth={2.5} />
                No feedback
              </span>
              <span className="flex items-center gap-1.5">
                <X className="size-4" strokeWidth={2.5} />
                No improvement
              </span>
            </div>
          </div>

          {/* Closing message */}
          <div className="text-center mt-10">
            <p className="text-lg text-muted-foreground">
              You post, then…{" "}
              <span className="font-bold text-foreground">nothing comes back.</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic max-w-lg mx-auto">
              A content system should support decisions — not just storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramStep({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`size-14 md:size-16 rounded-2xl flex items-center justify-center transition-all ${
        active ? "bg-violet-soft shadow-md" : "bg-muted"
      }`}>
        {icon}
      </div>
      <span className={`text-sm font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
    </div>
  );
}

function Arrow({ faded = false }: { faded?: boolean }) {
  return (
    <svg
      width="40"
      height="16"
      viewBox="0 0 40 16"
      fill="none"
      className={`shrink-0 transition-opacity ${faded ? "opacity-20" : "text-primary/50"}`}
    >
      <path
        d="M0 8h36m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
