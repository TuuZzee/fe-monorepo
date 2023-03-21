const constants = require('@namespace/web-shared/constants/eslint');

module.exports = {
  extends: ['../../../../.eslintrc.js', 'plugin:@next/next/recommended'],
  plugins: [],
  rules: constants.globalRules,
  settings: {},
};
