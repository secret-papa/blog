import React from "react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import Header from "../Header";

describe("<Header />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Header />, theme);
    expect(container).toMatchSnapshot();
  });
});
