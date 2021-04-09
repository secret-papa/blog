module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^@src(.*)$": "<rootDir>/src$1",
    "^@data(.*)$": "<rootDir>/data$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@templates(.*)$": "<rootDir>/src/templates$1",
    "^@tests(.*)$": "<rootDir>/tests$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: "http://localhost",
  setupFiles: [`<rootDir>/tests/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/tests/setup-test-env.js"],
};
