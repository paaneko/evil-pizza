import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  DoughSpecId,
  GroupedProductType,
  ProductId,
  SizeSpecId,
} from './types';

type ProductStateType = {
  data: GroupedProductType[];
};

type ChangeProductSpec = {
  productId: ProductId;
  categoryIndex: number;
};

const initialState: ProductStateType = {
  data: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    /**
     * Attempting to use setFirstRender() action causes hydration errors
     * @see src/entities/model/PreloadProducts.tsx
     * TODO Find a replacement for this method that does not break hydration
     */
    setProducts(state, action: PayloadAction<GroupedProductType[]>) {
      /**
       * ⚠️ Probably Fake Info
       * The first use of immer in @redux/toolkit
       * -> state.data = action.payload
       * Here we are clearly mutating the state of the store and because of his immer,
       * can trace it and make it immutable
       */

      /**
       * And this time I construct a new state value yourself and return it
       */
      return {
        ...state,
        data: action.payload,
      };
    },
    changeProductSize(
      state,
      action: PayloadAction<ChangeProductSpec & { selectedSize: SizeSpecId }>
    ) {
      const { productId, categoryIndex, selectedSize } = action.payload;

      state.data[categoryIndex].products.forEach((product) => {
        if (product.id === productId) {
          product.selectedSizeId = selectedSize;
        }
      });
    },
    changeProductDough(
      state,
      action: PayloadAction<ChangeProductSpec & { selectedDough: DoughSpecId }>
    ) {
      const { productId, categoryIndex, selectedDough } = action.payload;

      state.data[categoryIndex].products.forEach((product) => {
        if (product.id === productId) {
          product.selectedDoughId = selectedDough;
        }
      });
    },
  },
});

export const { setProducts, changeProductSize, changeProductDough } =
  productSlice.actions;
