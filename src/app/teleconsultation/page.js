// teleconsultation/page.js
import React from "react";
import { Container } from "@mui/material";
import TeleconsultationBanner from "./TeleconsultationBanner";
import ConsultDoctorCard from "./ConsultDoctorCard";
import DoctorHelpCard from "./DoctorHelpCard";
import WhenToSeekCare from "./WhenToSeekCare";
import DigitalHealthCarousel from "../components/DigitalHealthCarousel";
import FooterAddressSection from "../components/FooterAddressSection";
import FooterLegalSection from "../components/FooterLegalSection";

export default function TeleconsultationPage() {
  return (
    <main>
      <TeleconsultationBanner />
      <ConsultDoctorCard />
      <DoctorHelpCard />
      <WhenToSeekCare />
       <DigitalHealthCarousel />
              <FooterAddressSection />
              <FooterLegalSection />
    </main>
  );
}
