// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

import TreatmentsReducer from './treatments-reducer';

const rootReducer = combineReducers({
  treatments: TreatmentsReducer,
});

export default rootReducer;