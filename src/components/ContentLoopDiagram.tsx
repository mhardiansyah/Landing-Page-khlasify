import { ClipboardList, Eye, Upload, BarChart3, RotateCcw } from "lucide-react";

const steps = [
  { icon: ClipboardList, label: "Plan", color: "bg-violet-soft text-primary" },
  { icon: Eye, label: "Preview", color: "bg-violet-soft text-primary" },
  { icon: Upload, label: "Publish", color: "bg-violet-soft text-primary" },
  { icon: BarChart3, label: "Analyze", color: "bg-violet-soft text-primary" },
];

export function ContentLoopDiagram() {
  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <h3 className="text-center text-xl font-bold text-foreground mb-8">
        The Content Loop
      </h3>
      <div className="relative flex items-center justify-between gap-2 md:gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-2 md:gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className={`size-14 rounded-2xl ${step.color} flex items-center justify-center`}>
                  <Icon className="size-6" />
                </div>
                <span className="text-sm font-semibold text-foreground">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="text-primary/40 shrink-0">
                  <path d="M0 8h28m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* Curved arrow from Analyze back to Plan */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 bg-violet-soft rounded-full px-5 py-2">
          <RotateCcw className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Improve & Repeat</span>
        </div>
      </div>
    </div>
  );
}
