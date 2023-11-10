const dotenv = require('dotenv');

module.exports = {
  initDotEnv: packageName => {
    dotenv.config({ path: `./packages/${packageName}/.env.local` });
  },
  getJestBaseConfig: packageName => {
    return {
      roots: [`<rootDir>/packages/${packageName}`],
      setupFilesAfterEnv: [`<rootDir>/packages/${packageName}/jest.setup.js`, 'dotenv/config'],
      testRegex: `(packages/${packageName}/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$`,
      moduleNameMapper: {
        '^@/redux/(.*)$': `<rootDir>/packages/${packageName}/${
          packageName.includes('websites/shared') ? '' : 'src/'
        }redux/$1`,
        '^@/reduxModules/(.*)$': `<rootDir>/packages/${packageName}/${
          packageName.includes('websites/shared') ? '' : 'src/'
        }redux/modules/$1`,
        '@/service': `<rootDir>/packages/${packageName}/service.config.js`,
        '^@/(.*)$': `<rootDir>/packages/${packageName}/${
          packageName.includes('websites/shared') ? '' : 'src/'
        }$1`,
      },
      // Enable for coverage collection / publish
      // collectCoverage: true,
      // collectCoverageFrom: [`**/*.js, jsx`],
      moduleDirectories: ['node_modules'],
      modulePaths: [
        `<rootDir>/packages/${packageName}/${
          packageName.includes('websites/shared') ? '' : 'src/'
        }`,
      ],
      testEnvironment: 'jsdom',
    };
  },
};
