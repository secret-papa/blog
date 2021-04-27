import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const useStyles = () => ({
  content: ({ spacing }) => css`
    margin: ${spacing(5)}rem 0;
  `,
  pagination: () => css``,
});

const PostDetailTemplate = ({ renderPost, renderPagination }) => {
  const styles = useStyles();

  return (
    <div>
      <div css={styles.content}>{renderPost}</div>
      <div css={styles.pagination}>{renderPagination}</div>
    </div>
  );
};

PostDetailTemplate.propTypes = {
  renderPost: PropTypes.element.isRequired,
  renderPagination: PropTypes.element.isRequired,
};

export default PostDetailTemplate;
