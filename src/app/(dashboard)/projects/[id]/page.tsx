"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Grid,
  Stack,
  IconButton,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Collections as CollectionsIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Layers as LayersIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_DATA, type ProjectItem } from "@/data/portfolioData";

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isRtl, t } = useLanguage();

  const projectId = params?.id as string;
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === projectId);
  const project: ProjectItem | undefined = PROJECTS_DATA[projectIndex];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // If project is not found
  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
          {isRtl ? "پروژه یافت نشد" : "Project Not Found"}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {isRtl
            ? "متأسفانه پروژه‌ای با این شناسه پیدا نشد یا ممکن است جابه‌جا شده باشد."
            : "The requested project could not be found or may have been moved."}
        </Typography>
        <Button
          component={Link}
          href="/#projects"
          variant="contained"
          startIcon={isRtl ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        >
          {isRtl ? "بازگشت به فهرست پروژه‌ها" : "Back to Projects"}
        </Button>
      </Container>
    );
  }

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Next / Previous projects for bottom navigation
  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject =
    projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : null;

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: "background.default", minHeight: "80vh" }}>
      <Container maxWidth="lg">
        {/* Navigation / Breadcrumb Bar */}
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: { xs: 3, sm: 4 },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button
            component={Link}
            href="/#projects"
            variant="outlined"
            size="small"
            startIcon={isRtl ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            sx={{ color: "text.primary" }}
          >
            {isRtl ? "بازگشت به پروژه‌ها" : "Back to Projects"}
          </Button>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <Chip
              size="medium"
              label={isRtl ? project.category.fa : project.category.en}
              color="primary"
              variant="outlined"
            />
            <Chip
              size="medium"
              label={
                project.status === "production"
                  ? t("projects.status.production")
                  : t("projects.status.ongoing")
              }
              color={project.status === "production" ? "success" : "warning"}
            />
          </Stack>
        </Stack>

        {/* Project Header Info */}
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.65rem", sm: "2.2rem", md: "2.6rem" },
              lineHeight: 1.3,
              mb: 2,
              color: "text.primary",
            }}
          >
            {isRtl ? project.title.fa : project.title.en}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem" },
              lineHeight: 1.8,
              maxWidth: "960px",
            }}
          >
            {isRtl ? project.summary.fa : project.summary.en}
          </Typography>
        </Box>

        {/* Screenshot Gallery Showcase */}
        <Card
          sx={{
            mb: { xs: 4, sm: 5 },
            overflow: "hidden",
            borderRadius: 3,
            border: 1,
            borderColor: "divider",
          }}
        >
          <CardContent sx={{ p: { xs: 1.5, sm: 3 } }}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.5 }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                }}
              >
                <CollectionsIcon color="primary" fontSize="small" />
                <span>{t("projects.gallery")}</span>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {isRtl
                  ? `تصویر ${activeImageIndex + 1} از ${gallery.length}`
                  : `Image ${activeImageIndex + 1} of ${gallery.length}`}
              </Typography>
            </Stack>

            {/* Main Large Image Frame */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 240, sm: 440, md: 560 },
                bgcolor: "grey.950",
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={gallery[activeImageIndex] || project.image}
                alt={`${isRtl ? project.title.fa : project.title.en} - ${activeImageIndex + 1}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              {/* Previous Button */}
              {gallery.length > 1 && (
                <IconButton
                  onClick={isRtl ? handleNextImage : handlePrevImage}
                  sx={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "transparent",
                    border: "1px solid transparent",
                    color: "#fff",
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.75))",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.55)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                  aria-label="Previous image"
                >
                  <ChevronRightIcon sx={{ fontSize: { xs: 28, sm: 36 } }} />
                </IconButton>
              )}

              {/* Next Button */}
              {gallery.length > 1 && (
                <IconButton
                  onClick={isRtl ? handlePrevImage : handleNextImage}
                  sx={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "transparent",
                    border: "1px solid transparent",
                    color: "#fff",
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.75))",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.55)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                  aria-label="Next image"
                >
                  <ChevronLeftIcon sx={{ fontSize: { xs: 28, sm: 36 } }} />
                </IconButton>
              )}
            </Box>

            {/* Thumbnails Row */}
            {gallery.length > 1 && (
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  mt: 2,
                  overflowX: "auto",
                  py: 0.5,
                  scrollbarWidth: "thin",
                }}
              >
                {gallery.map((thumbSrc, tIdx) => {
                  const isActive = tIdx === activeImageIndex;
                  return (
                    <Box
                      key={tIdx}
                      onClick={() => setActiveImageIndex(tIdx)}
                      sx={{
                        flexShrink: 0,
                        width: { xs: 72, sm: 110 },
                        height: { xs: 48, sm: 72 },
                        borderRadius: 1.5,
                        overflow: "hidden",
                        cursor: "pointer",
                        border: 2,
                        borderColor: isActive ? "primary.main" : "transparent",
                        opacity: isActive ? 1 : 0.65,
                        transition: "all 0.2s ease",
                        bgcolor: "grey.900",
                        "&:hover": {
                          opacity: 1,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={thumbSrc}
                        alt={`Thumbnail ${tIdx + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                  );
                })}
              </Stack>
            )}
          </CardContent>
        </Card>

        {/* Detailed Description & Architecture */}
        <Box sx={{ mb: { xs: 4, sm: 5 } }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 1.2,
            }}
          >
            <LayersIcon color="primary" />
            <span>
              {isRtl ? "شرح جامع و معماری سامانه" : "System Architecture & Comprehensive Overview"}
            </span>
          </Typography>

          <Card sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 2.5, border: 1, borderColor: "divider" }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                lineHeight: 1.95,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                whiteSpace: "pre-line",
              }}
            >
              {isRtl ? project.description.fa : project.description.en}
            </Typography>
          </Card>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Navigation: Previous / Next Project */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            {prevProject && (
              <Button
                component={Link}
                href={`/projects/${prevProject.id}`}
                variant="outlined"
                fullWidth
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isRtl ? "flex-end" : "flex-start",
                  borderRadius: 2.5,
                  borderColor: "divider",
                  textAlign: isRtl ? "right" : "left",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                  },
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {isRtl ? "← پروژه قبلی" : "← Previous Project"}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
                  {isRtl ? prevProject.title.fa : prevProject.title.en}
                </Typography>
              </Button>
            )}
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            {nextProject && (
              <Button
                component={Link}
                href={`/projects/${nextProject.id}`}
                variant="outlined"
                fullWidth
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isRtl ? "flex-start" : "flex-end",
                  borderRadius: 2.5,
                  borderColor: "divider",
                  textAlign: isRtl ? "left" : "right",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                  },
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {isRtl ? "پروژه بعدی →" : "Next Project →"}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
                  {isRtl ? nextProject.title.fa : nextProject.title.en}
                </Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
