import React from "react";
import { render } from "@testing-library/react";

import LayoutTemplate from "../LayoutTemplate";

describe("<LayoutTemplate />", () => {
  it("should show correctly", () => {
    const { container } = render(<LayoutTemplate />);
    expect(container).toMatchSnapshot();
  });
});
