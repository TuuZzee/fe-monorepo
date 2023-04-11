const { initDotEnv, getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const packagePath = 'websites/template';

initDotEnv(packagePath);
const baseConfig = getJestBaseConfig(packagePath);

module.exports = {
  ...baseConfig,
  displayName: '@namespace/web-template',
};
