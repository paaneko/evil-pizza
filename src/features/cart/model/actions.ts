import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '@entities/cart/api/cartApi';
import {
  addOneProductCartItem,
  invalidateVersion,
  mapCartDto,
} from '@entities/cart';
import { CartType } from '@entities/cart/model/types';
import { ProductCartItemType } from '@entities/productCartItem';

export const updateCartThunk = createAsyncThunk<
  void,
  CartType,
  { state: RootState }
>('cart/updateCartThunk', async (payload, { dispatch }) => {
  const cartDto = mapCartDto(payload);
  await dispatch(
    cartApi.endpoints.updateCart.initiate({ cart: cartDto })
  ).unwrap();
});

export const addOneCartItemThunk = createAsyncThunk<
  void,
  { hash: Hash; product: ProductCartItemType },
  { state: RootState }
>(
  'cart/addOneCartItemThunk',
  async ({ hash, product }, { dispatch, getState }) => {
    dispatch(addOneProductCartItem({ hash, item: product }));
    dispatch(invalidateVersion());
    dispatch(updateCartThunk(getState().cart));
  }
);
