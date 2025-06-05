import { HomeHeader } from "@/modules/home/home-header";
import { ExamplesSection } from "@/modules/home/examples-section";
import { GetStartedSection } from "@/modules/home/get-started-section";
import { TechnologiesSection } from "@/modules/home/technologies-section";
import { FeaturesSection } from "@/modules/home/features-section";
import { HeroSection } from "@/modules/home/hero-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHeader />

      <main className="flex-1">
        <HeroSection />

        <FeaturesSection />

        <TechnologiesSection />

        <ExamplesSection />

        <GetStartedSection />
      </main>

      <Footer />
    </div>
  );
}
