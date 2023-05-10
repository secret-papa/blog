import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Color from "./Color";
import CssReset from "./CssReset";

type ThemeProps = {
  children: ReactNode;
};

const theme = {
  font: {
    title1: {
      fontSize: "3.2rem",
      lineHeight: "1",
    },
    title3: {
      fontSize: "2rem",
      lineHeight: "1",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: "1",
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: "1.4",
    },
    body3: {
      fontSize: "1.2rem",
      lineHeight: "1.4",
    },
  },
  spacing: (value = 1) => (value * 8) / 10,
};

const ThemeProvider = ({ children }: ThemeProps) => (
  <StyledThemeProvider theme={theme}>
    <CssReset />
    <Color />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
