import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

import { Link, Text } from "../atoms";

const useStyles = () => ({
  root: () => css`
    display: flex;
    align-items: center;
    height: 6rem;
  `,
  nextLink: () => css`
    margin-left: auto;
  `,
  guideText: ({ spacing }) => css`
    &.prev_guide_text {
      margin-right: ${spacing(1.5)}rem;
    }

    &.next_guide_text {
      margin-left: ${spacing(1.5)}rem;
    }
  `,
});

const SimplePagination = ({ prev, next }) => {
  const styles = useStyles();

  return (
    <div css={styles.root}>
      {prev && (
        <Link data-testid="prev_link" to={prev.slug}>
          <Text
            css={styles.guideText}
            className="prev_guide_text"
            color="lightGray"
            variant="body2"
          >
            이전 글
          </Text>
          <Text>{prev.title}</Text>
        </Link>
      )}
      {next && (
        <Link css={styles.nextLink} data-testid="next_link" to={next.slug}>
          <Text>{next.title}</Text>
          <Text
            css={styles.guideText}
            className="next_guide_text"
            color="lightGray"
            variant="body2"
          >
            다음 글
          </Text>
        </Link>
      )}
    </div>
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
