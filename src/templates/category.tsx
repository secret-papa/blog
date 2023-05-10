import React from "react";
// import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
// import config from "../../data/SiteConfig";

export default function CategoryTemplate({ pageContext }) {
  const { category } = pageContext;

  return (
    <div className="category-container">
      {/* <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} /> */}
    </div>
  );
}

/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query CategoryPage($category: String) {
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [fields___date], order: DESC }
//       filter: { frontmatter: { category: { eq: $category } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
