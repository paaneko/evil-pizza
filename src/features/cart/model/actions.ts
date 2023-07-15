import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '@entities/cart/api/cartApi';
import {
  addOneProductCartItem,
  CartDto,
  invalidateVersion,
  mapCartDto,
} from '@entities/cart';
import { ProductCartItemType } from '@entities/productCartItem';

export const updateCartThunk = createAsyncThunk<
  void,
  CartDto,
  { state: RootState }
>('cart/updateCartThunk', async (payload, { dispatch }) => {
  await dispatch(
    cartApi.endpoints.updateCart.initiate({ cart: payload })
  ).unwrap();
});

const syncCart = (dispatch: AppDispatch, state: RootState) => {
  const cartDto = mapCartDto(state.cart);
  return dispatch(updateCartThunk(cartDto));
};

export const addOneCartItemThunk = createAsyncThunk<
  void,
  { hash: Hash; product: ProductCartItemType },
  { state: RootState }
>(
  'cart/addOneCartItemThunk',
  async ({ hash, product }, { dispatch, getState }) => {
    dispatch(addOneProductCartItem({ hash, item: product }));
    dispatch(invalidateVersion());
    syncCart(dispatch as AppDispatch, getState());
  }
);