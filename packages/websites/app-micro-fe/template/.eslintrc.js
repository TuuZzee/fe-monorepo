const webAppMicroFeShared = require('@namespace/web-app-micro-fe-shared/eslint');
const wenConstants = require('@namespace/web-shared/constants/eslint');

module.exports = {
  ...webAppMicroFeShared,
  settings: {
    'import/resolver': {
      alias: { map: wenConstants.globalAliases },
    },
  },
};
