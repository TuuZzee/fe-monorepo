import { HYDRATE } from 'next-redux-wrapper';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const activeOnProdAndTestEnv =
  process.env.NEXT_PUBLIC_APP_ENV === 'production' || process.env.NODE_ENV === 'test';

// Note: disable dev-tools and logs in Production mode
const middlewares = activeOnProdAndTestEnv ? [ReduxThunk] : [ReduxThunk, ReduxLogger];
export const createWithMiddleware = activeOnProdAndTestEnv
  ? applyMiddleware(...middlewares)
  : composeWithDevTools(applyMiddleware(...middlewares));

export const nextReduxStore = (state = { tick: 'init' }, action = {}) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

export const toastr = toastrReducer;
