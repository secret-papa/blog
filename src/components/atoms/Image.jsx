import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const useStyles = () => ({
  root: css`
    display: block;
    width: 100%;
  `,
});

const Image = ({ alt, src }) => {
  const styles = useStyles();

  return <img css={styles.root} src={src} alt={alt} />;
};

Image.defaultProps = {
  alt: "",
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
