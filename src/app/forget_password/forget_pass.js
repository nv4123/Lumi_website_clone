"use client";

import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

export default function ForgetPassForm() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f6f6f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Forgot password?
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Don’t worry! Enter your registered email address and we’ll send you an
          OTP.
        </Typography>

        <form>
          <TextField
            fullWidth
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            required
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#007c74",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00635e",
              },
            }}
          >
            Send OTP
          </Button>
        </form>

        <Box mt={3} textAlign="center">
          <Link
            href="/login"
            underline="hover"
            sx={{
              color: "#007c74",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Back to Login
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
