"use client";

import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const carouselItems = [
  {
    image: "/carousel1.png",
    title: "Symptom checker",
    description:
      "Chat naturally with and get guided to the next best step for your health, tailored just for you.",
  },
  {
    image: "/carousel2.png",
    title: "Video call with a doctor",
    description:
      "Consult a licensed doctor for a diagnosis, get prescriptions, and enjoy medicine delivery—all from the comfort of home, hassle-free.",
  },
  {
    image: "/carousel3.png",
    title: "Doctor chat",
    description:
      "Text with a certified doctor for quick answers, advice, and peace of mind—anytime.",
  },
];

export default function DigitalHealthCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 6,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        What your Digital Health Assistant can do for you
      </Typography>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2}
          slidesPerGroup={isMobile ? 1 : 2}
          style={{ paddingBottom: "40px" }}
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  p: 4,
                  mx: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  minHeight: 420,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={260}
                  height={180}
                  style={{
                    objectFit: "contain",
                    marginBottom: "1rem",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, fontSize: "1.25rem" }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "#555",
                    fontSize: "0.95rem",
                    px: 1,
                  }}
                >
                  {item.description}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
