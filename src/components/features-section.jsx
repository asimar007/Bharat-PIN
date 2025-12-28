import React from "react";
import {
  MapPin,
  Shield,
  Navigation,
  Zap,
  Earth,
  Smartphone,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-center mb-4">
            Core Features
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Everything you need for accurate, reliable, and efficient location
            addressing across India
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "Unique 10-character codes",
              description:
                "Every 4m x 4m area in India gets a unique, memorable code",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Privacy-respecting format",
              description:
                "No personal data stored, just precise location encoding",
            },
            {
              icon: <Navigation className="h-6 w-6" />,
              title: "Bidirectional conversion",
              description:
                "Seamlessly convert between Bharat PIN and GPS coordinates",
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Works offline",
              description:
                "No internet required for encoding/decoding operations",
            },
            {
              icon: <Earth className="h-6 w-6" />,
              title: "Interactive visualization",
              description:
                "Leaflet-powered maps with real-time location pinpointing",
            },
            {
              icon: <Smartphone className="h-6 w-6" />,
              title: "Mobile-optimized",
              description: "Designed for smartphones and field operations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
