import React from "react";

import PostCard from "../PostCard";
import Link from "../../unit/link";
import "./PostListing.css";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    // console.log(postEdge, 'postEdge')
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <div className="post-listing">
      {
        postList.map((post) => (
          <div className="post-listing__item">
            <Link to={post.path} key={post.title}>
              <PostCard />
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default PostListing;
