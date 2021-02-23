import React from "react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import Card from "../Card";

describe("<Card />", () => {
  it("should show correctly", () => {
    const { container } = renderWithTheme(
      <Card
        cover="https://via.placeholder.com/150"
        date="xxxx-xx-xx"
        description="blah blah"
        path="/"
        title="Card title"
        timeToRead={3}
      />,
      theme,
    );
    expect(container).toMatchSnapshot();
  });
});
