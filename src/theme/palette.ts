import type { PaletteOptions } from "@mui/material/styles";

export const getPalette = (_mode?: "light" | "dark"): PaletteOptions => ({
  mode: "light",
  primary: {
    main: "#2563eb", // Brand Blue
    light: "#3b82f6",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#06b6d4", // Brand Cyan
    light: "#22d3ee",
    dark: "#0891b2",
    contrastText: "#ffffff",
  },
  background: {
    default: "#f8fafc",
    paper: "#ffffff",
  },
  text: {
    primary: "#0f172a",
    secondary: "#64748b",
  },
  grey: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  action: {
    hover: "#f8fafc",
    selected: "#f1f5f9",
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
  },
  success: {
    main: "#26A17B", // Tether green
    light: "#34d399",
    dark: "#059669",
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
  },
  info: {
    main: "#06b6d4",
    light: "#38bdf8",
    dark: "#0284c7",
  },
  divider: "#e2e8f0",
});
