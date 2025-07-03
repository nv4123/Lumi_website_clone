"use client";

import { Box, Typography, Stack, Button, Link } from "@mui/material";
import Image from "next/image";

const platforms = [
  {
    name: "WhatsApp",
    icon: "/icons/whatsapp.svg",
    href: "/login/",
  },
  {
    name: "Telegram",
    icon: "/icons/telegram.svg",
    href: "/login/",
  },
  {
    name: "Web Chat",
    icon: "/icons/webchat.svg",
    href: "/login/",
  },
];

export default function Assistant() {
  return (
    <Box
      sx={{
        bgcolor: "#F9FAFB",
        py: 6,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Save the Digital Health Assistant in your chat for instant support
        whenever you need it
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        Your health, your way—choose your favorite messenger:
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        {platforms.map(({ name, icon, href }) => (
          <Link
            key={name}
            href={href}
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,

              borderRadius: 2,
              px: 3,
              py: 1.5,

              transition: "0.3s",
              "&:hover": {},
            }}
          >
            <Image src={icon} alt={name} width={40} height={40} />
            <Typography variant="body1" fontWeight="medium">
              {name}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Button
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
        Get Started
      </Button>
    </Box>
  );
}
