import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartApi } from '@entities/cart/api/cartApi';
import {
  addOneProductCartItem,
  CartDto,
  invalidateVersion,
  mapCartDto,
  removeOneProductCartItem,
  removeProductCartItem,
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

// TODO add debounce to prevent multiple cart mutations
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

export const removeOneCartItemThunk = createAsyncThunk<
  void,
  { hash: Hash },
  { state: RootState }
>('cart/addOneCartItemThunk', async ({ hash }, { dispatch, getState }) => {
  dispatch(removeOneProductCartItem({ hash }));
  dispatch(invalidateVersion());
  syncCart(dispatch as AppDispatch, getState());
});

export const removeProductCartItemThunk = createAsyncThunk<
  void,
  { hash: Hash },
  { state: RootState }
>('cart/addOneCartItemThunk', async ({ hash }, { dispatch, getState }) => {
  dispatch(removeProductCartItem({ hash }));
  dispatch(invalidateVersion());
  syncCart(dispatch as AppDispatch, getState());
});
