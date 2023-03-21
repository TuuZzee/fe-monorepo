import { combineReducers } from 'redux';

import todosShared from '@namespace/web-app-micro-fe-shared/redux/modules/todosShared';

import todosTemplate from '@namespace/web-app-micro-fe-template/src/redux/modules/todosTemplate';

import { nextReduxStore, toastr } from '@namespace/web-shared/nextJs/nextRedux';

import posts from './posts';

const reducers = {
  next: nextReduxStore,
  posts,
  toastr,
  todosShared,
  todosTemplate,
};

export default combineReducers(reducers);
