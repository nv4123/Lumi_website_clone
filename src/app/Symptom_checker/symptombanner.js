"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SymptomBanner() {
  return (
    <Box
      role="banner"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        bgcolor: "#ffffff",
      }}
    >
      {/* Text Content */}
      <Box maxWidth="600px">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, lineHeight: 1.3 }}
        >
          Understand your symptoms with ease
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", color: "#444", mb: 3 }}
        >
          Feeling unwell? Symptom Checker is here to guide you. In just a quick, conversational chat, you’ll be directed to the care you need, when you need it. Whether it’s advice for a common concern or guidance for next steps, Symptom Checker keeps things simple and supportive.
        </Typography>

        <Typography
          variant="body2"
          fontWeight={600}
          sx={{ mb: 1, color: "#777" }}
        >
          Service offered by:
        </Typography>

        <Box>
          <a
            href="https://infermedica.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/infermedica.png"
              alt="Infermedica logo"
              width={160}
              height={40}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </Box>
      </Box>

      {/* Right-side Image */}
      <Box sx={{ width: { xs: "100%", md: "400px" } }}>
        <Image
          src="/SCImage.png"
          alt="A Symptom Checker conversation"
          width={400}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
