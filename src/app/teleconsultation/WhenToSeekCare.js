// teleconsultation/WhenToSeekCare.js
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const WhenToSeekCare = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/consultation");
  };

  return (
    <Box
      role="socialmedia"
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: 3,
        p: { xs: 3, md: 5 },
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      onClick={handleRedirect}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        When to seek immediate care
      </Typography>

      <Typography variant="body1" sx={{ fontSize: "1rem", textAlign: "center" }}>
        For emergencies like severe pain, chest pain, broken bones, or any life-threatening condition,
        please head to your nearest hospital or clinic. Our teleconsultation service is here for
        routine and non-urgent care but cannot replace emergency services.
      </Typography>

      <Box>
        <Typography variant="h5" sx={{ fontSize: "1.5rem", mb: 1 }}>
          How to get started
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
          Easily schedule a virtual consultation and receive care from the comfort of your home.
          Questions? Check out our FAQs here.
        </Typography>
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Button variant="text" onClick={() => router.push("/faq")}>
          Check FAQ
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontSize: "0.95rem",
          fontStyle: "italic",
          mt: 1,
        }}
      >
        With our digital health services, care is closer than ever—because your health matters.
      </Typography>
    </Box>
  );
};

export default WhenToSeekCare;
