/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const prettierConfig = require("eslint-config-prettier");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const importPlugin = require("eslint-plugin-import");

const jsOnly = require("./js-only");

// Initialize FlatCompat for backward compatibility with extends configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// TypeScript specific
const typescriptRules = {
  indent: "off",
  "no-unused-vars": "off", // Turn off base rule as it can report incorrect errors in TypeScript
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-non-null-assertion": "off",

  // React specific
  "react/react-in-jsx-scope": "off", // Not needed in React 17+
  "react/prop-types": "off", // We use TypeScript for props validation
  "react/function-component-definition": [
    2,
    { namedComponents: "arrow-function" },
  ],
  "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
  "react/jsx-one-expression-per-line": "off",
  "react/no-array-index-key": "off",
  "react/require-default-props": "off",
  "react/jsx-indent": "off",
  "react/jsx-props-no-spreading": "off",
  "react/jsx-wrap-multilines": "off",
  "react/jsx-no-useless-fragment": "off",
  "react-hooks/exhaustive-deps": "warn",

  // Import rules
  "import/extensions": "off",
  "import/no-unresolved": "off",
  "import/no-extraneous-dependencies": "off",
  "import/prefer-default-export": "off",
  "import/no-default-export": "off", // Allow default exports for route files

  // Other overrides
  "max-len": ["error", { code: 140, tabWidth: 2 }],
  "space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "no-nested-ternary": "off",
  "no-undef": "off",
  "jest/expect-expect": "off",
};

module.exports = {
  configs: {
    jsOnly: jsOnly,
    recommended: [
      js.configs.recommended,
      ...compat.extends("plugin:@typescript-eslint/recommended"),
      ...compat.extends("airbnb-base"),
      {
        plugins: {
          "@typescript-eslint": tseslint,
          import: importPlugin,
        },
        languageOptions: {
          parser: tsParser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
          },
        },
        rules: {
          ...jsOnly.rules,
          ...typescriptRules,
        },
      },
      prettierConfig,
    ],
    "recommended-react": [
      js.configs.recommended,
      ...compat.extends("plugin:@typescript-eslint/recommended"),
      ...compat.extends("airbnb"),
      ...compat.extends("plugin:react/recommended"),
      ...compat.extends("plugin:react-hooks/recommended"),
      {
        plugins: {
          "@typescript-eslint": tseslint,
          react: reactPlugin,
          "react-hooks": reactHooksPlugin,
          import: importPlugin,
        },
        languageOptions: {
          parser: tsParser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            ecmaFeatures: {
              jsx: true,
            },
          },
        },
        settings: {
          react: {
            version: "detect",
          },
        },
        rules: {
          ...jsOnly.rules,
          ...typescriptRules,
        },
      },
      prettierConfig,
    ],
  },
};
