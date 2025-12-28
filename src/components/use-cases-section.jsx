import React from "react";
import { Hospital, Package, Navigation2 } from "lucide-react";

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="py-24 bg-background border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-center mb-4">
            Transforming Industries
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Transforming how India navigates, delivers, and coordinates across
            diverse sectors and industries
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Hospital className="h-6 w-6" />,
              title: "Emergency Services",
              description:
                "Quick location sharing for ambulances and rescue teams",
            },
            {
              icon: <Package className="h-6 w-6" />,
              title: "Delivery Optimization",
              description: "Accurate last-mile delivery to exact locations",
            },
            {
              icon: <Navigation2 className="h-6 w-6" />,
              title: "Accurate Navigation",
              description:
                "Navigate to precise spots without traditional addresses",
            },
          ].map((useCase, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {useCase.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
