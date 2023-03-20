import localforage from 'localforage';

import service from '../service.config';

const instance = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: service.serviceName,
});

export default instance;
