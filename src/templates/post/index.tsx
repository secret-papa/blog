import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPostBySlugQuery, queryIntoPost } from "../../types";
import { PageContext } from "./types";

export type PostTemplateProps = {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
};

const PostTemplate = ({ data, pageContext }: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(data);

  return (
    <>
      <article>
        <MDXRenderer>{post.body ?? ""}</MDXRenderer>
      </article>
      <div>
        {pageContext.nextSlug && <Link to={pageContext.nextSlug}>{pageContext.nextTitle}</Link>}
        {pageContext.prevSlug && <Link to={pageContext.prevSlug}>{pageContext.prevTitle}</Link>}
      </div>
    </>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        description
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        coverAlt
        datePublished
        dateModified
        category
        tags
      }
      fields {
        slug
        route
        pathName
        url
      }
      internal {
        content
      }
    }
  }
`;

export default PostTemplate;
