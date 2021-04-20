import React from "react";
import faker from "faker";

import { theme } from "@src/styles";
import { postEdgeFactory, renderWithTheme } from "@tests";
import PostList from "../PostList";

describe("<PostList />", () => {
  describe("when there are no posts", () => {
    let postEdges;

    beforeEach(() => {
      postEdges = [];
    });

    it("should not show anything", () => {
      const { container } = renderWithTheme(<PostList postEdges={postEdges} />, theme);
      expect(container.hasChildNodes()).toBe(false);
    });
  });

  describe("when there are multiple posts", () => {
    let postEdges;

    beforeEach(() => {
      postEdges = postEdgeFactory.buildList(faker.datatype.number({ min: 1, max: 10 }));
    });

    it("should show post card as long as number of post", () => {
      const { getAllByTestId } = renderWithTheme(<PostList postEdges={postEdges} />, theme);
      expect(getAllByTestId("post-card").length).toBe(postEdges.length);
    });
  });
});
