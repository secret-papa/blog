import React from "react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import Footer from "../Footer";

describe("<Footer />", () => {
  it("should show correctly", () => {
    const { container } = renderWithTheme(<Footer />, theme);
    expect(container).toMatchSnapshot();
  });
});
