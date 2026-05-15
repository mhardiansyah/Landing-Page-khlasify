import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Filter, Maximize2, Grid3X3, Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

const demoSteps = [
  { id: "feed", label: "Feed View", icon: Grid3X3 },
  { id: "fullscreen", label: "Fullscreen", icon: Maximize2 },
  { id: "filter", label: "Filters", icon: Filter },
];

const feedPosts = [
  { color: "from-pink-400 to-rose-500", likes: "2.8k", type: "Carousel" },
  { color: "from-violet-400 to-purple-600", likes: "5.1k", type: "Reel" },
  { color: "from-amber-300 to-orange-500", likes: "1.3k", type: "Post" },
  { color: "from-sky-400 to-blue-600", likes: "3.9k", type: "Story" },
  { color: "from-emerald-400 to-teal-600", likes: "4.2k", type: "Post" },
  { color: "from-fuchsia-400 to-pink-600", likes: "2.1k", type: "Reel" },
];

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle through demo steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative py-20 md:py-28 px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary/5 via-violet-soft/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="pill" className="text-sm px-4 py-1.5 gap-1.5 animate-slide-up">
          <Play className="size-3.5 fill-current" />
          Content OS + Preview Widget
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
          Your complete Content OS —{" "}
          <span className="gradient-text">with visual preview built&nbsp;in.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "200ms" }}>
          Plan content with structure, preview posts like real social feeds,
          and make better content decisions — all inside Notion.
        </p>

        <div className="pt-2 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <Button variant="hero" size="xl" className="gap-2.5">
            Get Content OS + Preview Widget
            <ArrowRight className="!size-5" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground animate-slide-up" style={{ animationDelay: "350ms" }}>
          Built by creators · Designed for systems · Powered by Notion
        </p>
      </div>

      {/* Interactive Browser Mockup */}
      <div className="relative max-w-5xl mx-auto mt-14 animate-scale-in" style={{ animationDelay: "450ms" }}>
        <div className="rounded-2xl border bg-card shadow-2xl shadow-primary/8 overflow-hidden glow-ring">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b">
            <span className="size-3 rounded-full bg-red-400/70" />
            <span className="size-3 rounded-full bg-amber-400/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
            <div className="ml-3 flex-1 h-7 rounded-lg bg-muted flex items-center px-3">
              <span className="text-[11px] text-muted-foreground">notion.so/content-os-preview-widget</span>
            </div>
          </div>

          {/* Interactive demo area */}
          <div className="relative">
            {/* Tab bar */}
            <div className="flex items-center gap-1 px-4 py-2.5 bg-surface-elevated/50 border-b">
              {demoSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => { setActiveStep(i); setIsPlaying(false); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      activeStep === i
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {step.label}
                  </button>
                );
              })}
              <div className="flex-1" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-[10px] text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
            </div>

            {/* Demo content */}
            <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-violet-soft/30 relative overflow-hidden">
              {/* Feed View */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-gradient-to-br from-primary to-pink-500" />
                      <div>
                        <p className="text-xs font-bold text-foreground">Content Preview Widget</p>
                        <p className="text-[10px] text-muted-foreground">@your_brand • 6 posts</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {["All", "Published", "Draft"].map((f, i) => (
                        <span key={f} className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${i === 0 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {feedPosts.map((post, i) => (
                      <div key={i} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer premium-card">
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3 text-white text-xs font-medium">
                            <span className="flex items-center gap-1"><Heart className="size-3 fill-white" /> {post.likes}</span>
                            <span className="flex items-center gap-1"><MessageCircle className="size-3" /> 48</span>
                          </div>
                        </div>
                        <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-black/40 text-white text-[8px] rounded-md font-medium backdrop-blur-sm">{post.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fullscreen View */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeStep === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="flex h-full">
                  <div className="flex-1 bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <Maximize2 className="size-10 mx-auto mb-3 opacity-80" />
                      <p className="text-sm font-semibold">Fullscreen Preview</p>
                      <p className="text-xs opacity-70 mt-1">Click any post to see it fullscreen</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80">
                      <div className="flex gap-4">
                        <Heart className="size-5" />
                        <MessageCircle className="size-5" />
                        <Share2 className="size-5" />
                      </div>
                      <Bookmark className="size-5" />
                    </div>
                  </div>
                  <div className="w-48 bg-white border-l p-3 space-y-2 hidden md:block">
                    <p className="text-[10px] font-bold text-foreground">Post Details</p>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted rounded" />
                      <div className="h-2 w-1/2 bg-muted rounded" />
                    </div>
                    <div className="pt-2 border-t space-y-1">
                      <div className="flex justify-between text-[9px]">
                        <span className="text-muted-foreground">Likes</span>
                        <span className="font-semibold text-foreground">5,142</span>
                      </div>
                      <div className="flex justify-between text-[9px]">
                        <span className="text-muted-foreground">Comments</span>
                        <span className="font-semibold text-foreground">234</span>
                      </div>
                      <div className="flex justify-between text-[9px]">
                        <span className="text-muted-foreground">Shares</span>
                        <span className="font-semibold text-foreground">89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter View */}
              <div className={`absolute inset-0 transition-all duration-500 ${activeStep === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="p-6 h-full">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {["Platform", "Status", "Type", "Campaign"].map((f, i) => (
                      <div key={f} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-all ${
                        i === 0 ? "border-primary bg-violet-soft text-primary" : "border-border bg-white text-muted-foreground hover:border-primary/30"
                      }`}>
                        <Filter className="size-3" />
                        {f}
                        {i === 0 && <span className="ml-1 px-1 py-0 bg-primary text-white text-[9px] rounded">IG</span>}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {feedPosts.slice(0, 3).map((post, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                        <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-white/90 text-[8px] rounded-md font-bold text-primary backdrop-blur-sm">📌 Pinned</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">3 published</span>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">2 scheduled</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium">1 draft</span>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((activeStep + 1) / demoSteps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges around the mockup */}
        <div className="hidden md:block absolute -left-6 top-1/3 animate-float-slow">
          <div className="glass-panel rounded-xl px-3 py-2 shadow-lg">
            <p className="text-[10px] font-semibold text-foreground">📸 Instagram</p>
            <p className="text-[9px] text-muted-foreground">Feed preview</p>
          </div>
        </div>
        <div className="hidden md:block absolute -right-6 top-1/2 animate-float-slow" style={{ animationDelay: "2s" }}>
          <div className="glass-panel rounded-xl px-3 py-2 shadow-lg">
            <p className="text-[10px] font-semibold text-foreground">🎵 TikTok</p>
            <p className="text-[9px] text-muted-foreground">Short video</p>
          </div>
        </div>
      </div>
    </section>
  );
}
