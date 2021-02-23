import React from "react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import Logo from "../Logo";

describe("<Logo />", () => {
  it("should show correctly", () => {
    const { container } = renderWithTheme(<Logo />, theme);
    expect(container).toMatchSnapshot();
  });
});
