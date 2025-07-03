// app/components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ListItemButton } from "@mui/material";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Styled components to match the original design
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  position: "static",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  minHeight: "64px",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00796b",
  color: "white",
  fontWeight: 600,
  fontSize: "16px",
  textTransform: "none",
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(0.5),
  minWidth: "148px",
  height: "40px",
  borderRadius: "2rem",
  "&:hover": {
    backgroundColor: "#00695c",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const HamburgerButton = styled(IconButton)(({ theme }) => ({
  color: "#7B7B7B",
  padding: theme.spacing(0.75),
  "& svg": {
    width: "24px",
    height: "24px",
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          {/* Logo Section */}
          <Link href="/">
            <LogoContainer>
              <Image
                src="/logo.svg"
                alt="Lumi Logo"
                width={68}
                height={24}
                priority
              />
            </LogoContainer>
          </Link>

          {/* Right Section */}
          <RightSection>
            {/* Login Button - Always visible */}
            <LoginButton
              variant="contained"
              onClick={handleLoginClick}
              disableElevation
            >
              Login
            </LoginButton>

            {/* Hamburger Menu - Only on mobile */}
            <HamburgerButton onClick={handleMenuClick} aria-label="Open menu">
              <MenuIcon />
            </HamburgerButton>
          </RightSection>
        </StyledToolbar>
      </StyledAppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "#ffffff",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMenuClose}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMenuClose}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMenuClose}>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMenuClose}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
