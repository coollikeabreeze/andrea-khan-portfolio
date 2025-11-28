import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createAppTheme } from "../theme";

type AppThemeProviderProps = PropsWithChildren;

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const theme = useMemo(() => createAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
