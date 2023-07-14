import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CART_TAG } from '../model';

export const baseApi = createApi({
  tagTypes: [CART_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: 'api',
  endpoints: () => ({}),
});
