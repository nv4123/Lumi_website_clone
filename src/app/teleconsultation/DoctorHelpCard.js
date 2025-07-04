// teleconsultation/DoctorHelpCard.js
"use client";

import React from "react";
import { Box, Typography, Grid, List, ListItem } from "@mui/material";
import { useRouter } from "next/navigation";

const DoctorHelpCard = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/consultation");
  };

  const leftList = [
    "Coughs",
    "Colds",
    "Sore throats",
    "Earaches",
    "Urinary symptoms",
    "Diarrheas",
  ];

  const rightList = [
    "Indigestions",
    "Eye infections",
    "Rashes",
    "Sinus congestion/allergies",
    "Headaches",
  ];

  return (
    <Box
      role="partner"
      sx={{
        backgroundColor: "#F6F6F6",
        borderRadius: 3,
        p: { xs: 3, md: 5 },
        mt: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
      }}
      onClick={handleRedirect}
    >
      {/* Left image */}
      <Box
        component="img"
        src="/teleSect3New.png" 
        alt="Doctor video call"
        sx={{
          width: { xs: "100%", md: "45%" },
          borderRadius: 2,
        }}
      />

      {/* Right content */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontSize: "2rem", mb: 2 }}>
          How can our doctors help?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
          Our trusted, locally licensed doctors can treat:
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List dense>
              {leftList.map((item, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <List dense>
              {rightList.map((item, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 3, fontSize: "1rem" }}>
          Beyond treatments, they offer lifestyle tips to support your overall well-being,
          with advice tailored to men's and women's health and guidance on health screenings.
          You can also book virtual consultations to address concerns like acne, muscle pain, and more.
        </Typography>
      </Box>
    </Box>
  );
};

export default DoctorHelpCard;
