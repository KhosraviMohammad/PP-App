"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const { language, setLanguage, isRtl, t } = useLanguage();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.experience"), href: "/#experience" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 2,
          width: "100%",
          backdropFilter: "blur(14px)",
          background: "rgba(255, 255, 255, 0.88)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: "0 2px 14px rgba(0, 0, 0, 0.03)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "68px !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1340px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Brand Logo & Name */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "0.95rem",
                boxShadow: "0 4px 12px rgba(37, 99, 235, 0.35)",
              }}
            >
              MK
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {isRtl ? "محمد خسروی" : "Mohammad Khosravi"}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#2563eb",
                  fontWeight: 600,
                  display: { xs: "none", sm: "block" },
                  fontSize: "0.72rem",
                }}
              >
                {isRtl ? "مهندس نرم‌افزار" : "Software Engineer"}
              </Typography>
            </Box>
          </Link>

          {/* Desktop Nav Links */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    px: 1.6,
                    py: 0.6,
                    borderRadius: "12px",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#2563eb" : "#475569",
                    background: isActive ? "rgba(37, 99, 235, 0.08)" : "transparent",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.04)",
                      color: "#2563eb",
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Stack>

          {/* Right Controls: Language Switcher, Download CV, Mobile Hamburger */}
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            {/* Language Switcher */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "action.hover",
                borderRadius: 1,
                p: "2px",
                border: 1,
                borderColor: "divider",
              }}
            >
              <Chip
                label="FA"
                onClick={() => setLanguage("fa")}
                clickable
                color={language === "fa" ? "primary" : "default"}
                variant={language === "fa" ? "filled" : "outlined"}
              />
              <Chip
                label="EN"
                onClick={() => setLanguage("en")}
                clickable
                color={language === "en" ? "primary" : "default"}
                variant={language === "en" ? "filled" : "outlined"}
              />
            </Box>

            {/* Download CV Button */}
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component="a"
              href="/Mohammad_Khosravi_CV.pdf"
              download="Mohammad_Khosravi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DownloadIcon fontSize="small" />}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              {t("nav.downloadCv")}
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                p: 0.8,
              }}
              aria-label="open navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor={isRtl ? "right" : "left"}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            p: 2.5,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "0.85rem",
              }}
            >
              MK
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              {isRtl ? "محمد خسروی" : "Mohammad Khosravi"}
            </Typography>
          </Box>
          <IconButton onClick={() => setMobileMenuOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List sx={{ px: 0 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    color: isActive ? "primary.main" : "text.secondary",
                    fontWeight: isActive ? 700 : 500,
                    bgcolor: isActive ? "action.selected" : "transparent",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: "0.95rem", fontWeight: isActive ? 700 : 500 }}>
                        {link.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: "divider" }}>
          <Button
            variant="contained"
            fullWidth
            component="a"
            href="/Mohammad_Khosravi_CV.pdf"
            download="Mohammad_Khosravi_CV.pdf"
            target="_blank"
            startIcon={<DownloadIcon />}
            sx={{
              py: 1.2,
              fontWeight: 700,
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
            }}
          >
            {t("nav.downloadCv")}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
