import React from "react";
import { css } from "@emotion/react";

import { renderWithTheme } from "@tests";
import { theme } from "@src/styles";
import Text from "../Text";

describe("<Text />", () => {
  describe("when passed bold prop is true", () => {
    it("should return bold weight text", () => {
      const { getByText } = renderWithTheme(<Text bold>test</Text>, theme);

      expect(getByText("test")).toHaveStyle("font-weight: bold");
    });
  });

  describe("when passed bold prop is false", () => {
    it("should return normal weight text", () => {
      const { getByText } = renderWithTheme(<Text bold={false}>test</Text>, theme);

      expect(getByText("test")).toHaveStyle("font-weight: normal");
    });
  });

  describe("when passed color prop is darkGray", () => {
    it("should return theme.colors.grey[400] color text", () => {
      const { getByText } = renderWithTheme(<Text color="darkGray">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(`color: ${theme.colors.grey[900]}`);
    });
  });

  describe("when passed color prop is gray", () => {
    it("should return theme.colors.grey[600] color text", () => {
      const { getByText } = renderWithTheme(<Text color="gray">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(`color: ${theme.colors.grey[600]}`);
    });
  });

  describe("when passed color prop is lightGray2", () => {
    it("should return theme.colors.grey[500] color text", () => {
      const { getByText } = renderWithTheme(<Text color="lightGray2">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(`color: ${theme.colors.grey[500]}`);
    });
  });

  describe("when passed color prop is lightGray", () => {
    it("should return theme.colors.grey[400] color text", () => {
      const { getByText } = renderWithTheme(<Text color="lightGray">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(`color: ${theme.colors.grey[400]}`);
    });
  });

  describe("when passed color prop is white", () => {
    it("should return white color text", () => {
      const { getByText } = renderWithTheme(<Text color="white">test</Text>, theme);

      expect(getByText("test")).toHaveStyle("color: #FFFFFF");
    });
  });

  describe("when passed variant prop is title1", () => {
    it("should return text that has font style that is consisting of theme.font.title1.fontSize and lineHeight", () => {
      const { getByText } = renderWithTheme(<Text variant="title1">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(
        `font: normal ${theme.font.title1.fontSize}/${theme.font.title1.lineHeight} sans-serif`,
      );
    });
  });

  describe("when passed variant prop is title3", () => {
    it("should return text that has font style that is consisting of theme.font.title2.fontSize and lineHeight", () => {
      const { getByText } = renderWithTheme(<Text variant="title3">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(
        `font: normal ${theme.font.title3.fontSize}/${theme.font.title3.lineHeight} sans-serif`,
      );
    });
  });

  describe("when passed variant prop is body1", () => {
    it("should return text that has font style that is consisting of theme.font.body1.fontSize and lineHeight", () => {
      const { getByText } = renderWithTheme(<Text variant="body1">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(
        `font: normal ${theme.font.body1.fontSize}/${theme.font.body1.lineHeight} sans-serif`,
      );
    });
  });

  describe("when passed variant prop is body2", () => {
    it("should return text that has font style that is consisting of theme.font.body2.fontSize and lineHeight", () => {
      const { getByText } = renderWithTheme(<Text variant="body2">test</Text>, theme);

      expect(getByText("test")).toHaveStyle(
        `font: normal ${theme.font.body2.fontSize}/${theme.font.body2.lineHeight} sans-serif`,
      );
    });
  });

  describe("when customStyle prop is passed", () => {
    let customStyle;

    beforeEach(() => {
      customStyle = ({ colors: { grey } }) => css`
        text-decoration: underline;
        color: ${grey[400]};
      `;
    });

    it("should return text that is styled by customStyle prop", () => {
      const { getByText } = renderWithTheme(<Text customStyle={customStyle}>test</Text>, theme);

      expect(getByText("test")).toHaveStyle("text-decoration: underline");
      expect(getByText("test")).toHaveStyle(`color: ${theme.colors.grey[400]}`);
    });
  });
});
