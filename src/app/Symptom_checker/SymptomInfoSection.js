"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SymptomInfoSection() {
  return (
    <Box
      role="partner"
      sx={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        gap: 4,
      }}
    >
      {/* Left Image */}
      <Box sx={{ flex: 1 }}>
        <Image
          src="/symptomnewSect3.png"
          alt="Adult and child on sofa checking phone"
          width={500}
          height={350}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1, maxWidth: "600px" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", md: "2rem" }, mb: 2 }}
        >
          Fast, Trusted Insights
        </Typography>

        <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
          Powered by Infermedica, the Symptom Checker is built on medical expertise. With over 1,360 symptoms and 740 conditions covered, it delivers reliable assessments tailored for both children and adults. You’ll have your recommended next step in as little as 3 minutes—because your time and health matter.
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{ mb: 1, color: "#333" }}
        >
          Your Care, Backed by Experts
        </Typography>

        <Typography variant="body2" sx={{ color: "#666" }}>
          Infermedica’s team of physicians ensures every recommendation is grounded in verified medical science, so you can trust the insights you receive.
        </Typography>
      </Box>
    </Box>
  );
}
