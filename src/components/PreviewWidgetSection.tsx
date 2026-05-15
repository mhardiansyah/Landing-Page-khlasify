import { useState } from "react";
import {
  Check, Heart, MessageCircle, Send, Bookmark, MoreHorizontal,
  ChevronLeft, ChevronRight, X, Maximize2, Image, Video, Layers, ExternalLink, Paintbrush
} from "lucide-react";

const features = [
  "Feed-style preview (Instagram / TikTok feel)",
  "Image & video fullscreen view",
  "Carousel support",
  "External image & Canva preview",
  "Clean, minimalist display",
];

const igPosts = [
  { gradient: "from-pink-400 via-rose-400 to-fuchsia-500", caption: "New launch day! 🚀 Check our latest product drop.", likes: "3,218" },
  { gradient: "from-violet-400 via-purple-500 to-indigo-600", caption: "Behind the scenes — content creation workflow.", likes: "5,047" },
  { gradient: "from-amber-300 via-orange-400 to-red-500", caption: "Tips for growing your brand in 2025 ✨", likes: "1,892" },
];

const carouselSlides = [
  { gradient: "from-sky-400 to-blue-600", label: "Slide 1 of 3" },
  { gradient: "from-emerald-400 to-teal-600", label: "Slide 2 of 3" },
  { gradient: "from-violet-400 to-purple-600", label: "Slide 3 of 3" },
];

