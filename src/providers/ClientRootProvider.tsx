"use client";

import React, { useEffect } from "react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { useSelector } from "react-redux";
import { selectThemeDirection } from "@/store/selectors/themeSelectors";
import ReduxProvider from "./ReduxProvider";
import MaterialUIProvider from "./MaterialUIProvider";

import { LanguageProvider } from "@/context/LanguageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientAppContent({ children }: { children: React.ReactNode }) {
  const direction = useSelector(selectThemeDirection);

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === "rtl" ? "fa" : "en";
    document.body.dir = direction;
    document.cookie = `cavax_dir=${direction};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
  }, [direction]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "@import":
            "url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Vazirmatn:wght@300;400;500;700;800;900&display=swap')",
          ":root": {
            "--brand-cyan": "#06b6d4",
            "--brand-blue": "#2563eb",
            "--brand-light": "#f8fafc",
            "--brand-card": "#ffffff",
            "--tether-green": "#26a17b",
          },
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
            padding: 0,
            minHeight: "100vh",
            fontFamily: '"Vazirmatn", sans-serif',
            backgroundColor: "#f8fafc",
            color: "#0f172a",
            overflowX: "hidden",
            direction: "ltr",
          },
          ".number-font": {
            fontFamily: '"Space Grotesk", sans-serif',
          },
          ".bg-grid": {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundSize: "50px 50px",
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
            maskImage: "radial-gradient(circle at 50% 30%, black 10%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black 10%, transparent 80%)",
            zIndex: -2,
            pointerEvents: "none",
          },
          ".text-gradient": {
            background: "linear-gradient(135deg, #2563eb, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
          ".hide-scroll::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
}

export function ClientRootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <MaterialUIProvider>
        <ToastContainer
          position="top-center"
          hideProgressBar
          closeOnClick
          pauseOnHover
          theme="colored"
        />
        <ClientAppContent>{children}</ClientAppContent>
      </MaterialUIProvider>
    </ReduxProvider>
  );
}

export default ClientRootProvider;
