"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  Stars as StarsIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const SkillsSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Storage":
        return <StorageIcon color="secondary" />;
      case "Web":
        return <WebIcon color="info" />;
      case "Cloud":
        return <CloudIcon color="success" />;
      default:
        return <CodeIcon color="primary" />;
    }
  };

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<StarsIcon />}
            label={t("skills.title")}
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
            {t("skills.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {t("skills.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  p: 3,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getCategoryIcon(cat.iconName)}
                  </Box>
                  <Typography variant="h6">
                    {isRtl ? cat.title.fa : cat.title.en}
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {cat.skills.map((skill, sIdx) => (
                    <Box key={sIdx}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 0.6,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color={skill.highlight ? "text.primary" : "text.secondary"}
                          fontWeight={skill.highlight ? 600 : 400}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color={skill.highlight ? "primary.main" : "text.secondary"}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        color={skill.highlight ? "primary" : "inherit"}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
