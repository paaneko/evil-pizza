import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';
import { productSlice } from '@features/product/adjustProduct';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [productSlice.name]: productSlice.reducer,
});
