const { initDotEnv, getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const packagePath = 'websites/app-micro-fe/container';

initDotEnv(packagePath);
const baseConfig = getJestBaseConfig(packagePath);

module.exports = {
  ...baseConfig,
  displayName: '@namespace/web-app-micro-fe-container',
};
