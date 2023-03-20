const mockMutationObserver = () => {
  global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
  };
};

export default mockMutationObserver;
