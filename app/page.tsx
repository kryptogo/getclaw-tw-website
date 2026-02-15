import Navbar from "@/components/Navbar";
import HeroAnimation from "@/components/HeroAnimation";
import HeroSection from "@/components/HeroSection";
import AgentSection from "@/components/AgentSection";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import UseCasesPreview from "@/components/UseCasesPreview";
import SecurityPreview from "@/components/SecurityPreview";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute -top-full left-4 bg-primary text-white px-4 py-2 rounded-lg z-[9999] text-sm focus:top-4"
      >
        跳到主要內容
      </a>

      <Navbar />

      <main id="main">
        <HeroAnimation />
        <HeroSection />
        <AgentSection />
        <WhyUsSection />
        <PricingSection />
        <ServiceFlowSection />
        <UseCasesPreview />
        <SecurityPreview />
        <SocialProofSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
