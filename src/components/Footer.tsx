import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t bg-surface-elevated">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="size-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">Content OS</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Content OS. Built for creators.
        </p>
      </div>
    </footer>
  );
}
