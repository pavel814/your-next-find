import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HelpFindSection } from "@/components/HelpFindSection";
import { OperationsSection } from "@/components/OperationsSection";
import { HowToHelpSection } from "@/components/HowToHelpSection";
import { NewsSection } from "@/components/NewsSection";
import { MapSection } from "@/components/MapSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HelpFindSection />
      <OperationsSection />
      <HowToHelpSection />
      <NewsSection />
      <MapSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
