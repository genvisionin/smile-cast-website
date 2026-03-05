import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesBento } from "@/components/FeaturesBento";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { Treatments } from "@/components/Treatments";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-page flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesBento />
      <InteractiveDemo />
      <Treatments />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
