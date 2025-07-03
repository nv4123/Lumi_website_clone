"use client";
import "./globals.css";

import Header from "./components/Header";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  palette: {
    primary: { main: "#00796b" },
    secondary: { main: "#00695c" },
  },
});

const emotionCache = createCache({ key: "mui", prepend: true });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
