'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
  Slide,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookieSettingsModal({ open, setOpen, preferences, setPreferences }) {
  const router = useRouter();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleConfirm = () => {
    setOpen(false);
    router.push('/');
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        Privacy Preference Center
      </DialogTitle>

      <DialogContent sx={{ px: 4 }}>
        <Typography mb={2}>
          When you visit any website, it may store or retrieve information on your browser,
          mostly in the form of cookies...
        </Typography>

        <Typography fontWeight="bold" mb={1}>
          Manage Consent Preferences
        </Typography>

        <Box mt={2}>
          <Typography fontWeight="bold">Strictly Necessary Cookies</Typography>
          <Typography fontSize="0.9rem" color="text.secondary" mb={2}>
            These cookies are necessary for the proper functioning of the site...
          </Typography>

          <Typography fontWeight="bold">Targeting Cookies</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.targeting}
                onChange={handleChange}
                name="targeting"
              />
            }
            label="Enable Targeting Cookies"
          />
          <Typography fontSize="0.9rem" color="text.secondary" mb={2}>
            These cookies remember your preferences, language, region...
          </Typography>

          <Typography fontWeight="bold">Performance Cookies</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.performance}
                onChange={handleChange}
                name="performance"
              />
            }
            label="Enable Performance Cookies"
          />
          <Typography fontSize="0.9rem" color="text.secondary">
            These cookies track how often users visit pages...
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', mb: 2, mt: 1 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#007770',
            color: '#fff',
            px: 3,
            py: 1.2,
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#005f5a',
            },
          }}
          onClick={() => {
            setPreferences({ targeting: true, performance: true });
            handleConfirm();
          }}
        >
          Accept All Cookies
        </Button>

        <Button
          variant="outlined"
          sx={{
            color: '#007770',
            borderColor: '#007770',
            px: 3,
            py: 1.2,
            borderRadius: '6px',
            '&:hover': {
              borderColor: '#005f5a',
            },
          }}
          onClick={() => {
            setPreferences({ targeting: false, performance: false });
            handleConfirm();
          }}
        >
          Required Only
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#007770',
            color: '#fff',
            px: 3,
            py: 1.2,
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#005f5a',
            },
          }}
          onClick={handleConfirm}
        >
          Confirm My Choices
        </Button>
      </DialogActions>
    </Dialog>
  );
}
