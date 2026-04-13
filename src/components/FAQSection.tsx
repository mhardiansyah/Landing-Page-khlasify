import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is Content OS?",
    a: "Content OS is a complete Notion-based system for planning, previewing, and managing your social media content. It includes structured databases, calendar views, and a live preview widget.",
  },
  {
    q: "Do I need a Notion account?",
    a: "Yes, Content OS is built on top of Notion. You'll need a free or paid Notion account to duplicate and use the template.",
  },
  {
    q: "What platforms does the Preview Widget support?",
    a: "The Preview Widget currently supports Instagram (feed posts, carousels, reels), TikTok, and X (Twitter). More platforms are coming soon.",
  },
  {
    q: "Is this a subscription or a one-time purchase?",
    a: "It's a one-time purchase. Pay once and get lifetime access, including all future updates.",
  },
  {
    q: "Can I use this with my team?",
    a: "Absolutely. The Pro plan includes team collaboration views with role-based access, task assignments, and approval workflows.",
  },
  {
    q: "What if I need help setting it up?",
    a: "We include step-by-step setup guides and video tutorials. Pro users also get priority support via email.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-base font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
