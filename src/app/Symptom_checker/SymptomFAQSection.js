"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function SymptomFAQSection() {
  return (
    <Box
      role="socialmedia"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
      >
        Still curious?
      </Typography>

      <Typography variant="body1" sx={{ color: "#444", mb: 1 }}>
        Find all the answers you need in our FAQ section.
      </Typography>

      <Typography
        variant="body2"
        sx={{ maxWidth: "600px", color: "#666", fontSize: "0.95rem" }}
      >
        Your journey to better health starts with Zoe Digital Health Assistant —
        because our easy to use digital health services make healthcare simpler.
      </Typography>

      <Button
        href="/faq"
        variant="contained"
        sx={{
          backgroundColor: "#00796b",
          color: "#fff",
          textTransform: "none",
          fontWeight: 700,
          px: 4,
          py: 1,
          borderRadius: "2rem",
          "&:hover": {
            backgroundColor: "#00695c",
          },
        }}
      >
        Check FAQ
      </Button>
    </Box>
  );
}
