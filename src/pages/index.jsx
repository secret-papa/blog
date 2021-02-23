import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import SEO from "@components/SEO/SEO";
import { PostList } from "@components";
import config from "@data/SiteConfig";

const Main = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO />
      <Helmet title={config.siteTitle} />
      <PostList postEdges={postEdges} />
    </>
  );
};

export default Main;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            description
          }
        }
      }
    }
  }
`;
