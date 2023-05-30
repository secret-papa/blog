/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const gatsbyNode = require("./gatsby/gatsby-node");

module.exports = {
  onCreateNode: gatsbyNode.onCreateNode,
  createSchemaCustomization: gatsbyNode.createSchemaCustomization,
  createPages: gatsbyNode.createPages,
};
