import React from "react";
import PropTypes from "prop-types";

import { Link } from "../atoms";

const SimplePagination = ({ prev, next }) => {
  return (
    <>
      {prev && (
        <Link data-testid="prev_link" to={prev.slug}>
          {prev.title}
        </Link>
      )}
      {next && (
        <Link data-testid="next_link" to={next.slug}>
          {next.title}
        </Link>
      )}
    </>
  );
};

SimplePagination.defaultProps = {
  prev: null,
  next: null,
};

SimplePagination.propTypes = {
  prev: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  next: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default SimplePagination;
