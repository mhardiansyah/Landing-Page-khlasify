import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Build content with clarity — not guesswork.
        </h2>
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
