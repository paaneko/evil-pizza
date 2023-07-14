import { baseApi } from '@shared/api';
import { CART_TAG } from '@shared/model';
import { CartDto, CartResponseDto } from './types';
import { mapCart } from '../lib/mapCart';

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cart: build.query({
      query: () => ({
        url: `/cart/1`,
      }),
      providesTags: [CART_TAG],
      transformResponse: (res: CartResponseDto) => mapCart(res),
    }),
    updateCart: build.mutation<{}, { cart: CartDto }>({
      query: ({ cart }) => ({
        url: 'cart',
        method: 'PATCH',
        body: cart,
      }),
      invalidatesTags: [CART_TAG],
    }),
  }),
});

export const { useCartQuery, useUpdateCartMutation } = cartApi;
