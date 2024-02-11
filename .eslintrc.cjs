module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".jsx", ".js", ".ts", ".css", ".d.ts"],
        map: [
          ["src/components", "./src/components"],
          ["src/pages", "./src/pages"],
          ["src/router", "./src/router"],
          ["src/store", "./src/store"],
          ["src/styles", "./src/styles"],
          ["src/types", "./src/types"],
          ["src/utils", "./src/utils"],
        ],
      },
    },
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
