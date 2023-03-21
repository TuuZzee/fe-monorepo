import '@testing-library/jest-dom';
import failOnConsole from 'jest-fail-on-console';

failOnConsole();

global.console = {
  ...console,
  error: jest.fn(),
  debug: jest.fn(),
};
