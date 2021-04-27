import React from "react";
import PropTypes from "prop-types";

const RightArrowBasic = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 58.5 45.3"
      xmlSpace="preserve"
      width={width}
      height={height}
    >
      <path
        fill="#3E3E3E"
        fillRule="evenodd"
        d="M35.3 43.9L56 23.4c.2-.2.2-.7 0-.9L35.3 2c-.2-.2-.4-.2-.7 0L32 4.7l16.1 16.1H3.9c-1.2 0-2.4 1.1-2.4 2.4 0 1.3 1.2 2.2 2.4 2.2h43.9L32 41.3l2.6 2.6c.3.2.5.2.7 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

RightArrowBasic.defaultProps = {
  width: "20px",
  height: "20px",
};

RightArrowBasic.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default RightArrowBasic;
