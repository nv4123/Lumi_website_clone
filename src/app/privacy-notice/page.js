import PrivacyNotice from "./PrivacyNotice";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";

export default function Page() {
  return (
      <main>
        <PrivacyNotice />
        <FooterAddressSection />
        <FooterLegalSection />
      </main>
    );
}
