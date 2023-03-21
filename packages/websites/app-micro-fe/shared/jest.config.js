const { initDotEnv, getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const packagePath = 'app-micro-fe/shared';

initDotEnv(packagePath);
const baseConfig = getJestBaseConfig(packagePath);

module.exports = {
  ...baseConfig,
  displayName: 'app-micro-fe-shared',
};
