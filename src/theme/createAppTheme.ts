import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { styles as palette } from "./palette";
import { styles as typography } from "./typography";

export const baseThemeOptions: ThemeOptions = {
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
};

export function createAppTheme(overrides?: ThemeOptions) {
  return createTheme({ ...baseThemeOptions, ...overrides });
}
