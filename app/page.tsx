import Navbar from "@/components/Navbar";
import HeroAnimation from "@/components/HeroAnimation";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
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
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
