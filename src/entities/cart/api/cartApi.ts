import { baseApi } from '@shared/api';
import { CART_TAG } from '@shared/model';
import { CartDto, CartResponseDto, OrderResponseDto } from './types';
import { mapCart } from '../lib/mapCart';
import { CartType } from '../model/types';

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cart: build.query<CartType, number | null>({
      query: (id) => ({
        url: `cart/${id}`,
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
    createOrder: build.mutation<{}, { orderData: OrderResponseDto }>({
      query: ({ orderData }) => ({
        url: 'order',
        method: 'POST',
        body: orderData,
      }),
    }),
  }),
});

export const { useCartQuery, useUpdateCartMutation, useCreateOrderMutation } =
  cartApi;
