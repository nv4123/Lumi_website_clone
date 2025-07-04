'use client';

import React from 'react';
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

export default function PrivacyNoticePage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Privacy Notice
        </Typography>
        <Button variant="text" color="primary">
          Cookies Settings
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Nextcare Privacy Notice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography mb={2}>
            Dear member,
          </Typography>
          <Typography paragraph>
            We need your consent to collect and process your health data. If you do not provide
            your explicit consent for the processing of your health data as outlined below, we will
            not be able to handle your data and provide you with services that require your health
            data.
          </Typography>
          <Typography paragraph>
            If you agree, your consent will apply to all health data you provide on the Lumi portal.
          </Typography>
          <Typography paragraph>
            Your data will be processed for the following reasons and activities:
          </Typography>

          <Typography fontWeight="bold" mt={3}>1. Permission to collect, store and use my health data:</Typography>
          <Typography paragraph>
            Nextcare may collect, store and use my health data to provide services such as second medical opinion,
            in-patient pre-approval, health screening questionnaire or reimbursement claims, following their privacy
            notice and applicable legislation.
          </Typography>

          <Typography fontWeight="bold" mt={2}>2. Permission to obtain my data from third parties:</Typography>
          <Typography paragraph>
            Nextcare may obtain my health and other data from physicians, hospitals, care homes, insurance funds,
            and authorities to provide the above-mentioned services. I release those individuals from confidentiality
            obligations regarding shared data.
          </Typography>

          <Typography fontWeight="bold" mt={2}>3. Permission to share my data with third parties:</Typography>
          <Typography paragraph>
            My data may be shared with medical experts, co-insurers, re-insurers, or service providers to process claims
            or provide services. Nextcare has contractual agreements to protect this data.
          </Typography>

          <Typography fontWeight="bold" mt={3}>
            I hereby give Nextcare my consent to process, share, and transfer my Confidential Information
            (including Personal & Health data) to relevant partners for:
          </Typography>

          <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
            <li><Typography>(i) the performance of the Policy;</Typography></li>
            <li><Typography>(ii) assisting in business/product development;</Typography></li>
            <li><Typography>(iii) improving customer experience;</Typography></li>
            <li><Typography>(iv) legal/regulatory compliance;</Typography></li>
            <li><Typography>(v) sharing with law enforcement for compliance with international sanctions.</Typography></li>
          </ul>
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
  );
}
