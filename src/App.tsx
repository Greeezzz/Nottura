import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { Features } from "@/components/sections/Features";
import { Audience } from "@/components/sections/Audience";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { config } from "@/config";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <Features />
        <Audience />
        <Pricing />
        <HowItWorks />
        {config.showTestimonials && <Testimonials />}
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
