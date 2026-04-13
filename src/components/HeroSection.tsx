import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="pill" className="text-sm px-4 py-1.5 gap-1.5">
          🧠 Multi-Platform Content Preview
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
          Your complete Content OS — with visual preview built&nbsp;in.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Plan content with structure, preview posts like real social feeds,
          and make better content decisions — all inside Notion.
        </p>
        <div className="pt-2">
          <Button variant="hero" size="xl" className="gap-2.5">
            Get Content OS + Preview Widget
            <ArrowRight className="!size-5" />
          </Button>
        </div>
      </div>

      {/* Browser Mockup — full width below CTA */}
      <div className="max-w-5xl mx-auto mt-14">
        <BrowserMockup />
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div className="rounded-2xl border bg-card shadow-xl shadow-primary/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
        <span className="size-3 rounded-full bg-destructive/60" />
        <span className="size-3 rounded-full bg-chart-4/60" />
        <span className="size-3 rounded-full bg-success/60" />
        <div className="ml-3 flex-1 h-7 rounded-lg bg-muted" />
      </div>
      <div className="aspect-video bg-gradient-to-br from-violet-soft to-secondary flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="size-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground font-medium">Content OS Preview</p>
        </div>
      </div>
    </div>
  );
}
