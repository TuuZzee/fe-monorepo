import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import { createWithMiddleware } from '@namespace/web-shared/nextJs/nextRedux';

import reducer from './modules';

export const makeStore = initialState => {
  return createStore(reducer, initialState, createWithMiddleware);
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
