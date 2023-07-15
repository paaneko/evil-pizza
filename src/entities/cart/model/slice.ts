import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  CartItemType,
  ProductCartItemType,
} from '@entities/productCartItem';
import { CartType } from './types';
import { cartApi } from '../api/cartApi';

type CartStateType = CartType;

const initialState: CartStateType = {
  cartItems: {},
  cartTotalPrice: null,
  userCartId: 1,
  version: 'valid',
};

function createProductCartItem(product: ProductCartItemType): CartItemType {
  return {
    product,
    quantity: 1,
  };
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOneProductCartItem(
      state,
      action: PayloadAction<{ hash: string; item: ProductCartItemType }>
    ) {
      const productInCart = state.cartItems[action.payload.hash];

      if (productInCart) {
        state.cartItems[action.payload.hash].quantity += 1;
      } else {
        state.cartItems[action.payload.hash] = createProductCartItem(
          action.payload.item
        );
      }
    },
    removeOneProductCartItem(state, action: PayloadAction<{ hash: string }>) {
      const productInCart = state.cartItems[action.payload.hash];
      if (!productInCart) {
        return;
      }

      if (state.cartItems[action.payload.hash].quantity > 1) {
        state.cartItems[action.payload.hash].quantity -= 1;
      } else {
        delete state.cartItems[action.payload.hash];
      }
    },
    removeProductCartItem(state, action: PayloadAction<{ hash: string }>) {
      const productInCart = state.cartItems[action.payload.hash];
      if (!productInCart) {
        return;
      }

      delete state.cartItems[action.payload.hash];
    },
    clearCart(state) {
      state.cartItems = {};
      state.cartTotalPrice = 0;
    },
    invalidateVersion: (state) => {
      state.version = 'invalid';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.cart.matchFulfilled,
      (state: CartStateType, { payload }) => {
        if (state.version === 'invalid') {
          state.cartItems = payload.cartItems;
          state.cartTotalPrice = payload.cartTotalPrice;
          state.userCartId = payload.userCartId;
          state.version = 'valid';
        }
      }
    );
  },
});

export const {
  addOneProductCartItem,
  removeOneProductCartItem,
  removeProductCartItem,
  clearCart,
  invalidateVersion,
} = cartSlice.actions;
