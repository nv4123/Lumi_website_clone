"use client";

import React from "react";
import { Box } from "@mui/material";

export default function SymptomImage() {
  return (
    <Box
      aria-label="A person stands indoors near a wall, looking at a smartphone. A bookshelf filled with books is placed beside them."
      sx={{
        width: "100%",
        background: 'url("/SCBanner.png") center center / cover no-repeat',
        height: { xs: "250px", md: "500px" },
      }}
    />
  );
}
