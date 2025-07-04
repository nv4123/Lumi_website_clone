// app/components/DoctorInfoSection.js
'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function DoctorInfoSection() {
  return (
    <Box
      component="section"
      role="partner"
      sx={{
        backgroundColor: '#F6F6F6',
        px: 4,
        py: 6,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        cursor: 'pointer',
      }}
     
    >
      {/* Left image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/OurDoctorImage.png" 
          alt="A person stands in a living room looking at a smartphone"
          width={700}
          height={700}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      {/* Right content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 600,
            mb: 2,
          }}
        >
          Our doctors are here to help with:
        </Typography>

        <Typography sx={{ fontSize: '1rem', mb: 3, lineHeight: 1.6 }}>
          Any medical question – whether it’s something simple like “What if I missed my pill?” or “Should I be concerned about this rash?” You can easily share photos to help us better understand.
        </Typography>

        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            mb: 1,
            mt: 2,
          }}
        >
          What we can’t assist with:
        </Typography>

        <Typography sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
          Diagnoses, treatments, prescriptions, or sick leave notes. While specialists aren’t available on-demand, we’ll do our best to connect you with one when possible.
        </Typography>
      </Box>
    </Box>
  );
}
