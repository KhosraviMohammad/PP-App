import { createTheme, responsiveFontSizes, type Theme, type Direction } from "@mui/material/styles";
import { getPalette } from "./palette";
import { typography } from "./typography";
import { themeComponents } from "./components";

export const createAppTheme = (
  modeOrDirection: "light" | "dark" | Direction = "light",
  optionalDirection?: Direction,
): Theme => {
  const isFirstArgDirection = modeOrDirection === "rtl" || modeOrDirection === "ltr";
  const direction: Direction = isFirstArgDirection
    ? modeOrDirection
    : optionalDirection || "rtl";
  const mode: "light" | "dark" =
    !isFirstArgDirection && modeOrDirection === "dark" ? "dark" : "light";

  const baseTheme = createTheme({
    direction,
    palette: getPalette(mode),
    typography,
    shape: {
      borderRadius: 8,
    },
    components: themeComponents,
  });

  return responsiveFontSizes(baseTheme);
};

export default createAppTheme;
