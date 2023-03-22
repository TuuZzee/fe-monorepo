const { initDotEnv, getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const serviceConfig = require('./service.config');

const packagePath = 'app-micro-fe/template';

initDotEnv(packagePath);
const baseConfig = getJestBaseConfig(packagePath);

module.exports = {
  ...baseConfig,
  displayName: serviceConfig.serviceName,
};
