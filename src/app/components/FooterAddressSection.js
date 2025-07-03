"use client";

import { Box, Typography } from "@mui/material";

export default function FooterAddressSection() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#f9f9f9",
        py: 4,
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "lg",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Medi24 AG
        </Typography>
        <Typography variant="body2">Bolligenstrasse 54</Typography>
        <Typography variant="body2">3006 Bern Switzerland</Typography>
      </Box>
    </Box>
  );
}
