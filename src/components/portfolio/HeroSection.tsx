"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  RocketLaunch as RocketIcon,
  Email as EmailIcon,
  Download as DownloadIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Speed as SpeedIcon,
  Hub as HubIcon,
  Storage as StorageIcon,
  WorkHistory as WorkOutlineIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const statIcons = [
    <WorkOutlineIcon key="1" sx={{ color: "#2563eb" }} />,
    <HubIcon key="2" sx={{ color: "#06b6d4" }} />,
    <SpeedIcon key="3" sx={{ color: "#10b981" }} />,
    <StorageIcon key="4" sx={{ color: "#8b5cf6" }} />,
  ];

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Background ambient glows */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: isRtl ? "auto" : "15%",
          right: isRtl ? "15%" : "auto",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          right: isRtl ? "auto" : "10%",
          left: isRtl ? "10%" : "auto",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          {/* Left Text Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Status Badge */}
            <Chip
              icon={<RocketIcon />}
              label={t("hero.badge")}
              color="primary"
              variant="outlined"
              sx={{ mb: 2.5 }}
            />

            {/* Greeting & Name */}
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              {t("hero.greeting")}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                mb: 1.5,
                background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {isRtl ? PORTFOLIO_INFO.name.fa : PORTFOLIO_INFO.name.en}
            </Typography>

            {/* Role Title */}
            <Typography
              variant="h3"
              sx={{ mb: 2.5 }}
            >
              {t("hero.role")}
            </Typography>

            {/* Bio */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                maxWidth: 620,
                mb: 4,
              }}
            >
              {t("hero.bio")}
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: { xs: 4, md: 0 } }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={isRtl ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                sx={{
                  background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                  boxShadow: "0 4px 18px rgba(37, 99, 235, 0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
                    boxShadow: "0 6px 24px rgba(37, 99, 235, 0.45)",
                  },
                }}
              >
                {t("hero.cta.projects")}
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                startIcon={<EmailIcon />}
              >
                {t("hero.cta.contact")}
              </Button>

              <Button
                variant="text"
                color="primary"
                size="large"
                component="a"
                href="/Mohammad_Khosravi_CV.pdf"
                download="Mohammad_Khosravi_CV.pdf"
                target="_blank"
                startIcon={<DownloadIcon />}
              >
                {t("nav.downloadCv")}
              </Button>
            </Stack>
          </Grid>

          {/* Right Photo Column */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: { xs: 260, sm: 320, md: 360 },
                height: { xs: 260, sm: 320, md: 360 },
              }}
            >
              {/* Outer decorative ring */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "32px",
                  background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #10b981 100%)",
                  filter: "blur(14px)",
                  opacity: 0.5,
                }}
              />

              {/* Card Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "28px",
                  p: "4px",
                  background: "linear-gradient(135deg, rgba(37,99,235,0.7) 0%, rgba(6,182,212,0.7) 100%)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Box
                  component="img"
                  src={PORTFOLIO_INFO.avatar}
                  alt={isRtl ? PORTFOLIO_INFO.name.fa : PORTFOLIO_INFO.name.en}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                    display: "block",
                  }}
                />
              </Box>

              {/* Floating Experience Badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  left: isRtl ? "auto" : -16,
                  right: isRtl ? -16 : "auto",
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  px: 2,
                  py: 1.2,
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 10px 30px rgba(0, 0, 0, 0.08)"
                      : "0 10px 30px rgba(0, 0, 0, 0.4)",
                  border: 1,
                  borderColor: "divider",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <WorkOutlineIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
                    {isRtl ? "۴+ سال تجربه" : "4+ Years Exp"}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {isRtl ? "سیستم‌های Enterprise" : "Enterprise Systems"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Quick Stats Grid */}
        <Grid container spacing={2.5} sx={{ mt: { xs: 6, md: 8 } }}>
          {PORTFOLIO_INFO.stats.map((stat, idx) => (
            <Grid key={idx} size={{ xs: 6, md: 3 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: (theme) =>
                      `0 10px 28px ${theme.palette.mode === "light" ? "rgba(37, 99, 235, 0.12)" : "rgba(0, 0, 0, 0.3)"}`,
                  },
                }}
              >
                <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "10px",
                        bgcolor: "action.hover",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {statIcons[idx]}
                    </Box>
                    <Typography variant="h4">
                      {isRtl ? stat.value : stat.enValue}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {isRtl ? stat.label.fa : stat.label.en}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
