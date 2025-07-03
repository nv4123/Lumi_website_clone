"use client";

import { Box, Typography, Stack, Link } from "@mui/material";
import Image from "next/image";

const partners = [
  {
    name: "Medi24",
    href: "https://medi24.ch/en",
    src: "/medi24.png",
  },
  {
    name: "Allianz",
    href: "https://www.allianz-partners.com/en_global.html",
    src: "/allianz.png",
  },
  {
    name: "Infermedica",
    href: "https://infermedica.com/",
    src: "/infermedica.png",
  },
  {
    name: "ABI Global Health",
    href: "https://www.abiglobalhealth.com/",
    src: "/abiGlobal.png",
  },
];

export default function TrustedPartnersSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Box maxWidth="lg" mx="auto">
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: "1.25rem", mb: 1 }}
        >
          Our trusted partners
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "1rem", mb: 4 }}
        >
          Over 25 years of expertise in delivering reliable medical care.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 6 }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {partners.map(({ name, href, src }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: 150, sm: 180 },
                  height: "auto",
                }}
              >
                <Image
                  src={src}
                  alt={name}
                  width={180}
                  height={60}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
