"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  Stack,
} from "@mui/material";
import {
  WorkHistory as WorkIcon,
  CheckCircle as CheckCircleIcon,
  CalendarToday as CalendarIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { EXPERIENCES_DATA } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<WorkIcon />}
            label={t("experience.title")}
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
            {t("experience.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 620,
              mx: "auto",
            }}
          >
            {t("experience.subtitle")}
          </Typography>
        </Box>

        {/* Timeline Stack */}
        <Stack spacing={4}>
          {EXPERIENCES_DATA.map((exp) => (
            <Card
              key={exp.id}
              sx={{
                borderRadius: 3,
                p: { xs: 3, sm: 4 },
                position: "relative",
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "primary.main",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ mb: 0.5 }}
                  >
                    {isRtl ? exp.role.fa : exp.role.en}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                  >
                    {isRtl ? exp.company.fa : exp.company.en}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Chip
                    icon={<CalendarIcon sx={{ fontSize: "14px !important" }} />}
                    label={isRtl ? exp.period.fa : exp.period.en}
                    variant="outlined"
                  />
                  <Chip
                    icon={<ScheduleIcon sx={{ fontSize: "14px !important" }} />}
                    label={isRtl ? exp.duration.fa : exp.duration.en}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </Box>

              {/* Achievements */}
              <Stack spacing={1.5} sx={{ mb: 3 }}>
                {(isRtl ? exp.achievements.fa : exp.achievements.en).map((ach, achIdx) => (
                  <Box key={achIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                    <CheckCircleIcon color="success" sx={{ fontSize: "18px", mt: 0.4 }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                      }}
                    >
                      {ach}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Technologies */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {exp.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
