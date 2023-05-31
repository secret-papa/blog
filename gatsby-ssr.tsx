import React, { ReactNode } from "react";

import ThemeProvider from "./src/theme";
import QueryWrapper from "./src/context/QueryWrapper";

type WrapPageElement = {
  element: ReactNode;
};

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }: WrapPageElement) => (
  <QueryWrapper>
    <ThemeProvider>{element}</ThemeProvider>
  </QueryWrapper>
);
