/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
require("source-map-support").install();
require("ts-node").register({
  transpileOnly: true,
  files: true,
  ignore: ["(?:^|/).cache/", "(?:^|/)public/"],
});
const createGatsbyConfig = require("./gatsby/gatsby-config");

module.exports = createGatsbyConfig.default();
