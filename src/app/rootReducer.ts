import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';
import { productSlice } from '@entities/product';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [productSlice.name]: productSlice.reducer,
});
