import React from "react";
import { Map as MapIcon, Code, MapPin, Users } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-center mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            A simple, transparent process to generate and use precise location
            codes
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Grid Division",
              description:
                "India's map is divided into uniform 4m x 4m grids for precise coverage",
              icon: <MapIcon className="h-6 w-6" />,
            },
            {
              title: "Code Generation",
              description:
                "Each cell gets a unique 10-digit Bharat PIN using advanced algorithms",
              icon: <Code className="h-6 w-6" />,
            },
            {
              title: "Interactive Selection",
              description:
                "Click anywhere on the map to get instant Bharat PIN generation",
              icon: <MapPin className="h-6 w-6" />,
            },
            {
              title: "Real-world Usage",
              description:
                "Deploy for logistics, navigation, emergency services, and more",
              icon: <Users className="h-6 w-6" />,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
