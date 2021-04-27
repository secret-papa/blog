import React from "react";
import faker from "faker/locale/ko";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import SimplePagination from "../SimplePagination";

describe("<SimplePagination />", () => {
  describe("when prev page info exist", () => {
    let prev;

    beforeEach(() => {
      prev = {
        title: faker.name.title(),
        slug: faker.datatype.uuid(),
      };
    });

    it("should show prev link", () => {
      const { getByText, getByTestId } = renderWithTheme(<SimplePagination prev={prev} />, theme);
      const prevLinkEl = getByTestId("prev_link");
      const prevLinkTitleEl = getByText(prev.title);

      expect(prevLinkEl).toHaveAttribute("href", prev.slug);
      expect(prevLinkTitleEl).toBeInTheDocument();
    });
  });

  describe("when prev page info does not exist", () => {
    const prev = null;

    it("should not show next link", () => {
      const { queryByTestId } = renderWithTheme(<SimplePagination prev={prev} />, theme);

      expect(queryByTestId("prev_link")).toBeNull();
    });
  });

  describe("when next page info exist", () => {
    let next;

    beforeEach(() => {
      next = {
        title: faker.name.title(),
        slug: faker.datatype.uuid(),
      };
    });

    it("should show next link", () => {
      const { getByText, getByTestId } = renderWithTheme(<SimplePagination next={next} />, theme);
      const nextLink = getByTestId("next_link");
      const nextLinkTitleEl = getByText(next.title);

      expect(nextLink).toHaveAttribute("href", next.slug);
      expect(nextLinkTitleEl).toBeInTheDocument();
    });
  });

  describe("when next page info does not exist", () => {
    const next = null;

    it("should not show next link", () => {
      const { queryByTestId } = renderWithTheme(<SimplePagination next={next} />, theme);

      expect(queryByTestId("next_link")).toBeNull();
    });
  });
});
