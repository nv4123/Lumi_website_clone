// app/components/QuestionsLimitSection.js
'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function QuestionsLimitSection() {
  const router = useRouter();

  return (
    <Box
      component="section"
      role="socialmedia"
      sx={{
        px: 4,
        py: 6,
        backgroundColor: '#ffffff',
        width: '100%',
        cursor: 'pointer',
      }}
      
    >
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {/* Top Section */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            How many questions can you ask?
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#444',
            }}
          >
            Feel free to ask as many questions as you need – just up to 3 per session. If you have more, simply start a new session from the main menu.
          </Typography>
        </Box>

        {/* Middle Section */}
        <Box>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 600,
              mb: 1,
            }}
          >
            Got more questions?
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              color: '#444',
            }}
          >
            Check out our FAQs for more helpful info. We’re here for you!
          </Typography>
        </Box>

        {/* FAQ Button */}
        <Box>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              router.push('/faq');
            }}
            sx={{
              backgroundColor: '#007c74',
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              px: 4,
              py: 1,
              borderRadius: '2rem',
              '&:hover': {
                backgroundColor: '#00665f',
              },
            }}
          >
            Check FAQ
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
