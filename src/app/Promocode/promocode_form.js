"use client";

import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

export default function PromoCodeForm() {
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
          Promo code
        </Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>
          Enter your promo code to continue.
        </Typography>

        <form>
          <TextField
            fullWidth
            id="promo"
            name="promo"
            label="Promo code"
            placeholder="Enter your promo code"
            inputProps={{ maxLength: 10 }}
            variant="outlined"
            size="small"
            required
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled
            sx={{
              backgroundColor: "#007c74",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00635e",
              },
            }}
          >
            Proceed
          </Button>
        </form>

        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            Existing user?{" "}
            <Link href="/login" underline="hover" sx={{ fontWeight: 500 }}>
              Login with Email
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
