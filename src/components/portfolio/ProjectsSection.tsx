"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
} from "@mui/material";
import {
  FolderSpecial as FolderIcon,
  Collections as CollectionsIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_DATA } from "@/data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<FolderIcon />}
            label={t("projects.title")}
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
            {t("projects.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            {t("projects.subtitle")}
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3.5}>
          {PROJECTS_DATA.map((proj) => {
            const galleryCount = proj.gallery?.length || 1;
            return (
              <Grid key={proj.id} size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {/* Visual Image Header */}
                  <Box
                    component={Link}
                    href={`/projects/${proj.id}`}
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 200, sm: 240 },
                      bgcolor: "grey.900",
                      overflow: "hidden",
                      cursor: "pointer",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      component="img"
                      src={proj.image}
                      alt={isRtl ? proj.title.fa : proj.title.en}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    />

                    {/* Top Status & Gallery Counter Badges */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        right: 12,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    >
                      <Chip
                        size="small"
                        color={proj.status === "production" ? "success" : "warning"}
                        label={
                          proj.status === "production"
                            ? t("projects.status.production")
                            : t("projects.status.ongoing")
                        }
                      />

                      <Chip
                        size="small"
                        icon={<CollectionsIcon fontSize="small" />}
                        label={`${galleryCount} ${t("projects.screenshotsCount")}`}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.7)",
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Card Body */}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {/* Category */}
                    <Box sx={{ mb: 1 }}>
                      <Chip
                        size="small"
                        label={isRtl ? proj.category.fa : proj.category.en}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      component={Link}
                      href={`/projects/${proj.id}`}
                      variant="h5"
                      sx={{
                        mb: 1,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {isRtl ? proj.title.fa : proj.title.en}
                    </Typography>

                    {/* Short Summary */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        minHeight: 44,
                      }}
                    >
                      {isRtl ? proj.summary.fa : proj.summary.en}
                    </Typography>
                  </CardContent>

                  {/* Card Action Button */}
                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      href={`/projects/${proj.id}`}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      endIcon={isRtl ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                    >
                      {t("projects.viewDetails")}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
