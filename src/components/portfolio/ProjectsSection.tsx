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
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_DATA, type ProjectItem } from "@/data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenDetails = (proj: ProjectItem) => {
    setSelectedProject(proj);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
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
              maxWidth: 620,
              mx: "auto",
            }}
          >
            {t("projects.subtitle")}
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3.5}>
          {PROJECTS_DATA.map((proj) => (
            <Grid key={proj.id} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: (theme) =>
                      `0 16px 36px ${alpha(theme.palette.primary.main, 0.16)}`,
                    borderColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
                  {/* Top Badges: Category & Status */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={isRtl ? proj.category.fa : proj.category.en}
                      color="primary"
                      variant="outlined"
                    />

                    <Chip
                      label={
                        proj.status === "production"
                          ? isRtl
                            ? "پروداکشن"
                            : "Production"
                          : isRtl
                          ? "در حال توسعه"
                          : "In Progress"
                      }
                      color={proj.status === "production" ? "success" : "warning"}
                      variant="filled"
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1.5,
                      lineHeight: 1.4,
                    }}
                  >
                    {isRtl ? proj.title.fa : proj.title.en}
                  </Typography>

                  {/* Summary */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2.5,
                    }}
                  >
                    {isRtl ? proj.summary.fa : proj.summary.en}
                  </Typography>

                  {/* Metrics Badges if present */}
                  {proj.metrics && (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mb: 2.5,
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "action.hover",
                      }}
                    >
                      {proj.metrics.map((m, mIdx) => (
                        <Box key={mIdx} sx={{ minWidth: 100 }}>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: "block" }}
                          >
                            {isRtl ? m.label.fa : m.label.en}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="primary"
                          >
                            {m.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Tech Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                    {proj.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ px: 3.5, pb: 3, pt: 0 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => handleOpenDetails(proj)}
                  >
                    {t("projects.viewLive")}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Details Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              p: 1,
            },
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                pt: 2.5,
                px: 3,
              }}
            >
              <Box>
                <Chip
                  label={isRtl ? selectedProject.category.fa : selectedProject.category.en}
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Typography variant="h5">
                  {isRtl ? selectedProject.title.fa : selectedProject.title.en}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDetails}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ px: 3, pb: 4 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {isRtl ? selectedProject.description.fa : selectedProject.description.en}
              </Typography>

              <Typography variant="h6" color="primary" sx={{ mb: 1.5 }}>
                {isRtl ? "دستاوردها و جزئیات فنی:" : "Key Technical Highlights:"}
              </Typography>

              <Stack spacing={1.5} sx={{ mb: 3.5 }}>
                {(isRtl ? selectedProject.highlights.fa : selectedProject.highlights.en).map(
                  (hl, hlIdx) => (
                    <Box key={hlIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircleIcon color="success" sx={{ fontSize: "20px", mt: 0.3 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.6,
                        }}
                      >
                        {hl}
                      </Typography>
                    </Box>
                  ),
                )}
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                {isRtl ? "تکنولوژی‌ها و ابزارهای مورد استفاده:" : "Technologies & Tools Used:"}
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
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;
