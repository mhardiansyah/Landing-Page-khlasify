import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-primary/8 via-violet-soft/30 to-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Build content with clarity — <br className="hidden md:block" />
          <span className="gradient-text">not guesswork.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Join hundreds of creators who plan, preview, and publish content with confidence.
        </p>
        <div className="pt-2">
          <Button variant="hero" size="xl" className="gap-2.5">
            Get Content OS + Preview Widget
            <ArrowRight className="!size-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Built by creators · Designed for systems · Powered by Notion.
        </p>
      </div>
    </section>
  );
}
