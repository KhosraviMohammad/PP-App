"use client";

import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
} from "@mui/icons-material";
import Header from "@/components/layouts/Header";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isRtl } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          pt: "68px", // Header height
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>

      {/* Modern Minimal Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={1.5} sx={{ justifyContent: "center", mb: 2 }}>
            <IconButton
              component="a"
              href={PORTFOLIO_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={PORTFOLIO_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={PORTFOLIO_INFO.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <TelegramIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={`mailto:${PORTFOLIO_INFO.email}`}
              size="small"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.88rem",
              mb: 0.5,
            }}
          >
            {isRtl
              ? "طراحی و توسعه با Next.js، React و TypeScript"
              : "Designed & Built with Next.js, React & TypeScript"}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontSize: "0.78rem",
            }}
          >
            © {new Date().getFullYear()}{" "}
            {isRtl
              ? "محمد خسروی - تمامی حقوق محفوظ است"
              : "Mohammad Khosravi - All rights reserved"}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
