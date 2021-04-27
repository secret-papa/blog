import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { PostDetail, SimplePagination } from "@components/molecules";
import { PostDetailTemplate } from "@templates";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default function PostDetailPage({ data, pageContext }) {
  const { slug, nextslug, nexttitle, prevslug, prevtitle } = pageContext;
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
      <PostDetailTemplate
        renderPost={<PostDetail title={post.title} date={post.date} content={postNode.html} />}
        renderPagination={
          <SimplePagination
            next={{ slug: nextslug, title: nexttitle }}
            prev={{ slug: prevslug, title: prevtitle }}
          />
        }
      />
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
