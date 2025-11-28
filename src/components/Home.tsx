import React from "react";
import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";

const styles = (theme: Theme) => ({
  display: "grid",
  gap: theme.spacing(3),
  paddingBlock: theme.spacing(6),
  paddingInline: theme.spacing(3),
  maxWidth: "48rem",
  margin: "0 auto",
  textAlign: "left",
});

export const Home: React.FC = () => {
  return (
    <Box component="section" sx={(theme) => styles(theme)}>
      <Typography variant="h2" component="h1">
        Welcome!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Andrea Khan's Portfolio
      </Typography>
    </Box>
  );
};
