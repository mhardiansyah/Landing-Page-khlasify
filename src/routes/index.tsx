import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StepsSection } from "@/components/StepsSection";
import { PillarsSection } from "@/components/PillarsSection";
import { ContentOSValueSection } from "@/components/ContentOSValueSection";
import { PreviewWidgetSection } from "@/components/PreviewWidgetSection";
import { PricingSection } from "@/components/PricingSection";
import { BonusSection } from "@/components/BonusSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
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
      <ProblemSection />
      <StepsSection />
      <PillarsSection />
      <ContentOSValueSection />
      <PreviewWidgetSection />
      <PricingSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
