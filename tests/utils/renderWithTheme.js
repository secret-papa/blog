import React from "react";
import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";

const renderWithTheme = (tree, theme) => {
  const WrappingThemeProvider = <ThemeProvider theme={theme}>{tree}</ThemeProvider>;

  return render(WrappingThemeProvider);
};

export default renderWithTheme;
