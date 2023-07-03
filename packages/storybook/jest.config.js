const { getJestBaseConfig } = require('@namespace/web-shared/jest/baseConfig');

const packageName = require('./package.json').name.split('@namespace/').pop();

const baseConfig = getJestBaseConfig(packageName);

module.exports = {
  ...baseConfig,
  displayName: '@namespace/storybook',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/packages/websites/shared/jest/fileTransformer.js',
  },
};
