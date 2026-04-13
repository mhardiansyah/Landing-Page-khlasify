import { Check } from "lucide-react";

const pillars = [
  {
    title: "Structured Content Planning",
    items: [
      "Organize ideas, drafts, and published posts in one hub",
      "Tag by platform, status, topic, and campaign",
      "Calendar view for visual scheduling",
    ],
  },
  {
    title: "Live Social Preview",
    items: [
      "See exactly how posts look on Instagram, TikTok & X",
      "Preview carousels, reels, and stories in real time",
      "Catch layout issues before you publish",
    ],
  },
  {
    title: "Cross-Platform Workflow",
    items: [
      "One workspace for every social channel",
      "Repurpose content across platforms effortlessly",
      "Track performance and engagement from Notion",
    ],
  },
  {
    title: "Team Collaboration",
    items: [
      "Assign tasks and review content with your team",
      "Comment and approve workflows built in",
      "Role-based access for creators and managers",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Why creators use Content OS?
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Four pillars that make this your ultimate content command center.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card rounded-2xl border p-7 space-y-4 shadow-sm"
            >
              <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-muted-foreground">
                    <Check className="size-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
