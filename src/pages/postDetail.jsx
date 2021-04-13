import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { PostDetail } from "@components/molecules";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default function PostDetailPage({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <div>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <PostDetail title={post.title} date={post.date} content={postNode.html} />
    </div>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
