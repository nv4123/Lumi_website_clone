// teleconsultation/TeleconsultationBanner.js
"use client";

import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const TeleconsultationBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/consultation");
  };

  return (
    <Box
      role="button"
      aria-label="A person sits on a couch at home, holding a laptop and participating in a video call with a doctor."
      onClick={handleClick}
      sx={{
        width: "100%",
        height: { xs: 180, sm: 250, md: 300 },
        backgroundImage: "url('/TCBanner.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2,
        cursor: "pointer",
        mt: 3,
      }}
    />
  );
};

export default TeleconsultationBanner;
