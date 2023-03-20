const mockWindowLocation = (url = 'https://example.org') => {
  delete window.location;

  window.location = Object.assign(new URL(url), {
    ancestorOrigins: '',
    assign: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
  });
};

export default mockWindowLocation;
