import TermsAndConditionsPage from "./terms-and-conditions";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";

export default function Page() {
  return (
      <main>
        <TermsAndConditionsPage />
        <FooterAddressSection />
        <FooterLegalSection />
      </main>
    );
}
