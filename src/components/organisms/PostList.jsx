import React from "react";
import { css } from "@emotion/react";

import Card from "../molecules";

const makeStyles = () => ({
  root: ({ spacing }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: ${spacing(2)}rem;
  `,
  item: css`
    display: flex;
  `,
});

const PostListing = ({ postEdges }) => {
  if (!postEdges.length) return null;
  const styles = makeStyles();
  const postList = [];

  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      description: postEdge.node.frontmatter.description ?? "",
    });
  });

  return (
    <div css={styles.root}>
      {postList.map(post => (
        <div css={styles.item} key={`${post.title}`} data-testid="post-card">
          <Card
            path={post.path}
            cover={post.cover}
            date={post.date}
            title={post.title}
            description={post.description}
            timeToRead={post.timeToRead}
          />
        </div>
      ))}
    </div>
  );
};

export default PostListing;
