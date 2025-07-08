'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ✅ Import the Cookie Modal component
import CookieSettingsModal from './CookiePreferencesModal';

export default function PrivacyNoticePage() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    targeting: true,
    performance: true,
  });

  return (
    <>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold">
            Privacy Notice
          </Typography>
          <Button variant="text" color="primary" onClick={() => setOpen(true)}>
            Cookies Settings
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Nextcare Privacy Notice</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* ✅ your original unchanged content */}
            <Typography mb={2}>
              Dear member,
            </Typography>
            <Typography paragraph>
              We need your consent to collect and process your health data...
            </Typography>
            {/* ...rest of your content */}
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Medi24 Privacy Notice</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This section is currently not expanded. You may add Medi24's notice here later.</Typography>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ mt: 5 }} />
      </Container>

      {/* ✅ Include the Cookie Modal at bottom */}
      <CookieSettingsModal
        open={open}
        setOpen={setOpen}
        preferences={preferences}
        setPreferences={setPreferences}
      />
    </>
  );
}
