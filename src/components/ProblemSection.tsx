import { Lightbulb, Send, HelpCircle, X } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Most content planners stop at planning.
          <br />
          <span className="text-muted-foreground">Your content has no feedback loop.</span>
        </h2>

        {/* Horizontal diagram */}
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
          {/* Idea */}
          <DiagramStep icon={<Lightbulb className="size-6 text-primary" />} label="Idea" />

          <Arrow />

          {/* Post */}
          <DiagramStep icon={<Send className="size-6 text-primary" />} label="Post" />

          <Arrow />

          {/* ❓ — faded */}
          <div className="relative flex flex-col items-center gap-2 opacity-40 blur-[1px]">
            <div className="size-14 rounded-2xl bg-muted flex items-center justify-center">
              <HelpCircle className="size-6 text-muted-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">???</span>
          </div>

          {/* Red X */}
          <div className="flex items-center">
            <X className="size-8 text-destructive" strokeWidth={3} />
          </div>
        </div>

        <p className="text-muted-foreground text-lg">
          You post, then… <span className="font-semibold text-foreground">nothing comes back.</span>
        </p>
      </div>
    </section>
  );
}

function DiagramStep({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="size-14 rounded-2xl bg-violet-soft flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-muted-foreground shrink-0">
      <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
