module.exports = {
  ignorePatterns: ["**/public/**", "**/.cache/**", "**/static/**", "**/content/**"],
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "airbnb",
  ],
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript",
        "prettier",
      ],
      plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",

        "testing-library",
        "graphql",
        "prettier",
      ],
      rules: {
        "react/require-default-props": "off",
        "react/prop-types": "off",
        "no-restricted-exports": "off",
      },

      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json", "**/tsconfig.json"],
      },
    },
    {
      files: ["**/*.js", "**/*.jsx"],
      env: {
        browser: true,
        es6: true,
      },
      extends: ["prettier"],
      rules: {},
      plugins: ["testing-library", "react", "react-hooks", "graphql", "prettier"],
    },
    {
      files: [
        "**/test/**",
        "**/__mocks__/**",
        "*.spec.ts",
        "*.spec.tsx",
        "*.test.ts",
        "*.test.tsx",
      ],
      extends: ["plugin:jest/all", "plugin:jest-dom/recommended"],
      plugins: ["jest", "jest-dom"],
      env: {
        browser: true,
        es6: true,
        "jest/globals": true,
      },
      rules: {
        "jest/no-hooks": "off",
        "jest/prefer-expect-assertions": [
          "warn",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInLoop: true,
            onlyFunctionsWithExpectInCallback: true,
          },
        ],
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        "import/no-relative-packages": "off",
        "jest/no-conditional-in-test": "off",
        "jest/prefer-snapshot-hint": "off",
      },
    },
  ],
};
