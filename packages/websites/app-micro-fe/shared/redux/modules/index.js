import { combineReducers } from 'redux';

import { nextReduxStore, toastr } from '@namespace/web-shared/nextJs/nextRedux';

import todosShared from './todosShared';

const reducers = {
  next: nextReduxStore,
  toastr,
  todosShared,
};

export default combineReducers(reducers);
