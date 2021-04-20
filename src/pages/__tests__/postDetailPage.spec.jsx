import React from "react";

import { postEdgeFactory, postEdgeNodeFactory, renderWithTheme, getFormatDate } from "@tests";
import { theme } from "@src/styles";
import PostDetailPage from "../postDetail";

describe("<PostDetailPage />", () => {
  let pageContext;
  let data;

  beforeEach(() => {
    const date = new Date("Sun May 10 2093 00:50:56 GMT+0900 (대한민국 표준시)");
    const formatDate = getFormatDate(date);

    pageContext = { slug: "dkixcvlkjsd" };
    data = {
      markdownRemark: {
        frontmatter: {
          id: "sdlfkjsldkf",
          title: "xxxxx",
          date: formatDate,
          cover: "test.jpg",
        },
        html: "<p>blahblahblahblahblah</p>",
      },
    };
  });

  it("should show correctly", async () => {
    const { container } = renderWithTheme(
      <PostDetailPage pageContext={pageContext} data={data} />,
      theme,
    );
    expect(container).toMatchSnapshot();
  });
});
