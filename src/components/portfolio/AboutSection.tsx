"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Stack,
} from "@mui/material";
import {
  School as SchoolIcon,
  Architecture as ArchitectureIcon,
  Psychology as MindsetIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const principles = [
    {
      fa: "معماری سیستم بر پایه الگوهای آزموده (MVC, Pipe & Filter, Broker)",
      en: "System architecture based on proven patterns (MVC, Pipe & Filter, Broker)",
    },
    {
      fa: "بهینه‌سازی کارایی پایگاه‌های داده و کوئری‌ها برای مقیاس‌های سنگین",
      en: "Deep query & database tuning for high-throughput workloads",
    },
    {
      fa: "طراحی خطوط لوله استریم رویدادها با Apache Kafka و پروتکل کم‌سربار MQTT",
      en: "Resilient event streaming pipelines with Apache Kafka & lightweight MQTT",
    },
    {
      fa: "استقرار و کانتینرسازی سیستم‌ها با Docker و مانیتورینگ بلادرنگ با Grafana",
      en: "Containerized deployments via Docker with telemetry in Grafana",
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<MindsetIcon />}
            label={t("about.title")}
            color="primary"
            variant="outlined"
            sx={{ mb: 1.5 }}
          />
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
            }}
          >
            {t("about.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 620,
              mx: "auto",
            }}
          >
            {t("about.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {/* Left Column: Philosophy & Mindset */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                height: "100%",
                p: { xs: 2.5, sm: 4 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.contrastText",
                  }}
                >
                  <ArchitectureIcon />
                </Box>
                <Typography variant="h5">
                  {isRtl ? "رویکرد مهندسی و ارزش‌آفرینی" : "Engineering Mindset & Approach"}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  mb: 2.5,
                }}
              >
                {t("about.p1")}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  mb: 3.5,
                }}
              >
                {t("about.p2")}
              </Typography>

              <Typography variant="subtitle2" color="primary" sx={{ mb: 2 }}>
                {isRtl ? "اصول کلیدی در توسعه پروژه‌ها:" : "Core Engineering Principles:"}
              </Typography>

              <Stack spacing={1.8}>
                {principles.map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                    <CheckCircleIcon color="success" sx={{ fontSize: "20px", mt: 0.3 }} />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {isRtl ? item.fa : item.en}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>

          {/* Right Column: Academic Background */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                height: "100%",
                p: { xs: 2.5, sm: 4 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "primary.contrastText",
                  }}
                >
                  <SchoolIcon />
                </Box>
                <Typography variant="h5">
                  {t("about.eduTitle")}
                </Typography>
              </Box>

              <Stack spacing={3} sx={{ flexGrow: 1 }}>
                {/* Master's Degree */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: "action.hover",
                    border: 1,
                    borderColor: "divider",
                    position: "relative",
                  }}
                >
                  <Chip
                    label={isRtl ? "در حال تحصیل" : "In Progress"}
                    color="success"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: isRtl ? 14 : "auto",
                      right: isRtl ? "auto" : 14,
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {t("about.edu1.degree")}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ mb: 0.8 }}
                  >
                    {t("about.edu1.school")}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t("about.edu1.years")}
                  </Typography>
                </Box>

                {/* Bachelor's Degree */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: "action.hover",
                    border: 1,
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {t("about.edu2.degree")}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.8 }}
                  >
                    {t("about.edu2.school")}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {t("about.edu2.years")}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
