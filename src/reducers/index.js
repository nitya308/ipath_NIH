// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import TreatmentsReducer from './treatments-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  treatments: TreatmentsReducer,
  user: UserReducer,
});

export default rootReducer;