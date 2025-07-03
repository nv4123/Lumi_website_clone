"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Docchat() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      {/* Left Section: Image with chat */}
      <Box
        sx={{
          width: "50%",
          maxWidth: "600px",
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/imageGroup.png"
          alt="Chat UI"
          width={600}
          height={500}
          style={{ borderRadius: "24px", width: "100%", height: "auto" }}
          priority
        />
      </Box>

      {/* Right Section: Text */}
      <Box
        sx={{
          width: "50%",
          pl: { xs: 3, md: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 2,
            color: "#212121",
          }}
        >
          Reaching a doctor is as easy as sending a message
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#555",
            mb: 4,
          }}
        >
          Chat with certified doctors and get trusted advice in just 15 minutes,
          right on your favorite messenger or web chat.
        </Typography>

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
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
