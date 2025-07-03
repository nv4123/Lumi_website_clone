"use client";

import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function FooterLegalSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f1f1f1",
        py: 2,
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
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: "#444" }}>
          © Medi24 AG 2024. All Right Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
            flexWrap: "wrap",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          <MuiLink
            component={Link}
            href="/help/"
            underline="hover"
            color="inherit"
          >
            Help
          </MuiLink>
          <MuiLink
            component={Link}
            href="/privacy-notice/"
            underline="hover"
            color="inherit"
          >
            Privacy Notice
          </MuiLink>
          <MuiLink
            component={Link}
            href="/terms-of-use/"
            underline="hover"
            color="inherit"
          >
            Terms & Conditions
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
}
