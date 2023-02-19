import { configureStore } from '@reduxjs/toolkit';
import roboLookupSliceReducer from '../features/roboLookup/roboLookupSlice';

export const store = configureStore({
  reducer: {
    roboLookupSlice: roboLookupSliceReducer
  },
});
