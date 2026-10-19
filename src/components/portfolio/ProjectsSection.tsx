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
import { alpha } from "@mui/material/styles";
import {
  FolderSpecial as FolderIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
  Collections as CollectionsIcon,
  Visibility as VisibilityIcon,
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
            sx={{ mb: 1.5, fontWeight: 600 }}
          />
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontWeight: 800,
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
                    borderRadius: 3.5,
                    border: 1,
                    borderColor: "divider",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: (theme) =>
                        `0 20px 40px ${alpha(theme.palette.primary.main, 0.16)}`,
                      borderColor: (theme) => alpha(theme.palette.primary.main, 0.4),
                      "& .project-card-img": {
                        transform: "scale(1.05)",
                      },
                      "& .project-card-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Visual Image Header */}
                  <Box
                    onClick={() => handleOpenDetails(proj, 0)}
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 210, sm: 260 },
                      bgcolor: "grey.900",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      className="project-card-img"
                      src={proj.image}
                      alt={isRtl ? proj.title.fa : proj.title.en}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />

                    {/* Top Status & Gallery Counter Badges */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        right: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    >
                      <Chip
                        size="small"
                        label={
                          proj.status === "production"
                            ? t("projects.status.production")
                            : t("projects.status.ongoing")
                        }
                        sx={{
                          backdropFilter: "blur(10px)",
                          bgcolor:
                            proj.status === "production"
                              ? "rgba(16, 185, 129, 0.9)"
                              : "rgba(245, 158, 11, 0.9)",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.74rem",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                        }}
                      />

                      <Chip
                        size="small"
                        icon={<CollectionsIcon sx={{ fontSize: "15px !important", color: "#fff !important" }} />}
                        label={`${galleryCount} ${t("projects.screenshotsCount")}`}
                        sx={{
                          backdropFilter: "blur(10px)",
                          bgcolor: "rgba(15, 23, 42, 0.78)",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.74rem",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        }}
                      />
                    </Box>

                    {/* Hover Visual Prompt Overlay */}
                    <Box
                      className="project-card-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(15, 23, 42, 0.5)",
                        backdropFilter: "blur(2px)",
                        opacity: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.3s ease",
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          px: 2.2,
                          py: 1,
                          borderRadius: 999,
                          bgcolor: "rgba(255, 255, 255, 0.95)",
                          color: "#0f172a",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                        }}
                      >
                        <VisibilityIcon sx={{ fontSize: 18, color: "primary.main" }} />
                        <span>{t("projects.viewDetails")}</span>
                      </Box>
                    </Box>
                  </Box>

                  {/* Card Body - Concise and Clean */}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {/* Category */}
                    <Box sx={{ mb: 1.2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          color: "primary.main",
                          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 1.5,
                          display: "inline-block",
                        }}
                      >
                        {isRtl ? proj.category.fa : proj.category.en}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        fontWeight: 800,
                        mb: 1.2,
                        lineHeight: 1.45,
                        cursor: "pointer",
                        "&:hover": { color: "primary.main" },
                        transition: "color 0.2s",
                      }}
                      onClick={() => handleOpenDetails(proj, 0)}
                    >
                      {isRtl ? proj.title.fa : proj.title.en}
                    </Typography>

                    {/* Short Concise Summary */}
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

                    {/* Tech Pills (Clean, top tags) */}
                    <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                      {proj.tags.slice(0, 4).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: "0.75rem",
                            borderRadius: 1.5,
                            bgcolor: "action.hover",
                            borderColor: "divider",
                          }}
                        />
                      ))}
                      {proj.tags.length > 4 && (
                        <Chip
                          label={`+${proj.tags.length - 4}`}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: "0.72rem",
                            borderRadius: 1.5,
                            bgcolor: "action.hover",
                          }}
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
                      sx={{
                        borderRadius: 2,
                        py: 1,
                        fontWeight: 700,
                        textTransform: "none",
                      }}
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

      {/* Comprehensive Project Details & Gallery Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDetails}
        maxWidth="lg"
        fullWidth
        scroll="body"
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3.5,
              overflow: "hidden",
              bgcolor: "background.paper",
            },
          },
        }}
      >
        {selectedProject && (
          <>
            {/* Modal Header */}
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                p: { xs: 2.5, md: 3 },
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
                    sx={{ fontWeight: 600 }}
                  />
                  <Chip
                    size="small"
                    label={
                      selectedProject.status === "production"
                        ? t("projects.status.production")
                        : t("projects.status.ongoing")
                    }
                    color={selectedProject.status === "production" ? "success" : "warning"}
                    sx={{ fontWeight: 600 }}
                  />
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: "1.3rem", sm: "1.65rem" } }}>
                  {isRtl ? selectedProject.title.fa : selectedProject.title.en}
                </Typography>
              </Box>

              <IconButton
                onClick={handleCloseDetails}
                sx={{
                  bgcolor: "action.hover",
                  "&:hover": { bgcolor: "action.selected" },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
              {/* Interactive Screenshot Gallery */}
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 1 }}>
                    <CollectionsIcon color="primary" />
                    <span>{t("projects.gallery")}</span>
                  </Typography>

                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
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
                    height: { xs: 260, sm: 400, md: 480 },
                    bgcolor: "#0a0f1d",
                    borderRadius: 3,
                    border: 1,
                    borderColor: "rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
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
                      transition: "opacity 0.2s ease-in-out",
                    }}
                  />

                  {/* Previous Button */}
                  {selectedProject.gallery.length > 1 && (
                    <IconButton
                      onClick={isRtl ? handleNextImage : handlePrevImage}
                      sx={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(15, 23, 42, 0.75)",
                        color: "#fff",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        "&:hover": { bgcolor: "rgba(15, 23, 42, 0.95)" },
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
                        right: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        bgcolor: "rgba(15, 23, 42, 0.75)",
                        color: "#fff",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        "&:hover": { bgcolor: "rgba(15, 23, 42, 0.95)" },
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
                      py: 0.8,
                      px: 0.5,
                      "&::-webkit-scrollbar": { height: 6 },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "divider",
                        borderRadius: 3,
                      },
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
                            width: { xs: 80, sm: 104 },
                            height: { xs: 52, sm: 68 },
                            borderRadius: 2,
                            overflow: "hidden",
                            cursor: "pointer",
                            border: 2,
                            borderColor: isActive ? "primary.main" : "transparent",
                            opacity: isActive ? 1 : 0.6,
                            bgcolor: "#0f172a",
                            boxShadow: isActive ? (theme) => `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}` : "none",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              opacity: 0.95,
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
              </Box>

              {/* Metrics Grid if available */}
              {selectedProject.metrics && (
                <Box sx={{ mb: 3.5 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700, color: "text.primary" }}>
                    {t("projects.metricsTitle")}
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedProject.metrics.map((m, mIdx) => (
                      <Grid key={mIdx} size={{ xs: 12, sm: 4 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2.5,
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
                            border: 1,
                            borderColor: (theme) => alpha(theme.palette.primary.main, 0.15),
                          }}
                        >
                          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                            {isRtl ? m.label.fa : m.label.en}
                          </Typography>
                          <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
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
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: "text.primary" }}>
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

              {/* Key Technical Highlights Checklist */}
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700, color: "text.primary" }}>
                  {t("projects.highlights")}
                </Typography>

                <Stack spacing={1.5}>
                  {(isRtl ? selectedProject.highlights.fa : selectedProject.highlights.en).map(
                    (hl, hlIdx) => (
                      <Box key={hlIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.3 }}>
                        <CheckCircleIcon color="success" sx={{ fontSize: "20px", mt: 0.3, flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.7,
                            fontWeight: 500,
                          }}
                        >
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
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700 }}>
                  {t("projects.technologies")}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {selectedProject.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      color="primary"
                      variant="outlined"
                      sx={{ fontWeight: 600, borderRadius: 2 }}
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

