import React from "react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import PostDetail from "../PostDetail";

describe("<PostDetail />", () => {
  it("should show correctly", () => {
    const { container } = renderWithTheme(
      <PostDetail title="title" date="0000-00-00" content="<p>content</p>" />,
      theme,
    );
    expect(container).toMatchSnapshot();
  });
});
