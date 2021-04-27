import React from "react";
import PropTypes from "prop-types";

const LeftArrowBasic = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <path
        fill="#121313"
        fillRule="evenodd"
        d="M31.106 15H3.278l8.325-8.293a.999.999 0 10-1.414-1.414l-9.9 9.899a1.01 1.01 0 000 1.414l9.9 9.9a.999.999 0 101.414-1.414L3.278 17h27.828a1 1 0 000-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

LeftArrowBasic.defaultProps = {
  width: "20px",
  height: "20px",
};

LeftArrowBasic.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default LeftArrowBasic;
