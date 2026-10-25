"use client";

import React, { useState } from "react";
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
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
} from "@mui/material";
import {
  FolderSpecial as FolderIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
  Collections as CollectionsIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_DATA, type ProjectItem } from "@/data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleOpenDetails = (proj: ProjectItem, imgIndex: number = 0) => {
    setSelectedProject(proj);
    setActiveImageIndex(imgIndex);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (!selectedProject || !selectedProject.gallery?.length) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const handlePrevImage = () => {
    if (!selectedProject || !selectedProject.gallery?.length) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length,
    );
  };

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
                  }}
                >
                  {/* Visual Image Header */}
                  <Box
                    onClick={() => handleOpenDetails(proj, 0)}
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 200, sm: 240 },
                      bgcolor: "grey.900",
                      overflow: "hidden",
                      cursor: "pointer",
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
                      variant="h5"
                      sx={{
                        mb: 1,
                        cursor: "pointer",
                        "&:hover": { color: "primary.main" },
                      }}
                      onClick={() => handleOpenDetails(proj, 0)}
                    >
                      {isRtl ? proj.title.fa : proj.title.en}
                    </Typography>

                    {/* Short Summary */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        mb: 2,
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

                    {/* Tech Pills */}
                    <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                      {proj.tags.slice(0, 4).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                      {proj.tags.length > 4 && (
                        <Chip
                          label={`+${proj.tags.length - 4}`}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </CardContent>

                  {/* Card Action Button */}
                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      endIcon={isRtl ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                      onClick={() => handleOpenDetails(proj, 0)}
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

      {/* Project Details & Gallery Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDetails}
        maxWidth="lg"
        fullWidth
        scroll="body"
      >
        {selectedProject && (
          <>
            {/* Modal Header */}
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                p: { xs: 2, sm: 3 },
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Box sx={{ pr: isRtl ? 0 : 2, pl: isRtl ? 2 : 0 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap", gap: 1 }}>
                  <Chip
                    size="small"
                    label={isRtl ? selectedProject.category.fa : selectedProject.category.en}
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    size="small"
                    label={
                      selectedProject.status === "production"
                        ? t("projects.status.production")
                        : t("projects.status.ongoing")
                    }
                    color={selectedProject.status === "production" ? "success" : "warning"}
                  />
                </Stack>
                <Typography variant="h4" sx={{ fontSize: { xs: "1.25rem", sm: "1.6rem" } }}>
                  {isRtl ? selectedProject.title.fa : selectedProject.title.en}
                </Typography>
              </Box>

              <IconButton onClick={handleCloseDetails} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
              {/* Screenshot Gallery */}
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CollectionsIcon color="primary" fontSize="small" />
                    <span>{t("projects.gallery")}</span>
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {isRtl
                      ? `تصویر ${activeImageIndex + 1} از ${selectedProject.gallery.length}`
                      : `Image ${activeImageIndex + 1} of ${selectedProject.gallery.length}`}
                  </Typography>
                </Stack>

                {/* Main Large Image Frame */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 240, sm: 380, md: 460 },
                    bgcolor: "grey.900",
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
                    src={selectedProject.gallery[activeImageIndex] || selectedProject.image}
                    alt={`${isRtl ? selectedProject.title.fa : selectedProject.title.en} - ${activeImageIndex + 1}`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />

                  {/* Previous Button */}
                  {selectedProject.gallery.length > 1 && (
                    <IconButton
                      onClick={isRtl ? handleNextImage : handlePrevImage}
                      sx={{
                        position: "absolute",
                        left: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.85)" },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                  )}

                  {/* Next Button */}
                  {selectedProject.gallery.length > 1 && (
                    <IconButton
                      onClick={isRtl ? handlePrevImage : handleNextImage}
                      sx={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.85)" },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  )}
                </Box>

                {/* Thumbnails Row */}
                {selectedProject.gallery.length > 1 && (
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      mt: 2,
                      overflowX: "auto",
                      py: 0.5,
                    }}
                  >
                    {selectedProject.gallery.map((thumbSrc, tIdx) => {
                      const isActive = tIdx === activeImageIndex;
                      return (
                        <Box
                          key={tIdx}
                          onClick={() => setActiveImageIndex(tIdx)}
                          sx={{
                            flexShrink: 0,
                            width: { xs: 70, sm: 96 },
                            height: { xs: 46, sm: 62 },
                            borderRadius: 1.5,
                            overflow: "hidden",
                            cursor: "pointer",
                            border: 2,
                            borderColor: isActive ? "primary.main" : "transparent",
                            opacity: isActive ? 1 : 0.6,
                            bgcolor: "grey.900",
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
              </Box>

              {/* Metrics Grid */}
              {selectedProject.metrics && (
                <Box sx={{ mb: 3.5 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1.5, color: "text.primary" }}>
                    {t("projects.metricsTitle")}
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedProject.metrics.map((m, mIdx) => (
                      <Grid key={mIdx} size={{ xs: 12, sm: 4 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: "action.hover",
                            border: 1,
                            borderColor: "divider",
                          }}
                        >
                          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                            {isRtl ? m.label.fa : m.label.en}
                          </Typography>
                          <Typography variant="h6" color="primary">
                            {m.value}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Detailed Description */}
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
                  {isRtl ? "شرح جامع و معماری سامانه:" : "System Architecture & Description:"}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.85,
                    whiteSpace: "pre-line",
                  }}
                >
                  {isRtl ? selectedProject.description.fa : selectedProject.description.en}
                </Typography>
              </Box>

              {/* Key Technical Highlights */}
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, color: "text.primary" }}>
                  {t("projects.highlights")}
                </Typography>

                <Stack spacing={1.5}>
                  {(isRtl ? selectedProject.highlights.fa : selectedProject.highlights.en).map(
                    (hl, hlIdx) => (
                      <Box key={hlIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.3 }}>
                        <CheckCircleIcon color="success" sx={{ fontSize: "18px", mt: 0.3, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                          {hl}
                        </Typography>
                      </Box>
                    ),
                  )}
                </Stack>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Technologies and Tools Used */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                  {t("projects.technologies")}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {selectedProject.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;
