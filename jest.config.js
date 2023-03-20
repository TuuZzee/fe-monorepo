const storybookConfig = require('./packages/storybook/jest.config');

module.exports = {
  projects: [storybookConfig],
  moduleDirectories: ['node_modules'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  reporters: [
    'default',
    ['./packages/websites/shared/jest/tapReporter.js', { outputFile: 'results.tap' }],
  ],
  collectCoverageFrom: [
    `<rootDir>/packages/**/*.{js,jsx}`,
    `!**/node_modules/**`,
    `!**/*.config.js`,
    `!**/*.setup.js`,
    `!**/.*.js`,
    `!**/.next/**`,
    `!**/eslint.js`,
  ],
  coverageReporters: [['json-summary', { file: 'coverage.json' }]],
};
