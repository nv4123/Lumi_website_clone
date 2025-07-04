import SymptomImage from "./symptom_image";
import SymptomBanner from "./symptombanner";
import SymptomInfoSection from "./SymptomInfoSection";
import SymptomFAQSection from "./SymptomFAQSection";
import DigitalHealthCarousel from "../components/DigitalHealthCarousel";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";

export default function SymptomCheckerPage() {
  return (
    <main>
      <SymptomImage />
      <SymptomBanner />
      <SymptomInfoSection />
      <SymptomFAQSection />
      <DigitalHealthCarousel />
      <FooterAddressSection />
      <FooterLegalSection />
    </main>
  );
}
