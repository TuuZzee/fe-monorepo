import { combineReducers } from 'redux';

import { nextReduxStore, toastr } from '@namespace/web-shared/nextJs/nextRedux';

import todoShared from './todosShared';

const reducers = {
  next: nextReduxStore,
  toastr,
  todoShared,
};

export default combineReducers(reducers);
