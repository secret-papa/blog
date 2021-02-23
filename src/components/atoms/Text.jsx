import React from "react";
import PropTypes from "prop-types";
import { css, useTheme } from "@emotion/react";

const getFontStylePerVariant = (variant, theme) => {
  switch (variant) {
    case "title1":
      return `${theme.title1.fontSize}/${theme.title1.lineHeight}`;
    case "title3":
      return `${theme.title3.fontSize}/${theme.title3.lineHeight}`;
    case "body1":
      return `${theme.body1.fontSize}/${theme.body1.lineHeight}`;
    case "body2":
      return `${theme.body2.fontSize}/${theme.body2.lineHeight}`;
    case "body3":
      return `${theme.body3.fontSize}/${theme.body3.lineHeight}`;
    default:
      return "";
  }
};

const getColorForStyle = (color, { grey }) => {
  switch (color) {
    case "lightGray":
      return grey[400];
    case "lightGray2":
      return grey[500];
    case "gray":
      return grey[600];
    case "darkGray":
      return grey[900];
    case "white":
      return "#fff";
    default:
      return "";
  }
};

const makeStyles = ({ bold, color, font }) => ({
  root: css`
    color: ${color};
    font: ${bold ? "bold" : "normal"} ${font} sans-serif;
    font-family: inherit;
  `,
});

const Text = ({ bold, component, color, children, variant, customStyle }) => {
  const Component = component || "span";
  const theme = useTheme();
  const styles = makeStyles({
    bold,
    color: getColorForStyle(color, theme.colors),
    font: getFontStylePerVariant(variant, theme.font),
  });

  return <Component css={[styles.root, customStyle]}>{children}</Component>;
};

Text.defaultProps = {
  bold: false,
  color: "gray",
  component: "",
  children: "",
  variant: "body1",
  customStyle: null,
};

Text.propTypes = {
  bold: PropTypes.bool,
  color: PropTypes.oneOf(["darkGray", "gray", "lightGray", "lightGray2", "white"]),
  component: PropTypes.elementType,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["title1", "title3", "body1", "body2"]),
  customStyle: PropTypes.oneOfType([
    PropTypes.shape({
      map: PropTypes.string,
      name: PropTypes.string,
      next: PropTypes.string,
      styles: PropTypes.string,
      toString: PropTypes.func,
    }),
    PropTypes.func,
  ]),
};

export default Text;
