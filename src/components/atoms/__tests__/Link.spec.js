import React from "react";
import { render } from "@testing-library/react";

import Link from "../Link";

describe("<Link />", () => {
  it("should show correctly", () => {
    const { container } = render(<Link to="." />);
    expect(container).toMatchSnapshot();
  });
});
