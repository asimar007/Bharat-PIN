import React from "react";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Globe } from "@/components/ui/globe";
import { Github } from "lucide-react";
import { FeaturesSection } from "./features-section";
import { UseCasesSection } from "./use-cases-section";
import { HowItWorksSection } from "./how-it-works-section";
import { About } from "./about";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Bharat PIN
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Discover exact geographical coordinates, postal codes, and
                  detailed location information across India's vast landscape.
                  From bustling cities to remote villages.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <a href="/map">
                      <span className="text-nowrap">Get Your Bharat PIN</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <a
                      href="https://github.com/asimar007/Bharat-PIN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-nowrap">View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>
              {/* <div className="relative -z-10 order-first ml-auto w-full max-w-[400px] aspect-square lg:absolute lg:inset-0 lg:-right-20 lg:-top-70 lg:order-last lg:w-2/3 lg:max-w-none lg:h-max">
                <Globe className="w-full h-full mix-blend-lighten invert-0" />
              </div> */}
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">The Tech Stack are</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 w-fit invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
                      alt="Vercel Logo"
                    />
                    <span className="font-medium text-sm">Vercel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-fit brightness-0 invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React.js Logo"
                    />
                    <span className="font-medium text-sm">React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-fit invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      alt="GitHub Logo"
                    />
                    <span className="font-medium text-sm">GitHub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-fit invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-plain.svg"
                      alt="Vite.js Logo"
                    />
                    <span className="font-medium text-sm">Vite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-fit brightness-0 invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      alt="TailwindCSS Logo"
                    />
                    <span className="font-medium text-sm">TailwindCSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-7 w-fit invert"
                      src="https://tanstack.com/images/logos/logo-black.svg"
                      alt="TanStack Logo"
                    />
                    <span className="font-medium text-sm">TanStack Query</span>
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <About />
      </main>
    </>
  );
}
