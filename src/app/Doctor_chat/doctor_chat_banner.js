// app/components/DoctorChatPreview.js
'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

export default function DoctorChatPreview() {
  return (
    <Box
      aria-label="A person sits on a couch using a smartphone. Next to them is a 'Doctor Chat' interface showing a text conversation"
      sx={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        cursor: 'pointer',
      }}
      
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 300, md: 450 },
        }}
      >
        <Image
          src="/DCBanner.png" 
          alt="Doctor Chat Preview"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
    </Box>
  );
}
