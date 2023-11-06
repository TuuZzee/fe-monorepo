const { initDotEnv, getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const packagePath = 'websites/app-micro-fe/shared';

initDotEnv(packagePath);
const baseConfig = getJestBaseConfig(packagePath);

module.exports = {
  ...baseConfig,
  displayName: '@namespace/web-app-micro-fe-shared',
};
