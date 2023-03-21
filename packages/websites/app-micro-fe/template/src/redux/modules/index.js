import { combineReducers } from 'redux';

import { nextReduxStore, toastr } from '@namespace/web-shared/nextJs/nextRedux';

import todosTemplate from './todosTemplate';

const reducers = {
  toastr,
  todosTemplate,
  next: nextReduxStore,
};

export default combineReducers(reducers);
