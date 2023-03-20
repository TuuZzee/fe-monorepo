const mockLocalStorage = (mockedData = {}) => {
  const mock = {
    getItem: jest.fn(() => mockedData),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = mock;
  Object.defineProperty(window, 'localStorage', {
    value: mock,
    writable: true,
  });
};

export default mockLocalStorage;
