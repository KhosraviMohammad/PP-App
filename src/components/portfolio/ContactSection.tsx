"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Chip,
  Stack,
  IconButton,
  Alert,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Telegram as TelegramIcon,
  CheckCircle as CheckCircleIcon,
  ConnectWithoutContact as ConnectIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/context/LanguageContext";
import { PORTFOLIO_INFO } from "@/data/portfolioData";
import { toast } from "react-toastify";

export const ContactSection: React.FC = () => {
  const { isRtl, t } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error(isRtl ? "لطفاً فیلدهای ضروری را تکمیل کنید" : "Please fill in all required fields");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(t("contact.form.success"));
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Chip
            icon={<ConnectIcon />}
            label={t("contact.title")}
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
            {t("contact.title")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 620,
              mx: "auto",
            }}
          >
            {t("contact.subtitle")}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {/* Left Column: Direct Contact Info & Socials */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                height: "100%",
                p: { xs: 3, sm: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  {isRtl ? "اطلاعات تماس مستقیم" : "Contact Information"}
                </Typography>

                <Stack spacing={2.5}>
                  {/* Email */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: "action.hover",
                        color: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmailIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {t("contact.email")}
                      </Typography>
                      <Typography
                        component="a"
                        variant="body2"
                        href={`mailto:${PORTFOLIO_INFO.email}`}
                        sx={{
                          color: "text.primary",
                          textDecoration: "none",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {PORTFOLIO_INFO.email}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: "action.hover",
                        color: "success.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {t("contact.phone")}
                      </Typography>
                      <Typography
                        component="a"
                        variant="body2"
                        href={`tel:${PORTFOLIO_INFO.phone}`}
                        sx={{
                          color: "text.primary",
                          textDecoration: "none",
                          direction: "ltr",
                          display: "inline-block",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {PORTFOLIO_INFO.phone}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Location */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: "action.hover",
                        color: "secondary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationIcon />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {t("contact.location")}
                      </Typography>
                      <Typography variant="body1">
                        {isRtl ? PORTFOLIO_INFO.location.fa : PORTFOLIO_INFO.location.en}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Social Channels */}
              <Box sx={{ mt: 4, pt: 3, borderTop: 1, borderColor: "divider" }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {isRtl ? "شبکه‌های اجتماعی و حرفه‌ای:" : "Social & Professional Profiles:"}
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  <IconButton
                    component="a"
                    href={PORTFOLIO_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "action.hover",
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={PORTFOLIO_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "action.hover",
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={PORTFOLIO_INFO.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "action.hover",
                    }}
                  >
                    <TelegramIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Card>
          </Grid>

          {/* Right Column: Interactive Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                height: "100%",
                p: { xs: 3, sm: 4 },
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>
                {isRtl ? "ارسال پیام آنلاین" : "Send an Online Message"}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {isRtl
                  ? "فرم زیر را پر کنید؛ پیام شما در اسرع وقت پاسخ داده خواهد شد."
                  : "Fill out the form below and I will respond to your inquiry as soon as possible."}
              </Typography>

              {submitted && (
                <Alert
                  severity="success"
                  icon={<CheckCircleIcon />}
                  sx={{ mb: 3 }}
                  onClose={() => setSubmitted(false)}
                >
                  {t("contact.form.success")}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label={t("contact.form.name")}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label={t("contact.form.email")}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t("contact.form.subject")}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      label={t("contact.form.message")}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      endIcon={<SendIcon sx={{ transform: isRtl ? "rotate(180deg)" : "none" }} />}
                    >
                      {loading ? (isRtl ? "در حال ارسال..." : "Sending...") : t("contact.form.send")}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
