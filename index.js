module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  "env": {
    "browser": true,
    "node": true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
  rules: {
    "arrow-spacing": ["error"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "eol-last": ["error"],
    "key-spacing": ["error"],
    "keyword-spacing": ["error"],
    "max-len": ["error", 120],
    "max-lines": ["error", 100],
    "no-console": ["error"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-trailing-spaces": ["error"],
    "no-use-before-define": ["error"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "block-like" },
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "return" },
    ],
    "quotes": ["error", "double"],
    "semi": ["error"],
    "space-in-parens": ["error", "never"],

    "import/newline-after-import": ["error", { "count": 1 }],
    "import/no-cycle": ["error"],
    "import/order": ["error"],

    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/consistent-type-imports": ["error"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/space-infix-ops": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error"],
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
};
