import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to be good at Notion?",
    a: "No. Beginner-friendly and ready to use. The template comes with clear instructions and everything is pre-configured for you.",
  },
  {
    q: "Is this only for Instagram?",
    a: "No. Built for multi-platform workflows. The preview widget supports Instagram, TikTok, and more platforms are coming soon.",
  },
  {
    q: "Can I use this with existing databases?",
    a: "Yes. Fully modular. You can connect your existing Notion databases or start fresh with our pre-built templates.",
  },
  {
    q: "Is this a subscription?",
    a: "No. One-time purchase. Future updates included. Pay once and get lifetime access to all improvements.",
  },
  {
    q: "Can I start with Starter and upgrade later?",
    a: "Yes, anytime. You can start with the free Starter plan and upgrade to Pro whenever you're ready.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
