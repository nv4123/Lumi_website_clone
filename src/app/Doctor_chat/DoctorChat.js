// app/components/DoctorChatBanner.js
'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function DoctorChatBanner() {
  return (
    <Box
      component="section"
      role="banner"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 6,
        bgcolor: '#F7F9FB',
        cursor: 'pointer',
        minHeight: '53rem',
      }}
      
    >
        <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/inner_doctor_chat.png" // 
          alt="Doctor chat conversation preview"
          width={600}
          height={600}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      {/* Right content */}
      <Box sx={{ flex: 1, pr: { md: 4 }, mb: { xs: 4, md: 0 } }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '2.4rem', md: '2.4rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Chat with a doctor in minutes!
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            mb: 3,
            lineHeight: 1.6,
            maxWidth: '50rem',
          }}
        >
          Send your medical question, and one of our certified doctors will respond within 15 minutes. Get trustworthy advice you can act on confidently—quick, easy, and as seamless as messaging a friend. Available 24/7 in your local language.
        </Typography>

        <Typography sx={{ fontSize: '1.2rem', mb: 1.5 }}>
          Service powered by:
        </Typography>

        <a
          href="https://www.abiglobalhealth.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/abiGlobal.png" // 
            alt="ABI Global Health Logo"
            width={160}
            height={40}
          />
        </a>
      </Box>

      {/* Left image */}
      
    </Box>
  );
}
