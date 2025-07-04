'use client';

import React from 'react';
import {
  Container,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TermsAndConditionsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Terms & Conditions
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Nextcare Terms and Conditions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* Replace this placeholder with real terms content if needed */}
              These are the terms and conditions related to services offered by Nextcare. You may customize this content with your actual legal terms.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ my: 3 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Medi24 Terms and Conditions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* Replace this placeholder with real terms content if needed */}
              These are the terms and conditions related to Medi24. Update this section to reflect your real Medi24 terms.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
