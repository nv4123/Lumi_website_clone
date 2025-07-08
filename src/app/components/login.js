"use client";
import {
  Box,
  Typography,
  Button,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = isEmailValid && password.length > 0;

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
          width: {
            xs: "100%",
            sm: "100%",
            md: 550,
          },
          height: {
            xs: "100vh",
            sm: "auto",
          },
          bgcolor: "#fff",
          borderRadius: {
            xs: 0,
            sm: "12px",
          },
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
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "left",
            fontSize: "2rem",
          }}
        >
          Login
        </Typography>

        {/* Email */}
        <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email.length > 0 && !isEmailValid}
          />
        </FormControl>

        {/* Password */}
        <FormControl fullWidth sx={{ mb: 1 }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password" // <-- disables browser’s toggle
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  tabIndex={-1} // optional: prevent tabbing into it
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {/* Forgot password */}
        <Box textAlign="right" mb={3}>
          <Link
            href="/forget_password"
            underline="hover"
            sx={{ fontWeight: 500, fontSize: "1rem", color: "#00675B" }}
          >
            Forgot password?
          </Link>
        </Box>

        {/* Login Button */}
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
          Login
        </Button>

        {/* Register link */}
        <Box mt={3} textAlign="center" fontSize="1rem">
          Don't have an account?{" "}
          <Link
            href="/registration"
            underline="hover"
            sx={{ fontWeight: 600, color: "#00675B" }}
          >
            Register
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
