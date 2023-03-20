const constants = require('@namespace/web-shared/constants/eslint');

module.exports = {
  extends: constants.globalExtends,
  plugins: [],
  rules: constants.globalRules,
  settings: {
    'import/resolver': {
      alias: {
        map: constants.globalAliases,
      },
    },
  },
};
