import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { PageContext } from "./types";
import {
  Article,
  Body,
  CoverImage,
  CoverImageWrapper,
  MarkdownBody,
  MarkdownWrapper,
  NavigationButton,
  NavigationButtonCaption,
  NavigationButtonTitle,
  NavigationButtonWrapper,
  Root,
  Title,
} from "./styles";
import { BlogPostBySlugQuery, queryIntoPost } from "../../types";
import { Header } from "../../components/common";

type PostTemplateProps = {
  data: BlogPostBySlugQuery;
  pageContext: PageContext;
};

const PostTemplate = ({ data, pageContext }: PostTemplateProps): JSX.Element => {
  const post = queryIntoPost(data);

  return (
    <Root>
      <Header />
      <Body>
        <Article>
          <Title>{post.title}</Title>
          <CoverImageWrapper>
            <CoverImage src={post.coverImageUrl} alt={post.coverImageAlt} />
          </CoverImageWrapper>
          <MarkdownWrapper>
            {/* className for github markdown css */}
            <MarkdownBody className="markdown-body">
              {post.body && <MDXRenderer>{post.body}</MDXRenderer>}
            </MarkdownBody>
          </MarkdownWrapper>
          <NavigationButtonWrapper>
            {pageContext.prevSlug && (
              <NavigationButton to={pageContext.prevSlug}>
                <NavigationButtonCaption>이전 포스트</NavigationButtonCaption>
                <NavigationButtonTitle>{pageContext.prevTitle}</NavigationButtonTitle>
              </NavigationButton>
            )}
            {pageContext.nextSlug && (
              <NavigationButton to={pageContext.nextSlug} align="right">
                <NavigationButtonCaption>다음 포스트</NavigationButtonCaption>
                <NavigationButtonTitle>{pageContext.nextTitle}</NavigationButtonTitle>
              </NavigationButton>
            )}
          </NavigationButtonWrapper>
        </Article>
      </Body>
    </Root>
  );
};

export default PostTemplate;

export const Head = () => (
  <>
    {/* code highlight */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css"
      rel="stylesheet"
    />
    {/* MDX styling */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css"
      rel="stylesheet"
    />
  </>
);

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
