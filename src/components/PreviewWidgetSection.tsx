import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

export function PreviewWidgetSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            The Preview Widget in action
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            See your content exactly as your audience will — embedded right in your Notion workspace.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <PhoneMockup platform="instagram" />
          <PhoneMockup platform="tiktok" />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ platform }: { platform: "instagram" | "tiktok" }) {
  const isIG = platform === "instagram";

  return (
    <div className="w-[280px] bg-card rounded-[2rem] border-2 shadow-xl shadow-primary/5 overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[10px] font-semibold text-foreground">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-2 rounded-sm bg-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-foreground/30" />
        </div>
      </div>

      {/* App header */}
      <div className="px-4 py-2 border-b flex items-center justify-between">
        <span className="text-sm font-bold text-foreground">
          {isIG ? "Instagram" : "TikTok"}
        </span>
        <MoreHorizontal className="size-4 text-muted-foreground" />
      </div>

      {/* Post header */}
      <div className="flex items-center gap-2.5 px-4 py-2.5">
        <div className="size-8 rounded-full bg-gradient-to-br from-primary to-accent" />
        <div>
          <p className="text-xs font-semibold text-foreground">content_creator</p>
          <p className="text-[10px] text-muted-foreground">Your Brand</p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-violet-soft via-secondary to-accent flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="size-12 mx-auto rounded-xl bg-primary/15 flex items-center justify-center">
            <span className="text-2xl">{isIG ? "📸" : "🎵"}</span>
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            {isIG ? "Feed Post Preview" : "Short Video Preview"}
          </p>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex gap-4">
          <Heart className="size-5 text-foreground" />
          <MessageCircle className="size-5 text-foreground" />
          <Send className="size-5 text-foreground" />
        </div>
        <Bookmark className="size-5 text-foreground" />
      </div>

      {/* Engagement */}
      <div className="px-4 pb-4 space-y-1">
        <p className="text-xs font-semibold text-foreground">2,847 likes</p>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">content_creator</span>{" "}
          Your caption preview appears here…
        </p>
      </div>
    </div>
  );
}
