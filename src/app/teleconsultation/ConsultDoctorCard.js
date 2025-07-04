// teleconsultation/ConsultDoctorCard.js
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ConsultDoctorCard = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/consultation");
  };

  return (
    <Box
      role="banner"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#f7f9fc",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        p: 4,
        mt: 4,
      }}
      onClick={handleRedirect}
    >
      {/* Text and ABI logo */}
      <Box sx={{ flex: 1, pr: { md: 4 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontSize: "2.5rem", mb: 2 }}
        >
          Consult a doctor via video call
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", mb: 2, lineHeight: 1.6 }}
        >
          Speak to a registered doctor over video call, with minimal waiting time.
          Get advice on common ailments, including treatment and medication for
          non-emergency issues.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Service powered by:
        </Typography>
        <Box component="a" href="https://www.abiglobalhealth.com/" target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src="/abiGlobal.png" 
            alt="ABI Global Health"
            sx={{ height: 50 }}
          />
        </Box>
      </Box>

      {/* Right side image */}
      <Box
        component="img"
        src="/ConsultDoctorImage2.png" 
        alt="Teleconsultation with a doctor"
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "50%" },
          height: "auto",
          mt: { xs: 3, md: 0 },
          borderRadius: 2,
        }}
      />
    </Box>
  );
};

export default ConsultDoctorCard;
