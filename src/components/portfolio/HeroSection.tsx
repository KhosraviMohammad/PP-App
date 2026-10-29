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
} from "@mui/material";
import {
  RocketLaunch as RocketIcon,
  Email as EmailIcon,
  Download as DownloadIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  WorkHistory as WorkOutlineIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
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
            <Typography variant="h6" color="text.secondary" sx={{ mb: 0.5 }}>
              {t("hero.greeting")}
            </Typography>

            <Typography
              variant="h1"
              color="primary.main"
              sx={{
                lineHeight: 1.15,
                mb: 1.5,
              }}
            >
              {isRtl ? PORTFOLIO_INFO.name.fa : PORTFOLIO_INFO.name.en}
            </Typography>

            {/* Role Title */}
            <Typography variant="h3" sx={{ mb: 2.5 }}>
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
                color="primary"
                size="large"
                href="#projects"
                endIcon={isRtl ? <ArrowBackIcon /> : <ArrowForwardIcon />}
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
                width: { xs: 260, sm: 300, md: 340 },
                height: { xs: 260, sm: 300, md: 340 },
              }}
            >
              {/* Card Container */}
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  p: 0.5,
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
                    borderRadius: 3.5,
                    display: "block",
                  }}
                />
              </Card>

              {/* Experience Badge */}
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
                    borderRadius: 1.5,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.contrastText",
                  }}
                >
                  <WorkOutlineIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
                    {isRtl ? "۴+ سال تجربه" : "4+ Years Exp"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {isRtl ? "سیستم‌های Enterprise" : "Enterprise Systems"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
