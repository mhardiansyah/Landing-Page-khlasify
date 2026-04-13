import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { PreviewWidgetSection } from "@/components/PreviewWidgetSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Content OS + Preview Widget — Plan, Preview & Publish" },
      {
        name: "description",
        content:
          "Your complete Content OS with a built-in social preview widget. Plan content, preview posts like real feeds, and publish — all inside Notion.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <PillarsSection />
      <PreviewWidgetSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
