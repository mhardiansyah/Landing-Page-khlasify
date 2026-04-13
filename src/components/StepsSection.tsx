export function StepsSection() {
  const steps = [
    {
      num: "1",
      title: "Duplicate Content OS",
      description:
        "Get your own copy of the Content OS Notion template — pre-built with databases, views, and workflows.",
    },
    {
      num: "2",
      title: "Connect Your Database",
      description:
        "Link your Notion content database to the Preview Widget with a single click. No code required.",
    },
    {
      num: "3",
      title: "Embed Preview Widget",
      description:
        "Add the live social preview directly into your Notion workspace and see your content as your audience will.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-surface-elevated">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Get started in 3 simple steps
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            From zero to a full content workflow in under 5 minutes.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex gap-5 items-start bg-card rounded-2xl border p-6 shadow-sm"
            >
              <div className="flex-shrink-0 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
