import React from 'react';
import "./preview.css";
import Theme from "../src/theme/index";
import { ThemeProvider } from "@mui/material";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={Theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];
