import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl  flex items-center justify-center">
            {/* <Sparkles className="size-4 text-primary-foreground" /> */}
            <img src="/favicon.ico" alt="" />
          </div>
          <span className="font-bold text-lg text-foreground">Content OS</span>
        </div>

        <Button variant="hero" size="default">
          Get Template
        </Button>
      </div>
    </nav>
  );
}
