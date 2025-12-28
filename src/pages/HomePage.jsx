import HeroSection from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { About } from "@/components/about";
import WorldMapDemo from "@/components/hero-map";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <About />
      <WorldMapDemo />
    </>
  );
}
