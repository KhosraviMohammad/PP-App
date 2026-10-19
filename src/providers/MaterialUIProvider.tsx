"use client";

import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useSelector } from "react-redux";
import { selectThemeDirection, selectThemeMode } from "@/store/selectors/themeSelectors";
import { createAppTheme } from "@/theme";

interface MaterialUIProviderProps {
  children: React.ReactNode;
}

// Create dynamic cache based on direction
const createCacheWithDirection = (direction: string) => {
  return createCache({
    key: direction === "rtl" ? "muirtl" : "muiltr",
    stylisPlugins: direction === "rtl" ? [rtlPlugin] : [],
  });
};

export const MaterialUIProvider = ({ children }: MaterialUIProviderProps) => {
  // Get theme direction and mode from Redux
  const direction = useSelector(selectThemeDirection);
  const mode = useSelector(selectThemeMode);

  // Create Material-UI theme using light mode and dynamic direction
  const theme = useMemo(
    () => createAppTheme("light", direction),
    [direction],
  );
  const cache = useMemo(() => createCacheWithDirection(direction), [direction]);

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  );
};

export default MaterialUIProvider;
