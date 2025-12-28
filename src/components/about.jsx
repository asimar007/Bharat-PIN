import React from "react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-8">
            Inspired by Innovation, Built for India
          </h2>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm max-w-4xl">
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p className="text-xl">
                Bharat-Pin is an{" "}
                <span className="font-semibold text-foreground">
                  open-source initiative
                </span>{" "}
                inspired by DIGIPIN, designed to solve the challenge of
                unstructured addressing in India. My system provides a
                standardized, digital approach to location identification that
                works seamlessly across urban and rural areas.
              </p>
              <p>
                By offering{" "}
                <span className="font-semibold text-foreground">
                  "Address as a Service"
                </span>{" "}
                for both public and private use, Bharat PIN aims to modernize
                how we think about location addressing in the digital age,
                making it more accessible, accurate, and efficient for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
