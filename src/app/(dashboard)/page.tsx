"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setHeaderInfo } from "@/store/actions";
import { useLanguage } from "@/context/LanguageContext";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { PORTFOLIO_INFO } from "@/data/portfolioData";

export default function HomePage() {
  const dispatch = useDispatch();
  const { isRtl, t } = useLanguage();

  useEffect(() => {
    dispatch(
      setHeaderInfo({
        title: isRtl ? PORTFOLIO_INFO.name.fa : PORTFOLIO_INFO.name.en,
        description: isRtl ? PORTFOLIO_INFO.role.fa : PORTFOLIO_INFO.role.en,
      }),
    );
  }, [dispatch, isRtl]);

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeroSection />
      <ProjectsSection />

      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <ContactSection /> */}
    </Box>
  );
}
