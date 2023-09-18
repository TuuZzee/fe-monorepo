import failOnConsole from 'jest-fail-on-console';

failOnConsole();

const debug = jest.fn();
const error = jest.fn();

global.console = { ...console, error, debug };
