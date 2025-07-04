import DoctorChatPreview from "./doctor_chat_banner";
import DoctorChatBanner from "./DoctorChat";
import DoctorInfoSection from "./DoctorInfoSection";
import QuestionsLimitSection from "./QuestionsLimitSection";
import DigitalHealthCarousel from "../components/DigitalHealthCarousel";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";
export default function Doctor_chat_page() {
  return (
    <main>
        <DoctorChatPreview />
        <DoctorChatBanner />
        <DoctorInfoSection />
        <QuestionsLimitSection />
        <DigitalHealthCarousel />
        <FooterAddressSection />
        <FooterLegalSection />
    </main>
  );
}
