import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import "github-markdown-css";

import { Text } from "../atoms";

deckDeckGoHighlightElement();

const useStyles = () => ({
  root: ({ spacing }) => css`
    margin: ${spacing(5)}rem 0;
  `,
  header: ({ spacing }) => css`
    margin-bottom: ${spacing(4)}rem;
  `,
  title: ({ spacing }) => css`
    margin-bottom: ${spacing()}rem;
  `,
  body: () => css`
    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.76;
    }

    blockquote {
      border-left: 0.25em solid #6bb0fa;
    }
  `,
});

const PostDetail = ({ title, date, content }) => {
  const styles = useStyles();

  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <Text bold color="darkGray" component="h1" css={styles.title} variant="title1">
          {title}
        </Text>
        <Text color="lightGray" variant="body2">
          {date}
        </Text>
      </div>
      <div
        css={styles.body}
        className="markdown-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

PostDetail.defaultProps = {
  date: "",
};

PostDetail.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default PostDetail;