export function PreviewWidgetSection() {
  const [activeTab, setActiveTab] = useState<"ig" | "tiktok">("ig");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const tabs = [
    { id: "ig" as const, label: "Instagram", emoji: "📸" },
    { id: "tiktok" as const, label: "TikTok", emoji: "🎵" },
  ];

  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Preview Widget</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            See your content <span className="gradient-text">before the world does.</span>
          </h2>
        </div>

        {/* Feature checklist */}
        <div className="max-w-md mx-auto mb-14">
          <div className="space-y-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="size-3 text-primary" strokeWidth={3} />
                </div>
                <span className="text-sm text-foreground font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Phone Mockups */}
        <div className="flex flex-col items-center">
          {/* Platform tabs */}
          <div className="flex items-center gap-2 mb-8 p-1 bg-muted rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSelectedPost(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Phone device */}
          <div className="relative w-[320px] md:w-[360px]">
            <div className="device-frame">
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-white">
                <span className="text-[10px] font-bold text-gray-800">9:41</span>
                <div className="w-20 h-5 rounded-full bg-black" />
                <div className="flex gap-1">
                  <div className="w-4 h-2.5 rounded-sm bg-gray-800" />
                  <div className="w-2 h-2.5 rounded-full bg-gray-800" />
                </div>
              </div>

              {/* App header */}
              <div className="px-4 py-2.5 border-b border-gray-100 bg-white flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">
                  {activeTab === "ig" ? "Instagram" : "TikTok"}
                </span>
                <MoreHorizontal className="size-4 text-gray-400" />
              </div>

              {/* Content area */}
              <div className="bg-white relative min-h-[400px] md:min-h-[480px] overflow-hidden">
                {/* Instagram Feed */}
                {activeTab === "ig" && selectedPost === null && (
                  <div className="animate-slide-up">
                    {igPosts.map((post, i) => (
                      <div key={i}>
                        {/* Post header */}
                        <div className="flex items-center gap-2.5 px-4 py-2.5">
                          <div className="size-8 rounded-full bg-gradient-to-br from-primary via-pink-500 to-amber-400 p-[2px]">
                            <div className="size-full rounded-full bg-white flex items-center justify-center">
                              <span className="text-[10px]">👤</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-gray-900">content_creator</p>
                            <p className="text-[9px] text-gray-400">Your Brand</p>
                          </div>
                        </div>

                        {/* Image */}
                        <button
                          onClick={() => setSelectedPost(i)}
                          className="w-full aspect-square relative group cursor-pointer"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <Maximize2 className="size-6 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
                          </div>
                          {i === 1 && (
                            <div className="absolute top-3 right-3">
                              <Layers className="size-4 text-white drop-shadow-md" />
                            </div>
                          )}
                        </button>

                        {/* Action bar */}
                        <div className="flex items-center justify-between px-4 py-2">
                          <div className="flex gap-4">
                            <Heart className="size-5 text-gray-800" />
                            <MessageCircle className="size-5 text-gray-800" />
                            <Send className="size-5 text-gray-800" />
                          </div>
                          <Bookmark className="size-5 text-gray-800" />
                        </div>

                        {/* Caption */}
                        <div className="px-4 pb-3 space-y-0.5">
                          <p className="text-[11px] font-bold text-gray-900">{post.likes} likes</p>
                          <p className="text-[11px] text-gray-600">
                            <span className="font-bold text-gray-900">content_creator</span>{" "}
                            {post.caption}
                          </p>
                        </div>

                        {i < igPosts.length - 1 && <div className="h-px bg-gray-100" />}
                      </div>
                    ))}
                  </div>
                )}

                {/* Fullscreen Post View */}
                {activeTab === "ig" && selectedPost !== null && (
                  <div className="absolute inset-0 bg-black z-10 animate-scale-in">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="absolute top-3 right-3 z-20 size-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <X className="size-4" />
                    </button>

                    {/* Carousel demo for post 1 */}
                    {selectedPost === 1 ? (
                      <div className="relative h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${carouselSlides[carouselIndex].gradient} transition-all duration-500`}>
                          <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm font-medium">
                            {carouselSlides[carouselIndex].label}
                          </div>
                        </div>
                        {/* Carousel navigation */}
                        <button
                          onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                          className={`absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/80 flex items-center justify-center shadow-md ${carouselIndex === 0 ? "opacity-30" : "hover:bg-white"}`}
                        >
                          <ChevronLeft className="size-4 text-gray-800" />
                        </button>
                        <button
                          onClick={() => setCarouselIndex(Math.min(carouselSlides.length - 1, carouselIndex + 1))}
                          className={`absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/80 flex items-center justify-center shadow-md ${carouselIndex === carouselSlides.length - 1 ? "opacity-30" : "hover:bg-white"}`}
                        >
                          <ChevronRight className="size-4 text-gray-800" />
                        </button>
                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {carouselSlides.map((_, i) => (
                            <div key={i} className={`size-1.5 rounded-full transition-all ${i === carouselIndex ? "bg-white w-4" : "bg-white/50"}`} />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${igPosts[selectedPost]?.gradient}`} />
                    )}

                    {/* Engagement bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex gap-5">
                          <Heart className="size-6" />
                          <MessageCircle className="size-6" />
                          <Send className="size-6" />
                        </div>
                        <Bookmark className="size-6" />
                      </div>
                    </div>
                  </div>
                )}

                {/* TikTok Feed */}
                {activeTab === "tiktok" && (
                  <div className="animate-slide-up">
                    <div className="relative aspect-[9/16] max-h-[480px] bg-gradient-to-b from-gray-900 via-violet-950 to-black flex items-end">
                      {/* Video content area */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/50">
                          <Video className="size-12 mx-auto mb-2" />
                          <p className="text-xs font-medium">Short Video Preview</p>
                        </div>
                      </div>

                      {/* Right sidebar actions */}
                      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
                        <div className="flex flex-col items-center gap-1">
                          <div className="size-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Heart className="size-5 text-white" />
                          </div>
                          <span className="text-[10px] text-white/70 font-medium">12.4k</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="size-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <MessageCircle className="size-5 text-white" />
                          </div>
                          <span className="text-[10px] text-white/70 font-medium">483</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="size-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Bookmark className="size-5 text-white" />
                          </div>
                          <span className="text-[10px] text-white/70 font-medium">1.2k</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="size-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Send className="size-5 text-white" />
                          </div>
                          <span className="text-[10px] text-white/70 font-medium">234</span>
                        </div>
                      </div>

                      {/* Bottom info */}
                      <div className="relative z-10 p-4 space-y-2 pr-16">
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-full bg-gradient-to-br from-primary to-pink-500" />
                          <span className="text-xs font-bold text-white">@your_brand</span>
                          <span className="px-2 py-0.5 border border-white/30 rounded-sm text-[9px] text-white font-medium">Follow</span>
                        </div>
                        <p className="text-[11px] text-white/80 leading-relaxed">
                          Your TikTok caption preview appears here 🎵 #ContentOS #Preview
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-white/50">
                          <span>🎵</span>
                          <span className="truncate">Original Sound — your_brand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom bar */}
              <div className="h-1 bg-gray-200 mx-16 my-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* Instruction text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          👆 Click posts to preview fullscreen · Swipe carousel slides · Switch between platforms
        </p>
      </div>
    </section>
  );
}
