import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroAnimation from "@/components/HeroAnimation";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import RealStoriesSection from "@/components/RealStoriesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TrustBadges from "@/components/TrustBadges";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import AgentSection from "@/components/AgentSection";
import PricingSection from "@/components/PricingSection";
import SecurityPreview from "@/components/SecurityPreview";
import SocialProofSection from "@/components/SocialProofSection";
import UseCasesPreview from "@/components/UseCasesPreview";
import FAQPreview from "@/components/FAQPreview";
import CTASection from "@/components/CTASection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main id="main">
        <HeroAnimation />
        <HeroSection />
        <StatsBar />
        <RealStoriesSection />
        <WhyUsSection />
        <TrustBadges />
        <ServiceFlowSection />
        <AgentSection />
        <PricingSection />
        <SecurityPreview />
        <SocialProofSection />
        <UseCasesPreview />
        <FAQPreview />
        <CTASection />
      </main>

      <StickyMobileCTA />
      <Footer />
    </>
  );
}
