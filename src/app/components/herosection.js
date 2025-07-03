"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";

const HeroSection = () => {
  const [promoCode, setPromoCode] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, rgba(0, 14, 33, 0.94) 0%, rgba(0, 21, 49, 0.8) 55%, rgba(4, 71, 139, 0) 100%), url("/HomeBG.jpeg") no-repeat center center / cover`,
        width: "100%",
        height: { xs: "auto", md: "430px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Section */}
        <Box sx={{ maxWidth: "460px", color: "white" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            mb={2}
            sx={{ lineHeight: 1.4 }}
          >
            Stay in charge of your health with your Digital Health Assistant
          </Typography>

          <Box display="flex" alignItems="flex-start" gap={1} mb={1.5}>
            <CheckCircle sx={{ fontSize: 18, color: "#fff", mt: "3px" }} />
            <Typography variant="body2" color="rgba(255,255,255,0.9)">
              Get expert medical advice from certified doctors anytime, no
              waiting rooms, no hassle
            </Typography>
          </Box>

          <Box display="flex" alignItems="flex-start" gap={1} mb={1.5}>
            <CheckCircle sx={{ fontSize: 18, color: "#fff", mt: "3px" }} />
            <Typography variant="body2" color="rgba(255,255,255,0.9)">
              Your favorite messenger, secure and private
            </Typography>
          </Box>

          <Box display="flex" alignItems="flex-start" gap={1} mb={3}>
            <CheckCircle sx={{ fontSize: 18, color: "#fff", mt: "3px" }} />
            <Typography variant="body2" color="rgba(255,255,255,0.9)">
              Easy Healthcare made simple, and always there for you
            </Typography>
          </Box>

          {/* Promo code input */}
          <Typography variant="body2" mb={1}>
            Enter the promo code here
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              mb: 2,
            }}
          >
            <TextField
              placeholder="Promo Code"
              variant="outlined"
              size="small"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                flex: 1,
              }}
            />
            <Button
              variant="contained"
              onClick={() => console.log(promoCode)}
              sx={{
                backgroundColor: "#007c74",
                textTransform: "none",
                px: 3,
                fontWeight: "bold",
                fontSize: "0.9rem",
                height: "40px",
                borderRadius: "2rem",
                "&:hover": {
                  backgroundColor: "#00635e",
                },
              }}
            >
              Proceed
            </Button>
          </Box>

          {/* Login link */}
          <Box display="flex" gap={1}>
            <Typography variant="body2" color="rgba(255,255,255,0.9)">
              Existing user?
            </Typography>
            <Link href="/login" passHref>
              <Typography
                variant="body2"
                sx={{
                  color: "#4AA4E2",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Login with Email
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Right Section */}
        {!isMobile && (
          <Box
            sx={{
              width: "400px",
              height: "430px",
              backgroundImage: 'url("/icons/WomenandChat.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;
