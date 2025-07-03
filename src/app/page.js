import HeroSection from "./components/herosection";
import Docchat from "./components/docchat";
import DigitalHealthCarousel from "./components/DigitalHealthCarousel";
import Assistant from "./components/assistant";
import TrustedPartnersSection from "./components/TrustedPartnersSection";
import FooterAddressSection from "./components/FooterAddressSection";
import FooterLegalSection from "./components/FooterLegalSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Docchat />
      <DigitalHealthCarousel />
      <Assistant />
      <TrustedPartnersSection />
      <FooterAddressSection />
      <FooterLegalSection />
    </main>
  );
}
