import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, src }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  )
}

Image.defaultProps = {
  alt: ""
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default Image;