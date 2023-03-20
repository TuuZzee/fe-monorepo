import {
  Action,
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import ReduxLogger from 'redux-logger';

import { toastr } from '@namespace/web-shared/nextJs/nextRedux';

import todosApi from './api/todos';
import auth from './slices/auth';
import todos from './slices/todos';

const combinedReducer = combineReducers({
  toastr,
  todos,
  [todosApi.reducerPath]: todosApi.reducer,
  auth,
});

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction,
): CombinedState<ReturnType<typeof combinedReducer>> => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const makeStore = () =>
  configureStore({
    devTools: !isProd,
    reducer,
    middleware: getDefaultMiddleware =>
      isProd ? getDefaultMiddleware() : getDefaultMiddleware().concat(ReduxLogger),
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: !isProd });
