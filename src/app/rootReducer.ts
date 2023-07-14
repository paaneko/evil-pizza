import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';
import { productSlice } from '@entities/productCard';
import { cartSlice } from '@entities/cart';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [productSlice.name]: productSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
});
