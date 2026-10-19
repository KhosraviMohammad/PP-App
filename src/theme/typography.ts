import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: ["Vazirmatn", "Space Grotesk", "sans-serif"].join(","),
  h1: {
    fontWeight: 900,
    fontSize: "3.5rem",
  },
  h2: {
    fontWeight: 800,
    fontSize: "2.25rem",
  },
  h3: {
    fontWeight: 700,
    fontSize: "1.75rem",
  },
  h4: {
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  h5: {
    fontWeight: 600,
    fontSize: "1.25rem",
  },
  h6: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  caption: {
    fontWeight: 500,
    fontSize: "0.75rem",
    lineHeight: 1.4,
  },
  overline: {
    fontWeight: 600,
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    textTransform: "none",
  },
};
