import type { Components, Theme } from "@mui/material/styles";

const styles: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: "none",
        fontWeight: 600,
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
};

export const components = styles;
