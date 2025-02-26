import { combineReducers } from 'redux';
import authReducer from './authReducer';
import switReducer from './switReducer';

const rootReducer = combineReducers({
  authReducer,
  switReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// https://react.vlpt.us/using-typescript/05-ts-redux.html
