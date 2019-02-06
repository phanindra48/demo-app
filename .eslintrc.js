const fs = require('fs');

const config = {
  extends: ["eslint-config-airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true, printWidth: 100  }],
    "no-underscore-dangle": 0
  },
  env: {
    node: true,
    es6: true
  },
  globals: {
    /* config */
    config: true
  }
};

module.exports = config;
