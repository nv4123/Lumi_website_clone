import DropdownList from "./DropdownList";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h1>
      <DropdownList />
       <FooterAddressSection />
        <FooterLegalSection />
    </main>
  );
}
