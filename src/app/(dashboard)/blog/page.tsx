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
  TextField,
  InputAdornment,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  Search as SearchIcon,
  Article as ArticleIcon,
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Close as CloseIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { BLOG_POSTS, type BlogPost } from "@/data/blogData";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import { toast } from "react-toastify";

export default function BlogPage() {
  const { isRtl, t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Extract unique categories
  const categories = [
    "ALL",
    ...Array.from(new Set(BLOG_POSTS.map((post) => (isRtl ? post.category.fa : post.category.en)))),
  ];

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const postTitle = isRtl ? post.title.fa : post.title.en;
    const postExcerpt = isRtl ? post.excerpt.fa : post.excerpt.en;
    const postCat = isRtl ? post.category.fa : post.category.en;

    const matchesSearch =
      postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      postExcerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "ALL" || postCat === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success(isRtl ? "لینک مقاله در کلیپ‌بورد کپی شد!" : "Article link copied to clipboard!");
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<ArticleIcon />}
            label={t("blog.title")}
            color="primary"
            variant="outlined"
            sx={{ mb: 1.5 }}
          />
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              letterSpacing: "-0.02em",
            }}
          >
            {t("blog.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 640,
              mx: "auto",
            }}
          >
            {t("blog.subtitle")}
          </Typography>
        </Box>

        {/* Search and Filters Bar */}
        <Box
          sx={{
            mb: 5,
            p: 2.5,
            borderRadius: 3,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            boxShadow: (theme) =>
              theme.palette.mode === "light"
                ? "0 4px 16px rgba(0, 0, 0, 0.03)"
                : "none",
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            {/* Search Input */}
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField
                fullWidth
                size="small"
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>

            {/* Categories Chips */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  overflowX: "auto",
                  pb: { xs: 1, md: 0 },
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const label = cat === "ALL" ? t("blog.allCategories") : cat;
                  return (
                    <Chip
                      key={cat}
                      label={label}
                      onClick={() => setSelectedCategory(cat)}
                      clickable
                      color={isSelected ? "primary" : "default"}
                      variant={isSelected ? "filled" : "outlined"}
                    />
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Posts Grid */}
        <Grid container spacing={3.5}>
          {filteredPosts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, md: 6 }}>
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
                  {/* Category & Reading Time */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={isRtl ? post.category.fa : post.category.en}
                      color="primary"
                      variant="outlined"
                    />
                    <Stack
                      direction="row"
                      spacing={0.6}
                      sx={{ alignItems: "center", color: "text.secondary" }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 15 }} />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {post.readingTime} {t("blog.readTime")}
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    onClick={() => setActiveArticle(post)}
                    sx={{
                      mb: 1.5,
                      lineHeight: 1.45,
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {isRtl ? post.title.fa : post.title.en}
                  </Typography>

                  {/* Excerpt */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2.5,
                    }}
                  >
                    {isRtl ? post.excerpt.fa : post.excerpt.en}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 1 }}>
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={`#${tag}`}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    px: 3.5,
                    pb: 3,
                    pt: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={0.8}
                    sx={{ alignItems: "center", color: "text.secondary" }}
                  >
                    <CalendarIcon sx={{ fontSize: 15 }} />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {isRtl ? post.date.fa : post.date.en}
                    </Typography>
                  </Stack>

                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => setActiveArticle(post)}
                    endIcon={isRtl ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                  >
                    {t("blog.readMore")}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              {isRtl ? "مقاله‌ای با این مشخصات یافت نشد." : "No articles found matching your criteria."}
            </Typography>
          </Box>
        )}
      </Container>

      {/* Article Reader Dialog */}
      <Dialog
        open={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              p: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        {activeArticle && (
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
                  label={isRtl ? activeArticle.category.fa : activeArticle.category.en}
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 1.5 }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    lineHeight: 1.35,
                  }}
                >
                  {isRtl ? activeArticle.title.fa : activeArticle.title.en}
                </Typography>
              </Box>
              <IconButton onClick={() => setActiveArticle(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ px: 3, pb: 4 }}>
              {/* Meta bar: Author & Date & Reading time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 2,
                  mb: 3,
                  borderBottom: 1,
                  borderColor: "divider",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    src={PORTFOLIO_INFO.avatar}
                    sx={{
                      width: 42,
                      height: 42,
                      border: (theme) => `2px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle2">
                      {isRtl ? PORTFOLIO_INFO.name.fa : PORTFOLIO_INFO.name.en}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {isRtl ? PORTFOLIO_INFO.role.fa : PORTFOLIO_INFO.role.en}
                    </Typography>
                  </Box>
                </Box>

                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                  <Typography variant="caption" color="text.secondary">
                    {isRtl ? activeArticle.date.fa : activeArticle.date.en}
                  </Typography>
                  <Chip
                    label={`${activeArticle.readingTime} ${t("blog.readTime")}`}
                    variant="outlined"
                  />
                  <IconButton size="small" onClick={() => handleShare(activeArticle)}>
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>

              {/* Formatted Content */}
              <Box
                sx={{
                  color: "text.primary",
                  lineHeight: 2,
                  fontSize: "1.02rem",
                  "& h3": {
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    mt: 3,
                    mb: 1.5,
                  },
                  "& p": {
                    mb: 2,
                  },
                  "& pre, & code": {
                    direction: "ltr",
                    textAlign: "left",
                    fontFamily: "monospace",
                    background: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : alpha(theme.palette.common.white, 0.06),
                    color: "text.primary",
                    p: 1.5,
                    borderRadius: 2,
                    display: "block",
                    overflowX: "auto",
                    my: 2,
                    fontSize: "0.9rem",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  },
                  "& ul": {
                    pr: isRtl ? 3 : 0,
                    pl: !isRtl ? 3 : 0,
                    mb: 2,
                  },
                  "& li": {
                    mb: 1,
                  },
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: (isRtl ? activeArticle.content.fa : activeArticle.content.en)
                      .replace(/\n\n/g, "<br/><br/>")
                      .replace(/### (.*)/g, "<h3>$1</h3>")
                      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>"),
                  }}
                />
              </Box>

              <Divider sx={{ my: 4 }} />

              {/* Article Footer & Tags */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                  {activeArticle.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={`#${tag}`}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => setActiveArticle(null)}
                >
                  {t("blog.back")}
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
