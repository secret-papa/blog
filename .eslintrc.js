module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "prettier", "prettier/react", "plugin:react-hooks/recommended"],
  plugins: ["react", "prettier", "react-hooks"],
  rules: { "react/prop-types": 0, "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }] },
  settings: {
    "import/resolver": {
      alias: [
        ["@src", "./src"],
        ["@data", "./data"],
        ["@static", "./static"],
        ["@pages", "./src/pages"],
        ["@components", "./src/components"],
        ["@templates", "./src/templates"],
      ],
    },
  },
};
