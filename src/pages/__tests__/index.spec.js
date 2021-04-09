import React from "react";

import { postEdgeFactory, postEdgeNodeFactory, renderWithTheme, getFormatDate } from "@tests";
import { theme } from "@src/styles";
import Main from "../index";

describe("<Main />", () => {
  let data;

  beforeEach(() => {
    const date = new Date("Sun May 10 2093 00:50:56 GMT+0900 (대한민국 표준시)");
    const formatDate = getFormatDate(date);
    data = {
      allMarkdownRemark: {
        edges: [
          postEdgeFactory.build({
            node: postEdgeNodeFactory.build(
              {
                excerpt: "blahblahblahblahblahblah",
                timeToRead: 10,
                frontmatter: {
                  cover: "test.jpg",
                  date: formatDate,
                  description: "blahblahblahblahblah",
                  tags: ["blah", "blah", "blah"],
                  title: "post",
                },
              },
              {
                title: "post",
                date,
              },
            ),
          }),
        ],
      },
    };
  });

  it("should show correctly", async () => {
    const { container } = renderWithTheme(<Main data={data} />, theme);
    expect(container).toMatchSnapshot();
  });
});
