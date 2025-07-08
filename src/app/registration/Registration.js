"use client";

import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function RegistrationCard() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    terms: false,
    privacy: false,
    contact: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#_$+%-]).{8,}$/.test(
    form.password
  );

  const isFormValid =
    isEmailValid && isPasswordValid && form.terms && form.privacy;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f6f6f6",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: 550 },
          height: { xs: "100vh", sm: "auto" },
          bgcolor: "#fff",
          borderRadius: { xs: 0, sm: "12px" },
          p: 4,
          boxShadow: {
            xs: "none",
            sm: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4} fontSize="2rem">
          Complete your registration
        </Typography>

        <Typography variant="body2" mb={3} color="text.secondary">
          Register to save all your chat history in one place.
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            error={form.email.length > 0 && !isEmailValid}
            helperText={
              form.email.length > 0 && !isEmailValid
                ? "Please enter a valid email address."
                : ""
            }
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            error={form.password.length > 0 && !isPasswordValid}
            helperText={
              form.password.length > 0 && !isPasswordValid
                ? "Password must have 1 capital letter, 1 number, 1 symbol (!@#_$+%-), and at least 8 characters."
                : ""
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
            }
            label={
              <Typography variant="body2">
                I have read and accept the{" "}
                <Link href="/terms-of-use" underline="always">
                  Terms of Use
                </Link>
              </Typography>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
            }
            label={
              <Typography variant="body2">
                I have read and accept the{" "}
                <Link href="/privacy-notice" underline="always">
                  Privacy Statement
                </Link>
              </Typography>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="contact"
                checked={form.contact}
                onChange={handleChange}
              />
            }
            label="I agree you may connect with me via the channel I selected to continue the conversation or inform about additional services"
          />

          <Button
            fullWidth
            variant="contained"
            disabled={!isFormValid}
            sx={{
              borderRadius: "999px",
              py: 1.5,
              fontSize: "1.2rem",
              backgroundColor: isFormValid ? "#00675B" : "#ccc",
              color: "#fff",
              textTransform: "none",
              cursor: isFormValid ? "pointer" : "not-allowed",
              "&:hover": {
                backgroundColor: isFormValid ? "#004D44" : "#ccc",
              },
            }}
          >
            Register Now
          </Button>
        </Stack>

        <Typography variant="body2" mt={3} textAlign="center">
          Already registered with Zoe?{" "}
          <Link
            href="/login"
            underline="always"
            sx={{ fontWeight: 600, color: "#00675B" }}
          >
            Login with Email
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
